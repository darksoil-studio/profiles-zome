# ProfilesStore

The `ProfilesStore` is a typescript class that contains [`async-signals`](https://npmjs.com/packages/async-signals), which you can watch to get reactive updates in your elements.

```js
import { ProfilesStore, ProfilesClient } from "@darksoil-studio/profiles-zome";

const config = {
  avatarMode: "identicon",

  // Custom app level profile fields
  additionalFields: [
    {
      name: "location",
      label: "Location",
      required: true, 
    },
    {
      name: "bio",
      label: "Bio",
      required: false,
    }
  ], 
};
const store = new ProfilesStore(new ProfilesClient(appClient, 'my-role-name'), config);
```

> Learn how to setup the `AppClient` object [here](https://www.npmjs.com/package/@holochain/client).

The config for the `ProfilesStore` has these options:

```ts
export interface ProfilesConfig {
  avatarMode: "identicon" | "avatar-required" | "avatar-optional"; // default: 'avatar-optional'
  additionalFields: FieldConfig[]; // default: []
  minNicknameLength: number; // default: 3
}
```

The `FieldConfig` has these options:

```ts
export interface FieldConfig {
  name: string,
  label: string,
  required: boolean,
}
```

Learn more about the stores and how to integrate them in different frameworks [here](https://darksoil.studio/tnesh-stack/guides/signals#Stores).
