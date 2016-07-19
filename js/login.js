/**
 * Created by mahong on 16/7/15.
 */
$(document).ready(function(){
    $("#login").click(function(){
        console.log(["location.href",location.href]);
        var locationArr = location.href.split("/");
        locationArr[locationArr.length-1] = "mainMonitor.html";
        location.href= locationArr.join("/");
        $.get('http://121.40.112.242:8080//monitor/hostInfo/list',function(res){
        	console.log(["list",res]);
        });
        
    })
});