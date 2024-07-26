
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <div>
        <h1>One Pizza App</h1>
        <nav>
          <Link to={"/"}>Home</Link> | <Link to={"about"}>About</Link> 
        </nav>
      </div>
      <Outlet />
    </main>
  )
}

export default App
