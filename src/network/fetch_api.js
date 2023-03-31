import axios from 'axios'

const apis = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BE_URL}`,
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // 'Origin': '*',
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Origin': '*',
        // "User-Agent" :"PostmanRuntime/7.29.0"
    },
})

export default apis
