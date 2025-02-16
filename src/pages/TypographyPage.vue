<template>
   <q-page class="flex column q-pa-md">
      <span class="text-h1">Headline 1</span>
      <span class="text-h2">Headline 2</span>
      <span class="text-h3">Headline 3</span>
      <span class="text-h4">Headline 4</span>
      <span class="text-h5">Headline 5</span>
      <span class="text-h6">Headline 6</span>
      <q-separator/>
      <span class="text-subtitle1">Subtitle 1</span>
      <span class="text-subtitle2">Subtitle 2</span>
      <q-separator/>
      <p class="text-body1">Esse occaecat nulla magna dolore ad consequat ad veniam commodo occaecat quis adipisicing. Officia mollit ipsum excepteur adipisicing dolore incididunt tempor irure aliqua voluptate eiusmod dolore et nisi. Aliqua veniam laboris amet eiusmod sit. Sit duis est nostrud pariatur consectetur non dolor exercitation id adipisicing. Amet ad aute magna qui aliqua irure commodo irure. Sit ullamco aliquip do do fugiat aliquip. Anim irure nisi laborum consequat adipisicing Lorem consequat ipsum voluptate.</p>
      <p class="text-body2">Commodo velit veniam culpa sunt qui anim qui culpa ad ad laborum. Duis consectetur eu consequat excepteur nisi labore. In culpa ea ad id pariatur eu culpa officia irure enim aliqua eiusmod ipsum. Minim dolore reprehenderit aliqua magna nulla laborum esse.</p>
      <q-separator/>
      <span class="text-weight-thin">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
      <span class="text-weight-light">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
      <span class="text-weight-regular">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
      <span class="text-weight-medium">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
      <span class="text-weight-bold">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
      <span class="text-weight-bolder">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </span>
      <q-btn
         color="primary"
         :label=" uiStore.isLeftDrawerOpen ? 'Close side drawer' : 'Open side drawer' "
         class="q-mt-sm"
         @click="uiStore.toggleLeftDrawer"
      />
   </q-page>
</template>
<script setup lang="ts">
import { useUiStore } from '../stores/ui-store';
const uiStore = useUiStore();
</script>