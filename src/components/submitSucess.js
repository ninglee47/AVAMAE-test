import React from 'react';

import '../css/Contact.css';
import {ReactComponent as ValidIcon} from '../pics/Icon_Valid.svg';

function SubmitSucess() {
    return (
        <div className='form'>
          <h4>Contact us</h4>
          <p>Integer sagittis condimentum pellentesque. Sed at sapien id ex pretium maximus congue sed nunc. Aliquam molestie massa ultricies ante porta.<br/><br/></p>
          <div className='sucess'>
              <div className='validImg'>
                <ValidIcon />
              </div>
              <div className='validMsg'>              
                  <p>Your message has been sent</p>
              <span>We will be in contact with you within 24 hours.</span>
              </div>

          </div>
        </div>
    )
}

export default SubmitSucess;