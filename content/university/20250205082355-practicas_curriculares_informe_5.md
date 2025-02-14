---
title: "Prácticas Curriculares informe 5"
date: 2025-02-05T00:00:00+01:00
lastmod: 2025-02-05T00:00:00+01:00
tags: ["español"]
draft: false
---

**Informe 20 Abril a 3 Mayo**


## Descrición concreta das tarefas desenvolvidas no período: {#descrición-concreta-das-tarefas-desenvolvidas-no-período}

En las últimas semanas, a mayores de continuar con el desarrollo de la app de recursos humanos
participé algo más en una proyecto real que lleva mi tutor. Tuvimos una nueva reunión con el Product
Owner para revisar la aplicación y planeamos un test de aceptación la próxima semana.
También estuve en la feria de empleo de la FIC en el stand de la empresa.
Algunas de las tareas de desarrollo que implementé fueron:

-   Refactorización y arreglo de bugs en widgets varios
-   Implementación de formularios y listas para la aplicación de recursos humanos


## Valoración das tarefas desenvolvidas e dos coñecementos  adquiridos: {#valoración-das-tarefas-desenvolvidas-e-dos-coñecementos-adquiridos}

Me encuentro bastante cómodo en el ambiente de la oficina. La experiencia en la feria de empleo fue
muy buena, viendo un poco cómo son las cosas por el otro lado.
En cuanto a mis tareas de desarrollo no hay mucha más valoración, apenas continué con lo hecho
hasta el momento.


## Relación dos problemas encontrados e do procedemento seguido para resolvelos: {#relación-dos-problemas-encontrados-e-do-procedemento-seguido-para-resolvelos}

El problema más destacable fue un error que tuvimos con la actualización de datos en la aplicación de
recursos humanos. Al actualizar los datos mediante los formularios las pantallas de vista no se
recargaban, esto era porque el valor que recibía la pantalla de visualización era estático, y al no
recargar la página este valor no se volvía a enviar.
La forma ideal de arreglar esto habría sido enviando un nuevo valor actualizado cada vez que este
modificara, pero fuimos incapaces de hacerlo funcionar con la implementación actual. La solución más
válida terminó siendo forzar la actualización del widget afectado cada vez que los datos se actualizaran.
