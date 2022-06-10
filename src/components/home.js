import React from 'react';

import '../css/Home.css';
import Office from '../pics/shutterstock_696636415.jpg';
import ImageSwiper from './swiper';
import {Link} from "react-router-dom";

function Home({imgs}) {
    //console.log(imgs)
    if (!imgs) {
        return (
            <></>
        )
    }
  
    return (
        <>
        {/* Section 1 */}
        <section id='sec1'>
            <ImageSwiper imgs={imgs}/>
        </section>
        
        {/* Section 2 */}
        <section className='container' id='sec2'>
          <article>
            <h3>Etiam aliquet eleifend posuere pharetra.</h3>
            <p>Praesent ut nisi suscipit, feugiat mi id, molestie mauris. Proin nunc erat, fringilla at nisl at, facilisis lobortis dolor. Quisque et purus nec erat imperdiet mattis lobortis non quam. Ut porta, nibh sit amet porttitor viverra, massa leo pulvinar dui, ut malesuada magna quam non arcu. Maecenas facilisis at massa at viverra. Maecenas tempus enim vel commodo dapibus. Suspendisse eu elit nec enim accumsan maximus ac auctor odio. Sed a est ac sem interdum imperdiet vel ac arcu.</p>
            <ul className='bold'>
                <li>Etiam semper lacus ut enim gravida, vitae congue velit tempor.</li>
                <li>Cras faucibus dui interdum nisl tempus, ut sagittis est commodo.</li>
                <li>Nulla vitae leo vitae ipsum lobortis iaculis.</li>
                <li>Curabitur ultrices metus ut urna feugiat, eu convallis elit lacinia.</li>
            </ul>
            <button className='contact'>Learn more</button>
          </article>
            
          <article>
            <div className='crop-height'>
            <img className='scale' src={Office} alt='office' />
            </div>
          </article>

        </section>
        
        {/* Section 3 */}
        <section id="sec3">
            <div className='container'>
              <div className='gridContainer'>
                <div>
                  <div className='gridContent'>
                    <h3>Vestibulum ut ex felis. Nulla eros metus, blandit id turpis.</h3>
                    <br/>
                    <span>
                        Ut sed ligula lectus. Ut mollis fermentum massa. Vestibulum in congue risus, nec elementum odio. Nulla molestie risus dui, non fringilla eros sodales quis. Maecenas vestibulum a ipsum quis luctus. Donec lacus risus, faucibus et velit vel, convallis commodo massa.
                        <br/>
                        <br/>
                    </span>
                    <div>
                      <button className='login'>Log in</button>
                    </div>
                  </div>
                </div>
                <></>
              </div>
            </div>
        </section>
        
        {/* Section 4 */}
        <section className='container' id='sec4'>
              <div className='header'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <h4>Suspendisse venenatis convallis erat at placerat</h4>
              </div>
              <div className='multiple-column'>
                  <p className='bold'>
                  Curabitur tristique sagittis pretium. Donec accumsan, justo quis pharetra tristique, arcu nisl pretium risus, sed lobortis elit odio sit amet est. Curabitur congue tincidunt neque vitae placerat. Quisque nec aliquam est, a lacinia nisi. Nullam euismod rhoncus arcu, at porttitor nisl tincidunt in.
                  <br/>
                  <br/>
                  </p>
                  <p>
                  Etiam dictum, metus nec vehicula luctus, est risus tristique nisl, sed pulvinar sem ex eu est. Nullam tellus quam, rutrum a mi vel, lobortis finibus quam. Etiam aliquam vel erat sed tempor. Donec iaculis odio et diam tincidunt hendrerit. Donec nec sodales enim. Sed aliquet porttitor tristique. Mauris vel porttitor mauris. Nullam vel tincidunt justo, et elementum dolor. Sed nec tellus tincidunt, congue dolor id, viverra eros. Mauris sem ligula, hendrerit eget mattis vel, maximus quis felis. Vestibulum metus velit, scelerisque non risus vitae, gravida fringilla ipsum. Nam at interdum ex.
                  <br/>
                  <br/>
                  Etiam condimentum ipsum non dolor lacinia, sit amet varius elit vulputate. Phasellus nec neque feugiat ex imperdiet luctus. Morbi fringilla, lacus vitae iaculis dapibus, nulla quam suscipit ante, id bibendum elit neque ut dolor. Nunc id aliquet augue, id vulputate urna. Nam tellus orci, imperdiet ut imperdiet id, auctor eget metus. Nullam vitae pharetra velit, non auctor diam. Vivamus in nisl vel augue dictum dictum eget sed metus.
                  </p>
              </div>
              <div className='centerButton'>
                    <Link to="/contact-us">
                      <button className='contact'>
                        Contact Us
                      </button>
                    </Link>
              </div>
        </section>
        </>
    )
}

export default Home;