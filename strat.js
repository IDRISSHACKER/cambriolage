const homes = [2, 7, 9, 3, 1]

const getMaxButin = (butinHomes)=>{
    
    let sumButins1 = 0
    let sumButins2 = 0
    let pas = 1
    
    butinHomes.forEach((butin)=>{
        pas ? sumButins1+=butin : sumButins2+=butin
        pas = !pas
    })
    
    return sumButins1 > sumButins2 ? sumButins1 : sumButins2
}

console.log(getMaxButin(homes))
