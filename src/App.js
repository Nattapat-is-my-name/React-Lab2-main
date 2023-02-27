import { Container } from "@mui/system";
import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
function App() {
  return (
    <Container>
      <div className="App">
        <div className="home">
          <Home />
        </div>
        <div className="todo">
          <Todo />
        </div>
      </div>
    </Container>
  );
}

export default App;
