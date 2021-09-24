<template>
    <div
        class="
            h-4rem
            w-full
            bg-main
            flex flex-row
            justify-content-between
            align-items-center
            p-5
        "
    >
        <img class="h-3rem" src="@/assets/images/city-voices.svg" />
        <div class="flex flex-row justify-content-between w-12rem">
            <router-link to="/administracion/videos"
                ><img class="h-2rem" src="@/assets/icons/video.svg"
            /></router-link>
            <router-link to="/administracion/categorias"
                ><img class="h-2rem" src="@/assets/icons/categories.svg"
            /></router-link>
            <router-link to="/administracion/usuarios"
                ><img class="h-2rem" src="@/assets/icons/user.svg"
            /></router-link>
        </div>
        <div>
            <img class="h-2rem" src="@/assets/icons/user-circle.svg" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdministrativeNavbar',
}
</script>
