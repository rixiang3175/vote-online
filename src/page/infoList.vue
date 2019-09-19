<template>
  <div class="info_content">
    <ul v-if="tag == 'voting'">
      <li
        :class="{'add_border': currentIndex == k+100  && info.select ? 'select':''}"
        class="info_li"
        v-for="(info, k) in info"
        :key="k+100"
        @click="selectVote(k+100,info)"
      >
        <div>
          <div class="photo">
            <span
              v-if="currentIndex == k+100  && info.select"
              class="radio_icon"
              :class="[currentIndex == k+100  && info.select ? 'select':'']"
            >
              <span class="quan"></span>
            </span>
            <span class="radio_icon" v-else></span>
            <!-- {{ info && info.photo_url}} -->
            <img class="img" src="../assets/img/222.jpeg" alt>
          </div>
          <div class="box">
            <span class="name">{{info && info.name}}</span>
          </div>
        </div>
      </li>
    </ul>
    <ul v-else-if="tag=='voted'">
      <li
        :class="{'add_border':info.select ? 'select':''}"
        class="info_li voted"
        v-for="(info, k) in info"
        :key="k+100"
      >
        <div>
          <div class="photo">
            <span
              v-if="info.select"
              class="radio_icon"
              :class="[info.select == true ? 'select':'']"
            >
              <span class="quan"></span>
            </span>
            <span class="radio_icon" v-else></span>
            <!-- {{ info && info.photo_url}} -->
            <img class="img" src="../assets/img/222.jpeg" alt>
          </div>
          <div class="box">
            <span class="name">{{info && info.name}}</span>
          </div>
        </div>
      </li>
    </ul>
    <!-- 结果 -->
    <ul v-else>
      <li class="li_result" v-for="(info, k) in info" :key="k">
        <span class="name" :class="{'name1':info.tag == 'color'}">{{info.name}}</span>
        <div class="result_box" :class="{'max2':info.tag == 'color'}">
          <div class="result" :style="'width:'+ info.percent + '%'">
            <span
              class="proportion"
            >{{ info && info.percent ? `${info.percent.toFixed(2)}%` : 0 + '%'}}</span>
          </div>
          <span class="num">
            {{info.gain_votes}}
            <span>票</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["info", "tag"],
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
      this.$root.Bus.$emit("select", _info);
    },
    findMax() {
      let arr = this.info;
      const max = arr.reduce((a, b) => {
        return a.percent > b.percent ? a : b;
      });
      const result = arr.map(item => {
        if (item.percent == max.percent) {
          item.tag = "color";
        }
        return item;
      });
    }
  },
  created() {
    this.findMax();
  },
  mounted() {
    // if (this.tag == "voting") {
    //   this.info.forEach(element => {
    //     element.data = "haha";
    //   });
    // }
  }
};
</script>

<style lang="less">
.info_content {
  .info_li {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin-left: 20px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 6px;
    margin-bottom: 12px;
    &.add_border {
      border: 1px solid #f0d8b9;
      box-sizing: border-box;
      background-color: #ecdecb;
    }
    &.voted {
      cursor: not-allowed;
    }
    .photo {
      height: 200px;
      width: 220px;
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
      position: absolute;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
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
        color: #d3ab70;
        width: 64px;
        text-align: right;
      }
    }
    .result_box {
      height: 40px;
      width: 90%;
      background-color: #f2f5f8;
      position: relative;
      border-radius: 4px;
      text-align: right;
      border: 1px solid #eee;
      display: inline-block;
      &.max2 {
        border: 1px solid #eeaf7c;
        .result {
          background-color: #f1d5c2;
          line-height: 40px;
          .proportion {
            color: #e68d44;
            font-size: 16px;
          }
        }
        .num {
          font-size: 16px;
          color: #c98545;
        }
      }
    }
    .result {
      position: absolute;
      top: 0;
      left: 0;
      line-height: 39px;
      background-color: #d9e5f5;
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
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
