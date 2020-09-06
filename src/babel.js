async function testAsync() {
    return await Promise.resolve('async works')
}

testAsync().then(console.log)


const unused = 52;

class Util {
    static id = Date.now()
}

import('lodash').then((_) => {
    console.log('lodash', _.random(0, 52, true))
})

console.log('Util id:', Util.id)
