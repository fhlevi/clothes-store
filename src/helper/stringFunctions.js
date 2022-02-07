export const isString = value => {
    return typeof value === 'string' || value instanceof String
}

export const ellipsis = (str, maxShowing=20) => {
    if(isString(str)) {
        let strCopy = str
        if(str.length > maxShowing) {
            strCopy = strCopy.slice(0, maxShowing) + '...'
        }

        return strCopy
    } else {
        throw new Error('TYPE OF FIRST ARGUMENT MUST STRING')
    }
}