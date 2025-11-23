import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is prompt engineering?',
      answer: 'Prompt engineering is the practice of crafting effective instructions and queries for AI models to produce desired outputs. It involves understanding how AI models interpret language and using specific techniques to guide them toward generating accurate, relevant, and high-quality responses. In the context of image generation, it means writing detailed descriptions that translate your creative vision into visual results.'
    },
    {
      question: 'How does scoring work?',
      answer: 'Our scoring system uses advanced embedding similarity algorithms to compare your prompt with the original prompt that generated the challenge image. We analyze semantic meaning, keyword relevance, and structural similarity to calculate a percentage match. Scores range from 0-100%, with higher scores indicating closer matches. The system considers not just exact word matches, but also conceptual similarity and prompt effectiveness.'
    },
    {
      question: 'Which AI models are used?',
      answer: 'We use Google Gemini as our core thinking model for analyzing and scoring prompts, and Stable Diffusion (stabilize.ai) for image generation. This combination ensures high-quality challenges and accurate evaluation of your prompt engineering skills.'
    },
    {
      question: 'How do demo challenges operate?',
      answer: 'Demo challenges present you with an AI-generated image where your goal is to reverse-engineer the prompt that created it. You submit your best guess, and our system instantly evaluates how closely your prompt matches the original using advanced similarity algorithms. This helps you practice and improve your prompt engineering skills in a fun, interactive way.'
    },

    {
      question: 'What makes a good prompt?',
      answer: 'Effective prompts are specific, descriptive, and structured. Include details about subject matter, artistic style, lighting, composition, colors, mood, and technical quality indicators. Good prompts often specify camera angles, artistic movements, and reference specific techniques or artists. The key is balancing detail with clarity. Too vague yields unpredictable results, while overly complex prompts can confuse the model.'
    },
    {
      question: 'How are rankings calculated?',
      answer: 'Your ranking is determined by your cumulative score across all challenges, weighted by consistency and recent performance. Active streaks provide bonus multipliers, and recent high scores are weighted slightly more than older ones. The leaderboard updates in real-time, showing all-time rankings, weekly performance, and friend comparisons. Top performers receive badges and recognition.'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Prompty AI is currently a web-based platform optimized for all devices including mobile browsers. We are planning to develop native iOS and Android apps in the future with enhanced features like push notifications for daily challenges, offline practice modes, and social features. Join our newsletter to be notified about future updates.'
    },
    {
      question: 'Can I compete with friends?',
      answer: 'We are planning to implement friend competition features in the future! This will allow you to compare scores, share challenges, and compete directly with your friends. Stay tuned for updates on this exciting feature.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Help Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about Prompty AI
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-all border-2 border-purple-100 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-violet-600 flex-shrink-0 transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-600 mt-4 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border-2 border-purple-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
