function myAsyncMethod() {
    console.log('myAsyncMethod was executed')
    
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000) 
    }) 
  }
  function myPromiseThenMethod() {
    console.log('myPromiseThenMethod was executed')
  }
  myAsyncMethod().then(myPromiseThenMethod)