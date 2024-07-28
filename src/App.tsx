
import { Outlet } from "react-router-dom";


function App() {
  return (
    <main>
      <div
        style={{
          width: '100%',
          height: '20px'
        }}
      >
        {/* HEADER */}
        <div style={{
          display:"flex",
          position: 'fixed',
          left: 0,
          top: 0,
          height: '80px',
          width: '100%',
          justifyContent: 'center',
          backgroundColor: '#ab1c18'
        }}>
          {/* Logo Izquierdo */}
          <img 
            style={{
              left: 0,
              position: 'absolute',
              width: '65px',
              marginLeft: '10px'
            }}
            src={`./LogoSinFondo.png`} 
          />
          <div 
            style={{ 
              alignContent: 'center', 
              fontSize:'30px',
              fontWeight: 'bolder'
            }}>
              One Pizza
          </div>
        </div>
        {/* <nav>
          <Link to={"/"}>Home</Link> | <Link to={"about"}>About</Link> 
        </nav> */}
      </div>
      <Outlet />
    </main>
  )
}

export default App
