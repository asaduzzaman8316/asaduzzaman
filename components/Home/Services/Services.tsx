
import ServicesCard from './ServicesCard'

function Services() {
    return (
        <div id='services' className='py-16 mx-auto '>
            <div className=' '>
                <h1 className='text-2xl md:text-3xl xl:text-4xl text-white font-bold text-center'>
                    Colleborate with brand <br />
                    and agencies to create <br />
                    impactful results
                </h1>
                <div

                    className='container sm:px-14 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center '>
                    <div data-aos='fade-right' >
                        <ServicesCard
                            icon="/images/s1.png"
                            name='UI and UX'
                            desc="Creating smooth, logical user flows and visually appealing screen layouts"
                        />
                    </div>
                    <div data-aos='fade-right' data-aos-delay='100'>
                        <ServicesCard
                            icon="/images/s2.png"
                            name='Web App'
                            desc="Developing the actual application that runs on browsers (web)"
                        />
                    </div>
                    <div data-aos='fade-right' data-aos-delay='200'>
                        <ServicesCard
                            icon="/images/s3.png"
                            name='Design & Creative'
                            desc="This includes logos, color palettes, imagery, and overall aesthetic direction."
                        />
                    </div>
                    <div data-aos='fade-right' data-aos-delay='300'>
                        <ServicesCard
                            icon="/images/s4.png"
                            name='Development'
                            desc="The technical process of turning designs into a functioning product"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
