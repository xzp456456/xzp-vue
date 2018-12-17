<template>
  <div>
    <div class="main">
      <div class="item">
        <div class="list">
          <p class="listOne">转换在哪里？开启开关在哪里</p>
          <p class="listTwo">2018-11-01 12:12:16</p>
        </div>
        <div class="list">
          <p class="listOne">加载速度慢</p>
          <p class="listTwo">2018-11-01 12:12:16</p>
        </div>
      </div>
    </div>
    <div class="btn">
      <button>添加意见反馈</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped="">
.list {
  height: 1.8rem;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
}

.list p {
  width: 90%;
  margin: 0 auto;
}

.listOne {
  font-size: 0.35rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  padding-top: 0.35rem;
  padding-bottom: 0.2rem;
}

.listTwo {
  font-size: 0.32rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(121, 121, 121, 1);
}

.btn {
  width: 8.56rem;
  height: 1.18rem;
  margin: 0 auto;
}

.btn button {
  width: 8.56rem;
  height: 1.18rem;
  background: rgba(26, 173, 255, 1);
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  outline: none;
  border: none;
  border-radius: 0.066666rem;
  margin-top: 1rem;
}
</style>
