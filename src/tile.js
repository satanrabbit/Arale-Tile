define(function(require, exports, module) {
  
  var Widget = require('widget');
  var $ = require('$');
  require('arale/easing/1.0.0/easing'); 
  require('./tile.css');
  var tile = Widget.extend({ 
  	
    attrs:{
      template: require('./tile.tpl'),
      haver_thame:'ui-tile-color-wisteria',
      width:null,
      title_left:false,
      bar:null,
      thame:null,
      title:null,
      icon:null,
      main_thame:null,
      bar_tip:null,
      urls:{
        tile:null,
        title:null,
        bar:null,
        icon:null,
        bar_tip:null
      },
      contents:[]
  	},
  	 
    setup: function() {
            this.element.empty().append(this.get('template'));
            this.element=this.element.find(".ui-tile");
            if (this.get('width')) { 
              this.element.width(this.get('width'));
            }
            
            //是否显示title
            if (this.get('title')) {
            	this.element.find('.ui-tile-title').text(this.get('title'));
                //设置title left
                if(this.get('title_left')){
                  this.element.addClass('ui-tile-title-left');
                }
            }else{
              this.element.find('.ui-tile-title').hide();
            }
            //是否显示 bar
            if (this.get('bar')) {
              this.element.find('.ui-tile-bar-text').text(this.get('bar'));
              if (this.get('bar_tip') ) {                
                this.element.find('.ui-tile-bar-tip').text(this.get('bar_tip'));
              }else{
                this.element.find('.ui-tile-bar-tip').hide();
              }
            }else{
              this.element.find('.ui-tile-bar').hide();
            }
            //icon
            if(this.get('icon')){
              this.element.find(".iconfont").empty().append(this.get("icon"));
            }else{
              this.element.addClass('ui-tile-icon-none');
            }
            //main-only
            if (!this.get('title')&&!this.get('bar')) {
              this.element.addClass('ui-tile-main-only');
            }
            //thame
            if (this.get('thame')) {
             this.element.addClass('ui-tile-color-'+this.get('thame'));
            }
            //main_thame
            if (this.get('main_thame')) {
              this.element.find('.ui-tile-main').addClass('ui-tile-main-'+this.get('main_thame'));
            }

            if (this.get('contents').length>0) {
              for (var i = this.get('contents').length - 1; i >= 0; i--) {
                var item=this.get('contents')[i];
                var _content=$("<div/>")
                  .addClass("ui-tile-content")
                  .append(item.content)
                if(item.url){
                  var _url=item.url;
                   $(_content).wrapInner("<a href="+_url+"></a>") ;
                }
                if(i!==0){
                  _content.hide();
                }
                _content.appendTo(this.element.find('.ui-tile-main'));
              }
            }

            //轮播动画
            var _contents=this.element.find('.ui-tile-content')

            if (_contents.length>1){

              var i=_contents.length-1;
               var _h=this.element.find('ui-tile-main').height;
               var t= setInterval(function(){
                $(_contents[i]).animate({
                  height:'toggle'
                },'1000','easeOut');//.easeOut(); //
                
                if(i==0){
                  i=_contents.length;
                }
                i--;
                $(_contents[i]).animate({
                  height:'toggle'
                },'1000','easeOut');
              },3000);
            }
            //urls
            if(this.get('urls').tile){
              var _url=this.get('urls').tile; 
              this.element.wrapInner("<a href="+_url+"></a>") ;
              this.element.find('.ui-tile-icon').wrapInner("<a href="+_url+"></a>") ;//用于在icon时鼠标样式不是手型
            }
             if(this.get('urls').title){
              var _url=this.get('urls').title; 
              this.element.find('.ui-tile-title').wrapInner("<a href="+_url+"></a>") ;
            }
             if(this.get('urls').bar){
              var _url=this.get('urls').bar; 
              this.element.find('.ui-tile-bar').wrapInner("<a href="+_url+"></a>") ;
            }
             if(this.get('urls').icon){
              var _url=this.get('urls').icon; 
              this.element.find('.ui-tile-icon').wrapInner("<a href="+_url+"></a>") ;
            }
    },
    events: {
        "mouseover .ui-tile": function(){
          this.element.addClass(this.get('haver_thame'));
        },
        "mouseout .ui-tile": function(){
          this.element.removeClass(this.get('haver_thame'));
          if(this.get('thame')){
            this.element.addClass('ui-tile-main-'+this.get('thame'));
          }
        }

    }
  });
  module.exports = tile;

});
