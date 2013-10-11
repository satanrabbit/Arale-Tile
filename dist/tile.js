define("arale/tile/1.0.0/tile",["arale/widget/1.1.1/widget","arale/base/1.1.1/base","arale/class/1.1.0/class","arale/events/1.1.0/events","$","arale/easing/1.0.0/easing","./tile.css","./tile.tpl"],function(a,b,c){var d=a("arale/widget/1.1.1/widget"),e=a("$");a("arale/easing/1.0.0/easing"),a("./tile.css");var f=d.extend({attrs:{template:a("./tile.tpl"),width:null,title_left:!1,bar:null,thame:null,title:null,icon:null,main_thame:null,bar_tip:null,hover_thame:"ui-tile-color-wisteria",urls:{tile:null,title:null,bar:null,icon:null,bar_tip:null},contents:[]},setup:function(){if(this.element.empty().append(this.get("template")),this.element=this.element.find(".ui-tile"),this.get("width")&&this.element.width(this.get("width")),this.get("title")?(this.element.find(".ui-tile-title").text(this.get("title")),this.get("title_left")&&this.element.addClass("ui-tile-title-left")):this.element.find(".ui-tile-title").hide(),this.get("bar")?(this.element.find(".ui-tile-bar-text").text(this.get("bar")),this.get("bar_tip")?this.element.find(".ui-tile-bar-tip").text(this.get("bar_tip")):this.element.find(".ui-tile-bar-tip").hide()):this.element.find(".ui-tile-bar").hide(),this.get("icon")?this.element.find(".iconfont").empty().append(this.get("icon")):this.element.addClass("ui-tile-icon-none"),this.get("title")||this.get("bar")||this.element.addClass("ui-tile-main-only"),this.get("thame")&&this.element.addClass("ui-tile-color-"+this.get("thame")),this.get("main_thame")&&this.element.find(".ui-tile-main").addClass("ui-tile-main-"+this.get("main_thame")),this.get("contents").length>0)for(var a=this.get("contents").length-1;a>=0;a--){var b=this.get("contents")[a],c=e("<div/>").addClass("ui-tile-content").append(b.content);if(b.url){var d=b.url;e(c).wrapInner("<a href="+d+"></a>")}0!==a&&c.hide(),c.appendTo(this.element.find(".ui-tile-main"))}var f=this.element.find(".ui-tile-content");if(f.length>1){var a=f.length-1;this.element.find("ui-tile-main").height,setInterval(function(){e(f[a]).animate({height:"toggle"},"1000","easeOut"),0==a&&(a=f.length),a--,e(f[a]).animate({height:"toggle"},"1000","easeOut")},3e3)}if(this.get("urls").tile){var d=this.get("urls").tile;this.element.wrapInner("<a href="+d+"></a>"),this.element.find(".ui-tile-icon").wrapInner("<a href="+d+"></a>")}if(this.get("urls").title){var d=this.get("urls").title;this.element.find(".ui-tile-title").wrapInner("<a href="+d+"></a>")}if(this.get("urls").bar){var d=this.get("urls").bar;this.element.find(".ui-tile-bar").wrapInner("<a href="+d+"></a>")}if(this.get("urls").icon){var d=this.get("urls").icon;this.element.find(".ui-tile-icon").wrapInner("<a href="+d+"></a>")}},events:{"mouseover .ui-tile":function(){this.element.addClass(this.get("hover_thame"))},"mouseout .ui-tile":function(){this.element.removeClass(this.get("hover_thame")),this.get("thame")&&this.element.addClass("ui-tile-main-"+this.get("thame"))}}});c.exports=f}),define("arale/tile/1.0.0/tile.css",[],function(){seajs.importStyle("@font-face{font-family:fontello;src:url(font/fontello.eot);src:url(font/fontello.eot#iefix) format('embedded-opentype'),url(font/fontello.woff) format('woff'),url(font/fontello.ttf) format('truetype'),url(font/fontello.svg#fontello) format('svg');font-weight:400;font-style:normal}.iconfont{font-family:fontello;font-style:normal;cursor:default;-webkit-font-smoothing:antialiased}.ui-tile{width:220px;display:block;position:relative;background-color:#c0392b;margin:10px 0 10px 10px;color:#ecf0f1;font-size:12px;font-family:\"Microsoft yahei\",\"微软雅黑\",\"幼圆\",\"黑体\",Tahoma,Verdana,Arial,sans-serif}.ui-tile a{color:#ecf0f1;cursor:pointer}.ui-tile a:link{color:#ecf0f1}.ui-tile a:hover{color:#ecf0f1;text-decoration:none}.ui-tile .ui-tile-title{position:relative;height:30px;line-height:28px;display:block;font-size:14px;font-weight:500;letter-spacing:5px;padding-left:20px}.ui-tile .ui-tile-bar{height:30px;line-height:28px;position:relative}.ui-tile .ui-tile-bar .ui-tile-bar-tip{position:absolute;right:15px;top:0}.ui-tile .ui-tile-main{position:relative;height:80px;overflow:hidden}.ui-tile .ui-tile-main .ui-tile-icon{width:60px;height:60px;position:absolute;top:10px;left:10px}.ui-tile .ui-tile-main .ui-tile-icon i{line-height:1em;font-size:50px;display:block;text-align:center}.ui-tile .ui-tile-main .ui-tile-content{height:80px;position:absolute;left:80px}.ui-tile .ui-tile-main .ui-tile-content a:hover{text-decoration:underline}.ui-tile-main-only .ui-tile-title{display:none}.ui-tile-main-only .ui-tile-bar{display:none}.ui-tile-main-only .ui-tile-main{height:110px}.ui-tile-main-only .ui-tile-main .ui-tile-icon{top:15px}.ui-tile-main-only .ui-tile-main .ui-tile-content{height:110px}.ui-tile-icon-none .ui-tile-main .ui-tile-icon{display:none}.ui-tile-icon-none .ui-tile-main .ui-tile-content{left:0}.ui-tile-title-left{overflow:hidden}.ui-tile-title-left .ui-tile-title{height:80px;width:25px;margin:0;padding:15px 0 0;position:absolute;line-height:20px;left:10px}.ui-tile-title-left .ui-tile-main{margin-left:30px;height:110px}.ui-tile-title-left .ui-tile-main .ui-tile-icon{top:15px}.ui-tile-title-left .ui-tile-bar{display:none}.ui-tile-color-midnight-blue,.ui-tile-main-midnight-blue{background-color:#2c3e50}.ui-tile-color-belize-hole,.ui-tile-main-belize-hole{background-color:#2980b9}.ui-tile-color-wet-asphalt,.ui-tile-main-wet-asphalt{background-color:#34495e}.ui-tile-color-amethyst,.ui-tile-main-amethyst{background-color:#9b59b6}.ui-tile-color-alizarin,.ui-tile-main-alizarin{background-color:#e74c3c}.ui-tile-color-clouds,.ui-tile-main-clouds{background-color:#ecf0f1}.ui-tile-color-emerald,.ui-tile-main-emerald{background-color:#2ecc71}.ui-tile-color-green-sea,.ui-tile-main-green-sea{background-color:#16a085}.ui-tile-color-pumpkin,.ui-tile-main-pumpkin{background-color:#e67e22}.ui-tile-color-wisteria,.ui-tile-main-wisteria{background-color:#8e44ad}.ui-tile-color-midnight-blue-hover,.ui-tile-main-midnight-blue-hover{background-color:#2c3e50}.ui-tile-color-belize-hole-hover,.ui-tile-main-belize-hole-hover{background-color:#2980b9}.ui-tile-color-wet-asphalt-hover,.ui-tile-main-wet-asphalt-hover{background-color:#34495e}.ui-tile-color-amethyst-hover,.ui-tile-main-amethyst-hover{background-color:#9b59b6}.ui-tile-color-wisteria-hover,.ui-tile-main-wisteria-hover{background-color:#8e44ad}.ui-tile-color-alizarin-hover,.ui-tile-main-alizarin-hover{background-color:#e74c3c}.ui-tile-color-clouds-hover,.ui-tile-main-clouds-hover{background-color:#ecf0f1}.ui-tile-color-emerald-hover,.ui-tile-main-emerald-hover{background-color:#2ecc71}.ui-tile-color-green-sea-hover,.ui-tile-main-green-sea-hover{background-color:#16a085}")}),define("arale/tile/1.0.0/tile.tpl",[],'\n<div class="ui-tile">\n	<div class="ui-tile-title"></div>\n    <div class="ui-tile-main">\n        <div class="ui-tile-icon "> <i class="iconfont"></i></div>\n    </div>\n    <div class="ui-tile-bar">\n    	<div class="ui-tile-bar-text"></div>\n        <div class="ui-tile-bar-tip"></div>\n    </div>\n</div>');
