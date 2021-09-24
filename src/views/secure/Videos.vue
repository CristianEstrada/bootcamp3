<template>
    <main-container>
        <template v-slot:search>
            <InputText type="text" v-model="search" placeholder="Usuario" />
            <Button
                class="main-btn w-4 ml-4"
                label="Añadir"
                @click="settings.add = true"
            />
        </template>
        <template v-slot:content>
            <DataTable
                :value="dataset"
                :paginator="true"
                :rows="7"
                paginatorTemplate="PrevPageLink PageLinks NextPageLink"
                :filters="filters"
                :globalFilterFields="['name', 'category.name']"
            >
                <!-- Id field -->
                <Column
                    field="id"
                    header="Id."
                    sortable
                    headerStyle="width: 5rem"
                />
                <!-- Fields defined in data section -->
                <Column
                    v-for="col of fields"
                    :field="col.field"
                    :header="col.header"
                    :key="col.field"
                    sortable
                />
            </DataTable>
        </template>
    </main-container>

    <Dialog
        v-model:visible="settings.add"
        v-if="settings.add"
        :showHeader="false"
        :modal="true"
        :breakpoints="{ '960px': '80vw' }"
        :style="{ width: '70vw' }"
    >
        <add-video @onClose="settings.add = false" />
    </Dialog>
</template>

<script>
import MainContainer from '@/components/widgets/MainContainer.vue'
import AddVideo from '@/components/modals/AddVideo.vue'
import { FilterMatchMode } from 'primevue/api'
export default {
    name: 'AdminVideos',
    components: { MainContainer, AddVideo },
    data() {
        return {
            search: '',
            dataset: null,
            fields: [
                {
                    field: 'name',
                    header: 'Nombre',
                },
                {
                    field: 'category.name',
                    header: 'Categoría',
                },
                {
                    field: 'created_at',
                    header: 'Fecha de creación',
                },
            ],
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            },
            settings: {
                add: false,
            },
        }
    },
}
</script>

<style></style>
