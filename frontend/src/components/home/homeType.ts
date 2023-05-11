import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export interface hometype{
    pno : number;
    setPno: React.Dispatch<React.SetStateAction<never[]>>;
    todos:never[];
    setTodos:React.Dispatch<React.SetStateAction<never[]>>;  
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    
}

export interface liststateType{
    todos:never[];
    setTodos:React.Dispatch<React.SetStateAction<never[]>>;  
    setCreateFields: React.Dispatch<React.SetStateAction<{
        title: string;
        category: string;
        content: string;
        id: string;
        edit: boolean;
    }>> ;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    

}
export interface createNoteType{
    todos:never[];
    setTodos:React.Dispatch<React.SetStateAction<never[]>>;  
    setCreateFields: React.Dispatch<React.SetStateAction<{
        title: string;
        category: string;
        content: string;
        id: string;
        edit: boolean;
    }>> ;
    createFields : {
        title: string;
        category: string;
        content: string;
        id: string;
        edit: boolean;
    };
    mutate:UseMutationResult<AxiosResponse<any, any>, unknown, {
        title: string;
        content: string;
        category: string;
    }, unknown>; 
    editMutate?: UseMutationResult<AxiosResponse<any, any>, unknown, {
        title: string;
        content: string;
        category: string;
    }, unknown>;

}