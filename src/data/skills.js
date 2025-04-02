const skillsImages = {
  "Frontend": "/frontend.png",
  "Backend": "/backend.png",
  "Databases": "/databases.png",
  "DevOps": "/devops.png",
  "Automation": "/automation.png",
  "Testing": "/testing.png",
  "Tools & Others": "/tools.png"
};

const skillsData = {
    "Frontend": [
      { name: "Angular", level: 85, icon: "FaAngular", color:"#c3002f" },
      { name: "Laravel", level: 75, icon: "SiLaravel", color:"#bf5329" },
      { name: "React", level: 50, icon: "FaReact", color:"#61DBFB" },
      { name: "JavaScript", level: 80, icon: "SiJavascript", color:"#f2df3a" },
      { name: "TypeScript", level: 50, icon: "SiTypescript", color:"#3178c6" },
      { name: "PHP", level: 70, icon: "SiPhp", color:"#c92434" },
      // { name: "TailwindCSS", level: 80, icon: "SiTailwindcss", color:"#61DBFB" }
    ],
    "Backend": [
      { name: "Java", level: 100, icon: "FaJava", color:"#4ea3e4" },
      { name: "Spring Boot", level: 90, icon: "SiSpring", color:"#a3d468" },
      { name: "Maven", level: 85, icon: "SiApachemaven", color:"#6fa8dc" },
      { name: "Python", level: 75, icon: "FaPython", color:"#63b8ff" },
      { name: "DJango", level: 75, icon: "DiDjango", color:"#a4c330" },
      { name: "Node.js", level: 85, icon: "FaNodeJs", color:"#3C873A" },
      // { name: "Express", level: 80, icon: "SiExpress", color:"#61DBFB" },
    ],
    "Databases": [
      { name: "MySQL", level: 95, icon: "SiMysql", color:"#00758f" },
      { name: "SQLServer", level: 80, icon: "DiMsqlServer", color:"red" },
      { name: "PostgreSQL", level: 70, icon: "SiPostgresql", color:"#336791" },
      { name: "MongoDB", level: 85, icon: "SiMongodb", color:"#47A248" },
      { name: "Cassandra", level: 70, icon: "SiApachecassandra", color:"black" },
      // { name: "Oracle", level: 75, icon: "SiOracle", color:"#61DBFB" },
      { name: "Firebase", level: 70, icon: "SiFirebase", color:"#FFCA28" }
    ],
    "DevOps": [
      { name: "Azure", level: 85, icon: "VscAzure", color:"#0080ff" },
      { name: "AWS", level: 70, icon: "FaAws", color:"black" },
      { name: "Docker", level: 85, icon: "SiDocker", color:"#0db7ed" },
      { name: "Kubernetes", level: 75, icon: "SiKubernetes", color:"#0db7ed" },
      { name: "WebSphere", level: 75, icon: "", color:"white" },
      { name: "Hostinger", level: 75, icon: "SiHostinger", color:"white" },
    ],
    "Automation": [
      { name: "Jenkins", level: 80, icon: "SiJenkins", color:"#bf5329" },
      { name: "Ansible", level: 75, icon: "SiAnsible", color:"#bf5329" },
      { name: "Rundeck", level: 75, icon: "SiRundeck", color:"green" },
    ],
    "Testing": [
      { name: "JUnit", level: 100, icon: "SiJunit5", color:"green" },
      { name: "Mockito", level: 100, icon: "SiJunit5", color:"green" },
      { name: "JMeter", level: 90, icon: "SiApachejmeter", color:"#6fa8dc" },
      { name: "Postman", level: 100, icon: "SiPostman", color:"#EF5B25" },
    ],
    "Tools & Others": [
      { name: "Git", level: 90, icon: "FaGitAlt", color:"#F05032" },
      { name: "GitHub", level: 85, icon: "FaGithub", color:"black" },
      // { name: "BitBucket", level: 85, icon: "FaBitbucket" },
      // { name: "ServiceNow", level: 70, icon: "" },
      { name: "VS Code", level: 70, icon: "VscVscode", color:"#0080ff" },
      // { name: "Eclipse", level: 70, icon: "SiEclipseide" },
      { name: "Jira", level: 80, icon: "SiJira", color:"#205081" },
      { name: "Kafka", level: 90, icon: "SiApachekafka", color:"black" },
      { name: "SonarQube", level: 80, icon: "SiSonarqube", color:"#205081" },
    ]
  };
  
  export { skillsImages };
  export default skillsData;
  