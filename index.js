var str=require('./a.js');
require ("./plugins/jquery-jdt/radialIndicator.js");
require( "./plugins/easydialog/easydialog.js");
console.log(str);
$('body').append($('<p>'+str.strz+'<p>'));
/*圆形条*/
var circlePer=radialIndicator('#precess');
circlePer.animate(60);
/*弹窗插件*/
$("#openwin").on('click',function(){
    easyDialog.open({
        container : 'testBox',
        autoClose : 3000
    });
})