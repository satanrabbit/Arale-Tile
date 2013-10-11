define("arale/tile/1.0.0/tile-debug", [ "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "$-debug", "arale/easing/1.0.0/easing-debug", "./tile-debug.css", "./tile-debug.tpl" ], function(require, exports, module) {
    var Widget = require("arale/widget/1.1.1/widget-debug");
    var $ = require("$-debug");
    require("arale/easing/1.0.0/easing-debug");
    require("./tile-debug.css");
    var tile = Widget.extend({
        attrs: {
            template: require("./tile-debug.tpl"),
            width: null,
            title_left: false,
            bar: null,
            thame: null,
            title: null,
            icon: null,
            main_thame: null,
            bar_tip: null,
            hover_thame: "ui-tile-color-wisteria",
            urls: {
                tile: null,
                title: null,
                bar: null,
                icon: null,
                bar_tip: null
            },
            contents: []
        },
        setup: function() {
            this.element.empty().append(this.get("template"));
            this.element = this.element.find(".ui-tile");
            if (this.get("width")) {
                this.element.width(this.get("width"));
            }
            //是否显示title
            if (this.get("title")) {
                this.element.find(".ui-tile-title").text(this.get("title"));
                //设置title left
                if (this.get("title_left")) {
                    this.element.addClass("ui-tile-title-left");
                }
            } else {
                this.element.find(".ui-tile-title").hide();
            }
            //是否显示 bar
            if (this.get("bar")) {
                this.element.find(".ui-tile-bar-text").text(this.get("bar"));
                if (this.get("bar_tip")) {
                    this.element.find(".ui-tile-bar-tip").text(this.get("bar_tip"));
                } else {
                    this.element.find(".ui-tile-bar-tip").hide();
                }
            } else {
                this.element.find(".ui-tile-bar").hide();
            }
            //icon
            if (this.get("icon")) {
                this.element.find(".iconfont").empty().append(this.get("icon"));
            } else {
                this.element.addClass("ui-tile-icon-none");
            }
            //main-only
            if (!this.get("title") && !this.get("bar")) {
                this.element.addClass("ui-tile-main-only");
            }
            //thame
            if (this.get("thame")) {
                this.element.addClass("ui-tile-color-" + this.get("thame"));
            }
            //main_thame
            if (this.get("main_thame")) {
                this.element.find(".ui-tile-main").addClass("ui-tile-main-" + this.get("main_thame"));
            }
            if (this.get("contents").length > 0) {
                for (var i = this.get("contents").length - 1; i >= 0; i--) {
                    var item = this.get("contents")[i];
                    var _content = $("<div/>").addClass("ui-tile-content").append(item.content);
                    if (item.url) {
                        var _url = item.url;
                        $(_content).wrapInner("<a href=" + _url + "></a>");
                    }
                    if (i !== 0) {
                        _content.hide();
                    }
                    _content.appendTo(this.element.find(".ui-tile-main"));
                }
            }
            //轮播动画
            var _contents = this.element.find(".ui-tile-content");
            if (_contents.length > 1) {
                var i = _contents.length - 1;
                var _h = this.element.find("ui-tile-main").height;
                var t = setInterval(function() {
                    $(_contents[i]).animate({
                        height: "toggle"
                    }, "1000", "easeOut");
                    //.easeOut(); //
                    if (i == 0) {
                        i = _contents.length;
                    }
                    i--;
                    $(_contents[i]).animate({
                        height: "toggle"
                    }, "1000", "easeOut");
                }, 3e3);
            }
            //urls
            if (this.get("urls").tile) {
                var _url = this.get("urls").tile;
                this.element.wrapInner("<a href=" + _url + "></a>");
                this.element.find(".ui-tile-icon").wrapInner("<a href=" + _url + "></a>");
            }
            if (this.get("urls").title) {
                var _url = this.get("urls").title;
                this.element.find(".ui-tile-title").wrapInner("<a href=" + _url + "></a>");
            }
            if (this.get("urls").bar) {
                var _url = this.get("urls").bar;
                this.element.find(".ui-tile-bar").wrapInner("<a href=" + _url + "></a>");
            }
            if (this.get("urls").icon) {
                var _url = this.get("urls").icon;
                this.element.find(".ui-tile-icon").wrapInner("<a href=" + _url + "></a>");
            }
        },
        events: {
            "mouseover .ui-tile": function() {
                this.element.addClass(this.get("hover_thame"));
            },
            "mouseout .ui-tile": function() {
                this.element.removeClass(this.get("hover_thame"));
                if (this.get("thame")) {
                    this.element.addClass("ui-tile-main-" + this.get("thame"));
                }
            }
        }
    });
    module.exports = tile;
});

define("arale/tile/1.0.0/tile-debug.css", [], function() {
    seajs.importStyle("@font-face{font-family:fontello;src:url(font/fontello.eot);src:url(font/fontello.eot#iefix) format('embedded-opentype'),url(font/fontello.woff) format('woff'),url(font/fontello.ttf) format('truetype'),url(font/fontello.svg#fontello) format('svg');font-weight:400;font-style:normal}.iconfont{font-family:fontello;font-style:normal;cursor:default;-webkit-font-smoothing:antialiased}.ui-tile{width:220px;display:block;position:relative;background-color:#c0392b;margin:10px 0 10px 10px;color:#ecf0f1;font-size:12px;font-family:\"Microsoft yahei\",\"微软雅黑\",\"幼圆\",\"黑体\",Tahoma,Verdana,Arial,sans-serif}.ui-tile a{color:#ecf0f1;cursor:pointer}.ui-tile a:link{color:#ecf0f1}.ui-tile a:hover{color:#ecf0f1;text-decoration:none}.ui-tile .ui-tile-title{position:relative;height:30px;line-height:28px;display:block;font-size:14px;font-weight:500;letter-spacing:5px;padding-left:20px}.ui-tile .ui-tile-bar{height:30px;line-height:28px;position:relative}.ui-tile .ui-tile-bar .ui-tile-bar-tip{position:absolute;right:15px;top:0}.ui-tile .ui-tile-main{position:relative;height:80px;overflow:hidden}.ui-tile .ui-tile-main .ui-tile-icon{width:60px;height:60px;position:absolute;top:10px;left:10px}.ui-tile .ui-tile-main .ui-tile-icon i{line-height:1em;font-size:50px;display:block;text-align:center}.ui-tile .ui-tile-main .ui-tile-content{height:80px;position:absolute;left:80px}.ui-tile .ui-tile-main .ui-tile-content a:hover{text-decoration:underline}.ui-tile-main-only .ui-tile-title{display:none}.ui-tile-main-only .ui-tile-bar{display:none}.ui-tile-main-only .ui-tile-main{height:110px}.ui-tile-main-only .ui-tile-main .ui-tile-icon{top:15px}.ui-tile-main-only .ui-tile-main .ui-tile-content{height:110px}.ui-tile-icon-none .ui-tile-main .ui-tile-icon{display:none}.ui-tile-icon-none .ui-tile-main .ui-tile-content{left:0}.ui-tile-title-left{overflow:hidden}.ui-tile-title-left .ui-tile-title{height:80px;width:25px;margin:0;padding:15px 0 0;position:absolute;line-height:20px;left:10px}.ui-tile-title-left .ui-tile-main{margin-left:30px;height:110px}.ui-tile-title-left .ui-tile-main .ui-tile-icon{top:15px}.ui-tile-title-left .ui-tile-bar{display:none}.ui-tile-color-midnight-blue,.ui-tile-main-midnight-blue{background-color:#2c3e50}.ui-tile-color-belize-hole,.ui-tile-main-belize-hole{background-color:#2980b9}.ui-tile-color-wet-asphalt,.ui-tile-main-wet-asphalt{background-color:#34495e}.ui-tile-color-amethyst,.ui-tile-main-amethyst{background-color:#9b59b6}.ui-tile-color-alizarin,.ui-tile-main-alizarin{background-color:#e74c3c}.ui-tile-color-clouds,.ui-tile-main-clouds{background-color:#ecf0f1}.ui-tile-color-emerald,.ui-tile-main-emerald{background-color:#2ecc71}.ui-tile-color-green-sea,.ui-tile-main-green-sea{background-color:#16a085}.ui-tile-color-pumpkin,.ui-tile-main-pumpkin{background-color:#e67e22}.ui-tile-color-wisteria,.ui-tile-main-wisteria{background-color:#8e44ad}.ui-tile-color-midnight-blue-hover,.ui-tile-main-midnight-blue-hover{background-color:#2c3e50}.ui-tile-color-belize-hole-hover,.ui-tile-main-belize-hole-hover{background-color:#2980b9}.ui-tile-color-wet-asphalt-hover,.ui-tile-main-wet-asphalt-hover{background-color:#34495e}.ui-tile-color-amethyst-hover,.ui-tile-main-amethyst-hover{background-color:#9b59b6}.ui-tile-color-wisteria-hover,.ui-tile-main-wisteria-hover{background-color:#8e44ad}.ui-tile-color-alizarin-hover,.ui-tile-main-alizarin-hover{background-color:#e74c3c}.ui-tile-color-clouds-hover,.ui-tile-main-clouds-hover{background-color:#ecf0f1}.ui-tile-color-emerald-hover,.ui-tile-main-emerald-hover{background-color:#2ecc71}.ui-tile-color-green-sea-hover,.ui-tile-main-green-sea-hover{background-color:#16a085}");
});

define("arale/tile/1.0.0/tile-debug.tpl", [], '\n<div class="ui-tile">\n	<div class="ui-tile-title"></div>\n    <div class="ui-tile-main">\n        <div class="ui-tile-icon "> <i class="iconfont"></i></div>\n    </div>\n    <div class="ui-tile-bar">\n    	<div class="ui-tile-bar-text"></div>\n        <div class="ui-tile-bar-tip"></div>\n    </div>\n</div>');
