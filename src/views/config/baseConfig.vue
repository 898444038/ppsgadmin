<template>
    <section class="content">
        <div class="content__inner">
            <header class="content__title">
                <h1>Tabs <small>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.</small></h1>
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
                    <h4 class="card-title">Basic example</h4>
                    <h6 class="card-subtitle">Basic example with static contents.</h6>

                    <div class="tab-container">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Messages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active fade show" id="home" role="tabpanel">
                                <DataTable :data='data1'></DataTable>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel">
                                <DataTable :data='data2'></DataTable>
                            </div>
                            <div class="tab-pane fade" id="messages" role="tabpanel">
                                <p>Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis. Etiam ut purus mattis mauris sodales aliquam. Aenean viverra rhoncus pede. Nulla sit amet est. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Praesent ac sem eget est egestas volutpat. Cras varius. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel dui.Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis. Etiam ut purus mattis mauris sodales aliquam. Aenean viverra rhoncus pede. Nulla sit amet est. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Praesent ac sem eget est egestas volutpat. Cras varius. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Fusce vel dui.</p>
                            </div>
                            <div class="tab-pane fade" id="settings" role="tabpanel">
                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.</p>
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
            data1:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'name',name:'名称'}
                ],
                list:[
                    {id:1,name:"name1"},
                    {id:2,name:"name2"},
                    {id:3,name:"name3"},
                    {id:4,name:"name4"},
                    {id:5,name:"name5"},
                ]
            },
            data2:{
                title:[
                    {key:'id',name:'序号'},
                    {key:'name',name:'名称'}
                ],
                list:[
                    {id:1,name:"name1"},
                    {id:2,name:"name2"},
                ]
            },
        }
    },
    // 挂载结束状态
    mounted: function() {
        
    },
    methods:{
        
    }
}
</script>


<style scoped>

</style>