import { Button, CircularProgress, Stack } from "@mui/material";
import AppBar from "../components/common/TopBar";
import ListState from "../components/home/ListState";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../queryFunctions/getTodos";
import { useContext } from "react";
import BasicModal from "../components/common/BasicModal";
import CreateNote from "../components/create/CreateNote";
import { CreateHomeContext } from "../components/home/HomeRouter";
import { hometype } from "../components/home/homeType";
const Home = () => {
  const {
    pno,
    setPno,
    todos,
    setTodos,
    open,
    setOpen,
  } :hometype= useContext(CreateHomeContext);

  const {
    refetch,
    isLoading,
  } = useQuery(["getTodos"], {
    queryFn: () => getTodos(pno),
    onSuccess: (dt) => {
      console.log({ dt });
      setTodos([...todos, ...dt.data.notes]);
      setPno(dt.data.nextPage);
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
        <CreateNote />
      </BasicModal>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ListState />
          {pno != null && (
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              p={5}
            >
              <Button
                variant={"contained"}
                disabled={isLoading}
                sx={{}}
                onClick={() => {
                  setPno((prev) => prev + 1);
                  refetch();
                }}
              >
                View More
              </Button>
            </Stack>
          )}
        </>
      )}
    </Stack>
  );
};

export default Home;
