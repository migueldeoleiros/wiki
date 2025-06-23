---
title: "TC Práctica 0 (repaso de Ocaml)"
date: 2023-12-01T00:00:00+01:00
lastmod: 2025-06-23T00:00:00+02:00
tags: ["español"]
draft: false
---

## Ejercicio 1 {#ejercicio-1}

La función mapdoble recibe como argumentos dos funciones y una lista, y devuelve una lista
resultado de aplicar la primera función a los elementos de la lista que ocupan posición impar, y la
segunda a los que ocupan posición par.
Por ejemplo:

```ocaml
# mapdoble (function x -> x) (function x -> -x) [1;1;1;1;1];;
- : int list = [1; -1; 1; -1; 1]
```

Se pide:

-   Implemente la función mapdoble.
-   Indique el tipo de la función mapdoble.
-   Indique el valor de:

<!--listend-->

```ocaml
mapdoble (function x -> x*2) (function x -> "x") [1;2;3;4;5];;
```

-   Indique el tipo de:

<!--listend-->

```ocaml
let y = function x -> 5 in mapdoble y;;
```


### Respuesta {#respuesta}

Uso una función recursiva en la que se coge el primer elemento y se le aplica la funcion 1 y se llama de nuevo a la función esta vez siendo la función 2 y la lista que queda.

```ocaml
let rec mapdoble f1 f2 = function
    [] -> []
  | h::[] -> [f1 h]
  | h::t -> f1(h)::mapdoble f2 f1 t;;

```

```ocaml
Line 1, characters 44-47:
1 | mapdoble (function x -> x*2) (function x -> "x") [1;2;3;4;5];;;;
                                                ^^^
Error: This expression has type string but an expression was expected of type
         int
```

```ocaml
- : ('_weak1 -> int) -> '_weak1 list -> int list = <fun>
```


## Ejercicio 2 {#ejercicio-2}

**manejar exceciones**

-   Defina una función primero_que_cumple, que dado un predicado (es decir, una función de tipo 'a -&gt; bool) y una lista, devuelva el primer elemento de la lista que verifica dicho predicado.
-   Indique el tipo de la función primero_que_cumple.
-   Utilizando la función primero_que_cumple, defina una función existe, que dado un predicado y una lista devuelva true si en la lista hay algún elemento que verifica el predicado, y false en caso contrario.
-   Se quiere mantener un conjunto de valores etiquetados de cualquier tipo, mediante una lista de pares 'a \* 'b, donde la primera componente del par es la etiqueta o clave, y la segunda es el valor asociado a esa clave en dicho conjunto. Utilizando la función primero_que_cumple, defina una función asociado : ('a \* 'b) list -&gt; 'a -&gt; 'b, que dado un conjunto y una clave, devuelva su valor asociado.

    **usar pares (funciones propias)**


### Respuesta {#respuesta}

```ocaml
let rec primero_que_cumple f = function
    [] -> raise Not_found
  | h::t -> if f(h) = true then h else primero_que_cumple f t;;

```

```ocaml
let existe f l =
    try (let _ = primero_que_cumple in true)
    with Not_found -> false;;

```

```ocaml
let asociado l key =
  snd(primero_que_cumple(function(a,b) -> a = key) l);;

```


## Ejercicio 3 {#ejercicio-3}

**recursividad**
Se ha construido el siguiente tipo de dato con el fin de poder representar árboles binarios donde la información que aparece en cada nodo puede ser de cualquier tipo:

```ocaml
type 'a arbol_binario =
    Vacio
  | Nodo of 'a * 'a arbol_binario * 'a arbol_binario;;
```

Se pide:

-   Construya las funciones in_orden, pre_orden, post_orden y anchura, todas ellas de tipo 'a arbol_binario -&gt; 'a list, que devuelvan los correspondientes recorridos sobre un árbol binario dado, tal y como se muestra en los siguientes ejemplos:

       3
      /  \\
    2    5
         /  \\
       4    1

<!--listend-->

```ocaml
let tree = Nodo(3,Nodo(2,Vacio,Vacio),Nodo(5,Nodo(4,Vacio,Vacio),Nodo(1,Vacio,Vacio)));;
```

```ocaml
# in_orden t;;
- : int list = [2; 3; 4; 5; 1]
# pre_orden t;;
- : int list = [3; 2; 5; 4; 1]
# post_orden t;;
- : int list = [2; 4; 1; 5; 3]
# anchura t;;
- : int list = [3; 2; 5; 4; 1]
```


### Respuesta {#respuesta}

```ocaml
let rec in_orden = function
    Vacio -> []
  | Nodo (head, left, right) -> (in_orden left) @ (head::(in_orden right));;

in_orden tree;;
```

```ocaml
let rec pre_orden = function
    Vacio -> []
  | Nodo (head, left, right) -> head::(pre_orden left) @ ((pre_orden right));;

pre_orden tree;;
```

```ocaml
let rec post_orden = function
    Vacio -> []
  | Nodo (head, left, right) -> (post_orden left) @ ((post_orden right) @ [head]);;

post_orden tree;;
```

```ocaml
let anchura tree =
  let rec aux queue l = match queue with
    | [] -> List.rev l
    | Nodo(head, left, right) :: rest ->
       let new_queue = rest @ [left; right] in
       aux new_queue (head :: l)
    | Vacio :: rest -> aux rest l
  in aux [tree] [];;

anchura tree;;
```


## Ejercicio 4 {#ejercicio-4}

**tipos de datos**
Consideremos el siguiente tipo de dato para una representación de conjuntos basada en listas sin elementos repetidos:

```ocaml
type 'a conjunto = Conjunto of 'a list;;
```

Por ejemplo, el conjunto vacío se podría representar mediante el siguiente valor:

```ocaml
let conjunto_vacio = Conjunto [];;
```

Se pide implementar las siguientes funciones:

-   pertenece : 'a -&gt; 'a conjunto -&gt; bool
-   agregar : 'a -&gt; 'a conjunto -&gt; 'a conjunto
-   conjunto_of_list : 'a list -&gt; 'a conjunto
-   suprimir : 'a -&gt; 'a conjunto -&gt; 'a conjunto
-   cardinal : 'a conjunto -&gt; int
-   union : 'a conjunto -&gt; 'a conjunto -&gt; 'a conjunto
-   interseccion : 'a conjunto -&gt; 'a conjunto -&gt; 'a conjunto
-   diferencia : 'a conjunto -&gt; 'a conjunto -&gt; 'a conjunto
-   incluido : 'a conjunto -&gt; 'a conjunto -&gt; bool
-   igual : 'a conjunto -&gt; 'a conjunto -&gt; bool
-   producto_cartesiano : 'a conjunto -&gt; 'b conjunto -&gt; ('a \* 'b) conjunto
-   list_of_conjunto : 'a conjunto -&gt; 'a list


### Respuesta {#respuesta}

```ocaml
let c1 = Conjunto([1;2;3;4;5]);;
let c2 = Conjunto([4;5;6;7;8]);;
```


#### pertenece {#pertenece}

```ocaml
val pertenece : 'a -> 'a conjunto -> bool = <fun>
```

```ocaml
let rec pertenece x = function
    Conjunto [] -> false
  | Conjunto (h::t) -> if h=x then true else pertenece x (Conjunto t);;

```

```ocaml
pertenece 1 c1;;
```

\#+begin_src ocaml :tangle p0_4.ml

```text
false
```


#### agregar {#agregar}

```ocaml
val agregar : 'a -> 'a conjunto -> 'a conjunto = <fun>
```

```ocaml
let rec agregar x c =
  if pertenece x c then c else match c with
  Conjunto l -> (Conjunto (x::l));;

```

```ocaml
agregar 1 c1;;
```

```ocaml
agregar 9 c1;;
```


#### conjunto_of_list {#conjunto-of-list}

```ocaml
val conjunto_of_list : 'a list -> 'a conjunto = <fun>
```

```ocaml
let conjunto_of_list l =
  let rec aux (Conjunto l2) = function
      [] -> (Conjunto l2)
    | h::t -> aux (agregar h (Conjunto l2)) t
  in aux (Conjunto []) l;;

```

```ocaml
conjunto_of_list [1;3;2;4;5;1;2;3;9];;
```


#### suprimir {#suprimir}

```ocaml
val suprimir : 'a -> 'a conjunto -> 'a conjunto = <fun>
```

```ocaml
let suprimir x (Conjunto l) =
  let rec aux x = function
      [] -> []
    | h::t -> if h=x then t else h::(aux x t)
  in Conjunto (aux x l);;

```

```ocaml
suprimir 3 c1;;
```


#### cardinal {#cardinal}

```ocaml
val cardinal : 'a conjunto -> int = <fun>
```

```ocaml
let cardinal (Conjunto l) =
  let rec aux count = function
      [] -> count
    | _::t -> aux (count+1) t
  in aux 0 l;;

```

```ocaml
cardinal c1;;
```


#### union {#union}

```ocaml
val union : 'a conjunto -> 'a conjunto -> 'a conjunto = <fun>
```

```ocaml
let union c1 (Conjunto l2) =
  let rec aux (Conjunto l1) = function
      [] -> l1
    | h::t -> if pertenece h c1 then (aux c1 t) else h::(aux (Conjunto l1) t)
  in Conjunto (aux c1 l2);;

```

```ocaml
union c1 c2;;
```


#### interseccion {#interseccion}

```ocaml
val interseccion : 'a conjunto -> 'a conjunto -> 'a conjunto = <fun>
```

```ocaml
let interseccion c1 (Conjunto l2) =
  let rec aux (Conjunto l1) = function
      [] -> []
    | h::t -> if pertenece h c1 then h::(aux c1 t) else (aux (Conjunto l1) t)
  in Conjunto (aux c1 l2);;

```

```ocaml
interseccion c1 c2;;
```


#### diferencia {#diferencia}

```ocaml
val diferencia : int conjunto -> int conjunto -> int conjunto = <fun>
```

```ocaml
let diferencia (Conjunto l1) c2 =
  let rec aux (Conjunto l2) = function
      [] -> []
    | h::t -> if pertenece h c2 then (aux c1 t) else h::(aux (Conjunto l2) t)
  in Conjunto (aux c2 l1);;

```

```ocaml
diferencia c1 c2;;
```


#### incluido {#incluido}

```ocaml
val incluido : 'a conjunto -> 'a conjunto -> bool = <fun>
```

```ocaml
let rec incluido (Conjunto l1) c2 = match l1 with
    [] -> true
  | h::t -> if pertenece h c2 then (incluido (Conjunto t) c2) else false;;

```

```ocaml
incluido c1 c2;;
```

```ocaml
incluido c1 (Conjunto [0;1;2;3;4;5;6;7;8;9]);;
```


#### igual {#igual}

```ocaml
val igual : int conjunto -> int conjunto -> bool = <fun>
```

```ocaml
let igual c1 c2 =
  (diferencia c1 c2) = (diferencia c2 c1);;

```

```ocaml
igual c1 c2;;
```

```ocaml
igual c1 c1;;
```


#### producto_cartesiano {#producto-cartesiano}

```ocaml
val producto_cartesiano : 'a conjunto -> 'b conjunto -> ('a * 'b) conjunto = <fun>
```

```ocaml
let producto_cartesiano (Conjunto l1) (Conjunto l2)=
  let rec aux l1 l2 laux = match l1,l2 with
      [],_ -> []
    | (h::t),([]) -> aux t laux laux
    | (h1::t1), (h2::t2) -> (h1,h2)::(aux l1 t2 laux)
  in Conjunto (aux l1 l2 l2);;

```

```ocaml
producto_cartesiano c1 c2;;
```


#### list_of_conjunto {#list-of-conjunto}

```ocaml
val list_of_conjunto : 'a conjunto -> 'a list = <fun>
```

```ocaml
let list_of_conjunto (Conjunto l) = l;;

```

```ocaml
list_of_conjunto c1;;
```
