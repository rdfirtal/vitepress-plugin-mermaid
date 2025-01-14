---
mermaidTheme: forest
title: A more complex example
---

# Frontmatter Setup

💡 The theme for each page can be set in the frontmatter mermaidTheme parameter! But is only valid is light mode...

```
---
mermaidTheme: forest
title: A more complex example
---
```

# Code

Images and links can be used as well..

::: warning
You should place your image files in the public folder!
In case you set an base you should prefix images with it.
:::

```mmd
graph LR;
    K([<img src='/vitepress-plugin-mermaid/K.png' width='60' >])-.->G((<img id='git' src='/vitepress-plugin-mermaid/Octocat.png' width='50' >));
    H([<img id='helm' src='/vitepress-plugin-mermaid/helm.png' width='60' >])-.->G
    G-->A;
    A(<img src='/vitepress-plugin-mermaid/argo-cd.png' width='60' >)-->D(<img src='/vitepress-plugin-mermaid/ocp.png' width='60' >);
classDef img fill:none,color:none,stroke:none,border-radius:50px
class G,D,A,K,H img
click G "http://www.github.com" "This is a link" _blank
click K "https://kustomize.io/" _blank
```

# Render

In light mode the arrows are green since we are using forest here  
Kustomize and github are links in here!

```mermaid
graph LR;
    K([<img src='/vitepress-plugin-mermaid/K.png' width='60' >])-.->G((<img id='git' src='/vitepress-plugin-mermaid/Octocat.png' width='50' >));
    H([<img id='helm' src='/vitepress-plugin-mermaid/helm.png' width='60' >])-.->G
    G-->A;
    A(<img src='/vitepress-plugin-mermaid/argo-cd.png' width='60' >)-->D(<img src='/vitepress-plugin-mermaid/ocp.png' width='60' >);
classDef img fill:none,color:none,stroke:none,border-radius:50px
class G,D,A,K,H img
click G "http://www.github.com" "This is a link" _blank
click K "https://kustomize.io/" _blank
```

## Pie

```mmd
pie title Pets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15
```

```mermaid
pie title Pets adopted by volunteers
  "Dogs" : 386
  "Cats" : 85
  "Rats" : 15
```

<style>
  #git {
    border-radius: 50px;
  }

  #helm,
  .dark #git{
    transform: scale(1.5);
  }

  .dark #helm {
    filter: brightness(1.5);
  }
</style>
