import React from 'react';
import { BookOpen, Lock, Clock, Award, Film, Code, PenTool, BookMarked, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Courses() {
  // Placeholder course modules
  const modules = [
    {
      title: 'Animation Making with AI',
      description: 'Create stunning animations using AI-powered tools and prompts',
      duration: '18h',
      level: 'Intermediate',
      icon: Film,
      color: 'violet'
    },
    {
      title: 'Software Development with AI',
      description: 'Build applications faster with AI coding assistants',
      duration: '24h',
      level: 'Advanced',
      icon: Code,
      color: 'purple'
    },
    {
      title: 'Content Creation with AI',
      description: 'Master AI tools for writing, video, and social media content',
      duration: '15h',
      level: 'Beginner',
      icon: PenTool,
      color: 'indigo'
    },
    {
      title: 'AI for Authors',
      description: 'Enhance your writing process with AI-powered storytelling',
      duration: '20h',
      level: 'Intermediate',
      icon: BookMarked,
      color: 'violet'
    },
    {
      title: 'Special Effects with AI',
      description: 'Create professional visual effects using AI technologies',
      duration: '22h',
      level: 'Advanced',
      icon: Sparkles,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Learning Paths</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Structured learning paths to master prompt engineering from beginner to expert
          </p>
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-2xl border-0 mb-12">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-bold mb-4">Courses Coming Soon</h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-6">
                We're developing comprehensive learning modules to help you master prompt engineering. 
                Stay tuned for interactive lessons, video tutorials, and hands-on exercises.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Expected Launch: Q2 2026</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Preview of Future Modules */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What's Coming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all border-2 border-purple-100 relative overflow-hidden group">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 relative">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      module.color === 'violet' ? 'bg-gradient-to-br from-violet-100 to-violet-200' :
                      module.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-purple-200' :
                      'bg-gradient-to-br from-indigo-100 to-indigo-200'
                    }`}>
                      <module.icon className={`w-7 h-7 ${
                        module.color === 'violet' ? 'text-violet-600' :
                        module.color === 'purple' ? 'text-purple-600' :
                        'text-indigo-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {module.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`px-3 py-1 rounded-full font-medium ${
                        module.color === 'violet' ? 'bg-violet-100 text-violet-700' :
                        module.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        'bg-indigo-100 text-indigo-700'
                      }`}>
                        {module.level}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </span>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Preview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              icon: BookOpen,
              title: 'Interactive Lessons',
              description: 'Learn through hands-on exercises and real-world examples'
            },
            {
              icon: Award,
              title: 'Certificates',
              description: 'Earn certificates upon completing each course module'
            },
            {
              icon: Clock,
              title: 'Self-Paced',
              description: 'Learn at your own speed with lifetime access to content'
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-purple-100">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Newsletter Signup Placeholder */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Notified When Courses Launch
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to know when our comprehensive learning platform goes live
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-violet-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}