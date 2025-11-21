
import ProjectCard from './ProjectCard'

function Project() {
    return (
        <div id='projects' className='py-16 lg:w-[70%] mx-auto px-4  lg:px-0
        '>
            <h1 className='text-gray-200 text-center text-3xl sm:text-4xl  font-semibold' >A small selection of recent <br /> <span className='text-cyan-300 '>Projects</span></h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 py-16 gap-10'>
                <ProjectCard delay={0} icon='/images/p6.png' title="Mordern E-Commerce in TypeScript" para='App, UI/UX' live='https://asad-mart.vercel.app/' github='https://github.com/asaduzzaman8316/Asad-Shop' />

                <ProjectCard delay={100} icon='/images/l2.png' title="E-Learning Management System" para='App, UI/UX' live='https://lms8316.vercel.app/' github='https://github.com/asaduzzaman8316/learning-management-system' />

                <ProjectCard delay={200} icon='/images/p3.png' title="Mind Game" para='App, UI/UX' live='https://tictactoe8316.netlify.app/' github='https://github.com/asaduzzaman8316/Tic-Tac-Toc' />

                <ProjectCard delay={300} icon='/images/p5.png' title="Mordern E-Commerce in JavaScript" para='App, UI/UX' live='https://asad-e-commerce.vercel.app/' github='https://github.com/asaduzzaman8316/Asad-E-Commerce' />
            </div>
        </div>
    )
}

export default Project
