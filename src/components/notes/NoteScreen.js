import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input 
                    type='text'
                    placeholder='Titulo'
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea
                    placeholder='Que está pasando?'
                    className='notes__title-textarea'>
                </textarea>
                <div className='notes__image'>
                    <img 
                        src='https://i.pinimg.com/736x/a8/fd/33/a8fd33f012f4a5370f8a5b047893480d.jpg'
                        alt='imagen'></img>
                </div>
            </div>
        </div>
    )
}
