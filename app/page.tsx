'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Music, BookOpen, Play } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

// AI Tools data
const aiTools = [
  {
    title: 'My AI Parenting Assistant',
    tagline: 'Ask anything. Anytime',
    cta: 'Click Here To Try It',
    href: 'https://voiceassistant.gift-connect.org/org/',
    icon: Bot,
  },
  {
    title: 'My AI Song Generator',
    tagline: 'Create love songs for your little ones',
    cta: 'Click Here To Make A Song',
    href: 'https://newsonggenerator.gift-connect.org/',
    icon: Music,
  },
  {
    title: 'My AI Story Generator',
    tagline: 'Turn life lessons into magical moments',
    cta: 'Click Here To Make A Story',
    href: 'https://storygenerator.gift-connect.org/',
    icon: BookOpen,
  },
];

// Partner logos - placeholder names
const partnerLogos = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
  'Partner 7',
  'Partner 8',
  'Partner 9',
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        {/* Animated Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-20">
          {/* Badge */}
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              GIFT Connect
            </span>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.1}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-white">Join Us NOW To</span>
              <br />
              <span className="text-gradient">Save Our Children</span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Empowering parents and caregivers with AI-powered tools for nurturing
              the next generation through music, stories, and support.
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-10">
              <motion.a
                href="#ai-tools"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow"
              >
                <span>Explore Our Tools</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-yellow-400/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400/60"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          AI TOOLS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="ai-tools" className="relative w-full py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                AI For Good
              </h2>
              <p className="text-xl text-yellow-400 font-medium mb-6">
                Tools For Parents And Caregivers
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <ScaleIn key={tool.title} delay={index * 0.15}>
                <div className="tool-card h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="feature-icon mb-6">
                    <tool.icon className="w-7 h-7 text-black" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-white/60 mb-8 flex-grow">
                    {tool.tagline}
                  </p>

                  {/* CTA */}
                  <motion.a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary w-full justify-center"
                  >
                    {tool.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          MUSIC & EDUTAINMENT SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 lg:py-32">
        {/* Background Accent */}
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Music & Edutainment
              </h2>
              <p className="text-xl text-yellow-400 font-medium mb-6">
                Fun Ways to Lifelong Learning
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <FadeIn direction="left">
              <div className="video-container aspect-video">
                {/* Placeholder for video - replace with actual embed */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-900/20 to-black">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-yellow-400/20 border-2 border-yellow-400/50 flex items-center justify-center mx-auto mb-4 cursor-pointer"
                    >
                      <Play className="w-8 h-8 text-yellow-400 ml-1" />
                    </motion.div>
                    <p className="text-white/60 text-sm">
                      Abujubuju baby by Stellar Mengele
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right">
              <div className="glass-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold text-xl">
                    RH
                  </div>
                  <div>
                    <p className="text-yellow-400 text-sm font-medium">GC Creative Director</p>
                    <h3 className="text-2xl font-bold text-white">Rupert Hitzig</h3>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed">
                  &quot;Edutainment Music is one of the most powerful tools we have to reach hearts
                  and shape minds. In two years with the Carnegie Hall Lullaby Project in Kitui
                  County, Kenya, GIFT has impacted 65,000 under-resourced mothers with newborns
                  using music. With TV, radio and PSA&apos;s, Stellar Mengele has reached four million +.
                  The President of Kenya recognized Stellar as one Kenya&apos;s Top 30 Most Influential
                  Citizens. With initial steps taken in 2024-25, GIFT CONNECT will take
                  Edutainment Music across the USA by 2030.&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THINK BIG CTA SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">Think Big!</span>
                <span className="text-white"> Yes We Can!</span>
              </h2>
            </div>
          </FadeIn>

          {/* Video Section */}
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="video-container aspect-video">
                {/* Placeholder for video - replace with actual embed */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-900/20 to-black">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-24 h-24 rounded-full bg-yellow-400/20 border-2 border-yellow-400/50 flex items-center justify-center mx-auto mb-4 cursor-pointer"
                    >
                      <Play className="w-10 h-10 text-yellow-400 ml-1" />
                    </motion.div>
                    <p className="text-white/40 text-sm">Enable sound</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          GET STARTED / PARTNERS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Get Started
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            {partnerLogos.map((partner, index) => (
              <ScaleIn key={partner} delay={index * 0.05}>
                <div className="glass-card p-4 flex items-center justify-center aspect-square hover:border-yellow-400/30">
                  {/* Placeholder for actual partner logos */}
                  <div className="w-full h-full rounded-lg bg-white/5 flex items-center justify-center">
                    <span className="text-white/30 text-xs text-center">Logo</span>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
