//SHALLOW COPY: where both the variables share their information from the same memory location. Change in one will reflect in the other.

//DEEP COPY: where both the variables have are stored in different memory locations. Change in one will NOT REFLECT in the other.

// const obj1 = { name: "Harendra", status: "married" };
// const obj2 = obj1; //SHALLOW COPY
// obj2.status = "single";
// obj2.name = "Rohit";

// console.log(obj1.name);

// const obj2 = { ...obj1 };
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.name = "Ketan";
// console.log(obj1.name);

// NESTED OBJECTS ARE ALWAYS SHALLOW COPIED, if copied via SPREAD OPERATOR

const obj1 = {
  name: "Harendra",
  status: "married",
  address: {
    city: "Bharatpur",
    state: "Rajasthan",
  },
};

// const obj2 = {...obj1};
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = "Jaipur";
console.log(obj1.address.city);


// structuredClone