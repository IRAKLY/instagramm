var clientId="ab0442106bae4e1db8375dc711ee4f6c",clientSecret="0b71c74e221b498d9c060455ee12d191";$().ready(function(){function a(a){var e='<a class="fancybox-thumbs" data-fancybox-group="thumb" href='+a+'><div class="content-wrapper-gallery__photo"><img class="draper" src='+a+"></div></a>";$(".content-wrapper-gallery").append(e)}function e(e){for(var c=0;c<e.length;c++)a(e[c])}function c(){$(".container_popup").hide()}c(),$(".content-wrapper-form-search__search").keydown(function(e){if(13==e.keyCode){var c=$(".content-wrapper-form-search__search").val(),n="60";$.getJSON("https://api.instagram.com/v1/tags/"+c+"/media/recent?callback=?&count="+n+"&access_token=16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",function(e){var c=e.data;$.each(c,function(e,c){a(c.images.low_resolution.url)})})}}),$(".content-wrapper-form-upload__upload").click(function(){e(url)})});