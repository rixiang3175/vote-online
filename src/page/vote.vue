<template>
  <div class="vote_wrap">
    <div class="head" v-if="voteList && voteList.length>0">
      <h1 v-if="tag != 'result'" class="title">2019年度“明星员工”评选活动</h1>
      <h1 v-else class="title">2019年度“明星员工”评选活动结果</h1>
    </div>
    <div class="content">
      <div
        v-if="!isShowEmpty"
        class="info_box"
        v-loading="loading"
        element-loading-text="数据加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(64, 104, 235, 0.8)"
      >
        <vote-ing :voteList="voteList" :tag="tag"></vote-ing>
        <div v-if="tag == 'voting'">
          <div v-if="disa" class="button" @click="button()">投票</div>
          <div v-else class="disabled_button">投票</div>
        </div>
        <div v-else-if="tag == 'voted'">
          <div class="voted_button">已投票</div>
        </div>
        <div v-else></div>
      </div>
      <div class="empty" v-else>暂无数据</div>
    </div>
  </div>
</template>

<script>
import { checkCookie } from "../utils/getCookie";
export default {
  components: {
    "vote-ing": () => import("./voteIng.vue")
  },
  data() {
    return {
      disa: false,
      selectList: [],
      max: null,
      index1: null,
      tag: "",
      loading: true,
      voteList: [],
      list: [],
      flag: true,
      isShowEmpty: false
    };
  },
  watch: {
    selectList(val, oldval) {
      if (val.length == 9) {
        this.disa = true;
      }
    },
    voteList() {}
  },
  methods: {
    getVoteData() {
      this.$api
        .requestVoteData("/api/voteinfos", {})
        .then(resp => {
          this.isShowEmpty = false;
          this.loading = false;
          let {
            data: { rst, isVoted }
          } = resp;
          if (isVoted == "未投票" || isVoted == "未登录") {
            this.tag = "voting";
          } else if (isVoted == "已投票") {
            this.tag = "voted";
          } else if (isVoted == "已过期") {
            this.tag = "result";
          }
          this.voteList = rst;
        })
        .catch(e => {
          this.$message.error("数据加载失败");
          this.loading = false;
          this.isShowEmpty = true;
        });
    },
    button() {
      /**点击提交判断用户是否登录，没有登录提示用户登录，展示后台返回未选信息，
       * 点击提交判断用户是否登录，没有登录提示用户登录，登录之后如果已选后台返回已经选择的信息
       *  */
      // 先去判断是否登录
      if (this.flag) {
        // let username = checkCookie();
        // console.log(username, "pp");
        // if (username == "") {
        //   this.$message.warning("请先登录再进行投票");
        //   return;
        // } else {
        //   this.loading = true;
        //   let list = [];
        //   //使用数组方法
        //   this.selectList.map(item => {
        //     if (item._id) {
        //       list.push(item._id);
        //     }
        //   });
        //   this.$axios
        //     .post("/api/voteinfos", {
        //       _id: list
        //     })
        //     .then(resp => {
        //       this.$message.success("提交成功,2秒后返回主页");
        //       setTimeout(() => {
        //         this.$router.push({ path: "/index" });
        //         this.getVoteData();
        //         this.loading = false;
        //       }, 2000);
        //       // 重新跳到index页面
        //     })
        //     .catch(e => {
        //       console.log(e);
        //       this.$message.error("提交失败");
        //     });
        // }
        this.$axios.get("/api/user").then(res => {
          //  如果没有登录，提示去登录
          let {
            data: {
              rst: { name, auth }
            }
          } = res;
          if (name == "") {
            this.$message.warning("请先登录再投票，2秒后跳转到登录页");
            setTimeout(() => {
              this.loading = true;
              window.location.href = "/login";
              this.loading = false;
            }, 2000);
            return;
          } else {
            //   name不为空并且有权限，提交
            if (auth == true) {
              this.loading = true;
              let list = [];
              //使用数组方法
              this.selectList.map(item => {
                if (item._id) {
                  list.push(item._id);
                }
              });
              this.$axios
                .post("/api/voteinfos", {
                  _id: list
                })
                .then(resp => {
                  this.$message.success("提交成功,2秒后返回主页");
                  setTimeout(() => {
                    this.$router.push({ path: "/index" });
                    this.getVoteData();
                    this.loading = false;
                  }, 2000);
                  // 重新跳到index页面
                })
                .catch(e => {
                  console.log(e);
                  this.$message.error("提交失败");
                });
            } else {
              // 用户名不为空，但是没有权限
              this.$message.error("用户无权限");
            }
          }
        });
      } else {
        return;
      }
      this.flag = false;
    }
  },
  created() {
    this.getVoteData();
  },
  mounted() {
    //   拿到子组件传过来的值
    this.$root.Bus.$on("select", val => {
      this.selectList = this.selectList.filter(
        item => item.comment != val.comment
      );
      this.selectList.push(val);
    });
  }
};
</script>

<style lang="less">
.vote_wrap {
  padding: 30px 40px;
  text-align: left;
  min-height: 450px;
  .title {
    font-size: 22px;
    text-align: center;
    margin-bottom: 22px;
    color: rgb(241, 240, 240);
    // color: #ee8b0a;
    font-weight: 500;
  }
  .content {
    // box-sizing: border-box;
    // padding: 5px;
    // border-radius: 30%;
    // border: 10px solid #ddd;
    // border-image: -webkit-linear-gradient(#b0c9e6, #a1bfe2) 30 30;
    // border-image: -moz-linear-gradient(#b0c9e6, #a1bfe2) 30 30;
    // border-image: linear-gradient(#b0c9e6, #a1bfe2) 30 30;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 8px;
    // background-image: -webkit-linear-gradient(
    //   right,
    //   red 0%,
    //   blue 33%,
    //   yellow 66%,
    //   green 100%
    // );
    // background-image: -moz-linear-gradient(
    //   right,
    //   red 0%,
    //   blue 33%,
    //   yellow 66%,
    //   green 100%
    // );
    // background-image: linear-gradient(
    //   right,
    //   red 0%,
    //   blue 33%,
    //   yellow 66%,
    //   green 100%
    // );
    .info_box {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background-color: #2124b4;
      padding: 20px;
      box-sizing: border-box;
      //   border: 4px solid rgb(200, 228, 191);
      min-height: 400px;
      padding-top: 0;
      .button {
        height: 50px;
        line-height: 50px;
        width: 200px;
        margin: 20px auto;
        border-radius: 10px;
        background-color: rgb(238, 149, 34);
        text-align: center;
        color: #fff;
        margin-top: 40px;
        cursor: pointer;
      }
      .voted_button {
        height: 50px;
        line-height: 50px;
        width: 200px;
        margin: 20px auto;
        border-radius: 10px;
        background-color: rgb(238, 149, 34);
        opacity: 0.6;
        text-align: center;
        color: #fff;
        margin-top: 40px;
        cursor: not-allowed;
      }
      .disabled_button {
        height: 50px;
        line-height: 50px;
        width: 200px;
        margin: 20px auto;
        border-radius: 10px;
        text-align: center;
        margin-top: 40px;
        background-color: rgba(255, 255, 255, 0.1);
        // background-color: #afd4e6;
        color: rgb(189, 186, 186);
        cursor: not-allowed;
      }
    }
  }
  .empty {
    width: 120px;
    margin: 120px auto;
    text-align: center;
    color: rgb(189, 186, 186);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px 0;
    border-radius: 6px;
  }
}
</style>
