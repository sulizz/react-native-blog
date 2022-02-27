import axios from "axios";

//axios instance preconfigured to talk to the url
export default axios.create({
    baseURL: "http://52f9-2600-1700-bf91-4000-ed47-4bfc-f07e-152e.ngrok.io",
});
