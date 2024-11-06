{ inputs, ... }:

{
  perSystem = { inputs', config, pkgs, system, lib, options, self', ... }: {
    packages.profiles = inputs.tnesh-stack.outputs.builders.${system}.rustZome {
      workspacePath = inputs.self.outPath;
      crateCargoToml = ./Cargo.toml;
    };
  };
}

