(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.pageGenerator = function(data) {

        this.body = $("body");
        this.pData = data;
        this.newPage;
        this.init(data);
    };

    IBM.mrs.pageGenerator.prototype = {
        init: function(data) {
            var wrapper = $("#ibm-content-main .pages");
            var template = IBM.mrs.Utils.createTemplate(data.template, data);
            wrapper.append(template);
            this.newPage = wrapper.find($("#" + data.name));


            this.activateSubbtns();
        },

        activateBtns: function(div, data) {
            var self = this;
            var btns = $(".ibm-btn-pri", this.newPage);
            $.each(btns, function(index, val) {
                var newBtn = new IBM.mrs.Btn(val, self.pData.buttons[index], self.newPage);

            });

        },

        activateSubbtns: function() {

            if ($(".tooltip", this.newPage).length > 0) {
                $(".tooltip", this.newPage).tooltip();
            }

            //youtube
            if ($(".vid", this.newPage).length > 0) {
                $(".vid", this.newPage).videoplayer();
                console.log("start video")
            }

            

            if ($(".previous", this.newPage).length >= 1) {
                $(".previous", this.newPage).click(function(event) {
                    event.preventDefault();
                    $("body").trigger(IBM.mrs.CONSTANTS.PREVIOUS)
                })
            };
        },



        getPageInfo: function() {
            var obj = {
                "pData": this.pData,
                "pDiv": this.newPage
            }
            return obj;
        }

    };
}(jQuery));
