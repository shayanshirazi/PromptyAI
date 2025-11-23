import React from 'react';
import { Target, Brain, Zap, Users, Mail, Github, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function About() {
  const teamMembers = [
    { 
      name: 'Shayan Shirazi', 
      role: 'Full Stack and AI Developer', 
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921857e8fc0035b3de52109/837cbd226_image.png',
      linkedin: 'https://www.linkedin.com/in/shirazi-shayan/'
    },
    { 
      name: 'Ryan Ding', 
      role: 'Product Designer and Research Lead', 
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921857e8fc0035b3de52109/e6f8618e8_image.png',
      linkedin: 'https://www.linkedin.com/in/ryan-ding-1092162bb/'
    }
  ];



  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-4">
            <Target className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Prompty
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize prompt engineering education through 
            interactive challenges and gamified learning experiences.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    As AI becomes increasingly integral to creative and professional workflows, 
                    the ability to communicate effectively with AI systems is a critical skill. 
                    Prompty makes learning prompt engineering engaging, measurable, and accessible 
                    to everyone, from curious beginners to seasoned AI practitioners. We believe that 
                    through practice, feedback, and community, anyone can master the art of prompt crafting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How It Works */}
        <div className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How Prompty Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Reverse Engineering',
                description: 'Each challenge presents an AI-generated image. Your goal: craft a prompt that could have produced it.',
                color: 'violet'
              },
              {
                icon: Zap,
                title: 'Instant Feedback',
                description: 'Our advanced embedding system instantly compares your prompt to the original, providing detailed similarity scores.',
                color: 'purple'
              },
              {
                icon: Users,
                title: 'Community Learning',
                description: 'Compete on leaderboards, share strategies, and learn from the prompts of top performers worldwide.',
                color: 'indigo'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all border-2 border-purple-100">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-white to-purple-50 shadow-2xl border-2 border-purple-200">
            <CardContent className="p-12 text-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921857e8fc0035b3de52109/1e7a08372_google-gemini-new-rainbow-colours-removebg-preview.png"
                alt="Gemini Logo"
                className="h-48 mx-auto mb-8"
              />
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Powered by Gemini</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Prompty AI leverages Google's Gemini AI to deliver cutting-edge image generation 
                and advanced scoring algorithms, ensuring an accurate and educational experience 
                for prompt engineering learners.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="text-center shadow-lg hover:shadow-xl transition-all border-2 border-purple-100 hover:border-purple-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-violet-100 to-purple-200">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg border-2 border-purple-200">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions, feedback, or partnership inquiries? We'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <a 
                    href="mailto:hello@promptarena.ai" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all border-2 border-violet-200 hover:border-violet-400"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all border-2 border-violet-200 hover:border-violet-400"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all border-2 border-violet-200 hover:border-violet-400"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Prompty AI. Built with love for the AI community.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
