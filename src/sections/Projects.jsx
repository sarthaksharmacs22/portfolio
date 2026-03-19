// const projects = [
//   {
//     title: "Job Portal Backend System",
//     description:
//       "Developed a role-based job portal using Spring Boot with JWT authentication and REST APIs for job posting and applications.",
//     tech: "Spring Boot, Spring Security, JWT, MySQL",
//     github: "https://github.com/sarthaksharmacs22/HireHub-Role-Based-Job-Portal-Backend",
//     demo: "",
//     impact:
//       "Implemented secure authentication and RBAC, enabling scalable backend architecture.",
//   },
//   {
//     title: "Automatic License Plate Recognition (ALPR)",
//     description:
//       "Built a real-time license plate detection system using YOLOv8 and OCR with automated logging.",
//     tech: "YOLOv8, OpenCV, EasyOCR, Python",
//     github: "https://github.com/sarthaksharmacs22/Final_ALPR_System",
//     demo: "",
//     impact:
//       "Achieved ~95% accuracy with real-time vehicle tracking and logging.",
//   },
//   {
//     title: "Facial Recognition with Emotional Analysis",
//     description:
//       "Built a real-time facial recognition system with integrated emotion analysis for monitoring and behavioral insights using computer vision.",
//     tech: "OpenCV, Deep Learning, Python",
//     github: "https://github.com/sarthaksharmacs22/FACIA---Facial-Recognition-Based-Attendance-Management-System",
//     demo: "https://drive.google.com/file/d/1TTXG0_xNYaM0EtHn8b4RUnTmXPFr7Ump/view?usp=sharing",
//     image: "/facia.gif",
//     impact:
//       "Won 1st Prize among 72 projects at Summer Synergy Season 3 (inter-university hackathon); later shortlisted among 300+ projects at TECH NAVYA after integrating emotion analysis.",
//   },
//   {
//     title: "Smart City Transport Management System",
//     description:
//       "Engineered a Java-based system to optimize urban transport operations and resource allocation using object-oriented design.",
//     tech: "Java, OOPs",
//     github: "https://github.com/sarthaksharmacs22/smart-city-transport-management-system",
//     demo: "",
//     impact:
//       "Designed scalable backend logic using OOP principles for real-world urban transport optimization.",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 md:py-32 px-6"
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* Divider */}
//         <div className="h-px w-full bg-gray-800 mb-10"></div>

//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//           Projects
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="border border-gray-700 p-6 rounded-xl hover:border-white transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-800 flex flex-col justify-between"
//             >
//               {/* 👇 ADD IMAGE HERE */}
//               {project.image && (
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="rounded-lg mb-4 w-full h-48 object-contain"
//                 />
//               )}
              
//               <h3 className="text-xl font-semibold mb-3 hover:text-gray-300 transition">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 mb-4">
//                 {project.description}
//               </p>

//               <p className="text-sm text-gray-500 mb-3">
//                 {project.tech}
//               </p>

//               <p className="text-sm text-green-400 mb-4">
//                 {project.impact}
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm underline hover:text-white cursor-pointer"
//                 >
//                   GitHub
//                 </a>

//                 {project.demo && (
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm text-blue-400 hover:text-blue-300 underline cursor-pointer"
//                   >
//                   View Demo
//                   </a>
//                 )}
                
//                 {/* 👇 ONLY for FACIA project */}
//                 {project.title === "Facial Recognition with Emotional Analysis" && (
//                   <>
//                     <a
//                       href="/emotion_graph.png"
//                       rel="noopener noreferrer"
//                       target="_blank"
//                       className="text-sm text-purple-400 underline cursor-pointer"
//                     >
//                       View Analysis
//                     </a>

//                     <a
//                       href="/attendance_sheet.png"
//                       target="_blank"
//                       className="text-sm text-yellow-400 underline cursor-pointer"
//                     >
//                       View Logs
//                     </a>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;



const projects = [
  {
    title: "HireHub-Role-Based-Job-Portal-Backend System",
    category: "backend",
    description:
      "Developed a role-based job portal using Spring Boot with JWT authentication and REST APIs for job posting and applications.",
    tech: "Spring Boot, Spring Security, JWT, MySQL",
    github:
      "https://github.com/sarthaksharmacs22/HireHub-Role-Based-Job-Portal-Backend",
    impact:
      "Implemented secure authentication and RBAC, enabling scalable backend architecture.",
  },
  {
    title: "Automatic License Plate Recognition (ALPR)",
    category: "ai",
    description:
      "Handled real-time detection, OCR pipeline, and logging system integration with Google Sheets.",
    tech: "YOLOv8, OpenCV, EasyOCR, Python",
    github:
      "https://github.com/sarthaksharmacs22/Final_ALPR_System",
      image: "/alpr_demo.png",
    impact:
      "Achieved ~95% accuracy with real-time vehicle tracking and logging.",
  },
  {
    title: "Facial Recognition with Emotional Analysis",
    category: "ai",
    description:
      "Built a real-time facial recognition system with integrated emotion analysis for monitoring and behavioral insights using computer vision.",
    tech: "OpenCV, Deep Learning, Python",
    github:
      "https://github.com/sarthaksharmacs22/FACIA---Facial-Recognition-Based-Attendance-Management-System",
    demo:
      "https://drive.google.com/file/d/1TTXG0_xNYaM0EtHn8b4RUnTmXPFr7Ump/view?usp=sharing",
    image: "/facia.gif",
    impact:
      "Won 1st Prize among 72 projects at Summer Synergy Season 3 (inter-university hackathon); later shortlisted among 300+ projects at TECH NAVYA after integrating emotion analysis.",
  },
  {
    title: "Smart City Transport Management System",
    category: "backend",
    description:
      "Engineered a Java-based system to optimize urban transport operations and resource allocation using object-oriented design.",
    tech: "Java, OOPs",
    github:
      "https://github.com/sarthaksharmacs22/smart-city-transport-management-system",
    impact:
      "Designed scalable backend logic using OOP principles for real-world urban transport optimization.",
  },
];

const Projects = () => {
  const aiProjects = projects.filter((p) => p.category === "ai");
  const backendProjects = projects.filter((p) => p.category === "backend");

  const renderCard = (project, index) => (
    <div
      key={index}
      className="border border-gray-900/40 backdrop-blur-md p-6 rounded-xl hover:border-white transition transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-800 flex flex-col justify-between"
    >
      {/* IMAGE */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-4 w-full max-h-48 object-contain"
        />
      )}

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3 hover:text-gray-300 transition">
        {project.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-4">{project.description}</p>

      {/* TECH */}
      <p className="text-sm text-gray-500 mb-3">{project.tech}</p>

      {/* IMPACT */}
      <p className="text-sm text-green-400 mb-4">{project.impact}</p>

      {/* LINKS */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:text-white"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 underline"
          >
            Watch Demo
          </a>
        )}

        {/* FACIA EXTRA LINKS */}
        {project.title === "Facial Recognition with Emotional Analysis" && (
          <>
            <a
              href="/emotion_graph.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 underline"
            >
              View Analysis
            </a>

            <a
              href="/attendance_sheet.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow-400 underline"
            >
              View Logs
            </a>
          </>
        )}

        {/* ALPR EXTRA LINKS */}
        {project.title === "Automatic License Plate Recognition (ALPR)" && (
          <>
            <a
              href="/alpr_demo.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 underline"
            >
              View Deployment
            </a>

            <a
              href="/alpr_logs.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-yellow-400 underline"
            >
              View Logs
            </a>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 md:py-32 px-6"
    >
    <div className="max-w-6xl mx-auto">

      {/* Divider */}
      <div className="h-px w-full bg-gray-800 mb-10"></div>

      {/* AI PROJECTS */}
      <h2
        id="ai-projects"
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        AI Engineering Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {aiProjects.map(renderCard)}
      </div>

      {/* BACKEND PROJECTS */}
      <h2
        id="backend-projects"
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Backend Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {backendProjects.map(renderCard)}
      </div>

      </div>
    </section>
  );
};

export default Projects;