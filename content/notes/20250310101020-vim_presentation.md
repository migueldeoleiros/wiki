---
title: "Vim presentation"
author: ["miguel"]
date: 2025-03-10T00:00:00+01:00
lastmod: 2025-03-10T00:00:00+01:00
tags: ["español", "vim", "slides"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})


## Para seguir la charla: {#para-seguir-la-charla}


## Qué es Vim? {#qué-es-vim}

Según su página oficial:
" **Vim es un editor de texto altamente configurable diseñado para crear y modificar cualquier tipo de texto de manera muy eficiente** "

Pero, Cual es la diferencia entre Vim y otros editores de texto?
Y porqué es más eficiente?


## Modos en Vim {#modos-en-vim}

-   **Normal** mode

-   **Insert** mode

-   **Visual** mode

-   **Command** mode


## Comandos para moverse {#comandos-para-moverse}

```txt
┏━━━━━━━━━━━┓
┃     ↑     ┃
┃     k     ┃
┃ ← h   l → ┃
┃     j     ┃
┃     ↓     ┃
┗━━━━━━━━━━━┛
```

| unidad  | saltar al principio | saltar al final |
|---------|---------------------|-----------------|
| palabra | b                   | e               |
| linea   | 0                   | $               |
| párrafo | {                   | }               |
| archivo | gg                  | G               |
| ventana | H                   | L               |


### <span class="org-todo todo TODO">TODO</span> translate {#translate}

| Key | Description                  |
|-----|------------------------------|
| w   | go to start of the next word |
| W   | go to start of the next WORD |
| e   | go to end of the next word   |
| E   | go to end of the next WORD   |
| b   | go to previous (back) word   |
| B   | go to previous (back) WORD   |


## Buscar {#buscar}

Similar a ****Ctr-f**** en vim usamos **/**

Para movernos en la selección usamos **n** y **N**

Para buscar en el otro sentido (encima) usamos **?**

Podemos buscar la palabra actual con **\*** o **#** para el sentido inverso


## Insert Mode {#insert-mode}

para entrar en <span class="underline">Insert Mode</span> usamos **i**
Para volver a el modo Normal **ESC**

Si queremos entrar en el siguiente caracter **a**

Para una nueva linea **o**


## Comandos de edición {#comandos-de-edición}

Para remplazar un caracter usamos **r**

Mejor usar el comando **c** (change)
Para remplazar una palabra **cw**


## Copiar, pegar, y borrar {#copiar-pegar-y-borrar}

Similar a ****Ctr-c**** y ****Ctr-v**** en Vim usamos:
     **y** yank (copy)
     **p** paste

Para cortar o borrar usamos **d** (delete)

**yy** copiar una linea
**dd** borrar una linea
**p** pegar


## Visual mode {#visual-mode}

Es el modo para selección

Para entrar en <span class="underline">Visual Mode</span> usamos **v**
Para el el modo <span class="underline">Visual Line</span> usamos **V**
Para el el modo <span class="underline">Visual Block</span> usamos **Ctr-v**

podemos ejecutar comandos en la selección como **y**, **d** o **c**


## Command mode {#command-mode}

Para entrar en el modo de comandos usamos **:**

| :help d | ayuda para el comando "d"                   |
|---------|---------------------------------------------|
| :w      | guardar archivo (write)                     |
| :w foo  | guardar como "foo"                          |
| :q      | salir de vim                                |
| :q!     | salir de vim sin guardar (forzar)           |
| :wq     | guardar y salir de vim                      |
| :e foo  | abrir archivo "foo"                         |
| :!ls    | ejecutar comando de shell "ls"              |
| :r !ls  | ejecutar comando de shell "ls" e insertarlo |

**Bonus** el comando :Sex


## Búsqueda y remplazo {#búsqueda-y-remplazo}

**:[rango] s[ubstitute]/patrón/string/[flags] [count]**

\## Ejemplos:
**:%s/bad/good/g**        **:%s/\\\\&lt;good\\\\&gt;/bad/g**
**:%s/bad/good/gc**       **:%s/\\\\(bad\\\|good\\\)/great/g**
**:1,10s/bad/good/g**


### Rango {#rango}

| .    | linea actual               |
|------|----------------------------|
| 3    | tercera linea              |
| $    | última linea               |
| %    | todas las lineas           |
| .+1  | linea después de la actual |
| 1,10 | rango entre 1 y 10         |


### flags {#flags}

| g | remplazar todo             |
|---|----------------------------|
| c | preguntar por confirmación |
| i | ignorar mayúsculas         |
| I | no ignorar mayúsculas      |


## El comando "global" {#el-comando-global}

Ejecuta un cómando en la línea que contenga un patrón
**:[rango]g/patrón/comando**


### Ejemplos: {#ejemplos}

**:g/error/d**

Para invertir la búsqueda **:g!/error/d**

Podemos combinar comandos **:g/bad/s/good/great/g**

Podemos ejecutar un comando de <span class="underline">Normal Mode</span> con el refijo **normal**
**:g/something/normal @a**


## Deshacer, Rehacer y Viajar en el tiempo {#deshacer-rehacer-y-viajar-en-el-tiempo}

Deshacemos cambios con **u** (podemos añadir modificador **3u**)
Rehacemos cambios con **Ctr-r**

| :earlier 10m | Deshacer cambios en los últimos 10 minutos               |
|--------------|----------------------------------------------------------|
| :ea 2d       | Deshacer cambios en los últimos 2 días                   |
| :later 10m   | Reshacer cambios en los últimos 10 minutos               |
| :lat 10s     | Reshacer cambios en los últimos 10 segundos              |
| :ea 3f       | Deshacer cambios en las últimas 3 escrituras del archivo |


## Gramática en VIM {#gramática-en-vim}

En Vim podemos mezclar comandos y modificadores para ejecutar diferentes
acciones.

Dividiremos las partes de un comando en 3:

-   Verbos
-   Modificadores
-   Nombres


### Verbos {#verbos}

| x | borrar caracter    |
|---|--------------------|
| r | remplazar caracter |
| c | cambiar (change)   |
| y | yank (copiar)      |
| d | borrar (delete)    |
| p | pegar              |
| v | selección visual   |


### Modificadores {#modificadores}

| i   | dentro (inside)                               |
|-----|-----------------------------------------------|
| a   | alrededor (around)                            |
| NUM | cualquier número (0,1,2..)                    |
| t   | busca un caracter y acaba antes de él (to --) |
| f   | busca un caracter y acaba en él (find)        |


### Nombres {#nombres}

| w       | principio de la próxima palabra (word)  |
|---------|-----------------------------------------|
| b       | principio de la previa palabra (before) |
| e       | final de la palabra (end)               |
| s       | frase (sentence)                        |
| p       | párrafo                                 |
| t       | tag (HTML)                              |
| b       | bloque de código                        |
| h,j,k,l | izquierda, abajo, arriba, derecha       |
| $       | final de la línea                       |
| 0       | principio de la línea                   |


### Crear "frases" {#crear-frases}

Podemos repetir un comando N veces añadiendo un modificador antes: **2w**
Podemos añadir un verbo antes del modificador: **d2w**

-   **vap** Seleccionar un párrafo (visual around paragraph)
-   **ci"** Cambiar texto entre comillas (change inside quote)
-   **ca"** Cambiar texto alrededor de comillas (change around quote)
-   **dt,** Borrar texto hasta siguiente coma en linea (delete to coma)
-   **dj** Borrar esta y la siguiente linea (delete down)
-   **d/algo** Borrar hasta la palabra "algo" (delete find "algo")


## El "punto" {#el-punto}

Puedes repetir el último comando en <span class="underline">Normal Mode</span> con **.**

Esto no tendrá en cuenta los comandos de movimiento, solo los que editan texto

Puedes repetirlo tantas veces como quieras o usar un modificador de número


## Macros {#macros}


### Grabar una macro {#grabar-una-macro}

1.  Para empezar a grabar una macro usamos **q** en <span class="underline">Normal Mode</span>
2.  Escogemos el registro donde guardarla por ejemplo **a**
3.  Ejecutamos los comando a grabar
4.  Pulsamos **q** otra vez


### Ejecutar una macro {#ejecutar-una-macro}

En <span class="underline">Normal Mode</span> usamos **@** + el registro, por ejemplo **a** : **@a**
Podemos ejecutar la repetir la última macro con **@@** en lugar de **.@**

Podemos usar recursión en una macro para ejecutarla en todo un archivo


## Registros {#registros}

Para acceder a un registro usamos **"** + el registro, por ejemplo **a** : **"a**

Podemos añadir texto a un registro con **y** : **"ay**
Podemos imprimir el texto de un registro con **p** : **"ap**

Para ver la lista de los registros en uso podemos ejecutar **:reg** o **:register**


### Yank, delete y los registros numerados {#yank-delete-y-los-registros-numerados}

Yank y delete guardan su contenido ambos en el registro **"**
**""p** es lo mismo que **p**

Por el contrario, solo el texto copiado se guarde en el registro **0**
Puedes acceder al último texto copiado con **"0p**

Tanto el texto copiado como el borrado se guarda por orden en los registros del
1 al 9. por lo que podemos acceder al texto copiado anterior.


### Registros de solo lectura {#registros-de-solo-lectura}

| . | último texto insertado   |
|---|--------------------------|
| % | path del archivo actual  |
| : | último comando ejecutado |
| # | previo archivo editado   |


### Registros de búsqueda {#registros-de-búsqueda}

La última palabra buscada on **/** o **?** se guarda en el registro **/**


## Registros alfabéticos y macros {#registros-alfabéticos-y-macros}

Una macro no es más que ejecutar el contenido de un registro con **@**

En los mísmos registros que las macros podemos guardas cualquier cosa

Con el comando **:let** puedes introducir texto directamente : **:let @a='hola'**

Los registros **a** y **A** son el mismo, pero con **A** concatenamos y con **a** sobreescribimos


## Dividir ventanas {#dividir-ventanas}

| Ctr-w v | split vertical                      |
|---------|-------------------------------------|
| Ctr-w s | split horizontal                    |
| Ctr-w h | moverse a la ventana a la izquierda |
| Ctr-w j | moverse a la ventana debajo         |
| Ctr-w k | moverse a la ventana encima         |
| Ctr-w l | moverse a la ventana a la derecha   |
| Ctr-w c | cerrar (borrar) split               |


## Crear pestañas {#crear-pestañas}

| **Ctrl-w T** | mover split actual a una nueva pestaña |
|--------------|----------------------------------------|
| **gt**       | moverse a la siguiente pestaña         |
| **gT**       | moverse a la anterior pestaña          |


## Crear atajos de teclado Vim Classic {#crear-atajos-de-teclado-vim-classic}

**map_mode &lt;atajo&gt; &lt;comando original&gt;**

Los **map_mode** puede ser:

| nnoremap | map keys in normal mode |
|----------|-------------------------|
| inoremap | map keys in insert mode |
| vnoremap | map keys in visual mode |


### Ejemplos: {#ejemplos}

```vim-script
" Resize split windows using arrow keys by pressing:
" CTRL+UP, CTRL+DOWN, CTRL+LEFT, or CTRL+RIGHT.
noremap <c-up> <c-w>+
noremap <c-down> <c-w>-
noremap <c-left> <c-w>>
noremap <c-right> <c-w><
```


## Crear atajos de teclado Neovim {#crear-atajos-de-teclado-neovim}

En neovim podemos usar lua en lugar de vimscript


### Ejemplos: {#ejemplos}

```lua
-- Resize split windows using arrow keys by pressing:
-- CTRL+UP, CTRL+DOWN, CTRL+LEFT, or CTRL+RIGHT.
vim.keymap.set("n", "<c-up>", "<c-w>+")
vim.keymap.set("n", "<c-down>", "<c-w>-")
vim.keymap.set("n", "<c-left>", "<c-w>>")
vim.keymap.set("n", "<c-right>", "<c-w><")
```


## Distribuciones preconfiguradas {#distribuciones-preconfiguradas}

Para empezar a usar Neovim con una configuración IDE-like

-   LazyVim
-   NVChad
-   LunarVim
-   Astrovim

**VSCode Neovim** usa Neovim como backend para máxima compatibilidad
