const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 pt-16">
      
      <div className="max-w-4xl text-center space-y-2">

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Sarthak Sharma
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Java Backend Developer | AI/ML Engineer
        </h2>

        {/* Impact Statement */}
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          I build real-time AI systems and scalable backend architectures used in production-grade applications.
          Built YOLOv8 ALPR system (~95% accuracy)
          Hackathon Winner (1st among 72 projects)
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-4">

        {/* AI COLUMN */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#ai-projects"
            className="w-48 text-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition transform shadow-lg hover:shadow-white/20"
          >
            AI Projects
          </a>

          <a
            href="/Sarthak_Sharma_AIML_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 text-center px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            AI Resume
          </a>
        </div>

        {/* BACKEND COLUMN */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#backend-projects"
            className="w-48 text-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition transform shadow-lg hover:shadow-white/20"
          >
            Backend Projects
          </a>

          <a
            href="/Sarthak_Sharma_Java_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 text-center px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Backend Resume
          </a>
        </div>

      </div>

    </div>

    </section>
  );
};

export default Hero;