import React, {useState} from 'react';
import { Formik, Form, useField, FieldArray } from 'formik';
import * as Yup from 'yup';

import '../css/Contact.css';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const className = props.name.replace(".", "_")
    console.log(field.name, label)
    return (
      <div className={`${className}`}>
        <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        {label.includes("Phone") || label=="Address line 2" ? <span className='optional'> - optional</span> : <></>}
        </div>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
};

const PhoneInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    //console.log(field)
    return (
        <FieldArray 
          name='phone_number'
          render={ arrayHelpers => (
              <div>
                  {field.value.map((phone, index)=> (
                      <div key={index}>
                          <TextInput
                            label={`Phone number ${index + 1}`}
                            name={`phone_number.${index}`}
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
    const [field, meta] = useField(props);
    return (
      <div>
        <div>
          <label htmlFor={props.id || props.name}>{label}</label>
          <span className='messageReminder'>Maximum text length is 500 characters</span>
        </div>
        <textarea className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
};

const AddressInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <TextInput
          label={'Address line 1'}
          name={"address.line1"}
          type="text"
        />

        <TextInput
          label={'Address line 2'}
          name={"address.line2"}
          type="text"
        />

        <TextInput
          label={'City/Town'}
          name={"address.city"}
          type="text"
        />

        <TextInput
          label={'State/County'}
          name={"address.state"}
          type="text"
        />

        <TextInput
          label={'Postcode'}
          name={"address.postcode"}
          type="text"
        />

        <TextInput
          label={'Country'}
          name={"address.country"}
          type="text"
        />

      </>
    );
};

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

function ContactUs() {
    const [addressForm, setAddressForm] = useState(false);
    return (
        <>
        <hr className="solid" />
        <div className='container'>
           <div className='flex-container'>
               <div className='form'>
                <h4>Contact us</h4>
                <h6>Integer sagittis condimentum pellentesque. Sed at sapien id ex pretium maximus congue sed nunc. Aliquam molestie massa ultricies ante porta.</h6>
                <Formik
                   initialValues={{
                     fullName: '',
                     email: '',
                     phone_number: [''],
                     message: '',
                     address:{line1:'', line2:'', city:'', state:'', postcode:'', country:''}
                   }}
                   validationSchema={Yup.object({
                     fullName: Yup.string()
                       .required('Required'),
                     email: Yup.string()
                       .email('Invalid email address')
                       .required('Required'),
                     phone_number: Yup.string()
                       .matches(phoneRegExp, 'Phone number is not valid'),
                     message:Yup.string()
                       .max(500, "Exceed max length")
                   })}
                   onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                       alert(JSON.stringify(values, null, 2));
                       setSubmitting(false);
                     }, 400);
                   }}
                >
                  <Form>
                    <div className='upperForm'>
                      <TextInput
                        label="Full Name"
                        name="fullName"
                        type="text"
                      />
            
                      <TextInput
                        label="Email Address"
                        name="email"
                        type="email"
                      />
                    
                       <div className='phone'>
                        <PhoneInput label="Phone number"
                          name="phone_number"
                          type="phone_number"
                        />
                      </div>
                    

                      <div className='message'>
                        <MessageInput
                          label="Message"
                          name="message"
                          type="message"
                        />
                      </div>
                    </div>

                    <div className='lowerForm'>
                        <div className='addressCheckBox'>
                          <input type="checkbox" onClick={()=> setAddressForm(!addressForm)}/>
                          <span>Add address detail</span>
                        </div>
                        {addressForm ? <AddressInput />: <></>}
                    </div>

                    <button className='submitForm' type="submit">Submit</button>
                  </Form>
                </Formik>
                </div>

                <div className='contactPageLogo'></div>
           </div>
        </div>
        </>
    )
}

export default ContactUs;