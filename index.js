function receivesAFunction(callback) {
    // console.log("This is a callback function");
    callback();
}

function returnsANamedFunction() {
    return function maxwelFunction() {
        console.log('This is a function that has been returned');
    }
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}
