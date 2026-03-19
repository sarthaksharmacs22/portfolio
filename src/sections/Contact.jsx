const Contact = () => {
  return (
    <div className="h-px w-full bg-gray-800 mb-10">
    <section id="contact" className="bg-black text-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 cursor-pointer">
          Contact
        </h2>

        <p className="text-gray-400 mb-8">
          I'm open to opportunities in Backend Development and AI/ML roles. 
          Feel free to reach out if you'd like to collaborate or discuss opportunities.
        </p>

        <div className="flex flex-col items-center gap-4">

          <a
            href="mailto:sarthaksharma1237@gmail.com"
            className="text-lg hover:text-gray-300 transition"
          >
            📧 sarthaksharma1237@gmail.com
          </a>

          <a
            href="https://github.com/sarthaksharmacs22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-300 transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sarthak-sharma-31aa8a250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-300 transition"
          >
            🔗 LinkedIn
          </a>

        </div>

      </div>
    </section>
    </div>
  );
};

export default Contact;