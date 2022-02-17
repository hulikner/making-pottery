const buyClay = () => {
    const clay = {}
    return clay
}

const makePottery = (obj) => {
    obj.shape = 'Bowl'
    return obj
}

const bisqueFire = (obj) => {
    obj.readyForGlazing = true
    return obj
}

const glazePottery = (obj) => {
    if (obj.readyForGlazing === true){
        obj.glazing = 'Midnight Blue'
    }else{
        console.log('Make sure you bisque fire the pottery before you glaze it')
    }
    return obj
}

const finalFiring = (obj, temp) => {
        if ( temp > 1200){
            obj.cracked = true
        }else{
            obj.cracked = false
        }
        return obj
}

const clay = buyClay()
const bowl = makePottery(clay)
const fireBowl = bisqueFire(bowl)
const blueBowl = glazePottery(fireBowl)
const finalBowl = finalFiring(blueBowl, 1400)

console.log (finalBowl)
