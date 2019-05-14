<template>
    <div class="content">
        <div class="contentHeader">
            <div class="contentHeader_left">
                <el-button clss="sj_btn" style="float: left;">
                    <i class="el-icon-lx-add"></i>用户管理
                </el-button>
                <el-dropdown style="float: right;margin-right: 20px" @command="handlePlus">
                    <el-button size="small" type="primary" style="height:32px">
                        <i class="el-icon-lx-add"></i>
                    </el-button>
                    <el-dropdown-menu size="small" slot="dropdown">
                        <el-dropdown-item command="import">导入</el-dropdown-item>
                        <el-dropdown-item command="export">导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="contentHeader_right">
                <el-input
                        v-model="select_word"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-search"
                        style="width: 173px">
                </el-input>
                <span style="margin-left: 10px;margin-right: 10px">|</span>
                <el-dropdown @command="aboutMe">
                    <el-button>
                        <i class="el-icon-lx-filter"></i>
                        我的
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu size="small" slot="dropdown">
                        <el-dropdown-item command="import">导入</el-dropdown-item>
                        <el-dropdown-item command="export">导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span style="margin-left: 10px;margin-right: 10px">|</span>
                <el-button><i class="el-icon-lx-filter"></i>过滤</el-button>
                <span style="margin-left: 10px;margin-right: 10px">|</span>
                <el-button><i class="el-icon-lx-question"></i></el-button>
                <span style="margin-left: 10px;margin-right: 10px">|</span>
                <span style="width: 300px">共300个用户</span>
                <span style="margin-left: 10px;margin-right: 10px">|</span>
                <el-button style="padding-right: 10px" @click="showSetDialog">
                    <i class="el-icon-lx-settings"></i>
                </el-button>
            </div>
        </div>
        <div class="contentSearch">
            <el-button style="width: 108px;height:32px;background-color: #5272fe">
                <i class="el-icon-lx-add"></i>添加用户
            </el-button>
            <el-dropdown style="margin-left: 20px" @command="handleMore">
                <el-button style="width: 108px;height:32px;background-color: #b4baf1">
                    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item style="width: 80px;" command="import">导入</el-dropdown-item>
                    <el-dropdown-item style="width: 80px;" command="export">导出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="contentBody">
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">
                    <div class="custom-tree-node">
                        <div class="block">
                            <p>使用 scoped slot</p>
                            <el-tree
                                    :data="treeData"
                                    show-checkbox
                                    node-key="id"
                                    default-expand-all
                                    :expand-on-click-node="false">
                              <span class="custom-tree-node" slot-scope="{ node, data }">
                                <span>{{ node.label }}</span>
                                <span>
                                  <el-button
                                          type="text"
                                          size="mini"
                                          @click="() => append(data)">
                                    Append
                                  </el-button>
                                  <el-button
                                          type="text"
                                          size="mini"
                                          @click="() => remove(node, data)">
                                    Delete
                                  </el-button>
                                </span>
                              </span>
                            </el-tree>
                        </div>
                    </div>
                </div>
            </transition>
            <div class="contentBodyCenter" @click="show=!show">wo shi contentBodyLeft</div>
            <el-table :data="tableData" border class="table" ref="multipleTable"
                      @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="date" label="日期" sortable width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" :formatter="formatter">
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button type="text" icon="el-icon-delete" class="red"
                                   @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- <div class="pagination">
                 <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                 </el-pagination>
             </div>-->
        </div>
        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import id from "element-ui/src/locale/lang/id";

    export default {
        name: 'Content',
        data() {
            const data = [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            return {
                //上边参数
                setDialogShow: false,
                //左边参数
                treeData: JSON.parse(JSON.stringify(data)),
                show: true,
                //表格参数
                url: './vuetable.json',
                treeTableData: [],
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1
            }
        },
        watch: {
            show(val) {
                if (val) {
                    this.$refs.contentBodyTable.style.width = "1300px";
                } else {
                    this.$refs.contentBodyTable.style.width = "1568px";
                }
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData.filter((d) => {
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if (d.name === this.del_list[i].name) {
                            is_del = true;
                            break;
                        }
                    }
                    if (!is_del) {
                        if (d.address.indexOf(this.select_cate) > -1 &&
                            (d.name.indexOf(this.select_word) > -1 ||
                                d.address.indexOf(this.select_word) > -1)
                        ) {
                            return d;
                        }
                    }
                })
            }
        },
        methods: {
            /*内容头部方法开始*/
            //设置
            showSetDialog() {
                this.setDialogShow = true;
            },
            //管理子项显示与隐藏
            showManageItem() {
                this.manageItemShow = !this.manageItemShow;
                /*   if (this.manageItemShow) {
                       this.$refs.manageItemDataBox.style.left = "285px";
                   } else {
                       this.$refs.manageItemDataBox.style.left = "15px";
                   }*/
            },
            //加号实现
            handlePlus(command) {

            },
            aboutMe(command) {

            },
            //更多
            handleMore(command) {
                if (command == 'import') {

                }
                if (command == 'export') {

                }
            },
            /*内容头部方法结束*/
            /*左边部分开始*/
            append(data) {
                const newChild = {id: id++, label: 'testtest', children: []};
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },
            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
            /*左边部分结束*/
            /*右边部分开始*/
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            // 获取 easy-mock 的模拟数据
            getData() {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
                if (process.env.NODE_ENV === 'development') {
                    this.url = '/ms/table/list';
                }
                ;
                this.$axios.post(this.url, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            search() {
                this.is_search = true;
            },
            handleEdit(index, row) {
                /*  this.idx = index;
                  const item = this.tableData[index];
                  this.form = {
                      name: item.name,
                      date: item.date,
                      address: item.address
                  }
                  this.editVisible = true;*/
                this.$router.push({
                    path: `/content/contentAddOruUpdate`,
                    params: {
                        id: row.id
                    }
                })
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
            },
            delAll() {
                const length = this.multipleSelection.length;
                let str = '';
                this.del_list = this.del_list.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error('删除了' + str);
                this.multipleSelection = [];
            },
            // 确定删除
            deleteRow() {
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
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
        /*  background-color: red;*/
        border-bottom: 1px solid;
    }

    .contentHeader_left {
        float: left;
        width: 268px
    }

    .sj_btn {
        height: 32px;
    }

    .contentHeader_right {
        float: right;
        width: 40%
    }

    .contentSearch {
        height: 48px;
        width: 100%;
        background-color: green;
        margin-top: 0;
    }

    .contentBody {
        margin: 5px 5px 5px 5px;
        width: 100%;
        display: flex;
    }

    .contentBodyLeft {
        float: left;
        display: flex;
        width: 268px;
        height: 850px;
    }

    .transition-box {
        margin-bottom: 10px;
        width: 268px;
        height: 850px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }

    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }

    .contentBodyCenter {
        background-color: yellow;
        float: left;
        display: block;
        margin-left: 0px;
        margin-right: 5px;
        width: 10px;
        height: 850px;
    }

    .contentBodyTable {
        float: left;
        display: flex;
        margin-left: 5px;
        margin-right: 5px;
        height: 850px;
        width: 1300px;
    }

    .del-dialog-cnt {
        font-size: 16px;
        text-align: center
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }
</style>
