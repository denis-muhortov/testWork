import { defineStore } from 'pinia'

export const useAppStore = defineStore('apartvil', {

  state: () => {
    return {
      user:{
        userRights: "" /*user admin tenant*/
      }
    }
  },
  getters: {

  },
  actions: {
    
  },
})


/* <script setup>
    import { useStore } from '~/stores/store.js'
    const store = useStore()

</script> */

// if (import.meta.hot) {
//     import.meta.hot.accept(definePiniaStore(useStore, import.meta.hot))
// }