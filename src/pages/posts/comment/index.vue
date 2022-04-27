<template>
  <div class="comment">
    <div class="username">{{ username }}</div>
    <div class="content">{{ content }}</div>
    <div class="time">{{ time }}</div>
    <div class="reply"></div>
  </div>
</template>

<script>
export default {
  name: "commet",
  data() {
    return {
      account: "",
      username: "1",
      content: "2",
      time: "2022-4-27",
    };
  },
  methods: {
    goReply() {
      this.$store.dispatch("reply", this.username);
    },
  },
};
</script>

<style scoped>
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 65%;
  height: 100px;
  background-color: white;
  margin: 1% auto;
  border: 2px solid lemonchiffon;
}
.username {
  display: flex;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/3;
}
.content {
  display: flex;
  align-items: center;
  grid-column: 2/3;
  grid-row: 1/3;
}
.time {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-style: italic;
  color: gray;
}
</style>