import Image from 'next/image'

type porpsData = {
    icon: string,
    name: string,
    desc: string
}
function ServicesCard({ icon, name, desc }: porpsData) {
    return (
        <div className='flex flex-col justify-center items-center text-center lg:text-start lg:justify-start lg:items-start'>
            <Image
                src={icon}
                width={60}
                height={60}
                alt={name}
            />
            
                <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200'>{name}</h1>
                <p className='text-gray-300 mt-6'>{desc}</p>
            
        </div>
    )
}

export default ServicesCard
