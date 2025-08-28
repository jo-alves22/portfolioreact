import Aboutme from "../aboutme/aboutme"
import Contact from "../contact/contact"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import Projects from "../projects/Projects"
import Skillsets from "../skillsets/Skillsets"



function Home() {
    return(
        <>
        <div id="topo"></div>
        <Navbar />
        <Hero />
        <Aboutme />
        <Skillsets />
        <Projects />
        <Contact />
        </>
    )
}
export default Home