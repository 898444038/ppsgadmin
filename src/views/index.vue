<template>
  <el-container class='container'>
      <el-header class='header'>header</el-header>
      <el-container class='body'>
        <el-aside class='aside'>
            <ul>
                <li @click='jump'>配置</li>
            </ul>
        </el-aside>
        <el-main class='main'>main</el-main>
      </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  methods: {
    jump () {
      // this.$router.push({path: '/config1', query: {plan: 'private'}})
      // this.$router.push({name: '/config2', params: {plan: 'private'}})
      // this.$api.post('/config/config1', {a: '1'})
      // this.$api.postForm('/config/config1', {a: '1'})
    }
  }
}
</script>

<style>
    @import './../styles/index.css';

</style>

<style lang='less' scoped>

</style>
