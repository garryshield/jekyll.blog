---
layout: page
title: Archives
---

<header class="header mb-5">
<div class="container">
<div class="row justify-content-center">
  <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

      {% include nav.md %}

      <div class="info info-class">
        <h1>ARCHIVES</h1>
        <p class="lead">归档</p>
        <div>
        <dl class="tags">
        {% include _archives.md %}
        </dl>
        </div>
      </div>
  </div>
</div>
</div>
</header>


<div class="container">
<div class="row justify-content-center">
  <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">

    <div>
    {% for post in site.posts %}
        {% assign currentDate = post.date | date: "%Y" %}
        {% if currentDate != date %}
            {% unless forloop.first %}
            </ul>
            </div>
            {% endunless %}
            <div class="mb-4">

            <a name="{{ currentDate | slugize }}"></a>
            <h4>{{ currentDate }}</h4>

            <ul>
            {% assign date = currentDate %}
        {% endif %}
        <li>
          <p><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><small class="italic text-secondary ml-2">{{ post.date | date: '%F' }}</small></p>
        </li>
        {% if forloop.last %}
        </ul>
        </div>
        {% endif %}
    {% endfor %}
    </div>

  </div>

  <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
    {% include tags.md %}
    {% include categories.md %}
  </div>
</div>
<div>