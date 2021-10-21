import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div 
                className='journal__entry_picture'
                style={{
                    backgroundSize:'cover',
                    backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg")'
                }}>
            </div>
            <div className='jorunal__entry-body'>
                    <p className='journal_entry-tittle'>
                        Un nuevo dia
                    </p>
                    <p className='journal_entry-content'>
                        Lorem Ipsim
                    </p>
                </div>
                <div className='jorunal__entry_date'>
                    <span>Lunes</span>
                    <h4>28</h4>
                </div>
        </div>
    )
}
