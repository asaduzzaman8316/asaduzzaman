
import ContactLeft from './ContactLeft'
import ContactForm from './ContactForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Asaduzzaman Portfolio",
  description: "Hi! i am Asaduzzaman a Front-End Web Devloper.",
  keywords: ['asaduzzaman', 'asad', 'asaduzzaman8316', 'asad portfolio', 'portfolio', 'web devloper', 'front-end devloper', 'mern devloper', 'best devloper', 'asaduzzaman-dev.vercel.app', 'asaduzzaman-dev', 'asaduzzaman.dev', 'asaduzzamandev', 'asaduzzamancse'],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      "max-snippet": -1,
    }
  }
};
function Contact() {
  return (
    <div
      id='contact'
      className='lg:px-14 container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  mx-auto px-4  my-16'>
      <ContactLeft />
      <ContactForm />
    </div>
  )
}

export default Contact
