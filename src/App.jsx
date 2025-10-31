import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { FabButton } from "./components/FabButton";
import { Dialog } from "./components/Dialog/index";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { use } from "react";
import TodoContext from "./components/ToDoProvider/TodoContext";
import { TodoGroup } from "./components/TodoGroup";
import { ToDoForm } from "./components/ToDoForm";
import { EmptyState } from "./components/EmptyState";

function App() {
  
  const {todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo} = use(TodoContext)
  

  const handleFormSubmit = (FormData) => {
    if (selectedTodo) {
      editTodo(FormData)
    } else {
      addTodo(FormData);
    }
    closeFormTodoDialog();
  };
    

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>

          <TodoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
            />
            {todos.length == 0 && <EmptyState />}
          
          <TodoGroup
            heading="Concluídos"
            items={todos.filter(t => t.completed)}
            />


          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <ToDoForm 
              onSubmit={handleFormSubmit} 
              defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={() => openFormTodoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
