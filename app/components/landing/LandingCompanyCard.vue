<template>
    <div class="p-[24px] rounded-[16px] shadow-md gap-[8px] flex flex-col ">
        <h1 class="flex items-center text-xl gap-[8px] font-bold"><img :src="company.image" alt="Company Icon"
                class="w-[20px] h-[20px]">{{ company.name }}</h1>
        <p class="text-base">Revenue Q1 2024</p>
        <div class="flex gap-[8px] justify-start items-center">
            <p class="text-3xl font-medium">{{ company.price }}</p>
            <div>
                <p class="flex text-base font-medium items-center gap-[4px]"
                    :class="company.change > 0 ? 'text-green-400' : 'text-red-500'">{{ company.change }}
                    <ArrowUpIcon v-if="company.change > 0" class="size-5 w-6 stroke-green-500" />
                    <ArrowDownIcon v-else class="size-5 w-6 stroke-red-500" />
                </p>
                <p class="flex text-base font-medium items-center gap-[4px]"
                    :class="company.changePercent > 0 ? 'text-green-400' : 'text-red-500'">{{ company.changePercent }}
                    <PercentBadgeIcon class="size-5 w-6" :class="company.change > 0 ? 'stroke-green-400' : 'stroke-red-500'" />
                </p>
            </div>
        </div>
        <p class="text-sm">In Bill USD</p>
    </div>
</template>

<script setup>
import { ArrowUpIcon } from '@heroicons/vue/24/outline'
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
import { PercentBadgeIcon } from '@heroicons/vue/24/outline'

defineProps({
    company: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
div {
    background: #011F35;
}
</style>
