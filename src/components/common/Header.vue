<template>
    <div class="header">
        <div class="header-left">
            <img class="companyLogo" src="../../assets/basePerson/companyLogo.png">
            <span class="top-title">国投资产管理系统</span></div>
        <div class="header-right">
            <img class="companyLogo" src="../../assets/basePerson/companyLogo.png">
            <span class="top-title">退出</span></div>
    </div>

    </div>
</template>
<script>

    export default {
        data() {
            return {
            }
        },
        computed: {},
        methods: {},
        mounted() {

        }
    }
</script>
<style scoped>
    .header {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 96px;
        font-size: 22px;
        color: #fff;
    }

    .header-left {
        float: left;
    }

    .companyLogo {
        float: left;
        padding-top: 21px;
        padding-bottom: 29px;
    }

    .top-title {
        font-family: '微软雅黑';
        font-size: 22px;
        color: #ffffff;
        float: left;
        margin-left: 26px;
        margin-top: 25px;
        text-align: left;
        /*      line-height: 15px;*/
        height: 25px;
        line-height: 25px;
        overflow: hidden;
    }
    .header-right {
        float: right;
        padding-right: 50px;
    }

</style>
