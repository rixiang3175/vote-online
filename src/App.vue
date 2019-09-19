<template>
  <div id="app">
    <div class="head-wrap">
      <el-container>
        <el-header class="el-head">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="logo-layout">
                  <a class="layout-logo" href="/">
                    <svg class="logo" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(0.5,0,0,0.5,20,30)">
                        <path
                          d="m 0,0 0,-4.426 14.363,0 0,13.28 -8.834,0 0,4.427 8.834,0 0,13.295 -14.363,0 0,-4.43 9.93,0 0,-4.437 -8.852,0 0,-13.283 8.852,0 L 9.93,0 0,0 z m -25.533,11.062 c 0,13.442 10.904,24.356 24.353,24.356 13.446,0 24.352,-10.914 24.352,-24.356 0,-13.447 -10.906,-24.353 -24.352,-24.353 -13.449,0 -24.353,10.906 -24.353,24.353 m -4.461,0 c 0,15.917 12.892,28.809 28.814,28.809 15.918,0 28.819,-12.892 28.819,-28.809 0,-15.917 -12.901,-28.814 -28.819,-28.814 -15.922,0 -28.814,12.897 -28.814,28.814 m 27.76,11.096 0,4.428 -14.381,0 0,-13.287 8.812,0 0,-4.432 -8.812,0 0,-13.285 14.381,0 0,4.428 -9.955,0 0,4.426 8.851,0 0,13.295 -8.851,0 0,4.427"
                          style="fill:#cb0202;fill-opacity:1;fill-rule:evenodd;stroke:none"
                        ></path>
                      </g>
                    </svg>
                    <span class="logo-text">2019年度“明星员工”评选活动</span>
                  </a>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <div class="head-right">
                  <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#010368"
                    text-color="#bfcbd9"
                    active-text-color="#fff"
                    :default-active="activeIndex"
                  >
                    <el-menu-item index="1">
                      <span>
                        <i class="icon iconfont icon-toupiao"></i>
                      </span>
                      投票
                    </el-menu-item>
                    <el-submenu index="2" v-if="username && username != ''">
                      <template slot="title">
                        <span>
                          <i class="icon iconfont icon-user"></i>
                          {{username}}
                        </span>
                      </template>
                      <el-menu-item @click="toLogOut()" class="login-out" index="2-1">
                        <span>退出用户</span>
                      </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2" v-else @click="toLogin()">
                      <span>
                        <i class="icon iconfont icon-denglu-copy"></i>
                      </span>
                      <span>登录</span>
                    </el-menu-item>
                  </el-menu>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
      </el-container>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { checkCookie } from "./utils/getCookie";
export default {
  name: "app",
  data() {
    return {
      currentIndex: 0,
      activeIndex: "",
      username: "",
      value: 13
    };
  },
  methods: {
    toLogin() {
      window.location.href = "/login";
    },
    // 退出
    toLogOut() {
      window.location.href = "/logout?next=" + window.location.href;
    }
  },
  mounted() {
    // document.cookie = "userName=" + "ll";
    // this.username = checkCookie();
    this.$axios.get("/api/user").then(res => {
      let {
        data: {
          rst: { name }
        }
      } = res;
      this.username = name;
    });
  }
};
</script>

<style lang="less">
@import "../common/base.css";
body {
  .el-menu--horizontal {
    .el-menu.el-menu--popup.el-menu--popup-bottom-start {
      min-width: 150px !important;
    }
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #ecf1f7;
  border: 1px solid #d7dde4;
  .el-head {
    // background: #ac433c;
    background: #010368;
    color: #6d8bac;
    text-align: center;
    line-height: 60px;
    border-radius: 3px;
    font-size: 16px;
    .logo-layout {
      height: 60px;
      line-height: 60px;
      margin: 0 50px 0 10px;
      border-radius: 3px;
      float: left;
      position: relative;
      color: #bfcbd9;
      font-weight: bold;
      font-size: 1.2em;
      cursor: pointer;

      .layout-logo {
        height: 60px;
        line-height: 60px;
        margin: 0 50px 0 10px;
        border-radius: 3px;
        float: left;
        position: relative;
        color: #bfcbd9;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        text-decoration: none;
        .logo {
          width: 40px;
          height: 50px;
          vertical-align: middle;
          margin-top: -25px;
        }
        .logo-text {
          color: #bfcbd9;
          font-size: 22px;
          font-weight: bold;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    .head-right {
      float: right;
      margin-right: 60px;
      .el-menu.el-menu--horizontal {
        border: none;
      }
      .el-menu-item .icon-toupiao {
        color: #bfcbd9;
        position: absolute;
        top: 1px;
        left: 6px !important;
        font-size: 22px !important;
      }
      .is-active {
        .el-icon-download,
        .icon-xinzeng,
        .icon-denglu-copy {
          color: #fff;
        }
      }

      .el-menu-item {
        padding: 0px 32px;
        padding-right: 15px;
        i {
          color: #bfcbd9;
          position: absolute;
          top: 1px;
          left: 10px;
          font-size: 18px;
        }
      }
      .el-menu-item:nth-child(2) {
        line-height: 56px;
      }
      .el-badge.item {
        .el-button.el-button--default.el-button--small {
          background-color: #010368;
          color: #bfcbd9;
          font-size: 14px;
          border: none;
          padding: 0;
          padding-right: 10px;
        }

        sup.el-badge__content {
          background-color: #010368;
          border-radius: 10px;
          color: #fff;
          display: inline-block;
          font-size: 12px;
          height: 18px;
          line-height: 18px;
          padding: 0 6px;
          text-align: center;
          white-space: nowrap;
          border: 1px solid #fff;
          margin-top: 18px;
          margin-right: 3px;
        }
      }

      .icon-user {
        margin-top: -3px;
        margin-right: 2px;
        color: #bfcbd9;
      }
    }
  }
}
</style>
