import axios from "axios";

export async function getData(params) {
    // return await axios(params)
    axios.get(params.url, params.body)
        .then((response) => {
          
        })
}