<template>
  <div class="all">
    <img src="./imagetest.png" />
    <div class="describe1">
      <div>{{ title }}</div>
      <div>{{ content }}</div>
    </div>
    <div class="describe2">
      <div>{{ time }}</div>
      <div>{{ author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show",
  props: ["title", "content", "time", "author"],
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  display: flex;
}

.all {
  cursor: pointer;
  width: 800px;
  height: 300px;
  margin-top: 20px;
  border-radius: 5%/10%;
  justify-content: space-between;
  align-items: center;
  background-color: aquamarine;
}

.describe1 {
  width: 600px;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
}

.describe2 {
  width: 200px;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>