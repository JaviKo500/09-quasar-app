<template>
  <q-item
    clickable
    tag="a"
    @click="navigateTo"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { type EssentialLinkProps } from 'src/router/lick-list';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});

const navigateTo = async () => {
  if ( props.link.startsWith('http') ) {
    return window.open(props.link, '_blank');
  }
  await router.push({name: props.link});
}

</script>
