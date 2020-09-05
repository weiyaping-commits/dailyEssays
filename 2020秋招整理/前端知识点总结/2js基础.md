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
## 3.代码练习(关于数组的练习)
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
     --------------------------------------------------------------------------------------
    3.4 数组去重
        function qc(arr){
           let arr2 = [];
           for(let i=0;i<arr.length;i++){
               if(arr2.indexOf(arr[i]) == -1){
                   arr2.push(arr[i]);
               }
           }
           return arr2;
        }
        console.log(qc([1,2,3,4,5,6,3,4,2]));
    3.5 使用原生js将一个多维数组拍平(重要)
       方法一：原始方法
       var array = [1,[2],[3,[4,[5]]]];
       function flat(){
           var flatArr = [];
           return function flatten(arr){
               for(var index=0;index<arr.length;index++){
                   Array.isArray(arr[index]) ? flatten(arr[index]) : flatArr.push(arr[index]);//判断array中的每一项是否是数组，如果是数组就递归，否则保存到新数组中
               }
               return flatArr;
           }
       }
       console.log(flat()(array));//[1，2，3，4，5]
       方法二：toString方法
        var array = [1,[2],[3,[4,[5]]]];
          function flat(){
              return array.toString().split(",").map(val => {
                  return parseInt(val);//注意：此处可以简写称 return +val;
              })
          }
          console.log(flat(array));
       
## 4.会改变原来数组元素的API?
    修改原数组的API有：
    sort() 顺序发生变化
    reverse() 顺序发生变化
    push() 数组变长
    unshift() 数组变长
    pop() 数组长度减少
    shift() 数组长度减少
    splice() 数组变长或者变少
## 5.for...of,for..in,forEach,map的区别？
    (1)for...of 循环，可以使用的范围包括数组，Set和Map结构，某些类似数组的对象，Gennerator对象，以及字符串。
    （2）for...in 循环遍历对象自身和继承的可枚举的属性，不能直接获取属性值，可以中断循环。
    （3）forEach(使用场景：只需要在数组上做迭代修改) 
        ①只能遍历数组，不能中断循环；
        ②为每个元素执行回调；
        ③没有返回值（或者返回值是undefined）
        eg:
        const a = [1,2,3]
        const double = a.forEach((num,index)=>{
            //执行与num,index相关的代码
        })  
        console.log(double);//undefined
    （4）map(使用场景：想得到一个结果，但是不想改变原来的数组，就用.map())
        ①遍历数组中的元素，不能中断循环；
        ②通过对每个元素调用函数，将每个元素“映射（map）”到一个新元素，从而创建一个新数组并返回。
        eg:
        const a = [1,2,3]
        var double = a.map(num =>{
            return a*2;
        })
        console.log(double);//[2,4,6]
## 6.for...of 遍历数组，for...in 遍历对象？
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
## 7.如何取出一个数组中的最大值（ES5,ES6）?
    (1)ES5中
    Math.max.apply(null,[1,2,3,4,5]);//5    
    (2)ES6中
    Math.max(...[1,2,3,4,5])
    (3)reduce
    [1,2,3,4,5].reduce((index,currentValue)=>{return currentValue = index > currentValue ? index : currentValue})
    
 