import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState, useRef } from "react";
import TodoContent from "./TodoContent";

const TodoList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
`;
const CoverImg = styled.div`
  background: url("https://i.imgur.com/YcPaK24.jpg");
  height: 190px;
  background-size: cover;
  background-position: 10% 20%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
`;
const Content = styled.div`
  padding: 10px 20px;
`;
const Add = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 10px 0 5px;
  border-bottom: 1px solid #d9e4dd;

  & > * {
    background: transparent;
    border: none;
    height: 35px;
  }
`;
const Input = styled.input`
  font-weight: 700;
  font-size: 20px;
  color: #5ebec1;
  outline: none;
  font-family: "Nunito";
  opacity: 0.6;
`;
const Todos = styled.ul`
  margin-left: 0;
  padding: 0;
  list-style: none;
  height: 220px;
  overflow: auto;
`;
const Card = styled.li`
  user-select: none;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 4px 8px;
  color: ${(props) => props.theme.colors.green};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.pink};
  border: 2px solid ${(props) => props.theme.colors.blue};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-family: "Nunito";
  margin-top: 10px;
  font-size: ${(props) => props.theme.fonts.MD};

  &:hover {
    color: ${(props) => props.theme.colors.yellow};
    background-color: ${(props) => props.theme.colors.blue};
    border: 2px solid ${(props) => props.theme.colors.blue};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function TodoItem() {
  const [todos, setTodos] = React.useState([
    { id: 1, content: "冥想2分鐘", isDone: false, isShow: true },
    { id: 2, content: "澆花", isDone: true, isShow: true },
  ]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("All");
  const id = useRef(3);

  // 新增
  const handleClick = () => {
    if (value.trim() !== "") {
      setTodos([
        {
          id: id.current,
          content: value,
          isDone: false,
        },
        ...todos,
      ]); //解構語法，後面加上要新增的東西
      setValue(""); // 清空
      id.current++;
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  // 刪除
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // 編輯
  const handleToggleClick = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };
  // 篩選
  const showAll = () => setFilter("All");
  const showIsDone = () => setFilter("Complete");
  const showActive = () => setFilter("Active");

  // 清空
  const clearAll = (id) => {
    setTodos(todos.filter((todo) => todo.id == id));
  };
  return (
    <TodoList>
      <CoverImg></CoverImg>
      <Content>
        <Add>
          <Input
            placeholder="Add something todo..."
            value={value}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={handleClick}
            style={{
              color: "#cdc9c3",
              cursor: "pointer",
              fontSize: "21px",
            }}
          />
        </Add>
        <Todos>
          <Card>
            {todos
              .filter((todo) => {
                if (filter === "All") return todo;
                if (filter === "Active") return todo.isDone === false;
                if (filter === "Complete") return todo.isDone === true;
              })
              .map((todo) => (
                <TodoContent
                  key={todo.id}
                  todo={todo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleToggleClick={handleToggleClick}
                />
              ))}
          </Card>
        </Todos>
      </Content>
      <ButtonWrapper className="filter">
        <Button onClick={showAll}>All</Button>
        <Button onClick={showActive}>Active</Button>
        <Button onClick={showIsDone}>Completed</Button>
        <Button onClick={clearAll}>Clear</Button>
      </ButtonWrapper>
    </TodoList>
  );
}

export default TodoItem;
