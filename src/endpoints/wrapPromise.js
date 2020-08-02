function wrapPromise(promise) {
  let status = 'pending' //default state "pending"
  let response

  const suspender = promise.then(  //promise returned to suspense if still fetching data
    (res) => {
      status = 'success' //solved, success
      response = res
    },
    (err) => {
      status = 'error' //solved, error
      response = err
    },
  )


  //when throwing error, suspense detects it as "Promise not resolved yet => not ready to render"
    //in this case, suspense detects if the thrown error is a promise => fetching in progress (render fallback),
    //if the thtwon error is something else => error inside the promise (throw again the error, might crash the app if not caught)
  //when returning, suspense detects it as "Promise resolved => ready to render"
  const read = () => {
    switch (status) {
      case 'pending':  //if pending throw error and return promise "suspender"
        throw suspender
      case 'error':
        throw response //if error, solved, but throw error message
      default:
        return response //else solved, return response
    }
  }

  return { read } //used to get the data needed
}

export default wrapPromise
