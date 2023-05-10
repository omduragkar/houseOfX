import { Button, Stack, TextField, Typography } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ListStateType } from "../home/homeType";
export type textfield = {
  title: string;
  category: string;
  content: string;
};
const CreateNote = ({
  todos,
  setTodos,
  mutate,
  editMutate,
  createFields,
  setCreateFields,
}: ListStateType) => {
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    createFields &&
      setCreateFields({
        ...createFields,
        [event.target.name]: event.target.value,
      });
  };
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (
      !createFields?.category ||
      !createFields?.content ||
      !createFields?.title
    )
      return;
    if (createFields?.edit) {
      editMutate?.mutate(createFields);
    } else {
      mutate?.mutate(createFields);
    }
  };
  return (
    <Stack gap={3}>
      <Typography variant="h3">Type Anything!</Typography>
      <TextField
        value={createFields?.title}
        name={"title"}
        placeholder={"Enter Title"}
        onChange={(event) => {
          onChangeHandler(event);
        }}
      />
      <TextField
        value={createFields?.category}
        name={"category"}
        placeholder={"Enter Category"}
        onChange={(event) => {
          onChangeHandler(event);
        }}
      />
      <TextField
        value={createFields?.content}
        name={"content"}
        placeholder={"Enter content"}
        onChange={(event) => {
          onChangeHandler(event);
        }}
        multiline={true}
        maxRows={5}
      />
      <Button
        sx={{}}
        disabled={mutate?.isLoading}
        onClick={(e) => clickHandler(e)}
        variant={"contained"}
      >
        Create!
      </Button>
    </Stack>
  );
};

export default CreateNote;
