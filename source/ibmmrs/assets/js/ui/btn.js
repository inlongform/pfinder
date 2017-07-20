(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Btn = function(btn, data, wrapper, isLogin) {

        this.nextId = "";
        this.body = $("body");
        this.init(btn, data, wrapper, isLogin);
    };

    IBM.mrs.Btn.prototype = {
        init: function(btn, data, wrapper, isLogin) {
            var self = this;
            this.nextId = ((data)?data.next:null);
            this.btn = $(btn);

            //remove the do not gate button this is temporary
            

            this.btn.click(function(event) {
                console.log("button click")
                event.preventDefault();
                if(isLogin){

                    self.body.trigger(IBM.mrs.CONSTANTS.LOGIN_CLICK, {
                        "wrapper": wrapper,
                        "data": data
                    });
                    
                }else{

                    if(data.url){
                        // console.log("got here");

                        window.open(data.url);
                        return;
                    }

                    var obj = {
                        "section": data.section,
                        "page": self.nextId

                    }
                    //only for btnPage.js

                    if(wrapper){
                        // console.log("has wrapper", data.option)
                        //data.option set to gated/ungated
                        wrapper.trigger(IBM.mrs.CONSTANTS.BTN_CLICKED, {
                            "seletion": ((data.option != null)?data.option:$(this).val()),
                            "formType": ((data.formType)?data.formType:null)
                        })
                    }
                    if(data.reset){
                        console.log("reset userdata")
                        self.body.trigger(IBM.mrs.CONSTANTS.RESET_USER_PARAMS);
                    }
                    self.body.trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, obj);
                }

            });

        },

        setNextId: function(id){
            this.nextId = id;
        },

        getBtnDiv: function(){
            return this.btn;
        }



    };
}(jQuery));
