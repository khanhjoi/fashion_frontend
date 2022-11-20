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
                <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cửa hàng 
                </a>
                <ul class="dropdown-menu">
                  <h6>Áo</h6>
                  <li><a class="dropdown-item" href="#">Áo Phông</a></li>
                  <li><a class="dropdown-item" href="#">Áo Sơ mi</a></li>
                  <li><a class="dropdown-item" href="#">Áo PoLo</a></li>
                  <li><a class="dropdown-item" href="#">Áo Vetst</a></li>
                  <li><a class="dropdown-item" href="#">Áo Len</a></li>
                  <h6>Quần</h6>
                  <li><a class="dropdown-item" href="#">Quần Jean</a></li>
                  <li><a class="dropdown-item" href="#">Quần Tây</a></li>
                  <li><a class="dropdown-item" href="#">Quần Kaki</a></li>
                  <li><a class="dropdown-item" href="#">Quần đùi</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Liên Hệ</a>
              </li>
            </ul>
            <form class="d-flex nav_form">
              <div>
                  <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <input class="form-control me-2" type="search" placeholder="Tìm Kiếm" aria-label="Search">
              <div class="btn_cart">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div class="cart">
                <h3 class="cart_title">Võ Hàng</h3>
                <hr>
                <div class="list-group cart_list">
                  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">hàng 1</h5>
                      <small>3 days ago</small>
                    </div>
                    <p class="mb-1">giá: 120.000 đ</p>
                    <small>12/2/2022</small>
                  </a>
                </div>
                <h3 class="cart_title"><button type="button" class="btn btn-dark">Mua Hàng</button></h3>
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
                <router-link class="nav-link" to="/login"><a class="nav-link info " href="#">Thông tin</a></router-link>
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
      token: ""
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('firsLogin');
      location.reload();
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
      top: 78%;
      background: #fff;
      z-index: 1;
      border-radius: 8px;
      box-shadow: 1px 1px 8px#ccc;
    }
    
    .user_info{
      position: absolute;
      width: 200px;
      height: 230px;
      left: 87%;
      top: 78%;
      padding-top: 4px;
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