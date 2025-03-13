---
title: "Proceso Unificado"
date: 2025-03-13T00:00:00+01:00
lastmod: 2025-03-13T00:00:00+01:00
tags: ["español", "metodologías"]
draft: false
---

Links: [Apuntes Metodologias de Desarrollo]({{< relref "20240621204848-metodologias_de_desarrollo.md" >}})


## Estructura y Alcance {#estructura-y-alcance}


### Motivación {#motivación}

El proceso de **Desarrollo Software** es el conjunto de actividades necesarias para transformar los requisistos de un usuario en un sistema software

-   Aumento continuo de las expectativas
-   Exigencia de una adaptación cada vez mayor a necesidades cambiantes
-   Importancia de disponer de soluciones rápidamente

Se necesita un método o um proceso común que:

-   Sirva de guía para planificas y ordenar las actividaded del equipo
-   Permita dirigir las tareas de cada integrante por separado y del equipo como un todo
-   Especifique los modelos y artefactos que han de desarrollarse
-   Aporte criterios y métricas para evaluar y controlar los productos y actividades del proyecto


### Desarrollo {#desarrollo}


#### Alcance {#alcance}

-   Es más que un proceso, es un marco de trabajo genérico que puede especializarse para diferentes sistemas, área, organizaciones y casi cualquier tamaño de proyecto.
-   Se basa en componentes y sy interconexión con interfaces bien definidas
-   Emplea UML para preparar todas las facetas de sistema


#### Claves {#claves}

<!--list-separator-->

-  Dirigido por Casos de Uso

<!--list-separator-->

-  Centrado en la Arquitectura

<!--list-separator-->

-  Iterativo e Incremental


#### Ciclos de vida {#ciclos-de-vida}

El proceso unificado se repite en multiples ciclos
Un ciclo concluye con una versión del producto para los clientes
Una versión soporta un conjunto de utilidades
Las utilidades adquieren su significado en un marco funcional

<!--list-separator-->

-  Versión

    cuenta con:

    -   Un cuerpo en código
    -   Un artefacto entregable
    -   Manuales y documentación
    -   Otros productos asociados


#### Vista 4+1 {#vista-4-plus-1}

<!--list-separator-->

-  Casos de Uso

    Se utiliza para identificar y validad el diseño de arquitectura
    También sirve como punto de partida para pruebas de un prototipo de arquitectura

<!--list-separator-->

-  Lógica

    Está enfocada en describir la estructura y funcionalidad del sistema
    **Diagramas de Clase, Comunicación y Secuencia**

<!--list-separator-->

-  Implementación / desarrollo

    Ilustra el sistema de la perspectiva del programador y está enfocado en la administración de los artefactos de software
    **Diagrama de Componentes y Paquetes**

<!--list-separator-->

-  Proceso

    Trata los aspectos dinámicos del sistema, explica los procesos de sistema y cómo se comunican.
    Se enfoca en el comportamiento del sistema en tiempo de ejecución.
    **Diagrama de Actividad**

<!--list-separator-->

-  Despliegue / física

    Describe el sistema desde el punto de vista de un ingeniero de sistemas
    Está relacionada con la tompología de compornentes de software en la capa física y sus conexiones
    **Diagrama de Despliegue**


#### Fases {#fases}

<!--list-separator-->

-  Inicio

    Se desarrolla una descripción del producto final a partir de una buena idea y se acopla al análisis del negocio

<!--list-separator-->

-  Elaboración

    Se especifica en detalle la mayoría de los casos de uso y se concreta el diseño de la Arquitectura

<!--list-separator-->

-  Construcción

    Se especifica en detalle la arquitectura para la construcción de sus elementos y la determinación dinal de componentes

<!--list-separator-->

-  Transición

    Es aquella de la que resulta la versión a liberar inicial del producto


### Resumen {#resumen}

El proceso Unificado está basado en **componentes**.
Utiliza el estándar **UML** para la esquematización conceptual y la representación visual.
Se basa los Casos de Uso, la Arquitectura y el Desarrollo Iterativo e Incremental y par que funcionen ha de tenerse en cuenta:

-   Ciclos
-   Fases
-   Fujos de trabajo
-   Gestión de riesgo
-   Control de calidad
-   Gestión y planificación del proyecto
-   Control de la configuración

El proceso unificado establece un **marco de trabajo** que integra estas facetas.


## Flujos de trabajo {#flujos-de-trabajo}


### Preliminares {#preliminares}

El paso desde la determinación de las necesidaddes hasta la implementación de un sistema que las soporte **no** es trivial:

-   Las necesidades de los usuarios son dificiles de discernir
-   Hay que capturarlas de tal manera que se puedan verificar y discutir con el propio usuario y también en sus integración con otras, para evaluar su conveniencia
-   Las necesidades han de comunicarse fácilmente y con precisión a todos los implicados en el proyecto
-   El diseño ha de ajustarse a las necesidades
-   La prueba del sistema ha de verificar que el sistema satisface las necesidades


### Modelado de Negocio {#modelado-de-negocio}

El objetivo es comprender la estructura y dinámica de la organización que requiere el software, asegurar que clientes, usuarios finales, y desarrolladores tienen un entendimiento común.
Plantea también que el esfuerzo de modelado del negocio puede tener distinto alcance dependiendo del contexto y necesidades de la organización.


#### Modelado {#modelado}

Casos de Uso del Negocio
Diagramas de Actividad


### Captura de Requisitos {#captura-de-requisitos}

La persectiva que proporcionan los casos de uso refuerza el objetivo último de la Ingeniería del Software: la creación de productos que permitan a los clientes realizar un trabajo útil.
Un caso de uso identifica las facilidades del software que hay que lograr para cumplir los objetivos de la organización en general y en particular de los usuarios.


### Análisis {#análisis}

El Modelo de análisis crece incementalmente según se añaden casos de uso.


#### El procedimiento práctico de trabajo es el siguiente: {#el-procedimiento-práctico-de-trabajo-es-el-siguiente}

-   Identificar y describir los casos de uso de una iteración
-   Proponer clasificadores y asociaciones
-   Abordar coordinadamente todos los casos de uso de la iteración


### Diseño {#diseño}

El Modelo de Diseñó se crea tomando el Modelo de Análisis como entrada principlal.
Funciona como esquema para la implementación.


### Implementación {#implementación}

Durnate el flujo de Implementación se desarrolla todo lo necesario para obtener un sistema ejecutable.


#### Componentes {#componentes}

Un componenten es una parte reemplazable del sistema que cumple y proporciona un conjunto de interfaces definidas.

-   Ejecutables
-   De fichero (código fuente, scripts, ficheros de cnfiguración)
-   De tabla (elementos de la persistencia, DAOs etc.)


### Validación y prueba {#validación-y-prueba}

La disciplina de prueba actúa en muchos aspectos como un porveedor de servicios a las otras disciplinas.
Existen distintos tipos de testing y multiples herramientas.


### Despliegue {#despliegue}

Trata de hacer el producto de software disponible para el usuario final, y es la culminación de los esfuerzos de desarrollo.
Es importante probar que que el producto está bien probado antes de su lanzamiento.


#### Consta de: {#consta-de}

-   Plan de Despliegue
-   Material de apoyo
-   Unidad de Despliegue
