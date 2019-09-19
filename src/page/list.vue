<template>
  <div class="info_content">
    <el-row v-if="tag == 'voting'">
      <el-col
        :class="{'add_border': currentIndex == k+100  && info.select ? 'select':''}"
        class="info_li"
        :span="4"
        v-for="(info,k) in info"
        :key="k+100"
        @click="selectVote(k+100,info)"
      >
        <el-card :body-style="{ padding: '0px',position:'relative' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <span
            v-if="currentIndex == k+100  && info.select"
            class="radio_icon"
            :class="[currentIndex == k+100  && info.select ? 'select':'']"
          >
            <span class="quan"></span>
          </span>
          <span class="radio_icon" v-else></span>
          <div class="box">
            <span class="name">{{info && info.name}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row v-else-if="tag == 'voted'">
      <el-col
        :class="{'add_border': info.select ? 'select':''}"
        class="info_li voted"
        :span="4"
        v-for="(k, index) in info"
        :key="k+100"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          >
          <div style="padding: 14px;">
            <div class="photo">
              <span
                v-if="currentIndex == k+100  && info.select"
                class="radio_icon"
                :class="[currentIndex == k+100  && info.select ? 'select':'']"
              >
                <span class="quan"></span>
              </span>
              <span class="radio_icon" v-else></span>
              <img class="img" src="../assets/img/222.jpeg" alt>
            </div>
            <div class="box">
              <span class="name">{{info && info.name}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 结果 -->
    <!-- <result-list :info="info" :total="total"></result-list> -->
    <ul v-else>
      <li class="li_result" v-for="(info, k) in info" :key="k">
        <span class="name" :class="{'name1':info.tag == 'color'}">{{info.name}}</span>
        <div class="result_box" :class="{'max2':info.tag == 'color'}">
          <div class="result" :style="'width:'+ (info.num/ total) *100 + '%'">
            <!-- <span
              style="padding-left: 5px;"
            >{{info && info.num > 0? `${(info.num /total *100).toFixed(2)}%` : `${info.num}%`}}</span>-->
            <span
              class="proportion"
            >{{ info && info.num ? `${(info.num / total * 100).toFixed(2)}%` : 0 + '%'}}</span>
          </div>
          <span class="num">
            {{info.num}}
            <span>票</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["info", "id", "tag", "total"],
  data() {
    return {
      currentIndex: null,
      index1: null
    };
  },
  methods: {
    selectVote(_index, _info) {
      this.currentIndex = _index;
      _info.select = true;
      _info._id = this.id;
      this.$emit("select", _info);
    },
    findMax() {
      let arr = this.info;
      const max = arr.reduce((a, b) => {
        return a.num > b.num ? a : b;
      });
      const result = arr.map(item => {
        if (item.num == max.num) {
          item.tag = "color";
        }
        return item;
      });
    }
  },
  created() {
    this.findMax();
  }
};
</script>

<style lang="less">
.info_content {
  .info_li {
    display: inline-block;
    margin-left: 20px;
    background-color: #ecf1f7;
    box-sizing: border-box;
    border: 1px solid #fff;
    &.add_border {
      border: 1px solid #f0d8b9;
      box-sizing: border-box;
    }
    &.voted {
      cursor: not-allowed;
    }
    .photo {
      height: 150px;
      width: 150px;
      border: 1px solid #ccc;
      position: relative;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .box {
      overflow: hidden;
      height: 25px;
      line-height: 25px;
      padding: 10px;
    }
    .radio_icon {
      display: inline-block;
      height: 18px;
      width: 18px;
      //   border: 1px solid #ec8a09;
      border-radius: 100%;
      margin-right: 5px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 6px;
      right: 1px;
      background-color: #f0d8b9;
    }
    .name {
      font-size: 14px;
      color: #555;
      cursor: pointer;
    }
    .select {
      display: inline-block;
      height: 20px;
      width: 20px;
      border: 2px solid #ee8b0a;
      border-radius: 100%;
      background-color: #ee8b0a;
      position: relative;
      position: absolute;
      top: 6px;
      right: 1px;
      .quan {
        display: inline-block;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: #fff;
        position: absolute;
        top: 3px;
        left: 4px;
      }
    }
  }
  .li_result {
    padding: 5px 50px;
    .name {
      margin-right: 20px;
      font-size: 14px;
      width: 64px;
      display: inline-block;
      color: #052b53;
      text-align: right;
      &.name1 {
        font-size: 16px;
        color: #0b71df;
        width: 64px;
        text-align: right;
      }
    }
    .result_box {
      height: 40px;
      width: 90%;
      background-color: #ecf5ff;
      position: relative;
      border-radius: 4px;
      text-align: right;
      border: 1px solid #eee;
      display: inline-block;
      &.max2 {
        border: 1px solid #7cb3ee;
        .result {
          background-color: #b3d8ff;
          line-height: 40px;
          .proportion {
            color: #085ddd;
            font-size: 16px;
          }
        }
        .num {
          font-size: 16px;
          color: #0b71df;
        }
      }
    }
    .result {
      position: absolute;
      top: 0;
      left: 0;
      line-height: 39px;
      background-color: #c0d9f3;
      border-radius: 4px;
      text-align: center;
      .proportion {
        margin-left: 5px;
        font-size: 14px;
        color: #052b53;
      }
    }
    .num {
      margin-right: 50px;
      line-height: 40px;
      font-size: 14px;
      color: #064180;
    }
  }
}
</style>
