import { SafeIcon } from './components/SafeIcon';
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Squiggly line SVG component
const SquigglyLine = ({ className = '', color = '#1a1a2e' }) => (
  <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 25 Q 25 5, 50 25 T 100 25 T 150 25 T 195 25"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// 3D Blob Character Component
const BlobCharacter = () => {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Main blob body */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-full shadow-2xl"
        style={{
          boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.3), inset 10px 10px 20px rgba(255,255,255,0.2), 0 20px 40px rgba(91,77,255,0.4)'
        }}
      >
        {/* Face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Eyes */}
          <div className="flex gap-6 mb-4">
            <motion.div
              className="w-8 h-8 bg-black rounded-full relative overflow-hidden"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 0.2, delay: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
              {/* Star shape inside eye */}
              <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </motion.div>
            <motion.div
              className="w-8 h-8 bg-black rounded-full relative overflow-hidden"
              animate={{ scaleY: [1, 0.1, 1] }}
              transition={{ duration: 0.2, delay: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
              <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </motion.div>
          </div>
          {/* Mouth */}
          <motion.div
            className="w-6 h-8 bg-black rounded-full"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          ></motion.div>
        </div>
      </div>
      {/* Highlight */}
      <div className="absolute top-6 left-8 w-12 h-8 bg-white/20 rounded-full blur-md transform -rotate-12"></div>
    </motion.div>
  )
}

// Party Badge Component
const PartyBadge = () => (
  <motion.div
    className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0"
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-20 h-20 md:w-24 md:h-24 bg-flow-pink rounded-full flex items-center justify-center shadow-lg border-4 border-white transform rotate-12">
      <div className="text-center transform -rotate-12">
        <div className="text-[8px] md:text-[10px] font-bold text-black uppercase tracking-wider">FLOW PARTY</div>
        <div className="text-lg md:text-xl font-anton text-black">PARTY</div>
      </div>
    </div>
    {/* Decorative dots */}
    <div className="absolute -top-1 -left-1 w-3 h-3 bg-flow-lime rounded-full"></div>
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full"></div>
  </motion.div>
)

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-flow-purple/95 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-anton text-2xl md:text-3xl text-flow-lime tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          FLOW PARTY
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white font-medium hover:text-flow-lime transition-colors">About</a>
          <a href="#events" className="text-white font-medium hover:text-flow-lime transition-colors">Events</a>
          <a href="#community" className="text-white font-medium hover:text-flow-lime transition-colors">Community</a>
          <motion.button
            className="bg-flow-lime text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Community
          </motion.button>
          <motion.button
            className="border-2 border-white text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-flow-purple transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-12 h-12 bg-flow-lime rounded-full flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SafeIcon name={isOpen ? 'x' : 'menu'} size={24} color="black" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-flow-purple border-t border-white/10 p-6"
          >
            <div className="flex flex-col gap-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">About</a>
              <a href="#events" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">Events</a>
              <a href="#community" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">Community</a>
              <button className="bg-flow-lime text-black px-6 py-3 rounded-full font-bold w-full">
                Join Community
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-bold w-full">
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <section className="relative min-h-screen bg-flow-purple overflow-hidden flex items-center justify-center pt-20">
      {/* Background squiggles */}
      <motion.div className="absolute top-20 left-0 w-48 md:w-72 opacity-80" style={{ y: y1 }}>
        <SquigglyLine color="#1a1a2e" />
      </motion.div>
      <motion.div className="absolute bottom-40 right-0 w-48 md:w-72 opacity-80 rotate-180" style={{ y: y2 }}>
        <SquigglyLine color="#1a1a2e" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 right-10 w-16 h-16 bg-flow-lime rounded-full opacity-60"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-12 h-12 bg-flow-pink rounded-full opacity-60"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Giant FLOW text with blob */}
          <div className="relative mb-8">
            <motion.h1
              className="font-anton text-[120px] sm:text-[180px] md:text-[250px] lg:text-[300px] leading-none text-white tracking-tighter select-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              FLOW
            </motion.h1>

            {/* Blob character positioned over the text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BlobCharacter />
              <PartyBadge />
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-white/90 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            The Flow Party is a <em className="text-flow-lime font-semibold not-italic">safe</em>, <em className="text-flow-pink font-semibold not-italic">inclusive</em>, and <em className="text-flow-lime font-semibold not-italic">fun</em> space for website developers and designers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="bg-flow-lime text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon name="sparkles" size={20} color="black" />
              Join the Party
            </motion.button>
            <motion.button
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-flow-purple/10 text-flow-purple px-4 py-2 rounded-full font-bold text-sm mb-6">
              About Us
            </div>
            <h2 className="font-anton text-5xl md:text-7xl text-flow-dark mb-6 tracking-tight">
              WHERE CREATIVITY <span className="text-flow-purple">FLOWS</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Flow Party is a community-driven platform designed for creative professionals who want to connect, learn, and grow together. We believe in the power of collaboration and creating safe spaces for everyone.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are a seasoned developer or just starting your design journey, our community welcomes you with open arms and endless inspiration.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-flow-lime/20 px-4 py-2 rounded-full">
                <SafeIcon name="users" size={20} color="#5B4DFF" />
                <span className="font-semibold text-flow-dark">5000+ Members</span>
              </div>
              <div className="flex items-center gap-2 bg-flow-pink/20 px-4 py-2 rounded-full">
                <SafeIcon name="heart" size={20} color="#FF6B9D" />
                <span className="font-semibold text-flow-dark">Inclusive Space</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/user-photo-1.jpg"
                alt="Flow Party Community"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flow-purple/50 to-transparent"></div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-flow-lime rounded-full flex items-center justify-center">
                  <SafeIcon name="partyPopper" size={24} color="black" />
                </div>
                <div>
                  <div className="font-bold text-flow-dark">Join the Fun</div>
                  <div className="text-sm text-gray-500">Weekly events</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">New events every week with amazing people!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Events Section
const EventsSection = () => {
  const events = [
    {
      title: "Design Workshop",
      date: "Every Tuesday",
      time: "7:00 PM EST",
      description: "Learn the latest design trends and techniques with industry experts.",
      color: "bg-flow-lime",
      icon: "sparkles"
    },
    {
      title: "Code & Coffee",
      date: "Every Thursday",
      time: "10:00 AM EST",
      description: "Casual coding sessions with coffee and great conversations.",
      color: "bg-flow-pink",
      icon: "calendar"
    },
    {
      title: "Portfolio Review",
      date: "Monthly",
      time: "Flexible",
      description: "Get constructive feedback on your portfolio from peers and mentors.",
      color: "bg-flow-purple",
      icon: "star"
    }
  ]

  return (
    <section id="events" className="py-20 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-flow-pink/20 text-flow-pink px-4 py-2 rounded-full font-bold text-sm mb-4">
              Upcoming Events
            </span>
            <h2 className="font-anton text-5xl md:text-7xl text-flow-dark tracking-tight">
              JOIN THE <span className="text-flow-purple">FUN</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden"
            >
              <div className={`w-16 h-16 ${event.color} rounded-2xl flex items-center justify-center mb-6`}>
                <SafeIcon name={event.icon} size={28} color={event.color === 'bg-flow-lime' ? 'black' : 'white'} />
              </div>

              <h3 className="font-anton text-2xl text-flow-dark mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <SafeIcon name="calendar" size={16} />
                <span className="text-sm font-medium">{event.date} • {event.time}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>

              <motion.button
                className="w-full bg-flow-dark text-white py-3 rounded-xl font-bold hover:bg-flow-purple transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
                <SafeIcon name="arrowRight" size={18} />
              </motion.button>

              {/* Decorative corner */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${event.color} opacity-10 rounded-full`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Community Section
const CommunitySection = () => {
  const features = [
    { icon: "users", title: "Connect", desc: "Meet like-minded creatives" },
    { icon: "heart", title: "Support", desc: "Help each other grow" },
    { icon: "star", title: "Learn", desc: "Share knowledge freely" },
    { icon: "send", title: "Create", desc: "Build amazing things" },
  ]

  return (
    <section id="community" className="py-20 md:py-32 bg-flow-purple relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-5xl md:text-7xl text-white tracking-tight mb-6">
              OUR COMMUNITY
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              A vibrant space where creativity meets collaboration. Join thousands of developers and designers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-flow-lime rounded-xl flex items-center justify-center mx-auto mb-4">
                <SafeIcon name={feature.icon} size={28} color="black" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "5K+", label: "Members" },
            { number: "100+", label: "Events" },
            { number: "50+", label: "Countries" },
            { number: "∞", label: "Fun" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="font-anton text-5xl md:text-6xl text-flow-lime mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-flow-lime relative overflow-hidden">
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-black rounded-full opacity-10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-flow-purple rounded-full opacity-10"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl text-black tracking-tight mb-6">
            READY TO PARTY?
          </h2>
          <p className="text-black/70 text-xl max-w-2xl mx-auto mb-10">
            Join our community today and start creating, learning, and connecting with amazing people.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-flow-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon name="sparkles" size={24} />
              Get Started Free
            </motion.button>
            <motion.button
              className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg border-2 border-black hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-flow-dark text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-anton text-4xl text-flow-lime mb-4">FLOW PARTY</h3>
            <p className="text-gray-400 max-w-md mb-6">
              A safe, inclusive, and fun space for website developers and designers to connect, learn, and create together.
            </p>
            <div className="flex gap-4">
              {['twitter', 'instagram', 'github'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-flow-lime hover:text-black transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon name={social} size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Events', 'Community', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-flow-lime transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest events and news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-flow-lime"
              />
              <motion.button
                className="bg-flow-lime text-black w-12 h-12 rounded-full flex items-center justify-center font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon name="arrowRight" size={20} color="black" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Flow Party. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App