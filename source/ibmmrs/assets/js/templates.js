this["JST"] = this["JST"] || {};

this["JST"]["source/ibmmrs/assets/hbs/asset_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "	<img src=\""
    + this.escapeExpression(((helper = (helper = helpers.assetUrl || (depth0 != null ? depth0.assetUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"assetUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"asset ibm-padding-bottom-30\"/>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isPdf : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "	<iframe src=\""
    + this.escapeExpression(((helper = (helper = helpers.assetUrl || (depth0 != null ? depth0.assetUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"assetUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-padding-bottom-30\"></iframe>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isYoutube : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<div class=\"vid\" data-widget=\"videoplayer\" data-videodisplay=\"inline\" data-titledisplaytype=\"overlay\" data-videoid=\""
    + alias3(((helper = (helper = helpers.vidId || (depth0 != null ? depth0.vidId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vidId","hash":{},"data":data}) : helper)))
    + "\" data-videotype=\"youtube\" href=\"https://www.youtube.com/watch?v="
    + alias3(((helper = (helper = helpers.vidId || (depth0 != null ? depth0.vidId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vidId","hash":{},"data":data}) : helper)))
    + "\">Default content here.</div> \n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isVimeo : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    var helper;

  return "	<iframe src=\"https://player.vimeo.com/video/"
    + this.escapeExpression(((helper = (helper = helpers.vidId || (depth0 != null ? depth0.vidId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"vidId","hash":{},"data":data}) : helper)))
    + "?color=ffffff&portrait=0\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isImg : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n\n\n<!-- 153855962\nktPbvMqY_rQ\nyoutube v18: <div class=\"vid\" data-widget=\"videoplayer\" data-videodisplay=\"inline\" data-titledisplaytype=\"overlay\" data-videoid=\""
    + this.escapeExpression(((helper = (helper = helpers.video_id || (depth0 != null ? depth0.video_id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"video_id","hash":{},"data":data}) : helper)))
    + "\" data-videotype=\"youtube\" href=\"https://www.youtube.com/watch?v=0uje575Dewc&index=1&list=WL\">Default content here.</div> \nvimeo: <iframe src=\"https://player.vimeo.com/video/153855962?color=ffffff&portrait=0\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-->";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/breadcrumbs_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "\n            <div class=\"ibm-col-6-2\">\n                <div class=\"hrule\" ></div>\n                <div class=\"step\"></div>\n                <p>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</p>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"ibm-columns\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.titles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n\n\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/btns_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "background-position: 0 "
    + this.escapeExpression(((helper = (helper = helpers.section_yposition || (depth0 != null ? depth0.section_yposition : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"section_yposition","hash":{},"data":data}) : helper)))
    + ";";
},"3":function(depth0,helpers,partials,data) {
    return "display: none;";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p class=\"ibm-padding-top-30\">"
    + ((stack1 = ((helper = (helper = helpers.sub_copy || (depth0 != null ? depth0.sub_copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"sub_copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "                \n                    <input type=\"button\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\">\n               \n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"ibm-padding-top-30 tips\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tips : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <a href=\"#\" class=\"tooltip\" data-widget=\"tooltip\" data-contentid=\"e-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.tooltip_title || (depth0 != null ? depth0.tooltip_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_title","hash":{},"data":data}) : helper)))
    + "</a>\n                       <div id=\"e-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-tooltip-content\">\n                            <h5 class=\"ibm-h5 ibm-bold\">"
    + alias3(((helper = (helper = helpers.tooltip_title || (depth0 != null ? depth0.tooltip_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_title","hash":{},"data":data}) : helper)))
    + "</h5>\n                            "
    + ((stack1 = ((helper = (helper = helpers.tooltip_txt || (depth0 != null ? depth0.tooltip_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                       \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page btns_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-4\">\n\n                <div class=\"gate ibm-padding-bottom-30\">\n                    <div class=\"section_icon\" style=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.section_yposition : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\"></div>\n                    <h2 class=\"ibm-h2\">"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n                    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.sub_copy : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                </div>\n\n\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                \n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.tips : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <div class=\"ibm-band bottom-btn-bar\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <p><a href=\"#\" class=\"ibm-btn-sec previous\">"
    + ((stack1 = ((helper = (helper = helpers.previous_btn_txt || (depth0 != null ? depth0.previous_btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previous_btn_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></p>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/complete_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "background-position: 0 "
    + this.escapeExpression(((helper = (helper = helpers.section_yposition || (depth0 != null ? depth0.section_yposition : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"section_yposition","hash":{},"data":data}) : helper)))
    + ";";
},"3":function(depth0,helpers,partials,data) {
    return "visibility: hidden;";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "                                "
    + this.escapeExpression(((helper = (helper = helpers.copy_ungated || (depth0 != null ? depth0.copy_ungated : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copy_ungated","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "                                "
    + this.escapeExpression(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "                        <a href=\"#\" onClick=\"return false;\" class=\"tooltip\" data-widget=\"tooltip\" data-contentid=\"test-tt-1\">"
    + this.escapeExpression(((helper = (helper = helpers.tooltip_title || (depth0 != null ? depth0.tooltip_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_title","hash":{},"data":data}) : helper)))
    + "</a>\n                        <div id=\"test-tt-1\" class=\"ibm-tooltip-content\">\n                            "
    + ((stack1 = ((helper = (helper = helpers.tooltip_txt || (depth0 != null ? depth0.tooltip_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " \n\n                        </div>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <table cellpadding=\"0\" cellspacing=\"0\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.uInfo : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </table>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                    <tr>\n                                        <td>"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</td>\n                                        <td>"
    + alias3(((helper = (helper = helpers.selected || (depth0 != null ? depth0.selected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"selected","hash":{},"data":data}) : helper)))
    + "</td>\n                                    </tr>\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <div class=\"ibm-col-6-4 ibm-padding-bottom-60\">\n                <h4 class=\"ibm-h4\">"
    + ((stack1 = this.lambda(((stack1 = (depth0 != null ? depth0.form_selection : depth0)) != null ? stack1.required : stack1), depth0)) != null ? stack1 : "")
    + "</h4>\n            </div>\n            <div class=\"ibm-col-6-4 ibm-left\">\n                <div class=\"half-width\">\n                    <p>"
    + this.escapeExpression(((helper = (helper = helpers.required_title || (depth0 != null ? depth0.required_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"required_title","hash":{},"data":data}) : helper)))
    + "</p>\n                    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.form_params : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n                <div class=\"half-width\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showCheckboxes : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n";
},"16":function(depth0,helpers,partials,data) {
    return "                            <li>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"18":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "                        <p>"
    + this.escapeExpression(((helper = (helper = helpers.optional_title || (depth0 != null ? depth0.optional_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"optional_title","hash":{},"data":data}) : helper)))
    + "</p>\n                        <p class=\"ibm-padding-bottom-30 ibm-fontsize-body\">"
    + ((stack1 = ((helper = (helper = helpers.optional_txt || (depth0 != null ? depth0.optional_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"optional_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                        <form id=\"optional_fields\" class=\"ibm-form-elem-grp\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.checkBoxes : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </form>\n";
},"19":function(depth0,helpers,partials,data) {
    var stack1;

  return "                                <div class=\"ibm-col-6-2\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </div>\n";
},"20":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                        <span class=\"cBox\">\n                                            <input id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\"optGrp\" type=\"checkbox\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-required=\""
    + alias3(((helper = (helper = helpers.required || (depth0 != null ? depth0.required : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"required","hash":{},"data":data}) : helper)))
    + "\" data-lbl=\""
    + alias3(((helper = (helper = helpers.lbl || (depth0 != null ? depth0.lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lbl","hash":{},"data":data}) : helper)))
    + "\"/> <label for=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.lbl || (depth0 != null ? depth0.lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lbl","hash":{},"data":data}) : helper)))
    + "</label><br/>\n                                        </span> \n";
},"22":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "              \n                <div class=\"ibm-col-6-5\">\n                    <div class=\"pre-prod-wrap\">                                \n                        <p class=\"ibm-padding-bottom-30\">"
    + this.escapeExpression(((helper = (helper = helpers.success_copy || (depth0 != null ? depth0.success_copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"success_copy","hash":{},"data":data}) : helper)))
    + "</p>\n                        <p>"
    + ((stack1 = ((helper = (helper = helpers.body_copy || (depth0 != null ? depth0.body_copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body_copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                    </div>\n                </div>\n\n                \n                     \n";
},"24":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"ibm-band\">\n            <div class=\"ibm-columns \">\n                <div class=\"ibm-col-6-5 ibm-padding-top-30 ibm-padding-bottom-30\">\n                    <div class=\"preview-link\">\n                        <div class=\"inner\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.is_preprod2 : depth0),{"name":"if","hash":{},"fn":this.program(25, data, 0),"inverse":this.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.ready_copy : depth0),{"name":"if","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    \n                   \n                </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.is_complete : depth0),{"name":"if","hash":{},"fn":this.program(31, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n";
},"25":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                <p><a href=\""
    + alias3(((helper = (helper = helpers.previewUrl || (depth0 != null ? depth0.previewUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previewUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.previewUrl || (depth0 != null ? depth0.previewUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previewUrl","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"27":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                <p><a href=\""
    + alias3(((helper = (helper = helpers.liveUrl || (depth0 != null ? depth0.liveUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"liveUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.liveUrl || (depth0 != null ? depth0.liveUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"liveUrl","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"29":function(depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"ibm-h2 ibm-padding-top-60\">"
    + this.escapeExpression(((helper = (helper = helpers.ready_copy || (depth0 != null ? depth0.ready_copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ready_copy","hash":{},"data":data}) : helper)))
    + "</h2>";
},"31":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <div id=\"redirect\">\n                        <div class=\"ibm-col-6-5 ibm-padding-top-30 ibm-padding-bottom-30\">\n                            <form id=\"redirect-box\" class=\"ibm-form-elem-grp\">                                                  \n                                <input id=\"redirect-field\" name=\"redirect-grp\" type=\"checkbox\" value=\"yes\" /> <label for=\"redirect\">Redirect an existing CCT form to this new Pathfinder URL.</label>\n                                \n                            </form>\n                        </div>\n                        <div class=\"ibm-col-6-5 redirect-controls\">\n                            <form class=\"ibm-column-form\">\n\n                                <h2 class=\"ibm-h2\">"
    + this.escapeExpression(((helper = (helper = helpers.cct_copy || (depth0 != null ? depth0.cct_copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"cct_copy","hash":{},"data":data}) : helper)))
    + "</h2>\n                                <p><input type=\"text\" value=\"\" size=\"40\" maxlength=\"255\" id=\"redirect-link\" name=\"redirect-link\" placeholder=\"http://\"><input type=\"button\" value=\"Submit\" class=\"ibm-btn-pri submit\"></p>\n                                <span class=\"ibm-item-note success\"></span>\n                                <span class=\"ibm-item-note error\"></span>\n\n                            </form>\n                        </div>\n                    </div>\n";
},"33":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                        <a href=\"#\" class=\"ibm-btn-sec previous\">"
    + ((stack1 = ((helper = (helper = helpers.previous_btn_txt || (depth0 != null ? depth0.previous_btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"previous_btn_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a> \n";
},"35":function(depth0,helpers,partials,data) {
    return "                        <a href=\"#\" class=\"ibm-btn-sec previous\" style=\"visibility:hidden\">&nbsp;</a> \n";
},"37":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <p>\n                        <input type=\"button\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\">\n                    </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page complete_tmp ibm-padding-top-30\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-4\">\n                <div class=\"gate\">\n                    <div class=\"section_icon\" style=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.section_yposition : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\"></div>\n                    <h2 class=\"ibm-h2\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n                    </h2> \n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.tooltip_txt : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.uInfo : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n        <div class=\"ibm-columns\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.form_params : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.is_preprod2 : depth0),(depth0 != null ? depth0.is_complete : depth0),{"name":"ifCond","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.is_preprod2 : depth0),(depth0 != null ? depth0.is_complete : depth0),{"name":"ifCond","hash":{},"fn":this.program(24, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"ibm-band bottom-btn-bar\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <p>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.previous_btn_txt : depth0),{"name":"if","hash":{},"fn":this.program(33, data, 0),"inverse":this.program(35, data, 0),"data":data})) != null ? stack1 : "")
    + "                </p>\n            </div>\n            <div class=\"ibm-col-6-3\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(37, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/customize_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "ungated";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p>"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"ibm-form-elem-grp clearfix\">\n                            \n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isTextArea : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                <h4 class=\"ibm-h4\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n                                <p><textarea id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"uField\"></textarea></p>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                <h4 class=\"ibm-h4\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n                                <p><input type=\"text\" value=\"\" maxlength=\"255\" size=\""
    + alias3(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"width","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" class=\"uField\"></p>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "                        <div class=\"ibm-form-elem-grp\">\n                            <h4 class=\"ibm-h4\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n                            <p><input type=\"text\" value=\"\" maxlength=\"255\" size=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.width : stack1), depth0))
    + "\" id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.placeholder : stack1), depth0))
    + "\" class=\"uField\">\n                            \n                        </div>\n                        <div class=\"ibm-form-elem-grp\">\n                            <h4 class=\"ibm-h4\">"
    + alias2(((helper = (helper = helpers.body_copy || (depth0 != null ? depth0.body_copy : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"body_copy","hash":{},"data":data}) : helper)))
    + "</h4>\n                            <div class=\"edit-content\">\n                                <textarea id=\"foo\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"ibm-form-elem-grp clearfix\">\n                            <h4 class=\"ibm-h4\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n                            <p>\n                                <input type=\"text\" value=\"\" maxlength=\"255\" size=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.width : stack1), depth0))
    + "\" id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.fields : depth0)) != null ? stack1['1'] : stack1)) != null ? stack1.placeholder : stack1), depth0))
    + "\" class=\"uField\">\n                            </p>\n                        </div>\n                        <div class=\"ibm-form-elem-grp clearfix\">\n                            <h4 class=\"ibm-h4\">"
    + alias2(((helper = (helper = helpers.bck_title_copy || (depth0 != null ? depth0.bck_title_copy : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"bck_title_copy","hash":{},"data":data}) : helper)))
    + "</4>\n                            <p>"
    + ((stack1 = ((helper = (helper = helpers.bck_info_copy || (depth0 != null ? depth0.bck_info_copy : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"bck_info_copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                            <div class=\"ibm-form-elem-grp img_preview\">\n                        <p>\n                            <img src=\"\" />\n                            <a href=\"#\" class=\"reset_btn\">"
    + alias2(((helper = (helper = helpers.reset_copy || (depth0 != null ? depth0.reset_copy : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"reset_copy","hash":{},"data":data}) : helper)))
    + "</a>\n                        </p>\n                    </div>\n                            <div class=\"ibm-padding-top-30\">\n                                <div class=\"image-btns upload-btns\">\n\n                                    <form id=\"uploadForm\">\n                                        \n                                            <input id=\"upload-file\" type=\"file\" class=\"inputfile\" name=\"uploadedFile\" />\n                                            <label for=\"upload-file\" class=\"iupload image-btn\">\n                                                <span class=\"prev-icon\"></span>\n                                                <p>"
    + ((stack1 = ((helper = (helper = helpers.upload_btn || (depth0 != null ? depth0.upload_btn : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"upload_btn","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                                            </label>\n                                        \n                                    </form>\n                         \n                                        <a href=\"#\" class=\"iselect_btn image-btn\">\n                                            <span class=\"prev-icon\"></span>\n                                            <p>"
    + ((stack1 = ((helper = (helper = helpers.select_btn || (depth0 != null ? depth0.select_btn : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"select_btn","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                                        </a>\n                                </div>\n             \n                            </div>\n                        </div>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                            <div class=\"tips\" data-id=\""
    + this.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "                                    <div class=\"ibm-padding-top-30\">\n                                        <p class=\"ibm-bold\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n                                        <p>"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                                    </div>\n";
},"16":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <p>\n                        <input type=\"button\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri save\">\n                    </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page customize_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-1-1 ibm-padding-bottom-60\">\n                <h2 class=\"ibm-h2 "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    \n                    "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                </h2>\n\n                "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.copy : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <div class=\"ibm-column-form\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                    <div class=\"preview_btns\">\n\n                        <a href=\"#\" class=\"desktop-preview preview-btn\">Preview Desktop</a>\n                         <a href=\"#\" class=\"mobile-preview preview-btn\">Preview Mobile</a>\n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"ibm-col-6-3 instructions\">\n                <div class=\"info-inner\">\n                    <div class=\"inner\">\n                        <div class=\"img-clip\">\n                            <div class=\"img-step\" style=\"background: url("
    + alias3(((helper = (helper = helpers.backImage || (depth0 != null ? depth0.backImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backImage","hash":{},"data":data}) : helper)))
    + ") left top no-repeat; height: "
    + alias3(((helper = (helper = helpers.imgHeight || (depth0 != null ? depth0.imgHeight : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imgHeight","hash":{},"data":data}) : helper)))
    + "\"></div>\n                        </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                    \n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"ibm-band bottom-btn-bar\">\n            <div class=\"ibm-columns\">\n                <div class=\"ibm-col-6-3\">\n                    <p><a href=\"#\" class=\"ibm-btn-sec previous\">"
    + ((stack1 = ((helper = (helper = helpers.previous_btn_txt || (depth0 != null ? depth0.previous_btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previous_btn_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></p>\n                </div>\n                <div class=\"ibm-col-6-3\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/deleteOver_tmp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"ibm-common-overlay ibm-overlay-alt-two\" data-widget=\"overlay\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"top-bar ibm-background-blue-20\">\n            <div class=\"icon-wrap\">\n                <h2 class=\"ibm-h2\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n            </div>\n            \n        </div>\n        <div class=\"info ibm-padding-top-60 ibm-padding-bottom-30\">\n\n		    <h4 class=\"ibm-h4\">"
    + alias3(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + " <span class=\"nickname\">\""
    + alias3(((helper = (helper = helpers.nickName || (depth0 != null ? depth0.nickName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nickName","hash":{},"data":data}) : helper)))
    + "\"</span> ?</h4>\n		    <p class=\"delete-note ibm-padding-top-30\">"
    + alias3(((helper = (helper = helpers.sub_copy || (depth0 != null ? depth0.sub_copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sub_copy","hash":{},"data":data}) : helper)))
    + "</p>\n		    <div class=\"ibm-padding-top-30\">\n		        <input type=\"button\" value=\""
    + alias3(((helper = (helper = helpers.btn_lbl || (depth0 != null ? depth0.btn_lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"btn_lbl","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\">\n		    </div>\n        </div>\n</div>";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/faq_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                <h2 class=\"ibm-h2 ibm-padding-top-60\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n                <div data-widget=\"showhide\" data-type=\"panel\" class=\"ibm-show-hide ibm-background-neutral-white-30\">               \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    \n                </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "                        <h2>"
    + this.escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"question","hash":{},"data":data}) : helper)))
    + "</h2>\n                        <div class=\"ibm-container-body ibm-background-neutral-white-30\">\n                            "
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "<div class=\"faq_tmp\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band ibm-padding-bottom-60\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-1-1\">\n                <h1 class=\"ibm-h1\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n            </div>\n        </div>\n        <div class=\"ibm-columns\" id=\"answers\">\n            <div class=\"ibm-col-1-1\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.group : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/fields_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "ungated";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "                        "
    + this.escapeExpression(((helper = (helper = helpers.copy_ungated || (depth0 != null ? depth0.copy_ungated : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copy_ungated","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "                        "
    + this.escapeExpression(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "                    <div class=\"ibm-padding-bottom-30\">\n                        <p><span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nickname : depth0)) != null ? stack1.copy : stack1), depth0))
    + "</span>\n                            <a href=\"#\" class=\"icon-info tooltip\" data-widget=\"tooltip\" data-contentid=\"tt-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></a>\n                            <div id=\"tt-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-tooltip-content\">\n                                <h5 class=\"ibm-h5 ibm-bold\">"
    + alias2(alias1((depths[1] != null ? depths[1].tooltip_title : depths[1]), depth0))
    + "</h5>\n                                <p>"
    + ((stack1 = alias1((depths[1] != null ? depths[1].tooltip_txt : depths[1]), depth0)) != null ? stack1 : "")
    + "</p>\n                            </div>\n                        </p>\n                        <p>\n                            <input type=\"text\" value=\"\" size=\"40\" maxlength=\"255\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nickname : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nickname : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.nickname : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\">\n                            <span class=\"ibm-item-note ibm-confirm-link\"></span>\n                            <span class=\"ibm-item-note ibm-alert-link\"></span>\n                        </p>\n                    </div>\n                    <div class=\"ibm-padding-bottom-30\">\n                        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offerAssetCode : depth0)) != null ? stack1.copy : stack1), depth0))
    + "</p>\n                        <p>\n                            <input type=\"text\" value=\"\" size=\"40\" maxlength=\"255\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offerAssetCode : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offerAssetCode : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.offerAssetCode : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].isEdit : depths[1]),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                            <span class=\"ibm-item-note ibm-confirm-link\"></span>\n                            <span class=\"ibm-item-note ibm-alert-link\"></span>\n                        </p>\n                    </div>\n";
},"8":function(depth0,helpers,partials,data) {
    return " disabled=\"true\" ";
},"10":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <div class=\"ibm-padding-bottom-30\">\n                        <p class=\"unica-version\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tacticCampaignCode : depth0)) != null ? stack1.copy : stack1), depth0))
    + "</p>\n                        <p>\n                            <input type=\"text\" value=\"\" size=\"40\" maxlength=\"255\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tacticCampaignCode : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tacticCampaignCode : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tacticCampaignCode : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\">\n                            <span class=\"ibm-item-note ibm-confirm-link\"></span>\n                            <span class=\"ibm-item-note ibm-alert-link\"></span>\n                        </p>\n                        <p class=\"unica-valid\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tacticCampaignCode : depth0)) != null ? stack1.unica_valid_txt : stack1), depth0))
    + "</p>\n                    </div>\n                    <div class=\"ibm-padding-bottom-30\">\n                        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unicaOfferCode : depth0)) != null ? stack1.copy : stack1), depth0))
    + "</p>\n                        <p>\n                            <input type=\"text\" value=\"\" size=\"40\" maxlength=\"255\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unicaOfferCode : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unicaOfferCode : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unicaOfferCode : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\">\n                        </p>\n                    </div>\n";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=this.escapeExpression;

  return "                    <div class=\"ibm-padding-bottom-30\">\n                        <p>"
    + alias1(((helper = (helper = helpers.offerType_copy || (depth0 != null ? depth0.offerType_copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"offerType_copy","hash":{},"data":data}) : helper)))
    + "</p>\n                        <p>\n                            <select id=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.offerType : depth0)) != null ? stack1.selection_name : stack1), depth0))
    + "\" class=\"js-states form-control\" style=\"width:330px;\" "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].isEdit : depths[1]),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "></select>\n                            <span class=\"ibm-item-note ibm-confirm-link\"></span>\n                            <span class=\"ibm-item-note ibm-alert-link\"></span>\n                        </p>\n                    </div>\n";
},"14":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <div class=\"ibm-padding-bottom-30\">\n                        <p class=\"asset\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.assetUrl : depth0)) != null ? stack1.copy : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                        <input type=\"text\" value=\"\" size=\"40\" maxlength=\"255\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.assetUrl : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.assetUrl : depth0)) != null ? stack1.field_name : stack1), depth0))
    + "\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.assetUrl : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].isEdit : depths[1]),{"name":"if","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                        <span class=\"ibm-item-note ibm-confirm-link\"></span>\n                        <span class=\"ibm-item-note ibm-alert-link\"></span>\n                        </p>\n                        <p class=\"ibm-error\">here is a bunch of stuff</p>\n                    </div>\n";
},"15":function(depth0,helpers,partials,data) {
    return " class=\"disabled\" readonly=\"true\" ";
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return "                <p>\n                    <input type=\"button\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" disabled class=\"ibm-btn-pri\">\n                </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"page fields_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-1-1\">\n                <h2 class=\"ibm-h2 "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </h2>\n            </div>\n            <div class=\"ibm-col-6-3 ibm-padding-top-60\">\n                <div class=\"ibm-column-form\">\n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"with","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"ibm-padding-bottom-30\">\n                        <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.unica : depth0)) != null ? stack1.copy : stack1), depth0))
    + "</p>\n                        <p>\n                            <select id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.unica : depth0)) != null ? stack1.selection_name : stack1), depth0))
    + "\" class=\"js-states form-control\"></select>\n                            <span class=\"ibm-item-note ibm-confirm-link\"></span>\n                            <span class=\"ibm-item-note ibm-alert-link\"></span>\n                        </p>\n                    </div>\n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"with","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.fields : depth0),{"name":"with","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                </div>\n            </div>\n            <div class=\"ibm-col-6-3\">\n                <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.languages : depth0)) != null ? stack1.copy : stack1), depth0))
    + "</p>\n                <p class=\"ibm-fontsize-body\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.languages : depth0)) != null ? stack1.sub_copy : stack1), depth0))
    + "</p>\n                <p>\n                    <select id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.languages : depth0)) != null ? stack1.selection_name : stack1), depth0))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isEdit : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "></select>\n                </p>\n                <div class=\"ibm-form-elem-grp ibm-padding-bottom-30\">\n                    <p class=\"owner ibm-padding-top-30\">\n                        <span>"
    + alias3(((helper = (helper = helpers.owner_title || (depth0 != null ? depth0.owner_title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner_title","hash":{},"data":data}) : helper)))
    + "</span>\n                        <span class=\"ibm-alert-link\"></span>\n                        <span class=\"ibm-confirm-link\"></span></p>\n                    <p class=\"ibm-fontsize-body\">"
    + alias3(((helper = (helper = helpers.owner_sub_copy || (depth0 != null ? depth0.owner_sub_copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"owner_sub_copy","hash":{},"data":data}) : helper)))
    + "</p>\n                    <span class=\"ibm-radio-group\">\n                        <p><input id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" name=\"radiogrp2\" type=\"radio\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" /> <label for=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio1 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio1 : depth0)) != null ? stack1.text : stack1), depth0))
    + "</label></p>                       \n                        <p><input id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio2 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" name=\"radiogrp2\" type=\"radio\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio2 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" /> <label for=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio2 : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.radio2 : depth0)) != null ? stack1.text : stack1), depth0))
    + "</label></p>\n                    </span>\n                    <p class=\"ibm-padding-top-30 clearfix\">\n                        <select id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.wwbu : depth0)) != null ? stack1.selection_name : stack1), depth0))
    + "\" class=\"js-states form-control\" style=\"width: 330px\"></select>\n                    </p>\n                    <p class=\"ibm-padding-top-30 clearfix\">\n                        <select id=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.iot : depth0)) != null ? stack1.selection_name : stack1), depth0))
    + "\" class=\"js-states form-control\" style=\"width: 330px\"></select>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"ibm-band bottom-btn-bar\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <p><a href=\"#\" class=\"ibm-btn-sec previous\">"
    + ((stack1 = ((helper = (helper = helpers.previous_btn_txt || (depth0 != null ? depth0.previous_btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previous_btn_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></p>\n            </div>\n            <div class=\"ibm-col-6-3\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true,"useDepths":true});

this["JST"]["source/ibmmrs/assets/hbs/formsPage_tmp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"forms_tmp\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band ibm-padding-top-60\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-1-1\">\n                <h1 class='ibm-h1'>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n            </div>\n        </div>\n    </div>\n    <div class=\"ibm-band ibm-padding-bottom-60 dataTables_wrapper\" id=\"dataTable_wrapper\">\n        <div class=\"ibm-band\">\n            <div class=\"ibm-columns\">\n                <div class=\"ibm-col-1-1\">\n\n                    <div class=\"dataTable-toolbar\">\n\n                        <div id=\"dataTable_custom\" class=\"dataTable_custom\">\n                            <span class=\"\">"
    + alias3(((helper = (helper = helpers['filterlist-title'] || (depth0 != null ? depth0['filterlist-title'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"filterlist-title","hash":{},"data":data}) : helper)))
    + "</span>\n                            <select id=\"filterlist\" class=\"js-states form-control\" style=\"width:330px;\"></select>\n                        </div>\n                        <div id=\"dataTable_filter\" class=\"dataTables_filter\">\n                            <label>Search:\n                                <input type=\"search\" class=\"\" placeholder=\"\" id=\"search\">\n                            </label>\n                            <span class=\"ibm-icononly\"><a href=\"#\" class=\"ibm-search-link\"></a></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-1-1\">\n                    <table class=\"row-border dataTable\" id=\"dataTable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\n                        <thead>\n                            <th style=\"width:5%\"></th>\n                            <th class=\"sorting_desc\" style=\"width:15%\" data-id=\"timeUpdated\">"
    + alias3(((helper = (helper = helpers.tdate || (depth0 != null ? depth0.tdate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tdate","hash":{},"data":data}) : helper)))
    + "</th>\n                            <th class=\"sorting\" style=\"width:10%\" data-id=\"ovCode\">"
    + alias3(((helper = (helper = helpers.tdOv || (depth0 != null ? depth0.tdOv : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tdOv","hash":{},"data":data}) : helper)))
    + "</th>\n                            <th class=\"sorting\" data-id=\"nickName\" style=\"width:19%\">"
    + alias3(((helper = (helper = helpers.tname || (depth0 != null ? depth0.tname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tname","hash":{},"data":data}) : helper)))
    + "</th>\n                            <th class=\"sorting\" style=\"width:18%\" data-id=\"language\">"
    + alias3(((helper = (helper = helpers.tlanguage || (depth0 != null ? depth0.tlanguage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tlanguage","hash":{},"data":data}) : helper)))
    + "</th>\n                            <th class=\"sorting dt-body-center\" style=\"width:8%\" data-id=\"isUngated\">"
    + alias3(((helper = (helper = helpers.ttype || (depth0 != null ? depth0.ttype : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ttype","hash":{},"data":data}) : helper)))
    + "</th>\n                            <th class=\"sorting\" style=\"width:15%\" data-id=\"author\">"
    + alias3(((helper = (helper = helpers.tAuthor || (depth0 != null ? depth0.tAuthor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tAuthor","hash":{},"data":data}) : helper)))
    + "</th>\n                            <th class=\"dt-body-center\" style=\"width:5%\"></th>\n                            <th class=\"dt-body-center\" style=\"width:5%\"></th>\n                            <th class=\"dt-body-center\" style=\"width:5%\"></th>\n                        </thead>\n                        <tbody></tbody>\n                    </table>\n                    <div class=\"paginate ibm-padding-top-30\">\n\n                    </div>\n\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/home_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li><span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span><a href=\"#\" class=\"icon-info tooltip\" data-widget=\"tooltip\" data-contentid=\"tt-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></a>\n                            <div id=\"tt-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-tooltip-content\">\n                                <h5 class=\"ibm-h5 ibm-bold\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h5>\n                                <p>"
    + alias3(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "</p>\n                            </div>\n                        </li>\n\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <input type=\"button\" value=\""
    + alias3(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\"><a href=\"#\" class=\"tooltip\" data-widget=\"tooltip\" title=\""
    + alias3(((helper = (helper = helpers.tooltip_txt || (depth0 != null ? depth0.tooltip_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_txt","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.tooltip_btn_txt || (depth0 != null ? depth0.tooltip_btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip_btn_txt","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page home_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band ibm-padding-bottom-60\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                <h4 class=\"ibm-h4 ibm-padding-bottom-30\">"
    + alias3(((helper = (helper = helpers.material_copy || (depth0 != null ? depth0.material_copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"material_copy","hash":{},"data":data}) : helper)))
    + "</h4>\n                <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                </ul>\n                <div class=\"ibm-padding-top-60\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n            <div class=\"ibm-col-6-3\">\n                <iframe id=\"ritaVid\" src=\"https://player.vimeo.com/video/"
    + alias3(((helper = (helper = helpers.video_id || (depth0 != null ? depth0.video_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"video_id","hash":{},"data":data}) : helper)))
    + "?title=0&byline=0&badge=0&portrait=0&color=8cd211\" width=\"700\" height=\"393\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n\n            </div>\n        </div>\n        \n    </div>\n\n\n\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/imageOver_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <a href=\""
    + alias2(alias1(depth0, depth0))
    + "\"><span class=\"check\"></span><img src=\""
    + alias2(alias1(depth0, depth0))
    + "\"/></a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"ibm-common-overlay ibm-overlay-alt\" data-widget=\"overlay\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"ibm-column-form\">\n            <h4 class=\"ibm-h4\">"
    + alias3(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "</h4>\n            <div class=\"ibm-rule ibm-alternate ibm-padding-bottom-30\"><hr></div>\n            <div class=\"image-links\">\n                <!--<a href=\"#\"><img src=\"http://placehold.it/110x70\"/></a>-->\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.alt_images : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            \n\n            <p>\n                <input type=\"button\" value=\""
    + alias3(((helper = (helper = helpers.button_lbl || (depth0 != null ? depth0.button_lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"button_lbl","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\">\n            </p>\n        </div>\n    </div>";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/loginOver_tmp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"ibm-common-overlay ibm-overlay-alt\" data-widget=\"overlay\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-column-form\">\n        <h4 class=\"ibm-h4 ibm-padding-bottom-30\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n        <p>\n            <input type=\"text\" value=\"\" size=\"40\" id=\"username\" name=\"username\" placeholder=\""
    + alias3(((helper = (helper = helpers.uname_placeholder || (depth0 != null ? depth0.uname_placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uname_placeholder","hash":{},"data":data}) : helper)))
    + "\">\n        </p>\n        <p>\n            <input type=\"password\" value=\"\" size=\"40\" id=\"password\" name=\"password\" placeholder=\""
    + alias3(((helper = (helper = helpers.pass_placeholder || (depth0 != null ? depth0.pass_placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pass_placeholder","hash":{},"data":data}) : helper)))
    + "\">\n        </p>\n        <p class=\"ibm-error\">"
    + alias3(((helper = (helper = helpers.errorTxt || (depth0 != null ? depth0.errorTxt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"errorTxt","hash":{},"data":data}) : helper)))
    + "</p>\n        <p class=\"ibm-padding-top-30\">\n            <input type=\"button\" value=\""
    + alias3(((helper = (helper = helpers.button_txt || (depth0 != null ? depth0.button_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"button_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\">\n        </p>\n    </div>\n</div>";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/login_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <input type=\"button\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\"> \n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <div class=\"ibm-col-6-2\">\n                <div class=\"inner\">\n                    <div class=\"icon\" style=\"background-position: "
    + alias3(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"position","hash":{},"data":data}) : helper)))
    + "\"></div>\n                    <h4 class=\"ibm-h2\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n                    <p>"
    + alias3(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"page login_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <div class=\"headline ibm-padding-top-30\">\n\n                    "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                </div>\n            </div>\n            <div class=\"ibm-col-6-3\">\n       \n                <div class=\"new-info inner\">\n                    <h4 class=\"ibm-h4\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.new_module : depth0)) != null ? stack1.new_user_title : stack1), depth0))
    + "</h4>\n                    <div class=\"ibm-rule ibm-alternate ibm-gray-30\"><hr></div>\n                    <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.new_module : depth0)) != null ? stack1.new_user : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                    <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.new_module : depth0)) != null ? stack1.how_access : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                    <p>"
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.new_module : depth0)) != null ? stack1.community : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                </div>\n                <div class=\"ibm-column-form login-module inner\">\n                    <h3 class=\"ibm-h3\">"
    + alias3(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "</h3>\n                    <p>\n                        <input type=\"text\" value=\"\" size=\"40\" id=\"username\" name=\"username\" placeholder=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.login_module : depth0)) != null ? stack1.uname_placeholder : stack1), depth0))
    + "\">\n                    </p>\n                    <p>\n                        <input type=\"password\" value=\"\" size=\"40\" id=\"password\" name=\"password\" placeholder=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.login_module : depth0)) != null ? stack1.pass_placeholder : stack1), depth0))
    + "\">\n                    </p>\n                    <p class=\"ibm-error\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.login_module : depth0)) != null ? stack1.errorTxt : stack1), depth0))
    + "</p>\n                    <p>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </p>\n                    <p><a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.login_module : depth0)) != null ? stack1.forgot_url : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.login_module : depth0)) != null ? stack1.forgot_txt : stack1), depth0))
    + "</a></p>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns cards ibm-padding-top-60\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/newOver_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "ibm-background-red-40";
},"3":function(depth0,helpers,partials,data) {
    return "ibm-background-blue-20";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <h2 class=\"ibm-h2 ibm-light\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outage_info : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <img src=\"assets/img/whatsNew_icon.png\"/>\n                    <h2 class=\"ibm-h2 ibm-light\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda;

  return "            <h2 class=\"ibm-h2 ibm-light ibm-center\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.outage_info : depth0)) != null ? stack1.sub_title : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n            <p class=\"ibm-center\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.outage_info : depth0)) != null ? stack1.copy : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "\n            <h4 class=\"ibm-h4\">"
    + this.escapeExpression(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "</h4>\n            <ul class=\"ibm-padding-top-30\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "                <li>\n                    <h4 class=\"ibm-h4 ibm-bold\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isNew : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</h4>\n                    <p>"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                </li>\n";
},"13":function(depth0,helpers,partials,data,blockParams,depths) {
    return "<span class=\"new-lbl ibm-bold\">"
    + this.escapeExpression(this.lambda((depths[2] != null ? depths[2].new_copy : depths[2]), depth0))
    + "</span>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <div class=\"ibm-common-overlay ibm-overlay-alt-two\" data-widget=\"overlay\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"top-bar "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.outage : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">\n            <div class=\"icon-wrap\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.outage : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                             \n            </div>        \n        </div>\n        <div class=\"info ibm-padding-top-30\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.outage : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>";
},"useData":true,"useDepths":true});

this["JST"]["source/ibmmrs/assets/hbs/paginate_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  		"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n	<a href=\"#\" data-id=\"prev\" class=\"prev\">Previous</a>\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.totalPages : depth0),(depth0 != null ? depth0.currentPage : depth0),{"name":"times","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n	<a href=\"#\" data-id=\"next\" class=\"next\">Next</a>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/questions_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"ibm-col-6-2\">\n    <h3 class=\"ibm-h3\">Business Contact Information</h3></div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"ibm-col-6-2\">\n    <form>\n        <div class=\"ibm-form-elem-grp ibm-padding-bottom-30 ibm-padding-top-30\">\n            <div id=\"privacyid\" class=\"ibm-notice-choice-container\">\n                <input type=\"checkbox\" onclick=\"onChangeNCOptionsFunction();\" checked=\"checked\" name=\"NC_CHECK_AllMedia\" value=\"0\" id=\"NC_CHECK_AllMedia\">\n                <label>Please keep me informed of products, services and offerings from IBM companies worldwide.</label>\n            </div>\n            <p>I accept IBM’s <a href=\"http://www.ibm.com/privacy/us/en\" target=\"_blank\">Privacy statement</a>.</p>\n        </div>\n    </form>\n    <p>\n        <button type=\"submit\" class=\"ibm-btn-pri submit_btn\" value=\"Submit\" form=\"registerform\" id=\"btn_submitform\">Submit</button>\n    </p>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"ibm-col-6-2\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelect : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <p>\n        <label for=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.lbl || (depth0 != null ? depth0.lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lbl","hash":{},"data":data}) : helper)))
    + ":"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</label>\n    </p>\n    <p>\n        <select id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-width=\"100%\">\n            <option>Please Select</option>\n        </select>\n    </p>\n";
},"4":function(depth0,helpers,partials,data) {
    return "<span class=\"ibm-required\">*</span>";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <p>\n        <label for=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.lbl || (depth0 != null ? depth0.lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lbl","hash":{},"data":data}) : helper)))
    + ":"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</label>\n    </p>\n    <p><span><input id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" size=\"40\" type=\"text\" value=\"\"></span></p>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"ibm-row-form\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"halfsize\">\n        <p>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelect : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        </p>\n    </div>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <label for=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.lbl || (depth0 != null ? depth0.lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lbl","hash":{},"data":data}) : helper)))
    + ":"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</label>\n            <select id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-width=\"100%\">\n                <option>Please Select</option>\n            </select>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <label for=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.lbl || (depth0 != null ? depth0.lbl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lbl","hash":{},"data":data}) : helper)))
    + ":"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</label>\n            <span><input id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" size=\"40\" type=\"text\" value=\"\"></span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isUngated : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/resources_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li><a href=\"#\" class=\"ibm-h4 button_scroll\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    "
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"resources_tmp\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band stripes\">\n        <div class=\"ibm-background-blue-20\"></div>\n        <div class=\"ibm-background-blue-40\"></div>\n        <div class=\"ibm-background-blue-60\"></div>\n    </div>\n    <div class=\"ibm-band ibm-padding-bottom-60\">\n        <div class=\"ibm-columns\" id=\"test1\">\n            <div class=\"ibm-col-6-2\">\n                <ul class=\"ibm-plain-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </div>\n            <div class=\"ibm-col-6-4\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/select_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <p>\n                        <input type=\"button\" value=\""
    + this.escapeExpression(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" disabled class=\"ibm-btn-pri\">\n                    </p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page select_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-4\">\n                <div class=\"section_icon\" style=\"background-position: 0 "
    + alias3(((helper = (helper = helpers.section_yposition || (depth0 != null ? depth0.section_yposition : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"section_yposition","hash":{},"data":data}) : helper)))
    + "\"></div>\n                <h2 class=\"ibm-h2 ibm-padding-bottom-30\">"
    + alias3(((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper)))
    + "</h2>\n                <form >\n                    <div class=\"ibm-padding-bottom-30\">\n                        <div class=\"select-wrap\">\n                            \n                                <select id=\"offer\" class=\"js-states form-control\" style=\"width: 330px \"></select>\n                            \n                        </div>\n                    </div>\n                </form>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <div class=\"ibm-band bottom-btn-bar\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <p><a href=\"#\" class=\"ibm-btn-sec previous\">"
    + ((stack1 = ((helper = (helper = helpers.previous_btn_txt || (depth0 != null ? depth0.previous_btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previous_btn_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></p>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/stage_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <div class=\"ibm-col-6-1\">\n                    <div class=\"section_icon\" style=\"background-position: 0 "
    + alias3(((helper = (helper = helpers.section_yposition || (depth0 != null ? depth0.section_yposition : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"section_yposition","hash":{},"data":data}) : helper)))
    + "\"></div>\n                    <input type=\"button\" value=\""
    + alias3(((helper = (helper = helpers.btn_txt || (depth0 != null ? depth0.btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"btn_txt","hash":{},"data":data}) : helper)))
    + "\" class=\"ibm-btn-pri\"> \n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"page btns_tmp\" data-pageId=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"ibm-band\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-5\">\n                <div class=\"gate ibm-padding-bottom-30\">\n                    <h2 class=\"ibm-h2\">"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n                    \n                </div>\n\n            </div>\n           \n        </div>\n        \n    </div>\n    <div class=\"ibm-band icon-group\">\n        <div class=\"ibm-columns\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"ibm-band bottom-btn-bar\">\n        <div class=\"ibm-columns\">\n            <div class=\"ibm-col-6-3\">\n                <p><a href=\"#\" class=\"ibm-btn-sec previous\">"
    + ((stack1 = ((helper = (helper = helpers.previous_btn_txt || (depth0 != null ? depth0.previous_btn_txt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"previous_btn_txt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></p>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/tablerowDetails_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<span class=\"ibm-bold\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pageData : depth0)) != null ? stack1.redirect : stack1), depth0))
    + "</span> "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isCCTRedirect : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " <a href=\"#\" class=\"change\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.pageData : depth0)) != null ? stack1.editRedirect : stack1)) != null ? stack1.btn_txt : stack1), depth0))
    + "</a>";
},"2":function(depth0,helpers,partials,data) {
    return "Yes";
},"4":function(depth0,helpers,partials,data) {
    return "No";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "<tr>\n        <td colspan=\"10\">\n            <table>\n                <tr>\n                    <td><span class=\"ibm-bold\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pageData : depth0)) != null ? stack1.last_edit : stack1), depth0))
    + "</span> "
    + alias2(((helper = (helper = helpers.lastModifiedBy || (depth0 != null ? depth0.lastModifiedBy : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"lastModifiedBy","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td><span class=\"ibm-bold\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pageData : depth0)) != null ? stack1.last_modified : stack1), depth0))
    + "</span> "
    + alias2(((helper = (helper = helpers.timeUpdated || (depth0 != null ? depth0.timeUpdated : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"timeUpdated","hash":{},"data":data}) : helper)))
    + "</td>\n                    <td>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isPostedToLive : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n                </tr>\n            </table>\n        </td>\n    </tr>";
},"useData":true});

this["JST"]["source/ibmmrs/assets/hbs/tablerow_tmp"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "\n    <tr>\n        <td>\n            <a href=\"#\" class=\"plus\"></a>\n        </td>\n        <td>"
    + alias3(((helper = (helper = helpers.firstActive || (depth0 != null ? depth0.firstActive : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstActive","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.ovCode || (depth0 != null ? depth0.ovCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ovCode","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.nickName || (depth0 != null ? depth0.nickName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nickName","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"language","hash":{},"data":data}) : helper)))
    + "</td>\n        <td class=\"dt-body-center\"><span class=\"circle\">"
    + alias3(((helper = (helper = helpers.isUngated || (depth0 != null ? depth0.isUngated : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"isUngated","hash":{},"data":data}) : helper)))
    + "</span></td>\n        <td>"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</td>\n        <td class=\"dt-body-center\">\n            <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" data-widget=\"tooltip\" title=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isPostedToLive : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isPostedToLive : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " tooltip tipso_style\"></a>\n        </td>\n        <td class=\"dt-body-center\">\n            \n            <a href=\"#\" data-widget=\"tooltip\" title=\""
    + alias3(alias4(((stack1 = (depths[1] != null ? depths[1].pageData : depths[1])) != null ? stack1.tooltip_edit : stack1), depth0))
    + "\" class=\"edit icon-pencil tooltip tipso_style "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.editable : depth0),{"name":"unless","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"></a>\n\n        </td>\n        <td class=\"dt-body-center\">\n            <a href=\"#\" data-widget=\"tooltip\" title=\""
    + alias3(alias4(((stack1 = (depths[1] != null ? depths[1].pageData : depths[1])) != null ? stack1.tooltip_delete : stack1), depth0))
    + "\" class=\"delete icon-trash tooltip tipso_style "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.editable : depth0),{"name":"unless","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"></a>\n        </td>\n    </tr>\n\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depths[2] != null ? depths[2].pageData : depths[2])) != null ? stack1.tooltip_live : stack1), depth0));
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depths[2] != null ? depths[2].pageData : depths[2])) != null ? stack1.tooltip_preview : stack1), depth0));
},"6":function(depth0,helpers,partials,data) {
    return "icon-bolt";
},"8":function(depth0,helpers,partials,data) {
    return "icon-eye";
},"10":function(depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.forms : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});