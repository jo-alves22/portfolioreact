import Aboutme from "../aboutme/aboutme"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"



function Home() {
    return(
        <>
        <Navbar />
        <Hero />
        <Aboutme />
        </>
    )
}
export default Home