import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({ data }) => {
    return (

        <>

        {
            data.map((Element, k) => {
                return (
                    <>
                        
                            <div class="card hove mb-4"  style={{ width:'25rem', border:"none" }}>
                                <img src={Element.imgdata} class="card-img-top"  className='cd mb-4 ' alt="..."></img>


                                <div className='Card_body'>
                                    <div className='upper_data d-flex justify-content-between align-items-center'>
                                        <h4 className='mt-2'>{Element.rname}</h4>
                                        <span>{Element.rating}&nbsp;★</span>
                                    </div>

                                    <div className='lower_data d-flex justify-content-between'>
                                        <h5> {Element.address} </h5>
                                        <span>{Element.price}</span>
                                    </div>

                                    <div className='extra'></div>

                                    <div className='last_data d-flex justify-content-between align-items-center'>
                                        <img src={Element.arrimg} className='limg'></img>
                                        <p>{Element.somedata}</p>
                                        <img src={Element.delimg} className='laimg'></img>
                                    </div>

                                </div>

                            </div>
                        

                    </>
                )
            })
        }

</>
    )
    
}


export default Cards
