import React, { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { motion } from 'framer-motion';

export default function Rankings() {


  // Placeholder data - will be replaced with API calls
  const leaderboardData = [
    { rank: 1, username: 'PromptMaster_AI', avatar: '👑', score: 98.503, streak: 45, badge: 'gold' },
    { rank: 2, username: 'CodeWhisperer', avatar: '🎯', score: 97.204, streak: 38, badge: 'silver' },
    { rank: 3, username: 'PixelPerfect', avatar: '✨', score: 95.801, streak: 42, badge: 'bronze' },
    { rank: 4, username: 'AIEnthusiast', avatar: '🚀', score: 94.209, streak: 35, badge: null },
    { rank: 5, username: 'PromptNinja', avatar: '🥷', score: 92.807, streak: 30, badge: null },
    { rank: 6, username: 'CreativeGenius', avatar: '🎨', score: 91.502, streak: 28, badge: null },
    { rank: 7, username: 'TechSavant', avatar: '💡', score: 90.203, streak: 25, badge: null },
    { rank: 8, username: 'ImageCrafter', avatar: '🔮', score: 88.905, streak: 22, badge: null },
    { rank: 9, username: 'PromptPro', avatar: '⚡', score: 87.509, streak: 20, badge: null },
    { rank: 10, username: 'AIArtist', avatar: '🎭', score: 86.204, streak: 18, badge: null },
  ];

  const getBadgeColor = (badge) => {
    if (badge === 'gold') return 'from-yellow-400 to-yellow-600';
    if (badge === 'silver') return 'from-gray-300 to-gray-500';
    if (badge === 'bronze') return 'from-orange-400 to-orange-600';
    return 'from-purple-400 to-purple-600';
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-orange-400" />;
    return <span className="text-sm font-bold text-gray-500">#{rank}</span>;
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Global Leaderboard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Top Prompt Engineers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compete with the best prompt engineers from around the world
          </p>
        </motion.div>



        {/* Top 3 Podium */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* 2nd Place */}
          <div className="pt-8">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-3">{leaderboardData[1].avatar}</div>
                <Medal className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-700 mb-1">2nd</div>
                <div className="font-semibold text-gray-900 mb-1 truncate">
                  {leaderboardData[1].username}
                </div>
                <div className="text-lg font-bold text-violet-600">
                  {leaderboardData[1].score.toFixed(3)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 1st Place */}
          <div>
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 shadow-2xl transform scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-3">{leaderboardData[0].avatar}</div>
                <Crown className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-yellow-700 mb-1">1st</div>
                <div className="font-semibold text-gray-900 mb-1 truncate">
                  {leaderboardData[0].username}
                </div>
                <div className="text-xl font-bold text-violet-600">
                  {leaderboardData[0].score.toFixed(3)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3rd Place */}
          <div className="pt-8">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-3">{leaderboardData[2].avatar}</div>
                <Medal className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-700 mb-1">3rd</div>
                <div className="font-semibold text-gray-900 mb-1 truncate">
                  {leaderboardData[2].username}
                </div>
                <div className="text-lg font-bold text-violet-600">
                  {leaderboardData[2].score.toFixed(3)}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Full Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-xl border-2 border-purple-100">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-violet-50 to-purple-50 border-b-2 border-purple-100">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rank</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Player</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Score</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Streak</th>
                    </tr>
                  </thead>
                  <tbody data-leaderboard-body>
                    {leaderboardData.map((player, index) => (
                      <motion.tr
                        key={player.rank}
                        className="border-b border-purple-50 hover:bg-violet-50 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(player.rank)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getBadgeColor(player.badge)} flex items-center justify-center text-xl shadow-md`}>
                              {player.avatar}
                            </div>
                            <span className="font-semibold text-gray-900">{player.username}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100 text-violet-700 rounded-full font-bold">
                            <TrendingUp className="w-4 h-4" />
                            {player.score.toFixed(3)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-orange-600 font-semibold">
                            🔥 {player.streak} days
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { label: 'Total Players', value: '10,234', icon: '👥', color: 'violet' },
            { label: 'Average Score', value: '7,845', icon: '📊', color: 'purple' },
            { label: 'Longest Streak', value: '127 days', icon: '🔥', color: 'indigo' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border-${stat.color}-200 border-2`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
