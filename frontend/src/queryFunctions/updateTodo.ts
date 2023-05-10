import axios from 'axios';
import { backendbURI } from '../config';
export const updateTodo = async (body:{title:string,content:string, category:string})=>{
    return await axios.post(`${backendbURI}/api/updateNote`,body);
}