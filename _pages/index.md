---
layout: default
title: Accueil
permalink: /
---


<section id="banner">
  <h2>Anne Lechêne</h2>
  <p>Vers des organisations vivantes et apprenantes</p>
  <!-- <ul class="actions special">
      <li><a href="#" class="button primary">Sign Up</a></li>
      <li><a href="#" class="button">Learn More</a></li>
  </ul> -->
</section>

<!-- Main -->
<section id="main" class="container">
  <section class="box special">
    <header class="major">
      <h2>Apprendre et faire ensemble</h2>
      <p>De petites expériences irréversibles de collaboration pour transformer nos cultures professionnelles.</p>
    </header>
    <span class="image featured">
    {% asset pic01.jpg alt='coffee alt' %}
    </span>
  </section>

  <section class="box">
    <header>
      <h2 id="demarche">Démarche</h2>
      <p>Des organisations apprenantes dans un monde complexe</p>
    </header>
    <p>Nos organisations sont immergées dans des environnements instables et complexes, et composent avec de multiples parties prenantes. Héritant d’architectures “fonctionnelles” en silo pour “fonctionner”, elles sont arrivées au bout d’une logique managériale mécaniste visant au contrôle, héritée elle aussi de l’ère industrielle.</p>

    <p>Il est temps d’arrêter de faire toujours plus de la même chose - qui donnera toujours plus du même résultat.</p>

    <p>Aujourd’hui, des organisations se réinventent  en s’ouvrant sur leur territoire, leur écosystème, en accueillant la diversité des parties prenantes et en reliant entre elles les capacités de co-création, de co-construction et d’action de leurs membres. Elles créent les nouvelles connaissances et les nouvelles pratiques dont elles ont besoin en s’engageant dans des démarches d’organisations apprenantes reposant sur la confiance, la coopération, une logique d’émergence et une vision partagée d’un bien commun.</p>
</section>

  {% include box.html data=site.data.savoir_faire.first %}
<!-- <section class="box">
  <header>
    <h2>Savoir-faire</h2>
    <p>J’accompagne des démarches d’organisations apprenantes</p>
  </header>
  <p>Concrètement, je mets à disposition un ensemble de savoir-faire que j’ai développés en travaillant dans trois écosystèmes professionnels innovants :  l’ingénierie pédagogique, les processus d’intelligence collective et de gouvernance partagée, les outils numériques collaboratifs. </p>

  <p>Parmi les savoir-faire que je suis capable de partager :</p>

  <ul>
    <li>Créer des espaces et des temps apprenants coopératifs</li>
    <li>Élaborer une démarche pédagogique multi-parties prenantes</li>
    <li>Dessiner des services numériques soutenants</li>
    <li>Faciliter des processus d’intelligence collective</li>
    <li>Soutenir la capitalisation des connaissances créées</li>
    <li>Comprendre et m’intégrer dans un projet complexe</li>
    <li>Intégrer une ingénierie d’innovation nationale ou européenne</li>
    <li>Mettre en place une recherche-action reliant praticiens et chercheurs</li>
  </ul>

  <p>Au gré des projets, je fais volontiers alliance pour réunir les savoir-faire dont vous avez besoin, et poursuivre ma propre démarche d’apprentissage permanent.</p>
</section> -->




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

{% include box.html data=site.data.parcours.first %}


<!-- CTA -->
<!-- <section id="cta">
  <h2>Sign up for beta access</h2>
  <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc.</p>
  <form>
    <div class="row gtr-50 gtr-uniform">
      <div class="col-8 col-12-mobilep">
          <input type="email" name="email" id="email" placeholder="Email Address" />
      </div>
      <div class="col-4 col-12-mobilep">
          <input type="submit" value="Sign Up" class="fit" />
      </div>
    </div>
  </form>

</section> -->

<!-- {% asset fanions.jpg @magick:2x @magick:quality=50 magick:resize="300" alt='This is my alt' %}
{% asset fanions.jpg @magick:2x magick:crop="200x300+0+0" magick:gravity="center"  alt='This is my alt' %}
{% asset fanions.jpg @magick:2x magick:crop="200x300+0+0" magick:gravity="center" magick:compress="jpeg" magick:quality="80"  alt='This is my alt' %}
<br>


{% asset coffee01.jpg alt='coffee alt'
    srcset:width="800"
    srcset:width="600"
    srcset:width="400"
      %} -->
