{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = {
    nixpkgs,
    rust-overlay,
    ...
  }: let
    system = "aarch64-darwin";
    pkgs = import nixpkgs {inherit system overlays;};
    overlays = [(import rust-overlay)];
  in {
    devShells.${system} = {
      default = with pkgs;
        mkShell {
          buildInputs = [
            nodejs
            nodePackages.pnpm
            nodePackages.typescript
            watchexec
          ];
        };
    };
  };
}
