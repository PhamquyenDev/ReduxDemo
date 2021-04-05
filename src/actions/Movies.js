
export const findItem = (findName) => {
    return {
        type: 'FIND',
        findName: `${findName}`,
    }
}
