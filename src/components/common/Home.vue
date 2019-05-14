<template>
    <div class="wrapper">
        <v-head></v-head>
        <slide-out :visible.sync="manageListBoxVisible" :dock="position" size="268px"
                   style="left: 60px;top: 96px;">
            <div class="sidebar">
                <div style="margin-top: 20px;margin-bottom: 20px"><span>管理</span></div>
                <div style="margin-top: 20px;margin-bottom: 20px"><span>我的管理项目</span></div>
                <div style="margin-top: 20px;margin-bottom: 20px;margin-left: 10px;height:auto ">
                    <el-menu class="sidebar-el-menu" :default-active="onRoutes"
                             text-color="#243992" unique-opened router>
                        <template v-for="item in items">
                            <template>
                                <el-menu-item :index="item.index" :key="item.index" @click="closeManageListBox">
                                    <i :class="item.icon" ></i><span slot="title">{{ item.title }}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </div>
                <div style="margin-left:30px;margin-top: 50px">
                    <button style="border: white 1px ; width:148px;height: 32px;margin-bottom: 516px "><i
                            class="el-icon-lx-add"></i>创建项目
                    </button>
                </div>
            </div>
        </slide-out>
        <div class="frame-nav g-sidebar" id="left-tree" style="float:left;top:96px">
            <div class="tree-wrapper" id="tree-wrapper">
                <div class="left-tree-brick">
                    <a class="brick-wrap has-reports" id="top_nav_report">
                        <i class="font-new-leftnav el-icon-lx-calendar" align="center"></i>
                        <div class="left-tree-brick-text" align="center">报表</div>
                    </a>
                </div>
                <!--             折叠按钮 -->
                <div class="left-tree-brick collapse-btn" id="manage_btn" @click="showManageListBox('left')" v-lang>

                    <a class="brick-wrap has-manages " id="top_nav_manage">
                        <i class="font-new-leftnav el-icon-menu" align="center"></i>
                        <div class="left-tree-brick-text" align="center">管理</div>
                    </a>
                </div>
                <div class="left-tree-brick">
                    <a class="brick-wrap has-sets" id="top_nav_set">
                        <i class="font-new-leftnav el-icon-setting" align="center"></i>
                        <div class="left-tree-brick-text" align="center">设置</div>
                    </a>
                </div>
                <div class="left-tree-brick me">
                    <a class="brick-wrap has-mes" id="top_nav_me">
                        <i class="font-new-leftnav el-icon-people" align="center"></i>
                        <div class="left-tree-brick-text" align="center">我</div>
                    </a>
                </div>
            </div>
        </div>
        <div class="content-box" id="contentBox" ref="contentBox">
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';

    export default {
        components: {
            vHead,
        },
        data() {
            return {

                status: 0,
                resizeValue: 0,
                position: null,
                manageListBoxVisible: false,
                manageListHide: true,
                manageListShow: false,
                items: [

                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'content',
                        title: '用户管理'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '设备管理'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '角色管理'
                    },

                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '人员管理'
                    },

                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '组织管理'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '服务管理'
                    },
                ],
            }
        },

        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        }
        ,
        created() {
        },
        methods: {
            showManageListBox(position) {
                this.position = position
                this.manageListBoxVisible = true
            },
            closeManageListBox() {
                this.position = null
                this.manageListBoxVisible = false
            },
            onOpen() {
                this.status = 1
            },
            onClose(e) {
                // prevent close and wait
                e.wait = true
                this.status = 0
                // close after 3 seconds
                setTimeout(() => {
                    // assign true to close, do nothing or assign false to cancel close.
                    e.close = true
                }, 3000)
            },
            onResize(e) {
                this.resizeValue = e.size
            },
            onClosed() {
                this.$emit('show-tip', 'Aha, I am really closed')
            }
        }
    }
</script>
<style scoped>
    .sidebar {
        background-color: #243992;
        font-color: #FFFAF0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 200px;
    }
    .sidebar > ul {
        height: 100%;
    }
    .frame-nav {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 60px;
        -webkit-transition: all .2s linear;
        -moz-transition: all .2s linear;
        transition: all .2s linear
    }

    .g-sidebar {
        display: block;
        float: left;
        left: 0;
        top: 70px;
        padding-bottom: 1px;
        /*    overflow-y: scroll;*/

    }

    .left-tree-brick {
        display: block;
        padding: 0;
        margin-top: 50px;
        margin-bottom: 50px;

    }

    .left-tree-brick .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }

    .left-tree-brick.me {
        padding: 0;
        margin-top: 500px;
        margin-bottom: 50px;
        text-align: center
    }

    .g-sidebar a {
        color: #94989e;
        text-decoration: none;
        position: relative
    }

    .g-sidebar a:hover {
        color: #fff
    }

    .g-sidebar a:active {
        background-color: transparent
    }

    .g-sidebar #tree-wrapper {
        background: #2a68c9;
        border-top: 0;
        width: 100%;
        bottom: 0;
        top: 0;
        position: absolute;

    }

    .g-sidebar #tree-wrapper .left-tree-bottom.current {
        background-color: #204e97
    }

    .g-sidebar #tree-wrapper .left-tree-bottom.left-tree-bottom-fixed {
        position: absolute;
        bottom: 0
    }

    .g-sidebar #tree-wrapper .left-tree-bottom.left-tree-bottom-cloud-no-fixed {
        position: absolute;
        top: 448px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom.left-tree-bottom-no-fixed {
        position: absolute;
        top: 500px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom #new_nav_avatar_div {
        padding-top: 9px;
        padding-bottom: 32px;
        margin: 0;
        height: 34px;
        width: 60px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom #new_nav_avatar_div .dropdown-toggle {
        text-align: center;
        margin: 0
    }

    .g-sidebar #tree-wrapper .left-tree-bottom #new_nav_avatar_div .dropdown-toggle .avatar-container {
        width: 34px;
        height: 34px;
        margin-right: 0
    }

    .g-sidebar #tree-wrapper .left-tree-bottom #new_nav_avatar_div .dropdown-toggle .avatar-container img {
        width: 30px;
        height: 30px;
        margin: 0;
        border: 2px solid rgba(255, 255, 255, 0.3)
    }

    .g-sidebar #tree-wrapper .left-tree-bottom #new_nav_avatar_div .avatar-nav .avatar-text-default {
        width: 34px;
        height: 34px;
        font-size: 16px;
        line-height: 32px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom #new_nav_avatar_div .avatar-nav .avatar-text-default .avatar-default-name {
        width: 34px;
        height: 34px;
        display: inline-block;
        vertical-align: -1px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips {
        position: absolute;
        bottom: 0;
        left: 60px;
        padding: 10px 14px 10px 16px;
        z-index: 2;
        border: 1px solid #cbcdd3;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        background-color: #fff
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips .arrow-left, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips .arrow-left, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips .arrow-left {
        position: absolute;
        left: -12px;
        bottom: 27px;
        border-top: 12px dashed transparent;
        border-bottom: 12px dashed transparent;
        border-right: 12px solid #ffffe9
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips .tip-content, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips .tip-content, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips .tip-content {
        font-size: 12px;
        color: #666;
        line-height: 21px;
        margin-left: 10px;
        margin-top: 10px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips .tips-btn, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips .tips-btn, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips .tips-btn {
        display: inline-block;
        color: #508ff3;
        font-size: 14px;
        border: 1px solid #4f8ef5;
        cursor: pointer;
        height: 31px;
        line-height: 31px;
        margin-left: 10px;
        width: 160px;
        text-align: center;
        margin-top: 10px;
        text-decoration: none;
        outline: 0;
        border-radius: 2px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips .tips-btn:hover, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips .tips-btn:hover, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips .tips-btn:hover {
        background-color: #4f8ef5;
        color: #fff
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips i, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips i, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips i {
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 10px;
        color: #ccc;
        margin-right: 10px;
        cursor: pointer
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips i:hover, .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips i:hover, .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips i:hover {
        color: #ff4500
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-phone-tips {
        width: 195px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .bind-password-tips {
        width: 240px
    }

    .g-sidebar #tree-wrapper .left-tree-bottom .company-management-tips {
        left: 55px;
        text-align: left;
        width: 225px;
        padding: 5px 25px 5px 5px;
        bottom: 105px
    }

    .g-sidebar .line {
        color: #94989e;
        border-top: 1px solid #303236;
        font-size: 14px;
        font-weight: 400;
        height: 54px;
        line-height: 54px;
        padding: 5px 5px 5px 20px
    }

    .g-sidebar .line.last {
        border-bottom: 1px solid #303236
    }

    .g-sidebar .line > a.active {
        color: #c9cbcf
    }

    .g-sidebar .current .brick-wrap .font-new-leftnav {
        color: #fff;
    }

    .g-sidebar .ico-accordion {
        margin-top: 2px;
        margin-right: -5px
    }

    .ie .g-sidebar .ico-accordion {
        margin-top: 4px;
        margin-right: 4px
    }

    .g-sidebar .ico-accordion.expanded {
        margin-top: 0
    }

    .ie .g-sidebar .ico-accordion.expanded {
        margin-top: 4px
    }

    .g-sidebar .ico-accordion.expanded b {
        border-top-color: #94989e
    }

    .g-sidebar .ico-accordion.collapsed b {
        border-left-color: #94989e
    }

    .g-sidebar .projects.list-content li {
        padding: 0 14px 0 20px;
        white-space: nowrap
    }


    .g-sidebar .project-name {
        color: #c9cbcf
    }

    .g-sidebar .projects a:hover {
        background: #303236
    }

    .g-sidebar .projects a:hover .project-name {
        color: #c9cbcf
    }

    .g-sidebar .projects a.current {
        background: #303236
    }

    .g-sidebar .projects a.current .project-name {
        color: #c9cbcf
    }

    .g-sidebar .list-content a {
        color: #c9cbcf
    }

    .g-sidebar .noproject {
        padding-left: 33px;
        color: #699ff6;
        padding-bottom: 8px
    }

    .g-sidebar .tree-content a {
        padding: 4px;
        color: #94989e
    }

    .g-sidebar .projects-view-type {
        background-color: #2d2e2f;
        float: right;
        line-height: 14px;
        font-size: 12px;
        margin-top: 16px;
        margin-right: 10px;
        border-radius: 3px;
        border: 1px solid #1d1d1e;
        cursor: pointer
    }

    .g-sidebar .projects-view-type span {
        display: inline-block;
        padding: 5px 5px 3px;
        border-radius: 2px
    }

    .g-sidebar .projects-view-type i {
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        transition: all .2s ease
    }

    .g-sidebar .projects-view-type:hover i {
        opacity: 1
    }

    .g-sidebar .status-tree .projects-view-tree {
        background-color: #5186bd
    }

    .g-sidebar .status-list .projects-view-list {
        background-color: #3967b2
    }

    .g-sidebar #myprojects-wrap.status-list #myprojects-tree {
        display: none
    }

    .g-sidebar #myprojects-wrap.status-tree #myprojects-list {
        display: none
    }

    .g-sidebar .myprojects-content {
        overflow-y: auto;
        overflow-x: hidden;
        margin-right: 3px
    }

    .g-sidebar .myprojects-content .tab-current li a {
        -webkit-animation-name: fadeInRight;
        -moz-animation-name: fadeInRight;
        -webkit-animation-duration: .4s;
        -webkit-animation-delay: 0s;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-animation-fill-mode: both;
        -moz-animation-duration: .4s;
        -moz-animation-delay: 0s;
        -moz-animation-timing-function: ease-in-out;
        -moz-animation-fill-mode: both
    }

    .g-sidebar .myprojects-content .projects.tab-current li a {
        -webkit-animation-name: fadeInLeft;
        -moz-animation-name: fadeInLeft
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(2) a {
        -webkit-animation-delay: .02s;
        -moz-animation-delay: .02s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(3) a {
        -webkit-animation-delay: .04s;
        -moz-animation-delay: .04s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(4) a {
        -webkit-animation-delay: .06s;
        -moz-animation-delay: .06s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(5) a {
        -webkit-animation-delay: .08s;
        -moz-animation-delay: .08s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(6) a {
        -webkit-animation-delay: .1s;
        -moz-animation-delay: .1s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(7) a {
        -webkit-animation-delay: .12s;
        -moz-animation-delay: .12s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(8) a {
        -webkit-animation-delay: .14s;
        -moz-animation-delay: .14s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(9) a {
        -webkit-animation-delay: .16s;
        -moz-animation-delay: .16s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(10) a {
        -webkit-animation-delay: .16s;
        -moz-animation-delay: .16s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(11) a {
        -webkit-animation-delay: .18s;
        -moz-animation-delay: .18s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(12) a {
        -webkit-animation-delay: .2s;
        -moz-animation-delay: .2s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(13) a {
        -webkit-animation-delay: .22s;
        -moz-animation-delay: .22s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(14) a {
        -webkit-animation-delay: .24s;
        -moz-animation-delay: .24s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(15) a {
        -webkit-animation-delay: .26s;
        -moz-animation-delay: .26s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(16) a {
        -webkit-animation-delay: .28s;
        -moz-animation-delay: .28s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(17) a {
        -webkit-animation-delay: .3s;
        -moz-animation-delay: .3s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(18) a {
        -webkit-animation-delay: .32s;
        -moz-animation-delay: .32s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(19) a {
        -webkit-animation-delay: .34s;
        -moz-animation-delay: .34s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(20) a {
        -webkit-animation-delay: .36s;
        -moz-animation-delay: .36s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(21) a {
        -webkit-animation-delay: .38s;
        -moz-animation-delay: .38s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(22) a {
        -webkit-animation-delay: .4s;
        -moz-animation-delay: .4s
    }

    .g-sidebar .myprojects-content .tab-current li:nth-child(23) a {
        -webkit-animation-delay: .42s;
        -moz-animation-delay: .42s
    }

    .g-sidebar .loading-wrapper {
        text-align: center;
        padding: 40px 0
    }

    .g-sidebar .show-closed, .g-sidebar .show-more {
        display: block;
        padding: 8px 5px 8px 35px;
        height: 26px;
        line-height: 26px;
        color: #94989e
    }

    .g-sidebar .show-closed i, .g-sidebar .show-more i {
        margin: 0 10px 0 3px;
        vertical-align: middle
    }

    .g-sidebar .show-closed:hover, .g-sidebar .show-more:hover {
        color: #fff
    }

    .g-sidebar .view-hidemore #myprojects-list {
        overflow: hidden
    }

    .g-sidebar .show-more {
        visibility: hidden;
        display: none;
        z-index: 1;
        position: relative
    }

    .g-sidebar .status-list.view-hidemore .show-more {
        display: block;
        visibility: visible;
        font-size: 12px
    }

    .g-sidebar .status-list.view-hidemore .tab-current .show-more {
        -webkit-animation-name: fadeIn;
        -moz-animation-name: fadeIn;
        -webkit-animation-duration: 1s;
        -webkit-animation-delay: 0s;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-animation-fill-mode: both;
        -moz-animation-duration: 1s;
        -moz-animation-delay: 0s;
        -moz-animation-timing-function: ease-in-out;
        -moz-animation-fill-mode: both
    }

    #left-projects-tab li {
        -webkit-border-radius: 1px;
        border-radius: 1px;
        float: left;
        margin: 0
    }


    .g-sidebar .myworktable {
        border-top: 0;
        height: 53px;
        line-height: 52px
    }

    .g-sidebar .myworktable a {
        display: inline-block;
        height: 49px;
        line-height: 48px;
        width: 155px
    }

    .g-sidebar .all-projects i, .g-sidebar .add-projects i, .g-sidebar .tcube-link i {
        margin-top: 2px;
        margin-right: 10px
    }

    .g-sidebar .tcube-link {
        display: inline-block;
        height: 54px;
        line-height: 54px;
        width: 180px
    }

    .g-sidebar h2.index a {
        margin-left: 10px
    }
</style>
