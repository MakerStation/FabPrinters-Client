import wrapPromise from './wrapPromise'
import axios from 'axios'
import config from '../../config.js'

function fetchAllPrinters() {
  const promise = axios.post(config.serverUrl + "/findprinter", {})
    .then(res => res.data)

    return wrapPromise(promise)
}

export {
  fetchAllPrinters
}
