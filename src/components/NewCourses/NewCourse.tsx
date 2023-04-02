import React from 'react';

export const NewCourse = () => {
    return(
    <>
        <h1>Add new course!</h1>
        <form>
            <label htmlFor='coursename'>Course Name:</label>
            <input type='text' id='coursename' name='coursename' />
            <label htmlFor='layoutname'>Layout Name {'(ex. Blues A Layout, White Layout ext...'}</label>
            <input type='text' id='layoutname' name='layoutname' />
            
        </form>
    </>
    )
}