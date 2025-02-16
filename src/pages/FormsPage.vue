<template>
  <q-page class="q-ma-md">
    <span class="text-h4">Forms</span>
    <q-separator />
    <div class="row q-mt-md justify-center">
      <div class="col-sm-12 col-xs-12 col-md-6">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="userForm.email" label="Your email *" hint="Enter your email" lazy-rules type="email"
            :rules="[
              val => val && val.length > 0 || 'Email is required',
              isValidEmail,
            ]" no-error-icon />

          <q-input filled type="password" v-model="userForm.password" label="Enter password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your password',
          ]" no-error-icon />
          <q-input filled type="password" v-model="userForm.confirmPassword" label="Repeat password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please repeat your password',
            val => val === userForm.password || 'Passwords are not the same',
          ]" no-error-icon />

          <q-checkbox v-model="userForm.conditions" label="I accept the license and terms" :class="[
            userForm.errorInConditions && !userForm.conditions ? 'text-red' : '',
          ]" />
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const userForm = ref({
  email: null,
  password: null,
  confirmPassword: null,
  conditions: false,
  errorInConditions: false,
});
const onSubmit = () => {
  console.log('<--------------- JK FormsPage --------------->');
  console.log('userForm.value', userForm.value);
  if (userForm.value.conditions !== true) {
    console.log('<--------------- JK FormsPage --------------->');
    console.log('not accepted');
    userForm.value.errorInConditions = true;
  } else {
    console.log('<--------------- JK FormsPage --------------->');
    console.log('accepted');
  }
};

const onReset = () => {
  userForm.value = {
    email: null,
    password: null,
    confirmPassword: null,
    conditions: false,
    errorInConditions: false,
  }
}

const isValidEmail = (val: string) => {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || 'Email is invalid';
}
</script>
