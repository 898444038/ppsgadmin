<template>
    <section class="content content-root">
        <div class="content__inner">
            <header class="content__title">
                <h1>武将图鉴 <small>Martial arts illustrated</small></h1>

                <div class="actions">
                    <a href="#" class="actions__item zwicon-cog"></a>
                    <a href="#" class="actions__item zwicon-refresh-double"></a>

                    <div class="dropdown actions__item">
                        <i data-toggle="dropdown" class="zwicon-more-h"></i>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" class="dropdown-item">Refresh</a>
                            <a href="#" class="dropdown-item">Manage Widgets</a>
                            <a href="#" class="dropdown-item">Settings</a>
                        </div>
                    </div>
                </div>
            </header>

            <div class="toolbar">
                <nav class="toolbar__nav">
                    <a class="active" href="#">逆命</a>
                    <a href="#">突破</a>
                    <a href="#">觉醒</a>
                    <a href="#">堕天</a>
                    <a href="#">金卡</a>
                    <a href="#">银卡</a>
                    <a href="#">黑卡</a>
                    <a href="#">白卡</a>
                    <a href="#">分组</a>
                </nav>

                <div class="actions">
                    <i class="actions__item zwicon-search" data-sa-action="toolbar-search-open"></i>
                    <a href="#" class="actions__item zwicon-info-circle hidden-xs-down"></a>

                    <div class="dropdown actions__item hidden-xs-down">
                        <i class="zwicon-more-h" data-toggle="dropdown"></i>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" class="dropdown-item">Refresh</a>
                            <a href="#" class="dropdown-item">Delete</a>
                            <a href="#" class="dropdown-item">Settings</a>
                        </div>
                    </div>
                </div>

                <div class="toolbar__search">
                    <input type="text" placeholder="Search...">

                    <i class="toolbar__search__close zwicon-arrow-left" data-sa-action="toolbar-search-close"></i>
                </div>
            </div>

            <div class="contacts row">
                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/hjdw.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>虎涧典韦</strong>
                            <small>魏国 枪兵 统帅将军型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/bycc.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>霸业曹操</strong>
                            <small>魏国 骑兵 天命策士型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/fwys.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>奋威袁绍</strong>
                            <small>群雄 枪兵 统帅将军型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/kllm.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>狂澜吕蒙</strong>
                            <small>吴国 弓兵 鬼才智将型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/gqzf.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>诡骑张飞</strong>
                            <small>蜀国 骑兵 统帅将军型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/mssq.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>命世孙权</strong>
                            <small>吴国 弓兵 强袭勇将型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/swlb.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>神武刘备</strong>
                            <small>蜀国 枪兵 统帅将军型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/jgdz.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>劫国董卓</strong>
                            <small>群雄 骑兵 强袭勇将型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/myxy.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>墨衍荀彧</strong>
                            <small>魏国 骑兵 鬼才智将型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/lrllq.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>灵刃吕玲绮</strong>
                            <small>群雄 骑兵 强袭勇将型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/ldlt.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>烈胆凌统</strong>
                            <small>吴国 骑兵 统帅将军型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/yxpt.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>陨星庞统</strong>
                            <small>蜀国 骑兵 天命策士型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                    <div class="contacts__item">
                        <a href="javascript:void(0);" class="contacts__img">
                            <img src="/static/formwork/demo/img/ppsg/gydc.jpg" alt="">
                        </a>
                        <div class="contacts__info">
                            <strong>顾影貂蝉</strong>
                            <small>群雄 弓兵 鬼才智将型</small>
                        </div>
                        <button class="contacts__btn">查看详情</button>
                    </div>
                </div>
            </div>

            <a href="#" @click="btnAdd('/config/generals/add')" class="btn btn-light btn--action btn--fixed"><i class="zwicon-plus"></i></a>
        </div>

    </section>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        btnAdd(url){
            this.$router.push({path: url})
        }
    }
}
</script>

<style scoped>

</style>