(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.App = function() {


        this.START_SECTION   = 1;
        this.start_page      = 0;
        this.NEW_MODAL_DELAY = 250;
        
        this.mainContainer   = $("#ibm-content-main .pages");
        this.faq             = $("#ibm-content-main .faq");
        this.topSections     = $(".top-section");
        // this.footer       = $("#ibm-footer");
        this.contentWrapper  = $("#ibm-content-wrapper");
        this.mastHead        = $("#ibm-masthead");
        this.loader          = $(".loader");
        this.breadcrumbs     = {};
        this.appData         = {};
        this.topNav          = {};
        this.loginOverlay    = {};
        
        this.imageOverlay    = {};
        this.newOverlay      = {};
        this.deleteOverlay   = {};
        this.showNewModal    = false;
        this.bestPractices   = {};
        
        this.myForms         = {};
        this.faqData         = {};
        //pages for each secton are in multi array
        this.allPages = [
            [],
            [],
            []
        ];

        //persistant user data
        this.userInfo = IBM.mrs.Utils.createUserInfo();
        var self = this;
        var History = window.History; // Note: We are using a capital H instead of a lower h      

        History.options.debug = true;

        if (!History.enabled) {

            return false;
        }

        History.Adapter.onDomLoad(function() {

            self.init();

        });


    };

    IBM.mrs.App.prototype = {
        init: function() {
            var self     = this;
            this.body    = $("body");
            this.section = 1;
            this.page    = 0;



            History.Adapter.bind(window, 'statechange', function() {
                var state = History.getState();
                var sData = state.data;

                // console.log(sData)

                if (sData.section) {
                    self.section = sData.section;
                }
                if (sData.page) {
                    self.page = sData.page
                }

                if (sData.hasOwnProperty("tab")) {
                    self.topNav.swapActive(sData.id)
                    self.setTopSection(sData.tab);
                } else {
                    self.setTopSection("pages");
                    self.topNav.swapActive(4);
                    self.showPage(sData.section, sData.page);
                }
                // self.body.trigger(IBM.mrs.CONSTANTS.SHOW_LOADER);


            });

            //events/////////////
            this.body.bind(IBM.mrs.CONSTANTS.SHOW_LOADER, function(event) {
                self.loader.show();
            });
            this.body.bind(IBM.mrs.CONSTANTS.HIDE_LOADER, function(event) {
                self.loader.hide();
            });

            this.body.bind(IBM.mrs.CONSTANTS.SHOW_PAGE, function(event, result) {
                console.log("show page")
                var info = {
                    "page": result.page,
                    "section": result.section,
                    "date": new Date()
                }
                History.pushState(info, IBM.mrs.CONSTANTS.PAGE_TITLE, "?page=" + result.page + "&section=" + result.section);

            });

            this.body.bind(IBM.mrs.CONSTANTS.PREVIOUS, function(event) {
                // console.log("back", History.getState());
                // console.log(History.getCurrentIndex())

                History.back();
            });

            this.body.bind(IBM.mrs.CONSTANTS.LOGIN_CLICK, function(event, result) {
                self.login(result);
            });

            this.body.bind(IBM.mrs.CONSTANTS.TOP_NAV_CLICK, function(event, result) {
                var info = {
                    "tab": result.tab,
                    "id": result.id,
                    "date": new Date()
                }


                History.pushState(info, IBM.mrs.CONSTANTS.PAGE_TITLE, "?tab=" + result.tab);
            })

            this.body.bind(IBM.mrs.CONSTANTS.SET_SELECTION, function(event, result) {
                self.userInfo[result.name] = result.selected;
                if (result.formType) {
                    self.userInfo["formType"] = result.formType;
                }
                // console.log("--------------------")
                // console.log("set_selection", result.name, result.selected)

                // console.log(self.userInfo)

                // console.log("--------------------")
            });

            this.body.bind(IBM.mrs.CONSTANTS.SET_MULTI_SELECTION, function(event, result) {

                $.each(result.selections, function(index, val) {
                    self.userInfo[val.name] = val.selected;
                });
                // console.log("-----multi selection---------------")
                // console.log(self.userInfo)
                // console.log("--------------------")

            });

            this.body.bind(IBM.mrs.CONSTANTS.EDIT_CLICK, function(event, result) {
                self.editCustomize(result);
            });

            this.body.bind(IBM.mrs.CONSTANTS.DELETE_FORM, function(event, result) {
                self.deleteForm(result);
            });

            //new form clicked or start over reset user info
            this.body.bind(IBM.mrs.CONSTANTS.RESET_USER_PARAMS, function() {
                self.userInfo = IBM.mrs.Utils.createUserInfo();
                var uIdCookie = IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE);
                self.userInfo.ibmId = ((uIdCookie) ? uIdCookie : "");
            });




            this.body.bind(IBM.mrs.CONSTANTS.SHOW_LOGIN_MODAL, function(event) {
                //dont append overlay until needed
                console.log("SHOW_LOGIN_MODAL", sData)
                var state = History.getState();
                var sData = state.data;
                //dont do this on the login page
                if (!self.loginOverlay.hasInserted()) {
                    self.loginOverlay.insertOverlay();
                    IBMCore.common.widget.overlay.show('re-login');
                } else {
                    IBMCore.common.widget.overlay.show('re-login');
                }

            });




            //start/////////////
            IBM.mrs.Utils.getData(IBM.mrs.DATA_PATH, "GET", null, function(data) {
                // console.log(data)
                self.appData         = data.content;
                self.deleteData      = data.delete_overlay;
                self.faqData         = data.faq;
                IBM.mrs.LONG_FIELDS  = IBM.mrs.Utils.setFieldParams(data.field_params_long);
                IBM.mrs.SHORT_FIELDS = IBM.mrs.Utils.setFieldParams(data.field_params_short);
                self.breadCrumbs     = new IBM.mrs.Breadcrumbs(data.content);
                self.topNav          = new IBM.mrs.TopNav();
                self.loginOverlay    = new IBM.mrs.LoginOverlay(data.login_overlay);
                self.imageOverlay    = new IBM.mrs.ImageOverlay(data.image_overlay)
                self.bestPractices   = new IBM.mrs.ResourcePage(data.best_practices);
                self.myForms         = new IBM.mrs.FormsPage(data.my_forms)



                if (data.new_overlay.enabled) {
                    self.newOverlay = new IBM.mrs.NewOverlay(data.new_overlay);
                }


                var uIdCookie = IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE);


                if (!IBM.mrs.CONSTANTS.TEST_MODE) {

                    self.START_SECTION = 0;
                    self.start_page = 0;

                    if (uIdCookie) {
                        self.userInfo.ibmId = uIdCookie;
                        self.start_page = data.loggedInStartId;
                        self.topNav.showNav(true);
                    }
                } 



                console.log("user token", IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_TOKEN_COOKIE))

                var info = {
                        "page": self.start_page,
                        "section": self.START_SECTION,
                        "date": new Date()
                    }
                    // console.log(info)
                    //this is to show the resource page remove when complete
                    // self.body.trigger(IBM.mrs.CONSTANTS.TOP_NAV_CLICK, {"topId": 1});
                History.pushState(info, IBM.mrs.CONSTANTS.PAGE_TITLE, "?page=" + self.start_page + "&section=" + self.START_SECTION);


            }, true);
        },

        // resetUserInfo: function(){
        //     console.log("resetUserInfo")
        //     this.userInfo = IBM.mrs.Utils.createUserInfo();
        // },

        deleteForm: function(formData) {

            var self = this;
            this.deleteData.nickName = formData.nickName;
            if ($.isEmptyObject(this.deleteOverlay)) {

                this.deleteOverlay = new IBM.mrs.NewOverlay(this.deleteData);

            } else {
                this.deleteOverlay.changeFormName(this.deleteData.nickName)
            }

            IBMCore.common.widget.overlay.show('delete-overlay');


            //show delete confirm
            this.body.bind(IBM.mrs.CONSTANTS.CONFIRM_DELETE, function(event, result) {
                console.log("confirm delete");

                var sourceId = { "source": formData.source };
                IBM.mrs.Utils.getData(IBM.mrs.DELETE_FORM, "POST", JSON.stringify(sourceId), function(data) {
                    // remove from the table
                    var deleteOk = false;
                    console.log(data)
                    $.each(data.returnCodes, function(index, val) {
                        if (val.code == 0) {
                            deleteOk = true;
                            return false;
                        }
                    });

                    if (deleteOk) {

                        self.body.trigger(IBM.mrs.CONSTANTS.CLOSE_DELETE_MODAL, formData);
                        self.body.trigger(IBM.mrs.CONSTANTS.DELETE_COMPLETE, formData);
                        self.body.unbind(IBM.mrs.CONSTANTS.CONFIRM_DELETE);
                    } else {
                        alert("error deleting form, please try again")
                    }

                });
            });

            //close the modal
            this.body.bind(IBM.mrs.CONSTANTS.CLOSE_DELETE_MODAL, function(event) {
                IBMCore.common.widget.overlay.hide('delete-overlay');
                self.body.unbind(IBM.mrs.CONSTANTS.CLOSE_DELETE_MODAL);
            });
        },


        editCustomize: function(info) {
            var self = this;
            IBM.mrs.Utils.getData(IBM.mrs.GET_FORM_DATA_PATH, "POST", JSON.stringify({ "source": info.source }), function(data) {

                console.log("////////////////")
                console.log("editCustomize", data);

                self.userInfo                     = IBM.mrs.Utils.mergeUserInfo(self.userInfo, data);

                //overwrite the returned ibmid with the cookie id
                // self.userInfo.ibmId               = IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE);
                self.userInfo.languageText        = info.languageTxt;
                self.userInfo.isEdit              = true;
                self.userInfo.action              = "update";
                self.userInfo.lastModifiedEmail   = IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE);
                self.userInfo.campaignCodeVersion = IBM.mrs.Utils.getCampaignCodeVersion(data.tacticCampaignCode);
                self.breadCrumbs.showHide(true);

                //for changing the redirect
                self.userInfo.liveUrl             = ((info.liveUrl)?info.liveUrl:"");
                self.userInfo.isRedirect          = ((info.liveUrl)?true:false);
                self.userInfo.formType            = ((self.userInfo.questions.length == IBM.mrs.SHORT_FIELDS.length) ? "short" : "long");
                console.log("---------------")
                console.log(self.userInfo)



                var obj = {
                    "section": info.section,
                    "page": info.page
                }
                $("body").trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, obj);
            });
        },





        setFaqPage: function(data) {
            var template = IBM.mrs.Utils.createTemplate(data.template, data);
            this.faq.append(template);
            $(".ibm-show-hide", this.faq).showhide();
        },

        setTopSection: function(tab) {
            this.topSections.hide();


            if (tab) {
                // console.log($("." + tab))
                // console.log($("." + tab).has("div").length)
                $("." + tab).show()
                if ($("." + tab).has("div").length <= 0) {

                    if (tab == "best-practices") {
                        this.bestPractices.init();
                    } else if (tab == "faq") {
                        this.setFaqPage(this.faqData);
                    } else if (tab == "my-forms") {
                        this.myForms.init();
                    }
                }

            } else {
                $(this.topSections[0]).show();
            }

        },



        showPage: function(section, page) {
            var self = this;



            var pageData = this.appData[section].pages[page];
            this.breadCrumbs.changeState(section, page, pageData.bread_yposition);
            // console.log(section, page);
            // console.log(pageData)
            //show new features modal
            var newModalCookie = IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.NEW_MODAL_COOKIE);

            if (!$.isEmptyObject(this.newOverlay) && pageData.show_new && !newModalCookie) {

                //inteval because modal is not init
                if (!this.showNewModal) {
                    setTimeout(function() {
                        self.showNewModal = true;
                        IBMCore.common.widget.overlay.show('new-overlay');
                        //cancel new modal cookie after 24 hours
                        IBM.mrs.Utils.setCookie(IBM.mrs.CONSTANTS.NEW_MODAL_COOKIE, true, 1);
                    }, this.NEW_MODAL_DELAY);

                }
            }
            $(".page", this.mainContainer).hide();

            var availableDiv = this.mainContainer.find($("#" + pageData.name));

            // console.log(availableDiv)
            var page = {};

            if (pageData.template == "complete_tmp" || pageData.template == "customize_tmp" || pageData.template == "fields_tmp") {
                if (availableDiv.length >= 1) {
                    availableDiv.remove();
                }
                //remove the complete page so we can get the new user vars
                page = new IBM.mrs.PageController(pageData, this.userInfo);
                if (pageData.name == "success") {
                    this.breadCrumbs.changeState(section + 1, page);
                }
            } else {

                if (availableDiv.length >= 1) {
                    this.mainContainer.append(availableDiv);
                    availableDiv.show();
                } else {

                    page = new IBM.mrs.PageController(pageData, this.userInfo);
                    this.allPages[section].push(page);
                }
            }
            console.log(this.allPages)
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        },

        login: function(params) {
            var self        = this;
            var div         = params.wrapper;
            var wrapperName = div.attr("id");
            var btnData     = params.data;
            var uVal        = $("input[type=text]", div).val();
            var pField      = $("input[type=password]", div);
            var pVal        = pField.val();
            var pError      = $(".ibm-error", div);

            var isValidEmail = IBM.mrs.Validate.validateEmail(uVal);



            if (uVal.length <= 0 || !isValidEmail) {

                alert("please enter a valid username");
                return;
            }

            if (pVal.length <= 0) {
                alert("please enter a password");
                return;
            }

            var credentials = IBM.mrs.Utils.createLogin(uVal, pVal);


            IBM.mrs.Utils.getData(IBM.mrs.AUTH_PATH, "POST", credentials, function(data) {
                console.log(data)
                var isAuthorized;
                if (data.hasOwnProperty("authorized")) {
                    isAuthorized = data.authorized;
                } else {
                    isAuthorized = data.response.authorized;
                }

                if (!isAuthorized) {
                    pError.show();
                    self.topNav.showNav(false);
                } else {
                    pError.hide();
                    self.topNav.showNav(true);
                    IBM.mrs.Utils.setCookie(IBM.mrs.CONSTANTS.USER_TOKEN_COOKIE, data.token, 1);
                    IBM.mrs.Utils.setCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE, uVal, 1);
                    var userObj = {
                        "selected": uVal,
                        "name": "ibmId",
                    }
                    self.body.trigger(IBM.mrs.CONSTANTS.SET_SELECTION, userObj);

                    if (wrapperName == "login") {
                        var obj = {
                            "section": btnData.section,
                            "page": btnData.next
                        }
                        self.body.trigger(IBM.mrs.CONSTANTS.SHOW_PAGE, obj);

                    } else {
                        IBMCore.common.widget.overlay.hide('re-login');
                    }
                }
            })

        }
    };
    $(function() {

    });
}(jQuery));
