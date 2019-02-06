---
layout: default
title: Accueil
permalink: /
---


<section id="banner">
  <h2>Anne Lechêne</h2>
  <p>Vers des organisations vivantes et apprenantes</p>
</section>

<!-- Main -->
<section id="main" class="container">
  <!-- En-tête -->
  <section class="box special">
    <header class="major">
      <h2>Apprendre et faire ensemble</h2>
      <p>De petites expériences irréversibles de collaboration pour transformer nos cultures professionnelles.</p>
    </header>
    <span class="image featured">
    {% asset pic01.jpg alt='coffee alt' %}
    </span>
  </section>


  <!-- Section démarche -->
  {% include box_page.html permalink="/demarche" %}

  <!-- Section savoir-faire -->
  {% include box_page.html permalink="/savoir-faire" %}

  <!-- Section projets -->
  <section class="box special features projects-box">
    <h2>Projets</h2>
  {% assign projects = site.projects | sort: "order"%}
  {% assign projects_count = projects | size %}
  {% assign projects_count_modulo = projects_count | modulo: 2 %}
  {% assign rows_count = projects_count | divided_by: 2 | minus: 1 | plus: projects_count_modulo %}
  {% for num in (0..rows_count) %}
    <div class="features-row">
    {% assign row = num | times: 2 %}
    {% assign row_projects = projects | slice: row, 2 %}
    {% for project in row_projects %}
      {% include feature-section.html project=project %}
    {% endfor %}
    </div>
  {% endfor %}
  </section>

  <!-- Section articles -->
  <h2>Articles</h2>
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

<!-- Section parcours -->
{% include box_page.html permalink="/parcours" %}



</section>