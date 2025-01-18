---
title: "Estructura de Computadores"
author: ["miguel"]
date: 2022-01-01T00:00:00+01:00
lastmod: 2025-01-18T00:00:00+01:00
tags: ["español"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})


## Final Estructura de Computadores {#final-estructura-de-computadores}

-   Número de preguntas: 4
-   Tipo de examen: problemas de desarrollar

Son casos prácticos donde hay que aplicar el contenido teórico que vemos en la asignatura, en lugar de ser tan pautados y mecánicos como los que hicimos en clase de ejercicios.
Cada ejercicio es 1 punto.

Para los ejercicios hay que entender la teoría y redactar de forma limpia durante el examen para convencer de que se merece el aprobado a pesar de poder estar mal.
Parece ser que no es necesario memorizar fórmulas, en palabras del profesor "hay que entenderlas", eso me da a entender que pueden hacer falta de todas formas, pero no será necesario hacer ejercicios de cálculos complejos deduciendo valores.


### Ejercicio 1 {#ejercicio-1}

Tema 2 y 3, con posible apartado del 1 pocesador y rendimiento.
Los ejercicios preguntan sobre caminos de datos, posibles mejoras al rendimiento, comparación de técnicas.


### Ejercicio 2 {#ejercicio-2}

Tema 5 Caché


### Ejercicio 3 {#ejercicio-3}

Tema 6 Memoria virtual


### Ejercicio 4 {#ejercicio-4}

Tema 7 y 8
un ejercicio de buses de memoria
un ejercicio de RAID (shadow legends)


## T1 Rendimiento {#t1-rendimiento}


### Ley de AMDAHL {#ley-de-amdahl}

Tdespués = Tafectado / Am + Tno_afectado
A = Tantes / Tdespués = 1 / ((1 - Fm) + Fm / Am)

Fm = faracción mejorada
Am = Factor de mejora


## T2 Procesador segmentado {#t2-procesador-segmentado}


### Dependencias {#dependencias}

| Dependencia de datos   | depende de resultados anteriores    |
|------------------------|-------------------------------------|
| Dependencia de nombre  | dos instrucciones usan el mismo     |
|                        | registro pero no hay flujo de datos |
| Dependencia de control | determina el orden de una           |
|                        | instrucción con respecto a una de   |
|                        | salto                               |


### Riesgos {#riesgos}


#### De datos {#de-datos}

existen dependencias entre instrucciones

| **RAW** | Read After Write  | D.verdadera     |
|---------|-------------------|-----------------|
| **WAW** | Write After Write | D. de salida    |
| **WAR** | Write after Read  | antidependencia |


#### Estructurales {#estructurales}

El hardware no puede ejercutar dos instrucciones en la misma etapa al mismo tiempo


#### De control {#de-control}

Surgen problemas de determinar la instrucción correcta que se tiene que ejecutar después de un salto.


### técnicas de mejora {#técnicas-de-mejora}


#### Unidad de detección de riesgos (bloqueo) {#unidad-de-detección-de-riesgos--bloqueo}

El hardware para al ejecución de las instrucciones en el caue para esperar a que el dato necesario esté disponible


#### Unidad de anticipación {#unidad-de-anticipación}

El hardware adelanta el dato que hace falta una vez éste está calculado, sin necesidad de esperar a la escritura en el registro


## T3 Procesamiento salto {#t3-procesamiento-salto}


### Purga del cauce {#purga-del-cauce}

Elimina del cauce aquellas instrucciones que han entrado después de la intrucción de salto y antes de que este se resuelva.
Muy ineficiente.


### Reducir la latencia del salto {#reducir-la-latencia-del-salto}

Adelantar la ejecución del salto de la etapa MEM a la etapa ID.
Implica modificar el hardware y el cotrol del cauce.


### Predicción de salto {#predicción-de-salto}


#### Predición fija {#predición-fija}

El hardware siempre realiza la misma predicción.


#### Predición dinámica {#predición-dinámica}

Depende del comportamiento del salto en tiempo de ejecución y cambirá si el salto cambia su comportamiento durante la ejecución.
Un posible modelo almacena un bit de salto que cambia cuando este falle, también está la opción de dos bits que cambia con dos fallos consecutivos.


### Salto retardado {#salto-retardado}

Las intrucciones que se captan después de una instrucción de salto y antes de la modificación de PC se ejecutan en su totalidad.
El compilador debe ubicar una instrucción que no modifique la semántica o una NOP


## T4 Memoria principal {#t4-memoria-principal}


## T5 Caché {#t5-caché}


### Organización {#organización}


#### Correspondencia directa {#correspondencia-directa}

-   Hace corresponder cada bloque de memoria principal a sólo una línea posible de caché.
-   Es una pequeña y rápida memoria estática de acceso aleatorio.

    | etiqueta | indice | desplazamiento |
    |----------|--------|----------------|


#### Totalmente asociativa {#totalmente-asociativa}

-   Permite que el bloque de memoria pueda cargarse en cualquier línea de la caché.
-   Cuando esté llena se necesita un algoritmo de remplazo.
-   En lugar de una dirección se usa una etiqueta y la memoria la buscará en su directorio.
-   Es muy complejo y costoso.

    | etiqueta | desplazamiento |
    |----------|----------------|


#### Asociativa por conjuntos {#asociativa-por-conjuntos}

-   Permite que cada bloque de memoria pueda ser alojado en más posiciones diferentes de la caché
-   Consiste en dividir la caché en conjuntos de varias líneas.
-   Cada dirección de memoria tiene asignado un conjunto de forma directa, pero dentro de ese, puede ir a cualquier línea.
-   Consigue resultados similares a la asociatividad total con un coste razonable.

    | etiqueta | indice | desplazamiento |
    |----------|--------|----------------|


### Técnicas de optimización {#técnicas-de-optimización}


#### Separar cahé de datos e instrucciones {#separar-cahé-de-datos-e-instrucciones}

Elimina fallos de conflicto entre instrucciones y datos, casi dobla el ancho de banda entre la CPU y la jerarquía de memoria.


#### Reducción de tasa de fallos {#reducción-de-tasa-de-fallos}

<!--list-separator-->

-  Mayor tamaño de línea

    Incrementa la penalización por fallo pero reduce los fallos forzosos

<!--list-separator-->

-  Incrementar la asociatividad

    Menos fallos de conflicto pero mayor tiempo de acierto y coste.

<!--list-separator-->

-  Optimización en tiempo de compilación

    Fusión de arrays, intercambio de lazos, fusión de lazos, blocking


#### Reducción de la penalización de fallo {#reducción-de-la-penalización-de-fallo}

Caché de dos niveles


#### Reducción del tiempo de acierto {#reducción-del-tiempo-de-acierto}

Caché pequeñas y simples, con correspondencia directa se puede solapar el chequeo de la etiqueta con la trasmisión de datos.


## T6 Memoria virtual {#t6-memoria-virtual}

|                            | **página**                 | **segmento**                      |
|----------------------------|----------------------------|-----------------------------------|
| **palabras por dirección** | una                        | Dos (segmento y desplazamiento)   |
| **Visibilidad**            | Invisible a la aplicación  | Puede ser visible a la aplicación |
| **Reemplazo**              | Trivial (todos los bloques | Difícil (debe haber espacio       |
|                            | son iguales)               | contiguo)                         |
| **Eficiencia de memoria**  | Fragmentación interna      | Fragmentación externa             |
| **Eficiencia de dico**     | Sí. El tamaño de página se | No necesariamente. Puede haber    |
|                            | ajusta para equilibrar     | segementos demasiado pequeños     |
|                            | tiempo de acceso y         |                                   |
|                            | transferencia              |                                   |


### Sistema paginado {#sistema-paginado}

-   Los bloques son todos del **mismo tamaño**
-   Los bloques se llaman páginas y una excepción es un **fallo de página**
-   El mapa de traducción es una **tabla de páginas**
    ![](fotos_notas/mvirtual_paginada.png)


#### Paginación de 2 niveles {#paginación-de-2-niveles}

Para disminuir el tamaño que ocupa la TP en memoria física dividimos las entradas de la TP en bloques de igual tamaño, cada uno de esos bloques será una TP de nivel 2.

Las direcciones virtuales contienen ahora ambos numeros de página virtual 1 y 2
![](fotos_notas/mvirtual_paginada_2niveles.png)
Para traducir:

-   Se busca PV1 en TP1 para obtener la páginad física que contiene RBTP2. A esa página física se le concatena un deplazamiento 0.
-   Se busca PV2 en la TP2 ubicada en RBTP2 para obtener la página física que buscamos. A esa página física se le concatena el desplazamiento de la direción virtual.


#### TLB (Translation Lookaside Buffer) {#tlb--translation-lookaside-buffer}

almacena los pared PV-PF más recientemente referenciados hunto con los bits de gestión que se requieran.


#### Caché virtual {#caché-virtual}

-   Usamos direcciones virtuales para indexar la caché.
-   Solo traducimos la dirección si tenemos un fallo en la caché.
-   Dos procesos no pueden compartir caché virtual por lo tanto necesitoamos identificar el PID del proceso en cada línea o bien purgamos la caché en cada cambio de contexto.


#### VIPT (Virtually Indexed Phisically Tagged) {#vipt--virtually-indexed-phisically-tagged}

-   Buscamos en la TLB y en la caché al mismo tiempo
    -   La TL indexa la PV y se obtiene la PF
    -   La caché se indexa con el Desplazamiento y se obtiene la etiqueta almacenada en el directorio caché
-   SI la página y la etiqueta coinciden la caché envía el dato a la CPU


### Sistema segmentado {#sistema-segmentado}

-   Los bloques son de **diferentes tamaños**
-   Los bloques se llaman segmentos y una excepción es un **fallo de segmento**
-   El mapa de tradicción es una **tabla de segmentos**
-   Para acelerar la asignacion en fallo de segmento se usan dos listas enlazada, la lista de segmentos reselvados y la lista de segmentos libres.
-   Cuando se solicita un segmento no residente y no queda sitio en la tabla se puede hacer **compactación** o **remplazo**


#### Algoritmo First-Fit {#algoritmo-first-fit}

El segmento se ubica en el primer segmento de memoria principal que tenga un tamaño suficiente.

-   El segmento se ubica al final del primer segmento donde quepa, luego se actualiza la lista eliminando el espacio ocupado.


#### Algoritmo Best-Fit {#algoritmo-best-fit}

El segmento se ubica en el segmento más pequeño que tenga un tamaño suficiente

-   Se ejecuata igual que First-Fit pero la lista de segmentos está ordenada ascendentemente
-   Minimiza el tamaño del segmento libre sobrante tras la ubicación
-   Luego puede generar mucha **fragmentación externa**


#### Algoritmo Worst-Fit {#algoritmo-worst-fit}

El segmento se ubica en el segmento más grande

-   Se ejecuata igual que First-Fit pero la lista de segmentos está ordenada descendentemente
-   Basado en la idea de que, tras la ubicación, el segmento sobrante es suficientemente grande como para ser útil.


#### Algoritmo Binary-Buddy {#algoritmo-binary-buddy}

Subdivisión binaria

-   Reduce la **fragmentación externa**
-   Puede provocar mucha **fragmentación interna** (solución: Slab allocation)

<!--list-separator-->

-  Procedimiento

    Tamaño de segmento potencia entera de 2: 2^i

    -   Se divide la lista de segmentos libres en n listas (2^n es el tamaño máximo de segmento)
    -   La i-ésima lista encadena los segmentos libres de tamaño 2^i (buddies)
    -   Las n listas pueden reestructurarse de dos formas:
        -   Un segmento libre de la lista i se divide en 2 segmentos iguales y se encadenan a la lista i-1
        -   Dos segmentos libres consecutivos de la lista i pueden juntarse y moverse a la lista i+1


## T7 Sistemas almacenamiento {#t7-sistemas-almacenamiento}


### RAID {#raid}

Conjunto de unidades físicas de disco vistas por el SO como una única unidad lógica

| RAID 0     | no tiene redundancia **no** es RAID       |
|------------|-------------------------------------------|
| RAID 1     | duplica toda la información (espejo)      |
| RAID 2,3y4 | información redundante en un solo disco   |
| RAID 5y6   | info redundante distribuida en los discos |


#### RAID 0 {#raid-0}

-   No incluye redundancia de datos
-   Striping (información trocada)
-   Franja: conjunto de tiras lógicas consecutivas proyectadas sobre misma tira en cada disco
-   Acceso paralelo a discos reeduce el tiempo de transferencia
    ![](fotos_notas/raid0.png)


#### RAID 1 {#raid-1}

Tiene redundancia que se logra con duplicación de todos los datos. Gran fiabilidad

-   apenas hay penalización de escritura
-   La recuperación es sencilla
-   necesitas el doble de discos es cara.
    ![](fotos_notas/raid1.png)


#### RAID 2 {#raid-2}

-   Acceso a discos sincronizado
-   Almacena códigos de Hamming en los discos de redundancia, ocupa menos que RAID 1
-   ALtas velocidades de transferencia pero muy complejo y constoso **No de usa**
-   Striping a nivel de bit
    ![](fotos_notas/raid2.png)


#### RAID 3 {#raid-3}

-   Striping a nivel de byte
-   Acceso a discos sincronizado
-   Solo un disco de redundanciausando información de paridad como ECC
-   Alta velocidad de transferencia
-   Implementación costosa
    ![](fotos_notas/raid3.png)


#### RAID 4 {#raid-4}

-   Acceso independiente a los discos
-   Tiras de datos de mayor tamaño que 2 y 3
-   Tiras con bits de paridad en un disco de paridad (cuello de botella en acceso a ese disco)
    ![](fotos_notas/raid4.png)


#### RAID 5 {#raid-5}

-   Como RAID 4 pero distribuyendo tiras de paridad a lo largo de los discos
-   Elimina cuellos de botella
    ![](fotos_notas/raid5.png)


#### RAID 6 {#raid-6}

-   Como RAID 5 pero on dos ECCs en discos diferentes
-   PErmite recuperar de dos fallos de disco simultaneos
    ![](fotos_notas/raid6.png)


#### RAID 0+1 {#raid-0-plus-1}

{{< figure src="fotos_notas/raid01.png" >}}


#### RAID 1+0 {#raid-1-plus-0}

{{< figure src="fotos_notas/raid10.png" >}}


## T8 Entrada salida {#t8-entrada-salida}


### Bus síncrono {#bus-síncrono}

Poca lógica de control, alta velocidad de funcionamiento. Imposible mezclar dispositivos con grandes diferencias de velocidad y limitados en longitud.

-   peticion a memoria con la dirección
-   lectura de palabra en memoria
-   envío de palabra a procesador


### Bus asíncrono {#bus-asíncrono}

Amplio rango de diferented velocidaded, mejor adaptación a cambios tecnológicos y longitudes más largas. Protocolo más complejo y lento, líneas de control adicionales y más dificil acotar la duración de las transacciones.

-   petición de direción de memoria(1)
-   reconocimiento y lectura (2,3,4 o el tiempo de servir el dato)
-   envio a memoria (5,6,7)
