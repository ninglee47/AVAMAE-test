import React, {useState} from 'react';
import { Formik, Form, useField, FieldArray } from 'formik';
import axios from 'axios';

import '../css/Contact.css';
import SubmitSucess from './submitSucess';
import {ReactComponent as SubmitButton} from '../pics/Icon_Submit.svg';

function ContactUs() {
    const [addressForm, setAddressForm] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(false);
    
    const TextInput = ({ label, ...props }) => {
      const [field] = useField(props);
      const className = props.name.replace(".", "_")
      return (
        <div className={`${className}`}>
          <div>
          <label htmlFor={props.id || props.name}>{label}</label>
          {label.includes("Phone") || label==="Address line 2" ? <span className='optional'> - optional</span> : <></>}
          </div>
          <input className="text-input" {...field} {...props} />
        </div>
      );
    };
  
    const PhoneInput = ({ ...props }) => {
        const [field] = useField(props);
        return (
            <FieldArray 
              name='PhoneNumbers'
              render={ arrayHelpers => (
                  <div>
                      {field.value.map((phone, index)=> (
                          <div key={index}>
                              <TextInput
                                label={`Phone number ${index + 1}`}
                                name={`PhoneNumbers.${index}`}
                                type="text"
                               />
                          </div>
                      ))}
                       <button
                         className='addNewPhone'
                         type="button"
                           onClick={() => arrayHelpers.push('')} // insert an empty string at a position
                        >
                          Add new phone number
                        </button>
                  </div>
              )}
            />
        )
    };
  
    const MessageInput = ({ label, ...props }) => {
        const [field] = useField(props);
        return (
          <div>
            <div>
              <label htmlFor={props.id || props.name}>{label}</label>
              <span className='messageReminder'>Maximum text length is 500 characters</span>
            </div>
            <textarea className="text-input" {...field} {...props} />
          </div>
        );
    };
  
    const AddressCheckbox = ({ children, ...props }) => {
      const [field] = useField({ ...props, type: 'checkbox' });
      return (
        <div>
          <label className="checkbox-input">
            <input type="checkbox" {...field} {...props} 
            onClick={()=> {setAddressForm(!addressForm)}}
            />
            {children}
            <span className="checkmark"></span>
          </label>
          <span>Add address details</span>
        </div>
      );
    };
  
  const AddressInput = () => {
      return (
        <>
          <TextInput
            label={'Address line 1'}
            name={"AddressDetails.AddressLine1"}
            type="text"
          />
  
          <TextInput
            label={'Address line 2'}
            name={"AddressDetails.AddressLine2"}
            type="text"
          />
  
          <TextInput
            label={'City/Town'}
            name={"AddressDetails.CityTown"}
            type="text"
          />
  
          <TextInput
            label={'State/County'}
            name={"AddressDetails.StateCounty"}
            type="text"
          />
  
          <TextInput
            label={'Postcode'}
            name={"AddressDetails.Postcode"}
            type="text"
          />
  
          <TextInput
            label={'Country'}
            name={"AddressDetails.Country"}
            type="text"
          />
        </>
      );
  };

    return (
      <>      
        <hr className="solid" />
        <div className='container'>
           <div className='flex-container'>
           {!submitStatus ? 
               <div className='form'>
                <h4>Contact us</h4>
                <p>Integer sagittis condimentum pellentesque. Sed at sapien id ex pretium maximus congue sed nunc. Aliquam molestie massa ultricies ante porta.<br/><br/></p>
                <Formik
                   initialValues={{
                     FullName: '',
                     EmailAddress: '',
                     PhoneNumbers: [""],
                     Message: '',
                     bIncludeAddressDetails: false,
                     AddressDetails:{
                       AddressLine1:'', 
                       AddressLine2:'', 
                       CityTown:'', 
                       StateCounty:'', 
                       Postcode:'', 
                       Country:''}
                   }}

                   onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                       //alert(JSON.stringify(values, null, 2));
                       const apiUrl = 'https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit'
                      
                      let data = {...values}
                      data.PhoneNumbers = data.PhoneNumbers.filter(function (el) {
                        return el !== "";
                      });

                       axios.post(apiUrl, data)
                       .then(res => {
                        console.log(res);
                        setSubmitStatus(true)
                       }).catch(err => {
                        console.log(err.response.data);
                        let res = []
                        err.response.data.Errors.map((err) => {
                          let message = `${err.FieldName} : ${err.MessageCode}`
                          res.push(message)
                        })
                        alert(res.join("\n"))
                       })
                       setSubmitting(false);
                     }, 400);
                   }}
                >
                  <Form>
                    <div className='upperForm'>
                      <TextInput
                        label="Full Name"
                        name="FullName"
                        type="text"
                      />
            
                      <TextInput
                        label="Email Address"
                        name="EmailAddress"
                        type="email"
                      />
                    
                       <div className='phone'>
                        <PhoneInput label="Phone number"
                          name="PhoneNumbers"
                          type="text"
                        />
                      </div>
                    
                      <div className='message'>
                        <MessageInput
                          label="Message"
                          name="Message"
                          type="message"
                        />
                      </div>
                    </div>

                    <div className='lowerForm'>
                        <div className='addressCheckBox'>
                          <AddressCheckbox 
                            name='bIncludeAddressDetails' 
                            />
                        </div>
                        {addressForm ? <AddressInput />: <></>}
                    </div>

                    <button className='submitForm' type="submit">
                      <SubmitButton />
                      Submit
                      </button>
                    
                  </Form>
                </Formik> 
                </div>
                : <SubmitSucess />}
                <div className='contactPageLogo'></div>
           </div>
        </div>
        
      </>
    )
}

export default ContactUs;