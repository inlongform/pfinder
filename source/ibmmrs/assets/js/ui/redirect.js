(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Redirect = function(wrapper, userInfo, status) {

        this.init(wrapper, userInfo, status);
    };

    IBM.mrs.Redirect.prototype = {
        init: function(wrapper, userInfo, status) {
            console.log(userInfo)
            var self             = this;
            this.userInfo        = userInfo;
            this.errorMsgs       = status.errors;
            
            var redirectControls = $(".redirect-controls", wrapper);
            var field            = $("input[type=text]", wrapper);
            var checkbox         = $("input[type=checkbox]", wrapper);
            this.success         = $(".success", wrapper);
            this.fail            = $(".error", wrapper);
            this.success.text(status.success);
            // this.noUrl           = $(".no-url", wrapper);

            IBMCore.common.widget.checkboxradio.init(checkbox);


            if (this.userInfo.replacementFormUrl != "") {
                field.val(this.userInfo.replacementFormUrl)
            }



            $("[name=redirect-grp]", this.newPage).on('ifChanged', function(event) {
                ($(this).prop("checked") ? redirectControls.show() : redirectControls.hide())

            });

            if(userInfo.isEdit && userInfo.isRedirect){
                $("[name=redirect-grp]", this.newPage).iCheck('check');
            }

            $(".submit", wrapper).click(function(event) {
                event.preventDefault();
                // var obj = {
                //     "pathFinderFormUrl": "https://www-matdev2.sby.ibm.com/marketing/iwm/dre/signup?source=mrs-form-844&S_PKG=ov1004",
                //     "cctFormUrl": "https://w3-matdev2.sby.ibm.com/marketing/automation/iwm/dre/preview/signup?source=swg-mrp-hy1"

                // }
                // self.submitRedirect(obj.cctFormUrl, obj.pathFinderFormUrl);
                self.submitRedirect(field.val(), userInfo.liveUrl);

            });







            // var obj = {
            //     "pathFinderFormUrl": "https://www-01.ibm.com/marketing/iwm/dre/signup?source=mrs-form-1959&S_PKG=ov1234",
            //     "cctFormUrl": "https://www-01.ibm.com/marketing/iwm/iwm/web/signup.do?source=ibm-commerce-krl&S_PKG=ov1234"

            // }

            // IBM.mrs.Utils.getData(IBM.mrs.VALIDATE_CCT_MIGRATION, "POST", JSON.stringify(obj), function(data) {
            //     console.log(data)

            // });



            // replacementFormUrl == ""
            // formMigration(liveUrl, CCturl)

            // replacementFormUrl != ""
            // input.val(replacementFormUrl)
            // validateFormMigrationInfo(liveUrl, replacementFormUrl)
            // formMigration(liveUrl, replacementFormUrl)



        },


        //ccturl https://www-matdev2.sby.ibm.com/marketing/iwm/dre/signup?source=ibm-analytics&S_PKG=ov20840
        submitRedirect: function(cctURL, liveURL) {
            console.log("redirect", cctURL, liveURL)
            var self = this;


            this.success.hide();
            this.fail.hide();
            // this.noUrl.hide();
            var validUrl = IBM.mrs.Validate.validateURL(cctURL);

            if (!validUrl) {
                //invalid url
                // this.noUrl.show();
                this.toggleNotification(false, this.errorMsgs[1])
                return;
            }


            var validateObj = IBM.mrs.Utils.createCCTMigrate(cctURL, liveURL, false);
            var migrateObj = IBM.mrs.Utils.createCCTMigrate(cctURL, liveURL, true);
            if (cctURL == this.userInfo.replacementFormUrl) {
                self.migrateForm(migrateObj);
            }else{

                IBM.mrs.Utils.getData(IBM.mrs.VALIDATE_CCT_MIGRATION, "POST", JSON.stringify(validateObj), function(data) {

                    if (!data.valid) {
                        self.toggleNotification(false, self.errorMsgs[0])
                    } else if (data.valid && (data.unicaVersion != self.userInfo.campaignCodeVersion)) {
                        self.toggleNotification(false, self.errorMsgs[2])
                    } else {
                        self.migrateForm(migrateObj)
                    }
                });
            }
        },

        migrateForm: function(migrateObj) {
            var self = this;

            IBM.mrs.Utils.getData(IBM.mrs.MIGRATE_CCT, "POST", JSON.stringify(migrateObj), function(data) {
                var isValid = false;
                console.log(data)
                if (data) {

                    $.each(data.returnCodes, function(index, val) {
                        if (val.code == 0) {
                            isValid = true;
                            return false;
                        }
                    });
                }
                self.toggleNotification(isValid, self.errorMsgs[0]);

            });

        },

        toggleNotification: function(isValid, failTxt) {
            if (isValid) {
                this.success.show();
            } else {
                this.fail.text(failTxt)
                this.fail.show();
            }
        }

    };
}(jQuery));
