<template>
  <div class="app 
                flex flex-col items-center justify-start">
    <div class="app-grid 
                  flex flex-col items-center justify-start">
      <div class="wrapper 
                    w-full mt-40
                    flex flex-col items-center justify-start">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style>
.app{
  width: 100vw;
  height: 100vh;
  background-color: #d3d3d3;
  font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  overflow-x: hidden;
}
.app-grid{
  width: 100%;
  max-width: 1440px;
  margin: 0 30px;
  height: fit-content;
  background-color: transparent;
}
</style>