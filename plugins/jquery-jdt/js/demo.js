//demo code for radial progress
$(function () {
    //radial progress 1
    $('#indicatorContainer').radialIndicator();

    //radial progress 2
    $('#indicatorContainer2').radialIndicator({
        barColor: '#87CEEB',
        barWidth: 10,
        initValue: 40,
        roundCorner: true,
        percentage: true
    });


    //radial progress 3
    var radialObj3 = $('#indicatorContainer3').radialIndicator({
        displayNumber: false
    }).data('radialIndicator');

    //Using Instance
    radialObj3.value(70);



    //radial progress 4
    var radialObj4 = $('#indicatorContainer4').radialIndicator({
        barColor: {
            0: '#FF0000',
            33: '#FFFF00',
            66: '#0066FF',
            100: '#33CC33'
        },
        percentage: true
    }).data('radialIndicator');

    //Using Instance
    radialObj4.animate(70);

    //radial progrees 5
    $('#indicatorContainer5').radialIndicator({
        initValue: 90,
        displayNumber: false
    });

    //radial progress 6
    var radialObj7 = $('#indicatorContainer7').radialIndicator({
        minValue: 1000,
        maxValue: 100000
    }).data('radialIndicator');


    //radial progress 8
    var radialObj8 = $('#indicatorContainer8').radialIndicator({
        radius: 70,
        minValue: 10000,
        maxValue: 10000000,
        format: '$ ##,##,###'
    }).data('radialIndicator');



    //Using Instance
    radialObj8.value(750000);

    //clock example
    var radialObj9 = radialIndicator($('#indicatorContainer9'), {
        radius: 60,
        barWidth: 5,
        barColor: '#FF0000',
        minValue: 0,
        maxValue: 60,
        fontWeight: 'normal',
        roundCorner: true,
        format: function (value) {
            var date = new Date();
            return date.getHours() + ':' + date.getMinutes();
        }
    });

    setInterval(function () {
        radialObj9.value(new Date().getSeconds() + 1);
    }, 1000);

    //add textbox and buttons for all radial button
    $('.prg-cont').each(function () {
        var elm = $.single(this),
            wrap = elm.wrap('<div class="prg-cont-wrap"></div>').closest('.prg-cont-wrap'),
            radObj = wrap.find('.rad-prg').data('radialIndicator');

        wrap.append('<div class="prg-input-wrap"><input type="text" class="prg-input" value="' + radObj.value() + '"/><button class="prg-change">Change</button></div>');

        wrap.find('.prg-change').on('click', function (e) {
            var val = wrap.find('.prg-input').val();

            radObj.animate(val);
        });
    });


    //file upload example
    var container = $('#indicatorContainerWrap6'),
        msgHolder = container.find('.rad-cntnt'),
        container6Prog = $('#indicatorContainerWrap6').radialIndicator({
            radius: 100,
            percentage: true,
            displayNumber: false
        }).data('radialIndicator');


    container.on({
        'dragenter': function (e) {
            msgHolder.html("Drop here");
        },
        'dragleave': function (e) {
            msgHolder.html("Click / Drop file to select.");
        },
        'drop': function (e) {
            e.preventDefault();
            handleFileUpload(e.originalEvent.dataTransfer.files);
        }
    });

    $('#prgFileSelector').on('change', function () {
        handleFileUpload(this.files);
    });

    function handleFileUpload(files) {
        msgHolder.hide();
        container6Prog.option('displayNumber', true);

        var file = files[0],
            fd = new FormData();

        fd.append('file', file);


        $.ajax({
            url: 'service/upload.php',
            type: 'POST',
            data: fd,
            processData: false,
            contentType: false,
            success: function () {
                container6Prog.option('displayNumber', false);
                msgHolder.show().html('File upload done.');
            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                //Upload progress
                xhr.upload.addEventListener("progress", function (e) {
                    if (e.lengthComputable) {
                        var percentComplete = (e.loaded || e.position) * 100 / e.total;
                        //Do something with upload progress
                        console.log(percentComplete);
                        container6Prog.animate(percentComplete);
                    }
                }, false);

                return xhr;
            }
        });

    }

});;