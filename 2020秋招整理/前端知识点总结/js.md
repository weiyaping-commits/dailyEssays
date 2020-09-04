# 1. js入门知识点
## 1.NaN是什么？有什么特别之处？
    答：NaN是not a number ,不是数字的数字，可以理解为它是一个数字类型，但是他不是一个有效的数，表示为错误数字。
    注意：NaN和NaN是不相等的。
## 2.console.log()输出打印不同结果？
    1+'2' = 12;
    1-'2' = -1;
    + new Date()//1533475143846 + 一个对象，会调用这个对象的valueOf()或者toString()方法
    +'2' = 2;// + 一个字符串，会转换为数字输出。
## 3. 优先级划分
    typeof、 +、 >、 ||、 
    eg:
    var a =1,b=2,c=3;
    var val = typeof a+b || c >0;
    console.log(val);//输出：number2
    -----------------------------------------------------
    ++ 、 +
    eg:
    var a=1,b=3;
    console.log(a+++b);//输出：4
    ------------------------------------------------------
    == 、 =
    eg: 
    var d=5;
    var data = d == 5 && console.log("bb");
    console.log(data);//输出：undefined,  分析：&&前面部分为true,直接输出后面部分的返回值，但是console.log()没有返回值，故为undefined.  
## 4.逻辑表达式
    || 前面部分不为0，直接输出前面部分；
    && 前面部分为true，直接输出后面部分。
## 5.js的数据类型
    1.原始数据类型：number,string,boolean,undefined,null,Symble
    2.复杂数据类型：Object
    
    3.对象类型和原始类型的不同之处：
    （1）对象数据类型是存储再堆中的，存储的是地址（指针）。当我们把一个对象复制给另一个对象的时候，复制的是他的地址，指向同一块内存空间，
    当一个对象中的数据发生改变的时候，另外一个对象的数据也相应地发生改变。
    （2）原始数据类型是存储再栈内存中的，存储的是数据。
    eg:对象数据类型
    var obj1 = {a:1,b:2};
    var obj2 = {a:1,b:2};
    console.log(obj1 == obj2);//false,对象数据类型的指针（逻辑地址）不一样；
    console.log(obj1 = obj2);//{a:1,b:2},赋值操作，将obj2的逻辑地址赋值给obj1
    console.log(obj1 == obj2);//true,此时两个对象指向同一块内存空间。
## 6.js的数据类型的判断
    （1）三种判断方法
    typeof
    instanceof
    Object.prototype.toString.call()
    (2)区别
    typeof(12);//number
    typeof('12');//string
    typeof(true);//boolean
    typeof(undefined);//undefined
    typeof(null);//object
    typeof(Array);//Function
    typeof(NUmber);//FUnction
    这里，typeof能够判断基本的数据类型,除了null;typeof不能判断判断对象类型。
    123 instanceof Number;//false
    '123' instanceof String;//false
    true instanceof Boolean;//false 
    null instanceof Object;//false
    Function instanceof Object;//true
    [] instanceof Array;//true
    这里，instanceof可以判断对象数据类型，但是不能判断基本数据类型。
    Object.prototype.toString.call(123);//[object Number]
    Object.prototype.toString.call('123');//[object String]
    Object.prototype.toString.call(true);//[object Boolean]
    Object.prototype.toString.call([]);//[object Array]
    Object.prototype.toString.call(null);//[object Null]
    Object.prototype.toString.call(undefined);//[object Undefined]
    这里Object.prototype.toString.call()是根据原型链去找的，可以找到所有数据类型的结果。
## 7.null和undefined之间的区别.
    null表示此处的值是”无“的状态；
    undefined表示此处的值是未定义、未处理或者不存在的。
    当一个变量没有赋值的时候，是undefined.
## 8.代码判断
    console.log(a);//undefined,变量声明会被提前
    var a =1;
    console.log(b);//报错，b is not defined
## 9.break和continue的区别？
    break跳出循环体，执行循环体后面的语句；
    注意：break用在if,switch...case...,while,do...while,for中
    break在if...else中不起作用；
    在多层循环中，一个break语句只想外提出一个循环。
    continue跳出当前循环，执行下一次循环。
## 10.函数声明提升
    函数定义的三种方式：
    （1）函数声明:函数声明提前
    add(1,2);
    function add(a,b){return a+b;}
    //不会报错，因为函数声明提前了
    （2）函数表达式
    add(1,2)
    var sum = function(a,b){return a+b;}
    //报错add is not a function；函数表达是声明提前了，但是初始化没有被提前。
    （3）构造函数
    new function();
## 11.容易混淆的常见变量作用域的代码题
    var a = 1;
    function fn1(){
        function  fn3() {
            function fn2(a) {
                console.log(a);
            }
            fn2();
            var a=4;
        }
        var a=2;
        return fn3;
    }
    var fn = fn1();
    fn(); //输出：undefined,因为var a=4;变量赋值在函数调用fn2()后面;尽管变量声明提前了，但是a还没赋值不久被调用输出了，故为undefined.
    ----------------------------------------------------------------------------------------------------------------------------------
    var a = 1;
    function fn1(){
        function fn2(a) {
            console.log(a);
        }
        function fn3() {
            var a=4;
            fn2();
        }
        var a=2;
        return fn3;
    }
    var fn = fn1();
    fn();//输出：4，此处的var a=4;在fn2()之前。
    ---------------------------------------------------------------------------------
    var a = 1;
    function fn1(){
        function fn3() {
            var a=4;
            fn2();
        }
        var a=2;
        return fn3;
    }
    function fn2(a) {
        console.log(a);
    }
    var fn = fn1();
    fn();//输出：1，因为此时的fn2()，寻找a的时候在自己函数体内没有找到的时候，就往上一级寻找，在全局变量中寻找。
## 12.for...of 遍历数组，for...in 遍历对象？
    function f1(arr) {
        for(var i of arr){
           console.log(Math.pow(i,2));//  这里是重点区分的地方（i）
        }
    }
    arr = [3,4,5];
    f1(arr);//9 16 25
    ------------------------------------------------------------------------------------------------------
     function f1(obj) {
        for(var key in obj){
            console.log(obj[key]);//  这里是重点区分的地方i（obj[key]）
        }
    }
    var company={
        name:"xiaowang",age:3,sex:"man"
    }
    f1(company);//xiaowang 3 man
## 13.JS有哪些内置对象？
    Object是js中所有对象的父对象
    数据封装类对象：Number,String,Boolean,Object,Array
    其它类对象：Math,Date,Function,RegExp,Error,Arguments
---
# 2. js基础知识点
## 1.闭包是什么？闭包的作用？闭包的使用场景？
    函数+环境=闭包；
    闭包的作用是封装数据和暂存数据；
    闭包的使用场景：（1）封装私有变量；（2）模仿块级作用域；（3）实现JS模块
## 2.js执行上下文栈和作用域链？
    执行上下文栈：就是当前Javascript代码被解析和执行所在环境，js执行上下文栈可以认为是一个存储函数调用的栈结构，遵循先进后出的原则。
    Javascript执行在单线程上，所有的代码都是排队执行的；一开始浏览器执行全局的代码的时候，首先创建全局的执行上下文栈，压入执行栈的顶部；
    每当进入一个函数的执行就会创建一个函数执行上下文，并把它压入栈顶。当前函数执行完后，当前函数的执行上下文出栈，等待垃圾回收。
    浏览器的js执行引擎总是访问栈顶的执行上下文。
    全局上下文只有唯一一个，他在浏览器关闭的时候出栈。
    
    作用域链：无论是从左开始的还是从右开始的查询，都会在当前的作用域开始查找，如果没有找到，就会向上一级的作用域中继续查找目标标识符，每次上升一个作用域，
    一直到全局作用域为止。
## 3.代码练习
    3.1操作数组，返回一个新数组，新数组中只包含正数。
    function f1(arr) {
       var arr2=[];
        for(var i=0;i<arr.length;i++){
            if((typeof arr[i] == 'number') && (arr[i] > 0)){//巧妙之处,用typeof判断数据类型
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
    var arr = [3,-1,2,true]
    console.log(f1(arr));//输出[3,2]
    --------------------------------------------------------------
    3.2实现数据按照姓名、年纪、任意字段排序。
    function f1(filed) {
      return function(user1,user2){
          if(user1[filed] > user2[filed]){
              return 1;
          }else if(user1[filed] < user2[filed]){
              return -1;
          }else {
              return 0;
          }
      }
    }
    var user = [
       {name:"John",age:20,company:"baidu"},
       {name:"Pete",age:18,company:"alibab"},
       {name:"Ann",age:19,company:"tecent"},
    ]
    // console.log(user.sort(f1("company")));
    console.log(user.sort(f1("age")));
    // console.log(user.sort(f1("name")));
    ------------------------------------------------------------
    3.3用splice函数分别实现push、pop、shift、unshift方法
       function push1(arr,value) {
            arr.splice(arr.length,0,value);//从第length-1位开始删除0个元素，插入value
            return arr;
       }
       function pop1(arr) {
            arr.splice(arr.length-1,1);//从第length-1位开始删除1个元素
           return arr;
       }
       function shift1(arr) {
           arr.splice(0,1);//从第0位开始删除1个元素
           return arr;
       }
       function unshift1(arr,value) {
           arr.splice(0,0,value);//从第0位开始删除0个元素，插入value
           return arr;
       }
    
       var arr = [3,4,5];
       console.log(push1(arr,10));//[3,4,5,10]
       console.log(pop1(arr));//[3,4,5]
       console.log(shift1(arr));//[4,5]
       console.log(unshift1(arr,9));//[9,4,5]
    
## 4.会改变原来数组元素的API?
    修改原数组的API有：
    sort() 顺序发生变化
    reverse() 顺序发生变化
    push() 数组变长
    unshift() 数组变长
    pop() 数组长度减少
    shift() 数组长度减少
    splice() 数组变长或者变少
## 5.前端一万小时，看到js13了







    
    
   