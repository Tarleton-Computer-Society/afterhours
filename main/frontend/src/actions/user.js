import axios from "axios";

export function GetMyData() {
    const header = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",





        }
    }
    axios.get("http://localhost:3001/v1/me")
        .then(res => {
            localStorage.setItem("myData", JSON.stringify(res.data));

        })
}