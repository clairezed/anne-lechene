---
layout: page
title: Commander
permalink: /commander
---

<form name="commande" method="POST" netlify>
  <div class="field">
    <label class="label">Name :</label>
    <div class="control">
     <input class="input" type="text" name="name" />
    </div>
  </div>
  <div class="field">
    <label class="label">Email :</label>
    <div class="control">
     <input class="input" type="text" name="email" />
    </div>
  </div>
  {% for item in site.data.menu %}
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ item.title }} :</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
          <input class="input" type="number" name="{{ item.id }}" />
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
  <div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>

</form>
