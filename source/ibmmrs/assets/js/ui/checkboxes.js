(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.CheckBoxes = function(wrapper, data) {


        this.body = $("body");
        this.init(wrapper, data);
    };

    IBM.mrs.CheckBoxes.prototype = {
        init: function(wrapper, data) {
            var self = this;
            var checkboxes = $("input[type=checkbox]", wrapper);
            var grpName = checkboxes.attr("name");

            if (checkboxes.length > 0) {

                checkboxes.each(function() {
                    IBMCore.common.widget.checkboxradio.init(this);
                });
            }


            $("[name=" + grpName + "]", this.newPage).on('ifChanged', function(event) {
                var checkVals = [];
                checkboxes.each(function() {
                    if ($(this).prop("checked")) {
                        if(data.id == "optional"){

                            var obj = {
                                "name": $(this).val(),
                                "type": $(this).data("type"),
                                "required": $(this).data("required"),
                                "lbl": $(this).data("lbl")
                            }
                            checkVals.push(obj)
                        }else{
                            checkVals.push($(this).val())
                        }

                    }

                })
                self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                    "selected": checkVals,
                    "name": data.id,
                });

            });

        }
    };
}(jQuery));
