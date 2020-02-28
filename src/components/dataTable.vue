<template>
    <div class="table-responsive data-table">
        <div id="data-table_wrapper" class="dataTables_wrapper no-footer">
            <div class="dataTables__top">
                <div id="data-table_filter" class="dataTables_filter">
                    <label>Search:<input type="search" class="" placeholder="Search for records..." aria-controls="data-table"></label>
                </div>
                <!-- <div class="dataTables_length" id="data-table_length"></div>
                <label>Show 
                    <select name="data-table_length" aria-controls="data-table" class="">
                        <option value="15">15 Rows</option>
                        <option value="30">30 Rows</option>
                        <option value="45">45 Rows</option>
                        <option value="-1">Everything</option>
                    </select> entries
                </label> -->
            </div>
            <!-- <div class="dt-buttons">
                <button class="dt-button buttons-excel buttons-html5" tabindex="0" aria-controls="data-table" type="button"><span>Excel</span></button> 
                <button class="dt-button buttons-csv buttons-html5" tabindex="0" aria-controls="data-table" type="button"><span>CSV</span></button> 
                <button class="dt-button buttons-print" tabindex="0" aria-controls="data-table" type="button"><span>Print</span></button> 
            </div>
            <div class="dataTables_actions">
                <i class="zwicon-more-h" data-toggle="dropdown"></i>
                <div class="dropdown-menu dropdown-menu-right">
                    <a data-table-action="print" class="dropdown-item">Print</a>
                    <a data-table-action="fullscreen" class="dropdown-item">Fullscreen</a>
                    <div class="dropdown-divider"></div>
                    <div class="dropdown-header border-bottom-0 pt-0">
                        <small>Download as</small>
                    </div>
                    <a data-table-action="excel" class="dropdown-item">Excel (.xlsx)</a>
                    <a data-table-action="csv" class="dropdown-item">CSV (.csv)</a>
                </div>
            </div> -->
        </div>
        <table class="table dataTable no-footer table-hover" role="grid" aria-describedby="data-table_info">
            <thead>
                <tr role="row">
                    <!-- <th class="sorting_asc" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending">Name</th>
                    <th class="sorting" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending">Position</th>
                    <th class="sorting" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending">Office</th>
                    <th class="sorting" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending">Age</th>
                    <th class="sorting" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending">Start date</th>
                    <th class="sorting" tabindex="0" aria-controls="data-table" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending">Salary</th>
                     -->
                    <th v-for="(item,index) in title" :key="index" tabindex="0" rowspan="1" colspan="1" >{{item.name}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="index" role="row">
                    <td v-for="(item2,index2) in item" :key="index2" class="sorting_1">{{item2}}</td>
                </tr>
                <!-- <tr role="row" class="even">
                    <td class="sorting_1">Sonya Frost</td>
                    <td>Software Engineer</td>
                    <td>Edinburgh</td>
                    <td>23</td>
                    <td>2008/12/13</td>
                    <td>$103,600</td>
                </tr> -->
            </tbody>
        </table>
        <div class="dataTables__bottom">
            <!-- <div class="dataTables_info" id="data-table_info" role="status" aria-live="polite">Showing 46 to 57 of 57 entries</div> -->
            <div class="dataTables_paginate paging_simple_numbers" id="data-table_paginate">
                <a class="paginate_button previous" :class="{ disabled: currentPage==1 }" aria-controls="data-table" data-dt-idx="0" tabindex="0" id="data-table_previous" @click="prevPage()">Previous</a>
                <span>
                    <!-- <a class="paginate_button current" aria-controls="data-table" data-dt-idx="1" tabindex="0">1</a>
                    <a class="paginate_button " aria-controls="data-table" data-dt-idx="2" tabindex="0">2</a>
                    <a class="paginate_button " aria-controls="data-table" data-dt-idx="3" tabindex="0">3</a> -->
                    <a v-for="index of page" :key="index" class="paginate_button" :class="{ current: index==currentPage }" @click="toPage(index)" aria-controls="data-table" data-dt-idx="4" tabindex="0">{{index}}</a>
                </span>
                <a class="paginate_button next" :class="{ disabled: currentPage==page }" aria-controls="data-table" data-dt-idx="5" tabindex="0" id="data-table_next" @click="nextPage()">Next</a>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        
        
        <!-- <remote-js src="../../static/formwork/vendors/jquery/jquery.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/popper.js/popper.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/bootstrap/js/bootstrap.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/overlay-scrollbars/jquery.overlayScrollbars.min.js"></remote-js>
-->
        <!-- <remote-js src="../../static/formwork/vendors/datatables/jquery.dataTables.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/datatables/datatables-buttons/dataTables.buttons.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/datatables/datatables-buttons/buttons.print.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/jszip/jszip.min.js"></remote-js>
        <remote-js src="../../static/formwork/vendors/datatables/datatables-buttons/buttons.html5.min.js"></remote-js>  -->

        <!-- <remote-js src="../../../static/formwork/js/app.min.js"></remote-js> -->
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props:{
        data:{},
    },
    components: {
        'remote-js': {
            render(createElement) {
                return createElement('script', {attrs: {type: 'text/javascript', src: this.src}});
            },
            props: {
                src: { type: String, required: true}
            }
        },
    },
    data() {
        return {
            title:[],//标题
            list:[],//显示的list
            totalList:[],//总数据
            currentPage:1,//当前页码
            size:0,//总条数
            page:0,//总页数
            pageSize:10,//每页显示条数
        }
    },
    // 创建前状态
    beforeCreate: function() {

    },
    // 创建完毕状态
    created: function() {

    },
    // 挂载前状态
    beforeMount: function() {

    },
    // 挂载结束状态
    mounted: function() {
        this.initTable();
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
    methods:{
        initTable(){
            this.title = this.data.title;
            this.totalList = this.data.list;
            var startIndex = (this.currentPage-1)*this.pageSize;
            var endIndex = (this.currentPage)*this.pageSize;
            this.list  = this.data.list.slice(startIndex,endIndex);
            this.size  = this.data.list.length;
            this.page = Math.ceil(this.size/this.pageSize);
        },
        toPage(index){
            this.currentPage = index;
            var startIndex = (this.currentPage-1)*this.pageSize;
            var endIndex = (this.currentPage)*this.pageSize;
            this.list  = this.totalList.slice(startIndex,endIndex);
        },
        prevPage(){
            if(this.currentPage > 1){
                this.currentPage = this.currentPage - 1;
                var startIndex = (this.currentPage-1)*this.pageSize;
                var endIndex = (this.currentPage)*this.pageSize;
                this.list  = this.totalList.slice(startIndex,endIndex);
            }
        },
        nextPage(){
            if(this.currentPage < this.page){
                this.currentPage = this.currentPage + 1;
                var startIndex = (this.currentPage-1)*this.pageSize;
                var endIndex = (this.currentPage)*this.pageSize;
                this.list  = this.totalList.slice(startIndex,endIndex);
            }
        },
    }
}
</script>

<style scoped>

</style>