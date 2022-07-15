/*let isStudioKebakaran = false;

let promise = new Promise (function(resolve, reject){
  setTimeout(() => {
    if (isStudioKebakaran) {
        reject("Maaf studio kebakaran")
    } else {
        resolve("Karya baru akan keluar")
    }
  }, 1000);  
})

promise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})*/

let apaNantiMalamHujan = true;

let promise = new Promise (function(resolve, reject){
  setTimeout(() => {
    if (apaNantiMalamHujan) {
        reject("Tidak ada PR hari ini")
    } else {
        resolve("Jangan lupa kerjakan PR kalian")
    }
  }, 1000);  
})

promise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
