import { useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, Box, Typography, Container, Grid } from "@mui/material";
import project1Image from '../../assets/images/image.png';  // Projeto 1
import project2Image from '../../assets/images/preview.png';  // Projeto 2
import project3Image from '../../assets/images/arteimpressa.png'; // Projeto 3
import project4Image from '../../assets/images/hamburgueria.png'; // Projeto 4
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGit, FaDocker,FaReact, FaCode} from 'react-icons/fa';

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
        height: "auto",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
                <Box mt={8} p={2} bgcolor="rgba(0, 0, 0, 0.2)" textAlign="center">
                    <Typography variant="h4" gutterBottom>About</Typography>
                    <Typography variant="body1">
                        Sou Bruna Vilanova, uma engenheira de software apaixonada por resolver problemas complexos e criar soluções inovadoras. Tenho experiência em HTML, CSS, JavaScript e Python, e estou sempre buscando aprender novas tecnologias. Além disso, possuo conhecimentos em frameworks e bibliotecas modernas, como React e Node.js. Meu objetivo é desenvolver aplicações eficientes e escaláveis, com foco em uma excelente experiência do usuário. Estou aberta a desafios empolgantes e oportunidades de crescimento profissional.
                    </Typography>
                </Box>
            )}

            {showSkills && (
                <Box mt={8} p={2} bgcolor="rgba(0, 0, 0, 0.2)" textAlign="center">
                    <Typography variant="h4" gutterBottom>Minhas Habilidades</Typography>
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
                </Box>
            )}

            {showProjects && (
                <Box mt={8} p={2} bgcolor="rgba(0, 0, 0, 0.2)" textAlign="center">
                    <Typography variant="h4" gutterBottom>Meus Projetos</Typography>
                    <Container>
                        <Grid container spacing={2}>
                            {/* Projeto 1 */}
                            <Grid item xs={12} sm={6}>
                                <Box p={2} bgcolor="grey" boxShadow={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <ProjectImage src={project1Image} alt="Imagem do Jogo de Resgate" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" gutterBottom>Jogo de Resgate</Typography>
                                            <Typography variant="body1">
                                                Este projeto é uma aplicação simples de um jogo de resgate, onde o jogador utiliza as teclas W, S, e D para controlar um helicóptero. A interface é composta por um fundo dinâmico e interativo que se ajusta automaticamente ao tamanho da tela.
                                            </Typography>
                                            <a href="https://github.com/brunavillanova/Jogo_de_resgate" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                            <br />
                                            <a href="https://jogodetirobruna.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Projeto 2 */}
                            <Grid item xs={12} sm={6}>
                                <Box p={2} bgcolor="grey" boxShadow={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <ProjectImage src={project2Image} alt="Imagem do Player de Música" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" gutterBottom>Player de Música</Typography>
                                            <Typography variant="body1">
                                                Este projeto implementa um player de música interativo usando HTML, CSS e JavaScript. O player oferece uma experiência completa de reprodução de músicas, incluindo funcionalidades como tocar, pausar, avançar e retroceder faixas, ajuste de barra de progresso, botão de curtida, shuffle, repetição e muito mais. Todas as configurações do usuário, como curtir músicas ou ativar o shuffle, são salvas no localStorage.
                                            </Typography>
                                            <a href="https://github.com/brunavillanova/minhaPlayList" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                            <br />
                                            <a href="https://playlistbruna.netlify.app" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Projeto 3 */}
                            <Grid item xs={12} sm={6}>
                                <Box p={2} bgcolor="grey" boxShadow={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <ProjectImage src={project3Image} alt="Imagem do Projeto 3" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" gutterBottom>Sistema E-Commerce</Typography>
                                            <Typography variant="body1">
                                                Este projeto consiste em um sistema de e-commerce para camisetas personalizadas. Ele inclui uma aplicação frontend desenvolvida com React e um backend em Node.js com Express que gerencia uploads de imagens e fornece APIs para o frontend.
                                            </Typography>
                                            <a href="https://github.com/brunavillanova/estampasArteImpressa" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                            <br />
                                            <a href="https://arteimpressajb.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            {/* Projeto 4 */}
                            <Grid item xs={12} sm={6}>
                                <Box p={2} bgcolor="grey" boxShadow={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <ProjectImage src={project4Image} alt="Imagem do Projeto 4" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" gutterBottom>Cardapio Online</Typography>
                                            <Typography variant="body1">
                                                O "Cardápio Interativo" é uma aplicação web que permite aos usuários adicionar itens de um menu ao carrinho de compras e finalizar o pedido enviando uma mensagem de resumo para um número de WhatsApp. A aplicação é projetada para restaurantes que desejam oferecer um método rápido e conveniente para os clientes fazerem pedidos online.
                                            </Typography>
                                            <a href="https://github.com/brunavillanova/cardapio" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                            <br />
                                            <a href="https://brubuerguer.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            )}
        </>
    );
};

export default NavBar;
