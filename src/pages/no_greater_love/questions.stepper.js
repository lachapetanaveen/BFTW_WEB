import React, { Component,useState } from 'react';
import Header from '../../components/header';
import questionArray from '../../components/questions.json';
import './afterregister.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { FaTimes } from "react-icons/fa";

const QuestionsStepper = () => {
    let location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const [activeStep, setActiveStep] = useState(1);
  const [answers, setAnswers] = useState({});
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prevAnswers => {
        // Check if this question has conditions on others
        const relatedQuestions = questionArray.filter(question =>
            question.condtions && question.condtions.length > 0 && question.condtions.some(condition => condition.questionId === questionId)
        );
  console.log(relatedQuestions,'relatedquestions');
        // If it does, remove related answers
        const updatedAnswers = { ...prevAnswers };
        relatedQuestions.forEach(relatedQuestion => {
          delete updatedAnswers[relatedQuestion.id];
        });
        console.log(updatedAnswers,'updatedAnswers');
        // Update the answer for the current question
        updatedAnswers[questionId] = answer;
  
        return updatedAnswers;
      });
  };
  const isStepValid = step => {
    const stepQuestions = questionArray.filter(
      question => question.step === step
    );

    return stepQuestions.every(question => {
      if (question.condtions && question.condtions.length > 0) {
        return question.condtions.every(condition => {
          return answers[condition.questionId] === condition.value;
        });
      }
      return true;
    });
  };
  const handleNext = () => {
    if (isStepValid(activeStep)) {
        let nextStep = activeStep + 1;
  
        while (nextStep <= questionArray[questionArray.length - 1].step) {
          if (!isStepValid(nextStep)) {
            nextStep++;
          } else {
            break;
          }
        }
  
        setActiveStep(nextStep);
      }
  };
  const regconditions = async() => {
    if(answers){
        console.log(answers,'answers');
        await localStorage.setItem('qans',JSON.stringify(answers))
        setOpen(true)
            // await localStorage.setItem('logindata',JSON.stringify(location.state.data))
            //         await localStorage.setItem("token", JSON.stringify(location.state.data.token));
            //       await localStorage.setItem("loggedIn", true);
            //       navigate('/AllUsers');
    }
   }
   const gohome = () => {
        navigate('/home')
   }
  const renderStep = step => {
    console.log(questionArray,'questionArray');
    const stepQuestions = questionArray.filter(
      question => question.step === step
    );
console.log(stepQuestions,'stepQuestions');
    return (
      <div>
        {stepQuestions.map(question => {
          const {
            id,
            question: questionText,
            type,
            options,
            condtions,
            reqfields
          } = question;

          const conditionsSatisfied =
            !condtions ||
            condtions.every(condition => {
              return (
               
                  answers[condition.questionId] === condition.value
              );
            });
            console.log(conditionsSatisfied,'conditionsSatisfied');
          if (conditionsSatisfied || conditionsSatisfied.length === 0) {
            return(
                <div key={id} className="card_question">
                <div style={{marginTop:'20px'}}>{questionText}</div>
                <div className='card_answer'>
                {type === 'radio' ? 
                     options.map(option => (
                         <label style={{marginTop:'10px'}} key={option}>
                           <input
                             type={type}
                             value={option}
                             checked={answers[id] === option}
                             style={{marginLeft:'12px',marginRight:'6px'}}
                             onChange={() => handleAnswerChange(id, option)}
                           />
                           {option.charAt(0).toUpperCase() + option.slice(1)}
                         </label>
                       )) : type === 'text'?
                       <input
                       type={type}
                       value={answers[id] || ''}
                       onChange={(e) => handleAnswerChange(id, e.target.value)}
                       style={{  display: 'block', borderRadius: '10px', width: '100%', height: '36px', borderColor: 'gray', borderWidth: 0.5, padding: 8,marginTop:'10px' }}
                     />
                       :type === "link" ? 
                       <h6 style={{ textAlign: 'center', marginTop: '14px', cursor: 'pointer' }}><a style={{ textAlign: 'center', textDecoration: 'underline' }}>Please Click here to download or go to Play Store/App Store and download "No Greater Love"</a></h6>:null
                 }
                 {reqfields && reqfields.length > 0 ? 
                    reqfields.map(k => {
                     return(
                        <div>
                         {k.type === 'text' ? 
                             <div>
                                  <label className="text-csm">{k.label}</label>
                                  <input
                                  type={type}
                                  value={answers[k.key] || ''}
                                 //  style={{marginLeft:'12px'}}
                                  onChange={(e) => handleAnswerChange(k.key, e.target.value)}
                                  style={{  display: 'block', borderRadius: '10px', width: '100%', height: '36px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                />
                                </div>
                             :<div>
                             <label className="text-csm">{k.label}</label>
                             <select
                             type={type}
                             value={answers[k.key] || ''}
                             // style={{marginLeft:'12px'}}
                             onChange={(e) => handleAnswerChange(k.key, e.target.value)}
                             style={{  display: 'block', borderRadius: '10px', width: '100%', height: '36px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                           >
                             {k.refieldoptions.map(l => {
                                 return(
                                     <option value={l}>{l}</option>
                                 )
                             })}
                           </select>
                           </div>}
                        </div>
                             
                        
                      
                     )
                    })
                     :null
                 }
                </div>
                 
               </div>
            )
          }
        })}
      </div>
    );
  };
    return ( 
        <>
            <div className='app_container'>
        <Header />
        <div className='qa_container'></div>
        <div className='container-fluid qacontent'>
          {renderStep(activeStep)}

          <div className='stepper_buttons'>
          {activeStep !== questionArray[questionArray.length - 1].step && (
            <button
              disabled={!isStepValid(activeStep)}
              onClick={handleNext}
              className='btn btn-primary'
            >
              Next
            </button>
          )}
            {activeStep === questionArray[questionArray.length - 1].step && (
              <button
                onClick={() => regconditions()}
                className='btn btn-success'
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <Modal

style={{ width: '80%', borderRadius: 10 }}
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={open}
onClose={handleClose}
closeAfterTransition
slots={{ backdrop: Backdrop }}
slotProps={{
  backdrop: {
    timeout: 500,
  },
}}
>
<Fade in={open}>
  <Box style={{ width: '50%', position: 'absolute', top: '30%', backgroundColor: 'white', left: '40%', borderRadius: 10 }} >

    {/* <div className="modal_header">

      <div className="modal_logo">
        <img style={{ width: '25%' }} src={require('../assets/bftw_new.png')} alt="logo" />
      </div>
      <div onClick={handleClose} className="modal_close">
        <FaTimes size={24} color="red" />
      </div>
    </div> */}

    <div className="p-4 text-center">
        <img style={{width:'26%'}} src={require('../../assets/checkgif.gif')} />
      <h5>Your Ansers Submitted SuccessFully</h5>
        <div style={{cursor:'pointer',color:'blue',textDecoration:'underline'}} onClick={() =>  gohome()}>Go To Home</div>
    </div>
    <div className="flex !items-center !justify-center">

      <div>

      </div>

    </div>
  </Box>
</Fade>
</Modal>
        </>
     );
}
 
export default QuestionsStepper;