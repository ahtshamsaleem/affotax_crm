import axios from "axios";

import * as axiosURL from "./AxiosUrls";

var baseURL = axiosURL.BaseUrl;


// axios.defaults.headers = {
//   'Cache-Control': 'no-cache',
//   'Pragma': 'no-cache',
//   'Expires': '0',
//   "Access-Control-Allow-Origin": "*",
// };



export default axios.create({
  baseURL: baseURL,
});


