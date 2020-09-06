async function testAsync() {
    return await Promise.resolve('async works')
}

testAsync().then(console.log)

class Util {
    static id = Date.now()
}

console.log('Util id:', Util.id)
