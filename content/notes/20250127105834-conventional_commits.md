---
title: "Conventional Commits"
date: 2025-01-27T00:00:00+01:00
lastmod: 2025-01-30T00:00:00+01:00
draft: false
---

Source: <https://www.conventionalcommits.org/en/v1.0.0/>

**A specification for adding human and machine readable meaning to commit messages**

The Conventional Commits specification is a lightweight convention on top of commit messages.
It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.
This convention dovetails with [Semantic Versioning](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```


## Types {#types}


### feat {#feat}

Introduces a new feature


### fix {#fix}

Patches a bug in the codebase


### refactor {#refactor}

A code change that neither fixes a bug nor adds a feature


### build {#build}

Changes that affect the build system or external dependencies


### chore {#chore}

Involves maintenance tasks or changes that don't directly modify the source code or test files


### ci {#ci}

Changes in CI configuration files and scripts


### docs {#docs}

Documentation only changes


### style {#style}

Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)


### perf {#perf}

A code change that improves performance


### test {#test}

Adding missing tests or correcting existing tests


## Footers {#footers}


### BREAKING CHANGE {#breaking-change}

This footer should be added when a breaking change is introduced, following the next format:

```txt
BREAKING CHANGE: <description>
```
