
import './Home.css'

function Home() {

  const listMenu: string[] = [ 'MenuFrontal.png', 'MenuTrasero.png']

  return (
    <>
      <div 
        style={{
          width: '100%',
          height: '100dvh'
        }}
      > 
      
        <h1>Menú Digital</h1>
        {
          listMenu.map( (url, index) => 
            <img 
              key={ 'menu' + index }
              width={'100%'}
              src={`./${url}`} 
            />
          )
        }
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
    </>
  )
}

export default Home
