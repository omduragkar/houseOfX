import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export interface ListStateType{
    todos:never[];
    setTodos:React.Dispatch<React.SetStateAction<never[]>>;
    queries?:AxiosResponse<any, any> | undefined;  
    createFields ?: {
        title: string;
        category: string;
        content: string;
        id: string;
        edit: boolean;
    }; 
    setCreateFields: React.Dispatch<React.SetStateAction<{
        title: string;
        category: string;
        content: string;
        id: string;
        edit: boolean;
    }>> ;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    mutate?:UseMutationResult<AxiosResponse<any, any>, unknown, {
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