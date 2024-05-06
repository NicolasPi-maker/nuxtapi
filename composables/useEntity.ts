export const useEntity = () => {
    const getEntity = async (entity: string, count: number) => {
        const { data, pending, error, refresh } = await useFetch(`api/${entity}?count=${count}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'secret',
            },
        });
        return { data, pending, error, refresh};
    }

    return { getEntity }
}