function myAsyncMethod(callback) {
    console.log('myAsyncMethod was executed')
    setTimeout(callback, 1000)
  }
  function myCallbackMethod() {
    console.log('myCallbackMethod was executed')
  }
  myAsyncMethod(myCallbackMethod)