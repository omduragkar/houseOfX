import { Stack, Typography } from '@mui/material'
import ListAccordian from './SingleRead'
import { useMutation } from '@tanstack/react-query'
import { delTodo } from '../../queryFunctions/deleteTodo'
import { ListStateType } from './homeType'

const ListState = ({queries, todos, setTodos, setCreateFields,setOpen}:ListStateType) => {
  const delMutate = useMutation(delTodo, {
    onSuccess:(data)=>{
      console.log({data})
    }
  })
  const deleteFunctionality = (id:any)=>{
    if(confirm("Delete?")){
      delMutate.mutate({
        id
      })
      let newtodo = todos.filter(todo=>todo._id != id);
      setTodos(newtodo);
    }
  }
  const updateFunctionality = (data:any)=>{
    setCreateFields({title:data.title, content:data.content, category:data.category,edit:true, id:data._id})
    setOpen(true);
  }
  return (
    <Stack p={1} gap={2} px={5}>
        {/* <Search/> */}
        <Stack py={3} px={1}>
          <Typography variant={"h3"}>Your Total {todos.length} {todos.length == 1? "todo!" : "todos!"}</Typography>
        </Stack>
        <Stack p={1} gap={1}>
          {todos?.map((todo:any, key:number)=>(
            <ListAccordian key={key} updateFunctionality={updateFunctionality} deleteFunctionality={deleteFunctionality} todo={todo} delMutate={delMutate}/>
          ))}
        </Stack>
    </Stack>
  )
}

export default ListState
