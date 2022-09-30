//comandos do git//
//git status
//git add -A
//git commit -m 'primeira página' 
//git push origin main , empurra p o github
//npm run dev desenvolver localmente

import React, { useState } from "react"
import './index.module.css'


//Aqui começa front end//


function Home() {

    return <div main>
        <div id="perfil">
            <div>
                <img
                src="http://github.com/adrianoandrade92.png" 
                alt="Adriano Andrade Marques" 
                width="150" 
                height="150"/>            
            </div>
            
            <div DadosPessoais>                    
                <h1>Adriano Andrade Marques</h1>
                <h2>Engenheiro / Analista / Desenvolvedor</h2>
                <h3>Python | Javascript | HTML | CSS | REACT | SQL</h3>
                <p>adrianoandrade92@gmail.com</p>
            </div>

            <section>
                <div Linguas>
                    <h2>Línguas</h2>
                    <ul>
                        <li>
                            <p>Português(BR) | Inglês | Espanhol </p>
                        </li>
                    </ul>
                    <h2>SoftSkills</h2>
                    <ul>
                        <li>
                            <p>Colaboração | Flexibilidade | Resiliência </p>
                            <p>Perfil analítico e voltado para resultados baseado em dados.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <div Resumo>
                    <h2>Resumo</h2>
                    <p>                       
                        Me chamo Adriano, tenho 35 anos sou formado em Engenharia Mecânica pela Universidade Paulista - UNIP e também sou formado em Gestão de produção Industrial pela ETEP - Faculdades. Casado e um filho de 7 anos.
                        Viciado em assuntos de tecnologia e amo livros sobre liderança, desenvolvimento pessoal e gestão de projetos.
                        Trabalhei mais de 8 anos em indústria aeroespacial com desenvolvimento de produtos.
                        Meu estágio de Engenharia Mecânica foi na área de Engenharia de Sistemas, colaborando com analise de requisitos e criação de ESPEC de sistemas e subsistemas de foguetes guiados.
                        Tenho experiência em planejamento, indicadores, desenvolvimento e gerenciamento de projetos de engenharia.
                        DIP (Desenvolvimento Integrado do Produto) e BPMN (Business Process Model and Notation).
                        Desenvolvimento de softwares em linguagem Python, para análise de dados e automação de processos RPA. (Robotic Process Automation)
                        Atualmente estou me especializando em Analise de dados e aprendendo novas linguagens de programação e marcação.
                    </p>
            </div>

            <section>                
                <div Experiência>
                    <h2>Experiência</h2>
                    <ul class="Experiências">
                        <li>
                            <h3>Avibras Indústria Aeroespacial S/A</h3>
                            <h4>Engenharia de Sistemas</h4>
                            <h5>Maio de 2021 – Dezembro de 2021 (8 meses)</h5>
                            <p>Estágio de Engenharia e <i>Job Rotation</i>.</p>
                            <p>- Experiência em análise de requisitos de Sistemas e Subsistemas.</p>
                            <p>- Experiência em elaboração de ESPEC de Sistemas e Subsistemas.</p>
                            <p>- Experiência em acompanhamento de rastreabilidade de requisitos.</p>
                            <p>- Experiência em discuções técnicas nas reuniões de plenárias.</p>
                            <p>- Conhecimento em <i>System Enginneering Process</i> e <i>Requirements Analysis (
                                1. Customer expectations
                                2. Project and enterprise constraints
                                3. External constraints
                                4. Operational scenarios
                                5. Measure of effectiveness (MOEs)
                                6. System boundaries
                                7. Interfaces
                                8. Utilization environments
                                9. LIfe cycle
                                10. Functional requirements
                                11. Performance requirements
                                12. Modes of operation
                                13. Technical performance measures
                                14. Physical characteristics
                                15. Human systems integration)</i></p>                               
                        </li>

                        <li>
                            <h3>Avibras Indústria Aeroespacial S/A</h3>
                            <h4>Publicações Técnicas</h4>
                            <h5>agosto de 2013 – março de 2022 (8 anos e 8 meses)</h5>
                                <p>Desenvolvimento de produto na area de Publicações Técnicas:(Catálogo de peças, Manuais: Manutenção 1º, 2º e 3º Escalão), Manuais de Operação.</p>
                                <p>- Experiência em criação de planilhas avançadas em Excel para controle e edição dos catálogos de peças.</p>
                                <p>- Experiência em análise de documentação para cliente.</p>
                                <p>- Experiência em Mapeamento de Processos (As Is / To Be).</p>
                                <p>- Experiência em Modelagem de Processos (BPMN - Business Process Model and Notation).</p>
                                <p>- Experiência em Desenvolvimento do Produto.</p>
                                <p>- Experiência em DIP (Desenvolvimento Integrado do Produto)</p>
                                <p>- Experiência em criação de softwares orientado a objetos em linguagem Python com execução em segundo plano para RPA e análise de Dados.</p>
                                <p>- Experiência em Lean (Desenvolvimento de metodologias, ferramentas e estratégias de otimização dos processos com foco nos 4 pilares (Segurança, Qualidade, Prazo e Custo)</p>  
                        </li>

                        <li>
                            <h3>Global Acrílicos</h3>
                            <h4>Coordenador de Produção</h4>
                            <h5>Outubro de 2010 – julho de 2013 (2 anos e 10 meses)</h5>
                                <p>Responsável pela produção de peças em acrílicos e corte a laser.</p>
                                <p>Responsável pela Interface com cliente e desenvolvimento de projetos.</p>
                                <p>- Experiência com PCP, TMP, KAIZEN, Lean.</p>
                                <p>- Experiência em controle de qualidade e estoque.</p>
                                <p>- Desenvolvimento e gerenciamento de projetos e Interface com cliente.</p>
                                <p>- Experiência com MS Project e Excel.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <div FormacaoAcademica>
                    <h2>Formação Acadêmica</h2>
                    <ul class="FormacaoAcademica">
                        <li>
                            <h3>Bacharel em Engenharia Mecânica</h3>
                            <h3>UNIP - Universidade Paulista</h3>
                            <h4>Concluído - 2022</h4>
                        </li>
                        <li>
                            <h3>Gestão de Produção Industrial - Tecnologia</h3>
                            <h3>ETEP - Centro Universitário</h3>
                            <h4>Concluído - 2013</h4>
                        </li>                          
                    </ul>
            </div>

            <section CursosEspecializacoes>
                <div>
                    <h2>Especializações</h2>                    
                    <ul class="FormacaoAcademica">
                        
                        <li>
                            <h4>Cursos Industriais</h4>
                            <p>Senai: Mecânica Básica</p>
                            <p>Senai: Mecânica de Usinagem I</p>
                            <p>Senai & Petrobras: Oficial Encanador</p>
                            <p>Senai & Petrobras: SMS (Segurança Meio Ambiente e Trabalho)</p>
                            <p>Senai: Educação Ambiental</p>
                            <p>Senai: Industria 4.0</p>
                            <p>Senai: Segurança no Trabalho</p>
                        </li>

                        
                        <li>
                            <h4>Cursos Tecnologia</h4>
                            <p>Pacote Office</p>
                            <p>Excel Avançado (VBA)</p>
                            <p>AutoCad</p>
                            <p>SolidEdge</p>
                            <p>Corel Draw Avançado</p>
                            <p>Senai: Desvendando o 5G</p>
                            <p>Power BI (Business intelligence)</p>
                            <p>SENAC: SQL Server</p>
                            <p>GOOGLE: Certificado Profissional Google IT Automation with Python</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section ProjetosPessoais>                
                <div ProjetosPessoais>
                    <ul Projetos>                         
                        <li>
                            <h2>Projetos em desenvolvimento</h2>
                            <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" 
                            alt="Python logo" 
                            width="20" 
                            height="20"/>
                            <p><a href="projetopython.html" target="_blank" rel="noopener noreferrer">Python</a></p>
                           
                        </li>
                    </ul>                       
                </div>
            </section>  

            

            <p>Adicionar Fundo</p>
        </div>

    </div>
}
//Aqui acaba front end//



// Função criada para contar
function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>)
}

function redirect()
{
    window.location.href = "mailto:adrianoandrade92@gmail.com";

}



export default Home
