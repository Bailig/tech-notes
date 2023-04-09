# Step by step guide to setup Astro Nvim on MacOS

## Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install Neovim

```bash
brew install neovim
```

## Install Astro Nvim

```bash
git clone --depth 1 https://github.com/AstroNvim/AstroNvim ~/.config/nvim
```

And then open Neovim

```bash
nvim
```

## Clone Astro Nvim Config

```bash
git clone --depth 1 git@github.com:Bailig/astronvim-config.git ~/.config/nvim/lua/user
```

## Install Nerd Fonts

```bash
brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

## Install iTerm2

Go to https://iterm2.com/index.html and download the latest version.

## Set up iTerm2

1. Go to Preferences > Profiles > Text
1. Set Font to Hack Nerd Font
1. Set Left Option Key to Meta
1. Set Right Option Key to Meta
