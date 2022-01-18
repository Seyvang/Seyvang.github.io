import React from 'react'
import {Container, Carousel} from 'react-bootstrap'
import Takeout1 from '../Takeout1.png'
import Takeout2 from '../Takeout2.png'
import Takeout3 from '../Takeout3.png'
import Takeout4 from '../Takeout4.png'
import Takeout5 from '../Takeout5.png'
import Takeout6 from '../Takeout6.png'
import Takeout7 from '../Takeout7.png'

function Explanation() {
    return (
        <Container className="d-flex flex-column justify-content-center" >
            <h1 className='text-center'>How does it Work?</h1>
            <p>
                Youtube History Analysis relies on the Google Takeout Tool.
                Google Takeout stores all of the data for Google's products. These include mail, map location, and Youtube history.
                After downloading the Youtube history, this website will look at every video in the history and add the total time.

                <br/>
                Keep in mind that if your history wasn't enabled on an account the estimated watch time will be inaccurate.

            {/* https://getbootstrap.com/docs/4.0/components/carousel/ How to get the rotating slideshow thingy */}
            </p>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout1}
                    alt="First slide"
                    />
                    <Carousel.Caption className='bg-dark'>
                    <h3>Step 1</h3>
                    <p>Log on to Google Takeout. After signing in, deselect all</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout2}
                    alt="Second slide"
                    />

                    <Carousel.Caption className='bg-dark'>
                    <h3>Step 2</h3>
                    <p>After scrolling all the way down, check the Youtube and Youtube Music.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout3}
                    alt="Third slide"
                    />

                    <Carousel.Caption  className='bg-dark'>
                    <h3>Step 3</h3>
                    <p>Click on "All YouTube Data Included". Deselect All and only choose history. Click OK afterwards</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout4}
                    alt="Fourth slide"
                    />

                    <Carousel.Caption className='bg-dark'>
                    <h3>Step 4</h3>
                    <p>Click Mulitple Formats and go to History. This website can only handle JSON files. Change from HTML to JSON.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout5}
                    alt="Fifth slide "
                    />

                    <Carousel.Caption className='bg-dark'>
                    <h3>Step 5</h3>
                    <p>Everything should be ready afterwards. Exporting once is fine. Click on Create Export</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout6}
                    alt="Sixth slide"
                    />

                    <Carousel.Caption className='bg-dark'>
                    <h3>Step 6</h3>
                    <p>Wait for Google to package the history into a file. This should take maximum of 10 minutes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Takeout7}
                    alt="Third slide"
                    />

                    <Carousel.Caption className='bg-dark'>
                    <h3>Final Step</h3>
                    <p>You should be able to download the zipped file. The file location should be under <br/>
                        <i>'../Downloads/takeout/Takeout/Youtube and Youtube Music/history/watch-history-json'</i>
                        <br/>
                        Upload that file below
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Explanation
