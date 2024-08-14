import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useEffect, useState } from "react";

function UpdatePizza (){
        
    const{ id}= useParams();
    const [pizza, setPizza]= useState(null);


    const navigate = useNavigate();

       useEffect(()=>{
        axios.get(`http://localhost:5000/pizza/${id}`)
        .then(response=> {
            setPizza(response.data);
        })
        .catch(error => {
            console.error('there was an error',error)
        })
       },[id])       

    const formik = useFormik({
        initialValues: {
            
            image:pizza?.image ||'',
            name:pizza?.name ||'',
            price:pizza?.price ||'',
            description:pizza?.description ||'',

        },
         enableReinitialize: true,

        validationScheme: Yup.object({
            id: Yup.string().required,
            image: Yup.string().required(' image URL is Required'),
            name: Yup.string() 
            .min(5,'Name must be at least 5 characters')
            .required('Name is required'),
            price: Yup.number() 
            .min(1,'Price must be greater than 0')
            .required('Price is required'),
        }), 
        onsubmit: (values, {setSubmitting, resetForm, setStatus})=>{
            axios.put(`http://localhost:5000/pizza/${id}`, values)
            .then(response=> {
                setStatus('success');
                resetForm();
                navigate('/pizza-list')
            })
            .catch(error=>{
                setStatus('error');
            })
            .finally(()=>{
                setSubmitting(false);
            });
        },
    });
    return(

        <div className="container mt-4">
            <h2> Update Pizza </h2>


            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        
                        value={formik.values.image}
                        />


                        {
                            formik.touched.image &&  formik.errors.image ? (
                                <div className="text-danger">{formik.errors.image}</div>
                            ): null}
                        
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        />


                        {
                            formik.touched.name &&  formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        />


                        {
                            formik.touched.price &&  formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ): null
                        }
                </div>


                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        />


                        {
                            formik.touched.description &&  formik.errors.descrption ? (
                                <div className="text-danger">{formik.errors.description}</div>
                            ): null
                        }
                </div>









                




                <button type="submit" className="btn btn-primary">
                    submit
                </button>
            </form>


        </div>
    )


}



export default UpdatePizza; 