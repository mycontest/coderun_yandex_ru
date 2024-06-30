const { trigger, getter } = require("./solution")

const artObject = {
    $redRose: 11101,
    metroStations: ['Park Kultury', 'Delovoy Center'],
    busStops: ['B', 'c910', '379'],
    $city: 10101,
    towers: ['Oko', 'Neva'],
    $getTransports() {
        const stations = this.$getter('metroStations')
        const stops = this.$getter('busStops')
        return [...stations, ...stops]
    },
    $trigger: trigger,
    $getter: getter,
}

artObject.$trigger()

console.log(artObject)

// basic tests

console.log('towers' in artObject) //-> false
console.log(artObject.$getter('towers')) //-> [ 'Oko', 'Neva' ]
console.log(artObject.$redRose) //-> 11101
console.log(artObject.$getTransports()) //-> [ 'Park Kultury', 'Delovoy Center', 'B', 'c910', '379' ]

artObject.$trigger()

console.log(artObject)