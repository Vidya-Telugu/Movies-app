import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function MoviesList() {
    
  const[Movies,setMovies]=useState([]);
  useEffect(()=>{
     async function retrieve(){
        try{
         const response=await fetch("https://swapi.dev/api/films/");
         const data=await response.json();
        const transformedData=data.results.map((movie)=>{
            return {
                id:movie.episode_id,
                title:movie.title,
                openingText:movie.opening_crawl,
                releasedate:movie.release_date,
            }
        }) 
        setMovies(transformedData);       
     }catch{(error)=>console.error(error)}
    }
     retrieve();
    },[])
 
  return (
    <div>
    
      {
        Movies.map((movie)=>{
            return <ul key={movie.id}>
                <li >{movie.id}</li>
                <li>{movie.title}</li>
                <li>{movie.openingText}</li>
                <li >{movie.releaseDate}</li>
            </ul>
        })
      }
    
    </div>
  )
}

export default MoviesList
