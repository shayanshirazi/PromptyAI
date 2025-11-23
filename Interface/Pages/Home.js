import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowRight, Trophy, BookOpen, Target, Zap, Users, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-50 to-transparent opacity-60"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">Prompt Engineering Training Arena</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 pb-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-relaxed">
              Master Artificial Intelligence Through Interactive Learning
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              Learn AI and prompt engineering through hands-on challenges and interactive lessons. 
              Practice with real examples, compete with the community, and master the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('DailyChallenge')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Demo Challenge
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to={createPageUrl('About')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet-700 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:bg-violet-50 transition-all border border-violet-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to becoming a prompt engineering expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Interactive Challenges',
                description: 'Tackle daily AI challenges that test your understanding and creativity with real-world scenarios.',
                color: 'violet'
              },
              {
                icon: Brain,
                title: 'Learn By Doing',
                description: 'Practice with hands-on exercises that teach you how to effectively communicate with AI systems.',
                color: 'purple'
              },
              {
                icon: Trophy,
                title: 'Track Progress',
                description: 'Get instant feedback on your performance and see your skills improve over time.',
                color: 'indigo'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-purple-100 hover:border-purple-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rankings Preview */}
          <motion.div
            className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-12 h-12 mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Global Rankings</h3>
            <p className="text-purple-100 mb-6 text-lg">
              Compete with AI enthusiasts worldwide. Climb the leaderboard and showcase your mastery.
            </p>
            <Link
              to={createPageUrl('Rankings')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors"
            >
              View Rankings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Courses Preview */}
          <motion.div
            className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white shadow-2xl hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-12 h-12 mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Learning Paths</h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Structured courses covering AI fundamentals, prompt engineering, and advanced techniques.
            </p>
            <Link
              to={createPageUrl('Courses')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Users', value: '10K+', icon: Users },
              { label: 'Demo Challenges', value: '365+', icon: Target },
              { label: 'Avg. Score', value: '85%', icon: Trophy },
              { label: 'Learning Modules', value: 'Coming Soon', icon: BookOpen }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your AI Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of learners mastering AI through interactive practice
            </p>
            <Link
              to={createPageUrl('DailyChallenge')}
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Start Your First Demo Challenge
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
