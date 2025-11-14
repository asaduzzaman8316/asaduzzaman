
function ContactForm() {
  return (
    <div
      className=' md:p-10 p-5 space-y-6  bg-[#131332] rounded-lg '>
      <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#353559] outline-none rounded-md w-full placeholder:text-white/70 text-gray-300' />
      <input type="text" placeholder='Email Address' className='px-4 py-3.5 bg-[#353559] outline-none rounded-md w-full placeholder:text-white/70 text-gray-300' />
      <input type="text" placeholder='Mobile Number' className='px-4 py-3.5 bg-[#353559] outline-none rounded-md w-full placeholder:text-white/70 text-gray-300' />
      <textarea rows={6} cols={20} placeholder='Your Messages' className='px-4 py-3.5 bg-[#353559] outline-none rounded-md w-full placeholder:text-white/70 text-gray-300' />
      <button className='mt-8 px-12 py-4 bg-blue-800 hover:bg-blue-900 rounded-full duration-300 transition-all text-white cursor-pointer'>Send Messages</button>
    </div>
  )
}

export default ContactForm
