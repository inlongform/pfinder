(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Breadcrumbs = function(data) {

        this.bCrumbs = $("#breadcrumbs");
        
        this.init(data);
    };

    IBM.mrs.Breadcrumbs.prototype = {
        init: function(data) {

            var sectionTitles = IBM.mrs.Utils.getSectionTitles(data);
            sectionTitles.mainTitle = data[0].main_title;
            var template  = IBM.mrs.Utils.createTemplate("breadcrumbs_tmp", sectionTitles);
            this.bCrumbs.append(template);

            this.steps = $(".ibm-col-6-2 .step", this.bCrumbs);

        },

        changeState: function(section, page, yPos) {

            if (section == 0) {

                if (page >= 2 && page<14) {
                    if (!this.bCrumbs.is(':visible')) {
                        this.showHide(true);
                    }
                }else{
                    this.showHide(false);

                }
            }
            if(yPos){

                $.each(this.steps, function(index, val) {
                     $(this).css("background-position", "0 " + yPos[index]);
                });
            }


        },


        showHide: function(bool){
            if(bool){
                this.bCrumbs.show();
            }else{
                this.bCrumbs.hide();
            }
            
        }

    };
}(jQuery));
