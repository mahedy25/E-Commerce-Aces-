import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className="text-center mb-6">
      {/* Title text */}
      <h2 className="font-semibold font-sans text-gray-800 mb-2">
        {text1} <span className="text-fuchsia-600">{text2}</span>
      </h2>
      
      {/* Line below title */}
      <div className="w-56 sm:w-60 md:w-[300px] h-[2px] bg-gray-800 mx-auto mb-4"></div>
    </div>
    
  )
}

export default Title
