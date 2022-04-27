<template>
  <div class="main">
    <div class="menu">
      <navigationbar></navigationbar>
      <el-carousel height="475px">
        <el-carousel-item v-for="url of imgs" :key="url">
          <img :src="url" />
        </el-carousel-item>
      </el-carousel>
      <user></user>
    </div>
    <div class="show">
      <show
        v-for="item in this.$store.state.homePosts"
        :key="item.Pid"
        :title="item.Title"
        :content="item.Content"
        :time="item.Time"
        :author="item.Username"
        :pId="item.Pid"
        :img="item.Photo_name"
      ></show>
    </div>
    <div class="floating" @click="posting">
      <i class="el-icon-s-promotion"></i>
    </div>
    <el-dialog
      title="于此处撰写你的帖子"
      :visible.sync="dialogFormVisible"
      width="40%"
    >
      <el-form label-position="left" label-width="80px">
        <el-form-item label="帖子标题">
          <el-input
            v-model="form.title"
            maxlength="15"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            action="http://82.157.131.115:8080/prepare_ZS/invimg.do"
            list-type="picture-card"
            :headers="token"
            :on-preview="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="需求价格">
          <el-input
            v-model="form.price"
            maxlength="5"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="帖子内容">
          <el-input
            type="textarea"
            v-model="form.content"
            :rows="4"
            resize="none"
            maxlength="200"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input
            v-model="form.keyword"
            placeholder="最多三个，使用中文顿号分隔"
            maxlength="15"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </div></el-dialog
    >
  </div>
</template>

<script>
import navigationbar from "./navigationbar";
import show from "./show";
import user from "./user";

export default {
  name: "home",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        price: "",
        title: "",
        content: "",
        keyword: "",
      },
      imgs: {
        url1: require("./ad1.jpg"),
        url2: require("./ad2.jpg"),
        url3: require("./ad3.jpg"),
        url4: require("./ad4.jpg"),
      },
    };
  },
  components: {
    navigationbar,
    show,
    user,
  },
  methods: {
    posting() {
      this.dialogFormVisible = true;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    cancel() {
      Object.keys(this.form).map((key) => (this.form[key] = ""));
      this.dialogFormVisible = false;
    },
    async submit() {
      let req = {
        Price: this.form.price,
        Title: this.form.title,
        Content: this.form.content,
        Keyword: this.form.keyword,
      };
      let res = await this.$API.release.release(req);
      if (res.data.Success == "True") {
        Object.keys(this.form).map((key) => (this.form[key] = ""));
        this.dialogFormVisible = false;
        return this.$message({
          message: "发布成功",
          type: "success",
        });
      }
      if (res.data.Success == "False") {
        return this.$message.error("发布失败，请重试");
      }
    },
  },
  computed: {
    token() {
      return { Authorization: window.localStorage.getItem("token") };
    },
  },
  async mounted() {
    await this.$store.dispatch("show");
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.menu {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.el-carousel {
  width: 800px;
}
.show {
  display: flex;
  justify-content: center;
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