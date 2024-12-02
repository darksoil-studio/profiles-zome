# `profile-prompt`

If the user has not created a profile, it will show the `create-profile` element. If they have, it will show the contents of the default slot for the `profile-prompt` element.

Useful as the top level component of your app, wrapping all the other elements.

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `profile-prompt` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/profiles-zome/dist/elements/profile-prompt.js'
```

2. Use it in the html side of your web-app like this:

```html
<profile-prompt>
  <div slot="hero">
    Welcome to my app! Create a profile to begin.
  </div>
  <div>
    <h1>This is all the other content for my app</h1>
  </div>
</profile-prompt>
```

> [!WARNING]
> Like all the elements in this module, `<profile-prompt>` needs to be placed inside an initialized `<profiles-context>`.

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
import { decodeHashFromBase64 } from '@holochain/client';
import { render, html } from 'lit';

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('../../ui/src/elements/profiles-context.ts');
  await import('../../ui/src/elements/profile-prompt.ts');

  const profiles = await demoProfiles();
  const mock = new ProfilesZomeMock(
    profiles,
    decodeHashFromBase64("uhCAk8OKb2hznzG023xxh_vR3Q7Y4IEOAo4B0QN7ZhbGYeww")
  );
  const client = new ProfilesClient(mock, "lobby");
  const store = new ProfilesStore(client);
    
  render(html`
    <profiles-context .store=${store}>
      <api-demo src="custom-elements.json" only="profile-prompt" exclude-knobs="store">
        <template data-element="profile-prompt" data-target="slot">
          <div slot="hero" style="margin-bottom: 24px; font-size: 24px">Welcome to my app! Create a profile to begin.</div>
          <div>This is where the content for the application should go.</div>
        </template>
      </api-demo>
    </profiles-context>
    `, document.querySelector('element-demo')
  );
});

</script>

## API Reference

`profile-prompt` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="profile-prompt">
</api-docs>
