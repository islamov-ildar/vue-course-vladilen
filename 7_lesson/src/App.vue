<template>
  <div class="container">
    <form class="card" @submit.prevent="runSubmit">
      <h1>Анкета на Vue разработчика!</h1>
      <AppInput label="Name" placeholder="Input your name" :error="errors.name" v-model="name"/>
<!--      <div class="form-control">-->
<!--        <label for="name">Как тебя зовут?</label>-->
<!--        <input type="text" id="name" placeholder="Введи имя" v-model.trim="name" :class="{invalid: errors.name}">-->
<!--        <small style="color: red">{{ errors.name }}</small>-->
<!--      </div>-->

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" v-model.number="age">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vuex" /> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vue-cli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vue-router"/> Vue Router</label>
        </div>
      </div>
      <div class="form-checkbox">
        <span class="label">Company rules</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" /> I Agree</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "@/AppInput.vue";
  export default {
    components: { AppInput },
    data(){
      return{
        name: '',
        age: 23,
        city: 'kzn',
        relocate: null,
        skills: [],
        agree: null,
        errors: {
          name: null,
        }
      }
    },
    methods: {
      formIsValid() {
        let isValid = true;

        if(!this.name.length) {
          isValid = false;
          this.errors.name = 'Required field'
        } else {
          this.errors.name = null
          isValid = true;
        }

        return isValid
      },
      runSubmit() {
        if(this.formIsValid())
        console.log('runSubmit', this.name, this.age, this.city, 'To Tokio:', this.relocate, 'Skills:', this.skills, 'Agree:', this.agree)
      }
    }
  }
</script>

<style scoped>
.invalid {
  border-color: red;
}
</style>
