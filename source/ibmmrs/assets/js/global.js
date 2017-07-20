(function($) { 
    'use strict';

	window.IBM                            = window.IBM || {};
	IBM.mrs                               = IBM.mrs || {};
	IBM.mrs.uastring                      = window.navigator.userAgent.toLowerCase();
	IBM.mrs.isMobile                      = (/iPhone|iPod|iPad|Android|BlackBerry/i).test(IBM.mrs.uastring) || Modernizr.mq('(max-width: 579px)');
	IBM.mrs.isSafari                      = (IBM.mrs.uastring.indexOf('safari') > 0) && (IBM.mrs.uastring.indexOf('chrome') < 1); // safari on all devices incorrectly reports html5 form validation support
	IBM.mrs.TACTIC_PATH                   = "https://blahblah.com&tactic_cd=[TACTIC_CODE]"; //7.5
	IBM.mrs.TACTIC_PATH2                  = "https://blahblah.com?client_id=6a0062c4-c1d5-4f3f-b547-7629b6dc311f&p_pTacticCode=[TACTIC_CODE]" //9.1
	IBM.mrs.DATA_PATH                     = "assets/data/content.json";
	IBM.mrs.BASE_PATH                     = IBM.mrs.Utils.getBasePath().apiPath;
	IBM.mrs.BASE_LIB_IMG_PATH             = IBM.mrs.Utils.getBasePath().libImgPath;
	IBM.mrs.BASE_API_IMG_PATH             = IBM.mrs.Utils.getBasePath().apiImgPath;
	IBM.mrs.UPLOAD_PATH                   = IBM.mrs.BASE_PATH + "files";
	IBM.mrs.VALIDATE_OV_PATH              = IBM.mrs.BASE_PATH + "validateOffer";
	IBM.mrs.AUTH_PATH                     = IBM.mrs.BASE_PATH + "authenticate";
	IBM.mrs.PRE_PROD_PATH                 = IBM.mrs.BASE_PATH + "invokeFDS";
	IBM.mrs.PROD_PATH                     = IBM.mrs.BASE_PATH + "promoteCampaign";
	IBM.mrs.LIST_FORMS_PATH               = IBM.mrs.BASE_PATH + "listForms";
	IBM.mrs.GET_FORM_DATA_PATH            = IBM.mrs.BASE_PATH + "fetchFormData";
	IBM.mrs.DELETE_FORM                   = IBM.mrs.BASE_PATH + "deleteForm";
	IBM.mrs.VALIDATE_CCT_MIGRATION        = IBM.mrs.BASE_PATH + "validateFormMigrationInfo";

	//migrate form
	IBM.mrs.MIGRATE_CCT                   = IBM.mrs.BASE_PATH + "formMigration";
	IBM.mrs.FETCH_BU                      = IBM.mrs.BASE_PATH + "fetchBusinessUnits";
	IBM.mrs.GET_SDA_LINK                  = "https://blahblah.com?key=%22ECC-[SBSLINKID]%22";
	IBM.mrs.VALIDATE_SDA_LINK             = IBM.mrs.BASE_PATH + "validateSDALink";

	IBM.mrs.LONG_FIELDS                   = []; // defined in content.json
	IBM.mrs.SHORT_FIELDS                  = []; // defined in content.json
	
	IBM.mrs.CONSTANTS                     = IBM.mrs.CONSTANTS || {};
	IBM.mrs.CONSTANTS.TEST_MODE           = true;
	IBM.mrs.CONSTANTS.IMAGE_MIN_WIDTH     = 1600;
	IBM.mrs.CONSTANTS.IMAGE_MIN_HEIGHT    = 1200;
	IBM.mrs.CONSTANTS.DT_PAGE_ROWS        = 10;
	IBM.mrs.CONSTANTS.PAGE_TITLE          = "IBM: MRS";
	//events
	IBM.mrs.CONSTANTS.SHOW_PAGE           = "SHOW_PAGE";
	IBM.mrs.CONSTANTS.SET_SELECTION       = "SET_SELECTION";
	IBM.mrs.CONSTANTS.SET_MULTI_SELECTION = "SET_MULTI_SELECTION";
	IBM.mrs.CONSTANTS.BTN_CLICKED         = "BTN_CLICKED";
	IBM.mrs.CONSTANTS.TOP_NAV_CLICK       = "TOP_NAV_CLICK";
	IBM.mrs.CONSTANTS.EDIT_CLICK          = "EDIT_CLICK";
	IBM.mrs.CONSTANTS.LOGIN_ERROR         = "LOGIN_ERROR";
	IBM.mrs.CONSTANTS.LOGIN_CLICK         = "LOGIN_CLICK";
	IBM.mrs.CONSTANTS.SHOW_LOADER         = "SHOW_LOADER";
	IBM.mrs.CONSTANTS.HIDE_LOADER         = "HIDE_LOADER";
	IBM.mrs.CONSTANTS.SQUIRE_READY        = "SQUIRE_READY";
	IBM.mrs.CONSTANTS.SHOW_LOGIN_MODAL    = "SHOW_LOGIN_MODAL";
	IBM.mrs.CONSTANTS.IMAGE_SELECT        = "IMAGE_SELECT";
	IBM.mrs.CONSTANTS.PREVIOUS            = "PREVIOUS";
	IBM.mrs.CONSTANTS.DROP_SELECT         = "DROP_SELECT";
	IBM.mrs.CONSTANTS.DELETE_FORM         = "DELETE_FORM";
	IBM.mrs.CONSTANTS.CONFIRM_DELETE      = "CONFIRM_DELETE";
	IBM.mrs.CONSTANTS.CLOSE_DELETE_MODAL  = "CLOSE_DELETE_MODAL";
	IBM.mrs.CONSTANTS.DELETE_COMPLETE     = "DELETE_COMPLETE";
	IBM.mrs.CONSTANTS.INPUT_FOCUS         = "INPUT_FOCUS";
	IBM.mrs.CONSTANTS.USER_ENABLED_COOKIE = "user-enabled"; //cookie
	IBM.mrs.CONSTANTS.USER_TOKEN_COOKIE   = "user-token"; //cookie
	IBM.mrs.CONSTANTS.NEW_MODAL_COOKIE    = "modal_enabled"; //cookie
	IBM.mrs.CONSTANTS.RESET_USER_PARAMS   = "RESET_USER_PARAMS";
	IBM.mrs.CONSTANTS.IMAGE_RESET         = "IMAGE_RESET";
	IBM.mrs.CONSTANTS.IMAGE_PRESET        = "IMAGE_PRESET";
	IBM.mrs.CONSTANTS.CLOSE_TABLEDETAIL   = "CLOSE_TABLEDETAIL";




}(jQuery));
