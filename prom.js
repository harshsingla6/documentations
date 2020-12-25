const print = () => {
   new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("hello")
         resolve("done");
      }, 1000)

   }).then((message) => {
      console.log(message)
   })
}

print()