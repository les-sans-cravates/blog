---
layout: post
date:   2017-03-19
title: Le serveur le plus rapide de l'ouest !
categories: outils
avatar : erwan_leblanc
img : le_server_le_plus_rapide_de_l_ouest
---

Salut à toi visiteur !
Aujourd'hui je souhaite te partager un petit outil permettant de faire tourner un site statique en moins de temps qu'il n'en faut pour lire cet article :)

Il existe un certain nombre de logiciel permettant d'émuler votre site mais peu d'entre eux sont simple à paramétrer. Si comme moi, tu t'es arraché les cheveux à chaque réinstallation d'apache - ou d'un autre serveur web - en te demandant "mais qu'est ce que j'ai oublié de faire ??" alors que tu voulais simplement tester un site statique "rapidement" ce qui suit devrait te plaire.

Charlie Robbins est assez actif dans la communauté JavaScript et nous a notamment offert le module dont je veux vous parler : **http-server**

Pour ceux qui souhaite parcourir ses autres réalisations suivez le [guide officiel](https://www.npmjs.com/~indexzero).



#### Comment on l'installe ?

```bash
npm install http-server -g
```

Pour d'autres façon de l'installer je te laisse te référer à la [documentation](https://github.com/indexzero/http-server)



#### Comment ça fonctionne ?

Vas dans le dossier dans lequel ce trouve ton site statique

Tapes la commande : `http-server`    (ou son raccourcie : `hs` )

Et voilà, l'adresse à laquelle ton site est accessible localement s'affiche dans la console
![Apperçu de l'exécution du lancement du serveur](/img/articles/le_server_le_plus_rapide_de_l_ouest.png)

Rapide non ?

En prime, dans la console, ce module nous indique certaines informations comme la liste des fichiers appelés, le client qui à fait la demande, le navigateur etcetera.

Des petites options sympa sont évidemment accessible en tapant `hs -h`

Vous pourrez, par exemple :


* Changer l'ip et le port ce qui permettra de lancer plusieurs serveur simultanément.
* Activer le protocole https
* Empêcher les robots de parcourir votre site


Chercher les bons outils, tester les nouveautés est important dans notre secteur, et surtout, entre nous... c'est tellement plus sympa d'apprendre de nouvelles choses régulièrement :)

Restez curieux !
