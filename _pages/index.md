---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Accueil
permalink: /
---

{% asset fanions.jpg @magick:2x @magick:quality=50 magick:resize="200"  alt='This is my alt' %}
<br>

{% asset coffee01.jpg @pic
    srcset:min-width="650" size="610" format="image/webp"
    srcset:min-width="200" size="200"
%}