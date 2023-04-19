<template>
  <div class="main">
    <div class="wrapper">
      <div class="personal__info">
        <div class="info__title">
          Личные данные <b>Петрова Игоря Васильевича</b>
        </div>
        <div class="info__list">
          <div class="list__item" v-for="item of personalInfo">
            <div class="item__title">{{item.title}}</div>
            <div class="item__value">{{item.value}}</div>
          </div>
        </div>
      </div>
      <div class="records">
        <div class="records__title">
          Записи
        </div>
        <div class="add__btn">
          Добавить запись +
        </div>
        <div class="records__list">
          <div class="records__item" v-for="record of records">
            <div class="records__item__title">Запись от: {{record.title}}</div>
            <button class="records__item__btn">Редактировать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
setup() {
  const personalInfo = reactive([
    {id: 1, title: "табельный номер", value: "12312312"},
    {id: 2, title: "ФИО", value: "Петров Игорь Валерьевич"},
    {id: 3, title: "Дата рождения", value: "17.07.1973"},
    {id: 4, title: "Адрес проживания", value: "Москва, ул. Переселенцев"},
  ]);
  const records = reactive([
    {id: 1, title: "17.07.2023"},
    {id: 2, title: "17.07.2023"},
    {id: 3, title: "17.07.2023"},
    {id: 4, title: "17.07.2023"},
  ]);

  return {
    personalInfo,
    records
  }
}
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 95vh;
}
.wrapper {
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.personal__info {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.info__title {
  font-size: 40px;
  margin: 30px 0;
}
.info__list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.list__item {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 10px 20px;
  margin-right: 20px;
}
.item__title {
  font-size: 20px;
  font-weight: 700;
}
.item__value {
  font-size: 30px;
}
.records {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.records__title {
  font-size: 30px;
  margin: 20px 0;
  font-weight: 700;
}
.add__btn {
  width: 100%;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
  font-size: 20px;
  transition: .3s;
  cursor: pointer;
}
.add__btn:hover {
  background-color: #fff;
  color: #000;
}
.records__list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.records__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #000;
  padding: 20px 30px;
  margin-bottom: 20px;
  margin-top: 5px;
}
.records__item__btn {
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
.records__item__btn:hover {
  background-color: #fff;
  color: #000;
}
</style>