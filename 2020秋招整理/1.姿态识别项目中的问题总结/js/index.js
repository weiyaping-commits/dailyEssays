window.onload=function () {
    //获取信息显示的idinfo
    var info = document.getElementById("info");
    //获取图片的id
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");

    var path1 = ["./img/group1-2.1.png","./img/group2-2.1.png","./img/group3-2.1.png",];
    var path2 = ["./img/group1-2.2.png","./img/group2-2.2.png","./img/group3-2.2.png"];
    var path3 = ["./img/group1-1.2.png","./img/group2-1.2.png","./img/group3-1.2.png"];
    var grade= ["综合评分90分","综合评分85分","综合评分75分"];
    //定义图片索引
    var index = 0;

    //获取按钮
    var btn = document.getElementsByTagName("button");
    //上一张功能实现
    btn[0].onclick=function(){
        index--;
        //判断index是否小于0
        if(index<0){
            index = path1.length -1;
        }
        image1.src = path1[index];
        image2.src = path2[index];
        image3.src = path3[index];
        document.getElementById("vi").innerHtml = grade[index];
    }
    //下一张功能实现
    btn[1].onclick=function(){
        index++;
        //判断index是否小于0
        if(index>path1.length-1){
            index = 0;
        }
        image1.src = path1[index];
        image2.src = path2[index];
        image3.src = path3[index];
        document.getElementById("vi").innerHTML=grade[index];
    }


}

