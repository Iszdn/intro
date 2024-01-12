import React from 'react';
import { useFormik } from 'formik';
import axios from "axios"

const FormAdd = ({getData}) => {
async function addIntro(values) {
    const res=await axios.post("http://localhost:8000/",values)
    getData()

}


    const formik = useFormik({
        initialValues: {
          image: '',
          title: '',
          description: '',
        },
        onSubmit: (values,{resetForm}) => {
          addIntro(values)
          resetForm()
        },
      });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="image">image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />

      <label htmlFor="title">title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="description">description </label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
      />

      <button type="submit">Add</button>
    </form>
  )
}

export default FormAdd