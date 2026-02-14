'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Baby, BookHeart, User, TrendingDown, AlertTriangle, DollarSign, Globe } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

// Crisis Statistics Data
const crisisStats = [
  {
    category: 'The Problem',
    stat: '1/3',
    title: 'Not Workforce Ready',
    description: 'One-third of America\'s high school graduates are not workforce-ready to compete for meaningful 21st-century jobs.',
    source: 'StriveTogether.org; OECD',
    icon: AlertTriangle,
  },
  {
    category: 'The Problem',
    stat: '34th',
    title: 'OECD Ranking',
    description: 'Among 36 leading countries, the United States ranks 34th on public spending on early childhood education and care as a percent of GDP.',
    source: 'OECD',
    icon: TrendingDown,
  },
  {
    category: 'Economic Impact',
    stat: '$2.2T',
    title: 'Lost GDP Potential',
    description: 'The United States would generate an additional $2.2 trillion or 10% of total U.S. GDP in annual income if all adults reached a sixth-grade reading level.',
    source: 'Barbara Bush Foundation / Gallup Study',
    icon: DollarSign,
  },
  {
    category: 'Economic Impact',
    stat: '13%',
    title: 'Return on Investment',
    description: 'High-quality birth-to-five programs for disadvantaged children can deliver a 13% return on investment per year.',
    source: 'James J. Heckman, Nobel Laureate, University of Chicago',
    icon: TrendingDown,
  },
  {
    category: 'Waste & Crime',
    stat: '1.2M',
    title: 'Annual Dropouts',
    description: '1.2 million students a year drop out of America\'s high schools. 80% end up interfacing with the prison system. They commit up to 75% of crimes in the United States.',
    source: 'Do Something; U.S. Census Bureau',
    icon: AlertTriangle,
  },
  {
    category: 'Global Impact',
    stat: '<2%',
    title: 'Pre-Primary Budgets',
    description: 'In low-income communities, less than 2% of their education budgets are allocated to pre-primary education. Without meaningful Birth to 5 programming, the education gap and poverty will remain.',
    source: 'UNICEF',
    icon: Globe,
  },
];

export default function BirthToThree() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Sam Beard Photo + Quote
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* Animated Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-yellow-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Sam's Photo */}
            <FadeIn direction="left">
              <div className="flex justify-center lg:justify-end">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-yellow-400/20 shadow-2xl shadow-yellow-400/10">
                  <Image
                    src="/images/sam-beard.png"
                    alt="Sam Beard"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeIn>

            {/* Quote Section */}
            <FadeIn direction="right">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Sam Beard
                </h1>
                <p className="text-white/70 text-base sm:text-xl leading-relaxed">
                  {/* Quote placeholder - Replace with actual quote from current site */}
                  &quot;The first three years of a child&apos;s life are the most critical for brain development.
                  Every interaction, every moment of love and care shapes who they will become.
                  Through GIFT Connect, we&apos;re empowering parents and caregivers with the tools
                  they need to give every child the best possible start in life.&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          AMERICA IN CRISIS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
                America&apos;s Economy & Workforce
              </h2>
              <p className="text-xl sm:text-2xl text-yellow-400 font-medium mb-4">
                Need Our Help
              </p>
              <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto mb-6">
                The science of early brain development illustrates that child development — particularly for birth to five years — is a foundation for a prosperous and sustainable society.
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Crisis Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {crisisStats.map((item, index) => (
              <ScaleIn key={item.title} delay={Math.min(index * 0.1, 0.5)}>
                <div className="glass-card p-4 sm:p-6 h-full flex flex-col hover:border-yellow-400/40 transition-all duration-300">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400/80 text-xs font-medium uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>

                  {/* Big Stat */}
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                    {item.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed flex-grow mb-3">
                    {item.description}
                  </p>

                  {/* Source */}
                  <p className="text-white/40 text-xs italic">
                    Source: {item.source}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          LEADERSHIP SECTION - Judith Otter & The Team
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-20" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Leadership
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Judith Otter Feature */}
          <FadeIn direction="up" delay={0.2}>
            <div className="glass-card p-6 sm:p-8 max-w-5xl mx-auto mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Photo Placeholder - Replace with actual photo when available */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-yellow-400/30 bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-bold text-black">JO</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                      Judith Otter
                    </h3>
                    <p className="text-white/80 text-lg font-medium">
                      Executive Director & Chief Operating Officer
                    </p>
                  </div>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                    After a successful Julliard ballet career, Judy was also successful in business — including real estate and Wall Street. In 2009 Judy met Gary Sinise, the film star. Together they created the Gary Sinise Foundation for defenders and veterans.
                  </p>
                  <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                    Judy served as the Executive Director and Chief Operating Officer building the single-employee organization to over 50 employees. In ten years with Gary, they raised $155 million from 84,000 donors, and helped thousands and thousands of veterans. In 2019, Judy created her consulting company and joined GIFT.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* The Team */}
          <FadeIn direction="up" delay={0.3}>
            <div className="glass-card p-6 sm:p-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
                  The Team
                </h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
                  <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-white font-medium">
                    Always Excellent
                  </span>
                  <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-white font-medium">
                    Result-Oriented
                  </span>
                  <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-white font-medium">
                    Passionate
                  </span>
                  <span className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-white font-medium">
                    Small and Growing
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Ethel Kennedy Quote */}
          <FadeIn direction="up" delay={0.4}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl sm:text-2xl text-white/80 italic leading-relaxed mb-4">
                &quot;Sam is one of the ripples of hope that Bobby believed were the power of people to advance justice and peace.&quot;
              </p>
              <p className="text-yellow-400 font-bold text-lg">
                — Ethel Kennedy
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          KEY FACTS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Why Birth To 3 Matters
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Stats/Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <ScaleIn delay={0}>
              <div className="glass-card text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-4">90%</div>
                <h3 className="text-xl font-semibold text-white mb-2">Brain Development</h3>
                <p className="text-white/60">
                  90% of brain development occurs in the first 3 years of life
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.1}>
              <div className="glass-card text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-4">1M+</div>
                <h3 className="text-xl font-semibold text-white mb-2">Neural Connections</h3>
                <p className="text-white/60">
                  Over 1 million new neural connections form every second
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="glass-card text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-4">65K</div>
                <h3 className="text-xl font-semibold text-white mb-2">Mothers Impacted</h3>
                <p className="text-white/60">
                  GIFT has impacted 65,000+ mothers through the Carnegie Hall Lullaby Project
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <FadeIn direction="up">
            <div className="glass-card py-8 sm:py-12 px-4 sm:px-8">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Explore our AI-powered tools designed to support parents and caregivers
                during the most important years of a child&apos;s development.
              </p>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow inline-flex"
              >
                Explore Our Tools
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
