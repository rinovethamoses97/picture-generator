$(document).ready(function(){
    $("#get").click(function(){
        $.post("/getPhoto",{keyword:$("#keyword").val()},function(data,status){
            var url=data.url+"&client_id=e8bc558b59499171328426f70bb880653ec720f3b3f6b0146f5f017287239e26";
            $.get(url,function(data,status){
                if(data.results.length>0){
                    var index=floor(random(10));
                    document.getElementById("img").innerHTML="<img src='"+data.results[index].urls.raw+"'id='img' width='500' height='500'>";
                }
                else{
                    alert("No result!!!");
                }
            });
        });
    });
});
function setup(){
}