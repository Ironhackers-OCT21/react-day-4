import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function PokemonList() {

    const [pokemons, setPokemons] = useState([])
    
    // This will run just --ONCE-- after the component has mounted
    useEffect(() => {

        async function getData(){
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon')
            setPokemons(response.data.results)
        }

        getData()
        
    }, [])
    //  |
    //  |
    // dependencies - since we have no dependencies, this useEffect will run just once after the component has mounted



    // Loading state when we have no data
    if (!pokemons.length) {
        return <p>Loading . . . </p>
    }

    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            {
                pokemons.map((elem, i) => {
                    return (
                        <div>
                            <Link to={`/pokemon/${i+1}`} >{elem.name}</Link>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default PokemonList
