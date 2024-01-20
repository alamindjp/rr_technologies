import React from 'react';

export const InputField = ({label,placeholder,type}) => {
    return (
        <div className='flex flex-col'>
            <label className=' font-medium'>{label}</label>
            <input type={type} placeholder={placeholder} className='mt-1 outline-none rounded-md p-4 bg-[#F9FAFF] border border-[#DEE6FF] focus:border-[#a8b5dd]' />
        </div>
    );
};

 
 export const TextareaField = ({label,placeholder}) => {
    return (
        <div className='flex flex-col'>
              <label className=' font-medium'>{label}</label>
          <textarea placeholder={placeholder} className='mt-1 outline-none rounded-md p-4 bg-[#F9FAFF] border border-[#DEE6FF] focus:border-[#a8b5dd]' ></textarea>
        </div>
    );
 };
 