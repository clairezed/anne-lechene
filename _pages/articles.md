---
layout: articles
title: Articles
subtitle: Sélection d'articles dont je suis l'auteur
permalink: /articles
---

<div class="row">
  {% assign articles = site.articles | sort: "order"%}
  {% for article in articles %}
    <div class="col-6 col-12-narrower">
      <section class="box special">
        <span class="image featured">{% asset pic02.jpg alt='coffee alt' %}</span>
        <h3>{{ article.title }}</h3>
        <p>{{ article.excerpt }}</p>
        <ul class="actions special">
          <li><a href="{{article.url}}" class="button alt">Lire plus</a></li>
        </ul>
      </section>
    </div>
  {% endfor %}
</div>