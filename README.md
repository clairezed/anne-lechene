# Jekyll starter

## How to use

La config globale, commune à tous les environnements de développement, se trouve dans `_config.yml`. C'est la config qui est utilisée automatiquement par les pages github en production, on y trouve donc aussi les éléments de configuration propres à la production.

Dans `_config.dev.yml` ne figurent **que** les éléments spécifiques au développement local. Ainsi, en lançant la commande ci-dessous, c'est comme lancer le fichier `_config.yml`, mais avec les éléments spécifiques de `_config.dev.yml`.

Lancer le serveur :
```bash
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```
Votre site est visible sur [localhost:4000](localhost:4000)

## Les spécificités

- Un dossier pour les pages, que je n'aime pas voir traîner (`_pages`). Du coup, ne pas oublier de mettre le permalink dans le frontmatter.
- un fichier de `_config` par environnement
