<template >
    <div class="trendy">
       <h1 class="trendy_titles">
            QUẦN ÁO XU HƯỚNG
       </h1>
       <div class="trendy_container container">
            <div class="row">
                <div class="trendy_ctn_nav col-lg-2">
                    <h3>Thể loại quần áo</h3>
                    <ul class="list-group nav list-group-flush">
                        <li class="btn btn-secondary list-group-item dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Áo </li>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Áo Phông</a> </li>
                            <li><a class="dropdown-item" href="#">Áo Sơ mi</a> </li>
                            <li><a class="dropdown-item" href="#">Áo Polo</a> </li>
                            <li><a class="dropdown-item" href="#">Áo Veste</a> </li>
                            <li><a class="dropdown-item" href="#">Áo len</a> </li>    
                        </ul>
                        <li class="btn btn-secondary list-group-item dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Quần </li>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Quần Jean</a> </li>
                            <li><a class="dropdown-item" href="#">Quần Tây</a> </li>
                            <li><a class="dropdown-item" href="#">Quần KaKi</a> </li>
                            <li><a class="dropdown-item" href="#">Quần đùi</a> </li>
                               
                        </ul>
                      </ul>
                </div>
                <div class="trendy_List container col-lg-10 ">
                    <div class="row">
                        <router-link v-for="product in products" :key="product.product_id" :to="`/products/${product.product_id}`" class="card col-4" >
                            <img :src="`${product.images.url}`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{product.title}}</h5>
                                <a href="#" class="btn btn-dark"><i class="fa-solid fa-plus"></i></a>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item "><a class="page-link" href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">4</a></li>
                          <li class="page-item"><a class="page-link" href="#">...</a></li>
                          <li class="page-item"><a class="page-link" href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
                
            </div>     
       </div>
    </div>
</template>
<script>
import API from '../../api';

export default {
    data() {
        return {
            products: [],
        }
    },
    methods: {
        async getProducts() {
            let getProducts = await API.getProducts();
            this.products = getProducts.products
        }
    },
    created() {
        this.getProducts();
    }
}

</script>
<style >
    .trendy {
        margin-top: 16%; 
        width: 100%;
    }

    .trendy > h1 {
        margin: 10% 0;
        text-align: center;
    }

    .trendy_ctn_nav {
        margin: 20px 0;
    }
    
    .trendy_List > .row {
        justify-content: space-around; 
    }
    
    .card {
        width: 18rem;
        border: 0;
        background: transparent;
        text-decoration: none;
        color: #000;
    }

    .card:hover {
        color: rgb(0, 0, 0, 0.8);
    }

    .card > img {
        clip-path: polygon(30% 2%, 70% 2%, 100% 0, 100% 100%, 70% 98%, 30% 98%, 0 100%, 0 0);
    }

    .card-body{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .btn {
        clip-path: polygon(0 0, 100% 0, 97% 33%, 97% 68%, 100% 100%, 0 100%, 3% 67%, 3% 33%);
    }

    .list-group-item.active {
        background-color: #F8F2ED;
        color: #000; 
    }
    .pagination{
        width: 100%;
        justify-content: center;
        margin-top: 30px
    }
    .page-item {
        margin: 0 13px;
    }
    .page-link {
        clip-path: circle(50% at 50% 50%);
        background: rgb(198, 190, 190, 0.2);
        color: #000;
    }   
</style>