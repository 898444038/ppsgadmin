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
        <!-- <remote-js src="../../../static/formwork/vendors/popper.js/popper.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/bootstrap/js/bootstrap.min.js"></remote-js> -->
        <!-- <remote-js src="../../../static/formwork/js/app.min.js"></remote-js>  -->
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    components: {
        'remote-js': {
            render(createElement) {
                return createElement('script', {attrs: {type: 'text/javascript', src: this.src}});
            },
            props: {
                src: { type: String, required: true}
            }
        }
    },
    data () {
        return {}
    },
    beforeCreate: function() {
        console.group('------beforeCreate创建前状态------');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
        console.log("%c%s", "color:red","message: " + this.message) 
    },
    created: function() {
        console.group('------created创建完毕状态------');
        console.log("%c%s", "color:red","el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function() {
        console.group('------beforeMount挂载前状态------');
        console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    },
    mounted: function() {
        console.group('------mounted 挂载结束状态------');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log(this.$el);    
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.message); //已被初始化 

        // let s = document.createElement("script")
        // s.type = 'text/javascript'
        // s.src = '../../../static/formwork/js/app.min.js'
        // document.body.appendChild(s)
        
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);   
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message); 
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el); 
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message); 
    },
    beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);    
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message); 
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);  
        console.log("%c%s", "color:red","data   : " + this.$data); 
        console.log("%c%s", "color:red","message: " + this.message)
    },
  methods: {
    loginSubmit: function () {
    //   this.$ajax.post('/ppsg-client/auth/getToken', {username: "superadmin",password:"123456"})
    //   this.$ajax.post('/ppsg-client/admin/list', {token: "dwadwad"})
        var self = this;
        this.$ajax.post('/ppsg-admin/admin/login', {account: "admin",password:"123456"}).then(res => {
            var data =res;
            if(res.code == 200){
                data.data.user.token = data.data.token;
                this.$store.dispatch("setUserInfo", data.data.user);
                this.$router.push({path: '/index'})
            }
        });
    }
  }
}
</script>

<style>
@import '../../../static/formwork/vendors/zwicon/zwicon.min.css';
@import '../../../static/formwork/vendors/animate.css/animate.min.css';
@import '../../../static/formwork/css/app.min.css';

</style>
