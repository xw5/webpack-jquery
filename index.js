var str=require('./a.js');
require ("./plugins/jquery-jdt/radialIndicator.js");
require( "./plugins/easydialog/easydialog.js");
console.log(str);
$('body').append($('<p>'+str.strz+'<p>'));
/*Ô²ÐÎÌõ*/
var circlePer=radialIndicator('#precess');
circlePer.animate(60);
/*µ¯´°²å¼þ*/
$("#openwin").on('click',function(){
    easyDialog.open({
        container : 'testBox',
        autoClose : 3000
    });
})