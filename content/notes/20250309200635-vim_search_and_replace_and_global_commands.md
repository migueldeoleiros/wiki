---
title: "Vim search and replace and global commands"
author: ["miguel"]
date: 2025-03-09T00:00:00+01:00
lastmod: 2025-03-09T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})


## Search and replace {#search-and-replace}

The search and replace function in Vim is done through a command on _Command Mode_, that allows us to have a lot of
control over it.
The way you're probably going to use the most is this: `:%s/bad/good/g` this would change all words "bad" to "good" in the file.
It already seems pretty easy to use, but if wee want to have a bit more control we can divide it in parts:
`:[range] s[ubstitute]/pattern/string/[flags] [count]`
where the parameters between brackets are optional


### range {#range}

On our first example the range was "%", that defines the whole file, but we can also omit it to execute the same thing
on just one line. in a similar way you could do `:1,10s/bad/good/g` to execute the command in lines one to ten.
while defining ranges you can use the next table and it's combinations:

| range | description            |
|-------|------------------------|
| .     | current line           |
| 1     | first line             |
| $     | last line              |
| %     | all lines              |
| .+1   | line after current     |
| 1,10  | range between 1 and 10 |


### flags {#flags}

Flags can be combined as well, and aren't required.
Using the previous example you can add a confirmation with the flag "c" `:$s/bad/good/gc`

| flag | description                       |
|------|-----------------------------------|
| g    | replace all                       |
| c    | ask for confirmation              |
| i    | ignore case for the pattern       |
| I    | don't ignore case for the pattern |


### Regular expressions {#regular-expressions}

You can use regular expressions inside the commands, this gives us a lot of flexibility.
Notice that to use regex you need to add "\\" before the expressions so they aren't counted as regular text
Here are some examples:

`:$s/\(bad\|good\)/great/g` This would replace any instance of "bad" or "good" with "great"

`:$s/\<good\>/bad/g` This would replace only good as a whole word


## The global command {#the-global-command}

The global command can also be quite useful, and if you understand how to use _substitute_ it is very similar.
The syntax is: `:[range]g/pattern/command`
Where **pattern** is what we are looking to match in the file and **command** is what we want to execute for
each line matching the pattern.
As an example we can run `:g/error/d` to execute the command **d** _delete_ on every line that contains the word
"error".
We could also run `:g!/error/d` to invert the search, this time deleting every line that doesn't contain "error".

You can also execute a substitute command inside a global command like in `:g/bad/s/good/great/g` where
it runs the command `s/good/great/g` for every line containing the word "bad"

Note that although in this examples **d** is both a normal mode command and a command mode command,
you can only execute command mode commands with the global command. That said, you can use the normal
prefix to execute a normal mode command like in this example: `:g/something/normal @a` where we execute
the macro in register "a" for every line containing "something".
