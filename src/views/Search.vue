<template >
 
       <div class="trendy_container container">
            <div class="row">
                <div class="trendy_List container col-10 ">
                    <div class="row">
                        <router-link v-for="product in products" :key="product.product_id" :to="`/products/${product.product_id}`" class="card col-4" >
                            <img :src="`${product.images.url}`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{product.title}}</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item "><a class="page-link" ><i class="fa-solid fa-chevron-left"></i></a></li>
                          <li v-for="index in quantity" class="page-item"><a @click="getPage(index)" class="page-link" >{{index}}</a></li>
                          <li class="page-item"><a class="page-link" ><i class="fa-solid fa-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>     
       </div>
</template>
<script>
import API from '../api';

export default {
    data() {
        return {
            quantity: 1,
            products: [],
            pageNumber: 1,
        }
    },
    methods: {
        async getProducts() {
            //get product in mongooseDB

            let getProducts = await API.getProducts({
                pageNumber: this.pageNumber,
                search: this.$route.query.search
            });

            this.products = getProducts.products
            
            //get number pages
            let getQuantity = await API.getQuantity({search: this.$route.query.search});
            let checkPage = getQuantity % 6;
            if(checkPage === 0) {
                let numberPage = getQuantity / 6;
                this.quantity = numberPage; 
            }else {
                let numberPage = getQuantity / 6;
                numberPage = Math.floor(numberPage + 1);
                this.quantity = numberPage
            }
        },
        async getPage(e) {
            var obj = {};
            if(this.$route.query.info) {
                obj.info = this.$route.query.info;
            }
            this.$router.push({query: {page: e, info: obj.info}});
        },
        getinfo(e) {
            const info = `?info=${e}`;
            this.$router.push(info);
        },
        async checkInfoPage() {
            // check number pages in router
            if(this.$route.query.page) {
                this.pageNumber = parseInt(this.$route.query.page);
            }else {
                this.pageNumber = 1;
            }
            if(this.pageNumber > this.quantity || this.pageNumber < 1) {
                this.pageNumber = 1;
                this.$router.push({query: {page: 1}})
            }
            //  check shirt pages in router
            if(this.$route.query.info) {
                this.info = this.$route.query.info; 
            }else {
                this.info = "";
            }

            //get number pages again to filter
            let getQuantity = await API.getQuantity({info: this.info});
            let checkPage = getQuantity % 6;
            if(checkPage === 0) {
                let numberPage = getQuantity / 6;
                this.quantity = numberPage; 
            }else {
                let numberPage = getQuantity / 6;
                numberPage = Math.floor(numberPage + 1);
                this.quantity = numberPage
            }
            
            this.getProducts();
        }
    },
    created() {
        this.checkInfoPage();
    },
    watch: {
        "$route.query": function()  {
            this.checkInfoPage();   
        }
    }
}

</script>
<style >
   
    
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
        cursor: pointer;
    }   
</style>