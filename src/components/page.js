import React from 'react'

export default function Page({ gotoNextPage, gotoPrevPage }) {
    const style = {
        border: '3px solid gray',
        margin:  '1rem',
        padding: '1rem',
        color: 'blue',
        backgroundColor: '#FFCA1B',
  }
//styles 
  return (
    <div >
      {gotoPrevPage && <button style={style} onClick={gotoPrevPage}>Previous</button>}   
                       {/* calls our function */}   
                       {/* if statement check*/}   
      {gotoNextPage && <button style={style} onClick={gotoNextPage}>Next</button>}
    </div>
  )
}