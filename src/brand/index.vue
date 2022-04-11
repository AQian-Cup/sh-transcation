<template>
  <div>
    <top></top>
    <div class="other">
      <img src="./logo.png" class="logo" @click="reload" />
      <input
        v-model="input"
        placeholder="在此处输入搜索内容"
        @keydown.enter="goSearch"
        class="input"
      />
      <button @click="goSearch" class="buttonSearch">搜&nbsp;&nbsp;索</button>
    </div>
    <router-view :searchRes="searchRes"></router-view>
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
        <el-form-item label="商品名称">
          <el-input
            v-model="form.name"
            maxlength="15"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            action="http://82.157.131.115:8080/prepare_ZS/invimg.do"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="需求展示">
          <el-radio-group v-model="form.choice">
            <el-radio label="买"></el-radio>
            <el-radio label="卖"></el-radio>
          </el-radio-group>
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
import top from "./top";

export default {
  name: "brand",
  data() {
    return {
      input: "",
      account: "",
      dialogImageUrl:"",
      dialogVisible:false,
      dialogFormVisible: false,
      form: {
        title: "",
        name: "",
        choice: "",
        content: "",
        keyword: "",
      },
      searchRes: {},
    };
  },
  components: {
    top,
  },
  methods: {
    async reload() {
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
        Name: this.form.name,
        Choice: this.form.choice,
        Account: this.account,
        Title: this.form.title,
        Content: this.form.content,
        keyword: this.form.keyword,
      };
      await this.$API.update.update(req);
      Object.keys(this.form).map((key) => (this.form[key] = ""));
      this.dialogFormVisible = false;
    },
    async goSearch() {
      if (this.input == "") {
        this.$message("请输入搜索内容");
        return;
      }
      let req = {
        Content: this.input,
      };
      this.input = "";
      this.$router.push({
        path:"/",
        query:{
          search:req.Content
        }
      })
      this.searchRes = await this.$API.search.search(req);
    },
  },
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  width: 280px;
  height: 100px;
}
.other {
  display: flex;
  align-items: center;
}
.input {
  border: 1px solid rgba(128, 128, 128, 0.5);
  -webkit-appearance: none;
  outline: none;
  margin-left: 274px;
  padding-left: 18px;
  width: 600px;
  height: 40px;
  border-radius: 25px;
  font-size: 25px;
}
.buttonSearch {
  border-radius: 26px;
  margin-left: 56px;
  width: 120px;
  height: 40px;
  background-color: rgba(255, 217, 0);
  font-size: 25px;
  color: white;
}
</style>