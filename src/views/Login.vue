<template>
    <div
        class="
            bg-light
            flex
            justify-content-center
            align-items-center
            w-full
            h-full
        "
    >
        <LoginContainer />
        <SideBlue />
    </div>
</template>

<script>
import LoginContainer from "@/components/widgets/LoginContainer.vue"
import SideBlue from "@/components/widgets/SideBlue.vue"

export default {
    components: {
        LoginContainer,
        SideBlue,
    },
}
</script>

<style></style>
