<template>
  <div>{{ info }}</div>
</template>

<script>
// 不是default的时候用不用加{}  Uncaught TypeError: Object(...) is not a function
import { request } from "./network/request";
export default {
  name: "App",
  data() {
    return {
      info: "",
    };
  },
  components: {},
  created() {
    // 回调函数的形式
    /*  request(
      { url: "/home/multidata" },
      (res) => {
        console.log(res);
        this.info = res;
      },
      (err) => console.log(err)
    ) */
    // promise对象的形式
    request({ url: "/home/multidata" })
      .then((result) => {console.log(result);this.info=result})
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>
