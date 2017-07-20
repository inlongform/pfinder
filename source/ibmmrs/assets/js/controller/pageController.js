(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.PageController = function(data, userInfo) {


        this.init(data, userInfo)
    };

    IBM.mrs.PageController.prototype = {
        init: function(data, userInfo) {
            var self = this;

            var pTemplate = data.template;
            if (pTemplate == "login_tmp" || pTemplate == "btns_tmp" || pTemplate == "stage_tmp" || pTemplate == "home_tmp") {
                new IBM.mrs.BtnPage(data)
            } else if (pTemplate == "select_tmp") {
                new IBM.mrs.SelectPage(data);
            } else if (pTemplate == "complete_tmp") {
                new IBM.mrs.CompletePage(data, userInfo);
            } else if (pTemplate == "fields_tmp") {
                new IBM.mrs.FieldsPage(data, userInfo);
            } else if (pTemplate == "customize_tmp") {
                new IBM.mrs.CustomizePage(data, userInfo);
            } else {
                console.log("got here")
                new IBM.mrs.pageGenerator(data);
            }


        }
    };
}(jQuery));
