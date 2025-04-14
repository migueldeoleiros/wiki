---
title: "AI code features in emacs"
date: 2025-02-17T00:00:00+01:00
lastmod: 2025-04-08T00:00:00+02:00
tags: ["tech", "emacs"]
draft: false
---

## [codeium.el](https://github.com/Exafunction/codeium.el) {#codeium-dot-el}

This plugin implements "support" for [codeium](https://codeium.com/), it's supposed to be officially maintained, but the features are lacking.
As of writing this the only feature is code completion, no code actions or chat.
Issue [#119](https://github.com/Exafunction/codeium.el/issues/119) in their repo explains the problem with the plugin in more detail.

Something that annoys me specially is the lack of a mode to activate/deactivate it, it's either on all the time or started with a hook.

Regardless, this is pretty easy to set up with [straight.el](https://github.com/radian-software/straight.el) and is free of charge.


## [aider.el](https://github.com/tninja/aider.el) {#aider-dot-el}

The aider.el package offers an simple UI to communicate with [Aider](https://aider.chat/) in Emacs.
Aider allows you to use many models, with [OpenRouter](https://openrouter.ai/) there even are a couple of free models to use, just need to create an account and provide the API key.
The configuration is pretty straight forward:

```emacs-lisp
(use-package aider
  :straight (:host github :repo "tninja/aider.el" :files ("aider.el"))
  :config
  ;; For claude-3-5-sonnet
  ;; (setq aider-args '("--model" "anthropic/claude-3-5-sonnet-20241022"))
  ;; (setenv "ANTHROPIC_API_KEY" anthropic-api-key)
  ;; Or chatgpt model
  ;; (setq aider-args '("--model" "o3-mini"))
  ;; (setenv "OPENAI_API_KEY" <your-openai-api-key>)
  ;; Or use your personal config file
  (setq aider-args `("--config" ,(expand-file-name "~/.aider.conf.yml")))
  ;; ;;
  ;; Optional: Set a key binding for the transient menu
  (global-set-key (kbd "C-c a") 'aider-transient-menu))
```

I opted to just add the config file, since it's the most versatile

`aider-transient-menu` will open a nice manu with a bunch of option for communicating with the AI.
I found the explain function at `C-c a e` pretty useful for understanding foreign codebases.

Syntax highlighting in the aider buffer is not great at the moment, but it something that they seem to be actively working on.

A downside in my opinion is the littering you get in your different repos, it creates a history file and cache in each one. At least it prompts you to add them to the `.gitignore`, which makes it a bit more tolerable.


## [copilot.el](https://github.com/copilot-emacs/copilot.el) {#copilot-dot-el}

This is probably the best current package for inline code completion in emacs, it's not official from Microsoft, but it should provide a similar experience to the Nvim plugin which they support.
The downside is that you'll need a [Copilot](https://github.com/features/copilot?utm_id=github-copilot&wt.mc_id=developermscom) license.

Set up is also fairly simple:

```emacs-lisp
(use-package copilot
  :straight (:host github :repo "copilot-emacs/copilot.el" :files ("*.el"))
  :ensure t
  :bind (:map copilot-completion-map
              ("<tab>" . copilot-accept-completion)
                ("TAB" . copilot-accept-completion))
)
```

Then install the copilot server with `copilot-install-server`
And login to Copilot with `copilot-login`. You can also check the status with `copilot-diagnose` (NotAuthorized means you don't have a valid subscription).


## [copilot-chat.el](https://github.com/chep/copilot-chat.el) {#copilot-chat-dot-el}

To add the missing features from [copilot.el](https://github.com/copilot-emacs/copilot.el) other than the completion, we got this other package.
It's features are somewhat similar to the [aider.el](https://github.com/tninja/aider.el), but doesn't have insert capabilities.
It also has a transient menu with `copilot-chat-transient` which is very nice.
It provides a couple of frontends for syntax highlighting which is a bit nicer than the aider solution.
`shell-maker` seems to be the more user friendly option, but whit `org-mode` you can also eval regions, and it's easier to integrate with my note taking workflow.

Of course you'll need a copilot license for this too, and it will use the microsoft models.
Installation is also fairly simple:

```emacs-lisp
(use-package copilot-chat
  :straight (:host github :repo "chep/copilot-chat.el" :files ("*.el"))
  :ensure t
  :config
  (setq copilot-chat-frontend 'org)
  :after (request org markdown-mode))
```

_Compilation takes a bit of time, so don't panic_


## [ellama](https://github.com/s-kostyaev/ellama) {#ellama}

This seems to be a more general solution for AI use, but it also add some code specific features.
The configuration is a bit more complex, but it's well explained in their [GitHub](https://github.com/s-kostyaev/ellama?tab=readme-ov-file#installation).
I can't comment on it since I haven't tried it extensively, but it's probably the best option if you self-host some AI model.
