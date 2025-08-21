<template>
    <section class="flex gap-[24px] p-[24px] rounded-[20px]">
        <LandingCompanyCard class="flex-1" v-for="company in companies" :key="company.name" :company="company" />
    </section>
</template>

<script setup>
let companies = [
    {
        name: 'Apple',
        image: '/Apple.png',
        price: 172.45,
        change: 2.34,
        changePercent: 1.38
    },
    {
        name: 'Meta',
        image: '/Meta.png',
        price: 312.67,
        change: -4.12,
        changePercent: -1.30
    },
    {
        name: 'Microsoft',
        image: '/Microsoft.png',
        price: 289.54,
        change: 5.21,
        changePercent: 1.83
    },
    {
        name: 'Google',
        image: '/Google.png',
        price: 138.92,
        change: 0.87,
        changePercent: 0.63
    },
    {
        name: 'Amazon',
        image: '/Amazon.png',
        price: 124.38,
        change: -1.45,
        changePercent: -1.15
    },
    {
        name: 'Tesla',
        image: '/Tesla.png',
        price: 709.32,
        change: 12.76,
        changePercent: 1.83
    }
]
</script>


<style scoped>
section {
    background: #023A6233;
    overflow: hidden;
}
</style>