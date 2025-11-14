
import ContactLeft from './ContactLeft'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div
    id='contact'
      className='lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  mx-auto px-4 lg:px-0 my-16'>
      <ContactLeft />
      <ContactForm />
    </div>
  )
}

export default Contact
