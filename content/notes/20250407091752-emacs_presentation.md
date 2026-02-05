---
title: "emacs presentation"
date: 2025-04-07T00:00:00+02:00
lastmod: 2026-02-05T00:00:00+01:00
draft: false
---

```emacs-lisp
;;; init.el --- Minimal Emacs Config for GPUL Talk  -*- lexical-binding: t; -*-

;;; Commentary:
;; Built from the talk's org-mode notes via org-babel-tangle.

;;; Code:
```


## Qué es Emacs? {#qué-es-emacs}

**Emacs es un editor de texto extensible, personalizable, auto-documentado y en tiempo real**

Pero, qué significa esto en la práctica?
Emacs no es solo un editor: es una máquina Lisp con interfaz gráfica que puedes moldear a tu gusto.

Todo en Emacs es:

-   Un comando
-   Un buffer
-   Una función


## Por qué la gente usa Emacs {#por-qué-la-gente-usa-emacs}

-   **Longevidad**: configuraciones de hace décadas siguen funcionando
-   **Hackabilidad**: todo es personalizable
-   **Un entorno para todo**: edición, notas, git, archivos, terminal...


## El modelo daemon/client {#el-modelo-daemon-client}

Emacs puede ejecutarse como un daemon en segundo plano. Te conectas a él con `emacsclient`:

```shell
emacs --daemon          # Iniciar el daemon
emacsclient -c          # Abrir una nueva ventana gráfica conectada al daemon
emacsclient -t          # Abrir en terminal
emacsclient FILE        # Abrir un archivo en una ventana existente
```

-   **Inicio instantáneo**: el daemon ya está corriendo, las ventanas abren al momento
-   **Estado compartido**: todas las ventanas comparten buffers, historial, etc.
-   **Sesión persistente**: cierras una ventana, tu trabajo sigue ahí

Puedes añadir `emacs --daemon` al inicio del sistema y usar `emacsclient` como `$EDITOR`.


## Cómo hablar con Emacs {#cómo-hablar-con-emacs}

Las teclas invocan funciones, no acciones.
`M-x` es el prompt para llamar funciones.
Los atajos de teclado son simplemente accesos directos a funciones.

"No estás pulsando teclas. Estás invocando funciones."

| Tecla | Comando                  | Descripción                         |
|-------|--------------------------|-------------------------------------|
| `M-x` | execute-extended-command | Llamar cualquier función por nombre |
| `C-g` | keyboard-quit            | Cancelar / pánico universal         |
| `C-h` | help-command             | Sistema de ayuda                    |
| `C-x` | (prefijo)                | Comandos globales del sistema       |


## El sistema de ayuda {#el-sistema-de-ayuda}

| Tecla   | Comando           | Descripción                                |
|---------|-------------------|--------------------------------------------|
| `C-h k` | describe-key      | ¿Qué hace esta tecla?                      |
| `C-h f` | describe-function | Documentación de una función               |
| `C-h v` | describe-variable | Documentación de una variable              |
| `C-h m` | describe-mode     | ¿En qué modo estoy? ¿Qué teclas funcionan? |
| `C-h b` | describe-bindings | Todos los atajos del buffer actual         |
| `C-h a` | apropos-command   | Buscar comandos por palabra clave          |

"Emacs es auto-documentado. Solo tienes que aprender a hacerle preguntas."


## Buffers, ventanas y frames {#buffers-ventanas-y-frames}

| Tecla   | Comando              | Descripción             |
|---------|----------------------|-------------------------|
| `C-x b` | switch-to-buffer     | Cambiar de buffer       |
| `C-x k` | kill-buffer          | Cerrar buffer           |
| `C-x 2` | split-window-below   | Dividir horizontalmente |
| `C-x 3` | split-window-right   | Dividir verticalmente   |
| `C-x 0` | delete-window        | Cerrar ventana actual   |
| `C-x 1` | delete-other-windows | Quedarse solo con esta  |
| `C-x o` | other-window         | Moverse a la siguiente  |

Emacs no tiene pestañas. Tiene buffers y vistas de buffers.


## Dónde va el código Lisp? {#dónde-va-el-código-lisp}

Tu archivo principal de configuración es `~/.emacs.d/init.el`, que se carga al iniciar Emacs.

```shell
~/.emacs.d/init.el       # Configuración principal
~/.emacs.d/early-init.el # Se ejecuta antes de init.el (para UI, GC, etc.)
```

No hace falta reiniciar Emacs. Puedes ejecutar código Lisp en vivo:

| Tecla/Comando     | Qué hace                              |
|-------------------|---------------------------------------|
| `C-x C-e`         | Evaluar expresión antes del cursor    |
| `M-x eval-buffer` | Evaluar todo el buffer                |
| `M-x eval-region` | Evaluar la región seleccionada        |
| `M-:`             | Evaluar expresión en el minibuffer    |
| `M-x ielm`        | Modo interactivo de Emacs Lisp (REPL) |


## .dir-locals.el - Configuración por directorio {#dot-dir-locals-dot-el-configuración-por-directorio}

Coloca un archivo `.dir-locals.el` en cualquier directorio para establecer variables solo para ese proyecto:

```emacs-lisp

;; .dir-locals.el
((nil . ((indent-tabs-mode . nil)
         (fill-column . 80)))
 (python-mode . ((python-indent-offset . 2))))
```

Útil para: indentación por proyecto, estilos de código diferentes por repositorio, estándares de equipo.


## Lo básico de Lisp {#lo-básico-de-lisp}

```emacs-lisp
;; Esto es un comentario

;; Establecer una variable
(setq nombre-de-variable valor)

;; Llamar a una función
(nombre-de-función arg1 arg2)

;; Una lista (estructura de datos)
'(item1 item2 item3)

;; Definir una función
(defun mi-función (arg)
  "Cadena de documentación."
  (hacer-algo arg))
```


### setq vs modos {#setq-vs-modos}

```emacs-lisp
;; setq establece una variable
(setq inhibit-startup-message t)

;; Un modo es una función, llámala con -1 para desactivar, 1 para activar
(tool-bar-mode -1)
(global-display-line-numbers-mode 1)
```


## Primera configuración: Limpiar la interfaz {#primera-configuración-limpiar-la-interfaz}

Empezamos con un Emacs limpio (`emacs -q`) y quitamos el ruido visual:

```emacs-lisp
;; Remove startup screen
(setq inhibit-startup-message t)

;; Remove UI elements
(scroll-bar-mode -1)        ; No scrollbar
(tool-bar-mode -1)          ; No toolbar
(tooltip-mode -1)           ; No tooltips
(menu-bar-mode -1)          ; No menu bar

;; Give some breathing room
(set-fringe-mode 10)

;; Visual bell instead of sound
(setq visible-bell t)
```


## Números de línea {#números-de-línea}

```emacs-lisp
;; Show column number in modeline
(column-number-mode)

;; Show line numbers
(global-display-line-numbers-mode t)

;; Disable line numbers for certain modes
(dolist (mode '(org-mode-hook
                term-mode-hook
                shell-mode-hook
                eshell-mode-hook))
  (add-hook mode (lambda () (display-line-numbers-mode 0))))
```


## Gestión de paquetes {#gestión-de-paquetes}

Emacs tiene un gestor de paquetes integrado. Hay que decirle dónde encontrar paquetes:

```emacs-lisp
;; Add package repositories
(setq package-archives
      '(("melpa" . "https://melpa.org/packages/")
        ("org" . "https://orgmode.org/elpa/")
        ("nongnu" . "https://elpa.nongnu.org/nongnu/")
        ("elpa" . "https://elpa.gnu.org/packages/")))

;; Initialize the package system
(package-initialize)
```


## use-package: Configuración declarativa {#use-package-configuración-declarativa}

`use-package` es una macro que hace la configuración de paquetes más limpia:

```emacs-lisp
;; Bootstrap use-package
(unless (package-installed-p 'use-package)
  (package-refresh-contents)
  (package-install 'use-package))
(require 'use-package-ensure)
(setq use-package-always-ensure t)
(eval-when-compile (require 'use-package))
```


### Sintaxis básica: {#sintaxis-básica}

```emacs-lisp
(use-package nombre-del-paquete
  :ensure t                          ; Instalar si no está presente
  :defer t                           ; Carga diferida
  :init (código-antes-de-cargar)     ; Se ejecuta antes de cargar
  :config (código-después-de-cargar) ; Se ejecuta después de cargar
  :bind ("C-x g" . algún-comando)   ; Establecer atajo de teclado
  :hook (algún-modo . modo-paquete) ; Activar en ciertos modos
  :custom (alguna-opción "valor"))  ; Establecer variables custom
```

No estás configurando tu editor. Lo estás programando.


## Evil-mode {#evil-mode}

Atajos de teclado de Vim en Emacs, lo mejor de los dos mundos:

```emacs-lisp
(use-package evil
  :ensure t
  :init
  (setq evil-want-keybinding nil)    ; For evil-collection
  :config
  (evil-mode 1))

;; Evil bindings for many Emacs modes
(use-package evil-collection
  :ensure t
  :after evil
  :config
  (evil-collection-init))
```

Emacs no es dogmático. Tú construyes tu propio editor.


## Tema, modeline y fuentes {#tema-modeline-y-fuentes}


### Tema {#tema}

```emacs-lisp
;; Theme
(use-package modus-themes
  :ensure t
  :init
  (setq modus-themes-italic-constructs t
        modus-themes-bold-constructs t
        modus-themes-mixed-fonts t
        modus-themes-org-blocks 'gray-background)
  :config
  (load-theme 'modus-vivendi :no-confirm))
```

Otros temas populares: `doom-themes`, `gruvbox-theme`, `catppuccin-theme`, `ef-themes`


### Modeline {#modeline}

```emacs-lisp
;; Modeline
(use-package doom-modeline
  :ensure t
  :init (doom-modeline-mode 1)
  :custom (doom-modeline-height 28))

(use-package nerd-icons
  :ensure t)
```


### Font {#font}

```emacs-lisp
;; Fonts
(set-face-attribute 'default nil
                    :font "SauceCodePro Nerd Font"
                    :height 110)

(set-face-attribute 'variable-pitch nil
                    :font "Noto Sans"
                    :height 110
                    :weight 'regular)
```


## Completado en el minibuffer {#completado-en-el-minibuffer}

Aquí es donde Emacs se vuelve **mucho** más usable. El minibuffer es donde escribes comandos, nombres de archivo, etc.


### Vertico {#vertico}

```emacs-lisp
;; Vertical completion UI
(use-package vertico
  :ensure t
  :custom
  (vertico-count 13)
  (vertico-resize t)
  :config
  (vertico-mode))
```


### History {#history}

```emacs-lisp
;; Remember minibuffer history
(use-package savehist
  :init (savehist-mode))
```


### Orderless {#orderless}

```emacs-lisp
;; Flexible matching — type "buff switch" instead of "switch-to-buffer"
(use-package orderless
  :ensure t
  :custom
  (completion-styles '(orderless basic)))
```


### Marginalia {#marginalia}

```emacs-lisp
;; Rich annotations (keybindings, file sizes, etc.)
(use-package marginalia
  :ensure t
  :init (marginalia-mode))
```


### Consult {#consult}

```emacs-lisp
;; Enhanced commands with live preview
(use-package consult
  :ensure t
  :bind (("C-s" . consult-line)       ; Better in-buffer search
         ("C-x b" . consult-buffer))) ; Better buffer switch with preview
```


## Which-key - Descubrir atajos de teclado {#which-key-descubrir-atajos-de-teclado}

Pulsa una tecla de prefijo y mira qué opciones hay disponibles:

```emacs-lisp
(use-package which-key
  :ensure t
  :config
  (which-key-mode)
  (setq which-key-idle-delay 0.5))    ; Show after 0.5 seconds
```

Pulsa `C-x` y espera — verás todas las continuaciones disponibles.


## Otros ajustes útiles {#otros-ajustes-útiles}

```emacs-lisp
;; Ask y/n instead of yes/no
(setq use-short-answers t)

;; Smooth scrolling
(setq scroll-margin 8
      scroll-step 1
      scroll-conservatively 10000)

;; Tabs as spaces, 4 spaces wide
(setq-default indent-tabs-mode nil)
(setq-default tab-width 4)

;; Auto-close brackets
(electric-pair-mode t)

;; Backup files in a single directory
(setq backup-directory-alist '(("." . "~/.emacs.d/backup")))
```


## Org-mode {#org-mode}

Org-mode es un sistema de texto plano para organizar tu vida: notas, tareas, agendas, documentos...

Todo en texto plano. Documentos literate. "Tu vida en archivos de texto."

```emacs-lisp
(setq org-todo-keywords
  '((sequence "TODO(t)" "PROG(p)" "|" "DONE(d)" "CANCELED(c)")))
```


## Org Agenda {#org-agenda}

```emacs-lisp
(setq org-agenda-files '("~/projects/gpul/emacs-talk/demo/org/"))
(setq org-agenda-span 14)
(setq org-agenda-start-with-log-mode t)
(setq org-log-done 'time)
```


## Configuración visual de Org {#configuración-visual-de-org}

```emacs-lisp
;; Nicer ellipsis for folded headings
(setq org-ellipsis " ▾")

;; Indent content under headings
(add-hook 'org-mode-hook #'org-indent-mode)

;; Center text for better reading
(use-package visual-fill-column
  :ensure t
  :hook (org-mode . (lambda ()
                      (setq visual-fill-column-width 100
                            visual-fill-column-center-text t)
                      (visual-fill-column-mode 1))))

;; Keybinding for agenda
(global-set-key (kbd "C-c a") 'org-agenda)
```


## Comandos clave de Org {#comandos-clave-de-org}

| Tecla     | Descripción             |
|-----------|-------------------------|
| `C-c C-t` | Cambiar estado TODO     |
| `C-c C-s` | Programar (schedule)    |
| `C-c C-d` | Establecer fecha límite |
| `C-c a`   | Abrir agenda            |
| `C-c C-e` | Exportar                |


## Org-roam: Tu segundo cerebro {#org-roam-tu-segundo-cerebro}

El método Zettelkasten aplicado a Emacs: notas interconectadas con enlaces bidireccionales para gestión del conocimiento personal.

```emacs-lisp
(use-package org-roam
  :ensure t
  :custom
  (org-roam-directory (file-truename "~/projects/gpul/emacs-talk/demo/roam/"))
  :bind (("C-c n f" . org-roam-node-find)
         ("C-c n i" . org-roam-node-insert)
         ("C-c n l" . org-roam-buffer-toggle))
  :config
  (org-roam-db-autosync-mode))
```


## Magit - Interfaz de Git {#magit-interfaz-de-git}

La mejor interfaz de Git que existe.

```emacs-lisp
(use-package magit
  :ensure t
  :bind ("C-x g" . magit-status))
```

Con `C-x g` abres magit-status, donde puedes hacer staging de hunks (no solo archivos enteros), commits, `git blame`, y mucho más, todo sin salir de Emacs.


## Dired - Editor de directorios {#dired-editor-de-directorios}

No es un gestor de archivos. Es un buffer Lisp que controla archivos.

Se abre con `C-x d` o `M-x dired`. Muestra el listado de un directorio como un buffer normal — navegas y operas sobre archivos usando atajos de teclado.

| Tecla | Descripción                                |
|-------|--------------------------------------------|
| `+`   | Crear un nuevo directorio                  |
| `d`   | Marcar archivo para borrar                 |
| `m`   | Marcar archivo                             |
| `u`   | Desmarcar archivo                          |
| `x`   | Ejecutar acciones marcadas (borrar, etc.)  |
| `R`   | Renombrar / mover archivo                  |
| `C`   | Copiar archivo                             |
| `D`   | Borrar archivo inmediatamente              |
| `(`   | Alternar detalles (permisos, tamaño, etc.) |


## Dired con Evil y Wdired {#dired-con-evil-y-wdired}

Con Evil, la navegación cambia respecto al Emacs por defecto:

| Emacs     | Evil        | Descripción                |
|-----------|-------------|----------------------------|
| `RET`     | `l` / `RET` | Abrir archivo o directorio |
| `^`       | `h`         | Subir al directorio padre  |
| `n` / `p` | `j` / `k`   | Moverse abajo / arriba     |
| `g`       | `gr`        | Refrescar el buffer        |

Pulsa `C-x C-q` para entrar en modo **Writable Dired**. Los nombres de archivo se convierten en texto editable — renombra archivos editando el buffer, luego `C-c C-c` para aplicar.

Un ejemplo perfecto de la filosofía Emacs: todo es un buffer, y los buffers son editables.

```emacs-lisp
(setq dired-listing-switches
      "-l --almost-all --human-readable --group-directories-first")

;; Vim-style h/l navigation in Dired (evil-collection doesn't set these)
(with-eval-after-load 'dired
  (evil-define-key 'normal dired-mode-map
    "h" 'dired-up-directory
    "l" 'dired-find-file))
```


## Tramp - Acceso remoto transparente {#tramp-acceso-remoto-transparente}

Edita archivos en cualquier lugar como si fuesen locales.

```text
/ssh:user@host:/path/to/file
/sudo::/etc/hosts
```

"Estoy editando un archivo en un servidor remoto, y a Emacs le da igual."


## Cierre {#cierre}

-   Emacs es una inversión a largo plazo
-   Crece contigo
-   Nunca "terminas" de configurarlo


### Recursos {#recursos}

-   [GNU Emacs](https://www.gnu.org/software/emacs/)
-   [Doom Emacs](https://github.com/doomemacs/doomemacs)
-   [Spacemacs](https://www.spacemacs.org/)
-   [System Crafters (Emacs from Scratch)](https://systemcrafters.net/)
