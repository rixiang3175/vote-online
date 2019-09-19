<template>
  <div>
    <div v-if="tag == 'voting'" class="title_info" :class="{'change_color':currentIndex  != null}">
      <span v-if="tag != 'result'" class="require">*</span>
      <span>{{index +1}}、</span>
      <span v-if="vote.comment == '网络架构之星'">网络架构之星：在网络新技术和网络高可用建设和提升工作中，表现突出的员工。</span>
      <span v-else-if="vote.comment == '支持服务之星'">支持服务之星：在境内外分行和各集团子公司、第三方单位的网络建设、技术支持工作中表现突出的员工。</span>
      <span v-else-if="vote.comment == '快速交付之星'">快速交付之星：在版本投产、新业务投产过程中及时响应，表现突出，为新业务投产保驾护航的员工。</span>
      <span v-else-if="vote.comment == '智能运维之星'">智能运维之星：在自动化运维工具设计和开发、大数据分析、以及为运维自动化、智能化建设做出贡献的员工。</span>
      <span v-else-if="vote.comment == '安全防护之星'">安全防护之星：在保护我行网络信息安全、防控抵御各种新型网络攻击工作中表现突出的员工。</span>
      <span v-else-if="vote.comment == '运行保障之星'">运行保障之星：在网络日常运行监控、操作、应急处置过程中表现突出的一线人员。</span>
      <span v-else-if="vote.comment == '综合服务之星'">综合服务之星：在园区网络服务、部门综合事务管理、部门文化建设工作中表现出色的员工。</span>
      <span v-else-if="vote.comment == '资源管理之星'">资源管理之星：在资源规划部署、硬件采购维保工作中表现出色的员工。</span>
      <span v-else>进步新秀之星：入行工作4年以内，工作积极主动，进步显著，得到领导和同事广泛认可的新秀员工。</span>
      <span>
        <span v-if="currentIndex == null" class="tip">(单选)</span>
        <span v-else class="tip">(已选)</span>
      </span>
    </div>
    <div v-else class="title_info title_voted">
      <span v-if="tag != 'result'" class="require">*</span>
      <span>{{index +1}}、</span>
      <span v-if="vote.comment == '网络架构之星'">网络架构之星：在网络新技术和网络高可用建设和提升工作中，表现突出的员工</span>
      <span v-else-if="vote.comment == '支持服务之星'">支持服务之星：在境内外分行和各集团子公司、第三方单位的网络建设、技术支持工作中表现突出的员工。</span>
      <span v-else-if="vote.comment == '快速交付之星'">快速交付之星：在版本投产、新业务投产过程中及时响应，表现突出，为新业务投产保驾护航的员工</span>
      <span v-else-if="vote.comment == '智能运维之星'">智能运维之星：在自动化运维工具设计和开发、大数据分析、以及为运维自动化、智能化建设做出贡献的员工。</span>
      <span v-else-if="vote.comment == '安全防护之星'">安全防护之星：在保护我行网络信息安全、防控抵御各种新型网络攻击工作中表现突出的员工。</span>
      <span v-else-if="vote.comment == '运行保障之星'">运行保障之星：在网络日常运行监控、操作、应急处置过程中表现突出的一线人员。</span>
      <span v-else-if="vote.comment == '综合服务之星'">综合服务之星：在园区网络服务、部门综合事务管理、部门文化建设工作中表现出色的员工。</span>
      <span v-else-if="vote.comment == '资源管理之星'">资源管理之星：在资源规划部署、硬件采购维保工作中表现出色的员工。</span>
      <span v-else>进步新秀之星：入行工作4年以内，工作积极主动，进步显著，得到领导和同事广泛认可的新秀员工。</span>
    </div>
    <!-- <info-list :info="vote.info" :tag="tag"></info-list> -->
    <div class="info_content">
      <ul v-if="tag == 'voting'">
        <!-- <li
          :class="{'add_border': currentIndex == k+100  && info.select ? 'select':''}"
          class="info_li"
          v-for="(info, k) in vote.info"
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
              <span class="radio_icon" v-else>
                <span class="quan"></span>
              </span>
              <div class="img_box" style>
                <img class="img" :src="info.photo_url" alt="照片加载失败">
                <br>
                <span
                  class="name"
                  :class="{'name_voted':currentIndex == k+100  && info.select }"
                >{{info && info.name}}</span>
                <span class="named" v-if="currentIndex == k+100  && info.select">已投</span>
              </div>

              <p class="desc">
                工作以后，最直观的感受是我看待问题的方式开始变得立体。
                我尝试抽象地去看待问题。比如在写IP地址合并算法的时候，为了透彻地理解合并原理，我会列举具体的IP地址来练习；但在实际处理时，我不断提醒自己所面对的只是ABCD，和甲乙丙丁一样“路人”。将具象的事物抽象化思考的过程，抽丝剥茧，最终内化于更多维度的思维习惯。
                现在我接手了线路online，其定位与属性与ACL变更工具截然不同，这让我对下一阶段的工作模式注入更多思索与考量。
                我很感谢第一份工作赋予了我对于编程的再次尝试，也一直感激能接手独立的项目。我可以拥有充分的时间去追根溯源，去奇思妙想；我感受到了头脑风暴之后的灵光乍现亦或醍醐灌顶，真的很美妙。工作不停，思考不止。
              </p>
            </div>
          </div>
        </li>-->
        <li
          :class="{'add_border': currentIndex == k+100  && info.select ? 'select':''}"
          class="info_li"
          v-for="(info, k) in vote.info"
          :key="k+100"
          @click="selectVote(k+100,info)"
        >
          <!-- 照片 -->
          <div>
            <div class="photo1">
              <div class="img_box" style>
                <span
                  v-if="currentIndex == k+100  && info.select"
                  class="radio_icon"
                  :class="[currentIndex == k+100  && info.select ? 'select':'']"
                >
                  <span class="quan"></span>
                </span>
                <span class="radio_icon" v-else>
                  <span class="quan"></span>
                </span>
                <img class="img" :src="info.photo_url" alt="照片加载失败">
                <br>
                <span
                  class="name"
                  :class="{'name_voted':currentIndex == k+100  && info.select }"
                >{{info && info.name}}</span>
                <span class="named" v-if="currentIndex == k+100  && info.select">
                  <i class="icon iconfont icon-toupiao1"></i>
                  已选
                </span>
                <span class="naming" v-else>
                  <i class="icon iconfont icon-toupiao1"></i>为他投票
                </span>
              </div>
              <!-- <p class="desc" style>{{info.introduce}}</p> -->

              <p class="intruce">个人简介</p>
              <p class="desc">
                {{info.introduce}}
                <!-- 姓名：靳国英 -->
                <!-- 入职13载，综合服务大满贯。
                第一次参与综合岗工作是因为部门月报编写人调休，我临时代写，从此便踏上综合管理的“不归路”。无论是同事离职还是换部门，大家手里综合管理的工作都移交给了我。从部门各类报告编写到PPT编制；从考勤管理到邮箱管理；从培训组织到项目管理；从经费管理到活动组织；鼎盛时期，我一人承担了部门所有综合岗工作。后来，部门工作调整，综合岗由我一个人变成一个岗位，我的角色也从一线处理转变为岗位管理，但不管是什么角色，我都全心全意的为部门同事服务。
                2016年我带领部门青年文明号创建小组，完成部门青年文明号评选材料编撰，助力部门评为“全国级青年文明号”，成为中心建立以来，唯一的“全国级青年文明号”单位，此事将成为我永远的骄傲。-->
              </p>
            </div>
          </div>
        </li>
      </ul>
      <!-- 已投票 -->
      <ul v-else-if="tag=='voted'">
        <!-- <li
          :class="{'add_border':info.select ? 'select':''}"
          class="info_li voted"
          v-for="(info, k) in vote.info"
          :key="k+100"
        >
          <div>
            <div class="photo">
              <span v-if="info.select" class="radio_icon" :class="[info.select ? 'select':'']">
                <span class="quan"></span>
              </span>
              <span class="radio_icon" v-else>
                <span class="quan"></span>
              </span>
              <div class="img_box" style>
                <img class="img" :src="info.photo_url" alt="照片加载失败">
                <div>
                  <span class="name" :class="{'name_voted':info.select }">{{info && info.name}}</span>
                  <span class="named" v-if="info.select">已投</span>
                </div>
              </div>
              <p class="desc">
                工作以后，最直观的感受是我看待问题的方式开始变得立体。
                我尝试抽象地去看待问题。比如在写IP地址合并算法的时候，为了透彻地理解合并原理，我会列举具体的IP地址来练习；但在实际处理时，我不断提醒自己所面对的只是ABCD，和甲乙丙丁一样“路人”。将具象的事物抽象化思考的过程，抽丝剥茧，最终内化于更多维度的思维习惯。
                现在我接手了线路online，其定位与属性与ACL变更工具截然不同，这让我对下一阶段的工作模式注入更多思索与考量。
                我很感谢第一份工作赋予了我对于编程的再次尝试，也一直感激能接手独立的项目。我可以拥有充分的时间去追根溯源，去奇思妙想；我感受到了头脑风暴之后的灵光乍现亦或醍醐灌顶，真的很美妙。工作不停，思考不止。
              </p>
            </div>
          </div>
        </li>-->
        <!-- <li
          :class="{'add_border':info.select ? 'select':''}"
          class="info_li voted"
          v-for="(info, k) in vote.info"
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
              <span class="radio_icon" v-else>
                <span class="quan"></span>
              </span>
              <img class="img" :src="info.photo_url" alt="照片加载失败">
            </div>
            <div class="box">
              <span class="name" :class="{'name_voted':info.select}">{{info && info.name}}</span>
              <span class="named" v-if="info.select">已投</span>
            </div>
          </div>
        </li>-->
        <li
          :class="{'add_border': info.select ? 'select':''}"
          class="info_li voted"
          v-for="(info, k) in vote.info"
          :key="k+100"
        >
          <!-- 照片 -->
          <div>
            <div class="photo1">
              <div class="img_box" style>
                <span v-if="info.select" class="radio_icon" :class="[info.select ? 'select':'']">
                  <span class="quan"></span>
                </span>
                <span class="radio_icon" v-else>
                  <span class="quan"></span>
                </span>
                <img class="img" :src="info.photo_url" alt="照片加载失败">
                <br>
                <span class="name" :class="{'name_voted':info.select }">{{info && info.name}}</span>
                <span class="named" v-if="info.select">
                  <i class="icon iconfont icon-toupiao1"></i>
                  已选
                </span>
                <span class="naming" v-else>
                  <i class="icon iconfont icon-toupiao1"></i>
                  为他投票
                </span>
              </div>
              <!-- <p class="desc" style>{{info.introduce}}</p> -->
              <p class="intruce">个人介绍</p>
              <p class="desc">
                {{info.introduce}}
                <!-- 工作以后，最直观的感受是我看待问题的方式开始变得立体。
                我尝试抽象地去看待问题。比如在写IP地址合并算法的时候，为了透彻地理解合并原理，我会列举具体的IP地址来练习；但在实际处理时，我不断提醒自己所面对的只是ABCD，和甲乙丙丁一样“路人”。将具象的事物抽象化思考的过程，抽丝剥茧，最终内化于更多维度的思维习惯。
                现在我接手了线路online，其定位与属性与ACL变更工具截然不同，这让我对下一阶段的工作模式注入更多思索与考量。
                我很感谢第一份工作赋予了我对于编程的再次尝试，也一直感激能接手独立的项目。我可以拥有充分的时间去追根溯源，去奇思妙想；我感受到了头脑风暴之后的灵光乍现亦或醍醐灌顶，真的很美妙。工作不停，思考不止。-->
              </p>
            </div>
          </div>
        </li>
      </ul>
      <!-- 结果 -->
      <ul v-else>
        <li class="li_result" v-for="(info, k) in vote.info" :key="k">
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
  </div>
</template>

<script>
import { getUrlParams } from "../utils/utils";
export default {
  props: ["vote", "index", "tag"],
  components: {
    "info-list": () => import("./infoList.vue")
  },
  data() {
    return {
      select1: [],
      info: [],
      currentIndex: null
    };
  },
  methods: {
    selectVote(_index, _info) {
      this.currentIndex = _index;
      _info.select = true;
      this.$root.Bus.$emit("select", _info);
    },
    findMax() {
      let arr = this.vote.info;
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
    if (this.tag == "voting") {
      let arr = this.vote.info;
      arr.map(item => {
        item.select = false;
        return item;
      });
    }
  }
};
</script>

<style lang="less">
.title_info {
  font-size: 20px;
  color: #fff;
  padding-bottom: 10px;
  font-weight: 500;
  padding: 25px 0;
  padding-bottom: 15px;
  &.title_voted {
    color: rgb(238, 149, 34);
  }
  &.change_color {
    color: rgb(238, 149, 34);
    .tip {
      font-size: 14px;
      color: #eed296;
    }
  }
  .require {
    color: red;
    font-weight: 500;
    margin-right: 3px;
  }
  .tip {
    font-size: 14px;
    color: #c9dbee;
  }
}
.info_content {
  .info_li {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin-left: 12px;
    background-color: rgb(218, 230, 247);
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 6px;
    margin-bottom: 12px;
    width: 48%;
    cursor: pointer;
    min-height: 380px;
    overflow: hidden;
    &.voted {
      cursor: not-allowed;
    }
    &.add_border {
      border: 1px solid #f3e1c9;
      box-sizing: border-box;
      background-color: #faf4eb;
      .photo {
        .desc {
          line-height: 22px;
          font-size: 14px;
          //   color: rgb(190, 122, 58);
          padding: 10px;
          text-indent: 1.5em;
        }
      }
      .photo1 {
        .intruce {
          color: #f19d2f;
        }
      }
    }
    .photo1 {
      position: relative;
      height: 100%;
      min-height: 380px;
      .img_box {
        float: left;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 4px 0 4px 4px;
        .img {
          height: 240px;
          width: 230px;
          display: inline-block;
          margin-bottom: 12px;
          border: 1px solid #eee;
          border-radius: 6px;
          font-size: 12px;
        }
        .name {
          text-align: center !important;
          font-size: 14px;
          color: rgb(114, 160, 230);
          cursor: pointer;
          position: relative;
          margin-left: 12px;
        }
        .name_voted {
          color: #f19d2f;
          font-size: 14px;
          font-weight: 500;
          box-sizing: border-box;
          margin-left: 12px;
        }
        .named {
          font-size: 12px;
          color: #ee931d;
          font-weight: 500;
          padding: 2px 8px;
          background-color: rgb(245, 225, 198);
          border-radius: 6px;
          box-sizing: border-box;
          margin-left: 84px;
          .icon-toupiao1 {
            font-size: 12px;
          }
        }
        .naming {
          font-size: 12px;
          color: rgb(114, 160, 230);
          font-weight: 500;
          padding: 2px 8px;
          background-color: rgb(173, 201, 243);
          border-radius: 6px;
          box-sizing: border-box;
          margin-left: 63px;
          .icon-toupiao1 {
            font-size: 12px;
          }
        }
      }
      .desc {
        margin-left: 234px;
        line-height: 20px;
        font-size: 14px;
        color: #555;
        padding: 8px;
        letter-spacing: 1px;
        text-indent: 1em;
      }
      .intruce {
        color: #1162db;
        text-align: center;
        margin-left: 224px;
        padding-top: 10px;
        font-weight: 600;
      }
    }
    .photo {
      min-width: 190px;
      //   border: 1px solid rgb(233, 233, 233);
      position: relative;
      box-sizing: border-box;
      border-radius: 6px;
      .img_box {
        float: none;
        clear: both;
        text-align: center;
        padding: 6px 10px 0px 0;
        height: 221px;
        .img {
          font-size: 14px;
          border-radius: 6px;
          width: 230px;
          height: 200px;
          display: inline-block;
          border: 1px solid #eee;
          margin-bottom: 5px;
        }
        .name_voted {
          color: #f19d2f;
          font-size: 14px;
          font-weight: 500;
          box-sizing: border-box;
          text-align: left;
        }
        .named {
          font-size: 12px;
          color: #f5b35e;
          font-weight: 500;
          padding: 2px 8px;
          background-color: rgb(247, 219, 181);
          border-radius: 6px;
          box-sizing: border-box;
          margin-left: 100px;
        }
      }
      .desc {
        line-height: 22px;
        font-size: 14px;
        color: #444;
        padding: 10px;
        text-indent: 1.5em;
      }
    }
    .box {
      overflow: hidden;
      line-height: 25px;
      padding: 10px;
      box-sizing: border-box;
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
      top: 11px;
      left: 12px;
      z-index: 1;
      background-color: rgb(114, 160, 230);
      .quan {
        background-color: #fff;
        display: inline-block;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        position: absolute;
        top: 5px;
        left: 5px;
      }
    }
    .name {
      font-size: 14px;
      color: rgb(90, 91, 92);
      cursor: pointer;
      position: relative;
      text-align: left;
    }

    .select {
      display: inline-block;
      height: 20px;
      width: 20px;
      border: 2px solid #ee9725;
      border-radius: 100%;
      background-color: #ee9725;
      position: absolute;
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
      top: 11px;
      left: 12px;
      z-index: 1;
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
    padding: 5px 10px;
    .name {
      margin-right: 20px;
      font-size: 14px;
      width: 64px;
      display: inline-block;
      color: #f9fbfc;
      text-align: right;
      &.name1 {
        font-size: 16px;
        color: #e68d44;
        width: 64px;
        text-align: right;
      }
    }
    .result_box {
      height: 40px;
      width: 90%;
      background-color: #e4edf5;
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
          position: relative;
          .proportion {
            color: #e68d44;
            font-size: 16px;
          }
        }
        .num {
          font-size: 16px;
          color: #e68d44;
          position: absolute;
          top: 0;
          right: -8px;
        }
      }
    }
    .result {
      position: absolute;
      top: 0;
      left: 0;
      line-height: 39px;
      background-color: #bbd3f3;
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
