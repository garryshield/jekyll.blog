{% for tag in site.tags %}
  {% capture tag_name %}{{ tag | first }}{% endcapture %}
  <dd><a href="{{ site.baseurl }}/tags/#{{ tag_name }}">{{ tag_name }}</a></dd>
{% endfor %}