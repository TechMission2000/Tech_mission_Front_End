export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "uiux"
  | "security";

export interface Technology {
  id: number;
  name: string;
  icon: string;
}

export const technologyData: Record<TechCategory, Technology[]> = {
  frontend: [
    { id: 1, name: "React", icon: "🔄" },
    { id: 2, name: "Next.js", icon: "⏭️" },
    { id: 3, name: "Vue.js", icon: "🔰" },
    { id: 4, name: "Angular", icon: "🅰️" },
    { id: 5, name: "TypeScript", icon: "🔷" },
    { id: 6, name: "JavaScript", icon: "📜" },
    { id: 7, name: "HTML5", icon: "🌐" },
    { id: 8, name: "CSS3", icon: "🎨" },
    { id: 9, name: "Sass", icon: "💅" },
    { id: 10, name: "Tailwind CSS", icon: "💨" },
  ],
  backend: [
    { id: 1, name: "Node.js", icon: "🟢" },
    { id: 2, name: "Express.js", icon: "🚂" },
    { id: 3, name: "Django", icon: "🐍" },
    { id: 4, name: "Ruby on Rails", icon: "💎" },
    { id: 5, name: "Spring Boot", icon: "🌱" },
    { id: 6, name: "Laravel", icon: "🔶" },
    { id: 7, name: "PHP", icon: "🐘" },
    { id: 8, name: "Python", icon: "🐍" },
    { id: 9, name: "Java", icon: "☕" },
    { id: 10, name: "C#", icon: "🔷" },
  ],
  database: [
    { id: 1, name: "MongoDB", icon: "🍃" },
    { id: 2, name: "PostgreSQL", icon: "🐘" },
    { id: 3, name: "MySQL", icon: "🐬" },
    { id: 4, name: "Redis", icon: "🔴" },
    { id: 5, name: "SQLite", icon: "💡" },
    { id: 6, name: "Firebase", icon: "🔥" },
    { id: 7, name: "Oracle", icon: "🏢" },
    { id: 8, name: "SQL Server", icon: "🗄️" },
    { id: 9, name: "Cassandra", icon: "🌌" },
    { id: 10, name: "Elasticsearch", icon: "🔍" },
  ],
  devops: [
    { id: 1, name: "Docker", icon: "🐳" },
    { id: 2, name: "Kubernetes", icon: "☸️" },
    { id: 3, name: "AWS", icon: "☁️" },
    { id: 4, name: "Azure", icon: "🔵" },
    { id: 5, name: "Google Cloud", icon: "🔶" },
    { id: 6, name: "Jenkins", icon: "🤖" },
    { id: 7, name: "GitLab CI", icon: "🦊" },
    { id: 8, name: "GitHub Actions", icon: "🐙" },
    { id: 9, name: "Terraform", icon: "🏗️" },
    { id: 10, name: "Ansible", icon: "⚙️" },
  ],
  uiux: [
    { id: 1, name: "Figma", icon: "🎨" },
    { id: 2, name: "Adobe XD", icon: "✖️" },
    { id: 3, name: "Sketch", icon: "📋" },
    { id: 4, name: "InVision", icon: "👁️" },
    { id: 5, name: "Adobe Illustrator", icon: "🖌️" },
    { id: 6, name: "Adobe Photoshop", icon: "🌅" },
    { id: 7, name: "Zeplin", icon: "🚀" },
    { id: 8, name: "Marvel", icon: "🦸" },
    { id: 9, name: "Proto.io", icon: "📱" },
    { id: 10, name: "Balsamiq", icon: "📝" },
  ],
  security: [
    { id: 1, name: "OWASP", icon: "🛡️" },
    { id: 2, name: "SSL/TLS", icon: "🔒" },
    { id: 3, name: "JWT", icon: "🎫" },
    { id: 4, name: "OAuth", icon: "🔐" },
    { id: 5, name: "Pen Testing", icon: "🔍" },
    { id: 6, name: "Firewall", icon: "🔥" },
    { id: 7, name: "VPN", icon: "🌐" },
    { id: 8, name: "Encryption", icon: "🔏" },
    { id: 9, name: "2FA", icon: "🔢" },
    { id: 10, name: "SIEM", icon: "👁️" },
  ],
};
