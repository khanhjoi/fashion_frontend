<template>
    <div class="slide container">
      <div class="row">
        <div class="slide_title col-lg-6 col-md-12">
          <h1>Make Change</h1>
          <p>
              THĂNG HẠNG PHONG CÁCH - NÂNG TẦM PHONG THÁI
          </p>
          <router-link to="/">
            <button type="button" class="btn btn-dark">Shop Now</button>
          </router-link>
      </div>
      <div class="slide_mg col-lg-6 col-md-12">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1668843711/test/mijmfycislhbxarojazx.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1668843590/test/almoscnalej3rghes4ka.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="https://res.cloudinary.com/dxkokmfiu/image/upload/v1668843365/test/vmpxit7xkub5rvvetvlm.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
      </div>
      </div>
        <div class="slide_bg"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >

.slide > .row {
  justify-content: center;
}

.slide_title{
    widows: 40%;
    margin: 20px 0;
}

.slide_mg {

    border-radius: 3px;
    clip-path: polygon(31% 4%, 68% 4%, 100% 0, 100% 100%, 71% 97%, 30% 97%, 0 100%, 0 1%);
}
.btn-dark{
    clip-path: polygon(31% 4%, 68% 4%, 100% 0, 100% 100%, 71% 97%, 30% 97%, 0 100%, 0 1%);
}
.slide_bg{
    background-color: #F8F2ED;
    height: 620px;
    clip-path: polygon(49% 32%, 79% 25%, 100% 10%, 100% 78%, 100% 100%, 0 100%, 0 69%, 0 14%, 20% 25%);
    position: absolute;
    max-width: 2000px;
    margin:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -4;
}

@media (min-width: 576px) {
  .slide_mg{
    width: 400px;
  }
}
@media (min-width: 992px) {
  .slide_title > h1 {
    margin-top: 40%;
  }
}
</style>