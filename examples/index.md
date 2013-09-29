# 演示文档

---

###默认

````html
<div id="tile-demo-1">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile1=new tile({element: '#tile-demo-1'});
});
````
## 设置标题

````html
<div id="tile-demo-2">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile2=new tile({element: '#tile-demo-2',title:'测试标题'});
});
````
## 设置标题在左侧

````html
<div id="tile-demo-3">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile3=new tile({element: '#tile-demo-3',title:'左侧标题',title_left:true});
});
````

## 设置icon

  icon根据需要生成:

````html
<div id="tile-demo-4">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile4=new tile({element: '#tile-demo-4',title:'左侧标题',title_left:true,icon:'&#xe806;'});
});
````
## 设置 bar

建议不要同时使用title和bar

````html
<div id="tile-demo-5">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile5=new tile({element: '#tile-demo-5',bar:'&emsp;底部bar效果',bar_tip:'1200',icon:'&#xe81e;'});
});
````

## 设置 thame

当ui-tile-main-only 模式下时，优先显示main—thame

#### tile thame

````html
<div id="tile-demo-6">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile6=new tile({element: '#tile-demo-6',bar:'&emsp;底部bar效果',bar_tip:'1200',icon:'&#xe81e;',thame:'belize-hole'});
});
````
#### main-thame

````html
<div id="tile-demo-7">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile7=new tile({element: '#tile-demo-7',bar:'&emsp;底部bar效果',bar_tip:'1200',icon:'&#xe81e;',thame:'belize-hole',main_thame:'wet-asphalt'});
});
````
#### main-thame || main-only

````html
<div id="tile-demo-8">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile8=new tile({element: '#tile-demo-8',icon:'&#xe81e;',thame:'belize-hole',main_thame:'wet-asphalt'});
});
````

#### 绑定链接

````html
<div id="tile-demo-9">	 
</div>
````

````javascript
seajs.use('tile', function(tile){
  var Tile9=new tile({
    element: '#tile-demo-9',
    title:'链接测试',
    icon:'&#xe81e;',
    thame:'belize-hole',
    main_thame:'wet-asphalt',
    urls:{ 
      tile:'http://www.baidu.com',
      title:'http://www.google.com'
    },
    contents:[
      {url:'',content:'000内容测试0'},
      {url:'http://www.163.com',content:'1111111111内容测试'}
    ]
  });
});
````
