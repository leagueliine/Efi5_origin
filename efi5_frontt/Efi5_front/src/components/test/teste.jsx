import { useState, useEffect } from 'react'

const Test = () => {
    
const { teste, setTest } = useState({})

useEffect(() => {
    async function fetchData() {
        await fetch('http://localhost:8080/getall').then((res) => res.json()).then((res) => console.log(res))

    }
    fetchData()
})

return (
    <>
  
    </>
)

}

export { Test }