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
                        Olá, eu sou o Jonas, desenvolvedor ETL com uma forte paixão por análise e ciência de dados.
                        Atualmente, atuo como Coordenador da equipe de integração de softwares na
                        &nbsp;
                        <b><a href="https://www.nappsolutions.com.br/" target="_blank" >NappSolutions</a></b>, 
                        onde trabalho para liderar nossa equipe na busca por resultados sólidos e processos de integração eficientes.
                        <br></br>
                        <br></br>
                        Além disso, leciono para os cursos de Desenvolvimento de Sistemas e Informática para Internet no <b>Centro Paula Souza</b>, nos níveis de Ensino Médio e Técnico, 
                        onde compartilho meu conhecimento e experiência com novos talentos na área de tecnologia.
                        </p>
                    </div>
                    
                </div>
            </section>
            
            
        </div>
    )
}