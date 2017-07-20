(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.ResourcePage = function(data) {

        this.data = data;
        // this.init(data);
    };

    IBM.mrs.ResourcePage.prototype = {
        init: function() {
            this.resources = $("#ibm-content-main .best-practices");
            console.log(this.resources)
            var template = IBM.mrs.Utils.createTemplate(this.data.template, this.data);
            this.resources.append(template);
            this.activateBtns();
        },
        activateBtns: function() {
            var modules = $(".res-module", this.resources);
            console.log(modules)
            var topMenu = $("#test1 ul"),
                enclosingDivs = $("#test1 .ibm-col-6-4").children(),
                topMenuHeight = topMenu.outerHeight()+60,
                // All list items
                menuItems = topMenu.find("a");
                $(menuItems[0]).addClass('active');

            $(".button_scroll", this.resources).click(function(event) {
                event.preventDefault();
                var id = $(this).data("id");

                var div = $(modules[id]);

                $("html, body").animate({
                    scrollTop: div.offset().top - ((id == "0") ? 120 : 60)
                }, 500);
            });

            //Robbie see if you can optimize this :)

            $(window).scroll(function(){
                var fromTop = $(this).scrollTop()+topMenuHeight;

                enclosingDivs.map(function(){
                    var divId = $(this).attr("data-id");
                    var top = $(this).offset().top;
                    var height = $(this).outerHeight();
                    if((top < fromTop) && ((top + height) > fromTop)){
                        menuItems.map(function(){
                            var dId = $(this).attr("data-id");
                            $(this).removeClass("active");
                            if(divId === dId ){
                                $(this).addClass("active");
                            }
                        });
                    }
                });  
            
            });
        }
    };
}(jQuery));
