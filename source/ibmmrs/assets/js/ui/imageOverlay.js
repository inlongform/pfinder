(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.ImageOverlay = function(data) {
        this.init(data);
    };

    IBM.mrs.ImageOverlay.prototype = {
        init: function(data) {
            var self = this;
            this.body = $("body")
            $.each(data.alt_images, function(index, val) {
                data.alt_images[index] = IBM.mrs.BASE_LIB_IMG_PATH + val;               
            });

            var template = IBM.mrs.Utils.createTemplate(data.template, data);
            $("body").append(template);

            $("#image-overlay").overlay();
            var wrapper = $("#image-overlay");
            var links = $("a", wrapper);
            var selected = "";            
            
            links.click(function(event) {
                event.preventDefault();
                links.removeClass('active');
                $(this).addClass('active');
                selected = $(this).attr("href");
            });

            $(".ibm-btn-pri", wrapper).click(function(event){
                event.preventDefault();
                //defined in customize.js
                self.body.trigger(IBM.mrs.CONSTANTS.IMAGE_SELECT, {"selected": selected});

            });

            this.body.bind(IBM.mrs.CONSTANTS.IMAGE_RESET, function(event) {
               links.removeClass('active');
               selected = "";
            });          
            this.body.bind(IBM.mrs.CONSTANTS.IMAGE_PRESET, function(event,result) {
               links.removeClass('active');
               if(result.selected){
                   for(var x =0; x< links.length; x++){
                        if(result.selected.substring(result.selected.lastIndexOf("/")) == $(links[x]).attr("href").substring($(links[x]).attr("href").lastIndexOf("/"))){
                            $(links[x]).addClass('active'); 
                            selected =    $(links[x]).attr("href");
                        }
                   }                
               }
            });
        }
    };

}(jQuery));
