<template>
    <div
        class="bg-light flex flex-column justify-content-center mx-6 w-4 h-full"
    >
        <div class="flex justify-content-center mb-3">
            <img
                class="h-8rem"
                src="@/assets/images/city-voices-original.svg"
            />
        </div>
        <div class="p-grid p-d-flex p-flex-column p-fluid mt-4">
            <div class="p-inputgroup">
                <InputText
                    v-model="form.user"
                    class="mt-3"
                    placeholder="Usuario"
                />
            </div>
            <div class="p-inputgroup">
                <Password
                    v-model="form.password"
                    class="mt-3"
                    placeholder="Contraseña"
                >
                    <template #header>
                        <h6>Escoge una contraseña</h6>
                    </template>
                    <template #content> </template>
                    <template #footer>
                        <Divider />
                        <p class="p-mt-2">Sugerencias</p>
                        <ul
                            class="p-pl-2 p-ml-2 p-mt-0"
                            style="line-height: 1.5"
                        >
                            <li>Almenos una minuscula</li>
                            <li>Almenos una mayuscula</li>
                            <li>Almenos un numero</li>
                            <li>Minimo 8 caracteres</li>
                        </ul>
                    </template>
                </Password>
            </div>
            <Button class="main-btn mt-3" label="Iniciar sesion" />
            <div
                class="
                    mt-3
                    montserrat
                    flex
                    justify-content-center
                    align-items-center
                "
            >
                <span>¿No tienes cuenta?</span>
                <router-link class="text-main ml-3" to="/Register">
                    Registrate
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginContainer',
    data() {
        return {
            form: {
                user: '',
                password: '',
            },
        }
    },
}
</script>
