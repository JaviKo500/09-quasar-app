<template>
  <q-page class="q-ma-md">
    <span class="text-h4">Forms</span>
    <q-separator />
    <div class="row q-mt-md justify-center">
      <div class="col-sm-12 col-xs-12 col-md-6">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="email" label="Your email *" hint="Enter your email" lazy-rules type="email"
            :rules="[val => val && val.length > 0 || 'Email is required']" no-error-icon />

          <q-input filled type="password" v-model="password" label="Enter password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your password',
          ]" no-error-icon />
          <q-input filled type="password" v-model="confirmPassword" label="Repeat password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please repeat your password',
          ]" no-error-icon />

          <q-toggle v-model="accept" label="I accept the license and terms" />

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

const $q = useQuasar()

const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
const accept = ref(false)

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'las la-exclamation',
      message: 'You need to accept the license and terms first'
    });
  }
  else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'las la-check-circle',
      message: 'Submitted'
    });
  }
};

const onReset = () => {
  email.value = null;
  password.value = null;
  confirmPassword.value = null;
  accept.value = false;
}
</script>
