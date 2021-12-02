import React from 'react'
import {useParams} from 'react-router-dom'

function Profile(props) {
    // To grab the params that are coming in thr url
    // You must use this `useParams` hook only inside a Functional component
    const {someId} =  useParams()

    function handleClick(){
        // This will not work in normal functions
        // const {someId} =  useParams()
    }

    return (
        <div>
            <h1>Profile page of {someId} dudette</h1>
        </div>
    )
}

export default Profile
