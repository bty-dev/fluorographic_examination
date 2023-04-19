<template>
  <div class="main">
    <div class="wrapper">
      <div class="page__title">
        Уведомления
      </div>
      <div class="list">
        <div class="list__item" v-for="notification of notifications">
          <div class="item__title">Флюрография</div>
          <button class="item__btn">Перейти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "vue";

export default {
setup() {
  const notifications = reactive([
    {id: 1, title: "Флюрография"},
    {id: 2, title: "Флюрография"},
    {id: 3, title: "Флюрография"},
    {id: 4, title: "Флюрография"},
    {id: 5, title: "Флюрография"},
    {id: 6, title: "Флюрография"},
    {id: 7, title: "Флюрография"},
  ]);


  return {
    notifications
  }
}
}
</script>

<style scoped>
.main {
  height: 95vh;
  width: 100%;
}
.wrapper {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #000;
  padding: 20px 30px;
  margin-bottom: 20px;
}
.item__title {
  font-weight: 700;
  font-size: 20px;
}
.page__title {
  font-size: 40px;
  margin: 30px 0;
  font-weight: 700;
}
.item__btn {
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  border: 2px solid #000;
  padding: 10px 15px;
  cursor: pointer;
  transition: .2s;
}
.item__btn:hover {
  background-color: #fff;
  color: #000;
}
</style>