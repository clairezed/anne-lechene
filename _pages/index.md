---
layout: default
title: Accueil
permalink: /
background_overlay: overlay.png
---



<section id="banner" style='background-image: url({% asset "{{ page.background_overlay }}" @path %}), url({% asset "{{ site.data.configuration.home_background_picture }}" @path %});'>

  <h2>Anne Lechêne</h2>
  <p>Apprendre et faire ensemble</p>
</section>

<!-- Main -->
<section id="main" class="container">
  <!-- En-tête -->
  <section class="box special">
    <header class="major">
      <h2>Vers des organisations vivantes et apprenantes</h2>
      <p>S’inspirer du vivant pour co-construire des connaissances et des pratiques coopératives dans nos territoires et nos écosystèmes</p>
    </header>
    <span class="image featured">
    {% asset Nid_et_dome_1200x393.jpg alt='coffee alt' %}
    </span>
  </section>


  <!-- Section démarche -->
  {% include box-page.html permalink="/demarche" %}

  <!-- Section savoir-faire -->
  {% include box-page.html permalink="/savoir-faire" %}

  <!-- Section projets -->
  <section class="box special features projects-box">
    <h2>Projets</h2>
  {% assign projects = site.projects | sort: "order"%}
  {% assign projects_count = 4 %}
  {% assign projects_count_modulo = projects_count | modulo: 2 %}
  {% assign rows_count = projects_count | divided_by: 2 | minus: 1 | plus: projects_count_modulo %}
  {% for num in (0..rows_count) %}
    <div class="features-row">
    {% assign row = num | times: 2 %}
    {% assign row_projects = projects | slice: row, 2 %}
    {% for project in row_projects limit: 4 %}
      {% include feature-section.html project=project %}
    {% endfor %}
    </div>
  {% endfor %}
  </section>

  <ul class="actions special">
    <li><a href="{{ "/projets" | relative_url }}" class="button">Voir tous les projets</a></li>
  </ul>

  <!-- Section articles -->
  <h2 class="ml-1">Articles</h2>
  <div class="row">
    {% assign articles = site.articles | sort: "order"%}
    {% for article in articles limit: 4 %}
      {% include box-article.html data=article %}
    {% endfor %}
  </div>

  <ul class="actions special">
    <li><a href="{{ "/articles" | relative_url }}" class="button">Voir tous les articles</a></li>
  </ul>

<!-- Section parcours -->
{% include box-page.html permalink="/parcours" %}



</section>