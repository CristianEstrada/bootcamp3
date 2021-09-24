<template>
    <administrative-modal-container>
        <template v-slot:left>
            <div class="p-field">
                <label>Nombre</label>
                <InputText v-model="form.video" placeholder="Ej. Categoría 1" />
            </div>
            <div class="p-field">
                <label>Descripción</label>
                <Textarea
                    v-model="form.description"
                    placeholder="Ej. 'Míster' a través del arte y el trabajo duro ha transformado su vida e inspirado a sus amigos."
                />
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
                    >Nueva categoría</span
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
    name: 'AddCategory',
    data() {
        return {
            form: {
                name: '',
                description: '',
            },
        }
    },
    emits: ['onClose'],
}
</script>

<style></style>
