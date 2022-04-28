<template>
  <div class="show" @click="jump">
    <img :src="img" />
    <div class="describe1">
      <div class="title">{{ form.title }}</div>
      <div class="content">{{ form.content }}</div>
    </div>
    <div class="describe2">
      <div class="author">{{ form.author }}</div>
      <div class="time">{{ form.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show",
  props: ["title", "content", "time", "author", "pId", "img"],
  data() {
    return {
      form:{
        title:this.title,
        content:this.content,
        time:this.time,
        author:this.author,
      }
    };
  },
  methods: {
    jump() {
      this.$router.push({
        path: "posts",
        query: {
          pId: this.pId,
        },
      });
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "number";
  src: url("../../../assets/number.ttf");
}
div {
  display: flex;
}

img {
  width: 400px;
  height: 300px;
}

.show {
  cursor: pointer;
  width: 450px;
  height: 450px;
  margin: 1%;
  border-radius: 5%/10%;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid lemonchiffon;
}

.describe1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
}

.describe1 > div {
  margin: 3% auto;
}

.describe2 {
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-top: 5%;
}

.describe2 > div {
  width: 80px;
  height: 20px;
}

.title {
  font-weight: bold;
  font-size: 1.5em;
}

.time {
  color: gray;
  font-family: "number";
}
</style>