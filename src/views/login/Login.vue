<template>
    <div class="login">
        <!-- Login -->
        <div class="login__block active" id="l-login">
            <div class="login__block__header">
                <i class="zwicon-user-circle"></i>
                Hi there! Please Sign in

                <div class="actions actions--inverse login__block__actions">
                    <div class="dropdown">
                        <i data-toggle="dropdown" class="zwicon-more-h actions__item"></i>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-sa-action="login-switch" data-sa-target="#l-register" href="#">创建账号</a>
                            <a class="dropdown-item" data-sa-action="login-switch" data-sa-target="#l-forget-password" href="#">忘记密码?</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login__block__body">
                <div class="form-group">
                    <input type="text" id="username" name="username" class="form-control text-center" value="wang" placeholder="Email Address">
                </div>

                <div class="form-group">
                    <input type="password" id="password" name="password" class="form-control text-center" value="123456" placeholder="Password">
                </div>
                <button @click="loginSubmit" class="btn btn-theme btn--icon"><i class="zwicon-checkmark"></i></button>
            </div>
        </div>

        <!-- Register -->
        <div class="login__block" id="l-register">
            <div class="login__block__header">
                <i class="zwicon-user-circle"></i>
                创建账号

                <div class="actions actions--inverse login__block__actions">
                    <div class="dropdown">
                        <i data-toggle="dropdown" class="zwicon-more-h actions__item"></i>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-sa-action="login-switch" data-sa-target="#l-login" href="#">已有账号?</a>
                            <a class="dropdown-item" data-sa-action="login-switch" data-sa-target="#l-forget-password" href="#">忘记密码?</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login__block__body">
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="zwicon-user"></i></span>
                    </div>
                    <input id="create-username" type="text" class="form-control form-create-user" placeholder="Name" required>
                    <div class="invalid-feedback">请输入用户名!</div>
                </div>

                <div class="form-group input-group form-group--centered">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="zwicon-mail"></i></span>
                    </div>
                    <input id="create-email" type="text" class="form-control form-create-user" placeholder="Email Address" required>
                    <div class="invalid-feedback">请输入邮箱!</div>
                </div>

                <div class="form-group input-group form-group--centered">
                    <div id="eye" class="input-group-prepend">
                        <span class="input-group-text"><i class="zwicon-eye"></i></span>
                    </div>
                    <input id="create-password" type="password" class="form-control form-create-user" placeholder="Password" required>
                    <div class="invalid-feedback">请输入密码!</div>
                </div>

                <!--<div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="radioDisabled" id="login-check" class="custom-control-input form-create-agree">
                        <label class="custom-control-label" for="login-check">Accept the license agreement</label>
                    </div>
                </div>-->

                <button id="create-user" class="btn btn-theme btn--icon"><i class="zwicon-checkmark"></i></button>
            </div>
        </div>

        <!-- Forgot Password -->
        <div class="login__block" id="l-forget-password">
            <div class="login__block__header">
                <i class="zwicon-user-circle"></i>
                忘记密码?

                <div class="actions actions--inverse login__block__actions">
                    <div class="dropdown">
                        <i data-toggle="dropdown" class="zwicon-more-h actions__item"></i>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" data-sa-action="login-switch" data-sa-target="#l-login" href="#">已有账号?</a>
                            <a class="dropdown-item" data-sa-action="login-switch" data-sa-target="#l-register" href="#">创建账号</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login__block__body">
                <!--<p class="mb-5">Lorem ipsum dolor fringilla enim feugiat commodo sed ac lacus.</p>-->
                <div class="form-group">
                    <input type="text" class="form-control text-center" placeholder="Email Address">
                </div>
                <a href="/login" class="btn btn-theme btn--icon"><i class="zwicon-checkmark"></i></a>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  data () {
    return {}
  },
  methods: {
    loginSubmit: function () {
      this.$ajax.get('/call', {token: '1213213'})
      //this.$ajax.postForm('auth/login', {username: 'wang', password: '123456'})
    //   this.$axios.get('/api/auth/login',{
    //     params:{            
    //         name:this.name,     //上传参数到服务器
    //         id:this.id
    //     }
    //   }).then(res => {
    //     var a =res.data.code;
    //     console.log(a);             //从服务器取得数据res，这里我们需要data里面的code
    //   })
      
      // this.$router.push({path: '/index'})
    }
  }
}
</script>

<style scoped>

</style>
