import React, { useEffect, useState } from 'react'
import validator from 'validator';


function URL() {



    const [inputUrl,setInputUrl] = useState('');
    const [shortenUrl,setShortenUrl] = useState('');
    const [responseStatus, sertResponseStatus] = useState(false);



    function HandleClick() {


        const data = {'uri' : inputUrl};

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
  };
        const fetchShortenUrl = () => {fetch('/uri/api/url',requestOptions)
        .then((response) => {return response.json()}).then((data) => {setShortenUrl(data['shortUrl'])})
    }

        if(validator.isURL(inputUrl)){

            fetchShortenUrl();
            
        }

        else{
            alert('Please Provide Valid input/URL');
        }
        
        
        
    }
    
    const ShortenUrl = () => 
        
            
            {   
                return (<p>{shortenUrl}</p>)
            }
    
   

  return (
    <>
    <div className='urlInput'>
      <input type='text' value ={inputUrl} placeholder="URL" onChange={(event) => {setInputUrl(event.target.value)}}/><br/>
      <button onClick={() => {HandleClick()}} >Shorten URL</button>
    </div>
    <div className='shortenUrl'>
        <ShortenUrl />
    </div>
    </>
    
  )
}

export default URL
