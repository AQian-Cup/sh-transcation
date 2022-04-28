<template>
  <div class="comment">
    <div class="username">{{ username }}说：</div>
    <div class="content">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content }}
    </div>
    <div class="time">{{ time }}</div>
    <div class="reply" @click="test">回复</div>
  </div>
</template>

<script>
export default {
  name: "commet",
  props: ["account", "username", "content","time"],
  data() {
    return {};
  },
  methods: {
    goReply() {
      this.$store.dispatch("reply", this.username);
    },
    test(){
      this.$store.dispatch("reply",this.username)
    }
  },
};
</script>

<style scoped>
.comment {
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