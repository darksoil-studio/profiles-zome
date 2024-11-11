# `<profile-detail>`

Shows all the fields of the profile for the given agent or profile hash.

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `profile-detail` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/profiles-zome/dist/elements/profile-detail.js'
```

2. Use it in the html side of your web-app like this:

```html
<profile-detail .agentPubKey=${agent}>
</profile-detail>
```

OR, if you have a profile hash instead of the agent pub key:

```html
<profile-detail .profileHash=${profileHash}>
</profile-detail>
```

> [!WARNING]
> Like all the elements in this module, `<profile-detail>` needs to be placed inside an initialized `<profiles-context>`.

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
  await import('../../ui/src/elements/profile-detail.ts');

  const profiles = await demoProfiles();
  const myPubKey = Array.from(profiles.keys())[0];
  const mock = new ProfilesZomeMock(profiles, myPubKey);
  const client = new ProfilesClient(mock, "lobby");
  const store = new ProfilesStore(client);
    
  render(html`
    <profiles-context .store=${store}>
      <api-demo src="custom-elements.json" only="profile-detail" exclude-knobs="store">
        <template data-element="profile-detail" data-target="host">
          <profile-detail agent-pub-key="${unsafeStatic(encodeHashToBase64(client.client.myPubKey))}">
          </profile-detail>
        </template>
      </api-demo>
    </profiles-context>`,
    document.querySelector('element-demo')
  );
});

</script>

## API Reference

`profile-detail` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="profile-detail">
</api-docs>
