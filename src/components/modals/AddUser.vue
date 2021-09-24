<template>
    <administrative-modal-container>
        <template v-slot:left>
            <div class="formgrid grid">
                <div class="p-field field col-12 md:col-6">
                    <label>Nombre</label>
                    <InputText
                        type="text"
                        v-model="form.name"
                        placeholder="Ej. Luis'"
                    />
                </div>
                <div class="p-field field col-12 md:col-6">
                    <label>Apellido</label>
                    <InputText
                        v-model="form.lastname"
                        placeholder="Ej. Vélez"
                    />
                </div>
            </div>
            <div class="p-field">
                <label>Correo</label>
                <InputText
                    v-model="form.email"
                    placeholder="Ej. luis.velez@historias.com"
                />
            </div>
            <div class="p-field">
                <label>Tipo de usuario</label>
                <InputText v-model="form.usertype" placeholder="Ej. Editor" />
            </div>

            <div
                class="
                    bg-white
                    border-round
                    mt-4
                    flex flex-row
                    align-items-center
                    justify-content-between
                "
            >
                <img
                    src="@/assets/icons/user-circle-color.svg"
                    class="h-4rem mx-5"
                />
                <div class="flex flex-column p-5">
                    <div class="flex flex-row justify-content-between">
                        <span class="mr-5 font-bold">Usuario</span>
                        <span>luis.velez</span>
                    </div>
                    <div class="flex flex-row justify-content-between">
                        <span class="mr-5 font-bold">Contraseña</span>
                        <span>12345ABcd$</span>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:right>
            <Button
                icon="pi pi-times"
                class="
                    absolute
                    top-0
                    right-0
                    p-button-rounded p-button-outlined p-button-text
                    text-white
                "
                @click="$emit('onClose')"
            />
            <div class="flex flex-column align-items-center">
                <span
                    class="quicksand text-white text-3xl font-bold text-center"
                    >Nuevo usuario</span
                >
                <Button class="main-btn my-2" label="Guardar" />
            </div>
        </template>
    </administrative-modal-container>
</template>

<script>
import AdministrativeModalContainer from '../widgets/AdministrativeModalContainer.vue'
export default {
    components: { AdministrativeModalContainer },
    name: 'AddVideo',
    data() {
        return {
            form: {
                name: '',
                lastname: '',
                email: '',
                type: '',
            },
        }
    },
    emits: ['onClose'],
}
</script>

<style></style>
