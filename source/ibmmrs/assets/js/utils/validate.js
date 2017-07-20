(function($) { 
    'use strict';

    window.IBM = window.IBM || {};
    IBM.mrs = IBM.mrs || {};

    IBM.mrs.Validate = function() {

    };

    IBM.mrs.Validate.prototype = {

    };

    IBM.mrs.Validate.validateURL = function(url) {
        var URL_REGEX = new RegExp(/(^|\s)(((http|https|ftp)?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi);
        return URL_REGEX.test(url);
    };

    IBM.mrs.Validate.validateHttpsURL = function(url) {
        var nUrl = url.toLowerCase();
        if(nUrl.indexOf("https") != -1 || nUrl.indexOf("ftp") != -1){
            return true;
        }
        return false;
        // var URL_REGEX = new RegExp(/(^|\s)((https:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi);
        // return URL_REGEX.test(url);
    };

    // IBM.mrs.Validate.numbersOnly = function(id) {
    //     var NUM_REGEX = new RegExp('^\\d+$');
    //     return NUM_REGEX.test(id);
    // };



    IBM.mrs.Validate.validateEmail = function(email) {
        var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEX.test(email);
    };


    // IBM.mrs.Validate.validateTacticCode = function(code) {


    //     var CODE_REGEX = new RegExp("^[a-zA-Z0-9]{8}$");
    //     return CODE_REGEX.test(code);

    // };

    IBM.mrs.Validate.validateLength = function(str, len) {
        if (str.length > len) {
            return true;
        }

        return false;
    };


    IBM.mrs.Validate.validateVideoUrl = function(url) {
        if (url.indexOf("vimeo") != -1 || url.indexOf("youtu.be") != -1 || url.indexOf("youtube") != -1) {
            return true;
        }

        return false;


    };




}(jQuery));