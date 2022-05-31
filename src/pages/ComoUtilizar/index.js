import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import utilizar  from "../../assets/img/pag_secundaria.png"


export function ComoUtilizar() {
    return (
        
        <div>
            <Navbar />

            <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>

                <h1 className="text-center" style={{color: "black", fontFamily: "sans-serif", fontSize: "40px",marginTop: "30px"}}>COMO UTILIZAR</h1>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="justify-content-center align-items-center text-justify p-5" style={{width: "48rem", backgroundColor:"rgba(201,153,242)", borderRadius: "30px"}} >
                        <h2 className="text-center" style={{color:"#631354"}}>Conheça a Fábrica de Negócio</h2>
                        <p>Tenha uma visão estratégica do seu negócio, construindo Personas e Modelos de Negócios de forma certeira para que as suas estratégias possam ser implementada com sucesso.</p>
                        <p>A Fábrica de Negócio é uma ferramenta flexível e de fácil compreensão. Com mais de 20 perguntas para você preencher e conseguir enxergar o seu negócio de forma mais clara. São diversas funcionalidades que farão o seu projeto criar forma.</p>

                        <p>Vincule o seu modelo de negócio com as personas que você personalizou e entenda como você pode criar conteúdos e soluções mais atrativos e úteis para os seus clientes.</p>

                        <p>Agilize e facilite o processo estratégico. Documente e edite sempre que necessário, sobretudo pela necessidade da constante validação dessas mudanças.</p>

                        <p>Realize o seu cadastro e comece agora mesmo.</p>

                        <div className="d-flex justify-content-center align-items-center
"  >
                        <img className = "m-2 rounded" src={ utilizar } alt="logo" style={{width:"400px", height:"auto"}}/>
                        </div>


                        <h2 className="text-center" style={{color:"#631354"}}>Como usar a Fábrica de Negócios?</h2>

                        <p><strong>1. </strong>Para começar, realize o seu cadastro e faça o login.</p>
                        <p><strong>2. </strong>Escolha se você quer criar primeiro a sua persona ou o seu modelo de negócio, escolhendo um dos botões na parte superior do site (Modelo de Negócios ou Personas).</p>
                        <p><strong>3. </strong>Preencha o formulário sem pressa, separe pelo menos 20 minutos para se dedicar a responder todas as perguntas. Se necessário realize pesquisas para obter as melhores respostas possíveis. Desta forma você saberá qual estratégia de marketing será melhor para o seu negócio.</p>
                        <p><strong>4. </strong>Se preferir, você pode vincular a sua persona desejada ao modelo de negócio, após a criação de ambos. </p>
                        <p><strong>5. </strong>Após suas criações, tudo estará salvo para quando você necessitar conferir ou alterar alguma informação. </p>
                        <p><strong>6. </strong>Com todas essas informações impressas na tela, você conseguirá montar uma estratégia de marketing que alavancará as suas vendas. </p>
                        
                        
                        
                        <h2 className="text-center"  style={{color:"#631354"}}>A importância do Modelo de Negócios</h2>
                        <p>Construir um Modelo de Negócios é a melhor maneira de iniciar sua estratégia. Para montar uma empresa e fazer com que suas ideias se transformem em um projeto de sucesso, você precisa ter uma visão abrangente e detalhada do mercado, do seu produto ou serviço e das suas atitudes como empreendedor.</p>

                        <p>Um dos fatores mais importantes aqui é visualizar a totalidade do seu negócio, organizando as ações para cada etapa. Porém, há outros elementos aos quais os empreendedores devem dar atenção, principalmente no caso de empresas iniciantes, como, por exemplo, a segmentação de clientes: é fundamental que você defina muito bem essa área. Na realidade, este deve ser o primeiro passo quando se começa a elaborar um modelo de negócio.</p> 

                        <p>E é importante deixar claro que essas informações não serão eternas. A estrutura de uma empresa muda o tempo inteiro e as premissas mudarão em questão de dias, assim como as ideias. Por isso a nossa funcionalidade de "editar" é tão importante.</p>


                        <h2 className="text-center" style={{color:"#631354"}}>Seu objetivo</h2>
                        <p>Foi desenvolvido pelo suiço Alex Osterwalder para facilitar o entendimento completo de um negócio. Assim, o modelo tem o objetivo de descrever todos os elementos e fases que compõem um empreendimento, proporcionando a integração da organização.</p> 

                        <p>De acordo com o criador dessa ideia, os componentes centrais de um empreendimento são: segmento de clientes, proposta de valor, canais de distribuição, relacionamento com clientes, fontes de receita, recursos principais, atividades chave, principais parcerias e custos.</p> 

                        <p>E a nossa ferramenta serve para te ajudar a elaborar esse Modelo de Negócio, facilitando o seu uso e te auxiliar a ter certeza de que suas ações de marketing estão alinhadas com o público certo para seu negócio.</p> 


                        <h2 className="text-center" style={{color:"#631354"}}>Como o Modelo de Negócio vai me ajudar a lucrar mais?</h2>
                        <p>É preciso lembrar que a inovação é a chave do sucesso. O Modelo Canvas possibilita ao empreendedor elaborar inovações estratégicas que vão aumentar a competitividade da empresa. O Modelo de Negócio é, assim, uma maneira de incrementar os processos de gestão da empresa, o que leva necessariamente a melhores resultados, inclusive financeiros.</p> 

                        <h2 className="text-center" style={{color:"#631354"}}>O que é uma persona?</h2>
                        <p>Persona é um personagem fictício que representa o cliente ideal do seu negócio. É baseado em dados e características de clientes reais. Trata-se de uma criação a partir de suas histórias pessoais, motivações, objetivos, desafios e preocupações.</p> 

                        <p>A persona é uma ferramenta de segmentação de mercado que, bem utilizada, alavancará as suas vendas.</p> 

                        <h2 className="text-center" style={{color:"#631354"}}>Benefícios de criar uma persona.</h2>
                        <p>Criar uma persona é uma das formas de você conseguir criar conteúdos e soluções mais atrativos e úteis, capazes de criar vínculos emocionais e entender o papel do seu produto ou serviço na vida de seus clientes.</p> 

                        <p>Imagine a dona Carmem, de 65 anos, que tem dificuldades em mexer em aparelhos celulares ou outras tecnologias. Ela gostaria de emagrecer e encontra dificuldades de encontrar roupas para seu peso e idade. Sabemos onde encontrá-la e onde não encontrá-la. Sabemos das suas dificuldades e de seus desafios. Concorda que é mais fácil agora criar um produto ou saber como encontrar ou conversar com pessoas como a dona Carmem?</p> 

                        <p>Ao desenvolver a sua persona ideal você pode começar a criar seus conteúdos e pensar em estratégias de marketing que gerem resultados e que sejam eficientes, voltadas para seu público em potencial.</p> 

                        <h2 className="text-center" style={{color:"#631354"}}>Como captar essas informações que irão me ajudar a criar essa persona?</h2>
                        <p>Entrevistar seus clientes é a melhor forma de definir sua persona. Assim, você evita “achismos” da percepção interna da empresa. Escolha pessoas, monte um roteiro para realizar entrevistas e pense na abordagem ideal.</p> 

                        <p>Use nossa ferramenta para criar e armazenar suas personas. Seja direto e ousado, reúna algumas questões primordiais e as faça para os seus clientes fixos e ideais, aqueles que você acha que realmente representam a sua marca. Entreviste mais de um cliente para obter respostas diversas e ter uma amostragem de informações maior.</p> 

                        <p>Aproveite o pós venda para pedir um feedback aos seus clientes, pergunte o que acharam mais interessante na sua marca - os conteúdos online, produtos e a venda. Não esqueça que observar os seus concorrentes também faz parte da pesquisa. Na verdade, essa pode ser a parte mais importante. É sempre importante analisar os elogios e reclamações dos seus concorrentes diretos. Veja os comentários nas redes sociais e observe o perfil dos clientes que interagem com essas marcas.</p> 

                        <h2 className="text-center" style={{color:"#631354"}}>Criei minha persona e agora?</h2>
                        <p>Depois de definir as personas, sua empresa está pronta para se comunicar da maneira mais adequada com seus potenciais clientes. O próximo passo é criar uma estratégia de relacionamento baseada na jornada de compra dessas personas.</p> 

<p>Sua empresa pode criar conteúdos baseados nessas informações coletadas e, em seguida, usar essa jornada para fazer um planejamento de automação de marketing.</p> 
                        <br />
                        
                    </div>
                </div>
            </div>
        </div>         
    )
}