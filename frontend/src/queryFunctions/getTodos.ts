import axios from 'axios';
import { backendbURI } from '../config';
export const getTodos = async (pageNo:number)=>{
    return await axios.get(`${backendbURI}/api/getNotes?page=${pageNo}`);
}