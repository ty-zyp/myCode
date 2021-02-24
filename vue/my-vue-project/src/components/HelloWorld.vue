/* eslint-disable vue/no-parsing-error */
<style scoped>
  .menuP{
    position:relative;
  }
  .styleChange{
    position: absolute;
    top: 21px;
    right: 10px;
    z-index: 999;
  }
  #content{
    min-height: 300px;
  }
</style>
<template>
  <div class="menuP">
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="changeMenu">
        <MenuItem name="contentManagement">
          <Icon type="ios-paper"/>
          首页
        </MenuItem>
        <MenuItem name="select">
            <Icon type="ios-people" />
            排班表
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="calendar">日历排班</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
    <RadioGroup v-model="theme1" class="styleChange">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
      <Radio label="primary"></Radio>
    </RadioGroup>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  },
  methods: {
    changeMenu (val) {
      let flag;
      if (val === 'contentManagement') {
        flag = val;
      } else if (val === 'select') {
        flag = val;
      }else if (val === 'calendar'){
        flag = val;
      } else {
        flag = 'other';
      }
      console.log(val)
      this.$router.push({name: flag})
    }
  }
}
</script>
