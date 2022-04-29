<template>
  <div>
    <reply
      v-for="item in messageList"
      :key="item.Did"
      :username="item.You_username"
      :content="item.Content"
      :time="item.Time"
    ></reply>
  </div>
</template>

<script>
import reply from "./reply";

export default {
  name: "message",
  data() {
    return {
      messageList: [],
    };
  },
  components: {
    reply,
  },
  async mounted() {
    let res = await this.$API.message.message();
    if (!res.data.Result) {
      this.messageList = res.data;
    }else{
      this.$message.error(res.data.Result)
    }
  },
};
</script>

<style>
</style>