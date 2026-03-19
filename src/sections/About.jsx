const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-10"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>

        <div className="text-gray-400 leading-relaxed space-y-4 text-center">

          <p>
            I am a Java Backend Developer and AI/ML enthusiast focused on building
            scalable backend systems and deploying machine learning solutions in real-world environments.
          </p>

          <p>
            During my 9-month internship at TBFC Business Solutions, I built and deployed an
            end-to-end Automatic License Plate Recognition (ALPR) system, handling model development,
            real-time detection, and production-level logging integration.
          </p>

          <p>
            I have hands-on experience in computer vision, system design, and secure backend
            development using Spring Boot, and I enjoy solving real-world problems using
            a combination of backend engineering and AI.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;