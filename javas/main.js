window.onscroll = function(){
    // console.info(document.documentElement.scrollTop);
    let header = document.getElementById("div_header");
    let leit = document.getElementById("list_trang_chu");
    let Trang_1 = document.getElementById("Trang_1");
    let trang_2 = document.getElementById("trang_2");
    let trang_3 = document.getElementById("trang_3");
    let cart_ = document.getElementById("cart_");
    let logo___1 =document.getElementById("logo___2");
    let logo___2 =document.getElementById("logo___1");
    let colora = document.getElementById("colora");
    let colora_1 = document.getElementById("colora_1");
    let colora_2 = document.getElementById("colora_2");
    let colora_3 = document.getElementById("colora_3");
    let colora_4 = document.getElementById("colora_4");
    let colora_5 = document.getElementById("colora_5");
    let r3 = document.getElementById("r3");
    let r2 = document.getElementById("r1");
    let r1 = document.getElementById("r2");
    // let gototop = document.getElementById("gototop_1");
    if ( document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 ){
        header.style.height = "80px";
        header.style.boxShadow = "0px 0px 3px 0.5px rgb(189, 189, 189)";
        header.style.color = "black";
        header.style.backgroundColor = "white";
        leit.style.lineHeight = "90px";
        cart_.style.marginTop ="30px"
        header.style.transition = "all 0.5s ease-out";


        logo___1.style.display ="none";
        logo___2.style.display ="block";


        colora.style.color = "black";
        colora_1.style.color = "black";
        colora_2.style.color = "black";
        colora_3.style.color = "black";
        colora_4.style.color = "black";
        colora_5.style.color = "black";

        r3.style.color = "black";
        r2.style.color = "black";
        r1.style.color = "black";

        Trang_1.style.top = "80px";
        trang_2.style.top = "80px";
        trang_3.style.top = "80px";

        // gototop.style.display = "block";
    }else{
        header.style.height = "100px";
        leit.style.lineHeight = "110px";
        header.style.boxShadow ="";
        header.style.color = "";
        header.style.backgroundColor = "";
        cart_.style.marginTop ="";

        logo___1.style.display ="";
        logo___2.style.display ="";


        colora.style.color = "";
        colora_1.style.color = "";
        colora_2.style.color = "";
        colora_3.style.color = "";
        colora_4.style.color = "";
        colora_5.style.color = "";


        r2.style.color = "";
        r3.style.color = "";
        r1.style.color = "";

        Trang_1.style.top = "100px";
        trang_2.style.top = "100px";
        trang_3.style.top = "100px";

        // gototop.style.display = "none";
    }
}

// function gototop(){
//     let timer = setInterval( function(){
//         document.documentElement.scrollTop-=20;
//         if (document.documentElement.scrollTop <= 0) {
//            clearInterval(timer); 
//         }
//     }, 5);
// }





 
// header_container();





// banner
let banner = document.getElementsByClassName("img_anh");
let chuyenanh = 0;
function anh_img(n){
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }
    banner[n].style.display = "block";
}
function chuyenbanner(){
    chuyenanh++;
    if(chuyenanh > 2){
        chuyenanh = 0;
    }
    anh_img(chuyenanh);
}

anh_img(0);
setInterval(function(){
    chuyenbanner();
}, 3500)



// product

let cantainer_product = document.getElementById("main");
// let header = document.getElementById("div_header");

function product_Number_one(){
    cantainer_product.style.display ="block";
    // header.style.position ="";
}


// containar_header
// function header_container(){
//     document.getElementById("div_header").innerHTML+=`
//     <div id="logo"></div>
//     `
// }
// header_container();


function img_logo(logo_1, class_1){
    document.getElementById("logo").innerHTML+=`
        <img src="` + logo_1 + `" alt="" id="` + class_1 + `">`
}
let logo_imgs =[
    {
        logo_1: "./imag/lgo/logo.png",
        class_1: "logo___1"
    },
    {
        logo_1: "./imag/lgo/logo_2.png",
        class_1: "logo___2"
    }
]
for ( let logo_img of logo_imgs ){
    img_logo(
        logo_img.logo_1,
        logo_img.class_1,
    )
}




// lest

function list_( 
    // lest_1,
    ban_chay,
    sale,
    thoi_trang_nam,
    thoi_trang_nu,
    he_thong_cua_hang,
    Blog,
//     lest_8,
//     lest_9,
//    lest_10,
//    lest_11,
//    lest_12,
//    lest_13,
//    lest_14,
//    lest_15,
     ){
    document.getElementById("list_trang_chu").innerHTML+=`

                <li class="trangchu1"><a href="" id="colora">` + ban_chay + `</a></li>

                <li class="trangchu1">
                    <div class="trangchu1_con">
                        <a href="" id="colora_1">` + sale + `<i class="far fa-angle-down icon_arrow" id="r3"></i></a>
                        <div id="Trang_1">
                            <p>Áo Thung Nam</p>
                            <p>Đầm Nữ</p>
                        </div>
                    </div>
                </li>

                

                <li class="trangchu1"><a href="" id="colora_4">` + he_thong_cua_hang + `</a></li>
                <li class="trangchu1"><a href="" id="colora_5">` + Blog + `</a></li>
                <li class="trangchu1">
                    <div class="trangchu1_con">
                        <a href="" id="colora_2">` + thoi_trang_nam + `<i class="far fa-angle-down icon_arrow" id="r2"></i></a>
                        <div id="trang_2">
                            <div class="container_2_">
                                <div class="trang_2_com"></div>
                                <div class="trang_2_com">
                                    <h6>ÁO Phong</h6>
                                    <p>ÁO THUN</p>
                                    <p>ÁO THUN POLO</p>
                                    <p>ÁO DỆT</p>
                                    <p>ÁO KHOÁC</p>
                                    <p>ÁO SƠ MI</p>
                                </div>
                                <div class="trang_2_com">
                                    <h6>QUẦN</h6>
                                    <p>QUẦN JEANS</p>
                                    <p>QUẦN SHORT</p>
                                    <p>QUẦN KAKI</p>
                                    <p>QUẦN TÂY</p>
                                    <p> QUẦN DÀIHOT</p>
                                </div>
                                <div class="trang_2_com"></div>
                                <div class="trang_2_com"></div>
                                <div class="trang_2_com"></div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="trangchu1">
                    <div class="trangchu1_con">
                        <a href="" id="colora_3">` + thoi_trang_nu + `<i class="far fa-angle-down icon_arrow" id="r1"></i></a>
                        <div id="trang_3">
                            <div class="container_2_">
                                <div class="trang_2_com"></div>
                                <div class="trang_2_com">
                                    <h6>NỮ</h6>
                                    <p>ÁO DỆTNEW</p>
                                    <p>ÁO SƠ MIHOT</p>
                                    <p>ÁO KHOÁC</p>
                                    <p>ÁO LIỀN QUẦNNEW</p>
                                    <p>ÁO THUN</p>
                                    <p>ÁO BLAZER</p>
                                </div>
                                <div class="trang_2_com">
                                    <h6>QUẦN</h6>
                                    <p>QUẦN JEANSHOT</p>
                                    <p>QUẦN TÂY</p>
                                    <p>QUẦN SHORTHOT</p>
                                    <p>QUẦN LEGGINGHOT</p>
                                    <p>QUẦN DÀIHOT  </p>
                                </div>
                                <div class="trang_2_com">
                                    <h6>VÁY ĐẦM</h6>
                                    <p>ĐẦMNEW</p>
                                    <p> ĐẦM CÔNG SỞNEW</p>
                                    <p>ĐẦM DỰ TIỆCHOT</p>
                                    <p>ĐẦM DẠO PHỐ</p>
                                    <p> VÁY MAXIHOT</p>
                                    <p>CHÂN VÁY</p>
                                    <p>SET ĐỒ NỮNEW</p>
                                </div>
                                <div class="trang_2_com"></div>
                                <div class="trang_2_com"></div>
                            </div>
                        </div>
                    </div>
                </li>
    `
}
let op_lest_s =[
    {
        ban_chay: "Bán Chạy",
        // lest_2: "",
        // lest_3: "",
        // lest_4: "",
        // lest_5: "",
        // lest_5: "",
        // lest_7: "",
        // lest_8: "",
        // lest_9: "",
        // lest_10: "",
        // lest_11: "",
        // lest_12: "",
        // lest_13: "",
        // lest_14: "",
        // lest_15: "",

        
    },
    {
        ban_chay: "SALE 50%",
        // lest_2: "",
        // lest_3: "",
        // lest_4: "",
        // lest_5: "",
        // lest_5: "",
        // lest_7: "",
        // lest_8: "",
        // lest_9: "",
        // lest_10: "",
        // lest_11: "",
        // lest_12: "",
        // lest_13: "",
        // lest_14: "",
        // lest_15: "",

        
    },
    {
        // lest_1: "",
        // lest_2: "",
        ban_chay: "Thời Trang Nam ",
        // lest_4: "",
        // lest_5: "",
        // lest_5: "",
        // lest_7: "",
        // lest_8: "",
        // lest_9: "",
        // lest_10: "",
        // lest_11: "",
        // lest_12: "",
        // lest_13: "",
        // lest_14: "",
        // lest_15: "",
    },
    {
        // lest_1: "",
        // lest_2: "",
        // lest_3: "",
        ban_chay: "Thời Trang Nữ",
        // lest_5: "",
        // lest_7: "",
        // lest_8: "",
        // lest_9: "",
        // lest_10: "",
        // lest_11: "",
        // lest_12: "",
        // lest_13: "",
        // lest_14: "",
        // lest_15: "",
    },
    {
        // lest_1: "",
        // lest_2: "",
        // lest_3: "",
        // lest_4: "",
        ban_chay: "Hệ Thống Cửa Hàng",
        // lest_6: "",
        // lest_7: "",
        // lest_8: "",
        // lest_9: "",
        // lest_10: "",
        // lest_11: "",
        // lest_12: "",
        // lest_13: "",
        // lest_14: "",
        // lest_15: "",
    },
    {
        // lest_1: "",
        // lest_2: "",
        // lest_3: "",
        // lest_4: "",
        // lest_5: "",
        ban_chay: "Blog",
        // lest_7: "",
        // lest_8: "",
        // lest_9: "",
        // lest_10: "",
        // lest_11: "",
        // lest_12: "",
        // lest_13: "",
        // lest_14: "",
        // lest_15: "",
    },
]

for ( op_lest_ of op_lest_s ){
    list_(
        op_lest_.ban_chay,
        op_lest_.lest_2,
        op_lest_.thoi_trang_nam,
        op_lest_.lest_4,
        op_lest_.lest_5,
        op_lest_.lest_6,
        // op_lest_.
        // op_lest_.
        // op_lest_.
    )
    
}