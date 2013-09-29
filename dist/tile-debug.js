define("arale/tile/1.0.0/tile-debug", [ "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "$-debug" ], function(require, exports, module) {
    var widget = require("arale/widget/1.1.1/widget-debug");
    var $ = require("$-debug");
    //依赖ui-tile样式
    require("alice/tile/1.0.0/tile-debug.css");
    var tile = widget.extend({
        attrs: {
            width: null,
            //title 是否可见
            title_visible: true,
            title_left: false,
            bar_visiable: true,
            haver_color: null,
            thame: null
        },
        events: {
            mouseover: function() {
                console.log(this);
            },
            "click .icon.doc": "select",
            "mouseover .date": "showTooltip"
        },
        open: function() {},
        select: function() {}
    });
    module.exports = tile;
});

define("alice/tile/1.0.0/tile-debug.css", [], function() {
    seajs.importStyle("@font-face{font-family:fontello;src:url(font/fontello.eot);src:url(font/fontello.eot#iefix) format('embedded-opentype'),url(font/fontello.woff) format('woff'),url(font/fontello.ttf) format('truetype'),url(font/fontello.svg#fontello) format('svg');font-weight:400;font-style:normal}.iconfont{font-family:fontello;font-style:normal;cursor:default;-webkit-font-smoothing:antialiased}.ui-tile{width:220px;display:block;position:relative;background-color:#c0392b;margin:10px 0 10px 10px;color:#ecf0f1;font-size:12px;font-family:\"Microsoft yahei\",\"微软雅黑\",\"幼圆\",\"黑体\",Tahoma,Verdana,Arial,sans-serif}.ui-tile .ui-tile-title{position:relative;height:30px;line-height:28px;display:block;font-size:14px;font-weight:500;letter-spacing:5px;padding-left:20px}.ui-tile .ui-tile-bar{height:30px;line-height:28px;position:relative}.ui-tile .ui-tile-bar .ui-tile-bar-tip{position:absolute;right:15px;top:0}.ui-tile .ui-tile-main{position:relative;height:80px;overflow:hidden}.ui-tile .ui-tile-main .ui-tile-icon{width:80px;height:80px;position:absolute}.ui-tile .ui-tile-main .ui-tile-icon i{line-height:1em;font-size:75px;display:block;text-align:center}.ui-tile .ui-tile-main .ui-tile-content{height:80px;position:absolute;left:80px}.ui-tile-main-only .ui-tile-title{display:none}.ui-tile-main-only .ui-tile-bar{display:none}.ui-tile-main-only .ui-tile-main{height:110px}.ui-tile-main-only .ui-tile-main .ui-tile-icon{top:15px}.ui-tile-main-only .ui-tile-main .ui-tile-content{height:110px}.ui-tile-icon-none .ui-tile-main .ui-tile-icon{display:none}.ui-tile-icon-none .ui-tile-main .ui-tile-content{left:0}.ui-tile-title-left{overflow:hidden}.ui-tile-title-left .ui-tile-title{height:80px;width:25px;margin:0;padding:15px 0 0;position:absolute;line-height:20px;left:10px}.ui-tile-title-left .ui-tile-main{margin-left:30px;height:110px}.ui-tile-title-left .ui-tile-main .ui-tile-icon{top:15px}.ui-tile-title-left .ui-tile-bar{display:none}.ui-tile-color-midnight-blue{background-color:#2c3e50}.ui-tile-color-belize-hole{background-color:#2980b9}.ui-tile-color-wet-asphalt{background-color:#34495e}.ui-tile-color-amethyst{background-color:#9b59b6}.ui-tile-color-wisteria{background-color:#8e44ad}.ui-tile-color-alizarin{background-color:#e74c3c}");
});
