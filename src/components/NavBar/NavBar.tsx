import { useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, Box, Typography, Container, Grid } from "@mui/material";
import project1Image from '../../assets/images/image.png';  // Projeto 1
import project2Image from '../../assets/images/preview.png';  // Projeto 2
import project3Image from '../../assets/images/arteimpressa.png'; // Projeto 3
import project4Image from '../../assets/images/hamburgueria.png'; // Projeto 4
import project5Image from '../../assets/images/software.jpg'; // about
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGit, FaDocker, FaReact, FaCode, FaWhatsapp } from 'react-icons/fa';

const NavBar = () => {
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const handleSkillsClick = () => {
        setShowSkills(!showSkills);
        setShowProjects(false);
        setShowAbout(false);
    };

    const handleProjectsClick = () => {
        setShowProjects(!showProjects);
        setShowSkills(false);
        setShowAbout(false);
    };

    const handleAboutClick = () => {
        setShowAbout(!showAbout);
        setShowSkills(false);
        setShowProjects(false);
    };

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0 16px",
    }));

    const ProjectImage = styled("img")(() => ({
        width: "100%",
        height: "200px",  // Define a altura fixa para todas as imagens
        objectFit: "contain",  // Ajusta a imagem para que ela caiba dentro da área sem ser cortada
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out", // Transição suave e mais lenta
        '&:hover': {
            transform: "scale(1.1)", // Efeito de zoom mais intenso
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.6)", // Aumenta a sombra
        }
    }));

    const StyledButton = styled("a")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        color: 'Black',
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textDecoration: "none",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    }));

    const Section = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    }));

    const SectionImage = styled("img")(() => ({
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "16px",
    }));

    return (
        <>
            <AppBar position="absolute" color="primary" elevation={0}>
                <StyledToolbar>
                    <MenuItem onClick={handleAboutClick} style={{ cursor: "pointer" }}>
                        About
                    </MenuItem>
                    <MenuItem onClick={handleSkillsClick} style={{ cursor: "pointer" }}>
                        Skills
                    </MenuItem>
                    <MenuItem onClick={handleProjectsClick} style={{ cursor: "pointer" }}>
                        Projects
                    </MenuItem>
                </StyledToolbar>
            </AppBar>

            {showAbout && (
                <Section>
                    <SectionImage src={project5Image} alt="Sobre mim" />
                    <Typography variant="h4" gutterBottom>Sobre Mim / About Me</Typography>
                    <Typography variant="body1">
                        Sou Bruna Vilanova, uma estudante de Engenharia de Software apaixonada por resolver problemas complexos e criar soluções inovadoras. Atualmente, estou cursando Engenharia de Software na Universidade Anhanguera, onde estou desenvolvendo habilidades avançadas em HTML, CSS, JavaScript e Python, e aprendendo sobre frameworks como React, Node.js, Flask e Pandas.
                        <br />
                        Durante meus estudos, trabalhei em diversos projetos desafiadores, incluindo um sistema de e-commerce e um player de música interativo. Essas experiências me permitiram aprimorar minhas habilidades em desenvolvimento frontend e backend, além de ganhar conhecimento prático em tecnologias emergentes.
                        <br />
                        Estou especialmente interessada em Desenvolvimento Frontend, e estou sempre buscando novas oportunidades para aprender e crescer profissionalmente. Meu objetivo é trabalhar em um ambiente inovador onde eu possa aplicar meus conhecimentos e contribuir para a criação de soluções eficazes e escaláveis.
                        <br />
                        Estou aberta a desafios empolgantes e oportunidades de crescimento profissional. Se você deseja saber mais sobre mim ou discutir oportunidades, sinta-se à vontade para entrar em contato!
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        I am Bruna Vilanova, a Software Engineering student passionate about solving complex problems and creating innovative solutions. Currently, I am pursuing a degree in Software Engineering at Anhanguera University, where I am developing advanced skills in HTML, CSS, JavaScript, and Python, and learning about frameworks such as React, Node.js, Flask, and Pandas.
                        <br />
                        Throughout my studies, I have worked on various challenging projects, including an e-commerce system and an interactive music player. These experiences have allowed me to enhance my frontend and backend development skills, as well as gain practical knowledge in emerging technologies.
                        <br />
                        I am particularly interested in Frontend Development and am always looking for new opportunities to learn and grow professionally. My goal is to work in an innovative environment where I can apply my knowledge and contribute to creating effective and scalable solutions.
                        <br />
                        I am open to exciting challenges and professional growth opportunities. If you would like to know more about me or discuss opportunities, feel free to get in touch!
                    </Typography>
                    <Box mt={2}>
                        <StyledButton href="https://wa.me/5511971552389" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={20} /> Contact me on WhatsApp
                        </StyledButton>
                    </Box>
                </Section>
            )}

            {showSkills && (
                <Section>
                    <Typography variant="h4" gutterBottom>Minhas Habilidades / My Skills</Typography>
                    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaHtml5 size={40} />
                            <Typography variant="body1">HTML</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaCss3Alt size={40} />
                            <Typography variant="body1">CSS</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaJsSquare size={40} />
                            <Typography variant="body1">JavaScript</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaPython size={40} />
                            <Typography variant="body1">Python</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaGit size={40} />
                            <Typography variant="body1">Git</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaDocker size={40} />
                            <Typography variant="body1">Docker</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaReact size={40} />
                            <Typography variant="body1">React</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <FaCode size={40} />
                            <Typography variant="body1">TypeScript</Typography>
                        </Box>
                    </Box>
                </Section>
            )}

            {showProjects && (
                <Section>
                    <Typography variant="h4" gutterBottom>Meus Projetos / My Projects</Typography>
                    <Container>
                        <Grid container spacing={2}>
                            {/* Projeto 1 */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                    <ProjectImage src={project1Image} alt="Projeto 1" />
                                    <Typography variant="h6" mt={2}>jogo de resgate</Typography>
                                    <Typography variant="body2">
                                    Este projeto é uma aplicação simples de um jogo de resgate, onde o jogador utiliza as teclas W, S, e D para controlar um helicóptero. 
                                    A interface é composta por um fundo dinâmico e interativo que se ajusta automaticamente ao tamanho da tela, oferecendo uma experiência visual agradável e envolvente.
                                        <br />
                                        <a href="https://github.com/brunavillanova/Jogo_de_resgate" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                        <br />
                                        <a href="https://jogodetirobruna.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Projeto 2 */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                    <ProjectImage src={project2Image} alt="Projeto 2" />
                                    <Typography variant="h6" mt={2}>Player de Música</Typography>
                                    <Typography variant="body2">
                                    Este projeto implementa um player de música interativo usando HTML, CSS e JavaScript. O player oferece uma experiência completa de reprodução de músicas, 
                                    incluindo funcionalidades como tocar, pausar, avançar e retroceder faixas, ajuste de barra de progresso, botão de curtida, shuffle, repetição e muito mais. 
                                    Todas as configurações do usuário, como curtir músicas ou ativar o shuffle, são salvas no localStorage para que sejam mantidas mesmo após recarregar a página.
                                        <br />
                                        <a href="https://github.com/brunavillanova/minhaPlayList" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                        <br />
                                        <a href="https://playlistbruna.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Projeto 3 */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                    <ProjectImage src={project3Image} alt="Projeto 3" />
                                    <Typography variant="h6" mt={2}>e-commerce para camisetas personalizadas.</Typography>
                                    <Typography variant="body2">
                                    Este projeto consiste em um sistema de e-commerce para camisetas personalizadas.
                                     Ele inclui uma aplicação frontend desenvolvida com React e um backend em Node.js com Express que gerencia uploads de imagens e fornece APIs para o frontend.
                                        <br />
                                        <a href="https://github.com/brunavillanova/estampasArteImpressa" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                        <br />
                                        <a href="https://arteimpressajb.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Projeto 4 */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Box p={2} bgcolor="white" borderRadius="12px" boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)">
                                    <ProjectImage src={project4Image} alt="Projeto 4" />
                                    <Typography variant="h6" mt={2}>Cardápio Interativo com Carrinho de Compras e Integração com WhatsApp</Typography>
                                    <Typography variant="body2">
                                    O "Cardápio Interativo" é uma aplicação web que permite aos usuários adicionar itens de um menu ao carrinho de compras e 
                                    finalizar o pedido enviando uma mensagem de resumo para um número de WhatsApp. A aplicação é projetada para restaurantes 
                                    que desejam oferecer um método rápido e conveniente para os clientes fazerem pedidos online.
                                        <br />
                                        <a href="https://github.com/brunavillanova/cardapio" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                        <br />
                                        <a href="https://brubuerguer.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto / Access Project</a>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Section>
            )}
        </>
    );
};

export default NavBar;
