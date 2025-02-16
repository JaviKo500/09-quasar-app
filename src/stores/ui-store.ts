import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
   state: () => ({
      isLeftDrawerOpen: false,
   }),
   actions: {
      toggleLeftDrawer() {
         this.isLeftDrawerOpen = !this.isLeftDrawerOpen;
      },
   },
});