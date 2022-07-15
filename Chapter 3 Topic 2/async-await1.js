function myAsyncMethod() {
    console.log('myAsyncMethod was executed')
    
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000) 
    })
  }
  function myAwaitMethod() {
    console.log('myAwaitMethod was executed')
  }
  async function init() {
    await myAsyncMethod()
    myAwaitMethod()
  }
  init()