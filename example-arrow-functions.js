var names = ['Peter', 'Patrick', 'Joscelin'];
var returnMe ='';
names.map((name) => {
  returnMe = name+'!';
});

names.forEach((name) => {
  console.log('arrow', name);
});

console.log(returnMe);

var addStatement = (a,b) => {
  return a+b;
}

var addExpression = (a,b) => a + b;
