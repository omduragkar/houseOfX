import axios from 'axios';
import { backendbURI } from '../config';
export const delTodo = async (body:{title:string,content:string, category:string})=>{
    return await axios.post(`${backendbURI}/api/deleteNote`,body);
}