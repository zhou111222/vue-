<template>
  <div class="home">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <ul>
        <li class="groupid">
          list页(vuex异步){{this.$store.state.detail.groupData.groupId? this.$store.state.detail.groupData.groupId : ''}}
        </li>
      </ul>
      <div class="car">购物车(vuex同步){{this.$store.state.home.carNumber}}</div>
      <div class="control-car">
        <div class="reduce-car" @click="reduceCar()">-</div>
        <div class="add-car" @click="addCar()">+</div>
      </div>
      <button @click="goPage()">go list page</button>
      <con3></con3>
      <con4></con4>
    </div>
  </div>
</template>

<script>
import con3 from '@/components/con3'
import con4 from '@/components/con4'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    con3,
    con4
  },
  beforeCreate: function () { },
  created: function () { },
  beforeMount: function () { },
  mounted: function () { },
  beforeUpdate: function () { },
  updated: function () { },
  beforeDestroy: function () { },
  destroyed: function () { },
  methods: {
    goPage: function () {
      // this.$router.push({ path: '/detail' })
      this.$router.push({
        name: 'Detail',
        params: {
          page: '1', sku: '8989'
        }
      })
    },
    addCar: function () {
      this.$store.commit('home/addCarNum')
    },
    reduceCar: function () {
      this.$store.commit('home/reduceCarNum')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/style/reset.scss';
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}
#app {
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
  font-family: 'AlternateGothicEF-NoTwo';
  font-size: 40px;
}
h1,
h2 {
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
.groupid{
   width: 100%;
  height: 50px;
  background-color: #df8613;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
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
.control-car{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content:center;
  div{
    width: 60px;
    height: 60px;
    background-color: #42b983;
    float: left;
    margin-right: 20px;
    text-align: center;
    line-height: 60px;
    font-size: 26px;
    color: #fff;
    cursor: pointer;
  }
}
button {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
</style>
