$(function () {
    $.ajax({
        type: 'GET',
        url: '../upload/sights-data.json',
        success: function (raws) {
            $.each(raws, function (i, raws) {
                let count = raws.Infos.Info.length;
                let theData = {};
                theData = raws.Infos.Info; // 替代文字
                let createcard = ``;
                for (let index = 0; index < count; index++) {
                    console.log(' 景點：' + theData[index].Name);
                    console.log(' 地址： ' + theData[index].Add);
                    if (theData[index].Description == null) {
                        console.log(' 特色： ' + '暫無資訊');
                    } else {
                        console.log(' 特色：' + theData[index].Description);
                    }
                    console.log(' 電話： ' + theData[index].Tel);

                    createcard += ` <div class="col-12 col-sm-12 col-md-4 col-lg-3 mb-3" >
                    <div class="card">
                    <div class="card-body ">
                        <img
                            src="https://source.unsplash.com/random/200x200?sig=6000"
                            class="card-img-top"
                            alt="..."
                        />
                        <h5 class="card-title">
                        ${theData[index].Name}
                        </h5>
                        <p class="card-text">
                            With supporting text below as a
                            natural lead-in to additional
                            content.
                        </p>
                        <a href="#" class="btn btn-primary"
                            >Go somewhere</a
                        >
                            </div>
                        </div>
                    </div>`;

                    // createcard += createcard;
                    console.log(createcard);
                }
                $('#box').html(createcard);
                console.log(raws);

                console.log(raws.Infos.Info.length);
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
