(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.SelectPage = function(data) {
        this.nextBtn = {};
        this.pageData = {};
        this.body = $("body")
        this.init(data);
    };

    IBM.mrs.SelectPage.prototype = {
        init: function(data) {
            var pageGenerator = new IBM.mrs.pageGenerator(data);
            this.pageData = pageGenerator.getPageInfo();
            this.activateBtns();
            this.activateSelect();

        },

        activateBtns: function() {
            var btn = $(".ibm-btn-pri", this.pageData.pDiv);
            this.nextBtn = new IBM.mrs.Btn(btn, this.pageData.pData.buttons[0])

        },

        activateSelect: function() {
            var self = this;
            var select = new IBM.mrs.Select($("select#offer", this.pageData.pDiv), this.pageData.pData.selections, true, this);
            $(this).bind(IBM.mrs.CONSTANTS.DROP_SELECT, function(event, result){
                if(result.next){
                    self.nextBtn.getBtnDiv().attr("disabled", false);
                    self.nextBtn.setNextId(result.next);
                    self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                        "selected": result.text,
                        "name": result.selectionName
                    });
                }else{
                    self.nextBtn.getBtnDiv().attr("disabled", true);
                }

            });
        }

    };
}(jQuery));
