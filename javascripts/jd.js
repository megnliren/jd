/**
 * Created by zhimeng on 2017-7-20.
 */
  window.onload=function(){

      var str=location.href.split("=")[1];
      document.getElementById("logined").innerHTML='<a style="color:red">'+str+'</a>';

    // 关闭top-banner
      var tb=document.getElementById("tb");
      var close=document.getElementById("close");
      close.onclick=function(){
          tb.style.display="none";
      };
    //  nav效果   我的京东
      var my_jd=document.getElementById("my_jd");
      var my_jd_detail=my_jd.getElementsByTagName("div")[0];
      my_jd.onmouseover=function(){
          my_jd_detail.style.display="block";
      }
      my_jd.onmouseout=function(){
          my_jd_detail.style.display="";
      }
      //  手机京东
      var jd_tel=document.getElementById("jd_tel");
      var tel_detail=jd_tel.getElementsByTagName("div")[0];
      jd_tel.onmouseover=function(){
          tel_detail.style.display="block";
      }
      jd_tel.onmouseout=function(){
          tel_detail.style.display="";
      }
      //  客户服务
      var server=document.getElementById("server");
      var server_detail=server.getElementsByTagName("div")[0];
      server.onmouseover=function(){
          server_detail.style.display="block";
      }
      server.onmouseout=function(){
          server_detail.style.display="";
      }
    // 网站导航
      var web_nav=document.getElementById("web_nav");
      var web_nav_detail=web_nav.getElementsByTagName("div")[0];
      web_nav.onmouseover=function(){
          web_nav_detail.style.display="block";
      }
      web_nav.onmouseout=function(){
          web_nav_detail.style.display="";
      }



      //    搜索框
      var search_input=document.getElementById("search_input");
      var search_input_inp=search_input.children[0];
      var search_input_btn=search_input.children[1];
      search_input_inp.onfocus=function(){
          if(this.value=="恒温调奶器"){
              this.value="";
          }
      }
      search_input_inp.onblur=function(){
          if(this.value==""){
              this.value="恒温调奶器";
          }
      }
      //  tab栏切换
      var shortcut_nav_menu=document.getElementById("shortcut_nav_menu");
    var shortcut_nav_menu_one=document.getElementById("shortcut_nav_menu_one");
      var shortcut_div=shortcut_nav_menu_one.children;
      var shortcut_tab=document.getElementById("shortcut_tab");

      var tab_divs=shortcut_tab.children;
      for(var i=0;i<shortcut_div.length;i++){
          shortcut_div[i].index=i;
          tab_divs[i].index=i;
          shortcut_div[i].onmouseover=function(){
              for(var j=0;j<shortcut_div.length;j++){
                  tab_divs[j].className="";
              }
              tab_divs[this.index].className="show";
              this.style["backgroundColor"]="#fff";
              this.children[0].children[0].style["color"]=this.children[1].style["color"]="#B1191A";

          }
          shortcut_div[i].onmouseout=function(){
              //tab_divs[this.index].className="";
              this.style["backgroundColor"]="#C81623";
              this.children[0].children[0].style["color"]=this.children[1].style["color"]="#fff";

          }
          tab_divs[i].onmouseover=function(){
              this.className="show";
              shortcut_div[this.index].style["backgroundColor"]="#fff";
              shortcut_div[this.index].children[0].children[0].style["color"]=shortcut_div[this.index].children[1].style["color"]="#B1191A";

          }
          tab_divs[i].onmouseout=function(){
              tab_divs[this.index].className="";
              shortcut_div[this.index].style["backgroundColor"]="#C81623";
              shortcut_div[this.index].children[0].children[0].style["color"]=shortcut_div[this.index].children[1].style["color"]="#fff";

          }


      }


      //    轮播图
      var slider=document.getElementById("slider");
      var s_ul=slider.children[0];
      var s_lis=s_ul.children;

      s_ul.appendChild(s_ul.children[0].cloneNode(true));
      var s_ol=document.createElement("ol");
      slider.insertBefore(s_ol,slider.children[1]);//把 ol 追加到slider里面
      for(var i=0;i<s_lis.length-1;i++){
          var ol_li=document.createElement("li");
          ol_li.innerHTML=i+1;
          s_ol.appendChild(ol_li);
      }
      s_ol.children[0].className="current";
        //开始动画部分
      var ollis=s_ol.children;
      for(var i=0;i<ollis.length;i++){
          ollis[i].index=i;
          ollis[i].onmouseover=function(){
              for(var j=0;j<ollis.length;j++){
                  ollis[j].className="";
              }
              this.className="current";
              animate(s_ul,-this.index*s_lis[0].offsetWidth);
              square=key=this.index;
          }

      }
    //4.定时器
      var  timer=null;//轮播图的定时器
      var key=0;//控制播放的张数
      var square=0;//控制小方块
      timer=setInterval(autoplay,1500);
      function autoplay(){
          key++;
          if(key>s_lis.length-1){
              s_ul.style.left=0 +"px";//迅速调回
              key=1;//因为是第六张就是第一张，第六张播放完。下次是播放第二张
          }

          animate(s_ul,-key*s_lis[0].offsetWidth);
          square++;
          if(square>ollis.length-1){
              square=0;
          }
          for(var i=0;i<ollis.length;i++){
              ollis[i].className="";//先清除所有的
          }
          ollis[square].className="current";
      }

      slider.onmouseover=function(){
          clearInterval(timer);
      }
      slider.onmouseout=function(){
          timer=setInterval(autoplay,1500);
      }

        //左右轮播
      var arrow=document.getElementById("arrow");
      var arrleft=arrow.children[0];
      var arrright=arrow.children[1];
      arrleft.onclick=function(){
          key--;
          if(key<0){
              s_ul.style.left=-6*s_lis[0].offsetWidth +"px";//迅速调回
              key=5;//因为是第六张就是第一张，第六张播放完。下次是播放第二张
          }
          animate(s_ul,-key*s_lis[0].offsetWidth);
          square--;
          if(square<0){
              square=ollis.length-1;
          }
          for(var i=0;i<ollis.length;i++){
              ollis[i].className="";//先清除所有的
          }
          ollis[square].className="current";
      }
      arrright.onclick=function(){
          clearInterval(timer);
          autoplay();
      }

//go-pro效果
      var box=document.getElementById("go-pro-box");
      var Alink=box.getElementsByTagName("a");

      for(var i=0;i<Alink.length;i++){
          Alink[i].onmouseover=function(){
              this.children[3].style.right=10+"px";
          }
          Alink[i].onmouseout=function(){
              this.children[3].style.right=0+"px";
          }
      }

      var Mbox=document.getElementById("main-news-top-money-box");
      var Iarr=Mbox.getElementsByTagName("i");
      for(var i=0;i<Iarr.length;i++){
          Iarr[i].style.backgroundPosition="0 "+(-i*25)+"px";
      }

      
    //pro部分
        var pro=document.getElementById("pro");
        var pro_lis=pro.getElementsByTagName("li");
          for(var i=0;i<pro_lis.length;i++){
              pro_lis[i].index=i;
              pro_lis[i].onmouseover=function(){
                  multi_animate(this.children[1],{"bottom":25});
              };
              pro_lis[i].onmouseout=function(){
                  multi_animate(this.children[1],{"bottom":-40});
              }
          }




      //返回顶部
      var gotop=document.getElementById("bottom");
      window.onscroll=function(){
          scroll().top>200? show(gotop):hide(gotop);
          leader=scroll().top;
      }
      var leader= 0,target= 0,g_timer=null;
      gotop.onclick=function(){
          target=0;
          g_timer=setInterval(function(){
              leader=leader+(target-leader)/10;
              window.scrollTo(0,leader);
              if(leader==target){
                  clearInterval(g_timer);
              }
          },200)
      }


  }


