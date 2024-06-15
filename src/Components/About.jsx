import React from 'react'

function About() {
    return (
        <div className='container mt-5 mb-5 ' style={{ border: "1px solid grey" }}>
            <h1 className='text-center' style={{textDecoration:"underline"}} >About us</h1>

            <div className='ourstory' style={{marginTop:"40px"}}> 
            <h2 className='text-center'>Founder & C.E.O of Cloud7 photography</h2>
            <h4 className='text-center'>B.SASI KUMAR.DME.,</h4>
            </div>

         <div className='ourstory' style={{marginTop:"40px"}}> 
            <h2 className='text-center'>OUR STORY</h2>
            <p>"Cloud7 Photography was born out of a deep love for capturing the beauty of life.Our journey began when a group of friends with a shared enthusiasm for photography decided to turn their passion into a proffesion.Cloud7 means completely happy,perfect satisfied;in a europic state.We aim to approach every photoshoot as a friendly coloboration,working together to create art that resonatess with your soul"</p>
            </div>


           <div className='ourstory' style={{marginTop:"30px"}}>
            <h3 className='text-center'>WHAT WE BELIEVE</h3>
            <p>At Cloud7 photography,we believe that every individual and every moment is unique.Our mission is to reflect this uniqueness through the lens allowing you to telive the emotions,colors and beauty of your special moments when you wish </p>
            </div>


          <div className='ourstory' style={{marginTop:"30px"}}>
            <h3 className='text-center'>OUR APPROACH</h3>
            <p>We're not just photographers,we are storytellers.with a keen eye for detail and knack for capturing candid moments,we aim to reveal the authenticity and beauty bin every shot.whether it's your wedding day,a family gathering, or a personal portrait session,our goal is to create images that evoke smiles,tears of joy and memories to cherish </p>
            </div>
        </div>
    )
}

export default About