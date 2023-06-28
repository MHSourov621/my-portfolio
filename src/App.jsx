import { useEffect, useState } from 'react'
import './App.css'
import Design from './component/Design/Design'
import Main from './component/Main/Main'
import Loading from './component/Loading/Loading';
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500);
  })
  return (
    <div>
      {
        loader ? <Loading></Loading> :
          <>
            <div className='w-full h-full bg-banner-bg bg-no-repeat bg-center bg-cover text-white relative'>
              <div className=' w-full  absolute top-0 left-0'>
                <Design></Design>
              </div>
              <div>
                <Main></Main>
              </div>
            </div>
          </>
      }
    </div>

  )
}

export default App
