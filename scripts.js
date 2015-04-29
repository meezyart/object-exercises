/**
 * Created by gjames on 4/28/15.
 */
"use strict";

//object literal
var animal = {};


//dot-notation sample
animal.username = "DaffeyDuck";
console.log(animal.username);
//With Bracket Notation…
animal["tagline"]= "Yippieee!";
console.log(animal["tagline"]);

animal.noises = [];
console.log(animal.noises);



console.log('-----------------------------------\n----------------------------------------');


//or

var animals= {
    _defaults:{
        username: 'DaffeyDuck',
        "tagline": 'Yippieee!',
        noises:  []
    }
};

console.log(animals._defaults.username);
console.log(animals._defaults["tagline"]);
console.log(animals._defaults.noises);

console.log('-----------------------------------\n----------------------------------------');

//loops
var defaults = animals._defaults;

var helloIm = function(name){
    return 'Hi my name is ' + name;
};

for (var key in defaults) {

    if (key === 'username') {


        console.log('Hi my name is ' + defaults[key]);
        //Question: What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?
        //Answer: need to be in a function

        // butt you can do it this way
        var name =   helloIm(defaults[key]);
        console.log(  name + " returned from a function" );

    } else if (key==='tagline') {
        console.log('I live to say ' + defaults[key]);
    }

}



