import React from 'react'
import '../App.css';
const Form = () => {
    const myFunc= (e)=>{
        let input = document.querySelectorAll('input')
        input.forEach( item =>{
            if(item.value !=''){
                e.target.nextElementSibling.innerHTML ='qeydiyyat tamamlandi'
            }
        })
       
    
    }
   function  showAlert(e){
    if(e.target.value.length<10){
      
    }
   }
  return (
    <div>
        <form>
        <label>Ad
        <input  type="text"  required/>  
        </label><br/>
        <label>Soyad
            <input x type='text' required />
        </label><br/>
        <label htmlFor="">Telefon
            <input required className='number' type='number' onChange={showAlert} MinLength={10} />
        </label><br/>
        <label htmlFor="">E-mail
            <input required type='email'/>
        </label><br/>
        <label htmlFor="">Serh
            <input required className='serh' type='text'/>
        </label><br/>
        <button onClick={myFunc} >Gonder</button>
        
        <p></p>
        </form>
        
    </div>
  )
}

export default Form