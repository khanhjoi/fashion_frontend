<template>
    <div class="login"> 
      <form>
        <h2 class="login_titel">Login</h2>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3">
          </div>
          <span class="messages"></span>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3">
          </div>
          <span class="messages"></span>
        </div>
        <button type="submit" class="login_btn btn btn-dark">Sign in</button>
      </form>
    </div>
</template>
<script>
  //export components
  export default {
    components: {
      
    }
  }
</script>
<style >
  .login {
    display: flex;
    align-items: center;
    width: 340px;
    height: 480px;
    justify-content: center;
    margin: 16% auto;
    border: 3px solid #ccc;
    border-radius: 6px;
  }
  .login > form {
    width: 400px;
    padding: 15px 30px;
    margin-left: 40px;
  }
  .login_titel {
    margin: 40px 0;
  }
  .login_btn{
    margin: 40px 0;

  }
  .col-form-label {
    margin:0 10px ;
  }
  @media (min-width: 992px) {
    .login{
      width: 540px;
    }
  }
  
</style>