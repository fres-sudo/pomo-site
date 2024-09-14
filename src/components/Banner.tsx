import React from 'react'

function Banner() {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rbg(252,_214,_255,_.7),rbg(41,_216,_255,_.7),rbg(255,_253,_128,_.7),rbg(248,_154,_191,_.7),rbg(252,_214,_255,_.7))]"
    >

      <div className="container">
        <p>
          <span className='hidden sm:inline'>A simpler and minimal way to organize your study and yout project. - </span>
          <a href='#' className='underline underline-offset-2 font-medium'>
            Download now from the stores</a>

        </p>
      </div>

    </div>
  )
}

export default Banner 
