import axios from 'axios';
import {useStore} from "vuex";

const baseURL = window.api.URL; // Замените на ваш базовый URL
const store = useStore();
const headers = {
    'Api-Key': "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
    'Leadhit-Site-Id': "5f8475902b0be670555f1bb3",
}

const instance = axios.create({
    baseURL,
    headers
});

export default instance;
