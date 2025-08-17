<template>
    <div class="layout">
        <AppHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped> 
.layout {
    background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
    min-height: 100vh;
    padding: 40px 0 40px 0;
}

main {
  flex: 1;
}
</style>