import React from 'react';
import ReactPlayer from 'react-player/lazy';

export default function Preview(props){
    const {setPreview} = props;
    
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
          setPreview(false);
        }
    }

    return(
        <div className='backdrop' onClick={handleClick}>
            <ReactPlayer
                className='react-player'
                url="https://content.jwplatform.com/manifests/yp34SRmf.m3u8" 
                width='40%'
                height='40%'
                controls={true}
                playing={true}
        />
        </div>
       
    );
}