(function($) {
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.FieldsPage = function(data, uInfo) {

        this.pageData = {};
        this.body = $("body");
        this.SDA_LINK_PREFIX = "public.dhe.ibm.com";
        this.init(data, uInfo);
    };

    IBM.mrs.FieldsPage.prototype = {
        init: function(data, uInfo) {

            var self = this;
            this.isUngated = uInfo.isUngated;
            data.isUngated = uInfo.isUngated;
            data.isEdit = uInfo.isEdit;
            this.isEdit = uInfo.isEdit;
            // this.currCampaignVersion = uInfo.campaignCodeVersion;
            // this.hasUpdated          = false;
            // console.log(data, uInfo)
            var pageGenerator = new IBM.mrs.pageGenerator(data);
            pageGenerator.activateBtns();
            this.pageData = pageGenerator.getPageInfo();

            this.unicaTxt = data.fields.tacticCampaignCode.copy;
            this.unicaValidTxt = data.fields.tacticCampaignCode.unica_valid_txt;
            this.uVersionTxt = $("p.unica-version", this.pageData.pDiv);
            this.unicaValid = $("p.unica-valid", this.pageData.pDiv);
            this.unicaOfferCode = $("#unicaOfferCode", this.pageData.pDiv);
            this.unicaOfferCodeWrapper = $("#unicaOfferCode", this.pageData.pDiv).closest('div');
            this.tacticField = $("#tacticCampaignCode", this.pageData.pDiv);
            this.sdaErrors = [data.sda_error_1, data.sda_error_2, data.sda_error_3, data.pdf_error_4, data.pdf_error_5];



            //radios
            this.radios = $("input:radio", this.pageData.pDiv);
            this.radios.each(function() {
                IBMCore.common.widget.checkboxradio.init(this);
            });

            //selects
            this.assetType = {};
            this.lang = {};
            this.wwbu = {};
            this.iot = {};


            var allFields = $("input[type=text]", this.pageData.pDiv);

            this.ownerText = $("p.owner", this.pageData.pDiv);
            this.videoTxt = $("p.asset span", this.pageData.pDiv);
            this.fieldData = [];
            this.ownerReady = false;

            $.each(allFields, function(index, val) {
                var obj = {
                    "field": $(val),
                    "isReady": false
                };
                self.fieldData.push(obj);
            });

            this.setUnicaLabel(this.pageData.pData.unica.items, uInfo.campaignCodeVersion);
            this.activateDropInfo(uInfo);
        },

        setUnicaLabel: function(items, version) {

            var self = this;
            $.each(items, function(index, val) {
                if (val.id == version) {

                    self.uVersionTxt.text(val.option);
                    return false;
                }
            })

        },


        activateDropInfo: function(uInfo) {
            var self = this;


            this.unicaVersion = new IBM.mrs.Select($("select#campaignCodeVersion", this.pageData.pDiv), this.pageData.pData.unica, true, this, uInfo);
            this.lang = new IBM.mrs.Select($("select#language", this.pageData.pDiv), this.pageData.pData.languages, true, this, uInfo);
            this.wwbu = new IBM.mrs.Select($("select#wwbu", this.pageData.pDiv), this.pageData.pData.wwbu, false, this, uInfo);
            this.iot = new IBM.mrs.Select($("select#iot", this.pageData.pDiv), this.pageData.pData.iot, false, this, uInfo);
            var selects = [this.wwbu, this.iot];


            //add asset dropdown for ungated
            if (this.isUngated) {
                // console.log("offertype", uInfo.offerType)
                // console.log("assetType", uInfo.assetType)
                this.assetType = new IBM.mrs.Select($("select#offerType", this.pageData.pDiv), this.pageData.pData.offerType, true, this, uInfo);
                //default is pdf
                // this.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                //     "selected": uInfo.offerType,
                //     "name": "offerType"
                // });
            }

            this.fillSelects(uInfo);
            this.activateFields(uInfo);

            //this is kind of crappy
            $(this).bind(IBM.mrs.CONSTANTS.DROP_SELECT, function(event, result) {
                console.log("result", result)
                if (result.selectionName == "language") {
                    self.triggerSelection(null, {
                        "selectionName": "languageText",
                        "id": result.text
                    })
                    self.triggerSelection(null, result)
                } else if (result.selectionName == "wwbu" || result.selectionName == "iot") {
                    //are the business units drop down selected
                    if (result.id == "") {
                        $(".ibm-confirm-link", self.ownerText).hide();
                        $(".ibm-alert-link", self.ownerText).show();
                        self.ownerReady = false;
                    } else {
                        $(".ibm-confirm-link", self.ownerText).show();
                        $(".ibm-alert-link", self.ownerText).hide();
                        self.ownerReady = true;
                    }
                    self.triggerSelection(null, {
                        "selectionName": "optimizelyScriptId",
                        "id": result.id
                    });
                    result.id = result.text;
                    if (result.selectionName == "wwbu") {
                        self.triggerSelection(null, result);
                        self.triggerSelection(null, {
                            "selectionName": "iot",
                            "id": ""
                        })
                    } else {
                        self.triggerSelection(null, result);
                        self.triggerSelection(null, {
                            "selectionName": "wwbu",
                            "id": ""
                        })
                    }
                } else {

                    if (result.selectionName == "campaignCodeVersion") {
                        //change the lbl


                        self.uVersionTxt.text(result.option)
                            //show optional field
                        if (result.id == "7.5") {
                            self.unicaOfferCodeWrapper.hide();
                        } else {
                            self.unicaOfferCodeWrapper.show();
                        }
                        self.tacticField.val("")
                        self.validateTacticCampaignCode(self.tacticField, result.id);
                        self.triggerSelection(null, result);

                    } else if (result.selectionName == "offerType") {
                        if (result.id == "video") {
                            self.videoTxt.show();
                        } else {
                            self.videoTxt.hide();
                        }
                        console.log(result)
                        self.triggerSelection(null, result);

                    }

                }


                self.checkIsReady();

            });

            this.radios.on("ifChecked", function(e) {
                var other = ((e.target.id == 1) ? 0 : 1);
                selects[e.target.id].showHide(true);
                selects[other].showHide(false);
            })

        },

        fillSelects: function(uInfo) {
            var self = this;
            console.log("fill selects")
                //set selects

            if (uInfo.isUngated) {
                //set assetType for ungated
                var offerValue = ((uInfo.assetType) ? uInfo.assetType : uInfo.offerType)

                this.assetType.setSelection(offerValue);
                this.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                    "selected": offerValue,
                    "name": "offerType"
                });
            }


            //set language
            this.lang.setSelection(uInfo.language);
            this.unicaVersion.setSelection(uInfo.campaignCodeVersion);

            //disable tactic code drop and field if already 9.1 and edit
            if (this.isEdit) {
                if (uInfo.campaignCodeVersion == "9.1") {
                    this.tacticField.attr("disabled", "true");
                    this.unicaVersion.disableSelect();
                }
            }


            //if there is uInfo.optimizelyScriptId set and show owner select

            if (uInfo.optimizelyScriptId != "") {

                if (uInfo.optimizelyScriptId.indexOf("BU") != -1) {
                    //it is wwbu
                    $(this.radios[0]).iCheck('check')
                    this.wwbu.showHide(true);
                    this.wwbu.setSelection(uInfo.optimizelyScriptId);

                } else {
                    //it is iot
                    $(this.radios[1]).iCheck('check')
                    this.iot.showHide(true);
                    this.iot.setSelection(uInfo.optimizelyScriptId);
                }
                $(".ibm-confirm-link", self.ownerText).show();
                self.ownerReady = true;
            }
        },

        activateFields: function(uInfo) {
            var self = this;
            var fields = $("input[type=text]", this.pageData.pDiv);

            //fill fields
            $.each(fields, function(index, val) {
                var fieldId = $(val).attr("id");
                var fieldValue = uInfo[fieldId];


                $(this).val(fieldValue);

                //validate 
                if (fieldValue !== "") {
                    self.validateField($(this));
                }

            });



            fields.bind("blur", function(event) {
                event.preventDefault();
                console.log("blur", this)
                self.validateField($(this));
            })

        },

        //VALIDATE FIELDS
        validateField: function(field) {
            var self = this;
            var fVal = field.val();
            var sField = $(field);
            var fieldId = $(field).attr("id");
            var isValid;
            // console.log("fieldId", fieldId)
            if (fieldId == "offerAssetCode") {
                this.validateOfferAssetCode(sField, fVal);

            } else {
                if (fieldId == "nickname") {
                    isValid = IBM.mrs.Validate.validateLength(fVal, 0);
                    self.fieldState(sField, isValid);
                } else if (fieldId == "assetUrl") {

                    this.validateAssetUrl(sField, fVal);
                } else if (fieldId == "tacticCampaignCode") {
                    this.validateTacticCampaignCode(sField, fVal);
                } else if (fieldId == "unicaOfferCode") {
                    // if (fVal.length > 0) {
                    this.triggerSelection(sField);
                    // }
                }
            }
        },

        validateOfferAssetCode: function(sField, fVal) {
            var self = this;
            if (IBM.mrs.Validate.validateLength(fVal, 4)) {
                var ovCode = IBM.mrs.Utils.createOVcode(fVal);
                IBM.mrs.Utils.getData(IBM.mrs.VALIDATE_OV_PATH, "POST", ovCode, function(data) {
                    console.log(data)
                    self.fieldState(sField, data.valid)
                });
            }
        },

        validateAssetUrl: function(sField, fVal) {
            var self = this;
            var isValid;
            var errorDisplay = $(".ibm-error", sField.parent());
            errorDisplay.hide();
            if (!$.isEmptyObject(this.assetType) && this.assetType.getSelectionParams().id == "video") {

                isValid = IBM.mrs.Validate.validateVideoUrl(fVal);
                this.fieldState(sField, isValid);

            } else if (!$.isEmptyObject(this.assetType) && this.assetType.getSelectionParams().id == "pdf") {
                //is it a valid url
                isValid = IBM.mrs.Validate.validateURL(fVal);
                console.log("valid url", isValid)
                if (isValid) {
                    //is it an https url
                    isValid = IBM.mrs.Validate.validateHttpsURL(fVal);

                    if (!isValid) {
                        self.showSDAError(errorDisplay, self.sdaErrors[3]);

                    } else {

                        //does it have a pdf ext
                        if (fVal.toLowerCase().indexOf(".pdf") == -1) {
                            self.showSDAError(errorDisplay, self.sdaErrors[4]);
                            isValid = false;
                        }
                    }
                }


                this.fieldState(sField, isValid);


            } else if (!$.isEmptyObject(this.assetType) && this.assetType.getSelectionParams().id == "sda") {


                var validUrl = IBM.mrs.Validate.validateURL(fVal);
                if (validUrl) {

                    // IBM.mrs.SDALINK_PATH
                    //http://www-01.ibm.com/common/ssi/cgi-bin/ssialias?subtype=WH&infotype=SA&appname=SWGE_YT_HY_USEN&htmlfid=YTW03379USEN&attachment=YTW03379USEN.PDF
                    var obj = {
                        "url": fVal
                    }



                    // console.log("sda link", fVal.indexOf(this.SDA_LINK_PREFIX))
                    if (fVal.indexOf(this.SDA_LINK_PREFIX) != -1) {
                        if (fVal.toLowerCase().indexOf(".pdf") != -1) {
                            this.fieldState(sField, true);
                            return;
                        }

                    }

                    IBM.mrs.Utils.getData(IBM.mrs.VALIDATE_SDA_LINK, "POST", JSON.stringify(obj), function(data) {
                        console.log(data)
                        if (data.valid) {
                            //pass api validation
                            var sdaLink = IBM.mrs.Utils.getSDALink(fVal);
                            console.log(sdaLink)
                            console.log("valid", sdaLink)
                            isValid = ((sdaLink) ? true : false);
                            if (isValid) {
                                //link is in correct format
                                IBM.mrs.Utils.getData(sdaLink, "GET", null, function(data) {
                                    console.log("data", data)
                                        // console.log("NEW LINK", data.rows[0].value.www_http_asset_link)
                                        //there is a returned link
                                    if (data != null && data.rows.length > 0) {

                                        var newAssetLink = data.rows[0].value.www_http_asset_link;
                                        // if (newAssetLink.toLowerCase().indexOf(".pdf") == -1) {
                                        //     // the asset is not a pdf
                                        //     self.showSDAError(errorDisplay, self.sdaErrors[2]);
                                        //     self.fieldState(sField, false);

                                        // } else {
                                        //     //good to go

                                        // }
                                        self.fieldState(sField, isValid);
                                        self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, {
                                            "selected": newAssetLink,
                                            "name": "assetUrlSDA"
                                        });
                                    } else {
                                        //no asset was returned
                                        self.showSDAError(errorDisplay, self.sdaErrors[0]);

                                        self.fieldState(sField, false);
                                    }

                                }, true);
                            } else {
                                //fail front end format 
                                self.showSDAError(errorDisplay, self.sdaErrors[1]);
                                self.fieldState(sField, isValid);
                            }
                        } else {
                            //fail api validation

                            self.showSDAError(errorDisplay, self.sdaErrors[1]);
                            self.fieldState(sField, isValid);

                        }

                    });

                } else {
                    //fail basic url front end validation
                    this.fieldState(sField, validUrl);
                }

            } else {

                isValid = IBM.mrs.Validate.validateURL(fVal);

                if (isValid) {
                    sField.val(IBM.mrs.Utils.formatUrl(fVal));
                }

                this.fieldState(sField, isValid);

            }

        },

        showSDAError: function(div, txt) {
            div.show();
            div.html(txt);
        },




        validateTacticCampaignCode: function(sField, fVal) {
            var isValid;
            var self = this;
            // console.log(this.isEdit, this.currCampaignVersion, this.unicaVersion.getSelectionParams(), this.hasUpdated)
            // if (this.isEdit && this.hasUpdated) {
            //     if (this.currCampaignVersion == "7.5") {
            //         if (this.unicaVersion.getSelectionParams().id == "7.5") {
            //             self.fieldState(sField, false);
            //             alert("please update to 9.1")
            //             return;
            //         }
            //     }
            // }

            var version = ($.isEmptyObject(self.unicaVersion.getSelectionParams()) ? "9.1" : self.unicaVersion.getSelectionParams().id);

            var baseTacticPath = ((version == "7.5") ? IBM.mrs.TACTIC_PATH : IBM.mrs.TACTIC_PATH2);
            var tacticUrl = baseTacticPath.replace("[TACTIC_CODE]", fVal);
            if (fVal.length == 8) {
                console.log(tacticUrl)
                IBM.mrs.Utils.getData(tacticUrl, "GET", null, function(data) {
                    if (version == "7.5") {
                        self.unicaOfferCode.val("");
                        isValid = ((data.records.length > 0) ? true : false);
                        self.fieldState(sField, isValid);
                        self.displayUnicaStatus(isValid, version);
                        self.triggerSelection(null, {
                            "selectionName": "unicaOfferCode",
                            "id": ""
                        })
                    } else {
                        isValid = ((data.records[0].value) ? false : true);

                        self.fieldState(sField, isValid);
                        self.displayUnicaStatus(isValid, version);
                    }
                });
            } else {
                self.fieldState(sField, false);
                self.displayUnicaStatus(false, version);
            }

            // this.hasUpdated = true;

        },

        displayUnicaStatus: function(isValid, version) {
            if (isValid) {
                var uTxt = this.unicaValidTxt.replace("[VERSION]", version);
                this.unicaValid.text(uTxt);
                this.unicaValid.show();
            } else {
                this.unicaValid.hide();
            }
        },


        fieldState: function(field, state) {
            // console.log("fieldState")
            var alertLink = $(".ibm-alert-link", field.parent());
            var confirmLink = $(".ibm-confirm-link", field.parent());
            if (state) {
                confirmLink.show();
                alertLink.hide();
                this.triggerSelection(field);
            } else {
                confirmLink.hide();
                alertLink.show();
            }

            $.each(this.fieldData, function(index, val) {
                if (val.field.attr("id") == field.attr("id")) {
                    val.isReady = state;
                    return false;
                }
            });


            this.checkIsReady();
        },

        triggerSelection: function(field, vals) {
            var obj = {};

            if (field) {

                obj = {
                    "selected": field.val(),
                    "name": field.attr("id")
                }
            } else {
                obj = {
                    "selected": vals.id,
                    "name": vals.selectionName
                }
            }


            this.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, obj);
        },

        checkIsReady: function() {
            var enableNext = true;
            // console.log("checkIsReady")
            // console.log(this.fieldData)
            $.each(this.fieldData, function(index, val) {
                //this is optional for 9.1
                if ($(val.field[0]).attr("id") == "unicaOfferCode") {
                    val.isReady = true;
                }
                if (!val.isReady) {
                    enableNext = false;

                    return false;
                }
            });

            if (!this.ownerReady) {
                return;
            }

            $(".ibm-btn-pri", this.pageData.pDiv).attr("disabled", !enableNext);
        }



    };
}(jQuery));
