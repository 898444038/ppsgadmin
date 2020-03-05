<template>
    <section class="content content-root">
        <div class="content__inner content__inner--sm" style="max-width: 1200px;">
            <header class="content__title">
                <h1>新增武将 <small>add generals</small></h1>
            </header>

            <div class="card new-contact">
                <div class="new-contact__header">
                    <form id="uploadFileForm" style="display: none" enctype="multipart/form-data">
                        <input type='file' id='ming-file' name='file' class="zwicon-camera new-contact__upload">
                    </form>
                    <a id="upload" href="#" class="zwicon-camera new-contact__upload"></a>
                    <img src="/static/formwork/demo/img/contacts/user_empty.png" class="new-contact__img" alt="">
                </div>

                <div class="card-body">
                    <div class="tab-container">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#base" role="tab" >基本</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#arms" role="tab" >兵种</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#destiny" role="tab" >命格</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#skin" role="tab" >幻化</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active fade show" id="base" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>武将名称</label>
                                            <input type="text" class="form-control" placeholder="Name of the generals">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>关联上一级卡</label>
                                            <input type="text" class="form-control" placeholder="English name of general">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>性别</label>
                                            <input type="text" class="form-control" placeholder="English name of general">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>所属国家</label>
                                            <input type="text" class="form-control" placeholder="Country of origin">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>星级</label>
                                            <input type="text" class="form-control" placeholder="Star">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>兵种类型</label>
                                            <input type="text" class="form-control" placeholder="Arms">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>武将类型</label>
                                            <input type="text" class="form-control" placeholder="Types of generals">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>初始武力(1级)</label>
                                            <input type="text" class="form-control" placeholder="Initial force">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>初始智力(1级)</label>
                                            <input type="text" class="form-control" placeholder="Initial intelligence">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>初始兵力(1级)</label>
                                            <input type="text" class="form-control" placeholder="Initial Troops">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>联协</label>
                                            <input type="text" class="form-control" placeholder="Entourage">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>专属战器</label>
                                            <input type="text" class="form-control" placeholder="Usable weapon">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>专属技能</label>
                                            <input type="text" class="form-control" placeholder="Skill">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>援军技能</label>
                                            <input type="text" class="form-control" placeholder="Skill">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>通用被动</label>
                                            <input type="text" class="form-control" placeholder="passive">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>专属被动</label>
                                            <input type="text" class="form-control" placeholder="passive">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>命格被动</label>
                                            <input type="text" class="form-control" placeholder="passive">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="arms" role="tabpanel">
                                <div class="row">
                                    <div class="container-box">
                                        <!-- <div class="dot"></div>
                                        <div class="box"><span class="hex0"><span class="hexIn0">1</span></span></div>
                                        <div class="box"><span class="hex0"><span class="hexIn0">2</span></span></div>
                                        <div class="box"><span class="hex0"><span class="hexIn0">3</span></span></div>
                                        <div class="box"><span class="hex0"><span class="hexIn0">4</span></span></div>
                                        <div class="box"><span class="hex0"><span class="hexIn0">5</span></span></div> -->
                                        <ul class="arms-item">
                                            <li><div class="arms-item1">1</div></li>
                                            <li><div class="arms-item2">2</div></li>
                                            <li><div class="arms-item3">3</div></li>
                                            <li><div class="arms-item4">4</div></li>
                                            <li><div class="arms-item5">5</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="destiny" role="tabpanel">
                                <div class="row">
                                    <ul class="fc" style="display:none">
                                        <li><span class="hex"><span class="hexIn">1</span></span></li>
                                        <li><span class="hex"><span class="hexIn">2</span></span></li>
                                        <li><span class="hex"><span class="hexIn">3</span></span></li>
                                        <li><span class="hex"><span class="hexIn">4</span></span></li>
                                        <li><span class="hex"><span class="hexIn">5</span></span></li>
                                        <li><span class="hex"><span class="hexIn">6</span></span></li>
                                        <li><span class="hex"><span class="hexIn">7</span></span></li>
                                        <li><span class="hex"><span class="hexIn">8</span></span></li>
                                        <li><span class="hex"><span class="hexIn">9</span></span></li>
                                        <li><span class="hex"><span class="hexIn">10</span></span></li>
                                        <li><span class="hex"><span class="hexIn">11</span></span></li>
                                        <li><span class="hex"><span class="hexIn">12</span></span></li>
                                        <li><span class="hex"><span class="hexIn">13</span></span></li>
                                        <li><span class="hex"><span class="hexIn">14</span></span></li>
                                        <li><span class="hex"><span class="hexIn">15</span></span></li>
                                        <li><span class="hex"><span class="hexIn">16</span></span></li>
                                        <li><span class="hex"><span class="hexIn">17</span></span></li>
                                        <li><span class="hex"><span class="hexIn">18</span></span></li>
                                        <li><span class="hex"><span class="hexIn">19</span></span></li>
                                        <li><span class="hex"><span class="hexIn">20</span></span></li>
                                        <li><span class="hex"><span class="hexIn">21</span></span></li>
                                        <li><span class="hex"><span class="hexIn">22</span></span></li>
                                        <li><span class="hex"><span class="hexIn">23</span></span></li>
                                        <li><span class="hex"><span class="hexIn">24</span></span></li>

                                        <li><span class="hex"><span class="hexIn">1</span></span></li>
                                        <li><span class="hex"><span class="hexIn">2</span></span></li>
                                        <li><span class="hex"><span class="hexIn">3</span></span></li>
                                        <li><span class="hex"><span class="hexIn">4</span></span></li>
                                        <li><span class="hex"><span class="hexIn">5</span></span></li>
                                        <li><span class="hex"><span class="hexIn">6</span></span></li>
                                        <li><span class="hex"><span class="hexIn">7</span></span></li>
                                        <li><span class="hex"><span class="hexIn">8</span></span></li>
                                        <li><span class="hex"><span class="hexIn">9</span></span></li>
                                        <li><span class="hex"><span class="hexIn">10</span></span></li>
                                        <li><span class="hex"><span class="hexIn">11</span></span></li>
                                        <li><span class="hex"><span class="hexIn">12</span></span></li>
                                        <li><span class="hex"><span class="hexIn">13</span></span></li>
                                        <li><span class="hex"><span class="hexIn">14</span></span></li>
                                        <li><span class="hex"><span class="hexIn">15</span></span></li>
                                        <li><span class="hex"><span class="hexIn">16</span></span></li>
                                        <li><span class="hex"><span class="hexIn">17</span></span></li>
                                        <li><span class="hex"><span class="hexIn">18</span></span></li>
                                        <li><span class="hex"><span class="hexIn">19</span></span></li>
                                        <li><span class="hex"><span class="hexIn">20</span></span></li>
                                        <li><span class="hex"><span class="hexIn">21</span></span></li>
                                        <li><span class="hex"><span class="hexIn">22</span></span></li>
                                        <li><span class="hex"><span class="hexIn">23</span></span></li>
                                        <li><span class="hex"><span class="hexIn">24</span></span></li>
                                    </ul>

                                    <ul class="list">
                                        <li class="list-item hide"><div class="item-inside"> 1 </div></li>
                                        <li class="list-item"><div class="item-inside"> 2 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 3 </div></li>
                                        <li class="list-item"><div class="item-inside"> 4 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 5 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 6 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 7 </div></li>
                                        <li class="list-item"><div class="item-inside"> 8 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 9 </div></li>

                                        <li class="list-item"><div class="item-inside"> 10 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 11 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 12 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 13 </div></li>
                                        <li class="list-item"><div class="item-inside"> 14 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 15 </div></li>
                                        <li class="list-item"><div class="item-inside"> 16 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 17 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 18 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 19 </div></li>
                                        
                                        <li class="list-item"><div class="item-inside"> 20 </div></li>
                                        <li class="list-item hide">
                                            <div class="item-inside">
                                                <!-- <svg data-v-37419ec1="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width: 76px;height: 138px;position: absolute;left: 30px;"><line data-v-37419ec1="" x1="0" y1="0" x2="100%" y2="100%" stroke="#E6E6E6" stroke-width="1"></line></svg> -->
                                            </div>
                                        </li>

                                        

                                        <li class="list-item"><div class="item-inside"> 22 </div></li>
                                        <li class="list-item hide">
                                            <div class="item-inside">
                                                <!-- <svg data-v-37419ec1="" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width: 76px;height: 138px;position: absolute;left: 30px;"><line data-v-37419ec1="" x1="0" y1="0" x2="100%" y2="100%" stroke="#E6E6E6" stroke-width="1"></line></svg> -->
                                            </div>
                                        </li>
                                        <li class="list-item"><div class="item-inside"> 24 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 25 </div></li>
                                        <li class="list-item"><div class="item-inside"> 26 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 27 </div></li>
                                        <li class="list-item"><div class="item-inside"> 28 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 29 </div></li>

                                        <li class="list-item"><div class="item-inside"> 30 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 31 </div></li>
                                        <li class="list-item"><div class="item-inside"> 32 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 33 </div></li>
                                        <li class="list-item"><div class="item-inside"> 34 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 35 </div></li>
                                        <li class="list-item"><div class="item-inside"> 36 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 37 </div></li>
                                        <li class="list-item"><div class="item-inside"> 38 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 39 </div></li>

                                        <li class="list-item hide"><div class="item-inside"> 40 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 41 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 42 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 43 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 44 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 45 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 46 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 47 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 48 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 49 </div></li>

                                        <li class="list-item hide"><div class="item-inside"> 50 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 51 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 52 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 53 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 54 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 55 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 56 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 57 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 58 </div></li>
                                        <li class="list-item"><div class="item-inside"> 59 </div></li>

                                        <li class="list-item hide"><div class="item-inside"> 60 </div></li>
                                        <li class="list-item"><div class="item-inside"> 61 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 62 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 63 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 64 </div></li>
                                        <li class="list-item"><div class="item-inside"> 65 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 66 </div></li>
                                        <li class="list-item"><div class="item-inside"> 67 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 68 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 69 </div></li>

                                        <li class="list-item hide"><div class="item-inside"> 70 </div></li>
                                        <li class="list-item"><div class="item-inside"> 71 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 72 </div></li>
                                        <li class="list-item"><div class="item-inside"> 73 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 74 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 75 </div></li>
                                        <li class="list-item hide"><div class="item-inside"> 76 </div></li>
                                    </ul>   

                                </div>
                            </div>
                            <div class="tab-pane fade" id="skin" role="tabpanel">
                                <div class="row">
                        
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        
                    </div>

                    <!-- <div class="form-group">
                        <label></label>
                        <textarea class="form-control textarea-autosize" placeholder="Reinforcements"></textarea>
                    </div> -->

                    <div class="clearfix"></div>

                    <div class="mt-5 text-center">
                        <button href="#" class="btn btn-theme" style="width: 100%;">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return {

        }
    },
    mounted: function(){
        
        var canvas = document.getElementById("canvas");
            canvas.width = 400;
            canvas.height = 400;
        var cc = canvas.getContext("2d");
        
        // 填充一个背景
        cc.fillStyle = "#ffffff26";
        cc.strokeStyle = "red";//填充边框颜色
        cc.rect(0 , 0 , 400 , 400);
        cc.fill();
        
        cc.beginPath();
        for (var i = 0 ; i < 6 ; i++) {
            var x =  Math.cos((i * 60)/180 * Math.PI) * 150 + 200 ;
            var y = -Math.sin((i * 60)/180 * Math.PI) * 150 + 200;	
            cc.lineTo(x,y);
        }
        cc.closePath();
                
        cc.lineWidth = 2;
        cc.fillStyle ="#ffffff26";
        cc.strokeStyle = "red";//填充边框颜色
    },
    methods:{

    }
    
}
</script>


<style scoped>
ul,li{
    margin: 0;
    list-style-type: none;
    padding: 0;
}
.arms-item{
    width: 400px;
    height: 350px;
    border-radius: 50%;
    position: relative;
}
.arms-item>li{
    width: 80px;
    height: 80px;
    position: absolute;
    background-color:#ffffff26;
    border-radius: 50%;
    line-height: 80px;
    text-align: center;
    left: 50%;
    margin-left: 20px;
    margin-top: 20px;
}
.arms-item>li:nth-of-type(2){
    transform: rotate(72deg);
    transform-origin:40px 150px;
}
.arms-item>li:nth-of-type(3){
    transform: rotate(144deg);
    transform-origin:40px 150px;
}
.arms-item>li:nth-of-type(4){
    transform: rotate(216deg);
    transform-origin:40px 150px;
}
.arms-item>li:nth-of-type(5){
    transform: rotate(288deg);
    transform-origin:40px 150px;
}
.arms-item2{
    transform: rotate(-72deg);
}
.arms-item3{
    transform: rotate(-144deg);
}
.arms-item4{
    transform: rotate(-216deg);
}
.arms-item5{
    transform: rotate(-288deg);
}

/* 蜂巢样式 */
.fc {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 1020px;
  margin: 100px auto;
}
.fc>li {
  float: left;
  margin: 0 5px;
  height: 96px;
}
.hex {
  overflow: hidden;
  display: block;
  width: 100px;
  height: 116px;
  transform: rotate(-60deg) skewY(30deg);
}
.hexIn {
  background-color: #ffffff26;
  display: block;
  width: 100px;
  height: 116px;
  line-height: 116px;
  text-align: center;
  transform: skewY(-30deg) rotate(60deg);
}
.fc>li:nth-child(16n + 9) {
  margin-left: 60px;
}














.list {
  padding: 2rem;
  margin: 0;
  width: 100%;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(19, 1fr 2fr) 1fr;
  grid-auto-rows: 1fr 1fr;
  /* grid-gap: 0.5rem 1rem; */
  grid-gap: 0.1rem 0.2rem;
  --counter: 1;
}

.list-item {
  position: relative;
  grid-column: 1 / span 3;
  grid-row: calc(var(--counter) + var(--counter))/span 2;
  -webkit-filter: drop-shadow(0 0 10px rgba(68, 68, 68, 0.04));
          filter: drop-shadow(0 0 10px rgba(68, 68, 68, 0.04));
  height: 0;
  padding-bottom: 90%;
}
.list-item:nth-of-type(19n + 1) {
  grid-column: 1 / span 3;
}
.list-item:nth-of-type(19n + 2) {
  grid-column: 3 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 3) {
  grid-column: 5 / span 3;
}
.list-item:nth-of-type(19n + 4) {
  grid-column: 7 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 5) {
  grid-column: 9 / span 3;
}
.list-item:nth-of-type(19n + 6) {
  grid-column: 11 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 7) {
  grid-column: 13 / span 3;
}
.list-item:nth-of-type(19n + 8) {
  grid-column: 15 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 9) {
  grid-column: 17 / span 3;
}
.list-item:nth-of-type(19n + 10) {
  grid-column: 19 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 11) {
  grid-column: 21 / span 3;
}
.list-item:nth-of-type(19n + 12) {
  grid-column: 23 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 13) {
  grid-column: 25 / span 3;
}
.list-item:nth-of-type(19n + 14) {
  grid-column: 27 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 15) {
  grid-column: 29 / span 3;
}
.list-item:nth-of-type(19n + 16) {
  grid-column: 31 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 17) {
  grid-column: 33 / span 3;
}
.list-item:nth-of-type(19n + 18) {
  grid-column: 35 / span 3;
  grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;
}
.list-item:nth-of-type(19n + 19) {
  grid-column: 37 / span 3;
}






/* 第二行 */
.list-item:nth-of-type(n + 20) {
  --counter: 2;
}
.list-item:nth-of-type(n + 39) {
  --counter: 3;
}
.list-item:nth-of-type(n + 58) {
  --counter: 4;
}
/* .list-item:nth-of-type(n + 29) {
  --counter: 5;
}
.list-item:nth-of-type(n + 36) {
  --counter: 6;
}
.list-item:nth-of-type(n + 43) {
  --counter: 7;
}
.list-item:nth-of-type(n + 50) {
  --counter: 8;
}
.list-item:nth-of-type(n + 57) {
  --counter: 9;
}
.list-item:nth-of-type(n + 64) {
  --counter: 10;
}
.list-item:nth-of-type(n + 71) {
  --counter: 11;
}
.list-item:nth-of-type(n + 78) {
  --counter: 12;
}
.list-item:nth-of-type(n + 85) {
  --counter: 13;
}
.list-item:nth-of-type(n + 92) {
  --counter: 14;
}
.list-item:nth-of-type(n + 99) {
  --counter: 15;
}
.list-item:nth-of-type(n + 106) {
  --counter: 16;
}
.list-item:nth-of-type(n + 113) {
  --counter: 17;
}
.list-item:nth-of-type(n + 120) {
  --counter: 18;
}
.list-item:nth-of-type(n + 127) {
  --counter: 19;
}
.list-item:nth-of-type(n + 134) {
  --counter: 20;
}
.list-item:nth-of-type(n + 141) {
  --counter: 21;
} */

.item-inside {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 1.25rem;
  color: #fff;
  background-color: #ffffff26;
  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
          clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
  padding: 2rem 25%;
}


.hide>.item-inside{
    background-color: transparent;
    display: none;
}
</style>