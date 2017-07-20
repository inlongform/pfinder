(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Input = function(field, data, page, index) {

        this.body = $("body");



        this.init(field, data, page, index);
    };

    IBM.mrs.Input.prototype = {
        init: function(field, data, page, index) {
            var self = this;
            this.field = field;
            this.data = data;
            this.data.index = index;
            // console.log(data)
            var i = index;


            this.field.bind("focus", function(event){
                $(page).trigger(IBM.mrs.CONSTANTS.INPUT_FOCUS, {"index": i, "id":data.id});
            });

        },

        getValue: function(){

            this.data.value = this.field.val();

            return this.data;

        },

        setValue: function(txt){
            this.field.val(txt);
        }


    };
}(jQuery));
