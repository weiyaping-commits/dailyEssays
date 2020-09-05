### 一些知识点的总结 2020.08.31
# 58同城牛客网上笔试练习
晚上八点有58同城笔试
---
* 第1题
```
 var a=[0];
 if(a){
     console.log(a==true);
 }
 else{
     console.log("wut");
 }
答：输出结果是：false.
拓展：值为false的五种情况，数字0，特殊值的null,undefined,NaN,字符串的”“；
```
* 第2题
```
css 属性能够设置盒模型的内边距为上 10px 、下 20px 、左 30px 、右 40px 的合并写法 ____.
答：padding:10px 40px 20px 30px.
```
* 第3题
```angular2（考察w3c和标准盒模型）
当块级元素设置 box-sizing:border-box 属性时，该块级元素的 width 包含哪几个部分？
答:content-width+border+padding.
拓展：box-sizing:content-box;IE盒模型，width = content-width;
    box-sizing:border-box;W3C盒模型，width = content-width + border + padding;
```
* 第4题 
```angular2 
列举出 3 个 JS 中的基本数据类型。
答:基本数据类型：number,string,null,undefied,Boolean
拓展：object属于引用数据类型。
```
* 第5题 
```angular2 
input 的 type 属性值列举 3 个.
答:text,password,file,button,submit,radio,textarea,checkbox,email.
```
* 第6题
```angular2 
移动浏览器中，触摸一下屏幕会依次触发哪些事件？
答：触发事件：touchstart,touchend,touchmove,touchcancel.
拓展：touchstart:手指触摸到屏幕会触发；
    touchmove:手指在屏幕上移动时会触发；
    touchend:手指离开屏幕时会触发；
    touchcancel:可由系统进行触发，比如手指触摸屏幕的时候，突然alter了一下；或者系统中其他打断了touch的行为，则可以触发该事件。
```
* 第8题
```angular2 
常见的浏览器端的存储技术有哪些？
答：seseeion storage:存储在浏览器中，浏览器关闭数据消失；即在同源浏览器中也不能共享数据;
    cookies：放在http请求头中，伴随着数据的传输而传输，数据传输大小有限制，有过期时间;
    local stroage：存储在本地，不会伴随数据传输，生命周期为永久；
```
* 第9题
```angular2 
非严格模式下写出下面表达式结果parseInt(“123a”)=____.？
答：123.
拓展：parseInt(“a”)=NaN.
```
* 第10题(难点)
```angular2 
var a=[1,2,3,4,5];
a.splice(1,3,5,2,1);//从第一个元素开始删除三个元素，剩下【1，5】；然后从第一个元素的位置，插入5，2，1，变成【1，5，2，1 ，5】
console.log(a);
答：[1,5,2,1,5].
拓展：splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
```
* 第11题
```angular2 
简述css中position属性为absolute和relative的区别。
答：positon:absolute;绝对定位，
    （1）使元素完全脱离文档流；
    （2）使内嵌元素支持宽高设置；
    （3）使块元素的内容撑开宽度；
    （4）如果有定位父级则相对于定位父级发生偏移，没有定位父级相对于document发生偏移；
    （5）提升层级。
  position:relativate;相对定位，
    （1）元素没有脱离文档流（元素移动后原始位置会被保留）
    （2）不影响元素本身的特性；
    （3）有定位父级则相对于定位父级发生偏移，没有定位父级相对于浏览器；
    （4）提升层级。
```
* 第12题
```angular2 
简述domready和onload事件的区别？图片的onload和domready和页面onload的先后顺序，并简述原因。
答：（1）domready和onload事件的区别：
    domready在DOM文档结构准备完毕后就可以对DOM进行操作；
    lonload在整个document文档（包括图片等加载信息）加载完成后才能对DOM进行操作。
    （2）加载顺序：
    domready(也叫做DOMContentLoaded),在dom树构建完成后触发；
    图片onload事件是在加载图片等外部文件时触发；
    页面onload事件是在页面加载完毕后触发的。
    故执行顺序是：domready->图片load->页面load.
拓展：dom文档加载的步骤：
    1）解析html结构；
    2）加载外部样式表文件（css文件）和外部脚本文件（js）;
    3）解析并执行脚本；
    4）dom树构建完成；
    5）加载图片等外部文件；
    6）页面加载完毕。
```
* 第13题
```angular2 
描述一个你在实际项目中有用过什么比较好的布局方式（不拘泥于页面整体布局，页面中某一小版块也行），深入讲解下其中的原理？
答：bootstrap响应式布局。
```
* 第14题（重点）
```angular2 
Ajax是什么？Ajax的交互模型？同步和异步的区别？如何解决跨域问题？
答：（1）Ajax全称是：Asynchronous JavaScript and XML,异步的Javascript和XML，是一种创建交互网页应用网页开发技术。
    AJAX不是新的编程语言，而是一种使用现有标准的方法。
    Ajax的作用：做要是用来实现客户端和服务器的异步通信，实现页面的局部刷新。
    （2）Ajax的实现过程（交互模型）：
        1）创建XMLHttpRequest对象，也就是创建一个异步调用对象；用户发出异步请求；
        2）创建一个新的http请求，并指定该http请求的方法、URL以及验证信息；
        3）设置响应Http请求状态变化的函数，发起http请求；
        4）获取异步调用返回的数据；
        5）使用Javascrip和dom实现局部刷新。
    （3） 同步：客户端和服务端建立连接后，客户端发送完请求后一直等待服务端的数据返回，之间的时间段不做其它操作；直到客户端和服务端的断开连接；
         异步：客户端向服务器发送完请求后，客户端可以去做其它操作，直到服务器有数据返回，客户端去接收服务端传来的数据。
    （4）跨域：iframe标签中的src属性可以解决。
```
* 第15题（重点）
```angular2 
简述instanceof和type的区别？
简述[ ]instanceof Object的值和原因？
答：(1)typeof一元运算符，用来返回操作数类型，返回值有undefined,string,boolean,number,fucntion,object。
    数组，null,对象返回值都是object;
    数组可以用instanceof来检测，instanceof可以准确的判断复杂的数据类型，但是不能正确判断基本数据类型（A instanceof B）
    (2)true 原因：instanceof是通过原型链判断的，会一直找到原型链的顶端，[]是Array类型，原型链的顶端是Object,故返回值是true.
```
---
编程题
* 第16题
~~~~
题目描述
编写一个函数isMerge，判断一个字符串str是否可以由其他两个字符串part1和part2“组合”而成。“组合 ”的规则如下：
1). str中的每个字母要么来自于part1，要么来自于part2;
2). part1和part2中字母的顺序与str中字母的顺序相同。
例如：
"codewars"由"cdw"和"oears"组合而成：
s: c o d e w a r s = codewars
part1: c d w = cdw
part2: o e a r s = oears
~~~~
```
function isMerge(s, part1, part2) {
    var  str = part1 + part2;
    if(s.length != str.length){
        return false;
    }
    var arrayS = s.split("");
    var arrayStr = str.split("");
    for(var i=0;i<s.length;i++){
       if(str.indexOf(s[i]) != -1){
           return true;
       }
    }
    return false;
}
优化2
function isMerge(s, part1, part2) {
    var p1 = part1.split(''),
	p2 = part2.split('');

    for(var i = 0, length1 = s.length; i < length1; i++){
	    if (p1.indexOf(s[i]) > -1) {
	        p1.shift();
	    } else if (p2.indexOf(s[i]) > -1) {
	        p2.shift();
	    } else {
	        return false;
	    }
    }
    return true;
} 

```
* 第17题
~~~~
编写请给 Array 本地对象增加一个原型方法，它用于删除数字数组中重复的数字（可能有多个），返回值是一个包含被删除的重复条目的新数组。
~~~~
```angular2 
Array.prototype.quzhong = function (arr) {
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] == arr[j]){
                arr.splice(i,1);
                j--;
                i--;
            }
        }

    }
    return arr;
}
优化2：利用ES6特性，一行代码搞定，暴力的同时，效率很高
Array.prototype.deleteSame = ()=>{return Array.from(new Set(arr))};

```
* 第18题
~~~~
【编程题】
小 S，小L，小P，小R和小H 五个人排队站在一个出售’克隆可乐’的自动贩卖机前 ； 队伍中除了他们五个没有其他人 。 队形如下 ：
小 S，小L，小P，小R，小H
队列的第一个人 （小S）买了一听可乐，喝下去后变成了两个小S！然后两个小S心满意足的站到了队伍的最后。此时队形变成了这样：
小 L，小P，小R，小H，小S，小S
然后队列中下一个人 （小L）也买了听可乐，喝下去后变成两个人，站到了队伍最后。以此类推。例如小P第三个喝了克隆可乐，之后队伍变成这个样子：
小 R，小H，小S，小S，小L，小L，小P，小P
请问第 n个喝这个饮料的人是谁？
~~~~
```angular2

```


