import { motion } from 'framer-motion';
import avtImage from '../assets/avt.jpg';
import { profile } from '../content/siteData';
import { useI18n } from '../hooks/useI18n';
import { useLanguageMode } from '../hooks/useLanguageMode';

export function PersonalSection() {
  const { t } = useI18n();
  const { language } = useLanguageMode();

  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl sm:p-12"
        >
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:text-left sm:gap-10">
            <div className="shrink-0">
              <div className="h-40 w-40 overflow-hidden rounded-full ring-2 ring-white/20 shadow-2xl shadow-black/60 sm:h-52 sm:w-52">
                <img
                  src={avtImage}
                  alt={`${profile.name} avatar`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                {profile.location}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-1 text-base font-semibold text-cyan-300/80 sm:text-lg">
                {profile.headline[language]}
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                {t('sections.about.subtitle')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
