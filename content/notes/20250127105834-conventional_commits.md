---
title: "Conventional Commits"
date: 2025-01-27T00:00:00+01:00
lastmod: 2025-01-29T00:00:00+01:00
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

-   **fix** (patches a bug in the codebase)
-   **feat** (introduces a new feature)
-   **build**
-   **chore**
-   **ci**
-   **docs**
-   **style**
-   **refactor**
-   **perf**
-   **test**


## Footers {#footers}

**BREAKING CHANGE:**
