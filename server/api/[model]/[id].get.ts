export default defineEventHandler((event) => {
    const { id, model } = getRouterParams(event);
    const { limit } = getQuery(event);
    return { id, model}
})
