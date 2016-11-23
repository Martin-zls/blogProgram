define(["require", "exports", "module"],
function(e, r, o) {
    "use strict";
    var u = {
        enforceDefine: !0,
        waitSeconds: 60,
        shim: {
            swfobject: {
                exports: "swfobject"
            },
            jwplayer: {
                exports: "jwplayer"
            },
            modernizr: {
                exports: "Modernizr"
            },
            bootstrap: {
                deps: ["jquery"],
                exports: "$.fn.popover"
            },
            "placeholder-text": {
                deps: ["jquery"],
                exports: "$.fn.placeholder"
            },
            "jquery-ui-custom": {
                deps: ["jquery"],
                exports: "$.fn.sortable"
            },
            mailcheck: {
                deps: ["jquery"],
                exports: "$.fn.mailcheck"
            },
            "jquery-touch-punch": {
                deps: ["jquery-ui-custom"],
                exports: "$.touchpunch"
            },
            velocity: {
                deps: ["jquery"]
            }
        },
        paths: {
            jquery: "vendor/jquery/jquery-1.11.3",
            underscore: "vendor/underscore/underscore-1.8.3",
            "backbone-vanilla": "vendor/backbone/backbone",
            swfobject: "vendor/swfobject/swfobject-2.2",
            jwplayer: "vendor/jwplayer-6.12/jwplayer",
            mousetrap: "vendor/mousetrap/mousetrap-1.4.6",
            "ua-parser": "vendor/ua-parser/ua-parser-0.7.10",
            modernizr: "vendor/modernizr/modernizr-custom-2.8.3",
            bootstrap: "vendor/jquery/plugins/bootstrap-3.1.1",
            mailcheck: "vendor/jquery/plugins/mailcheck-1.1",
            "placeholder-text": "vendor/jquery/plugins/jquery-placeholder-2.0.7",
            "jquery-ui-custom": "vendor/jquery/plugins/jquery-ui-custom-1.10.3",
            "jquery-touch-punch": "vendor/jquery/plugins/jquery-ui-touch-punch-0.2.3",
            velocity: "vendor/jquery/plugins/velocity-1.2.3",
            backbone: "js/backbone",
            text: "vendor/require/plugins/text-2.0.10",
            tpl: "vendor/require/plugins/tpl",
            "mousetrap-global": "vendor/mousetrap/mousetrap-global"
        }
    };
    u.baseUrl = o.uri.substr(0, o.uri.lastIndexOf("/")),
    requirejs.config(u);
});