(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Select = function(wrapper, data, isVisible, page, uInfo) {

        this.body = $("body");

        this.selectionParams = {};

        this.init(wrapper, data, isVisible, page, uInfo);
    };

    IBM.mrs.Select.prototype = {
        init: function(wrapper, data, isVisible, page, uInfo) {
            var self = this;
            this.wrapper = wrapper;

            this.wrapper.select2({
                data: data.items,
                openOnEnter: true

            });

            //set the defaul obj value
            if(uInfo){
                if($(wrapper).attr("id") == "offerType"){

                    $.each(data.items, function(index, val){
                        if(val.id == uInfo.offerType){
                            self.setSelectionParams(val, $(wrapper).attr("id"));
                            return false;
                        }
                    })
                }else{
                    self.setSelectionParams(data.items[0], $(wrapper).attr("id"));
                }
            }
           
            


            this.wrapper.on("select2:select", function(e) {
                console.log("select", e)
                e.params.data.selectionName = data.selection_name;
                self.selectionParams = e.params.data;
                $(page).trigger(IBM.mrs.CONSTANTS.DROP_SELECT, e.params.data)

            });



            if (isVisible != null) {

                this.showHide(isVisible)
            }
        },

        showHide: function(bool) {
            if (bool) {
                this.wrapper.parent().show()
            } else {
                this.wrapper.parent().hide();
            }
        },

        setSelection: function(val){
            // console.log("setSelection", val)
            this.wrapper.val(val);
            this.wrapper.trigger('change');
            this.setSelectionParams(val);


        },

        setSelectionParams: function(val){
            this.selectionParams = {
                id: ((val.id)?val.id:val),
                selectionName: this.wrapper.attr("id"),
                text: val.text
            }
        },

        disableSelect: function(){
            this.wrapper.attr("disabled", "true");
        },


        getSelectionParams: function() {
            return this.selectionParams;
        }
    };
}(jQuery));
