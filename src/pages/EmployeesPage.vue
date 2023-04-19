<template>
  <div class="main">
    <div class="main__title">Сотрудники</div>
    <div class="list__item" @click="redirect">
      Петров Игорь Васильевич
    </div>
    <div class="list__item" @click="redirect">
      Иванов Иван Иванович
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
setup() {
  const router = useRouter();

  const redirect = () => {
    router.push("/employee");
  }

  return {
    redirect
  }
}
}
</script>

<style scoped>
.main {
  width: 1140px;
  margin: 0 auto;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

}
.main__title {
  font-size: 40px;
  margin: 30px 0;
  font-weight: 700;
}
.list__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 10px 20px;
  margin-right: 20px;
  cursor: pointer;
  transition: .2s;
  margin-bottom: 10px;
}
.list__item:hover {
  transform: scale(1.05);
}
</style>