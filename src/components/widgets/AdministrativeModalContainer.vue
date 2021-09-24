<template>
    <div class="flex flex-row h-30rem">
        <div class="w-8 bg-light p-4 flex flex-column justify-content-center">
            <slot name="left" />
        </div>
        <div
            class="
                w-4
                bg-main
                p-4
                flex flex-column
                justify-content-center
                align-items-center
            "
        >
            <slot name="right" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdministrativeModalContainer',
}
</script>
