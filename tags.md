---
layout: page
title: Tags
---

<header class="header mb-5">
<div class="container">
<div class="row justify-content-center">
  <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

      {% include nav.md %}

      <div class="info info-class">
        <h1>TAGS</h1>
        <p class="lead">标签</p>
        <div>
          <dl class="tags">
          {% include _tags.md %}
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
      {% for tag in site.tags %}
        <div class="mb-4">
          {% capture tag_name %}{{ tag | first }}{% endcapture %}
          <div id="#{{ tag_name | slugize }}"></div>
          
          <a name="{{ tag_name | slugize }}"></a>
          <h4>{{ tag_name }}</h4>
          <ul>
          {% for post in site.tags[tag_name] %}
          <li>
            <p><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><small class="italic text-secondary ml-2">{{ post.date | date: '%F' }}</small></p>
          </li>
          {% endfor %}
          </ul>
        </div>
      {% endfor %}
      </div>

  </div>

  <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
    {% include categories.md %}
    {% include archives.md %}
  </div>
</div>
<div>