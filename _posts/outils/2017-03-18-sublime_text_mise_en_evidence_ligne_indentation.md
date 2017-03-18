---
layout: post
date:   2017-03-18
title:  Sublime Text - Mise en évidence de la ligne d'indentation
categories: outils
avatar : lionel_jamal
img : sublime_text_mise_en_evidence_ligne_indentation
---

J'aime vraiment mon métier de développeur, car on en apprend tous les jours. J'utilise Sublime Text depuis à peu près 5 ans maintenant et hier j'ai découvert un nouveau réglage qui m'a plu.

Ce réglage sert à mettre en surbrillance la ligne d'indentation de votre code quand vous êtes à l'intérieur d'un bloc.

Un exemple en image :

![Apperçu de l'effet dans une capture d'écran de sublime text](/img/articles/sublime_text_mise_en_evidence_ligne_indentation.jpg)

Nous avons ici un code relativement simple, mais d'un coup d'oeil nous voyons dans quel bloc nous sommes, imaginez ça dans du code plus complexe (comme dans la vraie vie ^^).

Pour l'activer, copier le code suivant dans vos préférences utilisateurs (<code class="text">Preferences → Settings - User</code>) :

<pre><code class="language-json">"indent_guide_options":
[
  "draw_normal",
  "draw_active"
],
</code></pre>

Testez-le au moins sur une demi-journée pour voir si ça vous plaît.


Ce n'est pas parce qu'on utilise un outil depuis longtemps avec nos réglages habituels qu'il n'y en a pas d'autres qui pourraient nous plaire et que l'on ne connaît pas car soit on ne les a jamais testés, soit notre outil a évolué et il propose de nouvelles choses.

Restez curieux !
