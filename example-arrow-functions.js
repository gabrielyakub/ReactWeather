var names = ["Jacob", "Yakub", "Jecob"];

names.forEach(function (name) {
  console.log('forEach', name);
});


// arrow function

// bisa pake statement body
names.forEach((name) => {
  console.log('arrowFunc', name);
} );

// kalo 1 line gk perlu body

names.forEach( (name) => console.log(name) );
// dengan arrow function tanpa body, apapun yang di define otomatis ke return
var returnMe = (name) => name + '!';
console.log(returnMe('Yakub'));

// dengan arrow function, 'this'nya bisa nge
// refer ke object sendiri
var person = {
  name: 'Yakub',
  greet: function(){
    names.forEach( (name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

var addNum1 = (a,b) => a + b;
var addNum2 = (a,b) => {
  return a+b;
}

console.log(addNum1(10,10));
console.log(addNum2(20,20));
