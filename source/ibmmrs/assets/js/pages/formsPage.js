(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.FormsPage = function(data) {
        console.log("FormsPage")

        this.body = $("body");
        this.data = data;
    };

    IBM.mrs.FormsPage.prototype = {
        init: function() {
            var self = this;
            this.form_pages = $("#ibm-content-main .my-forms");
            // console.log("my forms", this.data)
            IBM.mrs.Utils.getData(IBM.mrs.FETCH_BU, "POST", JSON.stringify(IBM.mrs.Utils.createUname()), function(d) {
                console.log("FETCH_BU", d)
                self.data.filterList = d.filterList;
                var template = IBM.mrs.Utils.createTemplate(self.data.template, self.data);
                self.form_pages.append(template);
                new IBM.mrs.DataTable(self.data, self.form_pages);

            });

        }

    };
}(jQuery));
