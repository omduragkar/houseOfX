import { Button, CircularProgress, Stack } from "@mui/material";
import AppBar from "../components/common/TopBar";
import ListState from "../components/home/ListState";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTodos } from "../queryFunctions/getTodos";
import { useState } from "react";
import BasicModal from "../components/common/BasicModal";
import CreateNote from "../components/create/CreateNote";
import { addTodo } from "../queryFunctions/createTodo";
import { updateTodo } from "../queryFunctions/updateTodo";
const Home = () => {
  const initialState = {
    title: "",
    category: "",
    content: "",
    id: "",
    edit: false,
  };
  const [pno, setPno] = useState(1);
  const [todos, setTodos] = useState([]);
  const { data: queries, refetch, isLoading } = useQuery(["getTodos"], {
    queryFn: () => getTodos(pno),
    onSuccess: (dt) => {
      console.log({dt});
      setTodos([...todos, ...dt.data.notes]);
      setPno(dt.data.nextPage);
    },
  });
  const [open, setOpen] = useState(false);
  const [createFields, setCreateFields] = useState(initialState);
  const mutate = useMutation(addTodo, {
    onSuccess(data) {
      console.log({ data });
      todos.push(data.data);
      setTodos(todos);
      setCreateFields(initialState);
      setOpen(false);
    },
  });
  const editMutate = useMutation(updateTodo, {
    onSuccess(data) {
      console.log({ data });
      let newtodos = todos.map((todo) =>{
        if(todo._id == data.data._id){
          return data.data;
        }else{
          return todo
        }
      })
      setTodos(newtodos);
      setCreateFields(initialState);
      setOpen(false);
    },
  });
  return (
    <Stack>
      <AppBar open={open} setOpen={setOpen} />
      <BasicModal
        open={open}
        handleClose={() => {
          setOpen(!open);
        }}
      >
        <CreateNote
          todos={todos}
          setTodos={setTodos}
          editMutate={editMutate}
          mutate={mutate}
          createFields={createFields}
          setCreateFields={setCreateFields}
        />
      </BasicModal>
      { isLoading ?
      (<CircularProgress/>)
      :
      (
        <>
          <ListState
            todos={todos}
            setTodos={setTodos}
            setOpen={setOpen}
            queries={queries}
            createFields={createFields}
            setCreateFields={setCreateFields}
          />
          { pno!= null && (<Stack direction={"row"} justifyContent={"center"} alignItems={"center"} p={5}>
          <Button variant={"contained"} disabled={isLoading} sx={{}} onClick={()=>{
            setPno(prev=>(prev + 1));
            refetch() 
          }}>View More</Button>
        </Stack>)}
        </>
      )}
    </Stack>
  );
};

export default Home;
