var average = function(salary) {
  let a=  salary.sort((a,b)=>{
  return a-b;
  });
    //1000, 2000, 3000,4000

a.shift();
a.pop();
let r=a.reduce((num,num1)=>{
    num=num+num1
    return num
})
return r/a.length
};
