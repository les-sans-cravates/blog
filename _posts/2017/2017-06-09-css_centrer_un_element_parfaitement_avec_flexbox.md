---
layout: post
date:   2017-06-09
title:  CSS - Centrer un élément parfaitement avec Flexbox
avatar : lionel_jamal
author: Lionel JAMAL
img : css_centrer_un_element_parfaitement_avec_flexbox
---

Grâce à la propriété **Flexbox**, il est devenu assez facile de centrer horizontalement et verticalement un élément. Flexbox est arrivé avec de nouvelles propriétés CSS. Celles qui nous intéressent ici sont ```align-items``` et ```justify-content```.

### Alignement de bases

On va juste créer un conteneur parent une ```div``` enfant, styliser sommairement le tout.

<iframe width="100%" height="220" src="//jsfiddle.net/integrateurwebb/xawsmfqw/1/embedded/result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Align-items

La propriété ```align-items``` va permettre d'**aligner verticalement un élément enfant d'un container flex**. Pour que cette propriété soit prise en compte, il faut bien sûr ajouter la propriété ```display: flex```

```css
.wrapper {
  align-items: center;
  display: flex;
}
```

<iframe width="100%" height="220" src="//jsfiddle.net/integrateurwebb/pd4tenjk/embedded/result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

### Justify-content

Cette propriété va permettre d'aligner les enfants sur l'axe horizontal.

```css
.wrapper {
  justify-content: center;
  display: flex;
}
```

<iframe width="100%" height="220" src="//jsfiddle.net/integrateurwebb/mn5vgLho/embedded/result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## La solution finale

```css
.wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
}
```

<iframe width="100%" height="220" src="//jsfiddle.net/integrateurwebb/ayrnpb25/2/embedded/result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

# Bonus

Si jamais vous voulez appliquer cette solution, mais avec deux enfants (comme ici dans l'exemple un titre et un sous-titre), il faut ajouter au conteneur parent la propriété ```flex-direction: column```

```css
.wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

<iframe width="100%" height="220" src="//jsfiddle.net/integrateurwebb/amnb2gwx/embedded/result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Le mot de la fin

On peut remercier l'arrivée de Flexbox, car quelque chose qui a été longtemps laborieux depuis l'abandon des structures de pages crée en tableau, il redevient facile de centrer des éléments verticalement et horizontalement.
