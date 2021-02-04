const person = {
  name: "jack william",
  age: 17,
  job: "programmer",
  gfName: "ema watson",
  address: "usa",
  phone: "01879056875",
  friends: ["tom", "ogg", "bean"],
};

// const { phone, gfName } = person;

const complexObject = {
  name: "abc",
  info: {
    address: "paris",
    leader: "tiger leader",
  },
};

const { leader } = complexObject.info;
console.log(leader);
// console.log(phone, gfName);

const friends = ["saki", "lak", "lki", "amir"];
const [first, ...restFriend] = friends;
console.log(first, restFriend);
