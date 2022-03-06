<template>
    <div class="flex items-center justify-between flex-shrink-0 px-3">
        <router-link :to="{ name: 'Dashboard' }" class="inline-flex items-center gap-2">
            <LogoDark v-show="isDark" aria-hidden="true" class="w-10 h-auto" />
            <LogoLight v-show="!isDark" aria-hidden="true" class="w-10 h-auto" />
            <span 
            v-show="sidebarState.isOpen || sidebarState.isHovered">Portal Aleph</span>
        </router-link>

       
    </div>
</template>

<script setup>
import LogoLight from '@/components/LogoLight.vue'
import LogoDark from '@/components/LogoDark.vue'
import Button from '@/components/Button.vue'
import { MenuFoldLineLeftIcon, MenuFoldLineRightIcon } from '@/components/icons/outline'
import { XIcon } from '@heroicons/vue/outline'
import {
    isDark,
    sidebarState,
} from '@/composables'
</script>
