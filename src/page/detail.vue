<template>
  <div class="detail">
    <div class="car">
      路由传参：{{$route.params.sku}}
    </div>
    <con1 :name="name" :age="age" @changeAge="changeAge"></con1>
  </div>
</template>

<script>
import con1 from '@/components/con1'

export default {
  name: 'Detail',
  data () {
    return {
      name: 'secoo',
      age: 18
    }
  },
  components: {
    con1
  },
  beforeCreate: function () {},
  created: function () {},
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  updated: function () {},
  beforeDestroy: function () {},
  destroyed: function () {},
  methods: {
    changeAge: function () {
      this.age = this.age + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/style/reset.scss";
  html,
  body,
  #app {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #fff;
  }
  #app{
    position: relative;
  }
  * {
      padding: 0;
      margin: 0;
  }
  .a {
      font-size: 40px;
  }
  .b {
      font-family: "AlternateGothicEF-NoTwo";
      font-size: 40px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .car {
  width: 100%;
  height: 50px;
  background-color: #f5380a;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
</style>
