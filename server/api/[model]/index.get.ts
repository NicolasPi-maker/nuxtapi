import { useRoute } from "vue-router";

export default defineEventHandler(async(event) => {
    const {  model } = getRouterParams(event);
    const apiUrl = 'https://freetestapi.com/api/v1';

    const { count } = getQuery(event);
    const countAsNumber = parseInt(count) || 1;

    const response = await fetch(`${apiUrl}/${model}?limit=${countAsNumber}`);
    // @ts-ignore
    return await response.json();
})
