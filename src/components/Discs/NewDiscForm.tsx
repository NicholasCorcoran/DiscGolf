import React from 'react';
import classes from './NewDiscForm.module.css'

export const NewDiscForm = () => {
    return <form className={classes.form}>
        <label htmlFor="brand" >
          Disc Brand
        </label>
        <input
          id="brand"
          type="text"
          name="brand"
        />
        <label htmlFor="discname" >
          Disc Name
        </label>
        <input
          id="discname"
          type="text"
          name="discname"
        />
        <label htmlFor="plastic" >
          Plastic
        </label>
        <input
          id="plastic"
          type="text"
          name="plastic"
        />
        <label htmlFor="speed" >
          Disc Speed
        </label>
        <input
          id="speed"
          type="number"
          name="speed"
        />
        <label htmlFor="glide" >
          Disc Glide
        </label>
        <input
          id="glide"
          type="number"
          name="glide"
        />
        <label htmlFor="Turn" >
          Disc Turn
        </label>
        <input
          id="turn"
          type="number"
          name="turn"
        />
        <label htmlFor="fade" >
          Disc Fade
        </label>
        <input
          id="fade"
          type="number"
          name="fade"
        />
    </form>
}