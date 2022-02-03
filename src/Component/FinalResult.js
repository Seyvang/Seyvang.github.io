import React, {useContext} from 'react';
import { ContextOne, ContextTwo } from './Submission';


function FinalResult() {
    const status = useContext(ContextOne)
    const time = useContext(ContextTwo)
    switch(status){
        case "NoSubmit":
            return <h2>Submit a file!</h2>
        case "Submitting":
            return <h2>File is being submitted</h2>
        case "Submitted":
            if (time==0){
                return <h2>Your data is being processed now</h2>
            }
            else{
                return <h2>You have watched a total of {Math.round(time/6)/10} hours of Youtube</h2>
            }
        case "Pending":
            return <h2>File is ready to be submitted.</h2>
        case "NoServer":
            return <h2>There is an error on our end. Please try again later.</h2>

    }
        
}

export default FinalResult;
