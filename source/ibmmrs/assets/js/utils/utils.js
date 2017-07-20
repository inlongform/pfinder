(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Utils = function() {

    };

    IBM.mrs.Utils.prototype = {

    };



    IBM.mrs.Utils.getBasePath = function() {
        var serverRoot  = document.location.origin;
        //dev server
        var devPath     = "http:/blah.com";
        var basePath    = devPath; 
        var testPath    = "http:/blah.com";
        var prodpath    = "http:/blah.com";
        
        var bluemixDev  = "blah.mybluemix.net";
        var bluemixTest = "blah.mybluemix.net";
        var bluemixProd = "blah.mybluemix.net";
        
        var docPath     = "/blah";

        
        var libImgPath  = "/blah/assets/img/sharedImages/";
        var apiImgPath  = "/blah/formservices/sharedImages/"

        if (serverRoot != "http://mrs.local" && serverRoot != "http://mrsdist.local" && serverRoot != "http://localhost:8080") {
            basePath = serverRoot;

            //check if on Bluemix server
            if (serverRoot.indexOf(bluemixDev) != -1) {
                basePath = devPath;
            } else if (serverRoot.indexOf(bluemixTest) != -1) {
                basePath = testPath;
            } else if (serverRoot.indexOf(bluemixProd) != -1) {
                basePath = prodpath;
            }
        } 


        return {
            "apiPath": basePath + docPath,
            "libImgPath": basePath + libImgPath,
            "apiImgPath": basePath + apiImgPath,
        }



    };


    IBM.mrs.Utils.formatUrl = function(url) {

        if (url.toLowerCase().indexOf("http") == -1) {
            return "http://" + url;
        }
        return url;
    };


    IBM.mrs.Utils.formatHttpsUrl = function(url) {
        if (url.toLowerCase().indexOf("http") == -1) {
            return "https://" + url;
        }
        return url;
    };


    IBM.mrs.Utils.getSectionTitles = function(data) {
        var temp = [];
        $.each(data, function(index, val) {
            temp.push(val.title);
        });

        return {
            "titles": temp
        };
    };

    IBM.mrs.Utils.setCookie = function(cName, cValue, days) {
        var exDays = days;
        var d = new Date();
        d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires;
    };

    IBM.mrs.Utils.getCookie = function(cName) {
        var name = cName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    };

    IBM.mrs.Utils.deleteCookie = function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };



    IBM.mrs.Utils.getData = function(url, type, obj, func, noHead) {
        var _body = $("body");
        _body.trigger(IBM.mrs.CONSTANTS.SHOW_LOADER);
        // console.log(url, type, obj)
        var reqObj = {
            type: type,
            url: url,
            data: obj,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                'Auth-Token': IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_TOKEN_COOKIE)
            },
            success: function(data) {
                // console.log("getData", JSON.stringify(data));
                _body.trigger(IBM.mrs.CONSTANTS.HIDE_LOADER);
                func(data);
            },
            error: function(body, status, error) {
                // console.log(IBM.mrs.AUTH_PATH, url)
                console.log(body)
                console.log(status)
                console.log(error)

                _body.trigger(IBM.mrs.CONSTANTS.HIDE_LOADER);
                if (IBM.mrs.AUTH_PATH != url) {
                    console.log("got here", body.status)
                    if (body.status == 403) {
                        _body.trigger(IBM.mrs.CONSTANTS.SHOW_LOGIN_MODAL);
                        // IBMCore.common.widget.overlay.show('re-login');
                    } else if (body.status == 500 || body.status == 400) {
                        func(null);
                    }
                } else {

                    var obj = {
                        "response": body.responseJSON,
                        "status": status,
                        "error": error,
                        "code": body.status
                    }
                    console.log("got here")

                    func(obj)
                }
            }
        }

        if (noHead) {
            delete reqObj.headers;
        }

        // console.log(reqObj)

        $.ajax(reqObj);
    };



    IBM.mrs.Utils.uploadImage = function(formData, func) {
        $.ajax({
            url: IBM.mrs.UPLOAD_PATH,
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            headers: {
                'Auth-Token': IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_TOKEN_COOKIE)
            },
            success: function(data) {
                func(data)

            },
            error: function(err) {
                func(err)

            }
        });

        return false;
    };

    IBM.mrs.Utils.createUserSelection = function(params) {
        console.log(params)
        var selections = [];
        for (var key in params) {

            var obj = {
                "selected": params[key],
                "name": key
            }
            selections.push(obj);

        }

        var obj = {
            "selections": selections
        }


        return obj;

    };
    IBM.mrs.Utils.formatFormTable = function(data) {
        // console.log("formatFormTable", data)
        $.each(data.forms, function(index, val) {

            val.url            = ((val.isPostedToLive == null || !val.isPostedToLive) ? val.previewUrl : val.liveUrl)
            val.status         = ((val.isPostedToLive == null || !val.isPostedToLive) ? "Draft" : "Published")
            val.isUngated      = ((val.isUngated == null || !val.isUngated) ? "G" : "UG")
            val.language       = ((!val.language) ? "US-English" : val.language);
            val.firstActive    = IBM.mrs.Utils.formatDate(val.firstActive);
            val.timeUpdated    = IBM.mrs.Utils.formatDate(val.timeUpdated);
            val.lastModifiedBy = ((val.lastModifiedBy == "")?val.author:val.lastModifiedBy)
        });

        return data;

    };



    IBM.mrs.Utils.getVidProviderAndId = function(url) {
        //https://www.youtube.com/watch?v=YRF6GLBSTYc
        //https://youtu.be/YRF6GLBSTYc
        //https://vimeo.com/111583802
        var provider = "";
        var id = "";
        var startIndex;

        if (url.indexOf("vimeo") != -1) {
            provider = "vimeo";
            startIndex = url.lastIndexOf("/") + 1;
            id = url.substring(startIndex);
        } else if (url.indexOf("youtu.be") != -1 || url.indexOf("youtube") != -1) {
            provider = "youtube";
            if (url.indexOf("v=") != -1) {
                startIndex = url.lastIndexOf("v=") + 2;
            } else {

                startIndex = url.lastIndexOf("/") + 1;
            }
            id = url.substring(startIndex);

        }

        var obj = {
            "provider": provider,
            "id": id
        }


        return obj;
    };

    IBM.mrs.Utils.setFieldParams = function(params) {
        var fields = [];
        $.each(params, function(index, val) {
            var obj = {};
            fields.push(obj);
            for (var key in val) {
                obj[key] = val[key];
            }
        });
        return fields;
    };
    //test
    //img = https://i.ytimg.com/vi/QDX64IflKqw/maxresdefault.jpg
    //youtube = https://www.youtube.com/watch?v=nblf7Yw4jys
    //youtube = https://youtu.be/nblf7Yw4jys
    //vimeo = https://vimeo.com/152027144

    IBM.mrs.Utils.createUserInfo = function() {
        return {
            "ibmId": "",
            "customerStage": "",
            "offerGoal": "",
            "offerType": "pdf", //default PDF for ungated
            "responsesGeneratedPurpose": "", //dont think this are being used anymore
            "tryBuyOffersAvailable": "", //dont think this are being used anymore
            "nickname": "",
            "offerAssetCode": "", // "ov1004"
            "tacticCampaignCode": "", //7.5 = 2B7BS01Q  9.1 = 000000KZ
            "assetUrl": "",
            "assetUrlSDA": "", //
            "formType": "long", //long/short
            "optional": [], //optional fields
            "title": "",
            "mainContent": "", //for gated
            "submitButtonText": "", // for gated/ungated CTA
            "images": "",
            "imageData": null,
            "previewUrl": "", //
            "liveUrl": "", //
            "source": "mrs-form-746", //mrs-form-794
            "language": "en_US", //default en_US
            "languageText": "U.S. English", //for display on complete default U.S. English
            "isEdit": false,
            "action": "insert",
            "campaignCodeVersion": "9.1", //unica version default 9.1
            "iot": "", //for display on complete iot selector
            "wwbu": "", //for display on complete wwbu selector
            "optimizelyScriptId": "",
            "headerTxt": "", // for ungated
            "headerBtnTxt": "", //for ungated
            "headline": "", //for ungated
            "description": "", //for ungated
            "isUngated": true, //default false
            "unicaOfferCode": "", //optional,
            "replacementFormUrl": "", //
            "isRedirect": false, // redirect clicked in table
            "lastModifiedEmail": ""
        }
    };

    IBM.mrs.Utils.getSDALink = function(url) {
        // http://www-01.ibm.com/common/ssi/cgi-bin/ssialias?subtype=AB&infotype=PM&htmlfid=WSC14505KRKO&attachment=WSC14505KRKO.PDF
        //http://www.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=SWV14041WWEN
        var findVal = "htmlfid=";
        var strtIndex = url.search(findVal);
        if (strtIndex != -1) {

            var endStr = url.substring(strtIndex + findVal.length);
            var endIndex = endStr.search("&");
            var id = "";
            if (endIndex == -1) {
                id = endStr.substring(0);
            } else {
                id = endStr.substring(0, endIndex);
            }

            var finalUrl = IBM.mrs.GET_SDA_LINK.replace("[SBSLINKID]", id);
            return finalUrl;


        }

        return null;


    };
    //9.1 if it starts with a 000
    IBM.mrs.Utils.getCampaignCodeVersion = function(code){

        if(code.substring(0, 3) != "000"){
            return "7.5";
        }
        return "9.1";
    };

    IBM.mrs.Utils.createLogin = function(uname, pass) {
        var obj = {
            "username": uname,
            "password": pass
        }

        return JSON.stringify(obj);
    };

    IBM.mrs.Utils.createOVcode = function(code) {
        // "ov1004"
        var obj = {
            "ovCode": code
        }
        return JSON.stringify(obj);
    };

    IBM.mrs.Utils.createUname = function(code) {
        var obj = {
            "username": IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE)
        }

        return obj;
    };


    IBM.mrs.Utils.createCCTMigrate = function(cctUrl, liveUrl, hasUname) {
        var obj = {
            "pathFinderFormUrl": liveUrl,
            "cctFormUrl": cctUrl,
            "userName": IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE)
        }

        if (!hasUname) {
            delete obj.userName;
        }

        return obj;

        // return {"pathFinderFormUrl":"https://www-matdev2.sby.ibm.com/marketing/iwm/dre/signup?",
        // "cctFormUrl":"https://www-matdev2.sby.ibm.com/marketing/iwm/dre/signup?source=ibm-analytics&S_PKG=ov20840", 
        // "userName": "weinaxa@cn.ibm.com"}
    };


    IBM.mrs.Utils.createListFormCreds = function(bu, role, pageNum, search, orderCol, order) {

        return {
            "username": IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE),
            "buKey": ((bu) ? bu : ""),
            "role": ((role) ? role : ""),
            "orderByColumn": ((orderCol) ? orderCol : "timeUpdated"),
            "order": ((order) ? order : "desc"),
            "pages": ((pageNum) ? pageNum : 1),
            "formNameSearchText": ((search) ? search : ""),
            "rowsPerPage": IBM.mrs.CONSTANTS.DT_PAGE_ROWS
        }


    };


    IBM.mrs.Utils.restructureFilterList = function(list) {

        var items = [];
        $.each(list, function(index, val) {

            var obj = {
                "id": val.buKey,
                "text": val.buDescription,
                "role": val.role
            }
            items.push(obj)

        });

        return items;
    };

    IBM.mrs.Utils.mergeUserInfo = function(uInfo, data) {

        for (var key in data) {
            var val = data[key];
            uInfo[key] = val;

        }

        console.log("mergeUserInfo", uInfo)

        return uInfo;

    };



    IBM.mrs.Utils.createTemplate = function(tempName, data) {
        console.log(tempName)
        var temp_prefix = "source/ibmmrs/assets/hbs/";
        var template = JST[temp_prefix + tempName];

        var context = data;
        var html = template(context);

        return html;
    };

    IBM.mrs.Utils.formatUserInfo = function(lbls, userInfo) {


        $.each(lbls, function(index, val) {
            if (val.id == "optional") {

                var op = [];
                $.each(userInfo[val.id], function(i, v) {
                    op.push(v.lbl);

                });
                //add a space after the comma
                val.selected = op.toString().replace(/,/g, ", ");;
            } else {

                val.selected = ((userInfo[val.id] == "") ? null : userInfo[val.id]);
                if (val.id == "isUngated") {
                    val.selected = ((val.selected) ? "Yes" : "No");
                }
            }

        });

        return lbls;

    };


    IBM.mrs.Utils.stripHeadline = function(html) {

        var end = html.indexOf("</h2>");
        var str = html.substring(0, end).replace("<h2 class='ibm-h2'>", "");
        return str;
    };

    IBM.mrs.Utils.stripContent = function(html) {
        var strt = html.indexOf("</h2>") + 5;

        return html.substring(strt);

    };


    IBM.mrs.Utils.readFile = function(file, complete) {

        var fileInfo = file.files[0];

        if (file.files && file.files[0]) {
            var reader = new FileReader();
            var image = new Image();
            reader.onload = function(e) {

                image.src = e.target.result; // url.createObjectURL(file);

                image.onload = function() {

                    var w = this.width,
                        h = this.height,
                        t = fileInfo.type, // ext only: // file.type.split('/')[1],
                        n = fileInfo.name,
                        s = fileInfo.size;
                    if (w < IBM.mrs.CONSTANTS.IMAGE_MIN_WIDTH || h < IBM.mrs.CONSTANTS.IMAGE_MIN_HEIGHT) {
                        alert("your image is not big enough")

                    } else {
                        complete(n, e.target.result)
                    }

                };
                image.onerror = function() {
                    alert('Invalid file type: ' + file.type);
                };
            };

            reader.readAsDataURL(file.files[0]);
        }
    };

    IBM.mrs.Utils.formatDate = function(d) {
        var str = d.replace(/-/g, '/');

        var index = str.indexOf(".");
        var nDate = str.substring(0, index);

        return new Date(nDate).toDateString()
    };



    // Handlebars.registerHelper("inc", function(value, options) {
    //     return parseInt(value) + 1;
    // });

    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('times', function(v1, v2, options) {
        // console.log(v1, v2)
        var str = "";
        for (var i = 0; i < v1; i++) {
            if ((i + 1) == v2) {
                str += "<a href='#' data-id='" + (i + 1) + "' class='active'>" + (i + 1) + "</a>"
            } else {

                str += "<a href='#' data-id='" + (i + 1) + "'>" + (i + 1) + "</a>"
            }

        }

        return str
    });



}(jQuery));
