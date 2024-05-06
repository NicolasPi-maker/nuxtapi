<script setup lang="ts">
import {onMounted} from "vue";
import { useClipboard } from '@vueuse/core'
const { getEntity } = useEntity();

const props = defineProps({
  entity: {
    type: String,
    required: true,
  },
});

const state = reactive({
  entities: null,
});

const count = ref(2);
const loading = ref(true);
const getEntities = async (count: number) => {
  const {data, pending} = await getEntity(props.entity, count);
  loading.value = pending;
  state.entities = data;
}

onMounted(() => {
  getEntities(count.value);
});

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="flex flex-col justify-center m-3">
    <div class="flex flex-col w-1/4">
      <label for="personCount" class="block text-gray-700 text-sm font-bold mb-2">Nombre de {{ props.entity }}</label>
      <div class="flex items-center justify-end gap-3">
        <input type="number" v-model="count" name="personCount" min="1" placeholder="Nombre d'utilisateur" id="personCount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <button class="rounded bg-blue-500 py-2 px-4 text-white" @click="getEntities(count)">Valider</button>
      </div>
    </div>
    <div v-if="isSupported" class="flex justify-end w-1/4">
      <button @click="copy(JSON.stringify(state.entities))">
        <Icon v-if="!copied" name="ri:file-copy-line" color="gray" size="1.5rem" class="mt-3" />
        <span v-else>Copied!</span>
      </button>
<!--      <p>Current copied: <code>{{ text || 'none' }}</code></p>-->
    </div>
    <p v-else>
      Your browser does not support Clipboard API
    </p>
    <Icon v-if="loading" name="line-md:downloading-loop" color="black" />
    <pre>
      {{ state.entities }}
    </pre>
  </div>
</template>

<style scoped>

</style>