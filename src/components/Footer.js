import React from 'react';


export default function Footer(){

    return(
        <footer className='bg-blue-200 h-40'>
        <div>
            <h3 className='text-black text-xl px-20 py-10'>Site name, address, reaching number etc </h3>
            <div className='flex px-20 py-5'>
                <img src='/sm1.png/' alt='facebook' className='h-6 w-6 mx-6'/>
                <img src='/sm2.png/' alt='yt' className='h-6 w-6 mx-6'/>
                <img src='/sm3.png/' alt='in' className='h-6 w-6 mx-6'/>
                <img src='/sm4.png/' alt='ins'className='h-6 w-6 mx-6'/>
            </div>
            
        </div>
          
    </footer> 
    )
}