'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    image: 'https://voiceassistant.gift-connect.org/assets/sammie-DcXPA9Jh.png',
  },
  {
    title: 'My AI Song Generator',
    tagline: 'Create love songs for your little ones',
    cta: 'Click Here To Make A Song',
    href: 'https://newsonggenerator.gift-connect.org/',
    icon: Music,
    image: 'https://newsonggenerator.gift-connect.org/static/geno_transparent.png',
  },
  {
    title: 'My AI Story Generator',
    tagline: 'Turn life lessons into magical moments',
    cta: 'Click Here To Make A Story',
    href: 'https://storygenerator.gift-connect.org/',
    icon: BookOpen,
    image: 'https://storygenerator.gift-connect.org/images/stacy_logo.png',
  },
];


export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Background Gradient Overlay */}
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
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center pt-24 sm:pt-32 pb-12 sm:pb-16">
          {/* Headline */}
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Join Us NOW To Save Our Children
            </h1>
          </FadeIn>

          {/* Hero Video Player */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="video-container aspect-video relative overflow-hidden">
                <iframe
                  src="https://player.vimeo.com/video/832805208"
                  title="Sam Beard - Join Us NOW To Save Our Children"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          AI TOOLS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="ai-tools" className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                AI For Good
              </h2>
              <p className="text-lg sm:text-xl text-yellow-400 font-medium mb-6">
                Tools For Parents And Caregivers
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {aiTools.map((tool, index) => (
              <ScaleIn key={tool.title} delay={index * 0.15}>
                <div className="tool-card h-full flex flex-col items-center text-center">
                  {/* Image or Icon */}
                  {tool.image ? (
                    <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden border-2 border-yellow-400/30">
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="feature-icon mb-6">
                      <tool.icon className="w-7 h-7 text-black" />
                    </div>
                  )}

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
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        {/* Background Accent */}
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Music & Edutainment
              </h2>
              <p className="text-lg sm:text-xl text-yellow-400 font-medium mb-6">
                Fun Ways to Lifelong Learning
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Two Videos Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {/* Video 1 - Abujubuju baby */}
            <FadeIn direction="left">
              <div className="video-container aspect-video overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/qnb8-EeRuIY"
                  title="Abujubuju baby by Stellar Mengele"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeIn>

            {/* Video 2 */}
            <FadeIn direction="right">
              <div className="video-container aspect-video overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/w2PN3aTl644"
                  title="Music & Edutainment Video 2"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>

          {/* Rupert Hitzig Quote */}
          <FadeIn direction="up">
            <div className="glass-card max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Profile */}
                <div className="flex-shrink-0 text-center sm:text-left">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-black font-bold text-2xl mx-auto sm:mx-0">
                    RH
                  </div>
                  <p className="text-yellow-400 text-sm font-medium mt-3">GC Creative Director</p>
                  <h3 className="text-xl font-bold text-white">Rupert Hitzig</h3>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <p className="text-white/70 leading-relaxed text-center sm:text-left">
                    &quot;Edutainment Music is one of the most powerful tools we have to reach hearts
                    and shape minds. In two years with the Carnegie Hall Lullaby Project in Kitui
                    County, Kenya, GIFT has impacted 65,000 under-resourced mothers with newborns
                    using music. With TV, radio and PSA&apos;s, Stellar Mengele has reached four million +.
                    The President of Kenya recognized Stellar as one Kenya&apos;s Top 30 Most Influential
                    Citizens. With initial steps taken in 2024-25, GIFT CONNECT will take
                    Edutainment Music across the USA by 2030.&quot;
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          THINK BIG CTA SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">Think Big!</span>
                <span className="text-white"> Yes We Can!</span>
              </h2>
            </div>
          </FadeIn>

          {/* Video Section */}
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="video-container aspect-video overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/ECBTbTntOLE"
                  title="Think Big! Yes We Can!"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          GET STARTED / PARTNERS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Get Started
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Feature Images - Stacked Full Width */}
          <div className="space-y-6 sm:space-y-12 max-w-6xl mx-auto">
            {/* Six Loving Habits */}
            <FadeIn direction="up">
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/six-loving-habits.webp"
                  alt="Six Loving Habits - Science Proven: Speak, Sing, Read, Play, Count, Serve & Return"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            {/* Legacy of Literacy */}
            <FadeIn direction="up" delay={0.2}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/legacy-of-literacy.webp"
                  alt="Legacy of Literacy"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          ADVISORY COUNCIL SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Advisory Council
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Advisory Council Images - Stacked Full Width */}
          <div className="space-y-6 sm:space-y-12 max-w-6xl mx-auto">
            <FadeIn direction="up">
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/advisory-council-1.webp"
                  alt="Advisory Council Member 1"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/advisory-council-2.webp"
                  alt="Advisory Council Member 2"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/advisory-council-3.webp"
                  alt="Advisory Council Member 3"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/advisory-council-4.webp"
                  alt="Advisory Council Member 4"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/advisory-council-5.webp"
                  alt="Advisory Council Member 5"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/advisory-council-6.webp"
                  alt="Advisory Council Member 6"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
