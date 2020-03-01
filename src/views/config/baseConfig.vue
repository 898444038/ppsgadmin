<template>
    <section class="content">
        <div class="content__inner">
            <header class="content__title">
                <h1>配置 
                    <!-- <small>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.</small> -->
                </h1>
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
                    <h4 class="card-title">基本配置</h4>
                    <!-- <h6 class="card-subtitle">Basic example with static contents.</h6> -->

                    <div class="tab-container">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#country" role="tab" @click="country">国家配置</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#star" role="tab" @click="star">星级配置</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#combat" role="tab" @click="combat">战力配置</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#generalsType" role="tab" @click="generalsType">武将类型配置</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#science" role="tab" @click="science">科技配置</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#dict" role="tab" @click="dict">数据字典</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active fade show" id="country" role="tabpanel">
                                <DataTable :data='data1' :key="key1"></DataTable>
                            </div>
                            <div class="tab-pane fade" id="star" role="tabpanel">
                                <DataTable :data='data2' :key="key2"></DataTable>
                            </div>
                            <div class="tab-pane fade" id="combat" role="tabpanel">
                                <DataTable :data='data3' :key="key3"></DataTable>
                            </div>
                            <div class="tab-pane fade" id="generalsType" role="tabpanel">
                                <DataTable :data='data4' :key="key4"></DataTable>
                            </div>
                            <div class="tab-pane fade" id="science" role="tabpanel">
                                <DataTable :data='scienceData' :key="scienceKey"></DataTable>
                            </div>
                            <div class="tab-pane fade" id="dict" role="tabpanel">
                                <DataTable :data='dictData' :key="dictKey"></DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
        <!-- 
        <script src="resources/vendors/datatables/jquery.dataTables.min.js"></script>
        <script src="resources/vendors/datatables/datatables-buttons/dataTables.buttons.min.js"></script>
        <script src="resources/vendors/datatables/datatables-buttons/buttons.print.min.js"></script>
        <script src="resources/vendors/jszip/jszip.min.js"></script>
        <script src="resources/vendors/datatables/datatables-buttons/buttons.html5.min.js"></script>

        <script src="resources/js/app.min.js"></script>
-->
<script>
import DataTable from '@/components/dataTable.vue'
import $ from 'jquery'
export default {
    components:{
        DataTable,
    },
    data() {
        return {
            key1:0,
            data1:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'name',name:'名称'}
                ],
                list:[]
            },
            key2:0,
            data2:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'code',name:'级别'},
                    {key:'name',name:'名称'}
                ],
                list:[]
            },
            key3:0,
            data3:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'name',name:'名称'},
                    {key:'combat',name:'战力值'},
                ],
                list:[]
            },
            key4:0,
            data4:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'name',name:'名称'},
                    {key:'forceGrowth',name:'武力每级成长'},
                    {key:'intellectGrowth',name:'智力每级成长'},
                    {key:'troopsGrowth',name:'兵力每级成长'},
                ],
                list:[]
            },
            scienceKey:0,
            scienceData:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'level',name:'级别'},
                    {key:'code',name:'编码'},
                    {key:'name',name:'名称'},
                    {key:'forceRate',name:'武力加成百分比'},
                    {key:'intellectRate',name:'智力加成百分比'},
                    {key:'troopsRate',name:'兵力加成百分比'},
                    {key:'selfHurtDesc',name:'自身兵种伤害加成'},
                    {key:'restraintHurtDesc',name:'针对兵种伤害加成'},
                ],
                list:[]
            },
            dictKey:0,
            dictData:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'code',name:'编码'},
                    {key:'name',name:'名称'},
                ],
                list:[]
            },
        }
    },
    // 挂载结束状态
    mounted: function() {
        this.country();
    },
    methods:{
        country(){
            this.$ajax.post(this.$request.config.country.select, {}).then(res => {
                var data =res;
                if(res.code == 200){
                    ++this.key1;
                    this.data1.list = res.data;
                }
            });
        },
        star(){
            this.$ajax.post(this.$request.config.star.select, {}).then(res => {
                var data =res;
                if(res.code == 200){
                    ++this.key2;
                    this.data2.list = res.data;
                }
            });
        },
        combat(){
            this.$ajax.post(this.$request.config.combat.select, {}).then(res => {
                var data =res;
                if(res.code == 200){
                    ++this.key3;
                    this.data3.list = res.data;
                }
            });
        },
        generalsType(){
            this.$ajax.post(this.$request.config.generalsType.select, {}).then(res => {
                var data =res;
                if(res.code == 200){
                    ++this.key4;
                    this.data4.list = res.data;
                }
            });
        },
        science(){
            this.$ajax.post(this.$request.config.science.select, {}).then(res => {
                var data =res;
                if(res.code == 200){
                    ++this.scienceKey;
                    this.scienceData.list = res.data;
                }
            });
        },
        dict(){
            this.$ajax.post(this.$request.config.dict.select, {}).then(res => {
                var data =res;
                if(res.code == 200){
                    ++this.dictKey;
                    this.dictData.list = res.data;
                }
            });
        }
    }
}
</script>


<style scoped>

</style>