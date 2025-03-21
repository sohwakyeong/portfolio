import { useState, useEffect } from "react";
import { FiLink, FiFileText, FiImage, FiGithub } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "./Modal";

const ProjectDetails = () => {
  const projects = [
    {
      title: "IT 엘도라도 (블로그)",
      date: "2024.09 (1人 개인 프로젝트)",
      summary: "Notion API/DB와 연동하여 개발한 개인 블로그",
      url: "https://it-eldorado.com",
      techStacks:
        "TypeScript, Next.js, Zustand, React-Query, Tailwind CSS, Notion, Vercel",
      details: [
        "티스토리 플랫폼에서의 불편함을 해소하고자 직접 개발",
        "별도의 데이터베이스 서버 없이 Notion API/DB와 연동하여 개발",
        "검색 엔진 최적화(SEO) 고도화 및 검색 엔진 마이그레이션",
        "무한 스크롤, 방문/조회 수 추적, 댓글/좋아요 등의 커뮤니티 기능 개발",
      ],
      images: ["/ego.png", "/ego.png"],
      pdf: "https://example.com/pdf",
      gitBackend: "https://github.com/user/project-be",
      gitFrontend: "https://github.com/user/project-fe",
    },
    {
      title: "두 번째 프로젝트",
      date: "2024.08 (팀 프로젝트)",
      summary: "두 번째 프로젝트에 대한 간단한 설명",
      url: "https://example2.com",
      techStacks: "JavaScript, React, Redux, Firebase",
      details: [
        "팀 프로젝트로 협업하여 진행",
        "Firebase를 활용하여 실시간 데이터 관리",
        "Redux를 활용한 상태 관리",
        "반응형 디자인 및 사용자 경험 개선",
      ],
      gitBackend: "https://github.com/user/project-be",
      gitFrontend: "https://github.com/user/project-fe",
    },
    {
      title: "세 번째 프로젝트",
      date: "2024.07 (팀 프로젝트)",
      summary: "세 번째 프로젝트에 대한 간단한 설명",
      url: "https://example3.com",
      techStacks: "Java, Spring Boot, MySQL, AWS",
      details: [
        "스프링 기반 웹 애플리케이션 구축",
        "MySQL을 이용한 데이터베이스 구축",
        "AWS를 활용한 클라우드 서비스 배포",
      ],
      images: ["/ego.png", "/ego.png"],
    },
    {
      title: "네 번째 프로젝트",
      date: "2024.06 (개인 프로젝트)",
      summary: "네 번째 프로젝트에 대한 간단한 설명",
      url: "https://example4.com",
      techStacks: "Python, Django, PostgreSQL, Docker",
      details: [
        "장고 프레임워크를 이용한 개인 프로젝트",
        "PostgreSQL 데이터베이스 연동",
        "Docker를 이용한 컨테이너 환경 구축",
      ],
    },
  ];

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth >= 769 ? 2 : 1
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  const handleOpenModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 769 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#1e293b] flex flex-col justify-center items-center py-16 font-['Pretendard']"
    >
      <div className="container mx-auto px-4 sm:px-10 md:px-20">
        <div className="flex justify-center items-center mb-10">
          <div className="text-3xl mr-2">🔗</div>
          <h2 className="text-5xl font-semibold text-white border-b-2 border-gray-400 pb-2 font-['KakaoBigSans-ExtraBold']">
            PROJECTS
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          pagination={false}
          onSwiper={(e) => setSwiper(e)}
          onSlideChange={(e) => setSwiperIndex(e.realIndex)}
          breakpoints={{
            769: { slidesPerView: 2  ,slidesPerGroup: 2},
          }}
          className="pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between sm:h-[420px] h-[520px] ">
                <div className="flex-grow">
                  <h4 className="text-2xl font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h4>
                  <div className="text-gray-500 text-sm mb-3">
                    {project.date}
                  </div>

                  <div className="mb-3">
                    <h5 className="text-lg font-semibold mb-1 text-gray-800">
                      {project.summary}
                    </h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  {project.url && (
                    <div className="mb-3 flex items-center gap-2">
                      <FiLink className="text-gray-500" />
                      <a
                        href={project.url}
                        target="_blank"
                        className="text-blue-500 text-sm hover:underline break-all"
                      >
                        {project.url}
                      </a>
                    </div>
                  )}
                  <div className="mb-1">
                    <div className="font-semibold text-gray-600 text-sm">
                      기술 스택
                    </div>
                    <div className="text-gray-800 text-sm">
                      {project.techStacks}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">

                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full hover:bg-emerald-300"
                    >
                      <FiFileText /> PDF 보기
                    </a>
                  )}

                  {project.images && (
                    <button
                      className="flex items-center gap-1 bg-purple-200 text-purple-800 px-3 py-1 rounded-full hover:bg-purple-300 cursor-pointer"
                      onClick={() => handleOpenModal(project.images)}
                    >
                      <FiImage /> 이미지 보기
                    </button>
                  )}

                  {project.gitBackend && (
                    <a
                      href={project.gitBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gray-200 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-300"
                    >
                      <FiGithub /> Git BE
                    </a>
                  )}

                  {project.gitFrontend && (
                    <a
                      href={project.gitFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-sky-200 text-sky-800 px-3 py-1 rounded-full hover:bg-sky-300"
                    >
                      <FiGithub /> Git FE
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center mt-6 gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-all shadow-lg cursor-pointer"
          >
            ◀
          </button>
          <div className="text-white text-2xl font-bold">
            {Math.ceil((swiperIndex + 1) / slidesPerView)} /{" "}
            {Math.ceil(projects.length / slidesPerView)}
          </div>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-all shadow-lg cursor-pointer"
          >
            ▶
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            images={selectedImages}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
