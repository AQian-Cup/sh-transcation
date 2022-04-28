<template>
  <div class="search">
    <div class="main">
      <div class="show">
        <show
          v-for="item in this.$store.state.searchPosts"
          :key="item.Pid"
          :title="item.Title"
          :content="item.Content"
          :time="item.Time"
          :author="item.Username"
          :pId="item.Pid"
          :img="item.Photo_name"
        ></show>
      </div>
      <div class="floating">
        <i class="el-icon-arrow-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
import show from "../home/show";

export default {
  name: "search",
  data() {
    return {};
  },
  components: {
    show,
  },
  async mounted() {
    let req = {
      Content: this.$route.query.search,
    };
    await this.$store.dispatch("search", req);
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.show {
  display: flex;
}
.floating {
  display: flex;
  cursor: pointer;
  position: fixed;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: calc((100% - 161px) / 2 + 40%);
  right: 1%;
  background-color: #fff;
}
.floating > i {
  display: flex;
  margin: auto;
  font-size: 3em;
  color: #606266;
  transition: color 0.5s ease-in;
}
.floating > i:hover {
  color: #409eff;
}
</style>