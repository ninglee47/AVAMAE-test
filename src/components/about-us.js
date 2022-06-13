import React from 'react';
import '../css/About.css';
import Office from '../pics/shutterstock_696636415.jpg';

function About() {
    return (
        <>
        <hr className="solid" />
        <div className='container'>
            <h3 className='aboutHeader'>About us</h3>
            <div>
                <span className='bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula venenatis elit, eget dapibus arcu rhoncus in.<br/>
                </span>
                <span>
                   Praesent egestas ornare ligula, nec tincidunt nisl facilisis eget. Morbi vel neque consequat, fringilla est non, facilisis lectus. Integer lobortis orci nec odio pulvinar, in egestas justo eleifend. Integer auctor, tortor a semper efficitur, quam lectus varius augue, id aliquam nulla velit eu nisl. Maecenas at bibendum arcu. Morbi sed ex et lorem vestibulum venenatis eu vitae arcu. Etiam tempor mi vel ultrices fringilla. Cras id sapien turpis. Duis sodales luctus augue sed ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.
                   <br/>
                   <br/>
                   Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vehicula maximus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada nisl id ullamcorper fringilla. Nullam vel erat ut ante congue ultricies quis ac nibh. Phasellus vulputate tempus enim, a euismod dolor lacinia non. Nullam a nisl a metus faucibus fringilla accumsan porta orci. Donec scelerisque nibh in sem laoreet, et posuere massa consequat. Praesent rutrum ut diam sit amet semper. Etiam non mollis felis. Phasellus eleifend porttitor lorem, a ultricies nulla fringilla rhoncus.
                   <br/>
                   <br/>
                </span>
                <img src={Office} alt='office' className='center'/>
                <span>
                   <br/>
                   Vivamus posuere volutpat mattis. Pellentesque a nibh urna. Praesent id dui a nunc facilisis euismod. Donec ac ipsum magna. Etiam molestie nisl dolor. Donec non libero id tortor pellentesque rhoncus. Aliquam laoreet tortor urna. In blandit nec tortor eget dictum. Mauris fermentum ultricies mauris sit amet vestibulum. Curabitur aliquet elit sed erat vestibulum efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam non accumsan diam, ullamcorper dapibus dolor. Donec mollis lacus vitae lacus maximus, eget eleifend ex imperdiet. Fusce feugiat ornare odio, sed volutpat lectus tristique vel. In cursus erat eu lacus tempus molestie.
                   <br/>
                   <br/>
                </span>

                <div>
                    <span className='bold'>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit:
                    </span>
                    <ul>
                      <li>Donec lobortis mi sed libero interdum facilisis.</li>
                      <li>Sed eu est at dolor aliquet posuere.</li>
                      <li>In semper augue sit amet urna dapibus mattis.</li>
                      <li>Ut sit amet turpis ut purus egestas dictum.</li>
                    </ul>
                </div>

                <span className='lastParagaph'>
                  In condimentum vel metus nec vestibulum. Nullam turpis neque, fringilla nec iaculis sed, commodo eu ligula. Nulla ac euismod ipsum. Cras consectetur viverra suscipit. In hac habitasse platea dictumst. Fusce in quam ultricies, ultricies ex sed, semper nisi. Fusce velit enim, mattis id lectus vel, rutrum luctus libero. Suspendisse id consectetur purus.
                  <br/>
                  <br/>
                  Mauris in leo sit amet augue laoreet condimentum sed ut est. Integer eget magna nunc. Suspendisse iaculis finibus nisl, a facilisis nibh lobortis quis. Etiam blandit vel massa et fringilla. Quisque dictum, nisi semper vestibulum volutpat, ex magna tempor eros, eget aliquet urna orci a odio. Integer ligula odio, cursus vitae euismod ac, luctus vel nisl. Donec ac massa cursus, mattis nisi vitae, porta lorem. Curabitur dapibus placerat velit, ac tempor arcu molestie non.
                </span>
            </div>
        </div>
        </>
    )
}

export default About;