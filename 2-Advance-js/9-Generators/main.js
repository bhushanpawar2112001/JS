//normal function
function normalfunction(){
    console.log('Hello');
    console.log('World');
}
normalfunction()
normalfunction()

// generator function
function* generatorfunction(){
    yield 'Hello'
    yield 'World'
}
const generatorobj = generatorfunction()
for (const word of generatorobj) {
    console.log(word);
}