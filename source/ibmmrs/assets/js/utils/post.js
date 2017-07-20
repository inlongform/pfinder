(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Post = function() {

    };

    IBM.mrs.Post.prototype = {

    };
    IBM.mrs.Post.removeQuestionsLbls = function(objs) {

        $.each(objs, function(index, val) {
            delete val.lbl;
        })

        return objs;

    };

    IBM.mrs.Post.setImgPath = function(path) {

        // console.log(path.indexOf(IBM.mrs.BASE_LIB_IMG_PATH));
        if (path.indexOf(IBM.mrs.BASE_LIB_IMG_PATH) != -1) {
            return path.replace(IBM.mrs.BASE_LIB_IMG_PATH, IBM.mrs.BASE_API_IMG_PATH);
        }

        return path;
    };

    IBM.mrs.Post.postPreProd = function(props, complete) {

        console.log(props)
        var questions = (((props.formType == "long") ? IBM.mrs.LONG_FIELDS : IBM.mrs.SHORT_FIELDS)).concat(props.optional)


        var requestObj = {
            "applicationId": "web_form_builder",
            "offerAssetCode": props.offerAssetCode,
            "action": props.action,
            "tacticCampaignCode": props.tacticCampaignCode,
            "assetUrl": props.assetUrl,
            "offerGoal": props.offerGoal,
            "responsesGeneratedPurpose": props.responsesGeneratedPurpose,
            "offerType": props.offerType,
            "nickname": props.nickname,
            "title": props.nickname,
            "ibmId": props.ibmId,
            "tryBuyOffersAvailable": ((props.tryBuyOffersAvailable == "No" || props.tryBuyOffersAvailable == "") ? false : true),
            "images": [{

                "position": "",
                "url": ""
            }],
            "campaignCodeVersion": props.campaignCodeVersion,
            "optimizelyScriptId": props.optimizelyScriptId,
            "questions": IBM.mrs.Post.removeQuestionsLbls(questions),
            "language": props.language,
            "isUngated": props.isUngated,
            "unicaOfferCode": props.unicaOfferCode,
            "lastModifiedEmail": ((props.lastModifiedEmail != "")?props.lastModifiedEmail:IBM.mrs.Utils.getCookie(IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE))
        };

        

        //add diff fields for gated and ungated
        if(props.isUngated){
            requestObj["headerTxt"]        = props.headerTxt;
            requestObj["headerBtnTxt"]     = props.headerBtnTxt;
            requestObj["headline"]         = props.headline;
            requestObj["description"]      = props.description;
            requestObj["submitButtonText"] = props.submitButtonText;
            // add assetType for ungated
            // if(requestObj["offerType"] == "pdf"){
            //     if(props.assetUrlSDA != ""){
            //         requestObj["assetUrl"] = props.assetUrlSDA;
            //     }
                
            // }
            requestObj["assetType"]        = props.offerType;
            requestObj["offerType"]        = "incentive";
        }else{
            requestObj["submitButtonText"] = props.submitButtonText;
            requestObj["mainContent"]      = props.mainContent;
        }

        if(props.action == "update"){
            requestObj["source"]      = props.source;
        }


        //for updating the image
        if (props.images && props.images != "" && IBM.mrs.Validate.validateURL(props.images) && !props.imageData) {
            requestObj.images[0].url = IBM.mrs.Post.setImgPath(props.images);

        }

        console.log("requestObj", requestObj);




        if (props.imageData && !props.images) {
            console.log("upload with image")

            IBM.mrs.Utils.uploadImage(props.imageData, function(data) {
                console.log(data)
                requestObj.images[0].url = data.url;
                console.log("image post complete")
                    // complete(testRespose)

                IBM.mrs.Utils.getData(IBM.mrs.PRE_PROD_PATH, "POST", JSON.stringify(requestObj), function(data) {
                    console.log("post pre prod complete with image");
                    console.log(data);
                    complete(data);
                });
            })
        } else {
            console.log("upload no image")
            console.log(requestObj);

            IBM.mrs.Utils.getData(IBM.mrs.PRE_PROD_PATH, "POST", JSON.stringify(requestObj), function(data) {
                console.log("post pre prod complete no image");
                console.log(data);
                complete(data);
            });
        }

        console.log("requestObj", requestObj)

    };

    IBM.mrs.Post.postProd = function(source, complete) {



        IBM.mrs.Utils.getData(IBM.mrs.PROD_PATH, "POST", JSON.stringify({
            "source": source
        }), function(data) {
            console.log("post pre pord complete");
            console.log(data);
            complete(data)
        });
    };
}(jQuery));
