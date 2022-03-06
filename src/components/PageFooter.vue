<template>
    <footer
        class="flex flex-col flex-shrink-0 w-full gap-2 px-6 py-4 lg:flex-row lg:justify-between"
    >
        <p class="text-sm text-gray-500 dark:text-gray-400">
            &#169;
            <span>{{ new Date().getFullYear() }}</span> Portal Aleph, All rights reserved
        </p>
    </footer>
</template>

<script setup>
import { HeartIcon } from '@heroicons/vue/solid'
</script>
