<script>
export default{
    props:{
        stage: Object,
    },
    data() {
    return {
        store: useAppStore(),
        };
    },
    computed:{
        img(){
            return this.stage.thresholdPoints >= this.pointPlayer ? true : false
        },
    },
    
}

</script>
<template>
    <div class="progress-item relative w-full h-28 flex flex-col justify-between items-center z-10">
        <div class="section-point flex">
            <NuxtImg width="46" height="24" src="/img/star.svg" alt="star" v-if="img"/>
            <NuxtImg width="46" height="24" src="/img/star_enable.svg" alt="star" v-else/>
        </div>
        <div class="line flex bg-black w-px"/>
        <div class="section-point flex text-black">
            {{ Math.min(store.allPoints, stage.thresholdPoints) }} / {{ stage.thresholdPoints }}
        </div>
    </div>
</template>

<style scoped>
.progress-item:nth-last-child(-n+2) .line{
    opacity: 0;
}
.progress-item:nth-last-child(-n+2){
    align-items: end;
}
.progress-item:nth-last-child(-n+2) .section-point:last-child{
    transform: translateX(30%);
}
.line{
    height: 40px;
}
.section-point img{
    width: 46px;
    height: 24px;
}

</style>