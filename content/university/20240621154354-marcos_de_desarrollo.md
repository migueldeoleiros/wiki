---
title: "Marcos de Desarrollo"
date: 2023-12-01T00:00:00+01:00
lastmod: 2025-06-23T00:00:00+02:00
tags: ["español"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})

nota mínima: 4,5/10

Examen tipo test con preguntas de verdadero o falso, al rededor de 20 preguntas


## [C#]({{< relref "20240621135712-c.md" >}}) {#c--20240621135712-c-dot-md}


## [ASP.NET]({{< relref "20240623115334-asp_net.md" >}}) {#asp-dot-net--20240623115334-asp-net-dot-md}


## Examen Junio 2023 {#examen-junio-2023}


### Notas Preguntas {#notas-preguntas}


#### 1. Código con IsPostback {#1-dot-código-con-ispostback}

a. Si la primera vez que se recargaba la página se iba a hacer lo que había dentro del if → No, solo cuando se carga la página las veces siguientes.
b. Algo relacionado con que Page.Load no se lanzaba siempre → falso, siempre se lanza y sirve para inicializar los controles.

```csharp
protected void Page_Load(object sender, EventArgs e)
{
  if (IsPostBack)
  {
  //Hacer algo
  }
}
```


#### 2. Relacionado con el método Transfer() {#2-dot-relacionado-con-el-método-transfer}

a. Se lanza una nueva petición → Falso, por eso la url no cambia.
b. La url puede ser de una página externa a la aplicación → Falso, solo puede transferir la ejecución a páginas asp.net de la misma aplicación
`Server.Transfer(“url");`


#### 3. Relacionado con el nivel de prioridad de la configuración de algo, creo que de la selección de la cultura utilizada. {#3-dot-relacionado-con-el-nivel-de-prioridad-de-la-configuración-de-algo-creo-que-de-la-selección-de-la-cultura-utilizada-dot}

a. La correcta sería, de más a menos prioridad → Code Behind - Declaración Página - Web.Config


#### 4. Internacionalizacion {#4-dot-internacionalizacion}

```html
<asp:Button ID="Button1" runat="server" ToolTip="<%$ Resources: , Button1_ToolTip %>" />
```

a. La propiedad ToolTip de un Button no se puede internacionalizar → Falso, es simplemente el texto alternativo del atributo.
b. Va a buscar el recurso en un archivo global → Falso, en la localización explícita en archivos de recursos globales hay que especificar obligatoriamente el nombre del archivo donde hay que buscarlo → `"<%$ Resources: NombreArchivo , Button1_ToolTip %>"`
c. Va a buscarlo en uno de recursos locales y si no lo encuentra en uno global → Falso.
d. Por defecto va a buscarlo en un fichero de recursos locales de la página en la que está → Sí


#### 5. Relacionado con el método InitializeCulture(). {#5-dot-relacionado-con-el-método-initializeculture-dot}


#### 6. Creo que esta era en la misma pregunta que la anterior, ¿qué indicaba el tag globalization en el web.cofig? {#6-dot-creo-que-esta-era-en-la-misma-pregunta-que-la-anterior-qué-indicaba-el-tag-globalization-en-el-web-dot-cofig}

```xml
<configuration>
  <system.web>
    <globalization
      uiCulture="auto"
      culture="auto" />
  </system.web>
</configuration>
```

a. Como están ambos a auto → Selecciona las preferencias culturales según el navegador del usuario. A no ser que no pueda determinarlas que entonces usa la que tengamos como predeterminada en InitializeCulture (creo).


#### 7. El método RedirectFromLoginPage(string userName, bool createPersistentCookie) {#7-dot-el-método-redirectfromloginpage--string-username-bool-createpersistentcookie}

a. Si createPersistentCookie es true te manda a la página de login → NO, solo crea una cookie persistente.
b. Creo que todas las opciones eran falsas, porque no te valida, simplemente te redirige a la página que esté marcada por defecto en el defaultUrl del Web.Config. A no ser que, hayas intentado acceder a un recurso protegido, que entonces te redirige a esa página.


#### 8. Relacionado con la autenticación por formularios, creo que preguntaba por alguno de los valores que tenía forms. {#8-dot-relacionado-con-la-autenticación-por-formularios-creo-que-preguntaba-por-alguno-de-los-valores-que-tenía-forms-dot}

```xml
<configuration>
  <system.web>
    <authentication mode="Forms">
    <forms
      name=".ASPXAUTH"
      loginUrl="/Authentication.aspx"
      timeout="30"
      path="/"
      defaultUrl="/MainPage.aspx"
      cookieless="AutoDetect" />
    </authentication>
  </system.web>
</configuration>
```


#### 9. ContentPlaceHolder en una página Master, ¿qué había qué hacer si en Master tenía un contenido por defecto, y en una página no se quería que se mostrase? {#9-dot-contentplaceholder-en-una-página-master-qué-había-qué-hacer-si-en-master-tenía-un-contenido-por-defecto-y-en-una-página-no-se-quería-que-se-mostrase}

```html
///En la Master
<asp:ContentPlaceHolder ID="ContentPlaceHolder1" runat="server">
  Contenido por defecto
</asp:ContentPlaceHolder>

///En la página
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <form id="form1" runat="server">
    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Button" />
  </form>
</asp:Content>
```

a. Las páginas master no puede definir contenido por defecto → Falso.
b. La respuesta era que la página hija solo tenía que redefinir el ContentPlaceHolder usando el mismo ID que tiene en la máster.


#### 10. Autorización. Si se añadía el siguiente código al web.config, y creamos una nueva página qué pasaba? {#10-dot-autorización-dot-si-se-añadía-el-siguiente-código-al-web-dot-config-y-creamos-una-nueva-página-qué-pasaba}

```xml
<authorization>
  <deny users= "?" />
</authorization>
```

a. No se puede usar ese tag????? Falso
b. Respuesta → Solo los usuarios autenticados podrán acceder a la nueva página, a no ser que esa página se añada al web.config y se le den otros permisos.


#### 11. Relacionado con la gestión de las Variables de sesión, como se gestionaban del lado del servidor o algo sobre el sessionState. {#11-dot-relacionado-con-la-gestión-de-las-variables-de-sesión-como-se-gestionaban-del-lado-del-servidor-o-algo-sobre-el-sessionstate-dot}


#### 12. Relacionado con las cookies, ¿Dónde se almacenaban las cookies? {#12-dot-relacionado-con-las-cookies-dónde-se-almacenaban-las-cookies}

(Puede ser que las preguntas 8, 11 y 12 fueran todas la misma y me estoy confundiendo)


#### 13. Esta fijo que sí que la preguntó → ¿De qué lado se hace la validación? {#13-dot-esta-fijo-que-sí-que-la-preguntó-de-qué-lado-se-hace-la-validación}

a. Respuesta → Tanto del lado del cliente (validar entradas, …), como del lado del servidor por seguridad.


#### 14. ¿Qué es una partial class? {#14-dot-qué-es-una-partial-class}


#### 15. Pregunta de excepciones. {#15-dot-pregunta-de-excepciones-dot}

a. Throw (sin s) se puede utilizar en la definición de un método para indicar que lanza una expeción → Falso, throw solo se utiliza para forzar que se lance una excepción, y no se escribe en la definición.
b. Catch tiene que capturar todas las excepciones → Falso, no es obligatorio capturar y procesarlas todas.
c. Finally se ejecuta siempre? Sip.


#### 16. Relacionado con el CLR, CLS, CTS {#16-dot-relacionado-con-el-clr-cls-cts}

a. Todo lenguaje .net tiene que implementar todos los tipos definidos en el CTS → No todos, pero sí un conjunto del CLS.
b. CLS es el mínimo conjunto de características que todos los lenguajes deben de soportar → Cierto


#### 17. Algo relacionado con el EDM, para qué servía o algo así. {#17-dot-algo-relacionado-con-el-edm-para-qué-servía-o-algo-así-dot}


#### 18. Algo sobre Ninject y Nuget. {#18-dot-algo-sobre-ninject-y-nuget-dot}


#### 19. Relacionado con Contenedores, hacía como una explicación de qué hacía cada comando. {#19-dot-relacionado-con-contenedores-hacía-como-una-explicación-de-qué-hacía-cada-comando-dot}

a. CreateKernel
b. Bind
c. Resolve


### Recreación por IA del examen {#recreación-por-ia-del-examen}


#### IsPostBack {#ispostback}

Considera el siguiente código

```csharp
protected void Page_Load(object sender, EventArgs e)
{
  if (IsPostBack)
  {
    // code
  }
}
```

1.  Se ejecutar'a el bloque dentro del **if** la primera vez que se carga la página
    a. Verdadero
    **b. Falso**
2.  El evento `Page_Load` se lanzará siempre
    **a. Verdadero**
    b. Falso


#### Transfer() {#transfer}

Considera el siguiente código

```csharp
Server.Transfer("url");
```

1.  Se lanza una nueva pertición
    a. Verdadero
    **b. Falso**
2.  La URL puede ser de una página externa a la aplicación
    a. Verdadero
    **b. Falso**


#### Prioridad de la configuración de cultura {#prioridad-de-la-configuración-de-cultura}

Ordena de mayor a menor prioridad la selección de la cultura utilizada:
    a. Declaración Página - Code Behind - Web.Config
    b. Web.Config - Declaración Página - Code Behind
    **c. Code Behind - Declaración Página - Web.Config**
    d. Declaración Página - Web.Config - Code Behind


#### Internacionalización {#internacionalización}

Considera el siguiente código

```html
<asp:Button ID="Button1" runat="server" ToolTip="<%$ Resources: , Button1_ToolTip %>" />
```

1.  La propiedad `ToolTip` de un Button no se puede internacionalizar
    a. Verdadero
    **b. Falso**
2.  Va a buscar el recurso en un archivo global
    a. Verdadero
    **b. Falso**
3.  Va a buscar el recurso en unod e los recursos locales y si no lo encuentra en uno global
    a. Verdadero
    **b. Falso**
4.  Por defecto va a buscar el recurso en un fichero de recursos locales de la página en la que está
    **a. Verdadero**
    b. Falso


#### Método InitializeCulture() {#método-initializeculture}

a. Inicializar los controles de la página
**b. Establecer la cultura y la cultura de la interfaz de usuario de la página**
c. Configurar las preferencias del usuario
d. Validar las entradas del usuario


#### Tag `globalization` en `web.config` {#tag-globalization-en-web-dot-config}

Considera el siguiente código en `web.config`

```xml
<configuration>
  <system.web>
    <globalization uiCulture="auto" culture="auto" />
  </system.web>
</configuration>
```

1.  Qué hace este código?
    a. Selecciona las preferencias culturales según el servidor.
    **b. Selecciona las preferencias culturales según el navegador del usuario.**
    c. Selecciona las preferencias culturales según la configuración del sistema operativo.
    d. Usa la configuración predeterminada en InitializeCulture.


#### Método `RedirectFromLoginPage(string userName, bool createPersistentCookie)` {#método-redirectfromloginpage--string-username-bool-createpersistentcookie}

1.  Si createPersistentCookie es true, ¿te manda a la página de login?
    a. Verdadero
    **b. Falso**
2.  ¿Qué hace este método?
    a. Valida al usuario y lo redirige a la página principal.
    b. Crea una cookie persistente y redirige a la página principal.
    **c. Crea una cookie persistente y redirige a la página especificada en defaultUrl.**
    d. Crea una cookie temporal y redirige a la página de login.


#### Autenticación por formularios {#autenticación-por-formularios}

Considera el siguiente código en web.config:

```xml
<configuration>
  <system.web>
    <authentication mode="Forms">
      <forms
        name=".ASPXAUTH"
        loginUrl="/Authentication.aspx"
        timeout="30"
        path="/"
        defaultUrl="/MainPage.aspx"
        cookieless="AutoDetect" />
    </authentication>
  </system.web>
</configuration>
```

Explica brevemente los valores importantes en la configuración de forms.
    a. name: Nombre de la cookie de autenticación
    b. loginUrl: URL de la página de login
    c. timeout: Tiempo de expiración de la sesión en minutos
    d. path: Ruta en la que la cookie es válida
    e. defaultUrl: Página por defecto a la que se redirige después del login
    f. cookieless: Modo de detección de cookies


#### ContentPlaceHolder en una página Master {#contentplaceholder-en-una-página-master}

Considera el siguiente código en una Master Page y una página hija:

```html
<!-- Master Page -->
<asp:ContentPlaceHolder ID="ContentPlaceHolder1" runat="server">
  Contenido por defecto
</asp:ContentPlaceHolder>

<!-- Página hija -->
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <form id="form1" runat="server">
    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Button" />
  </form>
</asp:Content>
```

1.  ¿Las páginas Master no pueden definir contenido por defecto?
    a. Verdadero
    **b. Falso**
2.  ¿Qué debe hacer la página hija para que no se muestre el contenido por defecto?
    a. No puede hacer nada, siempre se mostrará el contenido por defecto.
    **b. Redefinir el ContentPlaceHolder usando el mismo ID que tiene en la Master Page.**
    c. Eliminar el ContentPlaceHolder en la página hija.
    d. Cambiar el ID del ContentPlaceHolder en la página hija.


#### Autorización en web.config {#autorización-en-web-dot-config}

Considera el siguiente código en web.config:

```xml
<authorization>
  <deny users="?" />
</authorization>
```

1.  ¿No se puede usar este tag?
    a. Verdadero
    **b. Falso**
2.  ¿Qué sucede si se crea una nueva página con esta configuración?
    a. Todos los usuarios podrán acceder a la nueva página.
    **b. Solo los usuarios autenticados podrán acceder a la nueva página.**
    c. Ningún usuario podrá acceder a la nueva página.
    d. La página solo estará accesible para administradores.


#### Gestión de variables de sesión {#gestión-de-variables-de-sesión}

Cómo se gestionan las variables de sesión en ASP.NET.
    a. Del lado del cliente, almacenadas en cookies.
    **b. Del lado del servidor, almacenadas en memoria del servidor.**
    c. Del lado del cliente, almacenadas en el almacenamiento local del navegador.
    d. Del lado del servidor, almacenadas en una base de datos.


#### Almacenamiento de cookies {#almacenamiento-de-cookies}

¿Dónde se almacenan las cookies en un navegador?
    a. En la memoria del servidor.
    **b. En el almacenamiento local del navegador.**
    c. En el almacenamiento remoto del servidor.
    d. En la base de datos del servidor.


#### Validación {#validación}

¿De qué lado se hace la validación en ASP.NET?
    a. Del lado del cliente
    b. Del lado del servidor
    **c. Tanto del lado del cliente como del servidor**
    d. Ninguno


#### Partial Class {#partial-class}

¿Qué es una partial class en C#?
    a. Una clase que no puede ser heredada.
    **b. Una clase que puede ser definida en múltiples archivos.**
    c. Una clase que no puede ser instanciada.
    d. Una clase que solo puede ser utilizada en un proyecto.


#### Excepciones {#excepciones}

1.  ¿Se puede usar throw en la definición de un método para indicar que lanza una excepción?
    a. Verdadero
    **b. Falso**
2.  ¿catch tiene que capturar todas las excepciones?
    a. Verdadero
    **b. Falso**
3.  ¿finally se ejecuta siempre?
    **a. Verdadero**
    b. Falso


#### CLR, CLS, CTS {#clr-cls-cts}

1.  ¿Todo lenguaje .NET tiene que implementar todos los tipos definidos en el CTS?
    a. Verdadero
    **b. Falso**
2.  ¿El CLS es el mínimo conjunto de características que todos los lenguajes deben soportar?
    **a. Verdadero**
    b. Falso


#### Entity Data Model (EDM) {#entity-data-model--edm}

¿Qué es el Entity Data Model (EDM) en ASP.NET?
    a. Un modelo de datos utilizado solo en bases de datos relacionales.
    **b. Una representación conceptual de los datos en una aplicación.**
    c. Una herramienta de depuración para aplicaciones ASP.NET.
    d. Un componente para manejar la memoria de la aplicación.


#### Ninject y NuGet {#ninject-y-nuget}

Explica brevemente qué es Ninject y para qué se utiliza NuGet.
    a. Ninject es un contenedor de inyección de dependencias para .NET.
    b. NuGet es un administrador de paquetes para .NET.


#### Comandos de contenedores {#comandos-de-contenedores}

1.  CreateKernel
    **a. Crea una nueva instancia del contenedor de inyección de dependencias.**
    b. Asocia una interfaz o tipo a una implementación concreta.
    c. Resuelve una instancia del tipo solicitado a partir del contenedor.
    d. Elimina todas las instancias del contenedor.
2.  Bind
    a. Crea una nueva instancia del contenedor de inyección de dependencias.
    **b. Asocia una interfaz o tipo a una implementación concreta.**
    c. Resuelve una instancia del tipo solicitado a partir del contenedor.
    d. Elimina todas las instancias del contenedor.

c. Resolve
    a. Crea una nueva instancia del contenedor de inyección de dependencias.
    b. Asocia una interfaz o tipo a una implementación concreta.
    **c. Resuelve una instancia del tipo solicitado a partir del contenedor.**
    d. Elimina todas las instancias del contenedor.


### Recreación por IA nuevo examen {#recreación-por-ia-nuevo-examen}


#### Pregunta 1: Introducción a la Plataforma .NET {#pregunta-1-introducción-a-la-plataforma-dot-net}

¿Cuál es la función principal del Common Language Runtime (CLR) en la plataforma .NET?
    a. Convertir el código fuente a código máquina.
    **b. Ejecutar el código y proporcionar servicios como gestión de memoria, seguridad y manejo de excepciones.**
    c. Proveer una interfaz gráfica para el desarrollo de aplicaciones.
    d. Servir como un sistema operativo para aplicaciones .NET.


#### Pregunta 2: C# {#pregunta-2-c}

¿Qué es una partial class en C#?
    a. Una clase que no puede ser heredada.
    **b. Una clase que puede ser definida en múltiples archivos.**
    c. Una clase que no puede ser instanciada.
    d. Una clase que solo puede ser utilizada en un proyecto.


#### Pregunta 3: Entity Framework (EF6) {#pregunta-3-entity-framework--ef6}

¿Cuál es la principal ventaja de usar Entity Framework (EF6) en el desarrollo de aplicaciones?
    **a. Permite el acceso a la base de datos sin necesidad de escribir consultas SQL.**
    b. Mejora el rendimiento de las aplicaciones al ejecutar consultas SQL más rápido.
    c. Proporciona una interfaz gráfica para gestionar bases de datos.
    d. Permite la creación de aplicaciones web sin necesidad de escribir código HTML.


#### Pregunta 4: NInject {#pregunta-4-ninject}

¿Qué es NInject en el contexto de .NET?
    a. Una herramienta de pruebas para aplicaciones .NET.
    **b. Un contenedor de inyección de dependencias para .NET.**
    c. Un administrador de paquetes para .NET.
    d. Una biblioteca para el acceso a bases de datos en .NET.


#### Pregunta 5: Enterprise Library {#pregunta-5-enterprise-library}

¿Cuál es el propósito principal de la Enterprise Library en .NET?
    a. Proveer herramientas para la internacionalización de aplicaciones.
    b. Ofrecer un conjunto de prácticas recomendadas para la reutilización de componentes de software.
    **c. es un conjunto de componentes de software reusables que resuelven problemas comunes**
    d. Facilitar la autenticación y autorización de usuarios en aplicaciones web.


#### Pregunta 6: NuGet {#pregunta-6-nuget}

¿Qué es NuGet y cuál es su función principal?
    a. Un framework para la creación de aplicaciones móviles.
    **b. Un administrador de paquetes para .NET que facilita la instalación y actualización de bibliotecas.**
    c. Una herramienta de depuración para aplicaciones .NET.
    d. Un entorno de desarrollo integrado (IDE) para .NET.


#### Pregunta 7: TestProject {#pregunta-7-testproject}

¿Cuál de los siguientes es un propósito principal de usar TestProject en el desarrollo de software?
    a. Crear interfaces de usuario.
    **b. Ejecutar y gestionar pruebas automatizadas.**
    c. Configurar servidores de producción.
    d. Desarrollar aplicaciones móviles.


#### Pregunta 8: Introducción a ASP.NET {#pregunta-8-introducción-a-asp-dot-net}

¿Cuál es la función principal de ASP.NET en el desarrollo web?
    a. Proporcionar una interfaz gráfica para la creación de sitios web.
    **b. Permitir la creación de aplicaciones web dinámicas y servicios web.**
    c. Facilitar el acceso a bases de datos desde aplicaciones web.
    d. Proveer un sistema operativo para servidores web.


#### Pregunta 9: WebForms {#pregunta-9-webforms}

¿Cuál de las siguientes afirmaciones sobre WebForms en ASP.NET es correcta?
    a. WebForms no soporta el modelo de eventos.
    **b. WebForms utiliza un modelo de desarrollo basado en eventos similar al de las aplicaciones de escritorio.**
    c. WebForms solo puede ser utilizado en aplicaciones de consola.
    d. WebForms no permite la separación del diseño y la lógica de negocio.


#### Pregunta 10: Controles de Servidor {#pregunta-10-controles-de-servidor}

El ViewState está siempre activo para todos los controles de una página...
    a. Verdadero
    **b. Falso**


#### Pregunta 11: Configuración de Aplicaciones ASP {#pregunta-11-configuración-de-aplicaciones-asp}

Considera el siguiente código en web.config:

```xml
<configuration>
  <system.web>
    <globalization uiCulture="auto" culture="auto" />
  </system.web>
</configuration>
```

¿Qué sucede cuando ambos están configurados en auto?
    a. Selecciona las preferencias culturales según el servidor.
    **b. Selecciona las preferencias culturales según el navegador del usuario.**
    c. Selecciona las preferencias culturales según la configuración del sistema operativo.
    d. Usa la configuración predeterminada en InitializeCulture.


#### Pregunta 12: Gestión de Estado {#pregunta-12-gestión-de-estado}

Los datos específicos de un usuario que desean mantenerse entre solicitudes a diferentes páginas, se almacenarán en...
    a. HttpApplicationState
    b. HttpViewState
    **c. HttpSessionState**
    d. Ninguna de las anteriores


#### Pregunta 13: Autenticación {#pregunta-13-autenticación}

El método RedirectFromLoginPage(string userName, bool createPersistentCookie):

1.  Si createPersistentCookie es true, ¿te manda a la página de login?
    a. Verdadero
    **b. Falso**
2.  ¿Qué hace este método?
    a. Valida al usuario y lo redirige a la página principal.
    b. Crea una cookie persistente y redirige a la página principal.
    **c. Crea una cookie persistente y redirige a la página especificada en defaultUrl.**
    d. Crea una cookie temporal y redirige a la página de login.


#### Pregunta 14: MasterPages {#pregunta-14-masterpages}

Considera el siguiente código en una Master Page y una página hija:

```html
<!-- Master Page -->
<asp:ContentPlaceHolder ID="ContentPlaceHolder1" runat="server">
  Contenido por defecto
</asp:ContentPlaceHolder>

<!-- Página hija -->
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <form id="form1" runat="server">
    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Button" />
  </form>
</asp:Content>
```

1.  ¿Las páginas Master no pueden definir contenido por defecto?
    a. Verdadero
    **b. Falso**
2.  ¿Qué debe hacer la página hija para que no se muestre el contenido por defecto?
    a. No puede hacer nada, siempre se mostrará el contenido por defecto.
    **b. Redefinir el ContentPlaceHolder usando el mismo ID que tiene en la Master Page.**
    c. Eliminar el ContentPlaceHolder en la página hija.
    d. Cambiar el ID del ContentPlaceHolder en la página hija.


#### Pregunta 15: Internacionalización {#pregunta-15-internacionalización}

Considera el siguiente código:

```html
<asp:Button ID="Button1" runat="server" ToolTip="<%$ Resources: , Button1_ToolTip %>" />
```

1.  ¿La propiedad ToolTip de un Button no se puede internacionalizar?
    a. Verdadero
    **b. Falso**
2.  ¿Va a buscar el recurso en un archivo global?
    a. Verdadero
    **b. Falso**
3.  ¿Va a buscarlo en uno de recursos locales y si no lo encuentra en uno global?
    a. Verdadero
    **b. Falso**
4.  ¿Por defecto va a buscarlo en un fichero de recursos locales de la página en la que está?
    **a. Verdadero**
    b. Falso


## Resumen {#resumen}


### IsPostBack y Page_Load {#ispostback-y-page-load}

IsPostBack indica si la página se está cargando como resultado de un postback
La primera vez que se carga la página IsPostBack es false, en recargas posteriores (postbacks) es true
Page_Load siempre se ejecuta en cada carga de la página


### Ciclo de Vida de una Página ASP.NET {#ciclo-de-vida-de-una-página-asp-dot-net}


#### Page_Init {#page-init}

Page_Load siempre se ejecuta en cada carga de la página

<!--list-separator-->

-  IsPostBack

    IsPostBack indica si la página se está cargando como resultado de un postback
    La primera vez que se carga la página IsPostBack es false, en recargas posteriores (postbacks) es true


#### Page_Load {#page-load}


#### Page_PreRender {#page-prerender}


#### Page_Unload {#page-unload}


### Estado de la Aplicación y Sesión {#estado-de-la-aplicación-y-sesión}


#### Session State {#session-state}

Almacenar datos específicos de un usuario entre solicitudes


#### Application State {#application-state}

Almacenar datos globales que comparten todos los usuarios


#### ViewState {#viewstate}

Mantener el estado de los controles de la página entre postbacks


#### Cookies {#cookies}

Almacenar datos pequeños en el cliente


### Autenticación y Autorización {#autenticación-y-autorización}


#### Autentication Forms {#autentication-forms}

Configurar en `web.config` con elementos como `loginUrl`, `timeout` y `defaultUrl`


#### Roles y miembros {#roles-y-miembros}

Gestionar la autenticaci'on y autorizaci'on basada en roles de usuarios


#### Authorization Tag {#authorization-tag}

Controlar el acceso a p'aginas o directorios en `web.config`


### Internalización y Localización {#internalización-y-localización}

Archivos de recursos `resx` para almacenar cadenas de texto localizadas
Configurar default culture en web.config

```xml
<globalization culture="auto:en" uiCulture="auto:en-US" />
```

Usar `<%$ Resources:... %>` en los archivos `aspx` para importar internacionalizaciones
En la localización explícita en archivos de recursos globales hay que especificar obligatoriamente el nombre del archivo donde hay que buscarlo `"<%$ Resources: NombreArchivo , Button1_ToolTip %>"`


### Manejo de Errores y Exceptiones {#manejo-de-errores-y-exceptiones}

```csharp
try {
    // Código que puede lanzar una excepción
} catch (Exception ex) {
    // Manejo de la excepción
} finally {
    // Código que siempre se ejecuta
}

throw new TestException();
```

Configuración de página de erro en web.config

```xml
<customErrors mode="Off" defaultRedirect="~/Pages/Errors/InternalError.aspx" />
```


### Navegación y Redirección {#navegación-y-redirección}


#### Respose.Redirect() {#respose-dot-redirect}

Rediriege a otra URL y realiza una nueva solicitud


#### Server.Transfer() {#server-dot-transfer}

Transfiera la ejecución a otra página sin cambiar la URL


#### Cross-page postback {#cross-page-postback}

Usar `PostBackUrl` para enviar datos a otra página


### Páginas Maestras y ContentPlaceHolder {#páginas-maestras-y-contentplaceholder}

Master pages definen un layout común para múltiples páginas
Puedes usar un placeholder en master sobreescribiendo el ID en la pagina S

```html
///En la Master
<asp:ContentPlaceHolder ID="ContentPlaceHolder1" runat="server">
  Contenido por defecto
</asp:ContentPlaceHolder>

///En la página
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <form id="form1" runat="server">
    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Button" />
  </form>
</asp:Content>
```
