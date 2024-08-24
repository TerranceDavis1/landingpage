import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-10">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/terranceldavis"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/TerranceDAVIS1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-orange-400"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a
          href="./assets/ProfessionalCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-red-500"
        >
          <FaFilePdf />
          <span>CV</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
