export const generateExportArray = (data: Data) => {
    return Object.keys(data).map(key => (data as any)[key])
}