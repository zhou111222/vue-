<template>
  <div class="list">
    {{age}}
    <button @click="changeAge">$attr和$listener测试</button>
    <div class="car">home页购物车{{this.$store.state.home.carNumber}}</div>
    <!-- <div class="car">{{carNum}}</div> -->
  </div>
</template>

<script>
export default {
  props: ['age'],
  data () {
    return {
      msg: 'con2'
    }
  },
  methods: {
    changeAge: function () {
      this.$emit('changeAge')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.car {
  width: 100%;
  height: 50px;
  background-color: #f5380a;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
button {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
}
</style>
