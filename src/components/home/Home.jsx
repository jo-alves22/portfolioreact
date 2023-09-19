import Aboutme from "../aboutme/aboutme"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import Skillsets from "../skillsets/Skillsets"



function Home() {
    return(
        <>
        <Navbar />
        <Hero />
        <Aboutme />
        <Skillsets />
        </>
    )
}
export default Home