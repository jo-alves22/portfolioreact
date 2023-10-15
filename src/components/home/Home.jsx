import Aboutme from "../aboutme/aboutme"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import Projects from "../projects/Projects"
import Skillsets from "../skillsets/Skillsets"



function Home() {
    return(
        <>
        <Navbar />
        <Hero />
        <Aboutme />
        <Skillsets />
        <Projects />
        </>
    )
}
export default Home