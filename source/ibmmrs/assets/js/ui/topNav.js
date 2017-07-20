(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.TopNav = function() {


        this.nav = $(".ibm-sitenav-menu-list>ul>li");
        this.body = $("body");
        this.init();
    };

    IBM.mrs.TopNav.prototype = {
        init: function() {
            var self = this;
            $("a", this.nav).click(function(event) {
                if(!$(this).attr("target")){
                    event.preventDefault();
                    self.body.trigger(IBM.mrs.CONSTANTS.TOP_NAV_CLICK, {"id": $(this).data("id"), "tab": $(this).data("tab")});
                }
            });
        },

        showNav: function(isShow){

            if(isShow){
                this.nav.show();
            }else{
                this.nav.hide();
            }
            
        },

        swapActive: function(index){
            $(this.nav).removeClass('active');
            $($("a", this.nav)[index]).parent().addClass('active');

        }

    };
}(jQuery));
