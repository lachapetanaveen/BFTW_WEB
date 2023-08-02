import React, { Component, useState } from 'react';
import Header from '../../../components/header';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate()
    const [firstname, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [selectvalue, setSelectvalue] = useState('email');
    const [selectedvalue, setSelectedvalue] = useState('');
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [statevalue, setStatevalue] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');
    const sendnext = () => {
        if(!firstname){
            toast.error('Enter First Name');
        }else{
            navigate('/afterregister')
        }
    }
    return (
        <>
            <div className='app_container'>


                <Header />
                <div className='container-fluid content'>
                    <div style={{ marginTop: '20px', }}>
                        <div style={{ padding: '10px', textAlign: 'center' }} className='profile-bg'>
                            <h4>Register</h4>
                        </div>
                        <div style={{ width: '80%', margin: 'auto' }}>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <label className="text-csm">First/Preferred Name*</label>
                                    <input
                                        type="text"
                                        placeholder='Enter First Name'
                                        aria-label="First name"
                                        id="first_name"
                                        value={firstname}
                                        contentEditable={true}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}

                                    />
                                </div>
                                <div className='col-md-4'>
                                    <label className="text-csm">Middle Name(Optional)</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Middle Name'
                                        aria-label="Middle name"
                                        id="middle_name"
                                        value={middlename}
                                        contentEditable={true}
                                        onChange={(e) => setMiddleName(e.target.value)}
                                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}

                                    />
                                </div>
                                <div className='col-md-4'>
                                    <label className="text-csm">Last Name(Optional)</label>
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
                            <div style={{ marginTop: '40px' }} className='row'>
                                <div className='col-md-4'>
                                    <label className="text-csm">Select Email or Mobile</label>
                                    <select onChange={(e) => setSelectvalue(e.target.value)} style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}>
                                        <option value="email">Email</option>
                                        <option value="mobile">Mobile</option>
                                    </select>
                                </div>
                                <div className='col-md-4'>
                                    <label className="text-csm">Enter {selectvalue.charAt(0).toUpperCase() + selectvalue.slice(1)}</label>
                                    <input
                                        type="text"
                                        placeholder={`Enter ${selectvalue.charAt(0).toUpperCase() + selectvalue.slice(1)}`}
                                        value={selectedvalue}
                                        contentEditable={true}
                                        onChange={(e) => setSelectedvalue(e.target.value)}
                                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <label className="text-csm">Title(Optional)</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Title'
                                        aria-label="Title"
                                        id="title"
                                        value={title}
                                        contentEditable={true}
                                        onChange={(e) => setTitle(e.target.value)}
                                        style={{ position: 'relative', display: 'block', borderRadius: '10px', width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 8 }}
                                    />
                                </div>
                            </div>
                            <div style={{ marginTop: '40px' }} className='row'>
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
                                <div className='col-md-4 d-flex align-items-end'>
                                    <button onClick={() => sendnext()} style={{ width: '100%' }} type="submit" className="btn btn-lg btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;