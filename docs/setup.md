# Setup

## Template Setup (recommended)

**If you are starting a new application from scratch**, you can use the [TNESH stack template](https://darksoil.studio/tnesh-stack/scaffolding-a-happ) to automatically get the profiles module in your application.

Run this and follow its instructions:

```bash
nix run github:darksoil-studio/tnesh-stack#hc-scaffold-app -- web-app
```

## Manual Setup

> [!WARNING]
> This guide assumes that you have scaffolded a hApp with the [TNESH stack template](https://darksoil.studio/tnesh-stack/scaffolding-a-happ).

1. In your `flake.nix`, add the `profiles-zome` repository to the inputs of your flake:

```nix
{
  description = "Template for Holochain app development";

  inputs = {
    holonix.url = "github:holochain/holonix/main-0.3";

    nixpkgs.follows = "holonix/nixpkgs";
    flake-parts.follows = "holonix/flake-parts";

    tnesh-stack.url = "github:darksoil-studio/tnesh-stack/main-0.3";

    # Holochain dependencies (zomes, DNAs and hApps)
    profiles-zome.url = "github:darksoil-studio/profiles-zome/main-0.3"; # [!code ++]
    # Add more repositories here...
  };

  outputs = inputs:
    inputs.flake-parts.lib.mkFlake
      {
        inherit inputs;
      }
      {
        imports = [
          ./happ.nix
        ];
      
        systems = builtins.attrNames inputs.holonix.devShells;
        perSystem =
          { inputs'
          , config
          , pkgs
          , system
          , ...
          }: {
            devShells.default = pkgs.mkShell {
              inputsFrom = [ 
                inputs'.holonix.devShells.default 
                inputs'.tnesh-stack.devShells.synchronized-pnpm
              ];

              packages = [
                inputs'.tnesh-stack.packages.hc-scaffold-app
              ];
            };
          };
      };
}
```

2. Go in to the `dna.yaml` for the DNA in which you want to scaffold this zome, and add the `profiles` and `profiles_integrity` zomes to it:

```yaml
---
manifest_version: "1"
name: my_dna
integrity:
  network_seed: ~
  properties: ~
  origin_time: 1711032942640745
  zomes:
    - name: profiles_integrity # [!code ++]
coordinator:
  zomes:
    - name: profiles # [!code ++]
      dependencies: # [!code ++]
        - name: profiles_integrity # [!code ++]
```

3.a. **If you already have a `dna.nix` in your DNA**, you don't need to do anything else for the zomes to be included in your DNA.

3.b. **If you don't have a `dna.nix` already**, create one with this content in the top level folder for your DNA (should contain the `zomes` and `workdir` folder):

```
├── dna.nix # [!code ++]
├── workdir
│  ├── dna.yaml
├── zomes
   ├── coordinator
   ├── integrity
```

```nix
# dna.nix
{ inputs, ... }:

{
  # Import all ./zomes/coordinator/*/zome.nix and ./zomes/integrity/*/zome.nix  
  imports = (
      map (m: "${./.}/zomes/coordinator/${m}/zome.nix")
        (builtins.attrNames (builtins.readDir ./zomes/coordinator))
    )
    ++ 
    (
      map (m: "${./.}/zomes/integrity/${m}/zome.nix")
        (builtins.attrNames (builtins.readDir ./zomes/integrity))
    )
  ;
  perSystem =
    { inputs'
    , self'
    , system
    , ...
    }: {
  	  packages.MY_DNA = inputs.tnesh-stack.outputs.builders.${system}.dna {
        dnaManifest = ./workdir/dna.yaml; # Point to your DNA manifest
        zomes = {
          profiles_integrity = inputs'.profiles-zome.packages.profiles_integrity;
        };
      };
  	};
}
```

Now you should be able build your dna with `nix build .#MY_DNA` from the top level of your repository.

4. Install the UI for this module and its necessary dependencies with:

```bash
pnpm install github:darksoil-studio/profiles-zome/main-0.3?path:ui
```

> [!WARNING]
> Careful! If you are using PNPM workspaces (which is the case for the apps generated with the TNESH stack scaffolding tool) you need to specify which workspace you want to install those dependencies to, and run the command from the root folder of the repository. In the case of the apps generated with the TNESH stack scaffolding tool:
>
>```bash
>pnpm -F ui install @darksoil-studio/profiles-zome/main-0.3?path:ui
>```

5. Connect to Holochain with the `AppClient`, and create the `ProfilesStore` with it:

```js
import { ProfilesStore, ProfilesClient } from "@darksoil-studio/profiles-zome";
import { AppWebsocket, AppWebsocket } from "@holochain/client";

async function setupProfilesStore() {
  const client = await AppWebsocket.connect('MY_APP_ID');

  // TODO: change "MY_CELL_ROLE" for the roleId that you can find in your "happ.yaml"
  const profilesStore = new ProfilesStore(new ProfilesClient(client, '<MY_CELL_ROLE>'), {
    avatarMode: "avatar-optional",
  });
  return profilesStore;
}
```

6. Import the `<profiles-context>` element and add it to your html **wrapping the whole section of your page in which you are going to be placing** the other elements from `@darksoil-studio/profiles-zome`:

```js
// This can be placed in the index.js, at the top level of your web-app.
import "@darksoil-studio/profiles-zome/dist/elements/profiles-context.js";
```

And then add the `<profiles-context>` element in your html:

```html
<profiles-context>
  <!-- Replace <create-profile> with the contents of your application -->
  <create-profile></create-profile>
</profiles-context>
```

7. Attach the `profilesStore` to the `<profiles-context>` element:

You need to set the `store` property of it to your already instantiated `ProfilesStore` object:

- If you **are using some JS framework**:

::: code-group
```html [React]
<profiles-context store={profilesStore}><!-- ... --></profiles-context>
```

```html [Angular]
<profiles-context [store]="profilesStore"><!-- ... --></profiles-context>
```

```html [Vue]
<profiles-context :store="profilesStore"><!-- ... --></profiles-context>
```

```html [Svelte]
<profiles-context store={profilesStore}><!-- ... --></profiles-context>
```

```html [Lit]
<profiles-context .store=${profilesStore}><!-- ... --></profiles-context>
```
:::

OR

- If you **are not using any framework**:

```js
const contextElement = document.querySelector("profiles-context");
contextElement.store = store;
```

> [!NOTE]
> You can read more about the context pattern [here](https://darksoil.studio/tnesh-stack/guides/custom-elements#context).

> [!NOTE]
> Go to [this page](https://darksoil.studio/tnesh-stack/integrating-with-frameworks/), to see examples on integrating this module in each javascript framework.

8. [Choose which elements you need](./elements/profile-prompt.md) and import them like this:

```js
import "@darksoil-studio/profiles-zome/dist/elements/profiles-context.js";
```

And then they are ready be used inside the `<profiles-context>` just like any other HTML tag.

This will define all the elements from this module in the global `CustomElementsRegistry`. You can read more about Custom Elements [here](https://developers.google.com/web/fundamentals/web-components/customelements).

9. The UI package for the profiles zome uses [shoelace](https://shoelace.style) as its component library. Add your preferred shoelace theme in your `<head>` tag:

```html
<head>
  <link rel="stylesheet" href="path/to/shoelace/dist/themes/light.css" />
</head>
```

or in JS:

```js
import '@shoelace-style/shoelace/dist/themes/light.css';
```

You can read more about how to initialize the shoelace theme [here](https://shoelace.style/getting-started/themes?id=activating-themes).

---

That's it! You have now integrated both the backend and the frontend for the profiles module.

# Example

You can see a full working example of the UI working in [here](https://github.com/darksoil-studio/profiles-zome/blob/main/ui/demo/index.html).

