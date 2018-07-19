<div class="gallery">
<div class="row gutters-5px justify-content-center">
    {% for item in include.gallery.items %}
    <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
    <a href="{{ item.src }}" data-fancybox="{{ include.gallery.group }}" data-caption="{{ item.caption }}">
    <img class="img-fluid" src="//images.weserv.nl/?url={{ item.src | replace: 'http://','' | replace: 'https://','' }}&w=300&h=300&output=jpg&q=50&t=square" />
    </a>
    </div>
    {% endfor %}
</div>
</div>