---
title: "Apuntes Sistemas Inteligentes"
date: 2022-01-01T00:00:00+01:00
lastmod: 2025-03-13T00:00:00+01:00
tags: ["español"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})


## T1 Introducción {#t1-introducción}


### Agente {#agente}

Arquitectura+Programa


#### Agente reactivo simple {#agente-reactivo-simple}

Selecciona una acción en base a percepciones actuales
Se basa en reflejos


#### Agente basado en modelos {#agente-basado-en-modelos}

Mantiene un estado interno que almacena la evolución del ambiente


#### Agente basado en metas {#agente-basado-en-metas}

Conoce una serie de objetivos a alcanzar
Planifica la secuencia de acciones para lograr sus metas


#### Agente basado en utilidad {#agente-basado-en-utilidad}

Cada estado tiene asociada una utilidad
El agente debe alcanzar los estados de mayor utilidad


### Determinimo {#determinimo}


#### Deteminista {#deteminista}

Cada acción de un agente lleva a un estado que es predecible


#### Estocástico {#estocástico}

El estado al que se llega depende de un elemento aleatorio, además de la acción tomada


### Obsevabilidad {#obsevabilidad}


#### Completamente {#completamente}

Los sensores del agente le permiten conocer el estado completo del entorno


#### Parcialmente {#parcialmente}

El agente solo puede obtener una noción parcial del estado actual


## T2 búsqueda {#t2-búsqueda}

Un problema de búsqueda se compone de:

-   Estado inicial
-   Conjunto de acciones
-   Modelo de transición
-   Prueba de meta
-   Función de coste del camino


### NO Informada (a ciegas) {#no-informada--a-ciegas}


#### Amplitud {#amplitud}

Explora un nivel de profundidiad por completo antes de pasar al siguiente.
Siempre encuentra la solución que requiere menos pasos, si existe y si tiene tiempo y memoria suficiente.
Es óptima si todos los pasos cuestan lo mismo, de lo contrario la primera solución no es necesariamente la mejor.
Alto coste de memoria


#### Coste uniforme {#coste-uniforme}

Es una variación de la búsqueda por amplitud/anchura.
Expande lso nodos con menor coste de camino, si todos tienen el mismo coste será igual a amplitud.
Es óptima


#### Profundidad {#profundidad}

Recorre el arbol en profundidad.
Bajo coste de memoria.
No es óptima ya que puede encontrar una solución más profunda que la óptima


#### Profundidad limitada {#profundidad-limitada}

Ya que la búsqueda en profundidad puede cear en caminos infinitos, se limita la profundidad máxima.


#### Profundidad iterativa {#profundidad-iterativa}

La búsqueda en profundidad limitada no es completa, para arreglar eso incrementamos gradualmente el límite
Tienen los beneficios de la búsqueda en profundidad y en anchura la mismo tiempo.


### Informada (heurística) {#informada--heurística}


#### Avara {#avara}

f(n) solo considera el coste mínimo estimado para llegar a una solución a partir de un nodo n, h(n) o función heurística
**f(n) = h(n)**
No es óptima ni completa porque puede perderse un buclesy recorrer rutas infinitas


#### A\* {#a}

f(n) considera el coste mínimo total del camino a un nodo solución que pase por el nodo n
**f(n) = g(n) + h(n)**
g(n) siendo el coste consumido para llegar a n
No es práctico para problemas muy grandes por su complejidad espacial (mantiene todos los nodos generados en memoria)


## T3 Representación del conocimiento {#t3-representación-del-conocimiento}


### Métodos declarativos {#métodos-declarativos}

Colección estática de hechos
Fácil de incrementar


#### Redes semánticas {#redes-semánticas}

-   Se reprensenta como un conjunto de nodos conectados entre sí por medio de arcos etiquetados
-   Similar a un diagrama Entidad Relación de base de datos
-   Los enlaces son  unidireccionales


#### Frames o Marcos {#frames-o-marcos}

Es muy similar a org-mode
Se forma por cabeceras y slots

-   Cabecera: Le da un nombre al frame, y es representativa de la clase de objetos que se describen
-   Slots: Elementos que representan un propiedad o tributo del elemento genérico representado por el frame
    Pueden anidarse


### Métodos procedimentales {#métodos-procedimentales}

El conocimiento se representa como procedimientos
Premite trabajar con información de caracter probabilistico, incorpora conocimiento heurístico


#### Reglas de producción {#reglas-de-producción}

Consta de tres partes:

-   **IF** concidión o premisa
-   **THEN** conclusión o acción
-   **ELSE** alternativa


## T4 Sistemas de producción {#t4-sistemas-de-producción}

Sistemas inteligentes basados en reglas que operan frente a una base de hechos con mecanismos de emparejamiento formando parte explícita de su arquitectura.


### Arquitectura {#arquitectura}


#### Base de conocimiento {#base-de-conocimiento}

Describe el universo de discurso o ciminio en el cual el sistema de producción tiene que plantear soluciones


#### Memoria activa {#memoria-activa}

Es la estructura que contiene toda la información de naturaleza estática necesaria para resolver un problema concreto.

-   Datos iniciales del problema
-   Datos incorporados con posterioridad
-   Hechos establecicos durante los procesos inferenciales
-   Hipótesis de trabajo, metas o submetas que todavóa no han sido establecidas

Almacena todos los cambios del estado, representando el estado actual


#### Motor de inferencias {#motor-de-inferencias}

Interprete de reglas + Estrategia de control

-   Examina la memoria activa y determina qué reglas deben ejecutarse
-   Controla y organiza el proceso de ejecución de las reglas selecionadas en el paso anterior
-   Actualiza la memoria activa cuando sea preciso
-   Asegura el autoconocimiento del sistema

Es un programa secuencial cuya misión es determinar el siguiente paso a ejecutar


### Dinámica de los sistemad de produción {#dinámica-de-los-sistemad-de-produción}


#### Dirigidos por los datos {#dirigidos-por-los-datos}

-   Las inferencias se obtienen cuando los antecedente de alguna de sus reglas de produción se emparejan con, al menos, una parte de los hechos que describen el estado actual
-   Son menos específicos, proque ejecutarán todas las reglas disponibles en función de la información introducida


#### Dirigidos por las metas {#dirigidos-por-las-metas}

-   Tanto antecedentes como consecuentes de las reglas deben ser considerados como aserciones sobre los datos. En este caso, la activación de las reglas tiene lugar por medio de un encadenamiento regresivo, y el emparejamiento se efectúa a través de las conclusiones de las reglas.
-   Son más específicos, porque la ejecución lleva implícito un proceso de búsqueda


### Ciclo básico de los sistemas de producción {#ciclo-básico-de-los-sistemas-de-producción}


#### Fase de decisión o selección de reglas {#fase-de-decisión-o-selección-de-reglas}


#### Fase de ejecución {#fase-de-ejecución}


## T5 Modelos de razonamiento {#t5-modelos-de-razonamiento}


### Modelos categóricos {#modelos-categóricos}

Dominios de naturaleza marcadamente simbólica, con soluciones que pueen establecerse con total seguridad


#### Procedimiento {#procedimiento}

-   Identificación de Manifestaciones
-   Identificación de Interpretaciones
-   Construción de E (función de conocimiento)
-   Construcción del conjunto completo de conplejos de manifestacioes
-   Construcción del conjunto completo de complejos de interpretaciones
-   Construcción del conjunto completo de complejos manifestación-interpretación


### Modelos probabilísticos {#modelos-probabilísticos}

Dominios de naturaleza estadística, soluciones no obtenibles de forma unívoca


### Modelos de razonamiento bajo incertidumbre {#modelos-de-razonamiento-bajo-incertidumbre}

Dominios con incertidumbre, inherente a datos o a los propios mecanismos inferenciales.


### Modelo de razonamiento basado en conjuntos difusos {#modelo-de-razonamiento-basado-en-conjuntos-difusos}

Dominios en los que los elementos diferenciales incluyen matices lingüísticos


## T6 Sistemas Conexionistas Alimentados Hacia Delante {#t6-sistemas-conexionistas-alimentados-hacia-delante}


### La neurona artificial {#la-neurona-artificial}

También llamada Elemento de Procesado (EP o PE).
Los valores de entrada son números reales, lo más simple es (0,1).
Las unidades son conectadoas a través de conexiones con un valor (peso) asociado que codifican el conocimiento de la red.
El **Bias** es la predisposición de una neurona a activarse
Cuentan con una función de transferencia


### Adaline {#adaline}

**Adaptive Linear Element**
Una sola capa de PE lineales pueden realizar aproximaciones a funciones lineales o asociación de patrones.
Se puede entrenar con el algoritmo LMS (Least Mean Square o Regla Delta)
Su limitación es que solo realiza aproximaciones lineales


#### Aplicaciones {#aplicaciones}

Diseño de filtros capaces de eliminar ruido en señales portadores de información.
RNA de preción de valores futuros en señales.


### Perceptrón {#perceptrón}

Primer modelo de RNA (1958)
Tiene una capa de entrada y un único elemento en la capa de salida.
Capaz de resolver problemas lineales separables


#### Perceptron multicapa {#perceptron-multicapa}

-   Capa de entrad
-   Capas ocultas
-   Capa de salida


### Aplicaciones {#aplicaciones}

Se usan para el reconocimiento de patrones.
Problemas donde es más importante el patrón que los datos exactos.
Se usa RNA cuando no se puede escribir un algoritmo que que resuelva el problema, o no se puede explicitar el conocimiento.

-   Clasificación
-   Predicción
-   Clustering (Agrupamiento)
-   Aproximación de curvas
-   Regresión


## T9 Otros Modelos de Sistemas Conexionistas {#t9-otros-modelos-de-sistemas-conexionistas}


### Mapas auto-organizados (SOM) {#mapas-auto-organizados--som}


#### Ventajas {#ventajas}

-   Transparente a los datos de entrada (se limitan a comparar vectores)
-   Adaptación local de los vectores de referencia a la densidad de probabilidad de los datos
-   Facilidad de visualización gracias a la malla que conforma la topología de la capa de salida
-   Facilidad de integración con otras técnicas


#### Limitaciones o inconvenientes {#limitaciones-o-inconvenientes}

-   Necesidad de determinar la arquitectura exacta de la red antes de someterla al entrenamiento e imposibilidad de modificar su diseño durante el mismo
-   Algunas neuronas pueden no ser entrenadas: pueden existir vectores de pesos muy distnaciados ade las entrads, con lo cual, nunca ganarán
-   No se puede medir hasta que punto es buena la neurona vencedora, la neurona que gana es la más cercana a la entrada, pero no podemos cuantificar si está cerca o lejos de lso pesos adecuados
-   Importantísimo en estos sistemas: la inicialización de los pesos
-   Son caros computacionalmente cuando se incrementa la dimensión de los datos


### Crecimiento de redes (GCS, GCG) {#crecimiento-de-redes--gcs-gcg}

-   La topología autoadaptativa de la red es altamente independiente del usuario.
-   La estructura de la capa de salida de la red queda automáticamente establecida por los datos de entrada
-   Los parámetros de entrenamiento que hay que establecer son relativamente pocos y constantes, en contraste con los parámetros de área de vecindad o factor de aprendizaje dependientes del tiempo en el modelo Kohonen.
-   La capacidad de insertar y eliminar neuronas ofrece la posibilidad de obtener mejores estimaciones de la densidad deprobabilidad del espacio de entrada que los de otras redes autoorganizativas, al no posicionar neuronas en zonas del espacio de entrada con baja o nula densidad.
-   Tienen suficiente capacidad para procesar espacios de datos de gran dimensión, tareas de descubimiento de conocimiento como: aproximación de funciones, visualización, clustering, etc.
-   Aunque originalmente el entrenamiento es no supervisado, puede adapatarse a procesos de aprendizaje supervisado para clasificación.


## T10 Computación Evolutiva {#t10-computación-evolutiva}
