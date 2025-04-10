import experience from "./experience";
import experience_eng from "./experience_eng";
import projects from "./projects";
import projects_eng from "./projects_eng"

const lenguage = {
    spanish: {
        navbar: {
            menu: {
                hero:"Inicio", 
                about: "Sobre Mí", 
                projects: "Proyectos", 
                skills: "Habilidades", 
                experience: "Experiencia", 
                contact: "Contacto"
            }
        },
        hero: {
            greeting: "Hola, soy ", 
            career: "Desarrollador Full Stack", 
            expert: "Creo aplicaciones web modernas y atractivas", 
            buttons: ["Ver Proyectos", "Contactar"]
        },
        about: {
            title: "Sobre Mí", 
            subtitle: "Desarrollador Full Stack apasionado por crear soluciones web impactantes", 
            summary: "Soy un desarrollador Fullstack con 4 años de experiencia en la creación de aplicaciones modernas y responsivas. Me especializo en tecnologías tanto de frontend como de backend, lo que me permite desarrollar soluciones completas de principio a fin.",
            aboutme: [
                {title: "Nombre:", subtitle: "Salvador Jeremías López Gómez"},
                {title: "Email:", subtitle: "salvador.lopez.970519@gmail.com"},
                {title: "Ubicación:", subtitle: "Tuxtla Gutierrez, Chiapas"},
                {title: "Disponibilidad:", subtitle: "Freelance / Tiempo completo"},
            ],
            buttons: ["Descargar CV", "Descargar CV en Ingles", "Contactar"]
        },
        skills: {
            title: "Mis Habilidades",
            subtitle: "Tecnologías y herramientas que domino",
        },
        experience: {
            title: "Experiencia",
            experience: experience
        },
        projects: {
            title: "Mis Proyectos",
            subtitle: "Aquí hay algunos proyectos en los que he trabajado recientemente",
            projects: projects
        },
        contact: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
            contact: ["Email", "Teléfono", "Ubicación"],
            form: {
                name: "Tu nombre", 
                email: "Tu correo", 
                subject: "Asunto", 
                message: "Tu mensaje",
                sending: "Enviando",
                button: "Enviar Mensaje"
            }
        },
        footer: {
            subtitle: "Desarrollando soluciones creativas",
            navigation: {
                title: "Navegación", 
                menu: {
                    hero:"Inicio", 
                    about: "Sobre Mí", 
                    projects: "Proyectos", 
                    skills: "Habilidades", 
                    experience: "Experiencia", 
                    contact: "Contacto"
                }
            },
            socials: "Redes Sociales",
            footer_b: "Todos los derechos reservados."
        }
    },

    english: {
        navbar: {
            menu: {
                hero:"Home", 
                about: "About Me", 
                projects: "Projects", 
                skills: "Skills", 
                experience: "Experience", 
                contact: "Contact"
            }
        },
        hero: {
            greeting: "Hi, I am ",
            career: "Full Stack Developer", 
            expert: "Create modern and attractive web applications", 
            buttons: ["See Projects", "Contact"]
        },
        about: {
            title: "About Me", 
            subtitle: "Full Stack Developer passionate about creating impactful web solutions.", 
            summary: "I am a Fullstack developer with 4 years of experience in creating modern and responsive applications. I specialize in both frontend and backend technologies, which allows me to develop complete end-to-end solutions.",
            aboutme: [
                {title: "Name:", subtitle: "Salvador Jeremías López Gómez"},
                {title: "Email:", subtitle: "salvador.lopez.970519@gmail.com"},
                {title: "Locate:", subtitle: "Tuxtla Gutierrez, Chiapas"},
                {title: "Availability:", subtitle: "Freelance / Full time"},
            ],
            buttons: ["Download CV", "Download English CV", "Contact"]
        },
        skills: {
            title: "My Skills",
            subtitle: "Technologies and tools I am proficient in",
        },
        experience: {
            title: "Experience",
            experience: experience_eng
        },
        projects: {
            title: "My Projects",
            subtitle: "Here are some of the projects I have worked on recently",
            projects: projects_eng
        },
        contact: {
            title: "Contact",
            subtitle: "Do you have a project in mind? Let's talk!",
            contact: ["Email", "Phone", "Locate"],
            form: {
                name: "Your name", 
                email: "Your email", 
                subject: "Subject", 
                message: "Your Message",
                sending: "Sending",
                button: "Send Message"
            }
        },
        footer: { 
            title: "LOGS",
            subtitle: "Developing creative solutions",
            navigation: {
                title: "Navegation", 
                menu: {
                    hero:"Home", 
                    about: "About Me", 
                    projects: "Projects", 
                    skills: "Skills", 
                    experience: "Experience", 
                    contact: "Contact"
                }
            },
            socials: "Socials",
            footer_b: "All rights reserved."
        }
    }
}

export default lenguage;