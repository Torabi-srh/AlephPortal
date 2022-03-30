<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
        >
            <template #icon>
                <DashboardIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        
        <span class="text-gray-500 text-xs"
            v-show="sidebarState.isOpen || sidebarState.isHovered">CONTENT</span>
        <SidebarLink
            title="Posts"
            :to="{ name: 'Posts' }"
            :active="isCurrentRoute('Posts')"
        >
            <template #icon>
                <PostsIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>
        <SidebarLink
            title="Categories"
            :to="{ name: 'Categories' }"
            :active="isCurrentRoute('Categories')"
        >
            <template #icon>
                <CategoriesIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        <SidebarLink
            title="Media"
            :to="{ name: 'Media' }"
            :active="isCurrentRoute('Media')"
        >
            <template #icon>
                <MediaIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        <SidebarLink
            title="Pages"
            :to="{ name: 'Pages' }"
            :active="isCurrentRoute('Pages')"
        >
            <template #icon>
                <PagesIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        <SidebarLink
            title="Comments"
            :to="{ name: 'Comments' }"
            :active="isCurrentRoute('Comments')"
        >
            <template #icon>
                <CommentsIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>
        
        <span class="text-gray-500 text-xs" 
            v-show="sidebarState.isOpen || sidebarState.isHovered">SYSTEM</span>
        <SidebarLink
            title="Appearance"
            :to="{ name: 'Appearance' }"
            :active="isCurrentRoute('Appearance')"
        >
            <template #icon>
                <AppearanceIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>
        <SidebarLink
            title="Localization"
            :to="{ name: 'Localization' }"
            :active="isCurrentRoute('Localization')"
        >
            <template #icon>
                <LocalizationIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        <SidebarLink
            title="Extentions"
            :to="{ name: 'Extentions' }"
            :active="isCurrentRoute('Extentions')"
        >
            <template #icon>
                <ExtentionsIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        <SidebarLink
            title="Users"
            :to="{ name: 'Users' }"
            :active="isCurrentRoute('Users')"
        >
            <template #icon>
                <UsersIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink> 
        <SidebarLink
            title="Settings"
            :to="{ name: 'Settings' }"
            :active="isCurrentRoute('Settings')"
        >
            <template #icon>
                <SettingsIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
            </template>
        </SidebarLink>
    </PerfrectScrollbar>
</template>

<script >
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/PerfectScrollbar.vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import { DashboardIcon, 
         PostsIcon, 
         CategoriesIcon, 
         MediaIcon, 
         PagesIcon,
         CommentsIcon,
         AppearanceIcon,
         ExtentionsIcon,
         UsersIcon,
         SettingsIcon, 
         LocalizationIcon,
        } from '@/components/icons/outline'
import { ShieldCheckIcon, DocumentIcon } from '@heroicons/vue/outline'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem.vue'
import { sidebarState } from '@/composables'

const isCurrentRoute = (routeName) => {
    return useRouter().currentRoute.value.name == routeName
}

const isCurrentPath = (path) => {
    return useRouter().currentRoute.value.path.startsWith(path)
}
</script>
