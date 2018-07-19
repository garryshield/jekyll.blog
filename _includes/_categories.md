{% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  <dd><a href="{{ site.baseurl }}/categories/#{{ category_name }}">{{ category_name }}</a></dd>
{% endfor %}