import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "uchenna.io",
  description: `Uchenna Amadasun - Freelance Web Developer
  Phone: ‪(415) 439-0250‬
  | Email: uchennaamadasun@gmail.com | Portfolio: uchenna.io
  GitHub: github.com/uamadasun | LinkedIn: linkedin.com/in/uchenna-amadasun/ | Location: Atlanta, Georgia
  
  Experienced Freelance Web Developer based in Atlanta, Georgia specializing in creating bespoke, high-quality websites and web applications for clients across various industries. With a strong foundation in full-stack development and a passion for crafting elegant digital solutions, I bring creativity, expertise, and reliability to every project.
  
  Technical Skills: JavaScript, Java, Python, HTML, CSS, React, Next.js, Angular, Gatsby, Bootstrap, Redux, Tailwind, MERN, Flask, Spring Boot, MySQL, MongoDB, GraphQL, Vercel, AWS (EC2 & S3), Node.js, Bcrypt, Jinja2, Postman, Git, Trello, Balsamiq Wireframe, AJAX, Render, Netlify, SpringToolSuite, IntelliJ, VSCode, Sublime. Proficient in Agile development methodologies and object-oriented programming principles.
  
  Services Offered:
  - Custom Website Development: Tailored websites designed to meet your specific needs and goals, from simple portfolios to complex e-commerce platforms.
  - Web Application Development: Dynamic and scalable web applications built to streamline your business processes and enhance user engagement.
  - Website Maintenance & Support: Ongoing support and maintenance services to ensure your website remains secure, up-to-date, and optimized for performance.
  - Responsive Design: Mobile-friendly and responsive design implementation to provide a seamless user experience across all devices.
  
  Portfolio Highlights:
  - Showcase of previous projects demonstrating a diverse range of skills and expertise.
  - Client testimonials and case studies highlighting successful collaborations and project outcomes.
  
  Let's collaborate to bring your vision to life and elevate your online presence! Contact me to discuss your project requirements and how I can help you achieve your goals.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
