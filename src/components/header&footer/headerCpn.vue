<template>    
    <nav class="navbar navbar-expand-lg navbar-light" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <router-link to="/"><img class="navbar-brand" src="../../../img/Fashion_logo.svg.png" alt=""></router-link>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page" href="#">Trang chủ</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#store"  @click="navigationStore">
                  Cửa hàng 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="navigationContact()" href="#contact">Liên Hệ</a>
              </li>
            </ul>
            <form @submit.prevent="submitSearch"  class="d-flex nav_form">
              <div>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <input v-model="input" class="form-control me-2" type="search" placeholder="Tìm Kiếm" aria-label="Search">
              <div class="btn_cart">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div class="cart">
                <h3 class="cart_title">Giỏ Hàng</h3>
                <hr>
                <div class="list-group cart_list" >
                  <h1 v-if="carts.length === 0" class="cart_list_empty">
                    Võ hàng trống
                  </h1>
                  <a v-for="( product, i) in carts" :key="i"  href="#" class="container list-group-item list-group-item-action active" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{product.product.title}}</h5>
                    </div>
                    <p class="mb-1">giá: {{product.product.price}} đ</p>
                    <p class="mb-1">Số lượng: {{product.number}}</p>
                  </a>
                </div>
                <router-link to="info" class="cart_title"><button type="button" class="btn btn-dark">Mua Hàng</button></router-link>
              </div>
            </form>
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " v-if="!this.$store.state.token">    
              <li class="nav-item">
                <router-link class="nav-link" to="/login"><a class="nav-link login_btn" href="#">Đăng nhập</a></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register"><a class="nav-link register_btn" href="#">Đăng ký</a></router-link>
              </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " v-if="this.$store.state.token">
              <li class="nav-item">
                <router-link class="nav-link" to="/info"><a class="nav-link info " href="#">Thông tin</a></router-link>
              </li>
              <li class="nav-item">
                <router-link @click="logout" class="nav-link" to="/"><a  class="nav-link logout_btn " href="#"><i class="fa-solid fa-right-from-bracket"></i></a></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
import  API from '../../api'

  
export default {
  data() {
    return {
      token: "",
      carts: [],
      user: {},
      input: "",
    }
  },
  methods: {
    async logout() {
      localStorage.removeItem('firsLogin');
      this.$router.push('/');

      // wait router 
      setTimeout(()=>{
        location.reload();
      },500)
    },
    async createCart() {
      const token = { token: localStorage.getItem('firsLogin')};
      this.user = await API.info(token);
    },
    navigationStore() {
      this.$router.push("/#store");
    },
    navigationContact() {
      this.$router.push("/#contact");
    },
    async submitSearch() {
      if(this.input !== "") {
        this.$router.push({path: "/search", query : { search: this.input }});
      }
    }
  },
  created() {
        this.createCart();
  },
  watch: {
    user: function(){
      this.user.cart.forEach(item=>{
        this.carts.push(item)
      })
    }
  }
}

</script>

<style >
    .navbar {
      margin-bottom: 30px;
      position: relative;
    }
    .nav_form{
        padding: 8px;
        box-shadow: 1px 1px 8px#ccc;
        border-radius: 6px;
        align-items: center;
    }
    .navbar-brand{
        width: 8rem;
    }
    .nav-link {
      text-decoration: none;
      
    }
    .nav_form > input{
        border: 0;
        margin: 0 16px;
    }
    .dropdown-menu{
      padding-right: 8px;
    }
    .dropdown-menu > h6{
      margin-left: 10px;
    }
    .dropdown-item {
      margin-left: 10px;

    }
    .cart_title {
      text-align: center;
      padding: 10px 0;
      display: block;
    }
    
    .cart_list {
      overflow: auto;
      height: 300px;
    }

    .cart{
      display: none;
      position: absolute;
      width: 400px;
      height: 460px;
      left: 48%;
      top: 60%;
      background: #fff;
      z-index: 1;
      border-radius: 8px;
      box-shadow: 1px 1px 8px#ccc;
    }
  
    .cart:hover {
      display: block;
    }

    .btn_cart:hover{
      display: block;
      cursor: pointer;
      background-color: #ccc;
    }

    .btn_info,
    .btn_cart  {
      padding: 10px 14px;
    
    }

    .btn_cart:hover{
      cursor: pointer;
      background-color: #ccc;
      border-radius:3px;
    }

    .btn_cart:hover + div {
      display: block;
    }

    .user_btn:hover  div {
      display: none;
    }

    .hidden{
      display: none;
    }

    .cart_list_empty{
      text-align: center;
      font-size: 16px;
      margin-top: 100px;
    }
  
    @media (min-width: 992px) {
        .nav_form{
            width: 26%;
        }
        .navbar-nav {
            margin-left: 14%;
        }
        .nav-item {
            margin: 0 10px;
        }
        .nav-item > a{
            font-size: 1rem;
            font-weight: 500;
        }
        .navbar {
            margin: 40px 0;
        }
        .nav-link {
          width: 100px;
        }
        .user_btn{
          padding-left: 30px;
        }
    }
    
    
</style>