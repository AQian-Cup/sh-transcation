<template>
  <div>
    <searchShow
      v-for="item in this.$store.state.searchPosts"
      :key="item.Pid"
      :title="item.Title"
      :content="item.Content"
      :time="item.Time"
      :author="item.Username"
      :pId="item.Pid"
    ></searchShow>
  </div>
</template>

<script>
import searchShow from "./searchShow";

export default {
  name: "search",
  data() {
    return {};
  },
  components: {
    searchShow,
  },
};
</script>

<style scoped>
</style>