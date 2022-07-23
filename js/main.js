$(function () {
    $.ajax({
        type: 'GET',
        url: '../upload/sights-data.json',
        success: function (raws) {
            $.each(raws, function (i, raws) {
                console.log(raws);
                console.log(raws.Infos.Info.length);
                let count = raws.Infos.Info.length;
                // let order = ;
                for (let index = 0; index < count; index++) {
                    
                    console.log('order is :' + raws.Infos.Info[index].Add);
                    
                }
            });
        },
    });
});

// function xhrFun() {
//     let xhrdata = xhr.response;

//     console.log(xhrdata.id);
// }

// var xhr = new XMLHttpRequest();
// xhr.open('GET', '../upload/sights-data.json', true);
// xhr.onreadystatechange = xhrFun;
// xhr.send();
