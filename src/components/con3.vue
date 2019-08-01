<template>
  <div class="con3">
    <div class="list"
         @click="add()">
      兄弟组件1中央事件总线---{{num}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  mounted () { },
  methods: {
    add () {
      let num = this.num
      this.num = num + 1
      this.$bus.emit('add', this.num)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
button {
  width: 220px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
}
.groupid {
  width: 100%;
  height: 50px;
  background-color: #df8613;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
.list {
  width: 100%;
  height: 50px;
  background-color: #f5380a;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
</style>
