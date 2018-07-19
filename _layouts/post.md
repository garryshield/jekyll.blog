---
layout: layout
---

<header class="header mb-5">
<div class="container">
<div class="row justify-content-center">
  <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

      {% include nav.md %}

      <div class="info info-post">
          <h1>{{ page.title }}</h1>

          {% if page.subtitle %}
          <p class="lead">{{ page.subtitle }}</p>
          {% else %}
          <p class="lead">{{ page.title }}</p>
          {% endif %}
          
          {% if page.tags != empty %}
          <div class="post-tags">
          <dl class="tags">
              <dt>Tags:</dt>
              {% for tag in page.tags %}
              <dd><a href="{{ site.baseurl }}/tags/#{{ tag }}">{{ tag }}</a></dd>
              {% endfor %}
          </dl>
          </div>
          {% endif %}

          {% if page.categories != empty %}
          <div class="post-categories">
          <dl class="tags">
              <dt>Categories:</dt>
              {% for category in page.categories %}
              <dd><a href="{{ site.baseurl }}/categories/#{{ category }}">{{ category }}</a></dd>
              {% endfor %}
          </dl>
          </div>
          {% endif %}

          <div class="post-date">
            By {{ site.title }}, Created at {{ page.date | date: '%F' }}
          </div>
      </div>
  </div>
</div>
</div>
</header>

<div class="container">
<div class="row justify-content-center">
  <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">

      <article class="article mb-5">
        <section>
        {{ content }}
        </section>
      </article>

      <div class="clearfix mb-4">
          {% if page.previous %}
          <a class="float-left" href="{{ site.baseurl }}{{ page.previous.url }}" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ page.previous.title }}</a>
          {% endif %}

          {% if page.next %}
          <a class="float-right" href="{{ site.baseurl }}{{ page.next.url }}" tabindex="-1">{{ page.next.title }} <i class="fas fa-chevron-right"></i></a>
          {% endif %}
      </div>

  </div>
  
  <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
    {% include tags.md %}
    {% include categories.md %}
    {% include archives.md %}
  </div>
</div>
</div>

{% include footer.md %}