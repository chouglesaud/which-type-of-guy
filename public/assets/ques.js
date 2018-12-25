

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");


let get_question_string = document.querySelector('#quechange').innerHTML;
let split_it = get_question_string.split('.');
let que_num = parseInt(split_it[0], 10);
let temp_que_num = que_num;
get_url = '/que';
let url;

if (que_num < 11) {
    que_num++;
    url = get_url + que_num;

}
else {
    url = '/result';

}


img1.addEventListener('click', img1_click);
function img1_click() {
    img1.style.opacity = 1;
    img2.style.opacity = 0.5;
    img3.style.opacity = 0.5;
    img1.style.width = '150px';
    img1.style.height= '150px';
    img1.style.marginLeft = '-5px';
    img1.style.marginTop = '-5px';

    let get_val1 = img1.getAttribute('value');
    let cnrt1 = parseInt(get_val1, 10);
    console.log(cnrt1);
    $.ajax({
        type: 'POST',
        url: url,
        data: { value: cnrt1 },
        success: function () {
            console.log('request successfully send');
        },
    });

    temp_que_num++;
    if (que_num < 11) {

        url = get_url + temp_que_num;
        window.location.href = url;

    }
    else {
        url = '/result';
        window.location.href = url;

    }

}
img2.addEventListener('click', img2_click);
function img2_click() {

    img1.style.opacity = 0.5;
    img2.style.opacity = 1;
    img3.style.opacity = 0.5;
    img2.style.width = '150px';
    img2.style.height= '150px';
    img2.style.marginLeft = '-5px';
    img2.style.marginTop = '-5px';

    let get_val2 = img2.getAttribute('value');
    let cnrt2 = parseInt(get_val2, 10);
    console.log(cnrt2);
    $.ajax({
        type: 'POST',
        url: url,
        data: { value: cnrt2 },
        success: function () {
            console.log('request successfully send');
        },
    });
    temp_que_num++;
    if (que_num < 11) {

        url = get_url + temp_que_num;
        window.location.href = url;

    }
    else {
        url = '/result';
        window.location.href = url;

    }



}
img3.addEventListener('click', img3_click);
function img3_click() {

    img1.style.opacity = 0.5;
    img2.style.opacity = 0.5;
    img3.style.opacity = 1;
    img3.style.width = '150px';
    img3.style.height= '150px';
    img3.style.marginLeft = '-5px';
    img3.style.marginTop = '-5px';

    let get_val3 = img3.getAttribute('value');
    let cnrt3 = parseInt(get_val3, 10);
    console.log(cnrt3);
    $.ajax({
        type: 'POST',
        url: url,
        data: { value: cnrt3 },
        success: function () {
            console.log('request successfully send');
        },
    });
    temp_que_num++;
    if (que_num < 11) {

        url = get_url + temp_que_num;
        window.location.href = url;

    }
    else {
        url = '/result';
        window.location.href = url;

    }
}