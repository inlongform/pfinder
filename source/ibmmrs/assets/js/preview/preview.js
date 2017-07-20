(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Preview = function() {


        this.init();
    };

    IBM.mrs.Preview.prototype = {
        init: function() {
            this.page = $("#ibm-content-main");
            var previewData = JSON.parse(localStorage.getItem("previewData"));

            if (previewData) {

                if (previewData.isUngated) {
                    this.showUngated(previewData);
                } else {
                    this.showGated(previewData);

                }
            }

            $("select").each(function() {
                IBMCore.common.widget.selectlist.init(this);
            });

        },

        showUngated: function(previewData) {
            console.log("showUngated")
            console.log(previewData)
            //testing
            //http://socialforest.org/wp-content/uploads/2014/04/Forest-Green-Wallpaper.jpg
            // previewData.offerType = "image";
            // previewData.assetUrl: "http://socialforest.org/wp-content/uploads/2014/04/Forest-Green-Wallpaper.jpg";
            // previewData.content = {
            //     description: "This white paper discussed IDC research that provides recommendations on a set best practices that can help organizations accelerate their cloud maturity.",
            //     headerBtnTxt: "Learn more",
            //     headerTxt: "Maecenas lobortis, ante vel pharetra.",
            //     headline: "IDC's Best Practices for Cloud Computing Adoption"
                
            // }
            // console.log(previewData)
            ////end
            var formData = {
                "questions": this.markIsSelect(previewData.questions),
                "isUngated": previewData.isUngated
            }
            var downloadLink = $(".page-content a.ibm-btn-pri", this.page);
            this.learnMoreBar = $(".learn-more-top-bar", this.page);
            this.heading = $(".page-heading", this.page);
            var pageContent = $(".page-content .ibm-col-1-1:first-child", this.page)


            downloadLink.attr("href", previewData.assetUrl);
            downloadLink.html(downloadLink.html() + " " + previewData.offerType);

            if (previewData.offerType == "image") {
                previewData.isImg = true;

            } else if (previewData.offerType == "pdf") {
                previewData.isPdf = true;
                console.log(formData)
            } else if (previewData.offerType == "video") {


                var videoInfo = IBM.mrs.Utils.getVidProviderAndId(previewData.assetUrl);
                pageContent.removeClass("ibm-no-mobile")
                if (videoInfo.provider == "youtube") {
                    previewData.isYoutube = true;

                } else if (videoInfo.provider == "vimeo") {
                    previewData.isVimeo = true;

                }
                previewData.vidId = videoInfo.id;
                downloadLink.remove();

            }

            var cTemplate = IBM.mrs.Utils.createTemplate("asset_tmp", previewData);
            pageContent.append(cTemplate);

            if (formData.provider == "youtube") {
                $(".vid", pageContent).videoplayer();
            }


            //doing this so i dont have to add a new template to templates.js

            var template = IBM.mrs.Utils.createTemplate("questions_tmp", formData);

            var overlay = IBMCore.common.widget.overlay.createOverlay({
                                contentHtml: template,
                                fullwidth: true,
                                classes: "ibm-common-overlay",
                                id: "mrs-ungated-overlay"
                            });
            overlay.init(); 

            $("a", this.learnMoreBar).click(function(event) {
                event.preventDefault();
                overlay.show();
            });

            $("p", this.learnMoreBar).text(previewData.content.headerTxt);
            $("a", this.learnMoreBar).text(previewData.content.headerBtnTxt);
            $("h2", this.heading).text(previewData.content.headline);
            $("p", this.heading).text(previewData.content.description);



            this.stickyNav();
        },

        stickyNav: function() {
            var self = this;
            var headmastHeight = $("#ibm-top #ibm-universal-nav").outerHeight();
            var tBarHeight = this.learnMoreBar.outerHeight();
            $(window).on("scroll", function() {
                var fromTop = $("body").scrollTop();
                self.learnMoreBar.toggleClass("sticky", (fromTop > headmastHeight));
                if (self.learnMoreBar.hasClass("sticky")) {
                    self.heading.css({
                        "margin-top": tBarHeight + 20 + "px"
                    })
                } else {
                    self.heading.css({
                        "margin-top": "20px"
                    })
                }

            })
        },

        showGated: function(previewData) {
            console.log(previewData)
            var formData = {
                "questions": this.configFields(previewData.questions),
                "isUngated": previewData.isUngated
            }

            var cta = ((previewData.content.submitButtonText != "") ? previewData.content.submitButtonText : "Schedule a Demo");
            $("button.submit_btn", this.page).text(cta)


            if (previewData.content.mainContent && previewData.content.mainContent != "") {
                $(".user-content").html(previewData.content.mainContent);
            }

            if (previewData.fileSrc && previewData.fileSrc != "") {

                $("#new-back").css({
                    "background-color": "transparent",
                    "background-repeat": "no-repeat",
                    "background-position": "center top",
                    "background-image": "url('" + previewData.fileSrc + "')"
                })
            }

            var template = IBM.mrs.Utils.createTemplate("questions_tmp", formData);
            $("#mrs-form").prepend(template);

        },

        markIsSelect: function(questions) {
            $.each(questions, function(index, val) {
                val.isSelect = ((val.type == "select") ? true : false);
            });
            return questions;
        },

        configFields: function(questions) {
            var count = 0;
            var split = [];
            var temp = [];
            $.each(questions, function(index, val) {
                if (count == 0) {
                    temp = [];
                    split.push(temp)
                }
                val.isSelect = ((val.type == "select") ? true : false);
                temp.push(val)
                count++;
                if (count == 2) {
                    count = 0;
                }

            });

            return split;

        }


    };
}(jQuery));
