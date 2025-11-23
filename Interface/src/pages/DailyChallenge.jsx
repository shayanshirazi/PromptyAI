import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function DailyChallenge() {
  const [userPrompt, setUserPrompt] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [challengeData, setChallengeData] = useState(null);
  const [isLoadingChallenge, setIsLoadingChallenge] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [score, setScore] = useState(null);

  // Fetch challenge on page load
  useEffect(() => {
    const fetchChallenge = async () => {
      setIsLoadingChallenge(true);
      try {
        const response = await fetch('https://cn.yourbeauty.tips/webhook/new-challenge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ start: true })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Store challenge data (prompt hidden, only used internally)
        if (data && data.image && data.prompt) {
          setChallengeData({
            image: data.image,
            prompt: data.prompt // Hidden from UI, stored for future scoring
          });
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Failed to fetch challenge:', error);
        setChallengeData(null);
      } finally {
        setIsLoadingChallenge(false);
      }
    };

    fetchChallenge();
  }, []);

  const handleSubmit = async () => {
    if (!userPrompt.trim() || !challengeData?.image || !challengeData?.prompt) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://cn.yourbeauty.tips/webhook/score-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_prompt: userPrompt.trim(),
          original_prompt: challengeData.prompt
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Store user's guess and score from API
      setUserGuess(userPrompt);
      setScore(data.similarity_score);
    } catch (error) {
      console.error('Failed to score prompt:', error);
      // Fallback: show error to user
      alert('Failed to score your prompt. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Demo Challenge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Reverse-Engineer This Image
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Study the image below and write a prompt that you think generated it. 
            The closer your prompt, the higher your score.
          </p>
        </motion.div>

        {/* Challenge Image - Loaded from API */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="mb-8 shadow-xl border-2 border-purple-100">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-violet-50 to-purple-50 min-h-[400px] flex items-center justify-center">
                {isLoadingChallenge ? (
                  // Loading spinner
                  <div className="flex flex-col items-center gap-4 py-20">
                    <Loader2 className="w-12 h-12 text-violet-600 animate-spin" />
                    <p className="text-sm text-gray-600 font-medium">Loading challenge...</p>
                  </div>
                ) : challengeData ? (
                  // Display fetched image with fade-in effect - full image, no cropping
                  <div className="w-full p-4">
                    <motion.img
                      src={challengeData.image}
                      alt="AI Generated Challenge Image"
                      className="w-full max-w-full rounded-xl shadow-lg object-contain mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: imageLoaded ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      onLoad={() => setImageLoaded(true)}
                      data-challenge-image
                    />
                  </div>
                ) : (
                  // Error state
                  <div className="text-center p-8">
                    <p className="text-gray-600">Failed to load challenge. Please refresh the page.</p>
                  </div>
                )}
                {!isLoadingChallenge && challengeData && imageLoaded && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                    <ImageIcon className="w-4 h-4 text-violet-600" />
                    <span className="text-sm font-medium text-gray-700">Demo Challenge</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Prompt Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-lg border-2 border-purple-100">
            <CardContent className="p-6 sm:p-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Your Prompt Guess
              </label>
              <Textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="e.g., A futuristic cityscape at sunset with flying cars and neon lights, digital art style, highly detailed..."
                className="min-h-[120px] text-base resize-none border-purple-200 focus:border-violet-500 focus:ring-violet-500"
                disabled={isLoadingChallenge || score !== null}
                data-prompt-input
              />
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {userPrompt.length} characters
                </span>
                <Button
                  onClick={handleSubmit}
                  disabled={!userPrompt.trim() || isSubmitting || isLoadingChallenge || score !== null}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Prompt
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Score Display */}
        {score !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="shadow-xl border-2 border-purple-200 bg-gradient-to-br from-violet-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Score</h3>
                <div className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {score.toFixed(3)}%
                </div>
                <p className="text-gray-600">
                  Great job! Your prompt similarity score is {score.toFixed(3)}%.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}



        {/* Tips Section */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-purple-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💡 Pro Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-violet-600 font-bold">•</span>
              <span>Be specific about style, lighting, and composition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600 font-bold">•</span>
              <span>Include details about colors, mood, and artistic techniques</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600 font-bold">•</span>
              <span>Think about camera angles and perspective</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600 font-bold">•</span>
              <span>Mention quality indicators like "highly detailed" or "8k resolution"</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}