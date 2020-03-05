<template>
    <section class="content" style="color: #000;">
        <div class="content__inner">
            <header class="content__title content__title--calendar">
                <h1><span id="calendar-title">Calendar</span> <small>FullCalendar is a highly customizable open source javaScript event calendar.</small></h1>

                <div class="actions actions--calendar">
                    <a href="#" data-toggle="tooltip" title="Previous" class="actions__item" data-calendar-view="prev"><i class="zwicon-arrow-square-left"></i></a>
                    <a href="#" data-toggle="tooltip" title="Today" class="actions__item" data-calendar-view="today"><i class="zwicon-arrow-square-down"></i></a>
                    <a href="#" data-toggle="tooltip" title="Next" class="actions__item" data-calendar-view="next"><i class="zwicon-arrow-square-right"></i></a>
                </div>
            </header>

            <div class="card">
                <div class="card-body">
                    <!-- <div ref="excelView" id="excelView" :style="spreadStyle"></div> -->
                    <!--工具栏-->
                    <!-- <div id="x-spreadsheet-demo"></div> -->
                    <!--工具栏-->
                    <div class="toolbars" style="    background-color: #fff;">
                        <div class="group font">
                            <div class="body">
                                <div class="sub sub-top">
                                    <select id="fontfamily" class="fontfamily">
                                        <option value="微软雅黑" selected = "selected">微软雅黑</option>
                                        <option value="SimHei">黑体</option>
                                        <option value="SimSun">宋体</option>
                                        <option value="NSimSun">新宋体</option>
                                        <option value="FangSong">仿宋</option>
                                        <option value="KaiTi">楷体</option>
                                    </select>
                                    <select id="fontsize" class="fontsize">
                                        <option value="12px"  selected = "selected">12</option>
                                        <option value="14px">14</option>
                                        <option value="15px">15</option>
                                        <option value="16px">16</option>
                                        <option value="18px">18</option>
                                        <option value="20px">20</option>
                                        <option value="22px">22</option>
                                        <option value="24px">24</option>
                                        <option value="26px">26</option>
                                        <option value="28px">28</option>
                                        <option value="36px">36</option>
                                        <option value="48px">48</option>
                                        <option value="72px">72</option>
                                    </select>
                                </div>
                                <div class="sub sub-bottom">
                                    <button type="button" class="tag-btn btn-bold">
                                        <i class="tag bold"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-italic">
                                        <i class="tag italic"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-underline">
                                        <i class="tag underline"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-strike">
                                        <i class="tag strike"></i>
                                    </button>
                                    <button type="button" class="tag-btn" id="bgColor">
                                        <i class="tag bgColor"></i>
                                    </button>
                                    <input type="color" id="bgColorSelect" style="display: none">
                                    <button type="button" class="tag-btn" id="fontColor">
                                        <i class="tag fontColor"></i>
                                    </button>
                                    <input type="color" id="fontColorSelect" style="display: none">
                                </div>
                            </div>
                            <div class="foot">字体</div>
                        </div>
                        <div class="group alignment">
                            <div class="body">
                                <div class="sub sub-left">
                                    <button type="button" class="tag-btn btn-htLeft btn-ah">
                                        <i class="tag leftAlign"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-htCenter btn-ah">
                                        <i class="tag levelAlign"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-htRight btn-ah">
                                        <i class="tag rightAlign"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-htTop btn-av">
                                        <i class="tag topAlign"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-htMiddle btn-av">
                                        <i class="tag velAlign"></i>
                                    </button>
                                    <button type="button" class="tag-btn btn-htBottom btn-av">
                                        <i class="tag bottomAlign"></i>
                                    </button>
                                </div>
                                <div class="sub sub-right">
                                    <button type="button" class="tag-btn merge-btn">
                                        <i class="tag merge"></i> <span>合并单元格</span>
                                    </button>
                                    <button type="button" class="tag-btn split-btn">
                                        <i class="tag split"></i> <span>拆分单元格</span>
                                    </button>
                                </div>

                            </div>
                            <div class="foot">对齐方式</div>
                            <a class="corner_mark"></a>
                        </div>
                        <div class="group cells"  style="padding: 0px 10px;">
                            <div class="body">
                                <div class="sub sub-right">
                                    <ul class="border-btn select-ctrl-border">
                                        <li class="borderTop"><i class="tag btn-borderTop"></i></li>
                                        <li class="borderRight"><i class="tag btn-borderRight"></i></li>
                                        <li class="borderBottom"><i class="tag btn-borderBottom"></i></li>
                                        <li class="borderLeft"><i class="tag btn-borderLeft"></i></li>
                                        <li class="borderAll"><i class="tag btn-borderAll"></i></li>
                                        <li class="whiteSpace"><i class="tag wrap"></i></li>
                                        <li class="borderColor"><i class="tag borderColor"></i></li>
                                        <input type="color" id="borderColor" style="display: none"/>
                                        <li class="borderStyle" style="position: relative">
                                            <i class="tag borderStyleIcon"></i>
                                            <div class="selectBorderStyle">
                                                <div class="borderSolid borderStyleOption">实线</div>
                                                <div class="borderDashed borderStyleOption">虚线</div>
                                                <div class="borderDouble borderStyleOption">双线</div>
                                                <div class="borderNone borderStyleOption">无线</div>
                                            </div>
                                            <!--用来记录选择的样式-->
                                            <select class="borderStyleOption" style="display: none">
                                                <option value="solid" selected = "selected">实线</option>
                                                <option value="dashed">虚线</option>
                                                <option value="double">双线</option>
                                                <option value="none">无线</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="foot">单元格</div>
                            <a class="corner_mark"></a>
                        </div>
                        <div class="group edit">
                            <div class="body">
                                <div class="sub sub-left" style="width: 100px;">
                                    <div class="input-group">
                                        <label>列宽</label> <input type="number" id="cell-width" class="cell-width">
                                    </div>
                                    <div class="input-group">
                                        <label>行高</label> <input type="number" id="cell-height" class="cell-height">
                                    </div>
                                </div>
                            </div>
                            <div class="foot">编辑</div>
                        </div>
                    </div>
                    <!--输入框-->
                    <div style="width: 100%;display: flex;">
                        <input type="text" id="selectTdValue" style="width: 100%;outline:none;">
                    </div>
                    <div class="excel" onselectstart="return false" style="heigth:500px;background: #fff;">
                    </div>

                    <!--设计后获取表格的代码-->
                    <textarea id="getHtml"></textarea>
                    <input type="button" value="生成代码" onClick="getHtml()">

                    <!--再进入编辑状态，将代码还原-->
                    <input type="button" value="编辑已生成的表格" onClick="setHtml()">
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
            excelIo:{},
            spread:{},
            spreadStyle: {
                width: '100%',
                height: '430px',
                border: '1px solid gray'
            }
        }
    },
    mounted(){
        //this.spread = new GC.Spread.Sheets.Workbook(document.getElementById("excelView"), {sheetCount: 1});
        //this.excelIo= new GC.Spread.Excel.IO();
        //this.load()
        this.excel();
    },
    methods: {
        excel(){
            $(".excel").Excel(
                {setting: {row: 50, col: 35}}
            );
        },
        load(){
            x.spreadsheet('#x-spreadsheet-demo')
            .loadData({
            freeze: 'C3',
            styles: [
                {
                bgcolor: '#f4f5f8',
                textwrap: true,
                color: '#900b09',
                border: {
                    top: ['thin', '#0366d6'],
                    bottom: ['thin', '#0366d6'],
                    right: ['thin', '#0366d6'],
                    left: ['thin', '#0366d6'],
                },
                },
            ],
            merges: [
                'C3:D4',
            ],
            rows: {
                1: {
                cells: {
                    0: { text: 'testingtesttestetst' },
                    2: { text: 'testing' },
                },
                },
                2: {
                cells: {
                    0: { text: 'render', style: 0 },
                    1: { text: 'Hello' },
                    2: { text: 'haha', merge: [1, 1] },
                }
                },
                8: {
                cells: {
                    8: { text: 'border test', style: 0 },
                }
                }
            },
            }).change((cdata) => console.log(cdata));
        }
    }
}
</script>
<style>

</style>
<style scoped>

</style>