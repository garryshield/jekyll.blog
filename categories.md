---
layout: page
title: Categories
---

<header class="header mb-5">
<div class="container">
<div class="row justify-content-center">
  <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

      {% include nav.md %}

      <div class="info info-class">
        <h1>CATEGORIES</h1>
        <p class="lead">分类</p>
        <div>
        <dl class="tags">
        {% include _categories.md %}
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
    {% for categoy in site.categories %}
      <div class="mb-4">
        {% capture categoy_name %}{{ categoy | first }}{% endcapture %}
        <div id="#{{ categoy_name | slugize }}"></div>
        
        <a name="{{ categoy_name | slugize }}"></a>
        <h4>{{ categoy_name }}</h4>
        <ul>
        {% for post in site.categories[categoy_name] %}
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
    {% include tags.md %}
    {% include archives.md %}
  </div>
</div>
<div>