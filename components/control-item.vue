<script>
export default{
    props:{
        stage: Object
    },
    data() {
        return {
            store: useAppStore(),
            };
    },
}
</script>
<template>
    <div class="flex flex-col mb-5">
        <div class="mb-2" v-for="game in stage.games"
            :key= "game.name">
            <p class="mr-2">
                {{ game.name }}
            </p>
            <div class="flex">
                <p class="mr-2">Очков: </p>
                <input class="text-left px-2  focus:outline-none" type="number" min="0" v-model="game.bestResult"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
input{
    background: transparent;
}
</style>