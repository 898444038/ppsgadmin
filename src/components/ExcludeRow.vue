<template>
    <div class="row">
        <div class="col-sm-6 col-md-6">
            <div class="form-group">
                <select v-model="selectValue1" class="select2 select2-search__field select2-close-mask select" data-placeholder="指定武将数量">
                    <option value="">请选择武将</option>
                    <option v-for="(item,index) in data" :key="index" :value="item.name">{{item.name}}</option>
                </select>
            </div>
        </div>
        <div class="col-sm-2 col-md-2">
            <div id="input-slider1"></div>
        </div>
        <div class="col-sm-2 col-md-2">
            <div class="form-group">
                <input type="text" class="form-control" id="input-slider-value1" value="0" readonly/>
            </div>
        </div>
        <!-- <div class="col-sm-2 col-md-2">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <button class="btn btn-theme btn--icon"><i class="zwicon-plus"></i></button>
                    <button class="btn btn-theme btn--icon"><i class="zwicon-minus"></i></button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props:{
        data:{},
    },
    
    data() {
        return {
            
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
        
    }
}
</script>

<style scoped>

</style>