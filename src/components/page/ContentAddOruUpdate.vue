<template>
    <div class="content">
        <div class="contentHeader">wo shi contentHeader</div>
        <div class="cls_form">
            <div class="cls_form1_outer">
                <div class="cls_form1_title1">
                    <span>添加用户</span>
                </div>
                <div class="cls_form1_title2">
                    <span>用户信息</span>
                </div>
                <div class="cls_form1_inner">
                    <div class="cls_form1_inner_left">
                        <el-form :model="form1" :rules="form1Rules" ref="form1">
                            <el-form-item label="姓氏:" prop="">
                                <el-input model="form1.firstName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="名字:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="出生年月日:">
                                <el-input model="form1.nian" class="handle-input2 mr10"></el-input>
                                年
                                <el-input model="form1.yue" class="handle-input2 mr10"></el-input>
                                月
                                <el-input model="form1.ri" class="handle-input2 mr10"></el-input>
                                日
                            </el-form-item>
                            <el-form-item label="身份证号码:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="籍贯:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="用户名:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="电话:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="微信:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="角色:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="职位:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="分组:" prop="">
                                <el-input model="form1.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>


                        </el-form>
                    </div>
                    <div class="cls_form1_inner_right">

                    </div>
                </div>
            </div>
            <div class="cls_form2_outer">
                <div class="cls_form2_title1">
                    <span>新建关联用户</span>
                </div>
                <div class="cls_form2_title2">
                    <span>用户信息</span>
                </div>
                <div class="cls_form2_inner">
                    <div class="cls_form2_inner_left">
                        <el-form :model="form2" rules="form2Rules" ref="form2">
                            <el-form-item label="姓氏:" prop="">
                                <el-input model="form2.firstName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="名字:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="出生年月日:">
                                <el-input model="form1.nian" class="handle-input2 mr10"></el-input>
                                年
                                <el-input model="form1.yue" class="handle-input2 mr10"></el-input>
                                月
                                <el-input model="form1.ri" class="handle-input2 mr10"></el-input>
                                日
                            </el-form-item>
                            <el-form-item label="身份证号码:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="籍贯:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="用户名:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="电话:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="微信:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="角色:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="职位:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>
                            <el-form-item label="分组:" prop="">
                                <el-input model="form2.lastName" class="handle-input1 mr10"></el-input>
                            </el-form-item>

                        </el-form>
                    </div>
                    <div class="cls_form2_inner_right"></div>
                </div>
                <div class="cls_form2_outer_add">
                    <el-button><i class="el-icon-lx-add"></i>添加关联</el-button>
                </div>
            </div>

        </div>
        <div class="cls_button">
            <el-button_group>
                <el-button>确定</el-button>
                <el-button>保存草稿</el-button>
                <el-button>取消</el-button>
            </el-button_group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentAddOruUpdate",
        data() {
            return {
                form1: {
                    title: '添加用户'
                },
                form1Rules: {},
                form2: {
                    title: '新建关联用户'
                },
                form2Rules: {},
            }
        }
    }
</script>

<style scoped>
    .content {
        width: 100%;
        font-size: 14px;
    }

    .contentHeader {
        height: 50px;
        width: 100%;
        background-color: red;
    }

    .cls_form {
        margin: 5px 5px 5px 5px;
    }

    .cls_form1_outer {
        width: 50%;
        height: auto;
        display: block;
        float: left;
    }

    .cls_form1_title1 {]
        height: 50px;
        line-height: 32px;
    }

    .cls_form1_title2 {

    }

    .cls_form1_inner {

    }

    .cls_form2_inner_left {

    }

    .cls_form2_inner_right {

    }

    .handle-select {
        width: 120px;
    }

    .handle-input1 {
        width: 200px;
        display: inline-block;
        background-color: transparent;
        border-bottom: #000000 1px solid;
    }

    .handle-input2 {
        width: 100px;
        display: inline-block;
        background-color: transparent;
        border-bottom: #000000 1px solid;
    }


    .mr10 {
        margin-right: 10px;
    }

    .cls_form2_outer {
        width: 50%;
        height: auto;
        display: block;
        float: left;
    }

    .cls_form2_title1 {
        height: 50px;
        line-height: 32px;
    }

    .cls_form2_title2 {

    }

    .cls_form2_inner {

    }

    .cls_form2_inner_left {

    }

    .cls_form2_inner_right {

    }

    .cls_form2_outer_add {

    }

    .cls_button {

    }
</style>
