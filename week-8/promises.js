const isIt5Yet = false;
const workday = new Promise((resolve, reject) => {
 if (isIt5Yet) {
   const whatToDo = "Go to the beach!";
   resolve(whatToDo);
 } else {
   reject(new Error("It's not 5:00 yet!"));
 }
});

const afterWork = (firstTask) => {
 return new Promise((resolve, reject) => {
   const toDo = `After work I will ${firstTask} Then walk the dog!`;
   resolve(toDo);
 });
};

const myDay = () => {
 workday
   .then((result) => afterWork(result))
   .then((result) => console.log(result))
   .catch((err) => console.log(err.message));
};

myDay();