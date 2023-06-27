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
    <div class="flex flex-col justify-start items-start">
        <block-progress-player/>
    </div>
</template>



<style scoped>

</style>