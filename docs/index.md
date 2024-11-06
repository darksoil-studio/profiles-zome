---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "@darksoil-studio/profiles-zome"
  text: "Profiles zome for hApps"
  tagline: Plug-and-play profile management for your hApps
  actions:
    - theme: brand
      text: Setup
      link: /setup.md
    - theme: alt
      text: Integrity Zome API
      link: "/backend/doc/hc_zome_profiles_integrity/index.html"
      target: "_blank"
    - theme: alt
      text: Coordinator Zome API
      link: "/backend/doc/hc_zome_profiles_coordinator/index.html"
      target: "_blank"
    - theme: alt
      text: Frontend API
      link: "/elements/profile-prompt.md"
      target: "_blank"

features:
  - title: UI + Backend Zome
    details: Following the TNESH guidelines
    link: https://darksoil.studio/tnesh-stack
  - title: Manage your profile
    details: Create and update your profile
  - title: Search by nickname
    details: Form elements for entries with a field of type `AgentPubKey`
  - title: Configurable profile fields
    details: Customize the fields that you need in your hApp
---
