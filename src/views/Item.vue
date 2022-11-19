<template>
    <div class="products container">
        <div class="row">
            <div class="img_pro col-lg-8 col-12">
                <span>
                    <img src="../../img/pic1.jpg" alt="">
                </span>
            </div>
            <div class="content_pro col-lg-4 col-12">
                <h1 class="titel_pro">Áo Polo Dài Tay Nam 6APDT001DEN</h1>
                <p>Tình trạng: Còn hàng</p>
            </div>
        </div>
    </div>
</template>
<script>
import API from '../api';
import { useRoute } from 'vue-router';

  //export components
  export default {
    data(){
        return{
            product: {},
        }
    },
    async created() {
        const route = useRoute();
        let getProduct = await API.getProduct(route.params.id);
        this.product = getProduct.product[0]
    }, 
    components: {
      
    }
  }
</script>
<style >
    .products {
        margin: 10% 0;
    }
    .img_pro {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img_pro > span {
        box-shadow: 1px 3px 3px 2px #ccc; 
        border-radius: 4px;
    }

    .img_pro > span >img {
        width: 400px;
        margin: 4px;
        border-radius: 4px;

        box-shadow: 1px 3px 2px solid #ccc;
    }
  
  @media (min-width: 992px) {
    .login{
      width: 540px;
    }
  }
  
</style>