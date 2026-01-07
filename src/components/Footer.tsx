import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, otherLang, otherLangPath } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.hours, href: "#hours" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-xl font-bold text-primary">
                Hundesalon
              </span>
              <span className="text-xs tracking-widest text-muted-foreground">
                {t.footer.tagline}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-semibold mb-4">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+41313321240"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +41 31 332 12 40
                </a>
              </li>
              <li>
                <a
                  href="mailto:ruth.ruefenacht@bluewin.ch"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ruth.ruefenacht@bluewin.ch
                </a>
              </li>
              <li className="text-muted-foreground">
                Lombachweg 4<br />
                3006 Bern, Schweiz
              </li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Sprache</h3>
            <div className="space-y-2">
              <p className="text-sm">
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Deutsch
                </Link>
              </p>
              <p className="text-sm">
                <Link
                  to="/en"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  English
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Hundesalon Schönburg. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
