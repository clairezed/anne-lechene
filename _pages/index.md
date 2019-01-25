---
layout: default
title: Accueil
permalink: /
---


<section id="banner">
    <h2>Anne Lechêne</h2>
    <p>Another fine responsive site template freebie by HTML5 UP.</p>
    <ul class="actions special">
        <li><a href="#" class="button primary">Sign Up</a></li>
        <li><a href="#" class="button">Learn More</a></li>
    </ul>
</section>

<!-- Main -->
<section id="main" class="container">
    <section class="box special">
        <header class="major">
            <h2>Introducing the ultimate mobile app
            <br />
            for doing stuff with your phone</h2>
            <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
            adipiscing nunc adipiscing. Condimentum turpis massa.</p>
        </header>
        <span class="image featured">
        {% asset pic01.jpg alt='coffee alt' %}
        </span>
    </section>
    <section class="box special features">
        <div class="features-row">
            <section>
                <span class="icon major fa-bolt accent2"></span>
                <h3>Magna etiam</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
            <section>
                <span class="icon major fa-area-chart accent3"></span>
                <h3>Ipsum dolor</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
        </div>
        <div class="features-row">
            <section>
                <span class="icon major fa-cloud accent4"></span>
                <h3>Sed feugiat</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
            <section>
                <span class="icon major fa-lock accent5"></span>
                <h3>Enim phasellus</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
        </div>
    </section>
    <div class="row">
        <div class="col-6 col-12-narrower">
            <section class="box special">
                <span class="image featured">{% asset pic02.jpg alt='coffee alt' %}</span>
                <h3>Sed lorem adipiscing</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                <ul class="actions special">
                    <li><a href="#" class="button alt">Learn More</a></li>
                </ul>
            </section>
        </div>
        <div class="col-6 col-12-narrower">
            <section class="box special">
                <span class="image featured">{% asset pic03.jpg alt='coffee alt' %}</span>
                <h3>Accumsan integer</h3>
                <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
                <ul class="actions special">
                    <li><a href="#" class="button alt">Learn More</a></li>
                </ul>
            </section>
        </div>
    </div>

</section>

<!-- CTA -->
<section id="cta">
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

</section>

<!-- {% asset fanions.jpg @magick:2x @magick:quality=50 magick:resize="300" alt='This is my alt' %}
{% asset fanions.jpg @magick:2x magick:crop="200x300+0+0" magick:gravity="center"  alt='This is my alt' %}
{% asset fanions.jpg @magick:2x magick:crop="200x300+0+0" magick:gravity="center" magick:compress="jpeg" magick:quality="80"  alt='This is my alt' %}
<br>


{% asset coffee01.jpg alt='coffee alt'
    srcset:width="800" 
    srcset:width="600"
    srcset:width="400"
      %} -->
