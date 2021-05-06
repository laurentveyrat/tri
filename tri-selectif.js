// const tab = [4, 5, 1, 3, 2]

let tabSaisi = process.argv.slice(2)
tabSaisi = tabSaisi.map(chiffre => parseInt(chiffre))

function triDecroissant(tab) {
    for (let i = 0; i < tab.length - 1; i++) {
        let min = tab[i]

        for (let j = i + 1; j < tab.length; j++) {
            if (tab[j] < min) {
                var indexMin = j
                min = tab[j]
            }
        }
        if (min !== tab[i]) {
            let tmp = tab[i]
            tab[i] = tab[indexMin]
            tab[indexMin] = tmp
        }
    }
    return tab.reverse()
}

console.log(triDecroissant(tabSaisi).join(' '))