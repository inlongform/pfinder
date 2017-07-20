(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.BtnPage = function(data) {

        this.pageData = {};
        this.body = $("body");
        this.init(data);
    };

    IBM.mrs.BtnPage.prototype = {
        init: function(data) {
            var self = this;
            var pageGenerator = new IBM.mrs.pageGenerator(data);

            this.pageData = pageGenerator.getPageInfo();
            if (data.name == "login") {
                var btn = $(".ibm-btn-pri", this.pageData.pDiv);
                var newBtn = new IBM.mrs.Btn(btn, this.pageData.pData.buttons[0], this.pageData.pDiv, true);
            } else {

                pageGenerator.activateBtns();

                this.pageData.pDiv.bind(IBM.mrs.CONSTANTS.BTN_CLICKED, function(event, result) {

                    self.triggerUserInfo(result);

                });
                var checkBoxes = new IBM.mrs.CheckBoxes(this.pageData.pDiv, data.checkBoxes);
                
            }


        },

        triggerUserInfo: function(result) {
            console.log(result)
            if (this.pageData.pData.selection_name) {
                var obj = {
                    "selected": result.seletion,
                    "name": this.pageData.pData.selection_name,
                }
                if (result.formType) {
                    obj["formType"] = result.formType;
                }

                $("body").trigger(IBM.mrs.CONSTANTS.SET_SELECTION, obj);
            }
        }


    };
}(jQuery));
