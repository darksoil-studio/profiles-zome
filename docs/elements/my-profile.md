# `<my-profile>`

Shows the profile for the current user. It also allows the current user to edit their profile.

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `my-profile` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/profiles-zome/dist/elements/my-profile.js'
```

2. Use it in the html side of your web-app like this:

```html
<my-profile>
</my-profile>
```

> [!WARNING]
> Like all the elements in this module, `<my-profile>` needs to be placed inside an initialized `<profiles-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from 'vue'
import {
  ProfilesZomeMock,
  demoProfiles,
} from "../../ui/src/mocks.ts";
import { ProfilesStore } from "../../ui/src/profiles-store.ts";
import { ProfilesClient } from "../../ui/src/profiles-client.ts";
import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { render } from 'lit';
import { html, unsafeStatic } from "lit/static-html.js";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('../../ui/src/elements/profiles-context.ts');
  await import('../../ui/src/elements/my-profile.ts');

  const profiles = await demoProfiles();
  const myPubKey = Array.from(profiles.keys())[0];
  const mock = new ProfilesZomeMock(profiles, myPubKey);
  const client = new ProfilesClient(mock, "lobby");
  const store = new ProfilesStore(client);
    
  render(html`
    <profiles-context .store=${store}>
      <api-demo src="custom-elements.json" only="my-profile" exclude-knobs="store">
        <template data-element="my-profile" data-target="host">
          <my-profile>
          </my-profile>
        </template>
      </api-demo>
    </profiles-context>`,
    document.querySelector('element-demo')
  );
});

</script>

## API Reference

`my-profile` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="my-profile">
</api-docs>
