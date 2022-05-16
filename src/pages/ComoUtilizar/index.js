import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';

export function ComoUtilizar() {
    return (
        
        <div>
            <Navbar />

            <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>

                <h1 className="text-center" style={{color:"white"}}>COMO UTILIZAR</h1>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="justify-content-center align-items-center text-justify p-5" style={{width: "48rem", backgroundColor:"rgba(255,255,255,0.7)", borderRadius: "30px"}} >
                        <h2>O que é uma persona?</h2>
                        <p>Persona é um personagem fictício que representa o cliente ideal do seu negócio. É baseado em dados e características de clientes reais. Trata-se de uma criação a partir de suas histórias pessoais, motivações, objetivos, desafios e preocupações.</p>
                        <p>A persona é uma ferramenta de segmentação de mercado que, bem utilizada, alavancará as suas vendas.</p>

                        <h2>Benefícios de criar uma persona.</h2>
                        <p>Criar uma persona é uma das formas de você conseguir criar conteúdos e soluções mais atrativos e úteis, capazes de criar vínculos emocionais e entender o papel do seu produto ou serviço na vida de seus clientes.</p> 
                        <p>Imagine a dona Carmem, de 65 anos, que tem dificuldades em mexer em aparelhos celulares ou outras tecnologias. Ela gostaria de emagrecer e encontra dificuldades de encontrar roupas para seu peso e idade. Sabemos onde encontrá-la e onde não encontrá-la. Sabemos das suas dificuldades e de seus desafios. Concorda que é mais fácil agora criar um produto ou saber como encontrar ou conversar com pessoas como a dona Carmem? </p>
                        <p>Ao desenvolver a sua persona ideal você pode começar a criar seus conteúdos e pensar em estratégias de marketing que gerem resultados e que sejam eficientes, voltadas para seu público em potencial.</p>
                        <h2>Como captar essas informações que irão me ajudar a criar essa persona?</h2>
                        <p>Entrevistar seus clientes é a melhor forma de definir sua persona. Assim, você evita “achismos” da percepção interna da empresa. Escolha pessoas, monte um roteiro para realizar entrevistas e pense na abordagem ideal.</p>

                        <p><strong>Use nossa ferramenta para criar e armazenar suas personas.</strong> Seja direto e ousado, reúna algumas questões primordiais e as faça para os seus clientes fixos e ideais, aqueles que você acha que realmente representam a sua marca. Entreviste mais de um cliente para obter respostas diversas e ter uma amostragem de informações maior. </p>
                        <p>Aproveite o pós venda para pedir um feedback aos seus clientes, pergunte o que acharam mais interessante na sua marca - os conteúdos online, produtos e a venda.
                        Não esqueça que observar os seus concorrentes também faz parte da pesquisa. Na verdade, essa pode ser a parte mais importante. É sempre importante analisar os elogios e reclamações dos seus concorrentes diretos. Veja os comentários nas redes sociais e observe o perfil dos clientes que interagem com essas marcas. </p>
                        <h2>Criei minha persona e agora?</h2>
                        <p>Depois de definir as personas, sua empresa está pronta para se comunicar da maneira mais adequada com seus potenciais clientes. O próximo passo é criar uma estratégia de relacionamento baseada na jornada de compra dessas personas.</p>
                        <p>Sua empresa pode criar conteúdos baseados nessas informações coletadas e, em seguida, usar essa jornada para fazer um planejamento de automação de marketing.</p>
                        <br />
                        <h5 className="text-center">Agora você está pronto, <Link to="/cadastro">clique aqui</Link> e comece a criar a sua persona!</h5>
                    </div>
                </div>
            </div>
        </div>         
    )
}