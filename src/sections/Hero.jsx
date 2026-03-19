const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 pt-20">
      
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
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I build scalable backend systems and deploy AI models into real-world applications.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition transform shadow-lg hover:shadow-white/20"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            View Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;