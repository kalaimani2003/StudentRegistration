import { BrowserRouter } from "react-router-dom"
import { LoginPage } from "./Components/LoginPage/LoginPage"


function App() {

  return <>
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  </>
}

export default App
