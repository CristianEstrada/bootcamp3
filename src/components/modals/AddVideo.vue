<template>
    <administrative-modal-container>
        <template v-slot:left>
            <div class="p-field">
                <label>Nombre</label>
                <InputText
                    type="text"
                    v-model="form.name"
                    placeholder="Ej. 'Míster' Luis Vélez'"
                />
            </div>
            <div class="p-field">
                <label>Vídeo</label>
                <InputText
                    v-model="form.video"
                    placeholder="Ej. luisvelez.mp4"
                />
            </div>
            <div class="p-field">
                <label>Descripción</label>
                <Textarea
                    v-model="form.description"
                    placeholder="Ej. 'Míster' a través del arte y el trabajo duro ha transformado su vida e inspirado a sus amigos."
                />
            </div>
            <div class="p-field">
                <label>Categoría</label>
                <InputText
                    v-model="form.category"
                    placeholder="Ej. Categoría 1"
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
                <span class="quicksand text-white text-3xl font-bold"
                    >Nuevo vídeo</span
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
                video: '',
                description: '',
                image: '',
                category: '',
            },
        }
    },
    emits: ['onClose'],
}
</script>

<style></style>
