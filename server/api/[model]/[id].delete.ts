export default defineEventHandler((event) => {
    const { id, model } = getRouterParams(event);
    return { message: `${model} ${id} a été supprimé`}
})