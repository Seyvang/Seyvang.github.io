import React from 'react'
import { Container } from 'react-bootstrap'
import {useForm} from 'react-form-hook'


function Submission() {
//     const { register, handleSubmit } = useForm() 

//   const onSubmit = (data) => {
//     console.log(data)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input ref={register} type="file" name="picture" />
//       <button>Submit</button>
//     </form>
//   );
    return(
        <Container className='d-flex justify-content-center'>
            <input type='file' name='file'></input>
        </Container>
        
    )
}

export default Submission
