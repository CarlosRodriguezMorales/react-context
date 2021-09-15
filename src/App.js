import CrudApi from "./Components/CrudApi";
import MyPage from "./Components/MyPage";
import MyPageContext from "./Components/MyPageContext";
import { CRUDProvider } from "./Context/CRUDContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr/>
      <CRUDProvider><CrudApi/></CRUDProvider>      
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>      
    </div>
  );
}

export default App;
