const print = () => {
  setTimeout(() => {
    console.log("wish you a very happy diwali")
  }, 3000)
}

const display = async () => {
  await print();
}
console.log("hello good evening");
display();
console.log("today is choti diwali")