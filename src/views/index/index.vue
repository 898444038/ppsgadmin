<template>
    <div>
        <main class="main">
            <div class="page-loader">
                <div class="page-loader__spinner">
                    <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>

            <header class="header">
                <div class="navigation-trigger d-xl-none" data-sa-action="aside-open" data-sa-target=".sidebar">
                    <i class="zwicon-hamburger-menu"></i>
                </div>

                <div class="logo d-none d-sm-inline-flex">
                    <a href="/index">啪啪三国 2.0</a>
                </div>

                <form class="search">
                    <div class="search__inner">
                        <input type="text" class="search__text" placeholder="Search for people, files, documents...">
                        <i class="zwicon-search search__helper"></i>
                        <i class="zwicon-arrow-left search__reset" data-sa-action="search-close"></i>
                    </div>
                </form>

                <ul class="top-nav">
                    <li class="d-xl-none"><a href="#" data-sa-action="search-open"><i class="zwicon-search"></i></a></li>

                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" class="top-nav__notify"><i class="zwicon-mail"></i></a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block">
                            <div class="dropdown-header">
                                Messages
                                <div class="actions">
                                    <a href="/index" class="actions__item zwicon-plus"></a>
                                </div>
                            </div>

                            <div class="listview listview--hover">
                                
                            </div>
                        </div>
                    </li>

                    <li class="dropdown top-nav__notifications">
                        <a href="#" data-toggle="dropdown" class="top-nav__notify">
                            <i class="zwicon-bell"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block">
                            <div class="dropdown-header">
                                Notifications

                                <div class="actions">
                                    <a href="#" class="actions__item zwicon-checkmark-square" data-sa-action="notifications-clear"></a>
                                </div>
                            </div>

                            <div class="listview listview--hover">
                                <div class="listview__scroll scrollbar">
                                    
                                </div>

                                <div class="p-1"></div>
                            </div>
                        </div>
                    </li>

                    <li class="dropdown d-none d-sm-inline-block">
                        <a href="#" data-toggle="dropdown"><i class="zwicon-checkmark-circle"></i></a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                            <div class="dropdown-header">Tasks</div>

                            <div class="listview listview--hover">
                                
                            </div>
                        </div>
                    </li>

                    <li class="dropdown d-none d-sm-inline-block">
                        <a href="#" data-toggle="dropdown"><i class="zwicon-grid"></i></a>

                        <div class="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
                            <div class="row app-shortcuts">
                                <a class="col-4 app-shortcuts__item" href="#">
                                    <i class="zwicon-calendar-never"></i>
                                    <small class="">Calendar</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="#">
                                    <i class="zwicon-document"></i>
                                    <small class="">Files</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="#">
                                    <i class="zwicon-mail"></i>
                                    <small class="">Email</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="#">
                                    <i class="zwicon-line-chart"></i>
                                    <small class="">Reports</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="#">
                                    <i class="zwicon-broadcast"></i>
                                    <small class="">News</small>
                                </a>
                                <a class="col-4 app-shortcuts__item" href="#">
                                    <i class="zwicon-image"></i>
                                    <small class="">Gallery</small>
                                </a>
                            </div>
                        </div>
                    </li>

                    <li class="dropdown d-none d-sm-inline-block">
                        <a href="#" data-toggle="dropdown"><i class="zwicon-more-h"></i></a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" class="dropdown-item" data-sa-action="fullscreen">Fullscreen</a>
                            <a href="#" class="dropdown-item">Clear Local Storage</a>
                            <a href="#" class="dropdown-item">Settings</a>
                        </div>
                    </li>

                    <li class="d-none d-sm-inline-block">
                        <a href="#" class="top-nav__themes" data-sa-action="aside-open" data-sa-target=".themes"><i class="zwicon-palette"></i></a>
                    </li>
                </ul>

                <div class="clock d-none d-md-inline-block">
                    <div class="time">
                        <span class="time__hours"></span>
                        <span class="time__min"></span>
                        <span class="time__sec"></span>
                    </div>
                </div>
            </header>

            <aside class="sidebar ">
                <div class="scrollbar">
                    <div class="user">
                        <div class="user__info" data-toggle="dropdown">
                            <img class="user__img" src="/static/formwork/demo/img/profile-pics/9.jpg" alt="">
                            <div>
                                <div class="user__name">{{name}}</div>
                                <div class="user__email">{{email}}</div>
                            </div>
                        </div>
                        <div class="dropdown-menu dropdown-menu--invert">
                            <a class="dropdown-item" href="#">View Profile</a>
                            <a class="dropdown-item" href="#">Settings</a>
                            <a class="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>

                    <ul class="navigation">
                        <!-- <li @click="navActiveClick" class="navigation__active"><a href="/index"><i class="zwicon-home"></i> 主页</a></li> -->
                        <li class="navigation__sub" v-for="item in menuList"  :key="item.id" @click="addActiveClass(item.id)" :class="{'navigation__active':activeClass === item.id}">
                            <a href="#"><i :class="item.icon"></i> {{item.name}}</a>
                            <ul>
                                <li v-for="item2 in item.children"  :key="item2.id" @click="addActiveClass2(item2.id)" :class="{'navigation__active':activeClass2 === item2.id}">
                                    <a href="#" @click="jump(item2.path)"> {{item2.name}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>

            <div class="themes">
                <div class="scrollbar">
                    <a href="#" class="themes__item active" data-sa-value="1"><img src="/static/formwork/img/bg/1.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="2"><img src="/static/formwork/img/bg/2.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="3"><img src="/static/formwork/img/bg/3.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="4"><img src="/static/formwork/img/bg/4.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="5"><img src="/static/formwork/img/bg/5.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="6"><img src="/static/formwork/img/bg/6.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="7"><img src="/static/formwork/img/bg/7.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="8"><img src="/static/formwork/img/bg/8.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="9"><img src="/static/formwork/img/bg/9.jpg" alt=""></a>
                    <a href="#" class="themes__item" data-sa-value="10"><img src="/static/formwork/img/bg/10.jpg" alt=""></a>
                </div>
            </div>

            <transition name="slide-left" mode="out-in">
                <router-view></router-view>
            </transition>

        </main>
        <remote-js src="../../../static/formwork/vendors/jquery/jquery.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/popper.js/popper.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/bootstrap/js/bootstrap.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/overlay-scrollbars/jquery.overlayScrollbars.min.js"></remote-js>

        <!-- <remote-js src="../../../static/formwork/vendors/datatables/jquery.dataTables.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/datatables/datatables-buttons/dataTables.buttons.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/datatables/datatables-buttons/buttons.print.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/jszip/jszip.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/datatables/datatables-buttons/buttons.html5.min.js"></remote-js> -->

        <remote-js src="../../../static/formwork/vendors/jquery-mask-plugin/jquery.mask.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/select2/js/select2.full.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/dropzone/dropzone.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/flatpickr/flatpickr.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/nouislider/nouislider.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/trumbowyg/trumbowyg.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/rateyo/jquery.rateyo.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/jquery-text-counter/textcounter.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/autosize/autosize.min.js"></remote-js>
        <remote-js src="../../../static/formwork/vendors/sweetalert2/sweetalert2.all.min.js"></remote-js>

        <remote-js src="../../../static/formwork/js/app.min.js"></remote-js>
    </div>
</template>

<script>

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
        return {
            name:'',
            email:'',
            activeClass:'',
            activeClass2:'',
            menuList:[
                {
                    id:1000,
                    name:'配置',
                    pid:0,
                    icon:'zwicon-cog',
                    children:[
                        {id:1001,name:'基本配置',pid:1000,path:'/config/base'},
                        {id:1002,name:'科技配置',pid:1000,path:''},
                    ]
                },
                {
                    id:2000,
                    name:'虚战力',
                    pid:0,
                    icon:'zwicon-shape-circle',
                    children:[
                        {id:2001,name:'虚战力查询',pid:2000,path:'/xucombat/queryCombat'},
                        {id:2002,name:'战力模拟器',pid:2000,path:'/xucombat/queryCombat'},
                    ]
                },
            ]
        }
    },
    // 创建前状态
    beforeCreate: function() {

    },
    // 创建完毕状态
    created: function() {
        this.name = this.$store.state.user.name;
        this.email = this.$store.state.user.email;
    },
    // 挂载前状态
    beforeMount: function() {

    },
    // 挂载结束状态
    mounted: function() {
        setTimeout(function(){
            $(".page-loader").fadeOut()
        },500)

        // let s = document.createElement("script")
        // s.type = 'text/javascript'
        // s.src = '../../../static/formwork/js/app.min.js'
        // document.body.appendChild(s)
    },
    // 更新前状态
    beforeUpdate: function () {

    },
    // 更新完成状态
    updated: function () {

    },
    // 销毁前状态
    beforeDestroy: function () {

    },
    // 销毁完成状态
    destroyed: function () {

    },
    methods: {
        jump (url) {
            // this.$router.push({path: url, query: {plan: 'private'}})
            this.$router.push({path: url})
        },
        addActiveClass(index){
            this.activeClass = index;
        },
        addActiveClass2(index){
            this.activeClass2 = index;
        }
    }
}
</script>

<style>
    @import '../../../static/formwork/vendors/zwicon/zwicon.min.css';
    @import '../../../static/formwork/vendors/animate.css/animate.min.css';
    @import '../../../static/formwork/vendors/overlay-scrollbars/OverlayScrollbars.min.css';
    @import '../../../static/formwork/vendors/fullcalendar/core/main.min.css';
    @import '../../../static/formwork/vendors/fullcalendar/daygrid/main.min.css';

    @import '../../../static/formwork/vendors/select2/css/select2.min.css';
    @import '../../../static/formwork/vendors/dropzone/dropzone.css';
    @import '../../../static/formwork/vendors/flatpickr/flatpickr.min.css';
    @import '../../../static/formwork/vendors/nouislider/nouislider.min.css';
    @import '../../../static/formwork/vendors/bootstrap-colorpicker/css/bootstrap-colorpicker.css';
    @import '../../../static/formwork/vendors/trumbowyg/ui/trumbowyg.min.css';
    @import '../../../static/formwork/vendors/rateyo/jquery.rateyo.min.css';

    @import '../../../static/formwork/css/app.min.css';
</style>

<style scoped>
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 500ms;
        position: absolute;
    }
    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>