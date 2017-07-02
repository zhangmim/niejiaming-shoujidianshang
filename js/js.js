/**
 * Created by Administrator on 2017/5/25 0025.
 */
$("nav>ul .yiji").tap(
    function(){
        $("nav .erji").toggle();
        return false;
    }
)
$(".banner .dian li").tap(
    function(){
        var i=$(this).index();
        a=i;
        var x=i*-6.4+"rem";
        $(".banner .pic").css("transform","translateX("+x+")")
        $(this).addClass("juse").siblings().removeClass()
    }
)

//ÂÖ²¥Í¼×ó»®
    var a=0;

$(".banner").swipeLeft(
    function(){

        if(a<3){
            a++;
            var v=a*-6.4+"rem";
            $(".banner .pic").css("transform","translateX("+v+")")

            $(".dian li").eq(a).addClass("juse").siblings().removeClass()
        }

    }

)

 var a=0;

$(".banner").swipeRight(
    function(){

        if(a>0){
            a--;
            var v=a*-6.4+"rem";
            $(".banner .pic").css("transform","translateX("+v+")")
            $(".dian li").eq(a).addClass("juse").siblings().removeClass()
        }

    }

)