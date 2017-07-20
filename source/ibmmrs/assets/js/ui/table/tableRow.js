(function($) {
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.TableRow = function(row, data, index, pageData) {

        this.body = $("body");
        this.init(row, data, index, pageData);
    };

    IBM.mrs.TableRow.prototype = {
        init: function(row, data, index, pageData) {
            var self = this;

            // console.log(data)
            this.source    = data.source;
            this.row       = row;
            this.editable  = data.editable;
            this.isOpen    = false;
            this.openBtn   = $(".plus", row);
            if (index % 2 === 0) {
                $(this.row).addClass('stripe');
            }

            if ($(".tooltip", this.row).length > 0) {
                $(".tooltip", this.row).tooltip();
            }


            this.openBtn.click(function(event) {
                event.preventDefault();
                if (!$(this).hasClass('minus')) {
                    data.pageData = pageData;
                    
                    self.createRow(data);
                    $(this).addClass('minus');
                    self.body.trigger(IBM.mrs.CONSTANTS.CLOSE_TABLEDETAIL, {"index": index});
                } else {
                    self.removeDetail();
                    $(this).removeClass('minus');
                }



                console.log("click")
            })



            $(".delete", row).click(function(event) {
                event.preventDefault();
                if (!self.editable) {
                    return;
                }
                self.body.trigger(IBM.mrs.CONSTANTS.DELETE_FORM, { "source": data.source, "nickName": data.nickName })

            })

            $(".edit", row).click(function(event) {
                event.preventDefault();
                if (!self.editable) {
                    return;
                }
                self.body.trigger(IBM.mrs.CONSTANTS.EDIT_CLICK, { 
                    "source": data.source, 
                    "languageTxt": data.language, 
                    "page": pageData.editCustomize.page, 
                    "section": pageData.editCustomize.section,
                    "lastModifiedBy": data.lastModifiedBy

                })

            })

        },


        createRow: function(data) {
            var self = this;

            if(self.isOpen) return;
            var template = IBM.mrs.Utils.createTemplate("tablerowDetails_tmp", data);
            $(template).insertAfter($(this.row));
            // $(this.row).next().hide();
            // $(this.row).next().fadeIn("slow", function(){
            //     self.isOpen = true; 
            // });
            this.isOpen = true; 
            $(".change", $(this.row).next()).click(function(event) {
                event.preventDefault();
                if (!self.editable) {
                    return;
                }
                self.body.trigger(IBM.mrs.CONSTANTS.EDIT_CLICK, { 
                    "source": data.source, 
                    "languageTxt": data.language, 
                    "page": data.pageData.editRedirect.page, 
                    "section": data.pageData.editRedirect.section,
                    "liveUrl": data.liveUrl
                })
            })


        },

        removeDetail: function() {
            // $(this.row).next().fadeOut("fast", function() {
            //     this.remove();
            // })
            $(this.row).next().remove();
            this.openBtn.removeClass('minus')
            this.isOpen = false; 
        },

        removeRow: function() {
            $(this.row).fadeOut("fast", function() {
                this.remove();
            })

        },

        getSource: function() {
            return this.source;
        },

        getRow: function() {
            return this.row;
        },

        getIsOpen: function(){
            return this.isOpen;
        }

    };
}(jQuery));
