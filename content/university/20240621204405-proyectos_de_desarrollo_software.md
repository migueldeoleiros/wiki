---
title: "Proyectos de Desarrollo Software"
date: 2024-05-01T00:00:00+02:00
lastmod: 2025-06-23T00:00:00+02:00
tags: ["español"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})


## Examen {#examen}

nota minima: 4,5/10


### Verdadero o Falso <span class="tag"><span class="50_">50%</span></span> {#verdadero-o-falso}

**Una mal resta una bien**

-   El tamaño funcional es la única métrica entándar para estimar el tamaño de un producto software

    ```text
    falso, existen otras como LOC o Casos de Uso
    ```
-   El método de estimación temprana E&amp;QFP incluye el método IFPUG

    ```text
    falso, se basa en IFPUG, pero no lo contiene dentro
    ```
-   La precisión de la estimación software se mantiene estable a medida que se va avanzando en el proyecto

    ```text
    falso, a medida que avanza el rango de error es menor (cono de incertidumbre)
    ```
-   La estimación más precisa deriva de usar BBDD propias con recopilación de datos históricos

    ```text
    verdadero, la medición será más exacta si tenemos datos de nuestro equipo y tecnología
    ```
-   Según el modelo IFPUG de estimación de puntos función, una relación N:M entre dos ILF se cuenta como un RET en cada uno de los ILF

    ```text
    falso, no necesariamente, se suele contar como un nuevo ILF
    ```
-   La fórmula para el cálculo del esfuerzo en el modelo COCOMO II Incluye el tamaño del software expresado en puntos función

    ```text
    falso, el tamaño está expresado en KSLOC
    ```
-   La técnica de estimación planning poker utilizada en las metodologías de desarrollo ágil se puede clasificar dentro de los métodos de estimación heurísticos

    ```text
    verdadero, ya que se basa en experiencia y no en calculos matematicos
    ```
-   Según las ecuaciones de SLIM, cambios muy pequeños en el tiempo de desarrollo provocan grandes modificaciones en el esfuerzo

    ```text
    verdadero, dado que SLIM modela el esfuerzo con una función exponencial del tiempo
    ```
-   En el modelo COCOMO II, el parámetro B mide el incremento del esfuerzo requerido al incrementarse el tamaño del proyecto y que B&gt;1 implica que la productividad se incrementa a medida que aumenta el tamaño del proyecto

    ```text
    verdadero
    ```
-   Para estimar un proyecto nuevo con el método ISBSG utilizando las ecuaciones de regresión, es necesario disponer del repositorio de proyectos de desarrollo que proporciona la organización bajo la adquisición de una licencia

    ```text
    verdadero
    ```
-   Los métodos de estimación de un proyecto software buscan estimar el tamaño y a partir del mismo obtener el esfuerzo, la duración y coste del proyecto

    ```text
    verdadero
    ```
-   Los métodos de estimación heurísticos com el Juicio de Expertos son aconsejables en ausencia de datos cuantificados o empíricos

    ```text
    verdadero
    ```
-   Según el método IFPUG de estimación de puntos función, para determinar la complejidad de las entradas externas (EI) se debe contar un DET (Data Element Type) por cada mensaje de error que se pueda originar durante la ejecución del proceso

    ```text
    falso, se cuenta un DET por todos los mensajes de error
    ```
-   El método de estimación del ISBSG permite estimar el esfuerzo y duración de un proyecto cuando no se tienen datos históricos propios

    ```text
    verdadero
    ```


### Preguntas Cortas <span class="tag"><span class="30_">30%</span></span> {#preguntas-cortas}


#### Indique las diferencias entre un ILF y un ELF {#indique-las-diferencias-entre-un-ilf-y-un-elf}

Un ILF es un fichero lógico interno, los datos serán manejados por la aplicación, mientras que un ELF es externo, será un ILF de otra aplicación, y no lo manejará la nuestra


#### Indique muy brevemente cómo se calcula la complejidad de las Funciones de Datos del método IFPUG {#indique-muy-brevemente-cómo-se-calcula-la-complejidad-de-las-funciones-de-datos-del-método-ifpug}

Teniendo en cuenta la cantidad de DETs y RETs dependiendo de en qué rango esté podrá ser baja, media o alta


#### Indique que tres métodos se pueden usar para realizar la estimación en el modelo SLIM {#indique-que-tres-métodos-se-pueden-usar-para-realizar-la-estimación-en-el-modelo-slim}

-   Determinista
-   Simulación
-   Programación lineal


#### En el modelo COCOMO II ¿Qué mide el parámetro M de la fórmula del esfuerzo? {#en-el-modelo-cocomo-ii-qué-mide-el-parámetro-m-de-la-fórmula-del-esfuerzo}

Es un conjunto de multiplicadores de esfuerzo


#### Indica las dos propuestas de IFPUG para requisitos no funcionales e indica sus diferencias {#indica-las-dos-propuestas-de-ifpug-para-requisitos-no-funcionales-e-indica-sus-diferencias}

SLIM, no sé otra


#### Explica las diferencias entre una EO (Salida Externa) y EQ(Consulta Externa) {#explica-las-diferencias-entre-una-eo--salida-externa--y-eq--consulta-externa}

Un EO será un elemento funcional que realice algún cálculo
Un EQ será un elemento funcional que retorne una información


#### Fórmula del método SFP {#fórmula-del-método-sfp}

SFP = 4.6 \* EP + 7 \* LF


#### Fórmula para calcular los PF en proyecto de mantenimiento {#fórmula-para-calcular-los-pf-en-proyecto-de-mantenimiento}

PFM = PFañadidas + PFeliminads + PFmodificadas


### Identificar Elementos <span class="tag"><span class="20_">20%</span></span> {#identificar-elementos}

ILF, ELF, EI, EO, EQ, No Aplica


## Apuntes de última hora {#apuntes-de-última-hora}


### Cuando se debe estimar? {#cuando-se-debe-estimar}

-   En el inicio del proyecto, estudio de viabilidad
-   En la fase de requisitos
-   En la fase de diseño


### métodos  que se pueden usar para realizar la estimación en el modelo SLIM {#métodos-que-se-pueden-usar-para-realizar-la-estimación-en-el-modelo-slim}

-   Determinista
-   Simulación
-   Programación lineal


### Fórmula del método SFP {#fórmula-del-método-sfp}

SFP = 4.6 \* EP + 7 \* LF


### COCOMO {#cocomo}

PM = 2.94 \* (KSLOC)^B \* M


#### B {#b}

Factor exponencial de escala.


#### M {#m}

Es un conjunto de multiplicadores de esfuerzo.


#### Niveles COCOMO {#niveles-cocomo}

-   Nivel de construcción de prototipos
-   Nivel de diseño inicial
-   Nivel de post-arquitectura


### Técnicas de estimación ISBSG {#técnicas-de-estimación-isbsg}

-   Utilizando ecuaciones de regresión (en etapas iniciales)
-   Por comparación
-   Por analogía


## Métodos de Estimación Software {#métodos-de-estimación-software}


### Cuando se debe estimar? {#cuando-se-debe-estimar}

Por lo menos tres veces:

-   En el inicio del proyecto, estudio de viabilidad
-   En la fase de requisitos
-   En la fase de diseño

La precisión de la estimación, es distinta a medida que avanza el proyecto.


### Métodos heurísticos {#métodos-heurísticos}


#### Juicio de expertos {#juicio-de-expertos}

Adivinación basada en la experiencia personal
Se suele emplear en ausencia de datos cuantificados o empíricos

<!--list-separator-->

-  Delphi

    -   Un coordinador proporciona a cada ezperto una especificación del proyecto
    -   Todos los expertos rellenan el impreso de forma anónima
    -   El coordinador ofrece a cada ezperto el valor medio de todas las estimaciones para que lo compare con la suya
    -   Se repite el proceso de recogida de estimaciones hasta llegar a un consenso

<!--list-separator-->

-  Delphi de banda ancha

    Se hacen reuniones antes y despues de estimar para discutir opiniones con otros expertos


#### Por analogía {#por-analogía}

Consiste en una variante formal de la técnica de juicio de expertos
Se compara el proyecto con uno a más proyectos ya terminados


#### Por descomposición {#por-descomposición}

**estimación por jerarquía de componentes**
Se descompone el proyecto en sus partes, se estima cada una y luego se suma


#### Algorítmico {#algorítmico}

Son fórmulas matemáticas que establecen la relación entre elementos de estimación
Para su realización utilizan datos de proyectos anteriores


### Métodos paramétricos {#métodos-paramétricos}

Estos métodos estiman los principales parámetros de un proyecto tomando como elemento de partida el tamaño del producto a desarrollar

-   COCOMO
-   SLIM
-   Basado en puntos función


## Estimación del Tamaño Funcional {#estimación-del-tamaño-funcional}


### Basados en Puntos Función {#basados-en-puntos-función}


#### IFPUG {#ifpug}

<!--list-separator-->

-  Identificar el alcance y los limites de la aplicación

<!--list-separator-->

-  Identificar los 5 elementos funcionales

    -   Una aplicación puede usar un ILF o ELF en muchos procesos pero se cuentan una sola vez
    -   Un proceso elemental puede mantener más de un ILF
    -   Un fichero no se puede contar a la vez como ILF y ELF
    -   Un ELF será un ILF en otra aplicación
    -   No siempre un fichero físico, tabla o clase de objeto equivala un fichero lógico
    -   Si los datos se mantienen dentro de la aplicacióne stamos ante un ILF, en caso contrario es un ELF
    -   Un ILF mantenido por más de una aplicación, se contará en cada aplicación que lo mantenga
    -   Si los datos se reciben desde fuera de la aplicación estamos ante un EI
    -   Si el proceso mantiene algún ILF estamos ante un EI o EO, en caso contrario es un EQ
    -   Si el proceso calcula algún dato derivado estamos ante un EO
    -   Si el proceso tiene algún cálculo, se habrá identificado un EO
    -   Si el proceso solo recupera datos de uno o más ILFs o ELFs, estamo ante un EQ

    <!--list-separator-->

    -  ILF

        Datos almacenados y mantenidos dentro del sistema

    <!--list-separator-->

    -  ELF

        Datos utilizados por el sistema pero mantenidos externamente

    <!--list-separator-->

    -  EI

        Datos ingresados al sistema desde el exterior
        Un formulario

    <!--list-separator-->

    -  EO

        Información que el sistema produce y entrega fuera
        Un calculo

    <!--list-separator-->

    -  EQ

        Solicitudes de datos que implican entrada y salida
        Una busqueda

<!--list-separator-->

-  Evaluar la complejidad

    <!--list-separator-->

    -  DET

        Elementos de datos únicos en un componente

        -   Las claves foráneas se consideran DETs.
        -   Los campos repetitivos se cuentan como un solo DET.
        -   Los campos que aparecen más de una vez por técnicas de implantación se cuentan como un único DET.
        -   Los campos que aparecen debidos a técnicas de implantación y que no son reconocibles por el usuario, no se cuentan.

    <!--list-separator-->

    -  RET

        -   Cuente como un RET cada subgrupo opcional u obligatorio de un ILF/ELF.
        -   De no haber subgrupos, cuente el ILF/ELF como un RET.
        -   En caso de identificar grupos repetitivos en una entidad, sume 1 RET por cada grupo repetitivo.

    <!--list-separator-->

    -  FRT

        Archivos o tablas referenciadas por un componente

<!--list-separator-->

-  Calculoar los PF sin ajustar (PFSA)

<!--list-separator-->

-  Evaluar los 14 atributos de ajuste

    ```calc
    PFA = PFSA * (0.65 + (0.01 * TFA))
    ```

    PFSA \* 65% &lt;= PFA &lt;= PFSA \* 135%
        Cada factor se evalua del 0 a 5 y se suma

<!--list-separator-->

-  Calcular el factor de ajuste

<!--list-separator-->

-  Calcular el valor final de los PF (PFA)


#### FP Lite {#fp-lite}

Se identifican los elementos funcionales, pero se asume que todos son complejidad media, al resultado se le aplica un +-20%


#### E&amp;QFP {#e-and-qfp}

**Early and Quick Funcion Points**

-   Identifical el alcance y los limites de la aplicación
-   Estableder el nivel de detalle de la estimación
-   Identificar los BFC (Base FUnctional Components), datos y transacciones
-   Identificar la terna de valores de PF sin ajustar (mínimo, probable, máximo)
-   Estabelcer el factor de ajuste
-   Calcular la terna de valores de PF ajustados (mínimo, probable, máximo)


#### SFP {#sfp}

**Simple Function Point**

```calc
SFP = 4.6 * EP + 7 * LF
```


### Basado en Puntos de Casos de Uso {#basado-en-puntos-de-casos-de-uso}

-   Clasificación de los actores según la complejidad. Obtención del Peso de los Actores sin ajustar
-   Clasificación de los casos de uso según la complejidad. Obtención de los Casos de Uso sin Ajustar
-   Calcular los Puntos de Casos de Uso sin Ajustar
-   Determinación de los Factores de Complejidad Técnica
-   Determinación de los Factores de Entorno
-   Calcular los Casos de Uso Ajustados


### En metodologías ágiles: Puntos Historia {#en-metodologías-ágiles-puntos-historia}


## Estimación del Tamaño No Funcional {#estimación-del-tamaño-no-funcional}


### SNAP {#snap}

Diseñado para funcionar con IFPUG
Permite evaluar y gestionar la calidad de los aspectos no - Simulación 1
funcionales del software, como la usabilidad, el rendimiento y la seguridad


## Estimación del Esfuerzo, Duración y Coste {#estimación-del-esfuerzo-duración-y-coste}


### ISBSG {#isbsg}

Tres técnicas de estimación:


#### Utilizando ecuaciones de regresión (en etapas iniciales) {#utilizando-ecuaciones-de-regresión--en-etapas-iniciales}

<!--list-separator-->

-  Se calcula:

    Esfuerzo
    Duración
    Productividad
    Velocidad de entrega

<!--list-separator-->

-  variables

    Alcance
    Plataforma
    Tipo de Lenguaje


#### Por comparación {#por-comparación}

Seleccionar un conjunto de proyectos similares del repositorio
Utilizar los valores medios de los diferentes parámetros como estimación
Se utilizan los rangos optimista, probable, conservador


#### Por analogía {#por-analogía}

Seleccionar del repositorio únicamente el/los proyectos más parecidos al nuestro
Idelament equedarse solo con un proyecto, el que más encaje
Utilizar sus valores como estimación


### COCOMO II {#cocomo-ii}


#### Nivel de construcción de prototipos {#nivel-de-construcción-de-prototipos}

Puntos objeto
PM = NOP / PROD
NOP = OP \* (100 - %Reutilización) / 100


#### Nivel de diseño inicial {#nivel-de-diseño-inicial}

PM = 2.94 \* (KSLOC)^B \* M

<!--list-separator-->

-  B

    Factor exponencial de escala. Mide el incremento del esfuerzo requerido al incrementarse el tamaño del proyecto.
    El valor varia dependiendo de la novedad del proyecto, la flexibilidad en el desarrollo, los processo de resolución de riesgos, la cohesión del equipo de desarrollo y el nivel de madurez.

<!--list-separator-->

-  M

    Es un conjunto de 7 multiplicadores de esfuerzo.
    Cada uno de ellos se puede clasificar en 7 niveles diferentes, que expresan el impacto que tiene sobre el esfuerzo de desarrollo.


#### Nivel de post-arquitectura {#nivel-de-post-arquitectura}

PM = 2.94 \* (KSLOC)^B \* M

<!--list-separator-->

-  M

    Es un conjunto de 17 multiplicadores de esfuerzo.


### SLIM {#slim}

**Software Lifecycle Management**

-   La duración de un proyecto se incrementa de forma exponencial a medida que crece el tamaño del proyecto.
-   El esfuerzo se incrementa exponencialmente con el tamaño.
-   El esfuerzo es un factor determinante en el coste del proyecto.
-   La productividad disminuye a medida que crece el tamaño.
-   La complejidad del proyecto incide directamente en el esfuerzo y tiempo.
-   El número de defectos de un proyecto crece con el tamaño.
