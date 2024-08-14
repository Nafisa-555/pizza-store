import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Pizza(){

    const [pizza,setPizza]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
       fetchPizza(); 
    }, [])


       const fetchPizza=() => {
        axios.get('http://localhost:5000/pizza')
        .then(response=> {
            setPizza(response.data);
        })
        .catch(error => {
            console.error('there was an error',error)
        })
       }

       const handleDelete = ()=> {
        axios.delete('http://localhost:5000/pizza/${id}')
        .then(response=> {
            fetchPizza();
        })
        .catch(error => {
            console.error('there was an error deleting the pizza data',error)
        })
       }

    return(
        <>
        <div className="comtainer mt-4">
            <h2> Pizza List </h2>
            <div className="row">
                {
                    pizza.map(pizza => (
                        <div className="col-md-4" key={pizza.id}>
                     <div className="card mb-4">
                        <img src= {pizza.image} height={300} className= "card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title"> {pizza.name} </h5>
                            <p className="card-text"> Price:${pizza.price} </p>
                            <p className="card-text"> Name:{pizza.name} </p>
                            <p className="card-text"> Description:{pizza.description} </p>
                            <button className="btn btn-primary me-2" onClick={() => handleDelete(pizza.id)} > DELETE</button>
                            <button className="btn btn-warning " onClick={() => navigate(`/update-pizza/${pizza.id}`)} > UPDATE</button>
                            </div>
                      </div>
                        </div>

                    ) )
                    
                }

            </div>
        </div>



        
        </>
    )

}

export default Pizza;