var selected=0;
var k=0;
var p=0;
$(".chose").on("click",function(event){
    $(selected).removeClass("optionj");  
k=event.target;
console.log(k);
k=$(k).attr("id");
mainscreen(k);
}

)
function mainscreen(k){
    var link=src="images/image-product-"+(k)+".jpg";
    $(".mainpic").attr("src",link);
    selected=("#"+k);
    $(selected).addClass("optionj");
}
$(".plus").on('click',function(event){
    p++;
$(".it").text(p);

})
$(".minus").on('click',function(event){
    if(p>0){
    p--;
}
$(".it").text(p);

});

$(".btn2").on('click',function cart(){
    if(p>0){
        $(".purchasenum").css('display','inline-block');
        $(".purchasenum").text(p);
    }
    else{
        $(".purchasenum").css('display','none');    
    }
    });
