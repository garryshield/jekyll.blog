{% assign years = '' | split: ',' %}

{% for post in site.posts %}
    {% assign currentDate = post.date | date: "%Y" %}
    {% assign years = years | push: currentDate | uniq %}
{% endfor %}

{% for year in years %}
  <dd><a href="{{ site.baseurl }}/archives/#{{ year }}">{{ year }}</a></dd>
{% endfor %}