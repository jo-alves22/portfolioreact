import './aboutme.css'
import perfil from '../../assets/perfil.jpg'

export default function Aboutme () {
    return(
        <div>
            <section>
                <h1 className='titleabout'>Sobre mim</h1>
                <div className="cardabout">
                    <figure>
                        <img src={perfil} alt="imagem jonas" />
                    </figure>
                    <div className="infoabout">
                        <p>
                        Olá, eu sou o Jonas, um desenvolvedor ETL do Brasil apaixonado por análise de dados, 
                        atualmente trabalhando na
                        &nbsp;
                        <b><a href="https://www.nappsolutions.com.br/" target="_blank" >NappSolutions</a></b>
                        &nbsp;
                        como Analista de Integração de Softwares, buscando aplicar os conhecimentos técnicos aliados a gestão
                        e scrum a fim de trazer os resultados e eficiência almejados.
                        <br></br>
                        <br></br>
                        Também gosto muito de trabalhar em side projects o que me permite explorar novas 
                        tecnologias ou me aprimorar.
                        </p>
                    </div>
                    
                </div>
            </section>
            
            
        </div>
    )
}