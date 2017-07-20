(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.NewOverlay = function(data) {

        this.body = $("body");
        this.init(data);
    };

    //for new features modal and delete form
    IBM.mrs.NewOverlay.prototype = {
        init: function(data) {
            var self = this;
            var template = IBM.mrs.Utils.createTemplate(data.template, data);
            this.body.append(template);
            var wrap = $("#" + data.name);
            wrap.overlay();

            console.log("new overlay")
            if (data.name == "delete-overlay") {
                $("#delete-overlay .ibm-btn-pri").click(function(event) {
                    event.preventDefault();
                    self.body.trigger(IBM.mrs.CONSTANTS.CONFIRM_DELETE);
                });

                $("#ibm-overlaywidget-delete-overlay .ibm-close-link").click(function(event) {
                    self.body.trigger(IBM.mrs.CONSTANTS.CLOSE_DELETE_MODAL);
                });
            }

        },

        changeFormName: function(name){
            $("#delete-overlay .nickname").text(name);
        }

    };
}(jQuery));
