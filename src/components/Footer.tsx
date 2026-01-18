import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lightbg dark:bg-darkbg border-t border-lightprimary/30 dark:border-darkprimary/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-lighttext dark:text-darktext">
              Dhruv Sagre
            </h3>
            <p className="text-lighttext dark:text-darktext text-sm leading-relaxed">
              Software Engineer passionate about creating innovative games and AI solutions. 
              Always ready for the next challenge.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lighttext dark:text-darktext">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-lighttext dark:text-darktext hover:text-lightprimary dark:hover:text-darkprimary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lighttext dark:text-darktext">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/DSagre", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dhruv-sagre-54998122a/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dhruvsagre252@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lighttext dark:text-darktext hover:text-lightprimary dark:hover:text-darkprimary transition-colors p-2 hover:scale-110 transform"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-lightprimary/30 dark:border-darkprimary/30 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-lighttext dark:text-darktext text-xs sm:text-sm flex items-center justify-center gap-2">
            © {currentYear} Dhruv Sagre.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;