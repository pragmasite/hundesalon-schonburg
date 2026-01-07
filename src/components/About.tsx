import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stat1, value: "20+" },
    { label: t.about.stat2, value: "100+" },
    { label: t.about.stat3, value: "4.2★" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.about.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              {t.about.p1}
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              {t.about.p2}
            </p>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-2">
              {t.about.features.map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-card p-8 shadow-soft"
              >
                <div className="text-4xl font-serif font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
