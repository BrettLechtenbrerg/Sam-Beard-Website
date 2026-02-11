'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Baby, BookHeart } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

export default function BirthToThree() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-20">
          {/* Badge */}
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 text-sm font-medium">
              <Baby className="w-4 h-4" />
              Early Childhood Development
            </span>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.1}>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Birth To 3</span>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn direction="up" delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              The most critical years for brain development. Learn how GIFT Connect
              supports parents and caregivers during this foundational period.
            </p>
          </FadeIn>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          CONTENT SECTIONS - Images with Animations
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-24">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* First Image Section - Fade from Left */}
          <FadeIn direction="left" className="mb-16">
            <div className="glass-card overflow-hidden">
              {/* Placeholder for actual image content */}
              <div className="aspect-[16/9] bg-gradient-to-br from-yellow-900/20 via-black to-yellow-900/10 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-yellow-400/40 mx-auto mb-4" />
                  <p className="text-white/40 text-lg">Birth To 3 Content Image 1</p>
                  <p className="text-white/30 text-sm mt-2">Replace with actual image</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Second Image Section - Fade from Right */}
          <FadeIn direction="right">
            <div className="glass-card overflow-hidden">
              {/* Placeholder for actual image content */}
              <div className="aspect-[16/9] bg-gradient-to-br from-yellow-900/10 via-black to-yellow-900/20 flex items-center justify-center">
                <div className="text-center">
                  <BookHeart className="w-16 h-16 text-yellow-400/40 mx-auto mb-4" />
                  <p className="text-white/40 text-lg">Birth To 3 Content Image 2</p>
                  <p className="text-white/30 text-sm mt-2">Replace with actual image</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          KEY FACTS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why Birth To 3 Matters
              </h2>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Stats/Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScaleIn delay={0}>
              <div className="glass-card text-center">
                <div className="text-5xl font-bold text-gradient mb-4">90%</div>
                <h3 className="text-xl font-semibold text-white mb-2">Brain Development</h3>
                <p className="text-white/60">
                  90% of brain development occurs in the first 3 years of life
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.1}>
              <div className="glass-card text-center">
                <div className="text-5xl font-bold text-gradient mb-4">1M+</div>
                <h3 className="text-xl font-semibold text-white mb-2">Neural Connections</h3>
                <p className="text-white/60">
                  Over 1 million new neural connections form every second
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="glass-card text-center">
                <div className="text-5xl font-bold text-gradient mb-4">65K</div>
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
      <section className="relative w-full py-24">
        <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeIn direction="up">
            <div className="glass-card py-12 px-8">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
