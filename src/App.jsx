import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import DepartmentCard from './departmentcardFunctionalCom'
import DepartmentCardClass from './departmentcard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <DepartmentCard/>
    <DepartmentCardClass/>

    </>
  )
}


export default App
