---
layout: page
title: Commander
permalink: /commander
---

<form name="commande" method="POST" netlify>
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
   {% for item in site.data.menu %}
    <p>
      <label>{{ item.title }} <input type="number" name="{{ item.id }}" /></label>
    </p>
    {% endfor %}

  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
