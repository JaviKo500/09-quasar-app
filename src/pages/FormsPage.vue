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
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();


const userForm = ref({
  email: null,
  password: null,
  confirmPassword: null,
  conditions: false,
  errorInConditions: false,
});
const onSubmit = () => {
  if (userForm.value.conditions !== true) {
    userForm.value.errorInConditions = true;
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'las la-exclamation',
      message: 'You need to accept the license and terms first'
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'las la-check-circle',
      message: 'Submitted'
    });
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
