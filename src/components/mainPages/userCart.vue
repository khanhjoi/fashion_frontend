<template >
    <h1>Tổng giá tiền: {{price}} đ</h1>
    <button @click="buyProduct" type="button" class="btn btn-dark">Thanh toán</button>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col"></th>
            <th scope="col">SL</th>
            <th scope="col">Gía tiền</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="this.cart.length !== 0" v-for="(product, index) in cart">
            <th class=" index">{{index + 1}} </th>
            <td class="id_product ">{{product.product.product_id}}</td>
            <td class="image_product"><img :src="`${product.product.images.url}`" alt=""></td>
            <td class="number_product"> {{product.number}}</td>
            <td class="prices_product">{{product.product.price}}đ</td>
            <td class="edit_product">
                <button @click="deleteProduct(product)" type="button" class="btn btn-dark">Xóa</button>
            </td>
          </tr>
          <tr v-if="this.cart.length === 0">
            <td colspan="6" class="empty_cart">Võ hàng trống</td>
          </tr>
        </tbody>
      </table>
</template>
<script>
import API from '../../api';

export default {
    data() {
        return {
            cart: [],
            price: 0,
        }
    },
    methods: {
        async deleteProduct(e) {
            //get product data
            const product = e;
            // get Information user
            const token = { token: localStorage.getItem('firsLogin')};
            const user = await API.info(token);
            // send req.body
            const info = {
                product: product,
                user : user._id
            }
            // delete child item in mongoose db
            const deleteProduct = await API.deleteProduct(info);
            
            // delete product in client
            if(deleteProduct) {
                this.cart.forEach((item,index) => {
                    if(item.product.product_id === product.product.product_id) {
                        this.cart.splice(index,1);
                        this.cart.forEach((item)=>{
                            this.price += item.number * item.product.price;
                        });
                        alert("xóa thành công");
                        return;
                    }
                })
            } 
        },
        async buyProduct() {
    
            // get Information user
            const token = { token: localStorage.getItem('firsLogin')};
            const user = await API.info(token);
            
            this.cart = [];
            this.price = 0;
            user.cart = this.cart;

            // buy product
            const buyProduct = await API.buyProduct(user);
            alert("Bạn mua  thành công");
        }
    }
    ,
    async created() {
        const token = { token: localStorage.getItem('firsLogin')};
        const user = await API.info(token);
        this.cart = [... user.cart];
        this.cart.forEach((item)=>{
            this.price += item.number * item.product.price;
        });
    }
}
</script>
<style >
    .image_product{
        text-align: center;
    }

    .image_product > img{
        width: 26%;
        border-radius: 8px;
        
    }
    .table{
        height: 600px;
    }

    .index,
    .edit_product,
    .number_product,
    .prices_product,
    .id_product {
        vertical-align: middle;
    }

    .empty_cart {
        margin-top: 10px;
        font-size: 30px;
        font-weight: bold;
        text-align: center; 
    }

</style>