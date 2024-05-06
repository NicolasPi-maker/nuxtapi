export const useEntity = () => {
    const baseUrl = 'http://localhost:3000/api';
    const getEntity = async (entity: string, count: number) => {
        const { data, pending, error, refresh } = await useFetch(`${baseUrl}/${entity}?count=${count}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'secret',
            },
        });
        return { data, pending, error, refresh};
    }

    return { getEntity }
}