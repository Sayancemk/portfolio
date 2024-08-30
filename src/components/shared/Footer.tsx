import { Facebook, Github, Instagram, Linkedin } from "lucide-react"

function Footer() {
    return (
      <footer className="dark:bg-black bg-white dark:text-gray-400 text-gray-500 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">About Me</h2>
            <p className="mb-4">
                I am a Full Stack Developer with a passion for web technologies. I love to create
                interactive and beautiful web applications.
            </p>
          </div>
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                  Skills 
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                    Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="dark:hover:text-white hover:text-black transition-colors duration-300"
                >
                    Education
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col items-start justify-start space-y-2">
              <a target="_blank"
                href="https://github.com/sayancemk"
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Github /><span className="ml-2">Github</span>
              </a>
              <a
                href="#"
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Linkedin /><span className="ml-2">Linkdin</span>
              </a>
              <a target="_blank"
                href="https://www.instagram.com/sayanmaity_incognito?igsh=MTJma3NpeG1ncWFrdw==" 
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Instagram /><span className="ml-2">Instagram</span>
              </a>
              <a target="_blank"
                href="https://www.facebook.com/profile.php?id=100077608363713&mibextid=kFxxJD" 
                className="dark:hover:text-white hover:text-black transition-colors duration-300 flex flex-nowrap items-center justify-start"
              >
                <Facebook /><span className="ml-2">Facebook</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Contact Us</h2>
            <p>Tamluk, Purba Mednipur</p>
            <p>Tamluk, 721636</p>
            <p>Email: cse21109@cemk.ac.in</p>
            <p>Phone: +91 8710079352</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 sayanmaity.tech. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer