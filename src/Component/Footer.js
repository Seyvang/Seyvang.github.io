import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios';

function Footer() {
    const [currentText, setCurrentTime] = useState(0);
    useEffect(() => {
      axios.get('https://seyvang-youtube-backend.herokuapp.com/time')
        .then(function(response){
          console.log(response.data)
          
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
        <Container className="d-flex flex-column justify-content-center">
            <footer className='text-center'>Copyright 2022 Steven Kim Contact at stevenskim@outlook.com</footer>
        </Container>
    )
}

export default Footer
