<template>
  <div>
    <header></header>
    <main>
      <div class="item">
        <div class="list">
          <div class="row">
            <div class="log">
              <img src="../assets/img/cz.png">
            </div>
            <div class="info">
              <p class="ml">980元 3500升（0.28元/升）</p>
              <p class="money">￥980.00</p>
            </div>
          </div>
        </div>
        <div class="list" style="border:1px solid rgba(26, 173, 255, 1);">
          <div class="row">
            <div class="log">
              <img src="../assets/img/cz.png">
            </div>
            <div class="info">
              <p class="ml">980元 3500升（0.28元/升）</p>
              <p class="money">￥980.00</p>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="row">
            <div class="log">
              <img src="../assets/img/cz.png">
            </div>
            <div class="info">
              <p class="ml">980元 3500升（0.28元/升）</p>
              <p class="money">￥980.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button>立即支付</button>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped="">
body {
  margin: 0 auto;
  padding: 0;
  background: #f9f9f9;
  width: 100%;
  height: 100%;
  position: absolute;
}

.log {
  float: left;
  width: 2.39rem;
  height: 1.72rem;
}

.log img {
  width: 100%;
}

.info {
  float: left;
  margin-left: 0.4rem;
}

.item {
  width: 90%;
  margin: 0 auto;
}

.list {
  width: 9.19rem;
  margin: 0 auto;
  background-color: white;
  height: 2.6rem;
  background: rgba(255, 255, 255, 1);
  border: 0.01px solid rgba(26, 173, 255, 1);
  border-radius: 0rem;
  padding-top: 0.8rem;
  border-radius: 0.133333rem;
  margin-top: 0.5rem;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.info p {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(36, 37, 38, 1);
}

.ml {
  padding-bottom: 0.7rem;
}

.money {
  font-size: 0.44rem !important;
  font-weight: 500 !important;
  color: #ff5555 !important;
}

.btn {
  width: 8.56rem;
  height: 1.19rem;
  margin: 0 auto;
  margin-top: 0.8rem;
}

.btn button {
  border: none;
  outline: none;
  width: 8.56rem;
  height: 1.19rem;
  background: rgba(26, 173, 255, 1);
  font-size: 0.39rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(249, 249, 249, 1);
  border-radius: 0.04rem;
}
</style>
