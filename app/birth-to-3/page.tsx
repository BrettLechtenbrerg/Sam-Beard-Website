'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Baby, BookHeart, User } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

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
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                America in Crisis
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Help America Images - Stacked Full Width */}
          <div className="space-y-6 sm:space-y-12 max-w-6xl mx-auto">
            <FadeIn direction="up">
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/help-america-1.webp"
                  alt="Help America 1"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="glass-card p-3 sm:p-6 overflow-hidden hover:border-yellow-400/30">
                <Image
                  src="/images/help-america-2.webp"
                  alt="Help America 2"
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
