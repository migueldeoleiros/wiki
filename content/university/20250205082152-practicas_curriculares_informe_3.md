---
title: "Prácticas Curriculares informe 3"
date: 2025-02-05T00:00:00+01:00
lastmod: 2025-02-05T00:00:00+01:00
tags: ["español"]
draft: false
---

**Informe 21 Marzo a 5 Abril**


## Descrición concreta das tarefas desenvolvidas no período: {#descrición-concreta-das-tarefas-desenvolvidas-no-período}

Durante estas dos semanas continué con el trabajo en un aplicación para gestión de recursos humanos
que había comentado ya en el anterior informe. A mayores en los últimos días me incorporé en un
proyecto para un cliente externo. Continué con desarrollo frontend en Flutter.
Algunas de las funciones que implementé fueron:

-   Refactorizar y arreglar bugs en widgets
-   Implementación de pantallas para visualizar listas de offertas y aplicantes en aplicación de recursos

humanos

-   Definición de classes de datos para formularios en aplicación para cliente externo
-   Implementación de widgets genericos para formularios


## Valoración das tarefas desenvolvidas e dos coñecementos  adquiridos: {#valoración-das-tarefas-desenvolvidas-e-dos-coñecementos-adquiridos}

No hay demasiado que destacar en estos días ya que es, en su mayoría, una continuación del trabajo
que ya estaba haciendo. En cuanto a conocimientos adquiridos, he mejorado en mi soltura a la hora de
resolver problemas en Flutter, y especialmente en refactorizar y estructurar el código para que sea más
mantenible.


## Relación dos problemas encontrados e do procedemento seguido para resolvelos: {#relación-dos-problemas-encontrados-e-do-procedemento-seguido-para-resolvelos}

De nuevo el problema más destacable que tuve durante estas semanas fue con la librería GoRouter.
Esta vez me encontré con que una de las funciones que usábamos (push para cambiar la ruta) no
actualiza la ruta en la barra de búsqueda del navegador, y a mayores, la solución proporcionada por
GoRouter para solventar esto no funcionaba usando ShellRoute, que para nosotros era necesario en la
implementación de la barra de navegación. Investigando el problema, resulta que esto era un bug
reportado en la última versión. Tuvimos la suerte de que había un PR con el fix en proceso, y en la
siguiente versión de la librería esto estaba arreglado.
No tuve muchos más problemas destacables, la mayoría de cosas fueron pequeños bloqueos por falta
de experiencia en Flutter, cosas que pude solucionar leyendo la documentación o buscando ejemplos.
