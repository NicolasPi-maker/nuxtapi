export default defineEventHandler(async(event) => {
    const { id, model } = getRouterParams(event);
    const body = await readBody(event);
    return { message: `${model} ${id} a été modifié`, body}
})