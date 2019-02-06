---
layout: articles
title: Articles
subtitle: Sélection d'articles dont je suis l'auteur
permalink: /articles
---

<div class="row">
  {% assign articles = site.articles | sort: "order"%}
  {% for article in articles %}
    {% include box-article.html data=article %}
  {% endfor %}
</div>