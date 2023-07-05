import React from 'react'

export default function Footer() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  return (
    <div className='w-screen pt-10 bg-[#FAFAFA] '>
      <div className='md:grid md:grid-cols-4 flex flex-row flex-wrap gap-16   sm:gap-2 px-5 sm:px-5 '>
      <div>
        <h3 className='text-secondary text-xl sm:text-xl sm:text-3xl'>
          A props de nom
        </h3><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Nous contacter</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'>Presse</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'>Besoin d'aide</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'>Notification Frauduleuses</a><br/>
      </div>
        <div>
          <h3 className='text-secondary text-xl sm:text-3xl'>
            Trouvez votre
          </h3><br />
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum et Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500 font-bold'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500 font-bold'> Lorem IpsumLorem</a><br/>

        </div>

        <div>
          <h3 className='text-secondary text-xl sm:text-3xl'>
          </h3><br />
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>

        </div>
        <div>
          <h3 className='text-secondary text-xl sm:text-3xl'>
            Recherches frèquentes
          </h3><br />
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum et Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum et Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum et Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
          <a href="/" className='text-xs sm:text-base text-gray-500'> Lorem Ipsum</a><br/>
        </div>
      </div>
       <div className='px-12 py-10'>
        <h3 className='text-secondary text-xl sm:text-3xl'>
          Recherche de Lorem Ipsum
        </h3><br />
        <sapn className='text-xs sm:text-base text-gray-500 space-x-1 flex flex-wrap'> Lorem Ipsum  : 
          {letters.map((el,i)=><a href='/' key={i} className='pl-2 font-bold'>{el}</a>)}</sapn>
      </div> 

      <div className='bg-white py-5 px-5  sm:px-12'>
        <div className='flex flex-col sm:flex-row  justify-between  items-center  gap-3'>
          <div className='flex-1'>
            <h1 className='text-primary font-bold text-5xl'>Logo</h1><br />
            <p className="text-sm text-gray-400">Consultez notre aide en ligne ou contactez-nous</p>
          </div>
          <div className='flex  gap-8'>
            <a href="/"><img src="/img/facebook.png" alt="" className='h-8 w-8' /></a>
            <a href="/"><img src="/img/linkedin.png" alt="" className='h-8 w-8' /></a>
            <a href="/"><img src="/img/instagram.png" alt="" className='h-8 w-8' /></a>
            <a href="/"><img src="/img/twitter.png" alt="" className='h-8 w-8' /></a>

          </div>

            <div>

            </div>

        </div>

      </div>
    </div>
  )
}
