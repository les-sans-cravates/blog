---
layout: post
date:   2017-07-21
title:  React avec Cordova pour iOS - Créer la base d'un projet
avatar: lionel_jamal
author: Lionel JAMAL
img:    react_avec_cordova_pour_ios_creer_la_base_de_votre_projet
---

J'ai eu besoin d'avoir pour mes projets un _starter kit_ avec React et Cordova. Après un peu de recherches, et n'ayant rien trouvé de satisfaisant j'ai eu envie de créer le mien.

Je vais donc écrire le fruit de mes recherches :)

## Cordova

La première chose à faire est d'initialiser un nouveau projet avec Cordova.

Si Cordova n'est pas installé sur votre machine, dans votre terminal entrez la commande suivante :

```code
$ yarn global add cordova
```

Ensuite, placez-vous à l'endroit où vous voulez créer votre projet et lancez la commande suivante :

```code
$ cordova create myApp
```

## Webpack

Toujours dans le terminal, déplacez-vous dans le dossier précédemment créé et ajoutez _webpack_ et _webpack-dev-server_ au projet.

```code
$ cd myApp
$ yarn add --dev webpack webpack-dev-server
```

Ensuite, vider le dossier _www_ et créez un dossier _src_ à l'intérieur

```code
$ rm -r www/*
```

Maintenant on va vérifier que tout fonctionne à cette étape.

Créez un fichier _index.js_ dans le dossier _www_ avec le contenu suivant :

```js
function component() {
  var element = document.createElement('p');

  element.innerHTML = 'Hello world!';

  return element;
}

document.body.appendChild(component());
```

Créez un fichier _index.html_ dans le dossier _www_ et copier le code suivant :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Getting Started</title>
</head>
<body>
  <script src="./bundle.js"></script>
</body>
</html>
```

Créez un fichier _webpack.config.js_ à la racine du projet et copiez-y le code suivant :

```js
module.exports = {
  entry: "./www/index.js",
  output: {
    filename: "./www/bundle.js"
  }
}
```

À ce stade votre arborescence devrait ressembler à ça :

```code
MyApp
├── config.xml
├── hooks
├── node_modules
├── package.json
├── platforms
├── plugins
├── res
├── webpack.config.js
├── www
│   ├── index.html
│   └── index.js
└── yarn.lock
```

Lancer la commande ```yarn webpack-dev-server```, vous verrez une ligne ressemblant à ça :

```code
Project is running at http://localhost:8080/
```

Ouvrez l'url (_http://localhost:…_) dans votre navigateur, cliquez sur le dossier _www_, vous devriez voir une page blanche avec la phrase _Hello world!_

Si ce n'est pas le cas, reprenez les étapes une à une. Pour ceux chez qui tout fonctionne parfaitement bien, on va maintenant s'occuper de la partie pour _iOS_.

## Compiler pour iOS

Cela va sans dire, il vous faut une machine de la marque Apple pour continuer, car nous avons besoin de _Xcode_.

La première étape va être d'ajouter la _platform_ iOS à votre projet. Lancez la commande suivante à la racine du projet :

```code
$ cordova platform add ios
```

On va essayer de builder avec la commande :
```code
$ yarn webpack --config webpack.config.js && cordova run ios
```

### Les erreurs que vous pouvez avoir à cette étape

Si jamais vous avez l'erreur  _error Command "webpack" not found._ à cette étape, refaite un ```yarn install```, je ne sais pas pourquoi, mais le fait d'ajouter une plateforme (ici iOS) au projet, fait que yarn ne trouve plus la commande _webpack_.

Si après le build vous avez l'erreur suivante : _Error: Cannot read property 'replace' of undefined_, exécutez la commande :

```code
 $ cd platforms/ios/cordova && npm i ios-sim
```

Si jamais vous avez l'erreur _Error: xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance_ vous pouvez la corriger avec la commande :

```code
$ sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### Comment savoir si ça fonctionne ?

Chez moi, à la fin du build, le simulateur d'un iPhone SE s'est lancé et l'application a été installé dessus, j'espère que vous aurez le même résultat 😅.

## React

Tout d'abord, ajoutons React a notre projet :

```code
$ yarn add react react-dom
```

Maintenant, à la racine du projet, créer un dossier _src_.

Dans le dossier _src_, créer un fichier _main.js_.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Un fichier _index.html_.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Getting Started</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

Un dossier _components_ et à l'intérieur un fichier _App.js_.

```js
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1>Hello World!!</h1>
      </div>);
  }
}
```

Créez un fichier _.babelrc_ à la racine du projet avec à l'intérieur :

```js
{
  "presets":[
    "es2015", "react"
  ]
}
```

Là je vais vous éviter de taper quelques commandes, remplacez le contenu du fichier _package.json_ par celui-ci :

```json
{
    "name": "helloworld",
    "displayName": "HelloCordova",
    "version": "1.0.0",
    "description": "A sample Apache Cordova application that responds to the deviceready event.",
    "main": "index.js",
    "scripts": {
        "ios": "rm -rf www && webpack --config webpack.config.js && cordova run ios",
        "start": "webpack-dev-server"
    },
    "author": "Apache Cordova Team",
    "license": "Apache-2.0",
    "devDependencies": {
        "path": "^0.12.7",
        "babel-core": "^6.25.0",
        "babel-loader": "^7.1.1",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "babel-preset-env": "^1.5.2",
        "webpack": "^3.0.0",
        "webpack-dev-server": "^2.5.0",
        "html-webpack-plugin": "^2.29.0"
    },
    "dependencies": {
        "cordova-ios": "^4.4.0",
        "cordova-plugin-whitelist": "^1.3.2",
        "react": "^15.6.1",
        "react-dom": "^15.6.1"
    },
    "cordova": {
        "plugins": {
            "cordova-plugin-whitelist": {}
        },
        "platforms": [
            "ios"
        ]
    }
}
```

Même chose pour le fichier _webpack.config.js_ :

```js
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: [__dirname + '/src/main.js'],
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve(__dirname, "src")
            ],
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            loader: 'babel-loader'
          }
      ]
    },
    devtool: "source-map",
    context: __dirname,
    plugins: [
      HTMLWebpackPluginConfig
    ],
};
```

Votre arborescence devrait ressembler à ça :

```code
myApp
├── .babelrc
├── .npmignore
├── config.xml
├── hooks
├── node_modules
├── package-lock.json
├── package.json
├── platforms
├── plugins
├── res
├── src
│   ├── components
│   │   └── App.js
│   ├── index.html
│   └── main.js
├── webpack.config.js
├── www
└── yarn.lock
```

Plus qu'un petit ```yarn install``` et vous êtes paré.

Si vous regardez dans le fichier _package.json_, je vous ai préparé les commandes suivantes :

* start : pour lancer la version web
* ios : pour compiler dans votre simulateur iOS

À noter que quand vous exécutez la version web, vous disposez d'un livereload grâce à Webpack :)

## Le petit mot de la fin

La première partie de l'article a servi à poser les bases et peut-être cela vous aidera à créer le point de départ pour vos projets hybrides avec Cordova et React.

Personnellement, ça m'a aidé et je voulais partager ce que j'ai appris. J'écrirai sûrement un autre article où je montrerai comment builder sur votre téléphone avec Xcode et sur émulateur Android (eh oui je ne l'oublie pas).
