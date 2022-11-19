<template lang="">
    <div class="footer container">
       <div class="row">
        <div class="brand col-12">
            <a href=""><img src="../../../img/Fashion_logo.svg.png" alt=""></a>
            <div class="icon_footer">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div class="footer_content col-lg-6 col-md-12">
            <p>sản phẩm được tham khảo từ nhiều nguồn</p>
            <p>Copyright © 2022 Thời Trang Nam Biluxury</p>
        </div>
        <div class="footer_bg"></div>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .footer_bg{
        position: absolute;
        height: 40%;
        background-color: #F0F2FF;
        z-index: -1;
        left: 0;
        right: 0;
    }
    .brand > a > img {
        width:  180px;
        margin-left: 10px;
    }
    .brand {
        margin-top: 10%;
        text-align: center;
    }
    .icon_footer{
        margin: 3% 0;
    }
    .icon_footer > a {
        color: #000; 
        margin: 0 10px;
    }
    .icon_footer > a:hover {
        color: #988eBE;
    }
    .icon_footer > a > i {
        font-size: 30px;
    }
    .footer_content {
        width: 100%;
        text-align: center;
    }
    @media (min-width: 992px) {
        .brand {
            margin-top: 5%;
            text-align: center;
        }
      }
</style>