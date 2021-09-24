<template>
    <div
        class="
            flex flex-column
            justify-content-between
            h-full
            w-full
            bg-light
            pt-5
        "
    >
        <h2 class="px-5 my-3 text-main quicksand font-bold">
            {{ breadcrumb }}
        </h2>
        <div class="w-full h-4rem px-5 flex flex-wrap md:flex-nowrap">
            <slot name="search" />
        </div>
        <div class="h-full px-5 my-4">
            <slot name="content" />
        </div>
        <administrative-navbar />
    </div>
</template>

<script>
import AdministrativeNavbar from '@/components/navigation/administrativeNavbar.vue'
export default {
    name: 'MainContainer',
    components: {
        AdministrativeNavbar,
    },
    computed: {
        breadcrumb() {
            return this.$route.meta.display
        },
    },
}
</script>
