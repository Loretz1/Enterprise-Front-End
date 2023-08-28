<!-- 大屏界面 -->
<template>
    <div class="wholeView">
        <div style="display: flex;height: 100%;width: 100%;">
            <div class="left">
                <div class="left-fir box-border-css"></div>
                <div class="left-sec box-border-css"></div>
            </div>
            <div class="middle">
                <div class="middle-main box-border-css">
                    <!-- <div class="map-title">企业数据区域概览</div> -->
                    <el-button-group class="map-switcher">
                        <el-button type="primary" >总利润</el-button>
                        <el-button type="primary" >总收入</el-button>
                        <el-button type="primary" >企业数量</el-button>
                    </el-button-group>
                    <!-- <div class="map">地图</div>
                    <div class="ranking">排行</div> -->
                </div>
            </div>
            <div class="right">
                <div class="right-fir box-border-css"></div>
                <div class="right-sec box-border-css"></div>
                <div class="right-trd box-border-css"></div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.wholeView{
    min-height: 680px;
    min-width: 1450px;
    height: 100%;
    width: 100%;

    /* background-color: rgb(231,231,231);
    border-color: rgb(225,225,225);
    border-radius: 10px; */
    background-color: red;
}
.box-border-css{
    border:0.8px solid rgb(218, 213, 213);
    box-shadow: 2px 2px 5px rgba(185, 183, 183, 0.716);
    background-color: rgba(255, 255, 255, 0.338);
}
.left{
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around
}
.left .left-fir{
    width: 380px;
    height: 250px;
}
.left .left-sec{
    width: 380px;
    height: 250px;
}
.middle{
    flex-grow: 1.7;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content:center
}
.middle .middle-main{
    width:660px;
    height:660px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.middle .middle-main .map-title{
    position: absolute;
    top:5px;
    left: 0;
    right: 0;
    margin: auto;
    width:150px;
    text-align: center;
}
.middle .middle-main .map-switcher{
    position: absolute;
    top: 5px;
    left:5px;
}
.middle .middle-main .map{
    width:600px;
    height:600px;
    border:1px solid black;
}
.middle .middle-main .ranking{
    height: 200px;
    width: 150px;
    position: absolute;
    bottom: 0px;
    left:0px;
    border-top:1px solid black;
    border-right:1px solid black;
}
.right{
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around
}
.right .right-fir{
    width: 380px;
    height: 180px;
}
.right .right-sec{
    width: 380px;
    height: 180px;
}
.right .right-trd{
    width: 380px;
    height: 180px;
}

</style>
