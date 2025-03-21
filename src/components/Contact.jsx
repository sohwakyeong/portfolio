import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiGlobe, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <footer id="contact" className="bg-[#1e293b] text-white py-10 text-center">
      <div className="container mx-auto px-4 sm:px-10 md:px-20">
        {copied && (
          <div className="text-white-400 text-sm mt-2 transition-opacity animate-fade-in">
            {copied.includes("https") ? "링크가" : "이메일이"} 복사되었습니다!
          </div>
        )}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={() => handleCopy("dsjs9912@gmail.com")}
            className="flex items-center gap-2 text-lg hover:text-gray-300 transition relative cursor-pointer"
          >
            {copied === "dsjs9912@gmail.com" ? (
              <FiCheck className="text-2xl text-green-400" />
            ) : (
              <FiMail className="text-2xl" />
            )}
            Gmail
          </button>
          <button
            onClick={() => handleCopy("https://github.com/sohwakyeong")}
            className="flex items-center gap-2 text-lg hover:text-gray-300 transition relative cursor-pointer"
          >
            {copied === "https://github.com/sohwakyeong" ? (
              <FiCheck className="text-2xl text-green-400" />
            ) : (
              <FiGithub className="text-2xl" />
            )}
            GitHub
          </button>

        </div>
        <p className="text-sm text-gray-400">
          © 2025. SoHwaKyeong All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
