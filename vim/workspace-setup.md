# Step by step guide to setup a new work space

## Install fuzzy finder

```bash
brew install fzf
```

Install key bindings and fuzzy completion:

```bash
$(brew --prefix)/opt/fzf/install
```

## Install fd

```bash
brew install fd
```

## Create alias for searching projects

Add following to `~/.zshrc`:

```bash
alias fp='cd $(fd . --type d --max-depth 1 /path/to/projects | fzf)'
```
