import React, { Component, useState } from 'react';
import Header from '../../components/header';

const AfterRegister = () => {
    const [twoa, setTwoa] = useState('');
    const [twob, setTwob] = useState('');
    const [threea, setThreea] = useState('');
    const [threeb, setThreeb] = useState('');
    const [foura, setFoura] = useState('');
    const [fivea, setFivea] = useState('');
    const [fiveb, setFiveb] = useState('');
    const [lastname, setLastName] = useState('');
    const [fivebcomment, setFivebComment] = useState('');
    const [sixa, setSixa] = useState('');
    const [sevena, setSevena] = useState('');
    const [eighta, setEighta] = useState('');
    const [eightb, setEightb] = useState('');
    const [ninea,setninea] = useState('');
    const [nineaother,setNineaother] = useState('');
    const [country, setCountry] = useState('');
    const [statevalue, setStatevalue] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [address, setAddress] = useState('');

    const handlesettoa = (value) => {
        setTwoa(value)
        setThreea('');
        setThreeb('');
        setFoura('');
        setFivea('');
        setFiveb('');
        setFivebComment('');
        setSixa('');
        setSevena('');
        setEighta('');
        setEightb('');
        
    }
    const handlesetthreea = (value) => {
        setThreea(value)
        setFivea('');
        setFiveb('');
        setFivebComment('');
        setSixa('');
        setSevena('');
        setEighta('');
        setEightb('');
    }
    const handlesetfoura = (value) => {
        setFoura(value)
        setFivea('');
        setFiveb('');
        setFivebComment('');
        setSixa('');
        setSevena('');
        setEighta('');
        setEightb('');
    }
    const handlesetfiveb = (value) => {
        setFiveb(value);
        setSixa('');
        setSevena('');
        setEighta('');
        setEightb('');
    }
    const handlesetsixa = (value) => {
        setSixa(value)
        setSevena('');
        setEighta('');
        setEightb('');
    }
    const submit = () => {
        const obj = {
            twoa:twoa,
            twob:twob,
            threea:threea,
            threeb:threeb,
            foura:foura,
            fivea:fivea,
            fiveb:fiveb,
            fivebcomment:fivebcomment,
            sixa:sixa,
            sevena:sevena,
            eighta:eighta,
            eightb:eightb,
            ninea:ninea
        }
        for (const key in obj) {
            const value = obj[key];
            if (
              value === null ||
              value === undefined ||
              value === '' ||
              (Array.isArray(value) && value.length === 0) ||
              (typeof value === 'object' && Object.keys(value).length === 0)
            ) {
              delete obj[key];
            }
          }
          console.log(obj,'obj');
    }
    return (
        <>
            <div className='app_container'>


                <Header />
                <div className='container-fluid content'>
                    <div style={{ marginTop: '20px', }}>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default AfterRegister;