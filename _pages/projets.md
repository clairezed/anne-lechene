---
layout: articles
title: Projets
subtitle: Sélection de projets
permalink: /projets
---

<section class="box special features projects-box">
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