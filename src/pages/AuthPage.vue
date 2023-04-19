<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <h1 class="title">Авторизация</h1>

      <div class="form__control">
        <label for="login">Логин</label>
        <input maxlength="10" :class="{'inp': !valid}" v-model="login" type="text" id="login">
        <small v-if="!valid">Проверьте корректность данных!</small>
      </div>
      <div class="form__control">
        <label for="password">Пароль</label>
        <div style="position: relative; width: 100%">
          <input maxlength="16" :class="{'inp': !valid}" v-model="password" v-if="!passwordVisible" type="password" id="password">
        </div>
        <small v-if="!valid">Проверьте корректность данных!</small>
      </div>
      <button type="submit">Авторизоваться</button>
    </form>
  </div>
</template>
<script>
import {ref} from "vue";
import {useRouter} from "vue-router";


export default {
  setup() {
    const router = useRouter();
    const passwordVisible = ref(false);
    const login = ref("");
    const password = ref("");

    const valid = ref(true);

    function submit() {
      // store.dispatch('setAuth', true);
      if (login.value !== "" && password.value !== "") {
        valid.value = true;
        router.push("/notifications");
      }
      valid.value = false;

    }
    return {
      submit,
      passwordVisible,
      password,
      login,
      valid
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  background-color: #ffffff;
  width: 30%;
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #000
}
.title {
  margin-bottom: 30px;
}
.form__control {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
button {
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border: 2px solid white;
  padding: 10px 15px;
  cursor: pointer;
  width: 100%;
  transition: .2s;
}
button:hover {
  border-color: #000;
  color: #000;
  background-color: transparent;
}
.inp {
  border-color: red;
}
small {
  color: red;
}
</style>