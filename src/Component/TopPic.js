import React from 'react'
import {Container} from 'react-bootstrap'
import youtube_background from '../youtube_background.jpeg'
import styles from './TopPic.module.css'
function TopPic() {
    
    return (
        <Container className="d-flex align-items-center" style={{backgroundImage: `url(${youtube_background})`, width: '100vw', height: '80vh', backgroundPosition: 'center' }}>
            <div className={styles.box}>
                <h1 className='display-1 text-center text-white'>How Much Time Have You Spent On Youtube?</h1>
            </div>
        </Container>
    )
}
// 
export default TopPic
