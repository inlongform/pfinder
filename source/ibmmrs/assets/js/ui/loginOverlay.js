(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.LoginOverlay = function(data) {


        this.init(data);
    };

    IBM.mrs.LoginOverlay.prototype = {
        init: function(data) {
            var self = this;
            this.data = data;
            this.isInit = false;

        },

        insertOverlay: function(){
            var template = IBM.mrs.Utils.createTemplate(this.data.template, this.data);
            $("body").append(template);

            //init
            $("#re-login").overlay();
            var wrapper = $("#re-login");
            var btn = $(".ibm-btn-pri", wrapper);
            var newBtn = new IBM.mrs.Btn(btn, null, wrapper, true);

            this.isInit = true;

        },

        hasInserted: function(){
            return this.isInit;
        }


    };
}(jQuery));
