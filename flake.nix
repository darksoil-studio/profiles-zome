{
  description = "Template for Holochain app development";

  inputs = {
    nixpkgs.follows = "holonix/nixpkgs";
    holonix.url = "github:holochain/holonix/main-0.5";

    holochain-utils.url = "github:darksoil-studio/holochain-utils/main-0.5";
    holochain-utils.inputs.holonix.follows = "holonix";

    linked-devices-zome.url =
      "github:darksoil-studio/linked-devices-zome/main-0.5";
    linked-devices-zome.inputs.holochain-utils.follows = "holochain-utils";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-ci.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-ci.cachix.org-1:5IUSkZc0aoRS53rfkvH9Kid40NpyjwCMCzwRTXy+QN8="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs@{ ... }:
    inputs.holonix.inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        ./crates/coordinator/zome.nix
        ./crates/integrity/zome.nix
        ./workdir/dna.nix
        ./workdir/happ.nix
        inputs.holochain-utils.outputs.flakeModules.builders
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, lib, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.holochain-utils.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];
          packages = [
            inputs'.holochain-utils.packages.holochain
            inputs'.holochain-utils.packages.hc-scaffold-zome
            inputs'.holochain-utils.packages.hc-pilot
            inputs'.holochain-utils.packages.hc-playground
          ];
        };
        devShells.npm-ci = inputs'.holochain-utils.devShells.synchronized-pnpm;

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.holochain-utils.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "profiles-zome \
                --integrity-zome-name profiles_integrity \
                --coordinator-zome-name profiles \
                --remote-zome-git-url github:darksoil-studio/profiles-zome \
                --remote-zome-git-branch main-0.5 \
                --remote-npm-package-name @darksoil-studio/profiles-zome \
                --context-element profiles-context \
                --context-element-import @darksoil-studio/profiles-zome/dist/elements/profiles-context.js"
          '';
        };
      };
    };
}
