<template>
    <div class="card-bg">
        <h1>Hello</h1>
        <ClientOnly>
            <canvas class="w-[100px]" ref="c"></canvas>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const c = ref<HTMLCanvasElement | null>(null)
const { data: applePrices, pending, error } = useApi('AAPL')

onMounted(async () => {
    const { default: Chart } = await import('chart.js/auto')

    new Chart(c.value!, {
        type: 'line',
        data: {
            labels: ['01.08', '02.08', '03.08', '04.08', '05.08', '06.08', '07.08', '08.08', '09.08', '10.08', '11.08', '12.08', '01.08', '02.08', '03.08', '04.08', '05.08', '06.08', '07.08', '08.08', '09.08', '10.08', '11.08', '12.08'],
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    })
})
</script>

<style scoped></style>