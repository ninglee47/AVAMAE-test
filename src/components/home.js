import React from 'react';

function Home({imgs}) {
    console.log(imgs)
    return (
        <>
        <p>Home</p>
        <div>Section 1
            {imgs[0].Title}
        </div>
        <div>Section 2</div>
        <div>Section 3</div>
        <div>Section 4</div>
        
        </>
    )
}

export default Home;