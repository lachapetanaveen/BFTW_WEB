import React, { Component, useState } from 'react';
import Header from '../../components/header';
import questionArray from '../../components/questions.json'
import './afterregister.css';
import { useLocation, useNavigate } from 'react-router-dom';

const AfterRegister = () => {
    let location = useLocation();
    const navigate = useNavigate()
    const [answers, setAnswers] = useState({});
    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => {
            // Check if this question has conditions on others
            const relatedQuestions = questionArray.filter(question =>
                question.condtions && question.condtions.length > 0 && question.condtions.some(condition => condition.questionId === questionId)
            );
      
            // If it does, remove related answers
            const updatedAnswers = { ...prevAnswers };
            relatedQuestions.forEach(relatedQuestion => {
              delete updatedAnswers[relatedQuestion.id];
            });
      
            // Update the answer for the current question
            updatedAnswers[questionId] = answer;
      
            return updatedAnswers;
          });
      };
 
   const regconditions = async() => {
    if(answers){
        await localStorage.setItem('qans',JSON.stringify(answers))
            await localStorage.setItem('logindata',JSON.stringify(location.state.data))
                    await localStorage.setItem("token", JSON.stringify(location.state.data.token));
                  await localStorage.setItem("loggedIn", true);
                  navigate('/AllUsers');
    }
   }
    console.log(answers,'answers');
    return (
        
        <>
            <div className='app_container'>


                <Header />
                <div className='qa_container'>

                </div>
                <div className='container-fluid qacontent'>
                
                    {questionArray.map(question => {
                        const {id,question:questionText,type,options,condtions,reqfields} = question;

                        const conditionSatisfied = condtions && condtions.length > 0 && condtions.every(condition => {
                            const {questionId,operator,value} = condition;
                            return answers[questionId] === value
                        })
                        if (conditionSatisfied || condtions.length === 0) {
                            return (
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
                            );
                          }
                    })}
                  
                    <div className='submit_button'>
                        <button onClick={() => regconditions()}  className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                    {/* <div style={{ marginTop: '20px', }}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    Q1: Did You Read the "No Greater" Booklet?
                                </div>
                                <div>
                                    <div style={{ display: 'flex', marginLeft: '16px' }}>
                                        <input checked={twoa === 'yes' ? true : false} onChange={() => handlesettoa('yes')} style={{ marginRight: '6px' }} type="radio" />
                                        <label style={{ marginTop: '10px' }}>Yes</label>
                                        <input checked={twoa === 'no' ? true : false} onChange={() => handlesettoa('no')} style={{ marginRight: '6px', marginLeft: '10px' }} type="radio" />
                                        <label style={{ marginTop: '10px' }}>No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    Q2: Would you like to download this app to mobile phone?
                                </div>
                                <div>
                                    <div style={{ display: 'flex', marginLeft: '16px' }}>
                                        <input checked={twob === 'yes' ? true : false} onChange={() => setTwob('yes')} style={{ marginRight: '6px' }} type="radio" />
                                        <label style={{ marginTop: '10px' }}>Yes</label>
                                        <input checked={twob === 'no' ? true : false} onChange={() => setTwob('no')} style={{ marginRight: '6px', marginLeft: '10px' }} type="radio" />
                                        <label style={{ marginTop: '10px' }}>No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {twoa === 'yes' ?
                            <div style={{ marginTop: '20px' }} className='row'>
                                <div className='col-md-6'>
                                    <div>
                                        Q3: Did You Receive Jesus Christ as your Personal Savior?
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', marginLeft: '16px' }}>
                                            <input checked={threea === 'yes' ? true : false} onChange={() => handlesetthreea('yes')} style={{ marginRight: '6px' }} type="radio" />
                                            <label style={{ marginTop: '10px' }}>Yes</label>
                                            <input checked={threea === 'no' ? true : false} onChange={() => handlesetthreea('no')} style={{ marginRight: '6px', marginLeft: '10px' }} type="radio" />
                                            <label style={{ marginTop: '10px' }}>No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div>
                                        Q4: Any Comments on NGL Booklet?
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', marginLeft: '16px', marginTop: '10px' }}>
                                            <input
                                                type="text"
                                                placeholder={`Enter Comment`}
                                                value={threeb}
                                                contentEditable={true}
                                                onChange={(e) => setThreeb(e.target.value)}
                                                style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div> : twoa === 'no' ?
                                <div style={{ marginTop: '20px' }} className='row'>
                                    <div className='col-md-6'>
                                        <div>
                                            Q5: Would you like to receive your own copy of the "No Greater Love" booklet?
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', marginLeft: '16px' }}>
                                                <input checked={foura === 'yes' ? true : false} onChange={() => handlesetfoura('yes')} style={{ marginRight: '6px' }} type="radio" />
                                                <label style={{ marginTop: '10px' }}>Yes</label>
                                                <input checked={foura === 'no' ? true : false} onChange={() => handlesetfoura('no')} style={{ marginRight: '6px', marginLeft: '10px' }} type="radio" />
                                                <label style={{ marginTop: '10px' }}>No</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                : null
                        }
                        {threea === 'yes' && twoa === 'yes' ?
                            <div style={{ marginTop: '20px' }} className='row'>

                                <div className='col-md-6'>

                                    <div>
                                        Welcome to the family of Jesus Christ (Provide Some Guidence and/or instruction)?
                                        Q4: Any Comments on NGL Booklet
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', marginLeft: '16px', marginTop: '10px' }}>
                                            <input
                                                type="text"
                                                placeholder={`Enter Comment`}
                                                value={fivea}
                                                contentEditable={true}
                                                onChange={(e) => setFivea(e.target.value)}
                                                style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div> : threea === 'no' && twoa === 'yes' ?
                                <div style={{ marginTop: '20px' }} className='row'>
                                    <div className='col-md-6'>

                                        <div>
                                            Q3:  Would you like to receive more informationabout salvation through Jesus Christ?
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', marginLeft: '16px' }}>
                                                <input checked={fiveb === 'yes' ? true : false} onChange={() => handlesetfiveb('yes')} style={{ marginRight: '6px' }} type="radio" />
                                                <label style={{ marginTop: '10px' }}>Yes</label>
                                                <input checked={fiveb === 'no' ? true : false} onChange={() => handlesetfiveb('no')} style={{ marginRight: '6px', marginLeft: '10px' }} type="radio" />
                                                <label style={{ marginTop: '10px' }}>No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div>
                                            Q4: Any Comments on NGL Booklet?
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', marginLeft: '16px', marginTop: '10px' }}>
                                                <input
                                                    type="text"
                                                    placeholder={`Enter Comment`}
                                                    value={fivebcomment}
                                                    contentEditable={true}
                                                    onChange={(e) => setFivebComment(e.target.value)}
                                                    style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                        {foura === 'yes' && twoa === 'no' ?
                            <div style={{ marginTop: '20px' }} className='row'>
                                <div className='col-md-12'>

                                    <div>
                                        Q3:  Would you like to receive a copy of the "No Greater Love" booklet in the mail, or as a download?
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', marginLeft: '16px' }}>
                                            <input checked={sixa === 'mail' ? true : false} onChange={() => handlesetsixa('mail')} style={{ marginRight: '6px' }} type="radio" />
                                            <label style={{ marginTop: '10px' }}>Mail</label>
                                            <input checked={sixa === 'download' ? true : false} onChange={() => handlesetsixa('download')} style={{ marginRight: '6px', marginLeft: '10px' }} type="radio" />
                                            <label style={{ marginTop: '10px' }}>Download</label>
                                        </div>
                                    </div>
                                </div>
                            </div> : foura === 'no' && twoa === 'no' ?
                                <div style={{ marginTop: '20px' }} className='row'>

                                    <div className='col-md-6'>

                                        <div>
                                            How Can i Help You
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', marginLeft: '16px', marginTop: '10px' }}>
                                                <input
                                                    type="text"
                                                    placeholder={`Enter Comment`}
                                                    value={sevena}
                                                    contentEditable={true}
                                                    onChange={(e) => setSevena(e.target.value)}
                                                    style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                                />
                                            </div>

                                        </div>

                                    </div>
                                </div> : null
                        }
                        {sixa === 'mail' && foura === 'yes' && twoa === 'no' ?
                            <div>
                                <div style={{ marginTop: '20px' }} className='row'>
                                    <div className='col-md-4'>
                                        <label className="text-csm">Select Country</label>
                                        <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}>
                                            <option>Select Country</option>
                                            <option value="india">India</option>
                                            <option value="australia">Australia</option>
                                            <option value="us">US</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4'>
                                        <label className="text-csm">Enter State</label>
                                        <input
                                            type="text"
                                            placeholder={`Enter State`}
                                            value={statevalue}
                                            contentEditable={true}
                                            onChange={(e) => setStatevalue(e.target.value)}
                                            style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <label className="text-csm">City</label>
                                        <input
                                            type="text"
                                            placeholder='Enter City'
                                            aria-label="City"
                                            id="city"
                                            value={city}
                                            contentEditable={true}
                                            onChange={(e) => setCity(e.target.value)}
                                            style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginTop: '40px' }} className='row'>

                                    <div className='col-md-4'>
                                        <label className="text-csm">Zip/Pin Code</label>
                                        <input
                                            type="text"
                                            placeholder='Enter Zip Code'
                                            aria-label="zipcode"
                                            id="zipcode"
                                            value={zipcode}
                                            contentEditable={true}
                                            onChange={(e) => setZipcode(e.target.value)}
                                            style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <label className="text-csm">Address</label>
                                        <input
                                            type="text"
                                            placeholder='Enter Address'
                                            aria-label="address"
                                            id="address"
                                            value={address}
                                            contentEditable={true}
                                            onChange={(e) => setAddress(e.target.value)}
                                            style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <label className="text-csm">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder='Enter Last Name'
                                            aria-label="Last name"
                                            id="last_name"
                                            value={lastname}
                                            contentEditable={true}
                                            onChange={(e) => setLastName(e.target.value)}
                                            style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                        />
                                    </div>
                                </div>
                            </div> : sixa === 'download' && foura === 'yes' && twoa === 'no' ?
                                <h6 style={{ textAlign: 'center', marginTop: '14px', cursor: 'pointer' }}><a style={{ textAlign: 'center', textDecoration: 'underline' }}>Please Click here to download or go to Play Store/App Store and download "No Greater Love"</a></h6>
                                : null

                        }
                        {fiveb === 'yes' && threea === 'no' && twoa === 'yes' ?
                            <div style={{ marginTop: '20px' }} className="row">
                                <div className='col-md-12'>

                                    <div>
                                        Provide Some guidence and/or additional information
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', marginLeft: '16px', marginTop: '10px' }}>
                                            <input
                                                type="text"
                                                placeholder={`Enter Comment`}
                                                value={eighta}
                                                contentEditable={true}
                                                onChange={(e) => setEighta(e.target.value)}
                                                style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                            />
                                        </div> </div></div></div> : fiveb === 'no' && threea === 'no' && twoa === 'yes' ?
                                <div style={{ marginTop: '20px' }} className="row">
                                    <div className='col-md-12'>

                                        <div>
                                            How Can I Help You
                                        </div>
                                        <div>
                                            <div style={{ display: 'flex', marginLeft: '16px', marginTop: '10px' }}>
                                                <input
                                                    type="text"
                                                    placeholder={`Enter Comment`}
                                                    value={eightb}
                                                    contentEditable={true}
                                                    onChange={(e) => setEightb(e.target.value)}
                                                    style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                                />
                                            </div> </div></div></div>
                                : null
                        }
                        <div>
                            <div style={{marginTop:'20px'}} className='row'>
                                <div className='col-md-12'>
                                <div>
                                    Q6: Where Did you receive the "No Greater Love" booklet?
                                </div>
                                <select onChange={(e) => setninea(e.target.value)} style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8,marginTop:'10px' }}>
                                        <option value="social Media">Social Media</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {ninea === 'other' ? 
                                <div className='col-md-12'>

                                    <div style={{  marginTop: '10px' }}>
                                    <input
                                        type="text"
                                        placeholder={`Enter Comment`}
                                        value={nineaother}
                                        contentEditable={true}
                                        onChange={(e) => setNineaother(e.target.value)}
                                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                    />
                                </div></div>  : null
                                }
                            </div>
                        </div>
                        <div style={{marginTop:'20px'}}>
                        <button onClick={() => submit()} style={{ width: '100%' }} type="submit" className="btn btn-lg btn-primary">
                                        Submit
                                    </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default AfterRegister;