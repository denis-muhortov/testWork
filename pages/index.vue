<script>
export default{
    data() {
    let store = useAppStore();
    return {
        store: store,
        arrayStages: store.stages
        };
    },
}

</script>
<template>
    <div class="flex flex-col justify-start">
        <block-progress-player class="mb-10"/>
    </div>
</template>



<style scoped>

</style>