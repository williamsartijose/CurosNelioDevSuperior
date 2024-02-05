import axios from "axios";
import { BASE_URL } from "../utils/sytem";

export function findyByUser(user: string) {
    return axios.get(`${BASE_URL}${user}`);
}