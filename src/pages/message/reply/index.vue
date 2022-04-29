<template>
  <div class="reply">
    <div class="username">{{ username }}说：</div>
    <div class="content">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content }}
    </div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: "reply",
  props: ["username", "content", "time"],
  methods: {
    goPost() {},
  },
};
</script>

<style scoped>
.reply {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 64%;
  height: 100px;
  background-color: white;
  margin: 1% auto;
  border: 2px solid lemonchiffon;
  font-size: 1.4em;
}
.username {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/2;
  grid-row: 1/3;
}
.content {
  display: flex;
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