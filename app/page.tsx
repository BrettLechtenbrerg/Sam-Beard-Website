'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles, Bot, Music, BookOpen, Play } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';

// Advisory Council data - 22 top-level USA and global early childhood development leaders
const councilMembers = [
  {
    name: 'Sam Beard',
    title: 'Founder',
    bio: 'Over 50 years in public service. Began work with Senator Robert Kennedy. Created and ran programs with 8 Presidents of the U.S., including 6 initiatives. Each initiative changed over 50 million lives. Created the Jefferson Awards with Jacqueline Kennedy Onassis and Senator Robert Taft, Jr.',
    image: '/images/council/sam-beard.png',
  },
  {
    name: 'David Bray',
    title: 'Principal, LeadDoAdapt Ventures, Inc.',
    bio: 'Loomis Innovation Council Member & Distinguished Fellow, Henry S. Stimson Center, Business Executives for National Security.',
    image: '/images/council/david-bray.png',
  },
  {
    name: 'Dave Dennis',
    title: 'President Emeritus',
    bio: 'President Emeritus of Specialty Contractors & Associates in Gulfport. Dennis has been in leadership positions with many professional and civic organizations. He is Chair of the Board of the Children\'s Foundation of Mississippi and was a significant leader in creating the Mississippi Miracle.',
    image: '/images/council/dave-dennis.png',
  },
  {
    name: 'Bill Milliken',
    title: 'Founder & Chairman, Communities in Schools',
    bio: 'One of America\'s largest non-profits impacting underserved youth from kindergarten through grade 12.',
    image: '/images/council/bill-milliken.png',
  },
  {
    name: 'Donna Norton',
    title: 'Executive VP & Chief Advancement & Strategy Officer, MomsRising',
    bio: 'Founding Member. Norton is an innovator and strategic manager with more than 20 years of experience working on women\'s rights and gender equality on a variety of policy challenges. Norton has one million activists and will help guide GC.',
    image: '/images/council/donna-norton.png',
  },
  {
    name: 'Sarah Rittling',
    title: 'Executive Director, First Five Years Fund',
    bio: 'A major bipartisan leadership organization in America working to raise federal funding for early childhood development.',
    image: '/images/council/sarah-rittling.png',
  },
  {
    name: 'Mark Sadovnick',
    title: 'Managing Partner, 5th Element Group',
    bio: 'A leading, global collaborative organization for over 6 years. One major initiative is AI for Good and he is committed to help guide and advocate for GC\'s AI initiative.',
    image: '/images/council/mark-sadovnick.png',
  },
  {
    name: 'Eric Sapp',
    title: 'Founder & President, Public Democracy, Inc.',
    bio: 'Entrepreneur. A nationally-recognized leader in the global "Data for Good" movement. Pioneered breakthroughs in AI and empathy-based machine learning. Non-resident Senior Fellow at Atlantic Council.',
    image: '/images/council/eric-sapp.png',
  },
  {
    name: 'Maria Snyder',
    title: 'Artist, Eco-Entrepreneur, Author & Designer',
    bio: 'Founder Eco Boys and Girls. She is committed to this and ECD. In recent years, Maria has focused her many creative talents on raising environmental awareness and positively impacting how boys and girls see and connect with the earth.',
    image: '/images/council/maria-snyder.png',
  },
  {
    name: 'Jose Antonio Tijerino',
    title: 'President & CEO, Hispanic Heritage Foundation',
    bio: 'A national nonprofit focused on education, workforce, social impact, and culture through innovative leadership. (38 cities across America with important Hispanic populations.) Executive Producer, Hispanic Heritage Awards at the Kennedy Center.',
    image: '/images/council/jose-antonio-tijerino.png',
  },
  {
    name: 'Cindy Minton Walker',
    title: 'Early Childhood Development Leader',
    bio: 'Over 30 years pioneering and leading the fight for Early Childhood Development. Began as a major leader in South Carolina, and then moved to Mississippi where she served as project director South MS PreK4Wards and helped build "The Mississippi Miracle."',
    image: '/images/council/cindy-minton-walker.png',
  },
  {
    name: 'Rebecca Kelley',
    title: 'Executive VP of Advocacy & Community Development, Waterford.org',
    bio: '$70 Million non-profit operating in 70+ communities nationwide.',
    image: '/images/council/rebecca-kelley.png',
  },
  {
    name: 'Terry Lierman',
    title: 'Former Staff Director, US Senate Committee on Appropriations',
    bio: 'Chief of Staff to the US House Majority Leader, a long-time advocate for medical research, and candidates for Congressional and presidential offices.',
    image: '/images/council/terry-lierman.png',
  },
  {
    name: 'Dr. Suzanne Mayo',
    title: 'Professor, Grambling State University',
    bio: 'Early Childhood Development Professor in Louisiana. Special focus Birth to 3. Plus, hands-on training of underserved mothers building empowerment and working with newborns and toddlers. Long-term Black leader at the highest levels with leading Black organizations across America.',
    image: '/images/council/dr-suzanne-mayo.png',
  },
  {
    name: 'Matthew Melmed',
    title: 'Executive Director, ZERO TO THREE',
    bio: 'One of America\'s science-based and proven ECD leaders for over 40 years.',
    image: '/images/council/matthew-melmed.png',
  },
  {
    name: 'Libby Doggett, PhD',
    title: 'Former Deputy Assistant Secretary, USDOE',
    bio: 'Leveraging 40+ years of leadership honed through work in schools, Head Start, and childcare Libby has worked to improve the well-being of children in Texas. She serves on numerous national, state, and local boards that impact the quality of life of our nation\'s youngest children.',
    image: '/images/council/libby-doggett.png',
  },
  {
    name: 'Kathy Eldon',
    title: 'Author, Film Producer, Journalist',
    bio: 'Inspired by the life of her son Dan Eldon, Kathy founded Creative Visions Foundation and Creative Visions Productions which for over 20 years have leveraged the power of Media and the Arts to ignite positive social change.',
    image: '/images/council/kathy-eldon.png',
  },
  {
    name: 'Dr. Cyndie Hatcher, MD, MPH',
    title: 'Board Certified Pediatrician',
    bio: 'Former attending physician at Boston Medical Center. Lead the team-based care pilot program innovating improved care delivery models for children. With Dr. Barry Zuckerman and WGBH created "Small Moments, Big Impact," a phone app and online tool that helps improve empathy and attachment within the mother-baby dyad.',
    image: '/images/council/dr-cyndie-hatcher.png',
  },
  {
    name: 'Bawa Jain',
    title: 'Founder President, The Centre for Responsible Leadership',
    bio: 'Bawa Jain served as Secretary General, World Council of Religious Leaders and in 2000, led the United Nations\' Millennium World Peace Summit of Religious and Spiritual Leaders.',
    image: '/images/council/bawa-jain.png',
  },
  {
    name: 'Carolyn Wall',
    title: 'Senior Media Executive',
    bio: 'Over thirty years of experience as a Senior Media Executive in publishing, broadcasting, branding, and strategic content marketing. Her former roles include VP/GM of New York TV flagship Fox5; Publisher of New York Magazine; EVP of Murdoch Magazines, and US President of Narrowstep, a broadband TV company based in the UK.',
    image: '/images/council/carolyn-wall.png',
  },
  {
    name: 'Kathryn Way',
    title: 'Early Childhood Development Expert',
    bio: 'Over 30 years of experience in early childhood development. Represented Delaware Governor Mike Castle to the National Governor\'s Association. NGA created a breakthrough "first 60 months" report in the 1980\'s. Special Assistance to President Bill Clinton for Early Childhood Development.',
    image: '/images/council/kathryn-way.png',
  },
  {
    name: 'Dr. Barry Zuckerman',
    title: 'Professor & Chair Emeritus, Boston University Medicine',
    bio: 'Department of Pediatrics, Boston Medical Center. Co-Founder: HealthLeads (Healthy Steps). Co-Founder: Reach Out & Read. Co-Founder and Co-Director: "Small Moments, Big Impact"',
    image: '/images/council/dr-barry-zuckerman.png',
  },
];

// Six Loving Habits - Science Proven
const lovingHabits = [
  {
    name: 'Speak',
    description: 'Talk to your baby all the time. Every word grows their brain.',
    image: '/images/habits/speak.png',
  },
  {
    name: 'Sing',
    description: 'Songs build language, rhythm, emotion... and trust.',
    image: '/images/habits/sing.png',
  },
  {
    name: 'Read',
    description: 'Reading together boosts imagination, vocabulary, and connection.',
    image: '/images/habits/read.png',
  },
  {
    name: 'Play',
    description: 'Free play builds creativity, problem-solving and resilience.',
    image: '/images/habits/play.png',
  },
  {
    name: 'Count',
    description: 'Early math teaches pattern recognition and logic.',
    image: '/images/habits/count.png',
  },
  {
    name: 'Serve & Return',
    description: 'Respond to your baby\'s cues. Baby responds to your actions. Connection is the core of learning.',
    image: '/images/habits/serve-return.png',
  },
];

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
          SIX LOVING HABITS SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
                Six Loving Habits
              </h2>
              <p className="text-xl sm:text-2xl text-yellow-400 font-medium mb-4">
                Science Proven
              </p>
              <p className="text-lg sm:text-xl text-white/80 font-medium mb-4">
                Six Habits. One Foundation. Parents With Love.
              </p>
              <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto mb-6">
                Early learning isn&apos;t built in classrooms — it&apos;s built in living rooms, kitchens and bedtime routines with parents. The &quot;Loving Habits&quot; make learning joyful, natural, and powerful.
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Six Loving Habits Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {lovingHabits.map((habit, index) => (
              <ScaleIn key={habit.name} delay={index * 0.1}>
                <div className="glass-card p-3 sm:p-4 h-full flex flex-col items-center text-center hover:border-yellow-400/40 transition-all duration-300">
                  {/* Habit Image */}
                  <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-yellow-400/30 mb-3">
                    <Image
                      src={habit.image}
                      alt={habit.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Habit Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
                    {habit.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {habit.description}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          LEGACY OF LITERACY SECTION
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
                Legacy Of Literacy
              </h2>
              <p className="text-xl sm:text-2xl text-yellow-400 font-medium mb-6">
                Breaking the Cycles of Trauma and Poverty
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="up" delay={0.2}>
            <div className="glass-card p-6 sm:p-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                  Too many families are trapped in cycles of poverty, trauma, and adversity, often stretching back generations. These cycles impact brain development, school readiness, and emotional well-being.
                </p>

                <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
                  <p className="text-white text-lg sm:text-xl font-bold">
                    At GIFT CONNECT, we believe parents are not the problem.
                  </p>
                  <p className="text-yellow-400 text-lg sm:text-xl font-bold italic">
                    They are the solution.
                  </p>
                </div>

                <p className="text-yellow-400/80 text-base sm:text-lg">
                  Our trauma-informed approach empowers parents and caregivers with:
                </p>

                <ul className="space-y-3 text-white/70 text-base sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong className="text-white">Healing tools</strong> for emotional resilience and generational recovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong className="text-white">Early development practices</strong> rooted in neuroscience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span><strong className="text-white">Leadership training</strong> to help caregivers become champions in their homes and communities</span>
                  </li>
                </ul>

                <p className="text-white/80 text-base sm:text-lg font-medium">
                  The impact: Stronger parents. Healthier children. Smarter communities.
                </p>

                <p className="text-yellow-400 text-lg sm:text-xl font-bold italic text-center pt-4">
                  Breaking the cycle isn&apos;t a dream. It&apos;s a plan — and it starts in the first 1,000 days.
                </p>
              </div>
            </div>
          </FadeIn>
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
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                Advisory Council
              </h2>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-6">
                In 2024, GIFT CONNECT (GC) had the honor to invite and engage 21 top-level USA and global early childhood development leaders, experts and scientists to help guide GC and collaborate to be transformational in impact.
              </p>
              <div className="section-divider" />
            </div>
          </FadeIn>

          {/* Advisory Council Grid - Individual Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {councilMembers.map((member, index) => (
              <ScaleIn key={member.name} delay={Math.min(index * 0.05, 0.5)}>
                <div className="glass-card p-4 sm:p-6 h-full flex flex-col hover:border-yellow-400/40 transition-all duration-300">
                  {/* Member Photo & Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 border-yellow-400/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 text-sm sm:text-base font-medium mt-1 leading-snug">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-white/60 text-sm leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
