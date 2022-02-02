export function toRupiah(val) {
    return `Rp. ${formatMoney(Number(val))}`      
}

export function formatMoney(amountCount, countDesimal = 2, thousands = ".") {
    try {
        countDesimal = Math.abs(countDesimal);
        countDesimal = isNaN(countDesimal) ? 2 : countDesimal;
    
        const signNegative = amountCount < 0 ? "-" : "";
        amountCount = Math.abs(Number(amountCount) || 0).toFixed(countDesimal)
        let i = parseInt(amountCount).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;
    
        return signNegative + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands);
    } catch (e) {
        return '0,00'
    }
}