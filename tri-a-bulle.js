// const tab = [4, 5, 1, 3, 2]

let tabSaisi = process.argv.slice(2)
tabSaisi = tabSaisi.map(chiffre => parseInt(chiffre))

function triDecroissant(tableau) {
    let tabTrie = tableau.slice()
    for (let i = (tabTrie.length - 1); i > 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (tabTrie[j] < tabTrie[j + 1]) {
                let tmp = tabTrie[j + 1]
                tabTrie[j + 1] = tabTrie[j]
                tabTrie[j] = tmp
            }
        }
    }
    return tabTrie
}

console.log(triDecroissant(tabSaisi).join(' '))
