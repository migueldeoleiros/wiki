---
title: "Prácticas Curriculares Merlín"
date: 2025-02-05T00:00:00+01:00
lastmod: 2025-02-05T00:00:00+01:00
tags: ["español"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})


## Informes de Seguimiento {#informes-de-seguimiento}


### [Prácticas Curriculares informe 1]({{< relref "20250205081912-practicas_curriculares_informe_1.md" >}}) {#prácticas-curriculares-informe-1--20250205081912-practicas-curriculares-informe-1-dot-md}


### [Prácticas Curriculares informe 2]({{< relref "20250205082046-practicas_curriculares_informe_2.md" >}}) {#prácticas-curriculares-informe-2--20250205082046-practicas-curriculares-informe-2-dot-md}


### [Prácticas Curriculares informe 3]({{< relref "20250205082152-practicas_curriculares_informe_3.md" >}}) {#prácticas-curriculares-informe-3--20250205082152-practicas-curriculares-informe-3-dot-md}


### [Prácticas Curriculares informe 4]({{< relref "20250205082251-practicas_curriculares_informe_4.md" >}}) {#prácticas-curriculares-informe-4--20250205082251-practicas-curriculares-informe-4-dot-md}


### [Prácticas Curriculares informe 5]({{< relref "20250205082355-practicas_curriculares_informe_5.md" >}}) {#prácticas-curriculares-informe-5--20250205082355-practicas-curriculares-informe-5-dot-md}


### [Prácticas Curriculares informe 6]({{< relref "20250205082446-practicas_curriculares_informe_6.md" >}}) {#prácticas-curriculares-informe-6--20250205082446-practicas-curriculares-informe-6-dot-md}


## Contextualización {#contextualización}


### Datos da empresa {#datos-da-empresa}

| Nombre de la empresa | Merlín Software        |
| Departamento         | Desarrollo de Software |
| Actividades          | consultora tecnológica |
| Categoría            | Empresa nacional       |
| Tamaño               | Empresa pequeña        |


### Datos da práctica {#datos-da-práctica}

| Nombre tutor académico | Nieves Pedreira Souto                                                |
| Departamento           | Departamento de Ciencias da Computación e Tecnoloxías da Información |

| Nombre tutor profesional | Martín Álvarez Castillo |
| Cargo                    | CTO                     |

| Fechas           | Del 7 de febrero al 9 de mayo |
| Ayuda al estudio | 1000€                         |


## Cuerpo de la memoria {#cuerpo-de-la-memoria}


### Objetivos {#objetivos}

-   Adquirir experiencia en el desarrollo de aplicaciones móviles con Flutter.
-   Trabajar en equipo en un proyecto real de desarrollo de software.
-   Aprender a utilizar herramientas y tecnologías utilizadas en la industria del software.
-   Desarrollar habilidades de comunicación y trabajo en equipo.


### Herramientas y tecnologías usadas {#herramientas-y-tecnologías-usadas}

-   [Flutter]({{< relref "20250130142109-flutter.md" >}}): Framework de desarrollo de aplicaciones multiplataforma
-   Dart: Lenguaje de programación utilizado en Flutter.
-   GoRouter: Librería de Flutter para el manejo de la navegación entre páginas.
-   Riverpod: Librería de Flutter para el manejo de estado.
-   [Git]({{< relref "20250128165929-git.md" >}}): Sistema de control de versiones.
-   Vscode: Editor de código.
-   Gitea: Plataforma de alojamiento de código.
-   Penpot: Programa para diseño de mockups


### Trabajo realizado {#trabajo-realizado}

Durante el periodo de prácticas en Merlín Software, participé en varios proyectos y tareas formativas, que iré explicando de manera cronológica.


#### Formación Inicial en React {#formación-inicial-en-react}

**Duración: 1 semana**
Durante la primera semana de prácticas comencé con un programa de formación de React, siguiendo el curso de Epic React (epicreact.dev) no llegué a avanzar demasiado en este primer curso. Fue en su mayoría un resumen de los fundamentos de React.


#### Formación Aplicaciones con Flutter {#formación-aplicaciones-con-flutter}

**Duración: 2 semana**
A partir de la segunda semana cambié la formación a Flutter en lugar de React, con el objetivo de formarme para participar en un nuevo proyecto que se planeaba comenzar con esta tecnología.
Este curso se basaba en clases grabadas en las que se explicaban diferentes tópicos del desarrollo en Flutter desde lo más básico, y posteriormente se avanzaba en un proyecto cómo parte del curso en el que se iban incorporando las diferentes técnicas que aprendías.

Los temas tratados fueron:

-   Crear una pantalla a partir del diseño
-   Navegación
-   Crear una app con conexión a API
-   Estados
-   Programación asíncrona en Dart
-   Network y Data Models
-   State Management con Provider
-   Persistencia de datos

Principalmente desarrollé dos aplicaciones diferentes, en las que iba incorporando los temas anteriores. La aplicación de Harry Potter, que el profesor iba enseñando al mismo tiempo, y una aplicación de deportes, que desarrollaba yo después de cada tema.


#### Formación avanzada en Flutter {#formación-avanzada-en-flutter}

**Duración: 3 semana**
Al terminar el primer curso que llevaría unas dos semanas, comencé con otro en inglés, más complejo y en este caso mejor estructurado y con más detalle.
Este curso contaba con videos detallados de diferentes temas y un proyecto con un código ya avanzado.

<!--list-separator-->

-  Intro &amp; Project Overview

    El primer tema explicaba el proyecto en el que se basa todo el curso y cual sería el temario.
    El proyecto era una aplicación de tienda online con una página principal con una lista de objetos, una página de visualización del producto, un login y un carrito de compra

<!--list-separator-->

-  Navigation with GoRouter

    En el segundo tema tocamos la navegación por las diferentes pantallas de la aplicación. Para esto usamos un paquete de Flutter llamado GoRouter.
    GoRouter permite crear un widget con toda la información de la ruta de las páginas, que podremos referenciar desde cualquier otro widget para movernos a través de la app.
    En el curso se explicaba como ir transformando paso a paso la aplicación que teníamos usando el sistema básico de enrutado a este otro paquete.

<!--list-separator-->

-  Flutter App Architecture

    En este tema explicaba la estructura de directorios y archivos del proyecto, justificando el porqué usar esta estructura, y cómo iríamos añadiendo features en el futuro.
    La estructura usada es la denominada "feature first" donde cada feature independiente tiene un directorio dentro de src.
    Estos directorios luego se dividen en:
    application:  definición de servicios
    data: definición de repositorios de datos
    domain: definición de las clases de datos
    presentation: definición de las pantallas
    A su vez tenemos algunos otros directorios para archivos genéricos que se usan en todo el código, como constantes, widget comunes etc.

    ```text
    /lib
    ├── main.dart
    └── src
        ├── app.dart
        ├── common_widgets
        ├── constants
        ├── exceptions
        ├── features
        │   ├── feature1
        │   │   ├── application
        │   │   ├── domain
        │   │   ├── data
        │   │   └── presentation
        │   ├── feature2
        │   │   ├── application
        │   │   ├── domain
        │   │   ├── data
        │   │   └── presentation
        ├── localization
        ├── routing
        └── utils
    ```

<!--list-separator-->

-  State Management with Riverpod

    Los siguientes dos temas trataban de la gestión de estados en Flutter, que probablemente es la parte más compleja del desarrollo de aplicaciones con este framework.
    Para esto la solución escogida fue Riverpod, por estar diseñado para ser más flexible, seguro y fácil de usar en comparación con otras soluciones como Provider. Se basa en el concepto de "proveedores" (providers), que son funciones que encapsulan la lógica para obtener y gestionar el estado.

<!--list-separator-->

-  Automated Testing

    Este tema cubrió las prácticas de testing en Flutter, incluyendo unit tests, tests de integración y tests de UI, asegurando que la aplicación funcione correctamente en diferentes escenarios.

<!--list-separator-->

-  Error Handling

    Aprendí a manejar errores de manera eficiente, asegurando que la aplicación pueda responder adecuadamente a fallos y proporcionar una experiencia de usuario robusta.

<!--list-separator-->

-  New  Riverpod 2.x APIs &amp; Riverpod Generator

    Este último tema era una adicción que se hizo al curso para mencionar algunas de las actualizaciones relevantes al framework que no formaban parte de los anteriores temas.
    Sobre todo se tocó la parte de Riverpod Generator que simplifica el código que hace falta escribir manualmente a la hora de crear providers.


#### Desarrollo de aplicación de recursos humanos {#desarrollo-de-aplicación-de-recursos-humanos}

**Duración: 1 més y medio apoximadamente**
Una vez terminados los cursos comencé junto con mi compañero de prácticas el desarrollo de una aplicación para gestión de recursos humanos.
Para esta aplicación seguimos los procedimientos, tecnologías y estructuras aprendidas en el curso avanzado de Flutter.
El trabajo que realicé fue principalmente del front-end con flutter, mientras que el tutor asignado en la empresa se encargó del desarrollo del back-end en .NET
Tuvimos una reunión inicial con el product owner, que en este caso era la persona encargada de recursos humanos y usuario final de la aplicación, y concretamos los requisitos. Posteriormente realizamos un diagrama de clases, para poder comenzar con el desarrollo del back-end y front-end independientemente.
Este diagrama fue modificado un par de veces más tarde, al decidir añadir algunas features como los tags.

A su vez se crearon mockups básicos para seguir un diseño cohesivo entre las pantallas, y también contrastar las ideas con el PO.

Para la organización del equipo usamos un tablero Kanban. Entre los miembros del equipo nos fuimos repartiendo el desarrollo de las pantallas y widgets con forme ibamos avanzando en el proyecto. Yo terminé trabajando algo más en bugfixing y refactorización por tener algo más de soltura en el manejo de git.

Algunos de los features en los que trabajé fueron:
    • Implementación de barra de navegación
    • Implementación de las clases de datos
    • Implementación de widgets genéricos como las pantallas con dos o tres columnas con funcionalidad responsive o las listas de elementos.
    • Pantalla de información de ofertas
    • Pantalla de información de los aplicantes
    • Pantalla de listado de aplicantes y ofertas
    • Funcionalidad para añadir y visualizar documentos adjuntos a un aplicante

Flutter es un framework que permite crear aplicaciones multiplataforma con un mismo código, permitiendo compilar para Android, iOS, aplicaciones de escritorio o navegador web. Para este proyecto, nuestro objetivo principal era una aplicación web, que parece ser su uso menos común y, por lo tanto, más propenso a errores.
Entre estos errores, nos encontramos con que la librería GoRouter no funcionaba como se esperaba al usar la barra de navegación, lo cual tuve que arreglar manualmente en lugar de utilizar las funciones nativas de Flutter. Sin embargo, el problema más significativo que encontré durante el desarrollo fue un bug en el propio framework.
En todas nuestras pantallas hacíamos uso de un ScrollView para poder desplazarse cuando había muchos elementos, y en ocasiones usábamos dos de estos elementos uno dentro de otro, por ejemplo, al tener una lista con scroll dentro de otra pantalla. El bug lo encontramos al incorporar un dropdown dentro de estos dos ScrollView.
El widget nativo de Flutter para el dropdown lanzaba una excepción en tiempo de ejecución que no debería ocurrir. Después de comprobar que esto era reproducible, concluí que no era un problema de nuestra implementación, sino de Flutter, y dado que es Software Libre, reporté el error en su repositorio público.


#### Apoyo en desarrollo de aplicación para cliente externo {#apoyo-en-desarrollo-de-aplicación-para-cliente-externo}

**Duración: 1 semana apoximadamente**
En el último mes de las prácticas también ayudé en algunas de las tareas de una aplicación para un cliente.
En este proyecto me encargué de la definición de clases de datos y la implementación de widgets genéricos para formularios. Una pantalla para introducir datos y una para mostrar los datos introducidos. También participé refactorizando y arreglando bugs en algunos de los widgets en los que trabajaron otros miembros del equipo.


### Relación de las actividades con la titulación {#relación-de-las-actividades-con-la-titulación}

Las actividades realizadas durante mis prácticas externas en Merlín Software están relacionadas con mi titulación de Ingeniería Informática mención de Ingeniería de Software, ya que he adquirido experiencia en el desarrollo de aplicaciones móviles con Flutter, he trabajado en equipo en un proyecto real de desarrollo de software y he aprendido a utilizar herramientas y tecnologías utilizadas en la industria del software.
Además, he tenido la oportunidad de trabajar en un ambiente de oficina y de participar en reuniones con el jefe de proyecto y el product owner, lo que me ha permitido desarrollar habilidades de comunicación y trabajo en equipo.
También he tenido la oportunidad de trabajar con herramientas y tecnologías como Dart, GoRouter, Riverpod, Git, Vscode, Gittea, .NET y Visual Studio, lo que me ha permitido ampliar mis conocimientos en el campo de la ingeniería de software.
En general, creo que las actividades realizadas durante mis prácticas externas en Merlín Software me han permitido adquirir experiencia y conocimientos valiosos que me serán útiles en mi futuro profesional como ingeniero de software.


### Referencias {#referencias}

| Epic react       | <https://epicreact.dev/>                           |
| code with andrea | <https://courses.codewithandrea.com/>              |
| flutter docs     | <https://docs.flutter.dev>                         |
| dart docs        | <https://dart.dev>                                 |
| riverpod         | <https://riverpod.dev/>                            |
| flutter issue    | <https://github.com/flutter/flutter/issues/146764> |
