import { FiCode, FiMonitor, FiServer, FiTool } from "react-icons/fi";

const skillColors = {
  Java: "bg-orange-200 text-orange-800",
  JavaScript: "bg-yellow-200 text-yellow-800",
  React: "bg-sky-200 text-sky-800",
  "React-query": "bg-pink-200 text-pink-800",
  Zustand: "bg-purple-200 text-purple-800",
  Figma: "bg-green-200 text-green-800",
  "Spring Boot": "bg-lime-200 text-lime-800",
  "Node.js": "bg-emerald-200 text-emerald-800",
  MySQL: "bg-blue-200 text-blue-800",
  Oracle: "bg-red-200 text-red-800",
  MongoDB: "bg-teal-200 text-teal-800",
  Git: "bg-gray-200 text-gray-800",
  AWS: "bg-yellow-100 text-yellow-700",
  Vercel: "bg-black text-white",
};

const Skills = () => {
  const renderSkill = (skill) => (
    <li
      key={skill}
      className={`px-3 py-1 rounded-full text-sm font-medium ${skillColors[skill]}`}
    >
      {skill}
    </li>
  );

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#f4a9b7] flex justify-center items-center font-['Pretendard']"
    >
      <div className="container mx-auto px-4 sm:px-10 md:px-20">
        <div className="flex justify-center items-center mb-8">
          <div className="text-3xl mr-2">🔗</div>
          <h2 className="text-5xl font-semibold border-b-2 border-white pb-2 font-['KakaoBigSans-ExtraBold']">
            SKILLS
          </h2>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-5 mb-5">
            <FiCode className="text-3xl hidden sm:block" />
            <div className="text-xl sm:text-2xl font-semibold w-32">Language</div>
            <ul className="flex gap-2 flex-wrap">
              {["Java", "JavaScript"].map(renderSkill)}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-5 mb-5">
            <FiMonitor className="text-3xl hidden sm:block" />
            <div className="text-xl sm:text-2xl font-semibold w-32">Frontend</div>
            <ul className="flex gap-2 flex-wrap">
              {["React", "React-query", "Zustand", "Figma"].map(renderSkill)}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pb-5 mb-5">
            <FiServer className="text-3xl hidden sm:block" />
            <div className="text-xl sm:text-2xl font-semibold w-32">Backend</div>
            <ul className="flex gap-2 flex-wrap">
              {["Spring Boot", "Node.js", "MySQL", "Oracle", "MongoDB"].map(renderSkill)}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <FiTool className="text-3xl hidden sm:block" />
            <div className="text-xl sm:text-2xl font-semibold w-32">DevOps</div>
            <ul className="flex gap-2 flex-wrap">
              {["Git", "Vercel"].map(renderSkill)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
