import { Suspense, createContext, lazy, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { addTodo } from "../../queryFunctions/createTodo";
import { updateTodo } from "../../queryFunctions/updateTodo";
const Home = lazy(() => import("../../pages/Home"));

export const CreateHomeContext = createContext({});

export const HomeRouter = () => {
  const [pno, setPno] = useState(1);
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const initialState = {
    title: "",
    category: "",
    content: "",
    id: "",
    edit: false,
  };
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
      let newtodos = todos.map((todo) => {
        if (todo._id == data.data._id) {
          return data.data;
        } else {
          return todo;
        }
      });
      setTodos(newtodos);
      setCreateFields(initialState);
      setOpen(false);
    },
  });
  return (
    <Suspense fallback={<CircularProgress />}>
      <CreateHomeContext.Provider
        value={{
          editMutate,
          mutate,
          createFields,
          setCreateFields,
          pno,
          setPno,
          todos,
          setTodos,
          open,
          setOpen,
          initialState,
        }}
      >
        <Home />
      </CreateHomeContext.Provider>
    </Suspense>
  );
};
