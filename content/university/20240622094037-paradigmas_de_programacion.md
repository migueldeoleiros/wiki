---
title: "Paradigmas de Programación"
author: ["miguel"]
date: 2022-01-01T00:00:00+01:00
lastmod: 2025-01-18T00:00:00+01:00
tags: ["español"]
draft: false
---

Links: [University]({{< relref "20240621135740-university.md" >}})


## Práctica 1 {#práctica-1}


### predecir salida del compilador {#predecir-salida-del-compilador}

```ocaml
  ();;
(*-: unit = ()*)
  2 + 5 * 3;;
(*-: int = 17*)
  1.0;;
(*-: float = 1.*)
  1.0 * 2;;
(*Error de tipo: No se puede operar float y entero*)
  1 * 2;;
(*-: int = 2*)
  2 - 2.0;;
(*Error de tipo: No se puede operar float y entero*)
  2.0 -. 2.0;;
(*- : float = 0.*)
  3.0 + 2.0;;
(*Error de tipo: Al ser float el operador debe ser +.*)
  3.0 +. 2.0;;
(*- : float = 5.*)
  5 / 3;;
(*- : int = 1*)
  5 mod 3;;
(*- : int = 2 *)
  3.0 *. 2.0 ** 3.0;;
(*Error de tipo: La multiplicación de float debe de ir en formato "*."*)
  3.0 *. 2.0 *. 3.0;;
(*- : int = 18*)
  3.0 = float_of_int 3;;
(*- : bool = true*)
  sqrt 4;;
(*Error de tipo: sqrt debe operar con formato float*)
  sqrt 4.0;;
(*- : float = 2.*)
  int_of_float 2.1 + int_of_float (-2.9);;
(*- : int = 0*)
  truncate 2.1 + truncate (-2.9);;
(*- : int = 0*)
  floor 2.1 +. floor (-2.9);;
(*- : float = -1*)
  ceil 2.1 +. ceil -2.9;;
(*Error sintáctico: faltan paréntesis*)
  ceil 2.1 +. ceil (-2.9);;
(*- : float = 1.*)
  'B';;
(*- : char = 'B'*)
  int_of_char 'A';;
(*- : int = 65*)
  char_of_int 66;;
(*- : char 'B'*)
  Char.code 'B';;
(*- : int = 66*)
  Char.chr 67;;
(*- : char = 'C'*)
  '\067';;
(*- : char = 'C'*)
  Char.chr (Char.code 'a' - Char.code 'A' + Char.code 'Ñ');;
(*Error: no reconoce las ñ*)
(*- : char = '\241'*)
  Char.uppercase 'ñ';;
(*Error: no reconoce las ñ*)
(*Alert deprecated: usar Char.uppercase_ascii*)
(*- : char = '\209'*)
  Char.lowercase 'O';;
(*Alert deprecated: usar Char.lowercase_ascii*)
(*- : char = 'o'*)
  "this is a string";;
(*- : string = "this is a string"*)
  String.length "longuitud";;
(*- : int = 9*)
  "1999" + "1";;
(*Error de tipo: no se pueden sumar cadenas de caracteres*)
  int_of_string "1999" + int_of_string "1";;
(*- : int = 2000*)
  "1999" ^ "1";;
(*- : string = "19991"*)
  int_of_string "1999" + 1;;
(* - : int = 2000*)
  "\064\065";;
(*- : string = "@A"*)
  string_of_int 010;;
(*- : string = "10"*)
  not true;;
(*- : bool = false*)
  true && false;;
(*- : bool = false*)
  true || false;;
(*- : bool = true*)
  (1<2) = false;;
(*- : bool = false*)
  "1" < "2";;
(*- : bool = true*)
  2<12;;
(*- : bool = true*)
  "2"<"12";;
(*- : bool = false*)
  "uno" < "dos";;
(*- : bool = false*)
  if 3 = 4 then 0 else 4;;
(*- : int = 4*)
  if 3 = 4 then "0" else "4";;
(*- : string = "4"*)
  if 3 = 4 then 0 else "4";;
(*Error de tipo: el 4 deberia ser int*)
  (if 3 < 5 then 8 else 10) + 4;;
(*- : int = 12 *)
  2.0 *. asin 1.0;;
(*- : float = 3.14159265358979312*)
(*calcula pi*)
  sin (2.0 *. asin 1.0 /. 2.);;
(*- : float = 1.*)
  function x -> 2 * x;;
(*- : int -> int = <fun>*)
  (function x -> 2 * x) (2 + 1);;
(*- : int = 6*)
  let x = 1;;
(*val x : int = 1*)
  let y = 2;;
(*val y : int = 2*)
  x - y;;
(*- : int = -1*)
  let x = y in x - y;;
(*- : int = 0*)
  x - y;;
(*- : int = -1*)
  z;;
(*Error: variable sin asignar*)
  let z = x + y;;
(*val z : int = 3*)
  z;;
(*- : int = 3*)
  let x = 5;;
(*val x : int = 5*)
  z;;
(*- : int = 3*)
  let y = 5 in x + y;;
(*- : int = 10*)
  x + y;;
(*- : int = 10*)
  let x = x + y in let y = x * y in x + y + z;;
(*- : int = 24*)
  x + y + z;;
(*- : int = 10*)
  int_of_float;;
(*- : float -> int = <fun>*)
  float_of_int;;
(*- : int -> float = <fun>*)
  int_of_char;;
(*- : char -> int = <fun>*)
  char_of_int;;
(*- : int -> char = <fun>*)
  abs;;
(*- : int -> int = <fun>*)
  sqrt;;
(*- : float -> float = <fun>*)
  truncate;;
(*- : float -> int = <fun>*)
  ceil;;
(*- : float -> float = <fun>*)
  floor;;
(*- : float -> float = <fun>*)
  Char.code;;
(*- : char -> int = <fun>*)
  Char.chr;;
(*- : int -> char = <fun>*)
  Char.uppercase;;
(*Alert deprecated: usar Char.uppercase_ascii*)
(*- : char -> char = <fun>*)
  Char.lowercase;;
(*Alert deprecated: usar Char.lowercase_ascii*)
(*- : char -> char = <fun>*)
  int_of_string;;
(*- : string -> int = <fun>*)
  string_of_int;;
(*- : int -> string = <fun>*)
  String.length;;
(*- : string -> int = <fun>*)
  let f = function x -> 2 * x;;
(*val f : int -> int = <fun>*)
  f (2 + 1);;
(*- : int = 6*)
  f 2 + 1;;
(*- : int = 5*)
  let n = 1;;
(*val n : int = 1*)
  let g x = x +n;;
(*val g : int -> int = <fun>*)
  g 3;;
(*- : int = 4*)
  let n = 5;;
(*val n : int = 5*)
  g 3;;
(*- : int = 4*)
```


### definir dados unos valores {#definir-dados-unos-valores}

Un valor **u** de tipo **int** a partir de una expresión que contenga, al menos, 4 operadores infijos:

```ocaml
  let u = 1 - 1 + 1 * 1;;
(*-----------------------------*)
  val u : int = 1
```

Un valor **v** de tipo **float** a partir de una expresión que incluya una función predefinida:

```ocaml
  let v = abs_float 2.;;
(*-----------------------------*)
  val v : float = 2.
```

Un valor **w** de tipo **char** a partir de una expresión que incluya una subexpresión de tipo int:

```ocaml
  let w = char_of_int 69;;
(*-----------------------------*)
  val w : char = 'E'
```

Un valor **x** de tipo **bool** a partir de una expresión que incluya una o más funciones u operadores:

```ocaml
  let x = 'E'= char_of_int 79;;
(*-----------------------------*)
  val x : bool = false
```

Un valor **y** de tipo **string** a partir de una expresión que contenga una frase if-then-else:

```ocaml
  let y = if (u = 1) then "u = 1" else "u != 1";;
(*-----------------------------*)
  val y : string = "u = 1"
```

\newpage


## Práctica 2 {#práctica-2}


### Aproximación del número pi {#aproximación-del-número-pi}

```ocaml
print_float (2.0 *. asin 1.0);;
(*3.14159265359- : unit = ()*)
```


### Aproximación del número e {#aproximación-del-número-e}

```ocaml
print_float(exp(1.))
(*2.71828182846- : unit = ()*)
```


### Función recursiva que calcula el factorial {#función-recursiva-que-calcula-el-factorial}

```ocaml
(* val fact : int -> int = <fun> *)
  let rec fact = function
      0 -> 1
    | n -> n * fact (n- 1)

  let size = Array.length Sys.argv

  let _ = (*velifica que hay solo un argumento y escribe en pantalla*)
        if size <> 2 then print_endline "error"
        else print_endline(string_of_int(fact(int_of_string(Array.get Sys.argv(1)))));;
(*------------------------------------------------------------------------------------*)
fact 10;;
(*- : int = 3628800*)
```


## Práctica 3 {#práctica-3}


### Transformar expresiones {#transformar-expresiones}

Transformar expresión de tipo **_let &lt;x&gt; = &lt;eL&gt; in &lt;eG&gt;_** a<br />
**_function &lt;x&gt; -&gt; &lt;eG&gt; &lt;eL&gt;_**

```ocaml
  let e1 = (*let <x> = <eL> in <eG>*)
    let pi = 2. *. asin 1. in pi *. (pi +. 1.);;

  let e1 = (*function <x> -> <eG> <eL>*)
    (function pi -> (pi *. (pi +. 1.))) (2. *. asin 1.);;
(*------------------------------------------------------------------------------------*)
  (*val e1 : float = 13.0111970546791511*)
```

```ocaml
  let e2 = (*let <x> = <eL> in <eG>*)
    let lg2 = log 2. in
    let log2 = function x -> log x /. lg2
    in log2 (float (1024 * 1024));;

  let e2 = (*function <x> -> <eG> <eL>*)
    (function lg2 ->
      (function log2 -> log2 (float (1024 * 1024)))
        (function x -> log x /. lg2)) (log 2.);;
(*------------------------------------------------------------------------------------*)
  (*val e2 : float = 20.*)
```

```ocaml
  let e3 = (*let <x> = <eL> in <eG>*)
    let pi_2 = 4. *. asin 1. in
    function r -> pi_2 *. r;;

  let e3 = (*function <x> -> <eG> <eL>*)
    (function pi_2 ->
      (function r -> pi_2 *. r)
    (4. *. asin 1.));;
(*------------------------------------------------------------------------------------*)
  (*val e3 : float -> float = <fun>*)
```

```ocaml
  let e4 = (*let <x> = <eL> in <eG>*)
    let sqr = function x -> x *. x in
    let pi = 2. *. asin 1. in
    function r -> pi *. sqr r;;

  let e4 = (*function <x> -> <eG> <eL>*)
    ((function sqr ->
      (function pi -> (function r -> pi *. sqr r))(2. *. asin 1.))
    (function x -> x *. x));;
(*------------------------------------------------------------------------------------*)
  (*val e4 : float -> float = <fun>*)
```

Transformar expresión de tipo **_if &lt;b&gt; then &lt;e1&gt; else &lt;e2&gt;_** a<br />
**_function true  -&gt; &lt;e1&gt; | false -&gt; &lt;e2&gt; &lt;b&gt;_**

```ocaml
  let abs n = (*if <b> then <e1> else <e2>*)
    if n >= 0 then n else -n;;

  let abs n = (*function true  -> <e1> | false -> <e2> <b>*)
     (function true -> n | false -> -n) (n>=0);;
(*------------------------------------------------------------------------------------*)
  (*val abs : int -> int = <fun>*)
```

```ocaml
  let par n =
    if n mod 2 = 0 then true else false;;

  let par n =
    (function true -> true | false -> false) (n mod 2 = 0);;
(*------------------------------------------------------------------------------------*)
  (*val par : int -> bool = <fun>*)
```

```ocaml
  let saluda s =
    if s = "Hola" then print_endline "Hola!" else();;

  let saluda s =
    (function true->print_endline "Hola!" | false -> print_endline "()") (s = "Hola");;
(*------------------------------------------------------------------------------------*)
  (*val saluda : string -> unit = <fun>*)
```

```ocaml
  let f n =
    if n mod 2 = 0 then "es par" else "es impar";;

  let f n =
    (function true -> "es par" | false -> "es impar") (n mod 2 = 0);;
(*------------------------------------------------------------------------------------*)
  (*val f : int -> string = <fun>*)
```

```ocaml
  let f n =
    if mod 2 = 0 then "múltiplo de 2"
    else if n mod 3 = 0 then "múltiplo de 3"
    else "impar";;

  let f n =
    (function true -> "múltiplo de 2" |
      false -> (function true -> "múltiplo de 3" | false -> "impar")(n mod 3 = 0))
    (n mod 2 = 0);;
(*------------------------------------------------------------------------------------*)
  (*val f : int -> string = <fun>*)
```

\newpage


### fibonacci {#fibonacci}

Programa que calcula los _n_ primeros números de la serie de fibonacci de forma funcional

```ocaml
let rec fib n =
  if n <= 1 then n
  else fib(n-1) + fib(n-2);;

let rec traza n =
  if n = 0
  then "0"
  else traza(n-1)^"\n"^string_of_int(fib(n));;

let rec mensaje =
  if (Array.length Sys.argv)=2
  then (traza (int_of_string(Sys.argv.(1))))
  else ("excedido el número de argumentos") in
  print_endline mensaje;;
```


### números primos {#números-primos}

```ocaml
let is_prime n = (*calcula si n es primo*)
  let rec check_from i =
    i >= n ||
    (n mod i <> 0 && check_from (i+1))
  in check_from 2;;
```

```ocaml
let is_prime2 n = (*version mejorada de is_prime*)
  let rec check_from i =
    (float_of_int i) >= (sqrt (float_of_int n))+.1. ||
    (n mod i <> 0 && check_from (i+1))
  in check_from 2;;
```

```ocaml
let rec next_prime n = (*calcual el siguiente primo a n*)
  if is_prime (n+1) then n+1
  else next_prime (n+1);;
```

```ocaml
let rec last_prime_to n = (*calcula el ultimo numero primo previo a n*)
  if is_prime (n) then n
  else last_prime_to (n-1);;
```


### || y &amp;&amp; {#y-and-and}

En ocaml las funciones booleanas **||** y **&amp;&amp;** a diferencia del resto de funciones siguen la estrategia _lazy_, solo evaluan el segundo argumento si es necesario.

```ocaml
false && (2 / 0 > 0);;
  (*false*)
true && (2 / 0 > 0);;
  (*Exception: Division_by_zero*)
true || (2 / 0 > 0);;
  (*true*)
false || (2 / 0 > 0);;
  (*Exception: Division_by_zero*)
let con b1 b2 = b1 && b2;;
  (*val con : bool -> bool -> bool = <fun>*)
let dis b1 b2 = b1 || b2;;
  (*val dis : bool -> bool -> bool = <fun>*)
let con (1<0) (2 / 0 > 0);;
  (*Exception: Division_by_zero*)
(1<0) && (2 / 0 > 0);;
  (*false*)
dis (1<0) (2 / 0 > 0);;
  (*Exception: Division_by_zero*)
(1<0) || (2 / 0 > 0);;
  (*Exception: Division_by_zero*)
```


## Práctica 4 {#práctica-4}


### power {#power}

Calcula **x^n**

```ocaml
(*val power : int -> int -> int = <fun>*)
  let rec power x n =
    if n = 0 then 1
    else x * power x (n-1)

  let rec power' x n =
    if n = 0 then 1
    else if (n mod 2 = 0) then power' (x*x) (n/2)
    else x * power' (x*x) (n/2)

(* La función power' realiza menos operaciones dado que reduce n a la mitad recursivamente.
Esto será notable en caso de números grandes, que con int se salen de rango *)

(*val power : float -> float -> float = <fun>*)
  let rec powerf x n =
    if n = 0 then 1.
    else if (n mod 2 = 0) then powerf (x*.x) (n/2)
    else x *. powerf (x*.x) (n/2)
```


### máximo común divisor {#máximo-común-divisor}

_mcd(x,y) = mcd(y,x)_<br />
_mcd(x,y = mcd(x mod y,y), si y &gt;0_

```ocaml
(*val mcd : int * int -> int = <fun>*)
  let rec mcd (x, y) =
    if y = 0 then x
    else mcd ((x mod y), y)
```


## Práctica 5 {#práctica-5}


### collatz {#collatz}

Según la Conjetura de Collatz, si partimos de cualquier número positivo y vamos aplicando repetidamente esta función, seguiremos un camino hasta el 1.

```ocaml
(*val f : int -> int = <fun>*)
  let f n =
    if n mod 2 = 0 then n / 2
    else 3 * n + 1;;
```

Llamaremos _"órbita"_ al camino desde un numero hasta 1 usando la función collatz

```ocaml
(*val orbit : int -> unit = <fun>*)
  let rec orbit n =
    print_int n;
    if n = 1 then print_newline()
    else (print_string (", ");
      orbit (f n));;
(*------------------------------------------------------------------------------------*)
orbit 13;;
(* 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 - : unit = () *)
```

```ocaml
(*val lenght : int -> int = <fun>*)
  let rec length n= (*numero de pasos en la orbita*)
    if n=1 then 0
    else 1+length(f n);;
(*------------------------------------------------------------------------------------*)
length 13;;
(* - : int = 9 *)
```

```ocaml
(*val top : int -> int = <fun>*)
  let rec top n= (*el valor mas alto de la orbita*)
    if n=1 then 0
    else max n (top(f n));;
(*------------------------------------------------------------------------------------*)
top 13;;
(* - : int = 40 *)
```

```ocaml
(*val length'n'top : int -> int * int = <fun>*)
  let rec length'n'top n = (*devuelve tanto el valor mas alto como el numero de pasos*)
    if n = 1  then (0,1)
    else let l,t = length'n'top (f n)
    in (l+1, max n t);;
(*------------------------------------------------------------------------------------*)
length'n'top 13;;
(* - : int * int = (9, 40) *)
```


### collatz opcional {#collatz-opcional}

Según un untervalo _[m,n]_ devuelve el menor valor cuya órbita tenga **longitud** máxima

```ocaml
(*val longest_in : int -> int -> int = <fun>*)
  let rec longest_in m n=
    let rec aux i=
      if i<=m then (m,length m)
      else let (j,lj)= aux (i-1) in
      let li = length i in
      if lj >= li then (j,lj) else (i,li)
    in fst (aux n);;
(*------------------------------------------------------------------------------------*)
longest_in 1 1000;;
(* - : int = 871 *)
```

Según un untervalo _[m,n]_ devuelve el menor valor cuya órbita tenga **altura** máxima

```ocaml
(*val highest_in : int -> int -> int = <fun>*)
  let rec highest_in m n=
    let rec aux i=
      if i<=m then (m,top m)
      else let (j,tj)= aux (i-1) in
      let ti = top i in
      if ti > tj then (i,ti) else (j,tj)
    in fst (aux n);;
(*------------------------------------------------------------------------------------*)
highest_in 1 1000;;
(* - : int = 703 *)
```


## Práctica 6 {#práctica-6}

Está toda contenida en el módulo lista página~\pageref{lista}
\newpage


## Práctica 7 {#práctica-7}

Elimina la primera aparición, si la hay, de un valor en la lista

```ocaml
(* val remove : 'a -> 'a list -> 'a list = <fun> *)
  let rec remove a l = match l with
      [] -> l
      | h::t -> if (a==h) then t
                else h::(remove a t);;
(*------------------------------------------------------------------------------------*)
  remove 3 [2;6;3;4;3];;
- : int list = [2; 6; 4; 3]
```

Elimina todas las apariciones de un valor en una lista

```ocaml
(* val remove_all : 'a -> 'a list -> 'a list = <fun> *)
  let rec remove_all a l = match l with
      [] -> []
      | h::t -> if (a==h) then (remove_all a t)
                else h::(remove_all a t);;
(*------------------------------------------------------------------------------------*)
  remove_all 3 [2;6;3;4;3];;
- : int list = [2; 6; 4]
```

Elimina de _l1_ toda aparición de los valores en _l2_

```ocaml
(* val ldif : 'a list -> 'a list -> 'a list = <fun> *)
  let rec ldif l1 l2 = match (l1,l2) with
      h1::t1, h2::t2 -> ldif (remove_all h2 l1) t2
      | _ -> l1;;
(*------------------------------------------------------------------------------------*)
  ldif [1;2;3;2;4] [2;3;3;5];;
- : int list = [1; 4]
```

Calcula el producto cartesiano de _l1_ y _l2_

```ocaml
(* val lprod : 'a list -> 'b list -> ('a * 'b) list = <fun> *)
  let lprod l1 l2 =
      let rec aux acc = function
            [],_ -> rev acc
          | _::t1,[] -> aux acc (t1,l2)
          | h1::t1,h2::t2 -> aux ((h1,h2)::acc) (h1::t1,t2)
      in aux [] (l1,l2);;
(*------------------------------------------------------------------------------------*)
  lprod [1;3;1;2] ['a';'b'];;
- : (int * char) list = [(1, 'a'); (1, 'b'); (3, 'a'); (3, 'b'); (1, 'a'); (1, 'b');
 (2, 'a'); (2, 'b')]
```

Divide la lista en dos, una con los valores en posición par y otra con los valores en posición impar

```ocaml
(* val divide : 'a list -> 'a list * 'a list = <fun> *)
  let rec divide = function
      h1::h2::t -> let  l1, l2 = divide t in h1::l1,h2::l2
      | l -> l, [];;
(*------------------------------------------------------------------------------------*)
  divide ['a';'e';'i';'o';'u'];;
- : char list * char list = (['a'; 'i'; 'u'], ['e'; 'o'])
```


## Práctica 8 {#práctica-8}


### curry uncurry {#curry-uncurry}

Dada una función: **_f: X x X -&gt; Z_**, podemos siempre considerar una función **_f: X -&gt;(Y -&gt; Z)_** tal que _f(x,y) = (g x) y_ <br />
A esto se le llama "Currificación" y decimos que la función _g_ es la versión currificada de _f_, lo inverso se denomina "descurrificación"<br />
<br />
La función curry retorna la versión currificada

```ocaml
(* val curry : ('a * 'b -> 'c) -> 'a -> 'b -> 'c = <fun> *)
let curry =  function f -> function a -> function b -> f (a,b);;
let curry f a b = f (a,b);;
```

La función uncurry retorna la versión descurrificada

```ocaml
(* val uncurry : ('a -> 'b -> 'c) -> 'a * 'b -> 'c = <fun> *)
let uncurry =  function f -> function (a,b) -> f a b;;
let uncurry f(a,b) = f a b;;
```

```ocaml
  uncurry (+);;
(* - : int * int -> int = <fun> *)
  let sum = (uncurry (+));;
(* val sum : int * int -> int = <fun> *)
  sum 1;;
(* Error: expresión de tipo int, debería ser (int * int) *)
  sum (2, 1);;
(* - : int = 3 *)
  let g = curry (function p -> 2 * fst p + 3 * snd p);;
(* val g : int -> int -> int = <fun> *)
  g (2, 5);;
(* Error: expresión de tipo ('a * 'b), debería ser int *)
  let h = g 2;;
(* val h : int -> int = <fun> *)
  h 1, h 2, h 3;;
(* - : int * int * int = (7, 10, 13) *)
```


### Composición {#composición}

Forma currificada de la composición de funciones

```ocaml
(* comp: ('a -> 'b) -> ('c -> 'a) -> ('c -> 'b) *)
  let comp f g x =
    f (g x);;
(*------------------------------------------------------------------------------------*)
  let f =
    let square x = x * x
    in comp square ((+) 1);;
(* val f : int -> int = <fun> *)
(*------------------------------------------------------------------------------------*)
  f 1, f 2, f 3;;
(* - : int * int * int = (4, 9, 16) *)
```

\newpage


### Polimorfismo {#polimorfismo}

```ocaml
(* para tres primeros tipos hay solo una solución *)

(* val f : 'a -> 'a = <fun> *)
  let f a = a;;

(* val h : 'a * 'b -> 'a = <fun> *)
  let h (a,b)= a;;

(* val i : 'a * 'b -> 'b = <fun> *)
  let i (a,b)= b;;

(* val j : 'a -> 'a list = <fun> *)
  let j a = a :: [];;
(* para este tipo hay infinitas respuestas,
 * ya que puedes hacer una lista de infinitos elementos 'a *)
```


## Práctica 9 {#práctica-9}


### Recursividad no terminal {#recursividad-no-terminal}

Redefinir para no usar recursividad terminal

```ocaml
(* val to0from : int -> int list = <fun> *)
let rec to0from n =
  if n < 0 then []
  else n :: to0from (n-1);;
(*------------------------------------------------------------------------------------*)
let to0from n =
  let rec aux l i =
    if i < 0 then List.rev l
    else aux (i::l) (i - 1)
  in aux [] n;;
```

```ocaml
(* val fromto : int -> int -> int list = <fun> *)
let rec fromto m n =
  if m > n then []
  else m :: fromto (m+1) n;;
(*------------------------------------------------------------------------------------*)
let fromto m n =
  let rec aux l i =
    if i < m then l
      else aux (i::l) (i - 1)
  in aux [] n;;
```

```ocaml
(* val from1to : int -> int list = <fun> *)
let rec from1to n =
  if n < 1 then []
  else from1to (n-1) @ [n];;
(*------------------------------------------------------------------------------------*)
let from1to n =
  let rec f i l =
      if i > 1 then f (i-1) (i::l)
    else 1::l
  in List.rev (f n []);;
```

```ocaml
(* val map : ('a -> 'b) -> 'a list -> 'b list = <fun> *)
let map =
  List.map;;
(*------------------------------------------------------------------------------------*)
let map f l =
  let rec aux f l acc = match l with
      [] -> List.rev acc
      | h::t -> aux f t ((f h)::acc)
  in aux f l [];;
```

```ocaml
(* val power : int -> int -> int = <fun> *)
let power x y =
  let rec innerpower x y =
    if y = 0 then 1
    else x * innerpower x (y-1)
  in
      if y >= 0 then innerpower x y
      else invalid_arg "power";;
(*------------------------------------------------------------------------------------*)
let power x y =
  let rec innerpower x y acc =
    if y = 0 then acc
    else innerpower x (y - 1) (x * acc)
  in
      if y >= 0 then innerpower x y 1
      else invalid_arg "power";;
```

```ocaml
(* val incseg : int list -> int list = <fun> *)
let incseg l =
  List.fold_right (fun x t -> x::List.map ((+) x) t) l [];;
(*------------------------------------------------------------------------------------*)
let incseg l =
  let rec aux l acc l2 = match l with
      [] -> []
      | [h] -> List.rev ((h + acc)::l2)
    | h::t -> aux t (h + acc) ((h + acc)::l2)
  in aux l 0 [];;
```

```ocaml
(* val remove : 'a -> 'a list -> 'a list = <fun> *)
let rec remove x = function
    [] -> []
  | h::t -> if x = h then t
            else h :: remove x t;;
(*------------------------------------------------------------------------------------*)
let remove x l =
  let rec aux acc = function
      [] -> l
    | h::t -> if x = h then List.rev_append acc t
              else aux (h::acc) t
  in aux [] l ;;
```

```ocaml
val divide : 'a list -> 'a list * 'a list = <fun>
let rec divide = function
    h1::h2::t -> let  l1, l2 = divide t in h1::l1,h2::l2
  | l -> l, [];;
(*------------------------------------------------------------------------------------*)
let divide l =
  let rec f_aux resto im = function
        [] -> resto
      | h::[] -> if im then h::resto
               else resto
    | impar::par::t -> if im then f_aux (impar::resto) im t
                       else f_aux (par::resto) im t
  in ( List.rev (f_aux [] true l), List.rev (f_aux [] false l) );;
```

```ocaml
(* val compress : 'a list -> 'a list = <fun> *)
let rec compress = function
  | h1::h2::t -> if h1 = h2 then compress (h2::t)
                 else h1 :: compress (h2::t)
  | l -> l;;
(*------------------------------------------------------------------------------------*)
let compress l =
  let rec aux acc l = match l with
        | h1::h2::t -> if h1=h2 then aux acc (h2::t)
                       else aux (h1::acc) (h2::t)
        | [h] -> aux (h::acc) []
        | []-> List.rev acc
  in (aux [] l);;
```

\newpage


### Factorial (try-with) {#factorial--try-with}

Redefinir la función factorial para interceptar errores con frases **try-with**

```ocaml
let rec fact = function
    0 -> 1
  | n -> n * fact (n - 1);;
try
    print_endline (string_of_int (fact (int_of_string Sys.argv.(1))))
with
    Failure _
  | Stack_overflow
  | Invalid_argument _ -> print_endline "argumento invalido"
```


## Práctica 10 {#práctica-10}


### quicksort {#quicksort}

Comparar dos implementaciónes de _quicksort_

```ocaml
(* val qsort1 : ('a -> 'a -> bool) -> 'a list -> 'a list = <fun> *)
let rec qsort1 ord = function
    [] -> []
  | h::t -> let after, before = List.partition (ord h) t in
    qsort1 ord before @ h :: qsort1 ord after;;
(* cuando la lista esté desbalanceada este algoritmo no será bueno *)
```

```ocaml
(* val qsort2 : ('a -> 'a -> bool) -> 'a list -> 'a list = <fun> *)
let rec qsort2 ord =
  let append' l1 l2 = List.rev_append (List.rev l1) l2 in
  function
    [] -> []
  | h::t -> let after, before = List.partition (ord h) t in
            append' (qsort2 ord before) (h :: qsort2 ord after);;

(* Podemos usar funciones terminales como rev y rev_append
   qsort2 es más rápido cuando la lista ya está inicialmente ordenada
   qsort2 permite ordenar listas más grandes que qsort1*)
```

```ocaml
let init n f =
  let rec aux (i, l) =
    if i = n
      then l
    else aux(i + 1, f i::l)
  in List.rev(aux(0, []));;

let l1 = init 600000 (function x -> Random.int 5000);;

(* qsort2 es más lento que qsort1 cuando la lista está inicializada
   aleatoriamente o inversamente.
   En estos casos qsort2 fue un 98.5% más lento de media*)
```


### fusión (mergesort) {#fusión--mergesort}

```ocaml
(* val divide : 'a list -> 'a list * 'a list = <fun> *)
  let rec divide l = match l with
      h1::h2::t -> let t1, t2 = divide t in (h1::t1, h2::t2)
    | _ -> l, [];;

(*--------------------------------------------------------*)
(* val merge : 'a list * 'a list -> 'a list = <fun> *)
  let rec merge = function
      [], l | l, [] -> l
    | h1::t1, h2::t2 -> if h1 <= h2 then h1 :: merge (t1, h2::t2)
                        else h2 :: merge (h1::t1, t2);;

(*--------------------------------------------------------*)
(* val msort1 : 'a list -> 'a list = <fun> *)
  let rec msort1 l = match l with
      [] | _::[] -> l
    | _ -> let l1, l2 = divide l in
           merge (msort1 l1, msort1 l2);;
```

Redefinir _merge_ y _msort1_ para que puedan utilizar cualquier orden además de "&lt;="

```ocaml
(* val merge : ('a -> 'a -> bool) -> 'a list * 'a list -> 'a list = <fun> *)
let rec merge ord = function
    [], l | l, [] -> l
  | h1::t1, h2::t2 -> if (ord h1) h2 then h1 :: merge ord (t1, h2::t2)
                      else h2 :: merge ord (h1::t1, t2);;
```

```ocaml
(* val msort1 : ('a -> 'a -> bool) -> 'a list -> 'a list = <fun> *)
let rec msort1 ord l = match l with
    [] | _::[] -> l
  | _ -> let l1, l2 = divide l in
         merge ord (msort1 ord l1, msort1 ord l2);;
```

Definir _divide_, _merge_ y _msort2_ con recursividad no terminal

```ocaml
(* val divide' : 'a list -> 'a list * 'a list = <fun> *)
let divide' l =
  let rec aux dvd1 dvd2 = function
      [] -> (List.rev dvd1, List.rev dvd2)
    | h::[] -> (List.rev (h::dvd1), List.rev dvd2)
    | h1::h2::t -> aux (h1::dvd1) (h2::dvd2) t
  in aux [] [] l;;
```

```ocaml
(* val merge' : ('a -> 'a -> bool) -> 'a list * 'a list -> 'a list = <fun> *)
let merge' ord (l1, l2) =
  let rec aux (a1, a2) mer = match a1, a2 with
      [], l | l, [] -> List.rev_append mer l
    | h1::t1, h2::t2 -> if ord h1 h2 then aux (t1, h2::t2) (h1::mer)
                        else aux (h1::t1, t2) (h2::mer)
  in aux (l1, l2) [];;
```

```ocaml
(* val msort2 : ('a -> 'a -> bool) -> 'a list -> 'a list = <fun> *)
let rec msort2 ord l = match l with
    [] | _::[] -> l
  | _ -> let l1, l2 = divide' l
         in merge' ord (msort2 ord l1, msort2 ord l2);;
```


## Práctica 11 {#práctica-11}

En una cuadrícula de _m x n_ casillas dada una casilla de inicio y otra de final _(x,y)_. Averigua la sucesión de casillas mínima para que el caballo con saltos de L llegue de una casilla a otra.

```ocaml
(*val notmem : 'a list -> 'a -> bool = <fun>*)
  let notmem l e = (*comprueba que e no sea elemento de l*)
    not (List.mem e l);;
```

```ocaml
(*val is_in_board : int -> int -> int * int -> bool = <fun>*)
  let is_in_board m n (x,y) = (*comprueba que (x,y) este en la cuadricula*)
    x >= 1 && x <= m && y >= 1 && y <= n;;
```

```ocaml
(*val legal_moves :
  int -> int -> int * int -> (int * int) list -> (int * int) list = <fun>*)
  let legal_moves m n (x,y) visited = (*lista de los posibles movimientos*)
    let all_moves = [x+1,y+2; x+2,y+1; x-1,y+2; x-2,y+1;
                     x+1,y-2; x+2,y-1; x-1,y-2; x-2,y-2]
    in List.filter (notmem visited) (List.filter(is_in_board m n) all_moves);;
```

```ocaml
(*val shortest_tour : int -> int -> int * int -> int * int -> (int * int) list = <fun>*)
  let shortest_tour m n x y =
    if not (is_in_board m n (x) && is_in_board m n (y))
      then raise (Invalid_argument "tour")
    else let rec aux solution = function
            [] -> raise Not_found
          | h::t -> if (h = y)
                      then List.rev (h::solution)
                    else try aux (h::solution) (legal_moves m n h (h::solution))
                         with Not_found -> aux solution t
         in if x = y then [x]
            else aux [x] (legal_moves m n x [x]);;
(*------------------------------------------------------------------------------------*)
  shortest_tour 5 5 (1,1) (5,5);;
(*- : (int * int) list = [(1, 1); (2, 3); (3, 5); (4, 3); (5, 5)]*)
```


## Práctica 12 {#práctica-12}


### g-tree {#g-tree}

```ocaml
type 'a g_tree =
    Gt of 'a * 'a g_tree list;;
(*------------------------------------------------------------------------------------*)
let t = Gt (2, [Gt (7, [Gt (2,[]); Gt (10,[]);
  Gt (6, [Gt (5,[]); Gt (11,[])])]);
  Gt (5, [Gt (9, [Gt (4, [])])])]);;
```

```ocaml
(* val size : 'a g_tree -> int *)
(* devuelve el número de nodos de un g_tree *)
  let rec size = function
      Gt (_,[]) -> 1
    | Gt (r,h::t) -> size h + size (Gt (r,t));;
(*------------------------------------------------------------------------------------*)
  size t;;
- : int = 10
```

```ocaml
(* val height : 'a g_tree -> int *)
(* devuelve la "altura", como número de niveles, de un g_tree *)
  let rec height =
    let rec list_max n = function
        [] -> n
      | h::t -> let hh = height h in
          if hh > n then list_max hh t
          else list_max n t
    in function
        Gt (_,[]) -> 1
      | Gt (_,l) -> 1 + list_max 0 l;;
(*------------------------------------------------------------------------------------*)
  height t;;
- : int = 4
```

\newpage

```ocaml
(* val leaves : 'a g_tree -> 'a list *)
(* devuelve las hojas de un g_tree, "de izquierda a derecha" *)
  let rec leaves = function
      Gt (r,[]) -> [r]
    | Gt (r,l) -> List.flatten (List.map leaves l);;
(*------------------------------------------------------------------------------------*)
  leaves t;;
- : int list = [2; 10; 5; 11; 4]
```

```ocaml
(* val mirror : 'a g_tree -> 'a g_tree *)
(* devuelve la imagen especular de un g_tree *)
  let rec mirror = function
    Gt (r,l) -> Gt(r, List.map mirror (List.rev l));;
(*------------------------------------------------------------------------------------*)
  mirror t;;
- : int g_tree =
Gt (2,
 [Gt (5, [Gt (9, [Gt (4, [])])]);
  Gt (7, [Gt (6, [Gt (11, []); Gt (5, [])]); Gt (10, []); Gt (2, [])])])
```

```ocaml
(* val preorder : 'a g_tree -> 'a list *)
(* devuelve la lista de nodos de un g_tree en "preorden" *)
  let rec preorder = function
      Gt (r,[]) -> [r]
    | Gt (r,l) -> r::List.flatten (List.map preorder l);;
(*------------------------------------------------------------------------------------*)
  preorder t;;
- : int list = [2; 7; 2; 10; 6; 5; 11; 5; 9; 4]
```

```ocaml
(* val postorder : 'a g_tree -> 'a list *)
(* devuelve la lista de nodos de un g_tree en "postorden" *)
  let rec postorder = function
      Gt (r,[]) -> [r]
    | Gt (r,l) -> List.flatten (List.map postorder l) @ [r];;
(*------------------------------------------------------------------------------------*)
  postorder t;;
- : int list = [2; 10; 5; 11; 6; 7; 4; 9; 5; 2]
```


### breath-first {#breath-first}

Dado un arbol de tipo 'a g-tree, devuelve la lista de nodos resultante de efectuar un recorrido por niveles

```ocaml
(* val breadth_first : 'a g_tree -> 'a list = <fun> *)
  let rec breadth_first = function
      Gt (x, []) -> [x]
    | Gt (x, (Gt (y, t2))::t1) -> x :: breadth_first (Gt (y, t1@t2));;
(*------------------------------------------------------------------------------------*)
  breadth_first t;;
- : int list = [2; 7; 5; 2; 10; 6; 9; 5; 11; 4]
```

```ocaml
(* version terminal de breadth_first *)
let rec breadth_first_t t =
  let rec aux acum = function
      Gt (x, []) -> List.rev (x::acum)
    | Gt (x, (Gt (y, t2))::t1) -> aux (x::acum) (Gt (y, List.rev_append (List.rev t1) t2))
  in aux [] t;;
```

\newpage


### bin-tree {#bin-tree}

```ocaml
(* type 'a bin_tree = Empty | Node of 'a * 'a bin_tree * 'a bin_tree *)
type 'a bin_tree =
    Empty
  | Node of 'a * 'a bin_tree * 'a bin_tree;;
(*------------------------------------------------------------------------------------*)
let t = Node (3, Node (8, Empty, Empty),
                 Node (2, Node (5, Empty, Empty),
                          Node (1, Empty, Empty)));;
```

Redefine all bin-tree functions using fold-tree

```ocaml
(* val fold_tree : ('a -> 'b -> 'b -> 'b) -> 'b -> 'a bin_tree -> 'b = <fun> *)
let rec fold_tree f a = function
    Empty -> a
  | Node (x, l, r) -> f x (fold_tree f a l) (fold_tree f a r);;
```

```ocaml
(* val sum : int bin_tree -> int = <fun> *)
  let rec sum = function
      Empty -> 0
    | Node (x, l, r) -> x + (sum l) + (sum r);;
(*------------------------------------------------------------------------------------*)
  let sum =
    let aux x l r =
      x + l + r
    in fold_tree aux 0;;
(*------------------------------------------------------------------------------------*)
  sum t;;
- : int = 19
```

```ocaml
(* val prod : float bin_tree -> float = <fun> *)
  let rec prod = function
      Empty -> 1.0
    | Node (x, l, r) -> x *. (prod l) *. (prod r);;
(*------------------------------------------------------------------------------------*)
  let prod =
    let aux x l r =
      x *. l *. r
    in fold_tree aux 1.0;;
(*------------------------------------------------------------------------------------*)
  let rec map_tree f = function
      Empty -> Empty
    | Node (x,l,r) -> Node (f x, map_tree f l, map_tree f r)
  in prod (map_tree float t);;
- : float = 240.
```

```ocaml
(* val size : 'a bin_tree -> int = <fun> *)
  let rec size = function
      Empty -> 0
    | Node (x, l, r) -> (size l) + (size r) + 1;;

(*------------------------------------------------------------------------------------*)
  let size t =
    let aux x l r =
      l + r + 1
    in fold_tree aux 0 t;;
(*------------------------------------------------------------------------------------*)
  size t;;
- : int = 5
```

\newpage

```ocaml
(* val inorder : 'a bin_tree -> 'a list = <fun> *)
  let rec inorder = function
      Empty -> []
    | Node (x,l,r) -> (inorder r) @ [x] @ (inorder l);;

(*------------------------------------------------------------------------------------*)
  let inorder t =
    let aux x l r =
      l @ [x] @ r
    in fold_tree aux [] t;;
(*------------------------------------------------------------------------------------*)
  inorder t;;
- : int list = [8; 3; 5; 2; 1]
```

```ocaml
(* val mirror : 'a bin_tree -> 'a bin_tree = <fun> *)
  let rec mirror = function
      Empty -> Empty
      | Node (x, l, r) -> Node (x, r, l);;

(*------------------------------------------------------------------------------------*)
  let mirror t =
    let aux x l r =
      Node (x, r, l)
    in fold_tree aux Empty t;;
(*------------------------------------------------------------------------------------*)
  mirror t;;
- : int bin_tree =
Node (3, Node (2, Node (1, Empty, Empty), Node (5, Empty, Empty)),
 Node (8, Empty, Empty))
```


## Práctica 13 {#práctica-13}

Se diseña este dato para presentar expresiones de lógica proposicional con variables:

```ocaml
  type log_exp =
        Const of bool
      | Var of string
      | Neg of log_exp
      | Disj of log_exp * log_exp
      | Conj of log_exp * log_exp
      | Cond of log_exp * log_exp
      | BiCond of log_exp * log_exp;;
(*------------------------------------------------------------------------------------*)
(* (p -> q) <-> (-p v q) *)
  BiCond (Cond (Var "p", Var "q"), Disj (Neg (Var "p"), Var "q"))
```

Se implementa esta función para calcular el valor de caulquiera de estas proposiciones en un determinado contexto o lista de pares (variable, valor booleano):

```ocaml
(* val eval : (string * bool) list -> log_exp -> bool = <fun> *)
  let rec eval ctx = function
        Const b -> b
      | Var s -> List.assoc s ctx
      | Neg e -> not (eval ctx e)
      | Disj (e1, e2) -> (eval ctx e1) || (eval ctx e2)
      | Conj (e1, e2) -> (eval ctx e1) && (eval ctx e2)
      | Cond (e1, e2) -> (not (eval ctx e1)) || (eval ctx e2)
      | BiCond (e1, e2) -> (eval ctx e1) = (eval ctx e2);;
```

\newpage

Se implementa una mejora respecto a la anterior:

```ocaml
  type oper = Not;;

  type biOper = Or | And | If | Iff;;

  type prop =
        C of bool
      | V of string
      | Op of oper * prop
      | BiOp of biOper * prop * prop;;
(*------------------------------------------------------------------------------------*)
(* (p -> q) <-> (-p v q) *)
  BiOp (Iff, BiOp (If, V "p", V "q"), BiOP (Or, Op (Not, V "p"), V "q"))
```

Para portar las expresiones originales con las nuevas se implementan las siguientes funciones:

```ocaml
(* val prop_of_log_exp : log_exp -> prop = <fun> *)
  let rec prop_of_log_exp = function
        Const b -> C b
      | Var s -> V s
      | Neg n -> Op (Not,prop_of_log_exp (n))
      | Disj (l1,l2) -> BiOp (Or,prop_of_log_exp(l1),prop_of_log_exp(l1))
      | Conj (l1,l2) -> BiOp (And,prop_of_log_exp(l1),prop_of_log_exp(l1))
      | Cond (l1,l2) -> BiOp (If,prop_of_log_exp(l1),prop_of_log_exp(l1))
      | BiCond (l1,l2) -> BiOp (Iff,prop_of_log_exp(l1),prop_of_log_exp(l1));;
```

```ocaml
(* val log_exp_of_prop : prop -> log_exp = <fun> *)
  let rec log_exp_of_prop = function
        C b -> Const b
      | V s -> Var s
      | Op (o,p) -> (let rec log_exp_of_Op o p= match o,p with
                    (Not,p) -> Neg (log_exp_of_prop p)
                in log_exp_of_Op o p)
      | BiOp (b,p1,p2) -> (let rec log_exp_of_BiOp b p1 p2 = match b,p1,p2 with
                    (Or,p1,p2)  -> Disj (log_exp_of_prop p1,log_exp_of_prop p2)
                  | (And,p1,p2) -> Conj (log_exp_of_prop p1,log_exp_of_prop p2)
                  | (If,p1,p2)  -> Cond (log_exp_of_prop p1,log_exp_of_prop p2)
                  | (Iff,p1,p2) -> BiCond (log_exp_of_prop p1,log_exp_of_prop p2)
                in log_exp_of_BiOp b p1 p2 );;
```

Proporciona el valor de cada una de las conectivas u operadores lógicos

```ocaml
(* val opval : oper -> bool -> bool = <fun> *)
  let opval = function
      Not -> not;;
(* val biopval : biOper -> bool -> bool -> bool = <fun> *)
  let biopval = function
      Or  -> (||)
    | And -> (&&)
    | If  -> (fun p q -> ((not p) || q))
    | Iff -> (=);;

```

Calcula el valor de cada proposición lógica del nuevo tipo

```ocaml
(* val peval : (string * bool) list -> prop -> bool = <fun> *)
  let rec peval ctx = function
      C b -> b
    | V s -> List.assoc s ctx
    | Op (o, p) -> (opval o) (peval ctx p)
    | BiOp (b, p1, p2) -> (biopval b) (peval ctx p1) (peval ctx p2);;
```

\newpage

is-tau indica si la proposición lógica es o no una tautología

```ocaml
(* val simple_props : prop -> string list = <fun> *)
  let rec simple_props = function
      C b -> []
    | V s -> [s]
    | Op (o, p) -> simple_props p
    | BiOp (b, p1, p2) -> (simple_props p1) @ (simple_props p2);;
```

```ocaml
(* val set : 'a list -> 'a list = <fun> *)
  let rec set = function
      [] -> []
    | h::t -> if List.mem h t
              then set t
          else h :: (set t);;
```

```ocaml
(* val aux : 'a list -> ('a * bool) list list = <fun> *)
  let rec aux = function
      [] -> [[]]
    | h::t -> let aux2 = aux t in
              (List.map (function c -> (h,true)::c) aux2) @
                (List.map (function c -> (h,false)::c) aux2);;
```

```ocaml
(* val is_tau : prop -> bool = <fun> *)
  let is_tau p =
      let l = aux (set( simple_props p) ) in
      List.for_all (function c -> peval c p) l;;
```


## Módulo lista \label{lista} {#módulo-lista-label-lista}

```ocaml
module List: sig .. end
```

List operations.

Some functions are flagged as not tail-recursive. A tail-recursive function uses constant stack space, while a non-tail-recursive function uses stack space proportional to the length of its list argument, which can be a problem with very long lists. When the function takes several list arguments, an approximate formula giving stack usage (in some unspecified constant unit) is shown in parentheses.

The above considerations can usually be ignored if your lists are not longer than about 10000 elements.

The labeled version of this module can be used as described in the StdLabels module.

An alias for the type of lists.

```ocaml
type 'a t = 'a list =
|[]
|(::) of 'a * 'a list
```


#### lenght {#lenght}

Return the length (number of elements) of the given list.

```ocaml
val length : 'a list -> int
let length l =
    let rec aux a = function
        [] -> a
        | h::t -> aux (a+1) t
    in aux 0 l;;
```


#### compare-lenghts {#compare-lenghts}

Compare the lengths of two lists. compare_lengths l1 l2 is equivalent to compare (length l1) (length l2), except that the computation stops after reaching the end of the shortest list.

```ocaml
val compare_lengths : 'a list -> 'b list -> int
let rec compare_lengths  l1 l2 =
    match l1,l2 with
        ([],[]) -> 0
        |(_,[]) -> 1
        |([],_) -> -1
        |(_::t1,_::t2) ->
            compare_lengths t1 t2;;
```


#### compare-lenghts-with {#compare-lenghts-with}

Compare the length of a list to an integer. compare\\_length\\_with l len is equivalent to compare (length l) len, except that the computation stops after at most len iterations on the list.

```ocaml
val compare_length_with : 'a list -> int -> int
```


#### cons {#cons}

**cons x xs** is **x :: xs**

```ocaml
val cons : 'a -> 'a list -> 'a list
```


#### hd {#hd}

Return the first element of the given list.
Raises Failure if the list is empty.

```ocaml
val hd : 'a list -> 'a
let hd l = match l with
    | h::_ -> h
    | [] -> raise (Failure "hd");;
```


#### tl {#tl}

Return the given list without its first element.<br />
Raises Failure if the list is empty.

```ocaml
val tl : 'a list -> 'a list
let tl l = match l with
    | _::t-> t
    | [] -> raise (Failure "tl");;
```


#### nth {#nth}

Return the n-th element of the given list. The first element (head of the list) is at position 0.<br />
Raises:

-   Failure if the list is too short.
-   Invalid_argument if n is negative.

<!--listend-->

```ocaml
val nth : 'a list -> int -> 'a
let rec nth l n =
    if(n == 0) then hd l
    else if(n > 0) then nth (tl l)(n-1)
    else if(n < 0) then raise (Invalid_argument "List.nth")
    else raise (Failure "nth");;
```


#### nth-opt {#nth-opt}

Return the n-th element of the given list. The first element (head of the list) is at position 0. Return None if the list is too short.<br />
Raises Invalid_argument if n is negative.

```ocaml
val nth_opt : 'a list -> int -> 'a option
```


#### rev {#rev}

List reversal.

```ocaml
val rev : 'a list -> 'a list
let rev l =
    let rec aux l a = match l with
        [] -> a
        | h::t -> aux t (h::a)
    in aux l [];;
```


#### init {#init}

init len f is f 0; f 1; ...; f (len-1), evaluated left to right.<br />
Raises Invalid_argument if len &lt; 0.

```ocaml
val init : int -> (int -> 'a) -> 'a list
let init n f=
    if n<0 then raise (Invalid_argument "init")
    else let rec aux acc i=
        if i=n then rev acc
        else aux (f i::acc) (i+1)
    in aux[] 0;;
```


#### append {#append}

Concatenate two lists. Same function as the infix operator @. Not tail-recursive (length of the first argument). The @ operator is not tail-recursive either.

```ocaml
val append : 'a list -> 'a list -> 'a list
let rec append l1 l2 =
    if l1=[] then l2
    else (hd l1)::(append(tl l1) l2);;
```


#### rev-append {#rev-append}

rev_append l1 l2 reverses l1 and concatenates it with l2. This is equivalent to (List.rev l1) @ l2, but rev_append is tail-recursive and more efficient.

```ocaml
val rev_append : 'a list -> 'a list -> 'a list
let rev_append l1 l2 =
  let rec aux l1 l = match l1 with
    [] -> l
    | h::t -> aux t (h::l)
  in aux l1 l2;;
```


#### concat {#concat}

Concatenate a list of lists. The elements of the argument are all concatenated together (in the same order) to give the result. Not tail-recursive (length of the argument + length of the longest sub-list).

```ocaml
val concat : 'a list list -> 'a list
let rec concat = function
    [] -> []
    | h::t -> append h (concat t);;
```


#### flatten {#flatten}

Same as List.concat. Not tail-recursive (length of the argument + length of the longest sub-list).

```ocaml
val flatten : 'a list list -> 'a list
let flatten = concat;;
```


### Comparison {#comparison}


#### equal {#equal}

equal eq [a1; ...; an] [b1; ..; bm] holds when the two input lists have the same length, and for each pair of elements ai, bi at the same position we have eq ai bi.<br />
Note: the eq function may be called even if the lists have different length. If you know your equality function is costly, you may want to check List.compare_lengths first.

```ocaml
val equal : ('a -> 'a -> bool) -> 'a list -> 'a list -> bool
```


#### compare {#compare}

compare cmp [a1; ...; an] [b1; ...; bm] performs a lexicographic comparison of the two input lists, using the same 'a -&gt; 'a -&gt; int interface as compare:

a1 :: l1 is smaller than a2
: l2 (negative result) if a1 is smaller than a2, or if they are equal (0 result) and l1 is smaller than l2

the empty list [] is strictly smaller than non-empty lists

Note: the cmp function will be called even if the lists have different lengths.

```ocaml
val compare : ('a -> 'a -> int) -> 'a list -> 'a list -> int
```


### Iterators {#iterators}


#### iter {#iter}

iter f [a1; ...; an] applies function f in turn to a1; ...; an. It is equivalent to begin f a1; f a2; ...; f an; () end.

```ocaml
val iter : ('a -> unit) -> 'a list -> unit
```


#### iteri {#iteri}

Same as List.iter, but the function is applied to the index of the element as first argument (counting from 0), and the element itself as second argument.

```ocaml
val iteri : (int -> 'a -> unit) -> 'a list -> unit
```


#### map {#map}

map f [a1; ...; an] applies function f to a1, ..., an, and builds the list [f a1; ...; f an] with the results returned by f. Not tail-recursive.

```ocaml
val map : ('a -> 'b) -> 'a list -> 'b list
let rec map f = function
    [] -> []
    | h::t -> (f h) :: (map f t);;
```


#### mapi {#mapi}

Same as List.map, but the function is applied to the index of the element as first argument (counting from 0), and the element itself as second argument. Not tail-recursive.

```ocaml
val mapi : (int -> 'a -> 'b) -> 'a list -> 'b list
```


#### rev-map {#rev-map}

rev_map f l gives the same result as List.rev (List.map f l), but is tail-recursive and more efficient.

```ocaml
val rev_map : ('a -> 'b) -> 'a list -> 'b list
let rev_map f l =
    let rec aux l auxl = match l with
        [] -> auxl
        | h::t -> aux t (f(h)::auxl)
    in aux l [];;
```


#### filter-map {#filter-map}

filter_map f l applies f to every element of l, filters out the None elements and returns the list of the arguments of the Some elements.

```ocaml
val filter_map : ('a -> 'b option) -> 'a list -> 'b list
```


#### concat-map {#concat-map}

concat_map f l gives the same result as List.concat (List.map f l). Tail-recursive.

```ocaml
val concat_map : ('a -> 'b list) -> 'a list -> 'b list
```


#### fold-left-map {#fold-left-map}

fold_left_map is a combination of fold_left and map that threads an accumulator through calls to f.

```ocaml
val fold_left_map : ('a -> 'b -> 'a * 'c) -> 'a -> 'b list -> 'a * 'c list
```


#### fold-left {#fold-left}

fold_left f init [b1; ...; bn] is f (... (f (f init b1) b2) ...) bn.

```ocaml
val fold_left : ('a -> 'b -> 'a) -> 'a -> 'b list -> 'a
let rec fold_left f a = function
    [] -> a
    | h::t -> fold_left f (f a h) t;;
```


#### fold-right {#fold-right}

fold_right f [a1; ...; an] init is f a1 (f a2 (... (f an init) ...)). Not tail-recursive.

```ocaml
val fold_right : ('a -> 'b -> 'b) -> 'a list -> 'b -> 'b
let rec fold_right f l a =
    match l with
        [] -> a
        | h::t -> f h (fold_right f t a);;
```


### Iterators on two lists {#iterators-on-two-lists}


#### iter2 {#iter2}

iter2 f [a1; ...; an] [b1; ...; bn] calls in turn f a1 b1; ...; f an bn.<br />
Raises Invalid_argument if the two lists are determined to have different lengths.

```ocaml
val iter2 : ('a -> 'b -> unit) -> 'a list -> 'b list -> unit
```


#### map2 {#map2}

map2 f [a1; ...; an] [b1; ...; bn] is [f a1 b1; ...; f an bn].<br />
Raises Invalid_argument if the two lists are determined to have different lengths. Not tail-recursive.

```ocaml
val map2 : ('a -> 'b -> 'c) -> 'a list -> 'b list -> 'c list
let rec map2 f l1 l2 =
    if (length l1 != length l2)
        then raise (Invalid_argument"map2")
    else if (length l1 == 0) then []
    else (f(hd l1)(hd l2))::map2 f (tl l1)(tl l2);;
```


#### rev-map2 {#rev-map2}

rev-map2 f l1 l2 gives the same result as List.rev (List.map2 f l1 l2), but is tail-recursive and more efficient.

```ocaml
val rev_map2 : ('a -> 'b -> 'c) -> 'a list -> 'b list -> 'c list
```


#### fold-left2 {#fold-left2}

fold-left2 f init [a1; ...; an] [b1; ...; bn] is f (... (f (f init a1 b1) a2 b2) ...) an bn.<br />
Raises Invalid_argument if the two lists are determined to have different lengths.

```ocaml
val fold_left2 : ('a -> 'b -> 'c -> 'a) -> 'a -> 'b list -> 'c list -> 'a
```


#### fold-right2 {#fold-right2}

fold-right2 f [a1; ...; an] [b1; ...; bn] init is f a1 b1 (f a2 b2 (... (f an bn init) ...)).<br />
Raises Invalid_argument if the two lists are determined to have different lengths. Not tail-recursive.

```ocaml
val fold_right2 : ('a -> 'b -> 'c -> 'c) -> 'a list -> 'b list -> 'c -> 'c
```


### List scanning {#list-scanning}


#### for-all {#for-all}

for-all f [a1; ...; an] checks if all elements of the list satisfy the predicate f. That is, it returns (f a1) &amp;&amp; (f a2) &amp;&amp; ... &amp;&amp; (f an) for a non-empty list and true if the list is empty.

```ocaml
val for_all : ('a -> bool) -> 'a list -> bool
let rec for_all p = function
    [] -> true
    | h::t -> (p h) && (for_all p t);;
```


#### exist {#exist}

exists f [a1; ...; an] checks if at least one element of the list satisfies the predicate f. That is, it returns (f a1) || (f a2) || ... || (f an) for a non-empty list and false if the list is empty.

```ocaml
val exists : ('a -> bool) -> 'a list -> bool
let rec exists p = function
    [] -> false
    | h::t -> (p h) || (exists p t);;
```


#### for-all2 {#for-all2}

Same as List.for_all, but for a two-argument predicate.<br />
Raises Invalid_argument if the two lists are determined to have different lengths.

```ocaml
val for_all2 : ('a -> 'b -> bool) -> 'a list -> 'b list -> bool
```


#### exist2 {#exist2}

Same as List.exists, but for a two-argument predicate.<br />
Raises Invalid_argument if the two lists are determined to have different lengths.

```ocaml
val exists2 : ('a -> 'b -> bool) -> 'a list -> 'b list -> bool
```


#### mem {#mem}

mem a set is true if and only if a is equal to an element of set.

```ocaml
val mem : 'a -> 'a list -> bool
let rec mem p = function
    [] -> false
    | h::t -> if (p = h) then true
            else (mem p t);;
```


#### memq {#memq}

Same as List.mem, but uses physical equality instead of structural equality to compare list elements.

```ocaml
val memq : 'a -> 'a list -> bool
```


### List searching {#list-searching}


#### find {#find}

find f l returns the first element of the list l that satisfies the predicate f.<br />
Raises Not-found if there is no value that satisfies f in the list l.

```ocaml
val find : ('a -> bool) -> 'a list -> 'a
let rec find p = function
    [] -> raise Not_found
    | h::t -> if p h then h
              else find p t;;
```


#### find-opt {#find-opt}

find f l returns the first element of the list l that satisfies the predicate f. Returns None if there is no value that satisfies f in the list l.

```ocaml
val find_opt : ('a -> bool) -> 'a list -> 'a option
```


#### find-map {#find-map}

find-map f l applies f to the elements of l in order, and returns the first result of the form Some v, or None if none exist.

```ocaml
val find_map : ('a -> 'b option) -> 'a list -> 'b option
```


#### filter {#filter}

filter f l returns all the elements of the list l that satisfy the predicate f. The order of the elements in the input list is preserved.

```ocaml
val filter : ('a -> bool) -> 'a list -> 'a list
let filter p l =
  let rec aux si no = function
      [] -> rev si
      | h::t -> if (p h) then aux (h::si) no t
                else aux si no t
  in aux [] [] l;;
```


#### filter-all {#filter-all}

find-all is another name for List.filter.

```ocaml
val find_all : ('a -> bool) -> 'a list -> 'a list
let find_all = filter;;
```


#### filteri {#filteri}

Same as List.filter, but the predicate is applied to the index of the element as first argument (counting from 0), and the element itself as second argument.

```ocaml
val filteri : (int -> 'a -> bool) -> 'a list -> 'a list
```


#### partition {#partition}

partition f l returns a pair of lists (l1, l2), where l1 is the list of all the elements of l that satisfy the predicate f, and l2 is the list of all the elements of l that do not satisfy f. The order of the elements in the input list is preserved.

```ocaml
val partition : ('a -> bool) -> 'a list -> 'a list * 'a list
let partition p l =
  let rec aux si no = function
      [] -> (rev si, rev no)
      | h::t -> if (p h) then aux (h::si) no t
                else aux si (h::no) t
  in aux [] [] l;;
```


#### partition_map {#partition-map}

partition-map f l returns a pair of lists (l1, l2) such that, for each element x of the input list l:

-   if f x is Left y1, then y1 is in l1, and
-   if f x is Right y2, then y2 is in l2.
-   The output elements are included in l1 and l2 in the same relative order as the corresponding input elements in l.

In particular, partition_map (fun x -&gt; if f x then Left x else Right x) l is equivalent to partition f l.

```ocaml
val partition_map : ('a -> ('b, 'c) Either.t) -> 'a list -> 'b list * 'c list
```


### Association lists {#association-lists}


#### assoc {#assoc}

assoc a l returns the value associated with key a in the list of pairs l. That is, assoc a [ ...; (a,b); ...] = b if (a,b) is the leftmost binding of a in list l.<br />
Raises Not-found if there is no value associated with a in the list l.

```ocaml
val assoc : 'a -> ('a * 'b) list -> 'b
```


#### assoc-opt {#assoc-opt}

assoc-opt a l returns the value associated with key a in the list of pairs l. That is, assoc_opt a [ ...; (a,b); ...] = Some b if (a,b) is the leftmost binding of a in list l. Returns None if there is no value associated with a in the list l.

```ocaml
val assoc_opt : 'a -> ('a * 'b) list -> 'b option
```


#### assq {#assq}

Same as List.assoc, but uses physical equality instead of structural equality to compare keys.

```ocaml
val assq : 'a -> ('a * 'b) list -> 'b
```


#### assq-opt {#assq-opt}

Same as List.assoc-opt, but uses physical equality instead of structural equality to compare keys.

```ocaml
val assq_opt : 'a -> ('a * 'b) list -> 'b option
```


#### mem-assoc {#mem-assoc}

Same as List.assoc, but simply return true if a binding exists, and false if no bindings exist for the given key.

```ocaml
val mem_assoc : 'a -> ('a * 'b) list -> bool
```


#### mem-assq {#mem-assq}

Same as List.mem-assoc, but uses physical equality instead of structural equality to compare keys.

```ocaml
val mem_assq : 'a -> ('a * 'b) list -> bool
```


#### remove-assoc {#remove-assoc}

remove-assoc a l returns the list of pairs l without the first pair with key a, if any. Not tail-recursive.

```ocaml
val remove_assoc : 'a -> ('a * 'b) list -> ('a * 'b) list
```


#### remove-assq {#remove-assq}

Same as List.remove-assoc, but uses physical equality instead of structural equality to compare keys. Not tail-recursive.

```ocaml
val remove_assq : 'a -> ('a * 'b) list -> ('a * 'b) list
```


### Lists of pairs {#lists-of-pairs}


#### split {#split}

Transform a list of pairs into a pair of lists: split [(a1,b1); ...; (an,bn)] is ([a1; ...; an], [b1; ...; bn]). Not tail-recursive.

```ocaml
val split : ('a * 'b) list -> 'a list * 'b list
let rec split = function
    [] -> ([],[])
    | (h1,h2)::t -> let t1,t2 =
        split t in h1::t1,h2::t2;;
```


#### combine {#combine}

Transform a pair of lists into a list of pairs: combine [a1; ...; an] [b1; ...; bn] is [(a1,b1); ...; (an,bn)].<br />
Raises Invalid-argument if the two lists have different lengths. Not tail-recursive.

```ocaml
val combine : 'a list -> 'b list -> ('a * 'b) list
let rec combine l1 l2 =
    match (l1,l2) with
        [], [] -> []
        | h1::t1, h2::t2 -> (h1,h2) :: (combine (t1) (t2))
        | _ -> raise (Invalid_argument "combine");;
```


### Sorting {#sorting}


#### sort {#sort}

Sort a list in increasing order according to a comparison function. The comparison function must return 0 if its arguments compare as equal, a positive integer if the first is greater, and a negative integer if the first is smaller (see Array.sort for a complete specification). For example, compare is a suitable comparison function. The resulting list is sorted in increasing order. List.sort is guaranteed to run in constant heap space (in addition to the size of the result list) and logarithmic stack space.
The current implementation uses Merge Sort. It runs in constant heap space and logarithmic stack space.

```ocaml
val sort : ('a -> 'a -> int) -> 'a list -> 'a list
```


#### stable-sort {#stable-sort}

Same as List.sort, but the sorting algorithm is guaranteed to be stable (i.e. elements that compare equal are kept in their original order).
The current implementation uses Merge Sort. It runs in constant heap space and logarithmic stack space.

```ocaml
val stable_sort : ('a -> 'a -> int) -> 'a list -> 'a list
```


#### fast-sort {#fast-sort}

Same as List.sort or List.stable-sort, whichever is faster on typical input.

```ocaml
val fast_sort : ('a -> 'a -> int) -> 'a list -> 'a list
```


#### sort-uniq {#sort-uniq}

Same as List.sort, but also remove duplicates.

```ocaml
val sort_uniq : ('a -> 'a -> int) -> 'a list -> 'a list
```


#### merge {#merge}

Merge two lists: Assuming that l1 and l2 are sorted according to the comparison function cmp, merge cmp l1 l2 will return a sorted list containing all the elements of l1 and l2. If several elements compare equal, the elements of l1 will be before the elements of l2. Not tail-recursive (sum of the lengths of the arguments).

```ocaml
val merge : ('a -> 'a -> int) -> 'a list -> 'a list -> 'a list
```


### Lists and Sequences {#lists-and-sequences}


#### to-seq {#to-seq}

Iterate on the list.

```ocaml
val to_seq : 'a list -> 'a Seq.t
```


#### of-seq {#of-seq}

Create a list from a sequence.

```ocaml
val of_seq : 'a Seq.t -> 'a list
```
