import Social from '@/components/Share/Social/Social'

import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'

function ContactLeft() {
  return (
    <div
    data-aos='fade-up-right'
      className=''>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
        Schedule a call with me to see if I can help
      </h1>
      <p className='text-gray-400 mt-6 text-base sm:text-lg'>Reach out to me today and let’s discuss how I can help you achieve your goals.</p>
      <div className='mt-7'>
        <div className='flex items-center space-x-3 mb-4'>
          <BiPhone className='size-9 text-cyan-300' />
          <p
            className='text-xl font-bold text-gray-400'
          >
            +880 1610839202
          </p>
        </div>
        <div className='flex items-center space-x-3 mb-4'>
          <BiEnvelope className='size-9 text-cyan-300' />
          <p
            className='text-xl font-bold text-gray-400'
          >
            asaduzzaman8316@gmail.com
          </p>
        </div>
        <div className='flex items-center space-x-3 mb-4'>
          <BiMap className='size-9 text-cyan-300' />
          <p
            className='text-xl font-bold text-gray-400'
          >
            Rangpur Bangladesh
          </p>
        </div>
        <Social />
      </div>
    </div>
  )
}

export default ContactLeft
