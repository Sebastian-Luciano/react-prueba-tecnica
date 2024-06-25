import './App.css'
import { useCatImage} from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'

export function App() {
    const {fact, refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({ fact })
   
    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick} >Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the firstrhee words for ${fact}`} /> }
            
            <Otro/>
        </main>
    )
}
 
/* 
import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const threeFirstWords = fact.split(' ', 3).join(' ')
                
                // Construye la URL de la imagen directamente
                const newImageUrl = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
                setImageUrl(newImageUrl)
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Cat image with the words: ${fact}`} />}
        </main>
    )
} */