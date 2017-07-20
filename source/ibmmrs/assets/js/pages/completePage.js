(function($) {
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.CompletePage = function(data, userInfo) {
        this.pageData = {};
        this.body = $("body");
        this.init(data, userInfo);
    };

    IBM.mrs.CompletePage.prototype = {
        init: function(data, userInfo) {

            // if(userInfo.isUngated && userInfo.ungatedAssetUrl && userInfo.ungatedAssetUrl != ""){
            //     userInfo.assetUrl = userInfo.ungatedAssetUrl;
            // }

            if (data.name == "step2_complete") {

                data.form_params = data.form_selection[userInfo.formType];
                data.showCheckboxes = true;

                if (userInfo.formType == "short" || userInfo.isUngated) {
                    data.showCheckboxes = false;
                }
            }

            if (data.ungated_y) {
                //show the right icon at the top
                data.section_yposition = ((userInfo.isUngated) ? data.ungated_y : data.gated_y)
            }
            data.isUngated = userInfo.isUngated;
            data.liveUrl = userInfo.liveUrl;
            data.previewUrl = userInfo.previewUrl;
            data.uInfo = ((data.lbls) ? IBM.mrs.Utils.formatUserInfo(data.lbls, userInfo) : null);
            var pageGenerator = new IBM.mrs.pageGenerator(data);
            this.pageData = pageGenerator.getPageInfo();
            this.activateBtns(userInfo);
            if (data.checkBoxes) {

                var checkBoxes = new IBM.mrs.CheckBoxes(this.pageData.pDiv, data.checkBoxes);
            }
        },


        activateBtns: function(userInfo) {

            var self = this;
            var btns = $(".ibm-btn-pri", this.pageData.pDiv);
            var btnData = self.pageData.pData.buttons[0];
            if (this.pageData.pData.is_preprod) {

                var postBtn = $(btns[0]);
                $("#test-tt-1").tooltip();
                postBtn.click(function(event) {
                    var thisBtn = $(this);
                    IBM.mrs.Post.postPreProd(userInfo, function(data) {
                        console.log("post to pre prod comlete");
                        if (data.previewUrl) {
                            console.log(btnData.next, btnData.section)
                            self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                                "selected": data.source,
                                "name": "source",
                            });

                            self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                                "selected": data.previewUrl,
                                "name": "previewUrl",
                            });

                            self.body.trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, {

                                "section": btnData.section,
                                "page": btnData.next


                            });
                        }
                    });
                });
            } else if (this.pageData.pData.is_preprod2) {
                var postBtn = $(btns[0]);
                postBtn.click(function(event) {
                    // console.log(userInfo)
                    console.log("post data please");
                    IBM.mrs.Post.postProd(userInfo.source, function(data) {
                        if (data && data.status != "error" && data.hasOwnProperty("liveUrl")) {
                            console.log(data)
                            self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                                "selected": data.liveUrl,
                                "name": "liveUrl",
                            });

                            self.body.trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, {
                                "section": self.pageData.pData.buttons[0].section,
                                "page": self.pageData.pData.buttons[0].next
                            });
                        } else {
                            alert("Error occured while promoting a file associated with this campaign");
                        }
                    });
                });

            } else if (this.pageData.pData.is_complete) {

                var redirectDiv = $("#redirect", self.pageData.pDiv);
                var redirect = new IBM.mrs.Redirect(redirectDiv, userInfo, this.pageData.pData.status);
                var restartBtn = $(btns[1]);

                // var restartBtn  = $(btns[0]);

                restartBtn.click(function(event) {
                    document.location = document.location.origin + document.location.pathname;
                })
            } else {
                console.log("buttons please")
                $.each(btns, function(index, val) {
                    var newBtn = new IBM.mrs.Btn(val, self.pageData.pData.buttons[index], self.pageData.pDiv);

                });
            }
        }

    };
}(jQuery));
