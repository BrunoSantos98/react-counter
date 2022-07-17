import React, {useState,useEffect} from 'react'

const Albuns = () => {
    
    const [loading, setLoading] = useState(false)
    const [albuns,setAlbuns] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbuns(data)
            setLoading(false)
        })
    },[])

    return(
        <>
            <h1>Albuns</h1>
            {
                loading ? 'carregando' : ''
            }
            {
                albuns.map(albun => {
                    return(
                        <div>
                            <span>{albun.title} - id: {albun.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Albuns