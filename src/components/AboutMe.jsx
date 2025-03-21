import React from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 py-16 flex flex-col justify-center font-['Pretendard']"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center mb-8">
          <div className="text-3xl mr-2">🔗</div>
          <h2 className="text-5xl font-semibold border-b-2 border-gray-400 pb-2 font-['KakaoBigSans-ExtraBold']">
            ABOUT ME
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-15">
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-gray-700 mr-3" />
              <h4 className="text-xl font-semibold">공부 방법 및 여정</h4>
            </div>
            <div className="mt-3">
              <ul className="space-y-3 border-l-2 border-gray-300 pl-4">
                <li>
                  <div className="font-medium">2023.11</div>
                  <div className="text-gray-600">
                    엘리스 SW 엔지니어 부트캠프 수료
                  </div>
                </li>
                <li>
                  <div className="font-medium">2024.04 - 2024.06</div>
                  <div className="text-gray-600">
                    브랜뉴닷컴 체험형 인턴 근무
                  </div>
                </li>
                <li>
                  <div className="font-medium">2024.12</div>
                  <div className="text-gray-600">
                    정보처리산업기사 자격증 취득
                  </div>
                </li>
                <li>
                  <div className="font-medium">2024.10 - 2025.03</div>
                  <div className="text-gray-600">
                  인프런에서 실전 자바 로드맵, 스프링 MVC ,<br/>
                  스프링 DB 등 총 8개 강의 수료
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "이름", value: "소화경", icon: <FaUser /> },
                {
                  label: "생년월일",
                  value: "1993.08.18",
                  icon: <FaBirthdayCake />,
                },
                {
                  label: "위치",
                  value: "서울특별시 동작구",
                  icon: <FaMapMarkerAlt />,
                },
                {
                  label: "연락처",
                  value: "010-8200-6865",
                  icon: <FaPhone />,
                },
                {
                  label: "이메일",
                  value: "dsjs9912@gmail.com",
                  icon: <FaEnvelope />,
                },
                {
                  label: "학력",
                  value: "강남대학교 (국제통상학과)",
                  icon: <FaGraduationCap />,
                },
              ].map((info) => (
                <div
                  className="flex items-center space-x-3 p-2"
                  key={info.label}
                >
                  <span className="text-gray-700 text-lg">{info.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {info.label}
                    </div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
