(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.CustomizePage = function(data, uInfo) {


        this.HEAD_TAG = "<h2 class='ibm-h2'>[HEADLINE]</h2>";
        this.INFO_IMG_HEIGHT = 182;
        this.ANIMATION_SPEED = 400;
        // this.SCROLL_DELAY = 150;
        this.body = $("body");
        this.init(data, uInfo);
    };

    IBM.mrs.CustomizePage.prototype = {
        init: function(data, uInfo) {
            var self            = this;
            console.log(uInfo)
            this.uInfo          = uInfo;
            data.isUngated      = uInfo.isUngated;
            // var pageData        = ((uInfo.isUngated) ? data.ungated : data.gated);
            var pData = ((uInfo.isUngated) ? data.ungated : data.gated);
            this.isUngated      = uInfo.isUngated;
            this.previewFile    = pData.preview;
            this.allFields      = [];
            this.placeHolderTxt = pData.edit_placeholder;

            if (data.isUngated) {
                //do ungated stuff new one
                this.initUngated(data, pData, uInfo);
            } else {

                this.initGated(data, pData, uInfo);
            }


            var previewBtn       = $(".preview-btn", this.pageData.pDiv);
            var saveBtn          = $(".ibm-btn-pri.save", this.pageData.pDiv)
            var instructionsBox  = $(".instructions", this.pageData.pDiv);
            this.instructionsImg = $(".img-step", instructionsBox);
            this.tips            = $(".tips", this.pageData.pDiv);


            var hasStorage = false;
            if (typeof(Storage) !== "undefined") {
                hasStorage = true;

            };

            window.onbeforeunload = function() {
                self.removeStorage();
                // return "Bye now!";
            };

            // $(this.tips[0]).show();

            saveBtn.click(function(event) {
                console.log("saveBtn")
                event.preventDefault();
                if (data.isUngated) {
                    self.saveUngated();
                } else {
                    self.saveGated();
                }

            });

            previewBtn.click(function(event) {
                event.preventDefault();
                console.log("previewBtn previewBtn")
                self.launchPreview($(this));
            });

        },


        preparePreview: function() {
            var obj = {
                "isUngated": this.isUngated,
                "content": this.getContent(),
                "offerType": this.uInfo.offerType,
                "questions": (((this.uInfo.formType == "long") ? IBM.mrs.LONG_FIELDS : IBM.mrs.SHORT_FIELDS)).concat(this.uInfo.optional)
            }
            if (this.isUngated) {
                obj["assetUrl"] = ((this.uInfo.assetUrlSDA != "")?this.uInfo.assetUrlSDA:this.uInfo.assetUrl);

            } else {
                obj["fileSrc"] = this.fileSrc;
            }

            return obj;
        },

        launchPreview: function(btn) {
            this.removeStorage();

            var previewData = this.preparePreview();
            localStorage.setItem('previewData', JSON.stringify(previewData));
            var location = this.previewFile;

            if ($(btn).hasClass('desktop-preview')) {
                window.open(location);
            } else {
                var winHeight = $(window).height();
                var winParams = "width=578, height=" + winHeight + ", titlebar=yes, toolbar=yes";
                window.open(location, "", winParams);
            }
        },

        createPage: function(data, pData, pKey) {
            for (var key in pData) {
                var val = pData[key];
                data[key] = pData[key]

            }
            console.log(data)
                // delete data[pKey];
            var pageGenerator  = new IBM.mrs.pageGenerator(data);
            this.pageData      = pageGenerator.getPageInfo();
            this.fields        = $("input[type=text]", this.pageData.pDiv);
            this.headlineField = $("#headline", this.pageData.pDiv);
            this.ctaField      = $("#submitButtonText", this.pageData.pDiv);
            this.btnData       = this.pageData.pData.buttons[0];

        },



        initFields: function(dFields) {
            var self = this;
            //get inputs/txtarea
            var fields = $(".uField", this.pageData.pDiv);
            // console.log(fields)
            $.each(fields, function(index, val) {
                var field = new IBM.mrs.Input($(val), dFields[index], self, index);
                self.allFields.push(field);

            });

            $(this).bind(IBM.mrs.CONSTANTS.INPUT_FOCUS, function(event, result) {
                //this is to skip the editor box
                var index = ((result.id == "submitButtonText" && !this.isUngated) ? 2 : result.index)
                self.animateInfo(index)
            });

        },

        getContent: function() {

            if (this.isUngated) {
                return {
                    "headerTxt": $("input#headerTxt").val(),
                    "headerBtnTxt": $("input#headerBtnTxt").val(),
                    "headline": $("input#headline").val(),
                    "description": $("textarea#description").val(),
                    "submitButtonText": this.ctaField.val(),
                }
            } else {
                return {
                    "submitButtonText": this.ctaField.val(),
                    "mainContent": this.formatContent(),
                    "headline": this.headlineField.val()
                }
            }
        },



        validateFields: function() {
            var isOk = true;
            var alertMsg = "";
            $.each(this.allFields, function(index, val) {
                var param = val.getValue();
                var isMin = IBM.mrs.Validate.validateLength(param.value, param.minLength);
                var isMax = ((param.maxLength) ? IBM.mrs.Validate.validateLength(param.value, param.maxLength) : false);
                //(min == true && max == false) true
                //(min == true && max == true ) false alert(errorLong)
                //(min == false && max == false) false alert(errorTxt)
                if (isMin && isMax) {
                    alertMsg = (alertMsg === "") ? param.errorLong : alertMsg + "\n" + param.errorLong;
                    isOk = false;
                } else if (!isMin && !isMax) {
                    alertMsg = (alertMsg === "") ? param.errorTxt : alertMsg + "\n" + param.errorTxt;
                    isOk = false;
                }

            });

            if (!isOk) {
                alert(alertMsg);
                return false;
            }

            return isOk;
        },

        saveGated: function() {


            if (this.validateFields()) {

                var editorContent = this.editor.getHTML();
                if (editorContent == "" || editorContent == this.placeHolderTxt) {
                    alert("Please Enter an Asset or Offer Description")
                } else {
                    var fieldInfo = this.getContent();
                    //we dont need to save the headline since the head and body are combined
                    delete fieldInfo.headline
                    var selectedObjs = IBM.mrs.Utils.createUserSelection(fieldInfo);
                    console.log("gated selectedObjs", selectedObjs)
                    this.body.trigger(IBM.mrs.CONSTANTS.SET_MULTI_SELECTION, selectedObjs);
                    this.body.trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, {
                        "section": this.btnData.section,
                        "page": this.btnData.next
                    });
                }
                console.log("save gated")
            } else {
                console.log("cant save gated")
            }

        },


        saveUngated: function() {
            if (this.validateFields()) {
                var fieldInfo = this.getContent();
                var selectedObjs = IBM.mrs.Utils.createUserSelection(fieldInfo);
                this.body.trigger(IBM.mrs.CONSTANTS.SET_MULTI_SELECTION, selectedObjs);
                this.body.trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, {
                    "section": this.btnData.section,
                    "page": this.btnData.next
                });
                console.log("save ungated please")

            } else {
                console.log("cant save ugated")
            }
        },

        initUngated: function(data, pData, uInfo) {
            console.log("this is a gated form");

            this.createPage(data, pData, "gated");
            this.initFields(data.fields);
            this.fillFields(uInfo.isEdit);
        },

        initGated: function(data, pData, uInfo) {
            console.log("this is a gated form")
            var self = this;
            this.createPage(data, pData, "ungated");
            this.placeHolderTxt = this.pageData.pData.edit_placeholder;
            this.uploadForm     = $("form#uploadForm", this.pageData.pDiv);
            this.imgPreview     = $(".img_preview", this.pageData.pDiv);
            var fileInput       = $("input[type=file]", this.uploadForm);
            var resetBtn        = $(".reset_btn", this.pageData.pDiv);
            var iSelectBtn      = $(".iselect_btn", this.pageData.pDiv);



            this.fileSrc = "";
            this.initFields(data.fields);


            console.log(self.pageData.pDiv)

            //init the rich media editor
            var squi = new SquireUI({
                replace: 'textarea#foo',
                height: 300,
                blockTag: 'P',
                buildPath: ""
            });

            //get the editor ready
            this.body.bind(IBM.mrs.CONSTANTS.SQUIRE_READY, function() {

                //chrome
                self.editor = $("iframe", self.pageData.pDiv)[0].contentWindow.editor;
                if (self.editor) {

                    self.editorActive();
                    self.fillFields(uInfo.isEdit);
                }


                // FF
                //this doesnt fire in chrome for some reason
                $("iframe").on("load", function(e) {
                    if (!self.editor) {
                        self.editor = e.target.contentWindow.editor;

                        self.editorActive();
                        self.fillFields(uInfo.isEdit);
                    }
                })
            });

            //select image from lib
            this.body.bind(IBM.mrs.CONSTANTS.IMAGE_SELECT, function(event, result) {
                console.log("IMAGE_SELECT", result);
                self.fileSrc = result.selected;
                self.setBckImage(result.selected, false);
                IBMCore.common.widget.overlay.hide('image-overlay');
            })

            //set the background image if you are editing
            if (uInfo.isEdit) {
                // console.log($.isArray(uInfo.images));
                if ($.isArray(uInfo.images) && uInfo.images.length > 0) {
                    this.setBckImage(uInfo.images[0].url, true)
                } else if (uInfo.images != "") {
                    this.setBckImage(uInfo.images, true);
                }

            }

            fileInput.change(function(event) {
                self.readURL(this);
            });


            resetBtn.click(function(event) {
                event.preventDefault();
                self.setBckImage(null, false);
                self.fileSrc = null;
                self.body.trigger(IBM.mrs.CONSTANTS.IMAGE_RESET, null);
            });

            iSelectBtn.click(function(event) {
                event.preventDefault();
                IBMCore.common.widget.overlay.show('image-overlay');
                var imgsrc = "";
                if (Object.prototype.toString.call(uInfo.images) === '[object Array]' && uInfo.images.length > 0) {
                    imgsrc = uInfo.images[0].url;
                } else if (uInfo.images != "") {
                    imgsrc = uInfo.images;
                }

                if (imgsrc != "") {
                    self.body.trigger(IBM.mrs.CONSTANTS.IMAGE_PRESET, { "selected": imgsrc });
                }
            });
        },



        editorActive: function() {

            var iframe = $("iframe");
            var self = this;

            this.editor.addEventListener("blur", function(e) {
                iframe.removeClass('field-active');
            })

            this.editor.addEventListener("focus", function(e) {
                iframe.addClass('field-active');
                self.animateInfo(1);

                if (self.editor.getHTML() == self.placeHolderTxt) {
                    self.editor.setHTML("");
                }
            });
            //this really pissed me off
            this.body.unbind(IBM.mrs.CONSTANTS.SQUIRE_READY);

        },

        fillFields: function(isEdit) {
            var self = this;
            console.log("fillFields", this.uInfo)
            if (!this.isUngated) {
                if (this.editor) {

                    if (this.uInfo.mainContent == "") {
                        this.editor.setHTML(this.placeHolderTxt);
                    } else {
                        this.editor.setHTML(IBM.mrs.Utils.stripContent(this.uInfo.mainContent));
                    }

                    this.ctaField.val(this.uInfo.submitButtonText);
                    this.headlineField.val(IBM.mrs.Utils.stripHeadline(this.uInfo.mainContent));


                }
            } else {
                var keys = ["headerTxt", "headerBtnTxt", "headline", "description"];
                $.each(this.allFields, function(index, val) {
                    var keyIndex = keys.indexOf(val.getValue().id);
                    var key = keys[keyIndex];
                    if (keyIndex != -1) {
                        val.setValue(self.uInfo[key]);

                    }
                });
            }

        },
        animateInfo: function(index) {

            var yPos = this.INFO_IMG_HEIGHT * index;
            this.instructionsImg.animate({
                top: -yPos
            }, this.ANIMATION_SPEED);
            this.tips.hide();
            $(this.tips[index]).fadeIn(this.ANIMATION_SPEED);
        },



        setBckImage: function(img, isEdit) {
            console.log(img)


            if (isEdit) {
                console.log("got here")
                $("img", this.imgPreview).attr("src", img);
                this.imgPreview.show();
                this.fileSrc = img;
                this.triggerImageData(null, img)
            } else {

                console.log(isURL, img)
                if (img) {
                    $("img", this.imgPreview).attr("src", img);
                    var isURL = IBM.mrs.Validate.validateURL(img);
                    this.imgPreview.show();
                    if (isURL) {
                        this.triggerImageData(null, img);
                    } else {

                        var formData = new FormData(this.uploadForm[0]);

                        this.triggerImageData(formData, null);
                    }

                } else {
                    $("img", this.imgPreview).attr("src", "");

                    this.imgPreview.hide();

                    this.triggerImageData(null, null)
                }

            }
        },

        triggerImageData: function(formData, url) {
            this.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                "selected": url,
                "name": "images"
            });
            this.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                "selected": formData,
                "name": "imageData"
            });
        },

        removeStorage: function() {
            localStorage.removeItem("previewData");
        },

        readURL: function(file) {
            var self = this;
            IBM.mrs.Utils.readFile(file, function(fileName, result) {
                // self.nameField.text(fileName);
                self.fileSrc = result;
                self.setBckImage(result, false)
                self.imgPreview.show();
            })

        },

        formatContent: function() {

            var newHeadline = this.HEAD_TAG.replace("[HEADLINE]", this.headlineField.val());
            return newHeadline + this.editor.getHTML();
        }


    };
}(jQuery));
