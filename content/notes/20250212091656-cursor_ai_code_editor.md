---
title: "Cursor AI code editor"
date: 2025-02-12T00:00:00+01:00
lastmod: 2025-02-12T00:00:00+01:00
tags: ["tools"]
draft: false
---

source: <https://www.cursor.com>


## Introduction {#introduction}

Cursor is an AI-powered code editor designed to enhance coding efficiency and productivity. It is built on the foundation of Visual Studio Code, retaining its familiar features while introducing innovative AI-driven functionalities.


### Key Features {#key-features}

-   **AI Code Completion**: Cursor AI offers intelligent autocompletion that predicts and completes entire code blocks, not just single lines. It analyzes the context of your project to suggest relevant edits.
-   **Smart Code Improvements**: The editor can refactor and optimize code by converting loops to list comprehensions, simplifying conditionals, and removing unused variables.
-   **Plain Language Commands**: Can generate code using natural language instructions. For example, typing "Create a function to calculate the Fibonacci sequence" can result in a fully generated function.
-   **In-Context Help and Debugging**: Provides real-time explanations and documentation as you code. It also assists in debugging by highlighting issues and suggesting fixes.
-   **Codebase Understanding**: Can comprehend and provide insights into the entire codebase, allowing developers to query the codebase in natural language5.
-   **Extension Compatibility**: As a fork of VS Code, Cursor supports existing extensions and settings, ensuring a seamless integration into developers' workflows. (importing all configurations on startup can result in unexpected consequences)


## Installation {#installation}

Provides binaries for Windows and MacOS, for Linux AppImage, can also be installed through the AUR in Arch with the `cursor-bin` package.


## Cursor Settings {#cursor-settings}


### Rules for AI {#rules-for-ai}

For general rules that you want to have in all chats and projects, things like "Always answer in Spanish"
`Cursor Settings > General > Rules for AI`


### Models {#models}

Adviced to use `claude-3.5-sonnet` specially for composer.
`gpt-4o-mini` works well for chat, to save claude credits (not relevant with license)


### Add your docs {#add-your-docs}

Copy the documentation for the framework you use.
`Cursor Settings > Features > Docs`
Paste the links and use them inside chat/composer with @ Docs


## .cursorrules {#dot-cursorrules}

`.cursorrules` is a powerful feature in Cursor AI that allows developers to define project-specific instructions for the AI. Here's why you might want to use it:

-   **Customized AI Behavior**: .cursorrules files help tailor the AI's responses to your project's specific needs, ensuring more relevant and accurate code suggestions.
-   **Consistency**: By defining coding standards and best practices in your .cursorrules file, you can ensure that the AI generates code that aligns with your project's style guidelines.
-   **Context Awareness**: You can provide the AI with important context about your project, such as commonly used methods, architectural decisions, or specific libraries, leading to more informed code generation.
-   **Improved Productivity**: With well-defined rules, the AI can generate code that requires less manual editing, speeding up your development process.
-   **Team Alignment**: For team projects, a shared .cursorrules file ensures that all team members receive consistent AI assistance, promoting cohesion in coding practices.
-   **Project-Specific Knowledge**: You can include information about your project's structure, dependencies, or unique requirements, helping the AI to provide more accurate and relevant suggestions.

if you make a .cursorrules in your root directory, it will follow the rules always


### Resources {#resources}

You can find base rules here for a number of different stacks
<https://github.com/PatrickJS/awesome-cursorrules>
<https://cursor.directory/>


## Instructions.md {#instructions-dot-md}

Creating an `instructions.md` file in the root of your project (any other name also works) is a great way of adding the necessary context to the AI.
In this file you'll explain in plain text the following:

-   core features
-   goals &amp; objectives
-   tech stack &amp; packages
-   project folder structure
-   database design
-   visual design if working with frontend

When working with a new project like a webpage, consider adding screenshots of similar projects as reference

Documentation was already important before AI was a thing, having proper documentation can help both the AI, your teammates and yourself in the future, so it's always worth it.


## Chat vs Composer {#chat-vs-composer}

Use chat for smaller tasks and for explaining code/commands. Use it to ask questions and navigate your codebase.
Use composer for writing the code, tag your `instructions.md` inside the composer always and tell him to update it as the project progresses.
Only ask composer to do one task at a time. Make it make the changes step by step, if you ask to it to edit multiple files it will hallucinate and you will lose control.

Always verify the code is clean before approving the change.

Save your claude credits for the composer and use gpt-4o-mini with chat.


## Other tips and tricks {#other-tips-and-tricks}

-   Auto-context is not the best way to use the chat, it's better to add files one by one making use of the @

-   Avoid adding too many files to the context, usually no more that 2, the more files you add the faster the context will run out and it will start hallucinating. Add snippets instead of whole files to avoid this issue.

-   You can pin files to the contest to avoid adding them every time

-   Some times is more productive to add stubs and comments on what you want the AI to generate, this works well with the selection feature, that takes your selection as context.

-   When stuck with unhelpful answers open a new chat, take a look if the instructions file if it’s up to date, change the model and play with the way you formulate the questions and the context files.


## Step by Step walkthrough {#step-by-step-walkthrough}

source: <https://x.com/ryancarson/status/1877170052492824683>

-   Start with o1(chatGPT on web not cursor) and explain all the things I’d like the feature to do.
-   Ask o1 to ask me clarifying questions on the functionality.
-   Ask o1 to break it down into atomic steps for a junior dev. I say “Do not write any code. If necessary though you can use pseudocode.
-   Copy that into a instructions.md in Cursor. I ask Cursor Agent to read the file and ask any clarifying questions before beginning.
-   Ask it to tackle the first step.
-   Typically they’ll be some back and forth while it finishes coding the first step. Once it’s done ask it to examine the plan and output a list of tasks with ✅ in front of each task it’s completed.
-   Repeat until done. I usually commit and deploy after each successful step.
