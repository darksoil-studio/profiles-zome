# Setup

> [!WARNING]
> This guide assumes that you have scaffolded a hApp with the [TNESH stack template](https://darksoil.studio/tnesh-stack/scaffolding-a-happ).

Run this to scaffold this zome in your hApp:

```bash
nix run github:darksoil-studio/profiles-zome#scaffold
```

This will do the following:
  - Add the flake input for that repository in your `flake.nix`.
  - Add the appropriate zome packages to the `dna.nix` that you select.
  - Add the UI package for @darksoil-studio/profiles-zome as a dependency of your UI package.
  - Add the `<profiles-context>` element at the top level of your application.

> [!NOTE]
> You can read more about the context pattern [here](https://darksoil.studio/tnesh-stack/guides/custom-elements#context).

That's it! You have now integrated the `profiles` coordinator and integrity zomes and their UI into your app!

Now, [choose which elements you need](/elements/profile-prompt.md) and import them like this:

```js
import "@darksoil-studio/profiles-zome/dist/elements/profiles-prompt.js";
```

And then they are ready be used inside the `<profiles-context>` just like any other HTML tag. 

> [!NOTE]
> Importing the elements from the UI package will define them in the global `CustomElementsRegistry`, which makes them available to be used like any normal HTML tag. You can read more about custom elements [here](https://darksoil.studio/tnesh-stack/guides/custom-elements).

# Example

You can see a full working example of the UI working in [here](https://github.com/darksoil-studio/profiles-zome/blob/main/ui/demo/index.html).

