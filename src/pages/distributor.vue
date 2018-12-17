<template>
  <div>
    <div class="item">
      <div class="list">
        <div class="row">
          <div class="pull-left">经销商名称</div>
          <div class="pull-right">厦门XX公司</div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="pull-left">联系电话</div>
          <div class="pull-right">
            <div class="pull-left phone">
              <img src="../assets/img/phone.png">
            </div>
            <div class="pull-left idnum">15585965896</div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="pull-left">经销商编号</div>
          <div class="pull-right">3555</div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="pull-left">市运营中心信息</div>
          <div class="pull-right">NO</div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="pull-left">地址</div>
          <div class="pull-right">厦门市集美区软件园三期</div>
        </div>
      </div>
      <div class="list">
        <div class="row">
          <div class="pull-left">客服电话</div>
          <div class="pull-right">
            <div class="pull-left phone">
              <img src="../assets/img/phone.png">
            </div>
            <div class="pull-left idnum">12365121511</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "distributor"
};
</script>
<style scoped="">
.item {
  width: 100%;
}

.pull-left {
  float: left !important;
}

.pull-right {
  float: right !important;
}

.list {
  width: 100%;
  height: 1.3rem;
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 1.3rem;
  border-bottom: 1px solid #e6e6e6;
}

.row {
  width: 90%;
  margin: 0 auto;
}

.phone {
  width: 0.36rem;
  height: 0.36rem;
  position: relative;
  top: 0.05rem;
  right: 0.3rem;
}

.phone img {
  width: 100%;
  height: 100%;
}

.idnum {
  font-size: 0.37rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(26, 173, 255, 1);
}
</style>
