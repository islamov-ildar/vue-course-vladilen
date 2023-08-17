<script>
export default {
  name: "AppInput",
  props: {
    modelValue: String,
    error: {
      type: String,
    },
    label: String,
    placeholder: String,
  },
  data(){
    return {
      id: 'input-' + Math.random(),
    }
  },
  methods: {
    change(event){
      console.log('change');
      this.$emit('update:modelValue', event.target.value);
    }
  },
  emits: ['update:modelValue']
}
</script>

<template>
  <div class="form-control">
    <label for="name">{{ label }}</label>
    <input type="text" :value="modelValue" @input="change" :id="id" :placeholder="placeholder" :class="{invalid: error}">
    <small style="color: red">{{ error }}</small>
  </div>
</template>

<style scoped>
.invalid {
  border-color: red;
}
</style>
