<script>
export default{
    data() {
        return {
            isMounted: false,
            itemRefs:{},
            widthProgressBar: 0,
            store: useAppStore(),
            };
    },
    async setup(){
        let store = useAppStore(); 
        const { data } = await useFetch('/api/stages');
        store.arrayData = data;
    },
    computed:{
        progressBar(){

            if(this.isMounted == false)return 0

            let container = this.$refs.container;

            let mainContainerRect = container.getBoundingClientRect();


            let widthBar = 0

            for (const stage of this.store.arrayData.stages) {
                
                let stageContainer = this.itemRefs[stage.id];

                let prevStageContainer = this.itemRefs[stage.id-1];
                let stageContainerRect = stageContainer.getBoundingClientRect();
                let prevContainerRect = prevStageContainer?.getBoundingClientRect();

            

                let stageCenter = stageContainerRect.x + stageContainerRect.width / (stage.id == this.store.arrayData.stages[this.store.arrayData.stages.length - 1].id ? 1 : 2);
                let prevCenter = prevContainerRect ? prevContainerRect.x + prevContainerRect.width / 2 : stageContainerRect.x;

                let stageWidth = stageCenter - prevCenter;

                if(this.store.allPoints >= stage.thresholdPoints){
                    widthBar += stageWidth;
                }else{
                    let prevStage = this.store.arrayData.stages.find((el)=>{
                        return el.id == stage.id - 1
                    });
                    let prevPoints = prevStage?.thresholdPoints ?? 0;

                    let delta = stage.thresholdPoints - prevPoints;
                    let recruited = Math.max(this.store.allPoints - prevPoints, 0);

                    let progress = recruited / delta;
                    widthBar += stageWidth*progress;

                }
            }
            return (widthBar/mainContainerRect.width)*100;

        },
    },
    methods: {
        setItemRef(el, id) {
            if (el) {
                this.itemRefs[id] = el.$el;
            }
        }
    },
    mounted(){
        this.isMounted = true;
    }
}

</script>
<template>
    <div class="progress-bar relative flex justify-between items-center mb-32">
            <progress-item v-for="stage in store.arrayData.stages" 
                :key= "stage.id"
                :stage = "stage"
                :ref = "(el)=>{setItemRef(el, stage.id)}"
                />

        <div class="container-item-bg" ref="container">
            <div class="progress" ref="progress"
            :style="{width: progressBar + '%'}"/>
        </div>   
    </div>
    <div class="control flex flex-col">
        <h3 class=" text-lg mb-2">Общее количество очков: {{ store.allPoints }}</h3>
        <control-item v-for="stage in store.arrayData.stages"
        :key= "stage.id"
        :stage = "stage"/>
    </div>
</template>
<style>
.progress-bar{
    position: relative;
    width: 900px;
    height: 40px;
    background-color: var(--white-grey);
    border-radius: 30px;
}
.progress-bar::before{
   content: "0";
   position: absolute;
   left: 5px;
   bottom: 0;
   transform: translateY(35px);
}

.container-item-bg{
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    overflow: hidden;
}
.progress{
    --width: 10px;
    width: var(--width);
    height: 100%;
    background-color: var(--blue);
}
</style>