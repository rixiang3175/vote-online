<template>
  <div class="vote_ing_wrap">
    <ul>
      <li v-for="(vote, index) in voteList" :key="index">
        <!-- <div class="title_info">
          <span v-if="tag != 'result'" class="require">*</span>
          <span>{{index +1}}、</span>
          <span v-if="vote.comment == '网络架构之星'">网络架构之星：在网络新技术和网络高可用建设和提升工作中，表现突出的员工</span>
          <span v-else-if="vote.comment == '支持服务之星'">支持服务之星：在境内外分行和各集团子公司、第三方单位的网络建设、技术支持工作中表现突出的员工。</span>
          <span v-else-if="vote.comment == '快速交付之星'">快速交付之星：在版本投产、新业务投产过程中及时响应，表现突出，为新业务投产保驾护航的员工</span>
          <span
            v-else-if="vote.comment == '智能运维之星'"
          >智能运维之星：在自动化运维工具设计和开发、大数据分析、以及为运维自动化、智能化建设做出贡献的员工。</span>
          <span v-else-if="vote.comment == '安全防护之星'">安全防护之星：在保护我行网络信息安全、防控抵御各种新型网络攻击工作中表现突出的员工。</span>
          <span v-else-if="vote.comment == '运行保障之星'">运行保障之星：在网络日常运行监控、操作、应急处置过程中表现突出的一线人员。</span>
          <span v-else-if="vote.comment == '综合服务之星'">综合服务之星：在园区网络服务、部门综合事务管理、部门文化建设工作中表现出色的员工。</span>
          <span v-else-if="vote.comment == '资源管理之星'">资源管理之星：在资源规划部署、硬件采购维保工作中表现出色的员工。</span>
          <span v-else>进步新秀之星：入行工作4年以内，工作积极主动，进步显著，得到领导和同事广泛认可的新秀员工。</span>
          <span v-if="tag !='result'" class="tip">(单选)</span>
        </div>
        <info-list :tag="tag" :info="vote.info" @select="onSelect"></info-list>-->
        <info-wrap :vote="vote" :tag="tag" :index="index"></info-wrap>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["voteList", "tag"],
  components: {
    "info-list": () => import("./infoList.vue"),
    "info-wrap": () => import("./infoWrap.vue")
  },
  data() {
    return {
      select: []
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less">
.vote_ing_wrap {
}
</style>
