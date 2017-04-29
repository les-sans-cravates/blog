---
layout: post
date:   2017-04-28
title:  Qui gagne entre width, min-width et max-width ?
avatar : lionel_jamal
author: Lionel JAMAL
img : qui_gagne_entre_width_min_width_et_max_width
---

Quand on débute avec le CSS, on teste les propriétés sur l'élément ciblé jusqu'à obtenir le style désiré. Le problème c'est que l'on peut faire ça pendant toute notre carrière sans jamais se demander si telle propriété à la priorité sur tel autre.

## À votre avis ?

Personnellement, je ne m'étais jamais vraiment posé la question. J'aurai dit par exemple que si pour un élément :

* une largeur minimum de 200px est déclarée
* la largeur maximum est de 150px

Notre élément fera 150px de largeur… Eh bien non, il fera 200px de large.

## Où trouver la réponse ?

Soit on teste et à force de tomber sur ce cas précis on connaît la réponse, soit on va voir la documentation.

Aujourd'hui nous avons de la chance, en ce qui concerne le CSS nous pouvons trouver une documentation complète et claire sur [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/).

Quand j'ai commencé à faire du CSS, ce n'était pas le cas, ou tout du moins c'était beaucoup moins connu que maintenant et donc je n'avais pas le réflexe de m'y référer.

Si vous ne connaissez pas ce site, allez y jeter un œil, en plus pour ceux que l'anglais rebute un peu, la documentation au niveau de CSS a été quasi intégralement traduite en français.

## Que nous dit la documentation ?

On a de la chance, elle est assez claire.

Pour width :

*La propriété `width` définit la largeur de la zone dédiée au contenu d'un élément.*

Pour min-width :

*La valeur de `min-width` surcharge les valeurs de `max-width` et de `width` si elle est supérieure à l'une de ces propriétés.*

Pour max-width :

*La valeur de `max-width` surcharge la valeur de width, mais elle est surchargée par `min-width`.*

## Ça donne quoi ?

Voyons en pratique ce que ça donne.

### Max-width

```css
div {
  border: solid 1px red;
  width: 300px;
}

p {
  border: solid 1px blue;
  max-width: 150px;
}
```
![Image d'exemple illustrant la propriété max-width][0]

Ici comme on s'y attend, seule la propriété `max-width` est déclarée donc le texte prend la largeur de la valeur renseignée.

### Width avec max-width

```css
div {
  border: solid 1px red;
  width: 300px;
}

p {
  border: solid 1px blue;
  max-width: 150px;
  width: 200px;
}
```
![Image d'exemple illustrant la propriété width][1]

La propriété `width` est maintenant déclarée conjointement avec `max-width` mais avec une valeur supérieure, on voit bien ici que c'est la propriété `max-width` qui a la priorité puisque le texte ne s'étend pas plus que la valeur de `max-width`.

### Les trois propriétés

```css
div {
  border: solid 1px red;
  width: 300px;
}

p {
  border: solid 1px blue;
  max-width: 150px;
  min-width: 180px;
  width: 200px;
}
```
![Image d'exemple illustrant la propriété min-width][2]

Les trois propriétés sont déclarées, `min-width` à la plus grande valeur, on voit bien qu'elle à la priorité sur les autres puisque le texte est plus large que les deux autres propriétés de valeur inférieur.

## En résumé

Comme le dit la documentation et comme vu avec les 3 tests effectués, on voit bien que pour le calcul de la largeur maximale d'un élément, l'ordre de priorité est le suivant :
* `min-width` est prioritaire et écrase `max-width` ainsi que `width` si elle est supérieure
* `max-width` limite la largeur de `width` si celle-ci est déclarée plus grande

Pour la hauteur d'un élément, c'est exactement le même fonctionnement, mais avec les propriétés `height`, `max-height` et `min-height`.

[0]: /img/articles/qui_gagne_entre_width_min_width_et_max_width_exemple_max_width.png
[1]: /img/articles/qui_gagne_entre_width_min_width_et_max_width_exemple_width.png
[2]: /img/articles/qui_gagne_entre_width_min_width_et_max_width_exemple_min_width.png
