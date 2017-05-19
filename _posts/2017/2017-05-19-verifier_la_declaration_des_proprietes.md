---
layout: post
date:   2017-05-19
title:  vérifier la déclaration des propriétés
avatar : erwan_leblanc
author: Erwan LEBLANC
img : verifier_la_declaration_des_proprietes
---

En développement nous manipulons sans cesse des variables agrégeant des lots de données afin de faire divers traitements. Vu que nous sommes consciencieux, lors de nos traitements, nous devons tester la présence effective des propriétés et méthodes auxquelles nous voulons accéder. 


## Facile, je le fais toujours… Ok pas toujours mais souvent (je crois…) !

Tout le monde a déjà énormément écrit ce genre de chose :
```javascript
if(myProperty)
- - -
myProperty !== undefined
- - -
myProperty = myProperty || 'someDefaultValue'
```

C'est bien, mais comment faisons nous lorsque nous devons tester/accéder a une propriété qui n'est pas accessible directement ?

## Structures plus complexes
Le niveau de complexité d'un array ou d'un objet peut très vite augmenter et nous nous retrouvons avec une arborescence de ce type :
```javascript
myObject = {
  oneProperty: {
    someSubProperty: '',
    anotherSubProperty: '',
    someSubMethod: ''
  },
  anotherProperty: {
    someSubProperty: '',
    anotherSubProperty: '',
    someSubMethod: ''
  },
  aDifferentProperty: {
    something: [],
    with: {
      nasty: {
        indentation: {
          structure: ''
        }
      }
    }
  }
}
```
Pourquoi ne pas faire comme dit précédemment ?
Effectivement nous pouvons, voici ce que cela donnerais pour tester la propriété "structure" ci-dessus.

```javascript
if(myObject.aDifferentProperty.nasty.indentation.structure)
- - -
if(myObject.aDifferentProperty.nasty.indentation.structure !== undefined)
- - -
myObject.aDifferentProperty.nasty.indentation.structure = myObject.aDifferentProperty.nasty.indentation.structure || 'someDefaultValue'
```

Ok, c'est moins jolie mais il faut bien accéder à la propriété non ? Certes, mais cela nous pose un problème plus grave.


## Problématique

Hormis la célèbre erreur JavaScript `undefined is not a function` vous vous êtes très probablement retrouvé devant celle-ci :
`Uncaught TypeError: Cannot read property 'someProperty' of undefined`


Et oui, voilà ce qui peut arriver si vous essayé d'accéder a une propriété sans vérifié si conteneur, son "parent" est bien définit et cela stoppera l'exécution de votre JavaScript.
Comment éviter cette erreur à coup sûr, reprenons les exemples ci-dessus.

```javascript
if(myObject) {
  if(myObject.aDifferentProperty){
    if(myObject.aDifferentProperty.nasty){
      if(myObject.aDifferentProperty.nasty.indentation){ 
        if(myObject.aDifferentProperty.nasty.indentation.structure){
          // do something
        }
      }
    }
  }
}
- - -
if(myObject 
  && myObject.aDifferentProperty 
  && myObject.aDifferentProperty.nasty 
  && myObject.aDifferentProperty.nasty.indentation 
  && myObject.aDifferentProperty.nasty.indentation.structure !== undefined)
- - -
myObject.aDifferentProperty.nasty.indentation.structure = myObject 
  && myObject.aDifferentProperty 
  && myObject.aDifferentProperty.nasty 
  && myObject.aDifferentProperty.nasty.indentation 
  && myObject.aDifferentProperty.nasty.indentation.structure || 'someDefaultValue'
```

C'est tout de suite moins jolie et lisible.


## 1ère solution : le minimum syndical

Vérifier la présence de chaque propriété et l'initialisé si ce n'est pas le cas.

```javascript
myNestedProperty = ((((myObject || {}).aDifferentProperty || {}).nasty || {}).indentation || {}).structure
if(myNestedProperty) {
  // do something
}
```

Nous n'avons pas l'habitude de voir ce genre d'implémentation mais elle fonctionne très bien. Elle ne change par contre pas énormément des exemples exposés jusqu'à présent et sera conseillé pour des objets avec peu de complexité sous peine de devenir illisible.

## 2ème solution : votre propre fonction

Plutôt que de chercher une façon qui fasse le travail attendu avec le moins de caractères possible, pourquoi ne pas simplement écrire une fonction qui fera les vérifications pour vous ?

Voici quelques implémentations, à adapter selon les besoins de chacun.

```javascript
// classic solution
function checkNested(obj, path) {
  // iterate on each property
  for (var i = 0; i < path.length; i++) {
    
    // check obj and his property
    if (!obj || !obj.hasOwnProperty(path[i])) {
      return false;
    }
    
    // use cheked property has next object to test 
    obj = obj[path[i]];
  }

  return true;
}

checkNested(myObject, ['aDifferentProperty', 'nasty'
 'indentation', 'structure'])

- - -

// recursive function solution
function checkNested(obj, path) {
  // get next propName
  let prop = path.shift()
  
  // check obj and his property
  if(!obj || !obj.hasOwnProperty(prop))
    return false

  // no more iteration
  if(path.length === 0)
    return true
  
  // next iteration
  return checkNested(obj[prop], path)
}

checkNested(myObject, ['aDifferentProperty', 'nasty', 'indentation', 'structure'])
```

## 3ème solution : ne pas réinventer la roue

Des bibliothèques de fonctions comme lodash proposent leur propre implémentation pour répondre à ce besoin.
lodash.has :
 
 * [documentation officiel](https://lodash.com/docs/4.17.4#has)
 * Si vous ne souhaitez pas utiliser les autres fonctions de lodash, vous pouvez ne récupérer que celle/ceux dont vous avez besoin sur npm (voici par exemple [le lien pour la fonction .has](https://www.npmjs.com/package/lodash.has))


## Au final

Toutes ces solutions fonctionnent, leur différence de vitesse d'exécution sont très faible et ne constitue pas, pour la plupart des projets sur lesquelles nous travaillons, un critère prioritaire.
La lisibilité, le respect de votre code style, la cohérence avec votre le reste des bibliothèques et surtout l'approbation de votre équipe est selon moi plus important et permettra de répondre correctement à votre besoin spécifique, une fois pour toutes et que cette solution soit utilisé par l'équipe au complet.
