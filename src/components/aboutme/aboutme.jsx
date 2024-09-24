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
                        Olá, eu sou o Jonas, um desenvolvedor ETL apaixonado por análise e ciência de dados, 
                        atualmente trabalhando na
                        &nbsp;
                        <b><a href="https://www.nappsolutions.com.br/" target="_blank" >NappSolutions</a></b>
                        &nbsp;
                        como Coordenador da equipe de Integração de Softwares, buscando gerir da forma mais adequada a equipe em busca dos resultados e eficiência no processo.
                        <br></br>
                        <br></br>
                        Também trabalho como professor de Ensino Médio e Técnico do Centro Paula Souza nos cursos de Desenvolvimento de Sistemas e Informática para Internet.
                        </p>
                    </div>
                    
                </div>
            </section>
            
            
        </div>
    )
}