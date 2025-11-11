export const reloadWithParams = (
    baseUrl: string,
    params: Record<string, string | number | string[] | undefined>
) => {
    const urlParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== '' && !(Array.isArray(value) && value.length === 0)) {
            if (Array.isArray(value)) {
                urlParams.set(key, value.join(','));
            } else {
                urlParams.set(key, String(value));
            }
        }
    });

    window.location.href = `${baseUrl}?${urlParams.toString()}`;
};
