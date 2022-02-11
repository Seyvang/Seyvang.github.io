import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { Container } from 'react-bootstrap'
import FinalResult from './FinalResult'
export const ContextOne = React.createContext()
export const ContextTwo = React.createContext()


function Submission() {
    const [fileStatus, editStatus] = useState("NoSubmit")
    const [time, setTime] = useState(0)
    const [file, setFile] = useState()
    const handleSubmit = () => {
        if(file){
            const jsoned_file = small_history.json()
            console.log(jsoned_file)
            // https://seyvang-youtube-backend.herokuapp.com/time
            axios.post("/time", {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }, jsoned_file)
            .then(res => {
                setTime(res.data.time)
                editStatus("Submitted")
            })
            .catch(error => {
                console.log(jsoned_file)
                editStatus("NoServer")
                console.log(error)
            })
        }
        else{
            alert("Submit a file first!!!")
            editStatus("NoSubmit")
        }
    }
    const handleFile = (item) => {
        // console.log(item)
        const fileReader = new FileReader();
        fileReader.readAsText(item.target.files[0], "UTF-8");
        fileReader.onload = item => {
            console.log("item.target.result", item.target.result);
            setFile(item.target.result);
        };
        editStatus("Pending")
        setTime(0)
        };

        // setFile(item.target.files[0])
        // console.log(file.name)
    // }
    const testSubmit = () => {
        console.log(file)
    }
    

    return(
        <div>
            <Container className='d-flex justify-content-center'>
                <input type='file' name='file' onChange={handleFile}></input>
                <button onClick={handleSubmit}>Upload!</button>
                {/* <button onClick={testSubmit}>Test Shit! {time}</button> */}
                {/* <p>{file? file.name: "Not Working"}</p> */}
                <br></br>
            </Container>

            <Container className='d-flex justify-content-center'>
                <ContextOne.Provider value={fileStatus}>
                    <ContextTwo.Provider value={time}>
                        <FinalResult/>
                    </ContextTwo.Provider>
                </ContextOne.Provider>
            </Container>
        </div>

        
    )
}

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

export default Submission
