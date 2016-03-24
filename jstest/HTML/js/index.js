// 变量和数据类型
// js的变量是弱类型的变量,就像星一个容器可以任意存放元素
// var 关键字,用来声明js 的变量(容器):(1)不能用数字开头
//                (2)可以使用$,字母.下划线开头
//                (3)不能使用关键字和保留字(如:this throw if)
//                (4)遵守驼峰式命名
//  数据类型:(1)基本数据类型(number,string,boolean,null,undefined)
//          (2)引用数据类型
//                数组Array
//                正则RegExp
//                对象object
//                函数function
//                日期Date,,,,,
//
//
///*
// * number数据类型
// *      1.正数 2.负数  3.小数  0  NaN(not a number)
// *      2 parseInt parseFloat isNaN Number
// *      1>parseInt(),将字符串转化成Int数字(从左到右取出到非数字字符为止)
// *      2>parseFloat,与parseInt功能相似,取字符串中的浮点数
// *      3>isNaN,判断字符串中是否是有效数字的
// *      4>Number()强制类型转换,将字符串转化成number类型
// *      == 比较两边是否相等  个例:NaN == NaN 是false
// *      === 绝对相等判断(包括类型一致)
// * */
///*
//* Boolean类型
//* 比较:(1)两个对象比较永远不相等
//*
//* */
//     /*
//     * string类型
//     *
//     * */
//     /*
//     * 引用对象类型
//     *    对象/数组/正则/函数/时间/,,,
//     *
//     *    对象数据类型:键值对用,隔开,花括号括起来
//     *        var a ={
//     *            name:'nsnns',
//     *            age:23,
//     *            height:180
//     *        }
//     *//js的组成部分1:BOM browser object Model (浏览器对象模型)
//     *2:DOM document object Model (文当对象模型,网页内的可见元素)
//     *
//     * */
//    /*
//    * 基本数据类型和引用数据类型的区别
//    *
//    * */
//    /*
//     3:ECMAScript js的核心{
//     包括:1>基本语法
//     2> 操作语句
//     3>变量和数据类型
//     }/
//     */
//
//
///*
//* DOM
//* DOM
//*      1.document.getElementById("");返回单个元素
// *       DOM中常用的获取元素的方法,默认相同id的情况下,获取第一个元素,
//*        如果网页中不存在该id,返回null,
//*        低版本的ie中,表单元素的name属性会当做id来使用(尽量id 不要和name相同),,,,使用ietester可以测试多版ie兼容问题
//*
//*      2.document.getElementsByTagName("tagname");返回同类型的元素
//*        >.一般情况下要规定一个上下文
//*        >.返回的是一组元素,即使只有一个也要加索引(从数组中取值),,取得的元素name没有兼容性,,可以随便用
//*      3.document.getElementsByClassName();通过类名获取一组元素,
//*         >. 返回一组集合,并且有一个常用属性叫Length,,这是一个类数组
//*         >.低版本ie中不兼容,,ie 6-8
// *        >.
//*      4.document.getElemenntByName(); 通过name属性获取元素,
//*         >.一般操作的都是表单元素
//*         >.操作其他非表单元素,通过name也可以获取
//*         >.
//*      5.document.documentElement ==>获取html
//*      6.document.body ==>获取body元素
//*      7.document.querySelector(); 一般在jQuery应用在移动端开发中使用,跟jQuery的选择器的使用方法雷同
//
//       8.document.querySelectorAll();
// * */
/*
* 2,DOM中 的常见关系和方法
*       parentNode(父节点)
*             node 节点的意思:节点(标签/注释/文本,,,,)
*       childNodes 子节点(换行/空格/注释,,,)
*       children (元素子节点)
*       previousSlibling();  哥哥节点 previousElementSibling();哥哥元素
*       nextSibling 弟弟节点  nextElementSibling 弟弟元素
*       firstChild 第一个子节点
*       lastChild 最后一个子节点]
*
*       node判断运算的属性  类型 名称 值 对应关系表
*
*                 元素        文本         注释         docunment
*       nodeType   1           3           8             9
*
*       nodeName  大写标签名   #text       #comment      #document
*
*
*       nodeValue  null      文本内容      注释内容       null
*
*
* 3.DOM中的增/删/改
*        创建  document.createElement('');参数标签名字,
*           应用场景:延时加载(图片的动态加载展示--淘宝)
*
*
* */

var curTaget = document.getElementById("mySelect");
var change = function(target){
    console.log(target.text);
    var obj = {name:"niam",age:20,higt:30}
    var name = '';
    for (var name in obj){
        console.log(name);
    }
    var kDWith = document.documentElement.clientWidth||document.body.clientWidth;
    var kDheight = document.documentElement.clientHeight||document.body.clientHeight;
    kDheight.inne()
    console.log(kDWith);
    console.log(kDheight);
    console.log(target.parentNode);
}

