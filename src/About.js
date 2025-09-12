import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20 pl-24 pr-24 md:pr-24">
      <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl font-mono font-bold text-gray-900 mb-8">
            About Me<span className="text-gray-900"></span>
          </h2>
           <p>
            Hello, I am <strong>Tharindu Herath</strong>, a passionate and dedicated software
            engineering intern specializing in React Native, MERN stack, and
            cutting-edge technologies. I am currently pursuing a{" "}
            <strong>BSc (Hons) in Information Technology</strong> specializing
            in Software Engineering at the Sri Lanka Institute of Information
            Technology (SLIIT), expected to graduate in 2025.
          </p>
          <p>
            I am skilled in programming languages like Flutter, C, Java, Python, and
            JavaScript, with expertise in databases such as MySQL, MongoDB, and
            Oracle. My technical toolkit also includes React Native, Bootstrap,
            and Git version control.
          </p>
          <p>
            I have completed a 6-month internship as a mobile developer, focusing on frontend development with <strong>Flutter</strong> and backend development using <strong>Laravel</strong>.
          </p>
          <p>
            My journey is driven by a proactive and collaborative mindset,
            analytical thinking, and adaptability. I aim to contribute to
            impactful projects and constantly evolve as a professional.
          </p>
          <p>
            Feel free to explore my projects like the <strong>Visionmate</strong> object detection
            app or the <strong>Quickfix</strong> garage-finding app, reflecting my passion for
            innovation and problem-solving.
          </p>
          <br/>
          <a
            href="/cv.pdf"
            className="inline-block px-8 py-3 border border-gray-900 text-gray-900 font-mono text-lg rounded transition hover:bg-gray-900 hover:text-white"
            download
          >
            Download CV
          </a>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative shadow-2xl">
            <img
              src="tt.jpg"
              alt="Dominic"
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-[400px] h-[400px] bg-black rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;