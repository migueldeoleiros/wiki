---
title: "Apuntes Metodologias de Desarrollo"
date: 2024-01-01T00:00:00+01:00
lastmod: 2025-03-13T00:00:00+01:00
tags: ["español", "metodologías"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})


## Contextualización {#contextualización}


### Definiciones {#definiciones}


#### Ingeniría del Software {#ingeniría-del-software}

Aplicación sistemática de conocimientos técnicos y científicos, metodologías y experiencia al diseño, implementación, pruebas y documentación de productos software.


#### Ciclo de Vida (SDLC) {#ciclo-de-vida--sdlc}

**lo que hay que obtener**
Un ciclo de vida software en ingeniería de software es el proceso de creación o modificación de los sistemas, modelos y metodologías que la gente usa para desarrollar los productos software, un SDLC sostiene muchos tipos de Metodologías de Desarrollo de software.


#### Metodología del Desarrollo {#metodología-del-desarrollo}

**cómo lo hay que obtener**
Conjunto ordenado y bien esctructurado que contemple todos, o algunos, de los siguentes tipos de elementos:
planteamientos, filosofías, políticas, procesos, fases, etapas, iteraciones, procedimientos, reglas, técnicas, herramientas, documentación, formación y que asegura a los desarrolladores la realización oportuna y en tiempo y forma de un software de calidad adecuado a las necesidades.

Un Metodología de Desarollo software (también llamada Proceso de Desarrollo software) es una forma de dividir y organizar las distintas fases o etapas del desarrolo del producto, así como la definición y estructuración de las actividades a realizar dentro de cada una de dichas etapas, con el objetivo de conseguir una mejor planificación, ejecución y gestión del proyecto.


#### Procedimiento {#procedimiento}

Definición y regulación del comportamiento con el objetivo de lograr una organización y ejecución eficiente de las actividades que posibilitan la resolución de una operación general, o trámite, para el logro de un objetivo concreto.


#### Actividad {#actividad}

Unidad compleja funcionalmente consistente en la que se dividen los procedimientos para facilitar la organización del trabajo, la asignación de los recursos y fijar la responsabilidad sobre los resultados.


#### Tarea {#tarea}

Unidad elemental en la que se dividen las actividades, y que suelen ser afectuadas por un agente concreto o actor singular.


#### Proceso {#proceso}

Trabajo realizado y que se espera de la ejecución de uno o varios componentes del software, lógicamente relacionados.


#### Unidad de Tratamiento {#unidad-de-tratamiento}

Pasos elementales en los que se dividen los procesos y que han de completarse para considerar su validez. A veces se relacionan de manera biunívoca con las tareas, en sus consideración funcional.


#### Técnica {#técnica}

Forma y/o herramienta utilizada para aplicar una Unidad del Tratamiento, un conjuto de ellas, un componente software o un conjunto de ellos.


#### Herramienta {#herramienta}

Sistema software o aplicación, que automatiza y soporta las técnicas. Por extensión también se relaciona con los conceptos de Entorno, Plataforma y Marco.


#### Producto/Entregable {#producto-entregable}

Resultado software válido y utilizable de cada etapa, fase, iteración o ajuste, objenido por la evolución continua o por verisones, de un proyecto desarrollado metódicamente para la construcción y desarrollo de sistemas y aplicaciones.


### Ciclos de Vida {#ciclos-de-vida}

La vida de un proyecto comienza en el momento en el que surge la idea y termina cuando el producto poerde completamente susutilidad y no puede sufrir más actualizaciones.


#### Indentificación ¿Qué? {#indentificación-qué}


#### Preparación y Diseño ¿Cómo? {#preparación-y-diseño-cómo}


#### Ejecución {#ejecución}


#### Evaluación {#evaluación}


### Manifiesto Ágil {#manifiesto-ágil}

-   Valorar más a los individuos y su interacción que a los procesos y las herramientas
-   Valorar más el software que funciona que la documentación exhaustiva
-   Valorar más la colaboración con el cliente que la negociación contractual
-   Valorar más la respuesta al cambio que el seguimiento de un plan


## [Extreme programming]({{< relref "20250313172200-extreme_programming.md" >}}) {#extreme-programming--20250313172200-extreme-programming-dot-md}


## [Scrum]({{< relref "20250313171355-scrum.md" >}}) {#scrum--20250313171355-scrum-dot-md}


## [Kanban]({{< relref "20250313172458-kanban.md" >}}) {#kanban--20250313172458-kanban-dot-md}


## Metodologías Clásicas {#metodologías-clásicas}


### Generaciones {#generaciones}


#### Desarrollo Convencional {#desarrollo-convencional}

-   Los cambios en la organización, la gestión, la estrategia y los objetivos afectan muy negativametne al proceso de desarrollo.
-   La continuidad, evolución y adaptación del software depende de individualidades.
-   No es posible establecer un control suficiente del proyecto ni determinar una planificación.
-   La documentación es escasa y singular.
-   Los resultados finales son impredecibles.


#### Desarrollo Estructurado {#desarrollo-estructurado}

En estas metodologías se representan los procesos y flujos de procesos, la estructura de datos, y su combinación


#### Desarrollo Orientado a Objetos {#desarrollo-orientado-a-objetos}

Es el origen de múliples herramientas y metodologías que responden a diversas filosofías y orientaciones
RUP, SCRUM, XP etc.


### Clasificación {#clasificación}


#### Estructuradas {#estructuradas}

<!--list-separator-->

-  Orientadas a Procesos

    Se fundan en la abstracción de modelado básica, de entrada, proceso y salida de un sistema
    Se apoya en técnicas gráficas y diagramas que respetan la estructura jerárquica
    Todo ello da lugar al concepto de Espacificación Estructurada, que se describe como un modelo fraccionado y descendente.

    <!--list-separator-->

    -  Modelo Conceptual

    <!--list-separator-->

    -  Modelo Lógico

    <!--list-separator-->

    -  Modelo Físico

<!--list-separator-->

-  Orientadas a Datos

    Aplica el modelo básico de **Input-Process-Output**, por lo que se orienta a la estructuración de las entrada salida

    <!--list-separator-->

    -  Etapas

        <!--list-separator-->

        -  Planificación

        <!--list-separator-->

        -  Análisis

        <!--list-separator-->

        -  Diseño

        <!--list-separator-->

        -  Construcción

    <!--list-separator-->

    -  Jerárquicas

    <!--list-separator-->

    -  No jerárquicas


#### Orientadas a Objetos {#orientadas-a-objetos}

-   Las metodologías anteriores, estudian los sistemas desde el marco funcional, determinando las tareas que han de soportar, y se avanza en la definición descomponiendo sucesivamente estas tareas para determinar los módulos del sistema, las aplicaciones y componentes de las mismas
-   Las metodologías OO tienen la pretensión esencial de capturar la realidad entendiendo los objetos del dominio del problema, y desarrollar los modelos basándose en la conexión e interactuación o colaboración, de tales objetos.

<!--list-separator-->

-  Iniciales (Puras)

    <!--list-separator-->

    -  Modelo estático

    <!--list-separator-->

    -  Modelo dinámico

    <!--list-separator-->

    -  Modelo de procesos

<!--list-separator-->

-  Evolutivas

    <!--list-separator-->

    -  Basadas en UP

    <!--list-separator-->

    -  Ágiles

    <!--list-separator-->

    -  Extremas


#### Sistemas en tiempo real {#sistemas-en-tiempo-real}


#### Sistemas globales {#sistemas-globales}


## [Proceso Unificado]({{< relref "20250313172657-proceso_unificado.md" >}}) {#proceso-unificado--20250313172657-proceso-unificado-dot-md}
