{
  description = "Template for Holochain app development";

  inputs = {
    nixpkgs.follows = "holonix/nixpkgs";
    holonix.url = "github:holochain/holonix/main-0.3";

    tnesh-stack.url = "github:darksoil-studio/tnesh-stack/main-0.3";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard/main-0.3";
    playground.url = "github:darksoil-studio/holochain-playground";

    linked-devices-zome.url =
      "github:darksoil-studio/linked-devices-zome/main-0.3";
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
        inputs.tnesh-stack.outputs.flakeModules.builders
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, lib, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.tnesh-stack.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];
          packages = [
            inputs'.p2p-shipyard.packages.hc-pilot
            inputs'.playground.packages.hc-playground
          ];
        };

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.tnesh-stack.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "profiles-zome \
                --integrity-zome-name profiles_integrity \
                --coordinator-zome-name profiles \
                --remote-zome-git-url github:darksoil-studio/profiles-zome \
                --remote-zome-git-branch main-0.3 \
                --remote-npm-package-name @darksoil-studio/profiles-zome \
                --remote-npm-package-path ui \
                --context-element profiles-context\
                --context-element-import @darksoil-studio/profiles-zome/dist/elements/profiles-context.js"
          '';
        };
      };
    };
}
