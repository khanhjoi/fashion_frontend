<template >
    <div id="contact" class="contact container" >
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <form class="row g-3 contact_form">
                    <h1>Đăng Ký <br> với chúng tôi</h1>
                    <p>Bạn sẽ nhận được thông báo của chúng tôi về sản phầm mới nhất</p>
                    <div class="col-12">
                        <router-link to="/register"> <button type="submit" class="btn btn-dark btn-md">Đăng ký</button></router-link>
                      
                    </div>
                  </form>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="contact_img col-lg-6 col-md-12">
                    <button  class="bg_img "></button>
                    <img class="" src="../../../img/pic1.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .contact {
        margin: 10% 0;
    }
    .contact > .row {
        justify-content: space-between;
    }
    .contact_img > img{
        width:280px;
        clip-path: polygon(30% 2%, 70% 2%, 100% 0, 100% 100%, 70% 98%, 30% 98%, 0 100%, 0 0);
    }
    .contact_form {
       text-align: center;
       margin: 5% 0;
    }
    .contact_img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bg_img {
        position: absolute;
        background-color: #FDB242;
        z-index: -2;
        width: 40%;
        height: 40%;
        border: 0;
        clip-path: polygon(0 0, 100% 0, 97% 33%, 97% 68%, 100% 100%, 0 100%, 3% 67%, 3% 33%);
    }
    
    @media (min-width: 992px) {
        .contact_form {
            margin-top: 18%;
            text-align: left;
        }
        .contact_form {
            margin: 40px 0  0px 10%;
        }
        .bg_img {
            position: absolute;
            z-index: -21;
            width: 30%;
            height: 40%;
            border: 0;
            background-color: #FDB242;
            clip-path: polygon(0 0, 100% 0, 97% 33%, 97% 68%, 100% 100%, 0 100%, 3% 67%, 3% 33%);
        }
    }
</style>