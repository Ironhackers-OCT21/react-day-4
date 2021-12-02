import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function PokemonDetail() {

    const {id} = useParams()
    const [detail, setDetail] = useState(null)

    // This will run everytime the `id` is updated
    useEffect(() => {
        console.log('Pokemon Detail did mount')
        async function getData(){
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const {height, weight, sprites} = response.data
            let pokemon = {
                id: id, 
                height: height,
                weight: weight, 
                image: sprites.other.dream_world.front_default
            }
            setDetail(pokemon)
        }
        getData()
       
    }, [id])
    //  |
    //  |
    // dependencies - everytime the value changes it will retrigger the useEffect


    // Loading state when we have no data
    if (!detail) {
        return <p>Loading . . . </p>
    }

    return (
        <div>
            <h4>Pokemon Detail</h4>
            <img src={detail.image} />
        </div>
    )
}

export default PokemonDetail
