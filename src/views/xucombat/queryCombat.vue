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
                                <select id="select" v-model="selectValue" class="select2 select2-search__field select2-close-mask select" multiple data-placeholder="指定0~5个武将">
                                    <option v-for="(item,index) in selectList" :key="index" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-3 col-md-3">
                            <button id="success" class="btn btn-theme btn-sa-types" style="display:none;" data-type="Success">Success</button>
                            <button id="info" class="btn btn-theme btn-sa-types" style="display:none;" data-type="Info">Info</button>
                            <!-- <button type="submit" id="submit" class="btn btn-theme mb-2" style="width: 100%;" @click="query">查询</button> -->
                            <button type="button" id="exportExcel" class="btn btn-theme mb-2" style="width: 100%;" @click="exportExcel">生成虚战力表</button>
                        </div>
                    </div>

                    <!-- <div id="exclude">
                        <div class="row">
                            <div class="col-sm-7 col-md-7">
                                <div class="form-group">
                                    <select v-model="selectValue1" class="select2 select2-search__field select2-close-mask select" data-placeholder="指定武将数量">
                                        <option value="">请选择武将</option>
                                        <option v-for="(item,index) in selectList" :key="index" :value="item.name">{{item.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-2 col-md-2"><div id="input-slider1"></div></div>
                            <div class="col-sm-3 col-md-3">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="input-slider-value1" value="0" readonly/>
                                </div>
                            </div>
                        </div>

                    </div> -->
                    
                    <!-- <div v-for="(d,index) in counter" :key="index">
                        <ExcludeRow :data='selectList' :key="selectValue"></ExcludeRow>
                    </div> -->

                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <!--<h4 class="card-title">Basic example</h4>-->
                    <!--<h6 class="card-subtitle">Basic example with static contents.</h6>-->

                    <div class="tab-container">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#list0" role="tab">基本定制</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#list1" role="tab">指定武将</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#list2" role="tab">指定兵符</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade" id="list0" role="tabpanel">
                                <div class="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" class="custom-control-input" id="customCheckInline1">
                                    <label class="custom-control-label" for="customCheckInline1">随从幻化</label>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="list1" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-6 col-md-6" v-for="(item,index) in selectList" :key="index" :value="item.name">
                                        <div class="row">
                                            <div class="col-sm-3 col-md-3">{{item.name}}</div>
                                            <div class="col-sm-4 col-md-4"><div class="input-slider-generals" :id="'input-slider-generals-'+index"></div></div>
                                            <div class="col-sm-2 col-md-2">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" :data="item.name" :id="'input-slider-generals-'+index+'-val'" readonly/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div class="tab-pane fade" id="list2" role="tabpanel">
                                <div class="form-group">
                                    指定0-3种兵符类型
                                    <select id="selectSymbols" v-model="symbolsValue" class="select2 select2-search__field select2-close-mask select" multiple data-placeholder="指定0-3种兵符类型">
                                        <option value="">请选择兵符类型</option>
                                        <option v-for="(item,index) in symbolsList" :key="index" :value="item.code">{{item.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <remote-js src="../../../static/formwork/vendors/nouislider/nouislider.min.js"></remote-js>
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
            counter:[],
            selectValue:[],
            selectList:[
                {id:0,name:"奋威袁绍"},
                {id:1,name:"灵刃吕玲绮"},
                {id:2,name:"劫国董卓"},
                {id:3,name:"顾影貂蝉"},
                {id:4,name:"虎涧典韦"},
                {id:5,name:"霸业曹操"},
                {id:6,name:"墨衍荀彧"},
                {id:7,name:"诡骑张飞"},
                {id:8,name:"神武刘备"},
                {id:9,name:"陨星庞统"},
                {id:10,name:"狂澜吕蒙"},
                {id:11,name:"命世孙权"},
                {id:12,name:"烈胆凌统"},
                {id:13,name:"砺战赵云"},
                {id:14,name:"御甲张辽"},
                {id:15,name:"武帝曹操_限"},
                {id:16,name:"奸雄曹操_限"},
                {id:17,name:"宣王司马懿"},
                {id:18,name:"狼顾司马懿_限"},
                {id:19,name:"振威张辽_限"},
                {id:20,name:"召虎张辽_限"},
                {id:21,name:"独目夏侯惇_限"},
                {id:22,name:"苍狼夏侯惇_限"},
                {id:23,name:"混沌许褚"},
                {id:24,name:"英灵典韦"},
                {id:25,name:"恶来典韦_限"},
                {id:26,name:"鬼谋郭嘉_限"},
                {id:27,name:"天妒郭嘉_限"},
                {id:28,name:"疾风曹仁_限"},
                {id:29,name:"乱武贾诩_限"},
                {id:30,name:"毒士贾诩_限"},
                {id:31,name:"文帝曹丕"},
                {id:32,name:"灭奏曹丕"},
                {id:33,name:"典军夏侯渊"},
                {id:34,name:"虎步夏侯渊"},
                {id:35,name:"令香荀彧"},
                {id:36,name:"驱虎荀彧"},
                {id:37,name:"伶歌卞夫人_限"},
                {id:38,name:"绝情张春华"},
                {id:39,name:"汉寿亭侯云长"},
                {id:40,name:"洛神甄姬"},
                {id:41,name:"灵蛇甄姬_限"},
                {id:42,name:"龙胆赵云_限"},
                {id:43,name:"神威赵云"},
                {id:44,name:"一骑关羽"},
                {id:45,name:"武圣关羽_限"},
                {id:46,name:"卧龙诸葛亮_限"},
                {id:47,name:"凤雏庞统"},
                {id:48,name:"智极庞统_限"},
                {id:49,name:"锦狮马超_限"},
                {id:50,name:"铁骑马超_限"},
                {id:51,name:"斗胆姜维"},
                {id:52,name:"麒麟姜维_限"},
                {id:53,name:"仁德刘备_限"},
                {id:54,name:"昭烈刘备_限"},
                {id:55,name:"弓神黄忠_限"},
                {id:56,name:"骁勇魏延_限"},
                {id:57,name:"落英黄舞蝶_限"},
                {id:58,name:"惊鸿黄舞蝶"},
                {id:59,name:"弓腰姬孙尚香_限"},
                {id:60,name:"郡主孙尚香"},
                {id:61,name:"阿丑黄月英"},
                {id:62,name:"杰女黄月英_限"},
                {id:63,name:"龙驹马云禄"},
                {id:64,name:"奇谋法正"},
                {id:65,name:"业炎周瑜_限"},
                {id:66,name:"克己吕蒙"},
                {id:67,name:"虎威吕蒙"},
                {id:68,name:"忠魂鲁肃"},
                {id:69,name:"缔盟鲁肃_限"},
                {id:70,name:"焚天陆逊"},
                {id:71,name:"儒将陆逊_限"},
                {id:72,name:"若虎孙权"},
                {id:73,name:"吴王孙权_限"},
                {id:74,name:"猛虎孙坚"},
                {id:75,name:"武烈孙坚_限"},
                {id:76,name:"驰骋孙策_限"},
                {id:77,name:"霸王孙策_限"},
                {id:78,name:"游侠甘宁"},
                {id:79,name:"斗将甘宁_限"},
                {id:80,name:"感古太史慈"},
                {id:81,name:"矢志太史慈_限"},
                {id:82,name:"浴血凌统_限"},
                {id:83,name:"国士凌统_限"},
                {id:84,name:"挽歌大乔_限"},
                {id:85,name:"望月大乔_限"},
                {id:86,name:"临江小乔"},
                {id:87,name:"玉琼小乔"},
                {id:88,name:"凤仪步练师"},
                {id:89,name:"赤忠黄盖"},
                {id:90,name:"血痕周泰"},
                {id:91,name:"赤羽朱然"},
                {id:92,name:"双子吕姬_限"},
                {id:93,name:"猩红吕姬_限"},
                {id:94,name:"双子吕玲绮_限"},
                {id:95,name:"战姬吕玲绮_限"},
                {id:96,name:"倾世貂蝉_限"},
                {id:97,name:"绝舞貂蝉_限"},
                {id:98,name:"浊世董卓"},
                {id:99,name:"魔君董卓_限"},
                {id:100,name:"思召袁绍"},
                {id:101,name:"贵胄袁绍_限"},
                {id:102,name:"霸音文丑"},
                {id:103,name:"猎狐文丑"},
                {id:104,name:"恶目颜良"},
                {id:105,name:"鸦杀颜良"},
                {id:106,name:"鬼神吕布_限"},
                {id:107,name:"符咒张角"},
                {id:108,name:"天公张角_限"},
                {id:109,name:"雅歌张郃_限"},
                {id:110,name:"天子汉献帝"},
                {id:111,name:"妙手华佗"},
                {id:112,name:"妖仙于吉"},
                {id:113,name:"斩锋高顺"},
                {id:114,name:"豹魂祝融夫人"},
            ],
            symbolsValue:[],
            symbolsList:[
                {code:1,name:"苍龙"},
                {code:2,name:"猛虎"},
                {code:3,name:"火凤"},
                {code:4,name:"天狼"},
                {code:5,name:"玄龟"},
                {code:6,name:"翔鹰"},
                {code:7,name:"麒麟"},
                {code:8,name:"青鸾"},
                {code:9,name:"白泽"},
                {code:10,name:"混沌"},
                {code:11,name:"穷奇"},
                {code:12,name:"睚眦"},
            ],
            generalsCount:[]
        }
    },
    // 挂载结束状态
    mounted: function() {
        //$("#select").select2({dropdownAutoWidth: !0, width: "100%"})
        // swal.fire({
        //     text: "请选择五位武将!",
        //     background: "#000",
        //     backdrop: "rgba(0,0,0,0.2)",
        //     buttonsStyling: !1,
        //     padding: "3rem 3rem 2rem",
        //     customClass: {confirmButton: "btn btn-link", title: "ca-title", container: "ca"}
        // })
/*
        var e = document.getElementById("input-slider1");
        noUiSlider.create(e, {
            start: [0],//	设置滑块开始至结束的范围
            handles:1,//设置滑块的数量，可选 1 或 2
            connect: "lower",//连接，可选 lower、upper、true、false
            margin:1,
            step:1,
            serialization:0,
            range: {min: 0, max: 5}
        }), e.noUiSlider.on("update", function (e, t) {
            document.getElementById("input-slider-value1").value = parseInt(e[t])
        })
        */
       var _this = this;
        $(".input-slider-generals").each(function(i,el){
            var id = $(el).attr("id");
            var idv = $(el).attr("id")+"-val";
            var e = document.getElementById(id);
            noUiSlider.create(e, {
                start: [5],//	设置滑块开始至结束的范围
                handles:1,//设置滑块的数量，可选 1 或 2
                connect: "lower",//连接，可选 lower、upper、true、false
                margin:1,
                step:1,
                serialization:0,
                range: {min: 0, max: 5}
            }), e.noUiSlider.on("update", function (e, t) {
                var value = parseInt(e[t]);
                document.getElementById(idv).value = value;
                var name = $("#"+idv).attr("data");
                var obj = {};
                obj.name = name;
                obj.maxSize = value;
                var flag = false;
                for(var i=0;i<_this.generalsCount.length;i++){
                    if(_this.generalsCount[i].name == name){
                        flag = true;
                        _this.generalsCount[i].maxSize = value;
                        if(value==5){
                            _this.generalsCount.splice(i,1);
                        }
                    }
                }
                if(!flag){
                    if(value!=5){
                        _this.generalsCount.push(obj);
                    }
                }
                
            })
        });
        
    },
    methods:{
        add(){
            this.counter.push({});
        },
        query(){
            var val = $("#select").val();
            this.selectValue = val;
            console.log(this.selectValue,val)
        },
        exportExcel(){
            var isSkin = false;
            if($("#customCheckInline1:checked").val()){
                isSkin = true;
            }else{
                isSkin = false;
            }
            var generals = $("#select").val();
            var generalsCount = this.generalsCount;
            var symbols = $("#selectSymbols").val();

            var flag = true;
            if(generals.length>5){
                swal.fire({
                    text: "请选择0-5位武将!",
                    background: "#000",
                    backdrop: "rgba(0,0,0,0.2)",
                    buttonsStyling: !1,
                    padding: "3rem 3rem 2rem",
                    customClass: {confirmButton: "btn btn-link", title: "ca-title", container: "ca"}
                })
                flag = false;
            }
            if(symbols.length>3){
                swal.fire({
                    text: "请选择0-3个兵符类型!",
                    background: "#000",
                    backdrop: "rgba(0,0,0,0.2)",
                    buttonsStyling: !1,
                    padding: "3rem 3rem 2rem",
                    customClass: {confirmButton: "btn btn-link", title: "ca-title", container: "ca"}
                })
                flag = false;
            }

            if(flag){
                $(".page-loader").fadeIn();
                this.$ajax.instance.post(this.$request.xzl.select,{
                    generals:$("#select").val(),
                    generalsCount:generalsCount,
                    symbols:symbols,
                    isSkin:isSkin,
                },{
                    responseType: 'arraybuffer'
                }).then((res) => {
                    $(".page-loader").fadeOut();
                    let fileName = '虚战力表.xlsx'
                    let blob = new Blob([res], { type: 'application/x-download' })
                    if (window.navigator.msSaveOrOpenBlob) {
                        navigator.msSaveBlob(blob, fileName);
                    } else {
                        var link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = fileName;
                        link.click();
                        window.URL.revokeObjectURL(link.href);
                    }
                })
            }

            

        }
    }
}
</script>
<style>



</style>
<style scoped>
.btn-demo > .btn,
.btn-demo > .btn-group {
    margin: 0 5px 10px 0;
}

</style>