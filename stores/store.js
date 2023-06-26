
import { defineStore } from 'pinia'

export const useAppStore = defineStore('store', {

  state: () => {
    return {
      arrayData: {},
    }
  },
  getters: {
    allPoints(state){
      let points = 0;
      for (const stage of state.arrayData.stages) {
        for (const game of stage.games) {
          points += game.bestResult
        }
      }
      return points
    },
  },
  actions: {
   
  },
  
})
