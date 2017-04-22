---
layout: post
date:   2017-04-21
title: Des sources pour mieux comprendre Git
avatar : erwan_leblanc
author : Erwan LEBLANC
img : sources_pour_mieux_comprendre_git
---

Comme la plupart d'entre vous, j'utilise Git. Ce gestionnaire de versionnement n'a plus à faire ses preuves et est très largement utilisé par la communauté et les entreprises. Bien que massivement adopté, je rencontre souvent des personnes qui n'exploitent qu'une infime partie de son potentiel. La grande majorité semble utiliser Git via leur IDE, c'est clairement pratique et permet de faire les commades les plus connus / utilisées mais lorsque vous avez un besoin inhabituel l'IDE vous laisse tomber et vous devez utiliser la ligne de commande.

Je ne vais pas essayer d'écrire un tutorial, cours ou formation sur Git, il y en a déjà assez. L'inconvénient par contre est qu'il est difficile de s'y retrouver. Je vous propose donc **une liste des ressources** que j'ai personnellement utilisées pour approfondir mes connaissances et ma compréhension de cet outil :-)


### A qui est destiné cette article ?
Les personnes connaissant les bases de Git mais qui souhaiterais approfondir leurs connaissances et leur compréhension de cet outil magique.

### A quel moment lire cette article ?
Cet article se lit en 10min, donc vous pouvez le lire a peu près n'importe où. L'objectif est de vous transmettre une liste d'articles qui eux, requiert une lecture plus posé, idéalement en testant chaque commande présenté. Séparer la lecture des sources citées ci-dessous par quelques jours est conseillé pour mieux avoir le temps d'assimiler toutes les informations et astuces qu'ils ont à vous offrir.


## Sources

Si vous n'avez jamais entendu parlé de **Christophe Porteneuve**, sachez que c'est l'une des personnes qui pousse la communauté Git (mais pas que) vers le haut. Il a notamment réalisé une série d'articles très utile et propose depuis quelques années une formation de qualité (j'ai eu la chance d'y assister également). Les articles qui suivent ont été rédigé par lui et étaient, à l'origine, présenté sur le site git-attitude qui à maintenant fusionné avec son site de formation, [delicious-insights](http://delicious-insights.com).


### configuration
Pour commencer, la configuration de Git par défaut n'est pas franchement attirante. Il suffit de lancer la commande git log pour s'en rendre compte, ce n'est pas très lisible... Fort heureusement les commandes Git ont un nombre d'options conséquent, dont une partie pour le rendu dans votre terminal. Suivez cette [article](https://delicious-insights.com/fr/articles/configuration-git/) pour avoir un premier aperçu de ce que l'on peut faire.

Pour les plus pressé récupérer directement ce fichier [.gitconfig](https://gist.github.com/tdd/470582).



### merge vs rebase
Je vous propose ensuite de vous pencher sur les deux stars connu mais ho combien mal compris, j'ai nommé merge et rebase. Ces commandes sont énormément utilisées, c'est bien naturel, elles sont géniales. Mal maitrisé en revanche, elles sont capable du pire :-)

Lien de l'[article](https://delicious-insights.com/fr/articles/bien-utiliser-git-merge-et-rebase/)


### bisect
Une commande que très peu de personnes connaissent et pourtant elle nous fait gagner tellement de temps...
Il s'est forcément passé un moment où vous deviez chercher l'origine d'un bug, malheureusement il semble être en place depuis longtemps, très longtemps, peu être même avant que vous n'arriviez dans votre boite. La commande bisect apaisera vos angoisses et débusquera le commit fautif pour vous.
Voici l'[article](https://delicious-insights.com/fr/articles/git-bisect/)



### options en folie
Cet article met en avant des options pour les commandes que nous utilisons chaque jour. Besoin de trouvez quand et qui a modifié une ligne de code particulière ? Faire des commits partiels ou des diff plus lisible ? Suivez ce [lien](https://delicious-insights.com/fr/articles/30-options-git-qui-gagnent-a-etre-connues/), cet article recense plein d'options géniales !


### Officiel
Je ne peux pas omettre le prochain lien, c'est la documentation officiel de Git. Toutes les informations retranscrites par des formations, tutoriels ou cours proviennent de ce site. Les articles en lignes vous permettent de faire un tour d'horizon des choses et d'être opérationnel rapidement mais lorsque vous avez une question précise sur le fonctionnement de Git, **allez directement à la source** :-)

Retenez bien celui-ci : [git-scm](https://git-scm.com/docs)



## En conclusion
Pour finir cette article, je souhaite vous dire quelques mots à propos des workflows. Il en existe plusieurs, les uns s'inspirant des autres. Certains sont minimalistes, d'autres recherche l'exhaustivité, **ils ont tous leurs avantages et inconvénients**. Tous intéressant qu'ils soient, mon conseil est de commencer par approfondir l'utilisation de Git et de ses commandes. Lors de vos différentes missions, vous rencontrerez différents workflows, mais tous utilisent les mêmes commandes.

Prenez donc le temps d'approfondir vos connaissances avec les liens ci-dessus, ce temps investis vous en fera gagner bien plus et je peux vous assurer que vous ne le regretterez pas :-)

