import { useState } from "react";
import { AppBar, MenuItem, Toolbar, styled, Box, Typography, List, ListItem, Container, Grid } from "@mui/material";

const NavBar = () => {
    // Estados para controlar a visibilidade das seções de skills e projects
    const [showSkills, setShowSkills] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    // Função para alternar a exibição das skills
    const handleSkillsClick = () => {
        setShowSkills(!showSkills);
        setShowProjects(false); // Oculta projetos se skills forem exibidas
    };

    // Função para alternar a exibição dos projetos
    const handleProjectsClick = () => {
        setShowProjects(!showProjects);
        setShowSkills(false); // Oculta skills se projetos forem exibidos
    };

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0 16px",
    }));

    return (
        <>
            <AppBar position="absolute" color="primary" elevation={0}>
                <StyledToolbar>
                    <MenuItem>
                        <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>About</a>
                    </MenuItem>
                    <MenuItem onClick={handleSkillsClick} style={{ cursor: "pointer" }}>
                        Skills
                    </MenuItem>
                    <MenuItem onClick={handleProjectsClick} style={{ cursor: "pointer" }}>
                        Projects
                    </MenuItem>
                </StyledToolbar>
            </AppBar>

            {/* Seção de Skills */}
            {showSkills && (
                <Box mt={8} p={2} bgcolor="grey.100" textAlign="center">
                    <Typography variant="h4" gutterBottom>Minhas Habilidades</Typography>
                    <List>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>React.js</ListItem>
                        <ListItem>Node.js</ListItem>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>HTML & CSS</ListItem>
                        <ListItem>Git</ListItem>
                        <ListItem>Docker</ListItem>
                    </List>
                </Box>
            )}

            {/* Seção de Projects */}
            {showProjects && (
                <Box mt={8} p={2} bgcolor="grey.100" textAlign="center">
                    <Typography variant="h4" gutterBottom>Meus Projetos</Typography>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box p={2} bgcolor="white" boxShadow={3}>
                                    <Typography variant="h6" gutterBottom>Jogo de Resgate</Typography>
                                    <Typography variant="body1">Este projeto é uma aplicação simples de um jogo de resgate, onde o jogador utiliza as teclas W, S, e D para controlar um helicóptero. A interface é composta por um fundo dinâmico e interativo que se ajusta automaticamente ao tamanho da tela, oferecendo uma experiência visual agradável e envolvente.</Typography>
                                    {/* Link para o GitHub */}
                                    <a href="https://github.com/brunavillanova/Jogo_de_resgate" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    {/* Link para o projeto ao vivo */}
                                    <a href="https://jogodetirobruna.netlify.app/" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box p={2} bgcolor="white" boxShadow={3}>
                                    <Typography variant="h6" gutterBottom>Projeto 2</Typography>
                                    <Typography variant="body1">Descrição do projeto 2.</Typography>
                                    {/* Link para o GitHub */}
                                    <a href="https://github.com/seu-usuario/projeto2" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                                    <br />
                                    {/* Link para o projeto ao vivo */}
                                    <a href="https://www.projeto2.com" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
                                </Box>
                            </Grid>
                            {/* Adicione mais projetos aqui */}
                        </Grid>
                    </Container>
                </Box>
            )}
        </>
    );
};

export default NavBar;
