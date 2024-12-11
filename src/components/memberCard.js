import React from 'react'
import '../styles/memberCard.css'

function MemberCard({name, imageSrc, description}) {
    return (
        <div className='member-card'>
            <div className='member-text'>
                <h2>{name}</h2>
            </div>
                <img
                    src={imageSrc}
                    className='member-image'
                    alt='member image'
                />     
            <div className='member-text-box'>
                <div className='member-text'>
                    <h3>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default MemberCard