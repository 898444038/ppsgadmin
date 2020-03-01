<template>
    <section class="content">
        <div class="content__inner">
            <header class="content__title">
                <h1>虚战力查询</h1>

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


            <div class="card">
                <div class="card-body">
                    <!--<h4 class="card-title">Select 2</h4>-->
                    <!--<h6 class="card-subtitle">Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.</h6>-->
                    <div class="row">
                        <div class="col-sm-9 col-md-9">
                            <div class="form-group">
                                <!-- class="select2 select2-search__field select2-close-mask select" multiple data-placeholder="请选择五个武将" -->
                                <select id="select" v-model="selectValue" class="select2 select2-search__field select2-close-mask select" multiple data-placeholder="请选择五个武将">
                                    <option v-for="(item,index) in selectList" :key="index" :value="item.id">{{item.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-3 col-md-3">
                            <button id="success" class="btn btn-theme btn-sa-types" style="display:none;" data-type="Success">Success</button>
                            <button id="info" class="btn btn-theme btn-sa-types" style="display:none;" data-type="Info">Info</button>
                            <button type="submit" id="submit" class="btn btn-theme mb-2" style="width: 100%;" @click="query">查询</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <!--<h4 class="card-title">Basic example</h4>-->
                    <!--<h6 class="card-subtitle">Basic example with static contents.</h6>-->

                    <div class="tab-container">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#list1" role="tab">虚战力(特殊战器)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#list2" role="tab">虚战力</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#list3" role="tab">最佳随从</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#list4" role="tab">所需资源</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active fade show" id="list1" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-9 col-md-9">
                                        <div class="form-group">
                                            <label>总战力：</label><label id="total2"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-12">
                                        <h5 class="card-title">兵符列表</h5>
                                        <div class="table-responsive data-table">
                                            <table id="symbolsTable" class="table"></table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 30px;">
                                    <div class="col-sm-12 col-md-12">
                                        <h5 class="card-title">武将列表</h5>
                                        <div class="table-responsive data-table">
                                            <table id="generalsTable" class="table"></table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 30px;">
                                    <div class="col-sm-12 col-md-12">
                                        <h5 class="card-title">武将列表</h5>
                                        <div class="table-responsive data-table">
                                            <table id="generalsTable2" class="table"></table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="margin-top: 30px;">
                                    <div class="col-sm-12 col-md-12">
                                        <h5 class="card-title">随从列表</h5>
                                        <div class="table-responsive data-table">
                                            <table id="entourageTable" class="table"></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="list2" role="tabpanel">

                            </div>
                            <div class="tab-pane fade" id="list3" role="tabpanel">

                            </div>
                            <div class="tab-pane fade" id="list4" role="tabpanel">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <remote-js src="../../../static/formwork/js/app.min.js"></remote-js>
    </section>
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
    data(){
        return {
            selectValue:[],
            selectList:[
                {id:1,name:"豹魂祝融夫人"},
                {id:2,name:"斩锋高顺"},
                {id:3,name:"砺战赵云"},
            ]
        }
    },
    // 挂载结束状态
    mounted: function() {
        //$("#select").select2({dropdownAutoWidth: !0, width: "100%"})
        swal.fire({
            text: "请选择五位武将!",
            background: "#000",
            backdrop: "rgba(0,0,0,0.2)",
            buttonsStyling: !1,
            padding: "3rem 3rem 2rem",
            customClass: {confirmButton: "btn btn-link", title: "ca-title", container: "ca"}
        })
    },
    methods:{
        query(){
            var val = $("#select").val();
            this.selectValue = val;
            console.log(this.selectValue,val)
        },
    }
}
</script>
<style>



</style>
<style scoped>

</style>