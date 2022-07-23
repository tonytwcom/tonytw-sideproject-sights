$(function () {
    $.ajax({
        type: 'GET',
        url: '../upload/sights-data.json',
        success: function (raws) {
            $.each(raws, function (i, raws) {
                let count = raws.Infos.Info.length;
                let theData = {};
                let finalData = [];
                theData = raws.Infos.Info; // 替代文字
                let xx = '';
                for (let index = 0; index < count; index++) {
                    // console.log(' 景點：' + theData[index].Name);
                    // console.log(' 地址： ' + theData[index].Add);
                    if (theData[index].Description == null) {
                        // console.log(' 特色： ' + '暫無資訊');
                    } else {
                        // console.log(' 特色：' + theData[index].Description);
                    }
                    // console.log(' 電話： ' + theData[index].Tel);

                    // finalData = {
                    //     names: theData[index].Name,
                    //     address: theData[index].Add,
                    // };

                    xx += ` <div class="col-12 col-sm-12 col-md-4 col-lg-3 mb-3" >
                    <div class="card">
                    <div class="card-body ">
                        <img
                            src="https://source.unsplash.com/random/200x200?sig=${index}"
                            class="card-img-top"
                            alt="..."
                        />
                        <h5 class="card-title">
                        ${theData[index].Name}
                        </h5>
                        <p class="card-text">
                        ${theData[index].Description}
                        </p>

                        <p class="card-phone">
                        聯絡方式：${theData[index].Tel}
                        </p>

                        <a href="#" class="btn btn-primary"
                            >Go somewhere</a
                        >
                        
                            </div>
                        </div>
                    </div>`;
                    // });
                }

                // $('#box').html(createcard);
                console.log(raws);

                console.log(raws.Infos.Info.length);
                let cs = raws.Infos.Info.length;
                // let xx = '';
                // finalData[0].forEach((element) => {
                //     xx += ` <div class="col-12 col-sm-12 col-md-4 col-lg-3 mb-3" >
                // <div class="card">
                // <div class="card-body ">
                //     <img
                //         src="https://source.unsplash.com/random/200x200?sig=6000"
                //         class="card-img-top"
                //         alt="..."
                //     />
                //     <h5 class="card-title">
                //     ${element}
                //     </h5>
                //     <p class="card-text">
                //         With supporting text below as a
                //         natural lead-in to additional
                //         content.
                //     </p>
                //     <a href="#" class="btn btn-primary"
                //         >Go somewhere</a
                //     >
                //         </div>
                //     </div>
                // </div>`;
                // });

                // for (const key in finalData) {
                //     xx += ` <div class="col-12 col-sm-12 col-md-4 col-lg-3 mb-3" >
                // <div class="card">
                // <div class="card-body ">
                //     <img
                //         src="https://source.unsplash.com/random/200x200?sig=6000"
                //         class="card-img-top"
                //         alt="..."
                //     />
                //     <h5 class="card-title">
                //     ${key}
                //     </h5>
                //     <p class="card-text">
                //         With supporting text below as a
                //         natural lead-in to additional
                //         content.
                //     </p>
                //     <a href="#" class="btn btn-primary"
                //         >Go somewhere</a
                //     >
                //         </div>
                //         </div>
                //     </div>`;
                // }

                $('#main-row').html(xx);

                // createcard += ` <div class="col-12 col-sm-12 col-md-4 col-lg-3 mb-3" >
                // <div class="card">
                // <div class="card-body ">
                //     <img
                //         src="https://source.unsplash.com/random/200x200?sig=6000"
                //         class="card-img-top"
                //         alt="..."
                //     />
                //     <h5 class="card-title">
                //     ${theData[index].Name}
                //     </h5>
                //     <p class="card-text">
                //         With supporting text below as a
                //         natural lead-in to additional
                //         content.
                //     </p>
                //     <a href="#" class="btn btn-primary"
                //         >Go somewhere</a
                //     >
                //         </div>
                //     </div>
                // </div>`;
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
