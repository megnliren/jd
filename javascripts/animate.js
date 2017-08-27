//单个属性缓动动画封装
function animate(obj,target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = (obj.offsetLeft + step )+ "px";
            if(obj.offsetLeft==target){
                clearInterval(obj.timer);
            }
    },25);
}

//多个属性缓动动画封装
function multi_animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag=true;
        for(var attr in json) {
            var current = 0;
            if (attr == "opacity") {
                current = Math.round(parseInt(getStyle(obj,attr)*100));
            }
            else {
                current = parseInt(getStyle(obj,attr));
            }

            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (attr == "opacity") {
                if ("opacity" in obj.style) {
                    obj.style.opacity = (current + step) + "px";
                }
                else {
                    obj.style.filter = "alpha(opacity=" + (current + step) + ")";
                }
            }
            else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
            }
            else {
                obj.style[attr] = (current + step )+ "px";
            }
            if (current != json[attr]) {
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },25);
}

//样式的获取
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
}

function $(id){
    return document.getElementById(id);
}

function show(obj){
    obj.style.display="block";
}
function hide(obj){
    obj.style.display="none";
}
/**
 * Created by andy on 2015/12/8.
 */
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
/**
 * Created by Lenovo on 2016/9/2.
 */
/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str){
    var str1 = str.charAt(0);
    if(str1==="#"){
        return document.getElementById(str.slice(1));
    }else if(str1 === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
        //判断，如果不是传递过来的元素本身，那么添加到新数组中。
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
