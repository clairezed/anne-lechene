---
layout: home
title: Accueil
permalink: /
---

{% asset fanions.jpg @magick:2x @magick:quality=50 magick:resize="300" alt='This is my alt' %}
{% asset fanions.jpg @magick:2x magick:crop="200x300+0+0" magick:gravity="center"  alt='This is my alt' %}
{% asset fanions.jpg @magick:2x magick:crop="200x300+0+0" magick:gravity="center" magick:compress="jpeg" magick:quality="80"  alt='This is my alt' %}
<br>

<!-- {% asset coffee01.jpg
    srcset:width="800 2x"
    srcset:width="600 1.5x"
    srcset:width="400 1x"
      %}


{% asset coffee01.jpg @pic
    srcset:min-width="800" size="800" format="image/webp"
    srcset:min-width="300" size="300"
%} -->

{% asset coffee01.jpg alt='coffee alt'
    srcset:width="800" 
    srcset:width="600"
    srcset:width="400"
      %}
<!-- 
{% asset coffee01.jpg
    srcset:magick:resize=800 sizes="(min-width:800px), 800px, 100vw" id=1
    srcset:magick:resize=600 sizes="(min-width:600px), 600px, 100vw" id=2
    srcset:magick:resize=400 sizes="(min-width:400px), 400px, 100vw" id=3
      %} -->