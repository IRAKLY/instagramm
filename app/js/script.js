var clientId="ab0442106bae4e1db8375dc711ee4f6c";
    var clientSecret="0b71c74e221b498d9c060455ee12d191";
    $().ready(function () {
        popUpHide();
        $(".content-wrapper-form-search__search").keydown(function (event) {
            if (event.keyCode == 13) {
                var tag = $(".content-wrapper-form-search__search").val();
                var count = "60";
                $.getJSON('https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count + '&access_token=16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587', function (json) {
                    var arrayImages = json.data;
                    $.each(arrayImages, function (i, item) {
                        addPic(item.images.low_resolution.url);
                    });
                });
            }
        });

        $(".content-wrapper-form-upload__upload").click(function () {
            loadImg(url);
        });
        function addPic(url) {
            var template ='<a href=' + url + ' title="The Cleaner">'+
								'<div class="content-wrapper-gallery__photo">' + 
									'<img class="draper" src=' + url + '>'+
								'</div>'+
							'</a>';
            $('.popup-gallery').append(template);
        }

        function loadImg(url) {
            for (var i = 0; i < url.length; i++) {
                addPic(url[i]);
            }
        }
        function popUpShow(){
            $(".container_popup").show();
        }
        function popUpHide(){
            $(".container_popup").hide();
        }
    });

