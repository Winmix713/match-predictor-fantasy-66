
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircularProgressChart } from '@/components/football/CircularProgressChart';
import { PieChartComponent } from '@/components/football/PieChartComponent';
import { Trophy, Star, Clock, ArrowRight, Check } from 'lucide-react';

// Mock tournaments data
const currentTournament = {
  id: '1',
  name: 'Premier League Challenge',
  status: 'in-progress',
  progress: 65,
  matches: {
    played: 13,
    total: 20,
    won: 9,
    drawn: 3,
    lost: 1
  },
  points: 30,
  maxPoints: 60,
  rank: 2,
  rankDescription: 'Gold',
  qualification: 'Champions League',
};

const rankRewards = [
  {
    rank: 'Elite 1',
    requirements: '48+ points',
    rewards: [
      { type: 'coins', amount: '100,000' },
      { type: 'player', description: '95+ OVR Player Pick' }
    ]
  },
  {
    rank: 'Elite 2',
    requirements: '42-47 points',
    rewards: [
      { type: 'coins', amount: '75,000' },
      { type: 'player', description: '91+ OVR Player Pick' }
    ]
  },
  {
    rank: 'Gold 1',
    requirements: '36-41 points',
    rewards: [
      { type: 'coins', amount: '50,000' },
      { type: 'player', description: '88+ OVR Player Pick' }
    ]
  },
  {
    rank: 'Gold 2',
    requirements: '30-35 points',
    rewards: [
      { type: 'coins', amount: '30,000' },
      { type: 'player', description: '86+ OVR Player Pick' }
    ],
    current: true
  },
  {
    rank: 'Silver 1',
    requirements: '24-29 points',
    rewards: [
      { type: 'coins', amount: '20,000' },
      { type: 'player', description: '84+ OVR Player Pick' }
    ]
  }
];

const Tournaments = () => {
  // Data for pie chart component
  const matchesBreakdown = [
    { name: 'Won', value: currentTournament.matches.won, color: '#10B981' },
    { name: 'Drawn', value: currentTournament.matches.drawn, color: '#F59E0B' },
    { name: 'Lost', value: currentTournament.matches.lost, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Tournaments</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tournament Progress Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>{currentTournament.name}</span>
                  <span className="ml-auto text-sm bg-green-100 text-green-800 py-1 px-2 rounded-full">
                    In Progress
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Progress Chart */}
                  <div className="flex flex-col items-center justify-center">
                    <CircularProgressChart
                      percentage={currentTournament.progress}
                      size={150}
                      strokeWidth={10}
                      color="#3B82F6"
                      value={`${currentTournament.progress}%`}
                    />
                    <div className="mt-2 text-sm text-gray-500">Tournament Progress</div>
                  </div>

                  {/* Matches Summary */}
                  <div>
                    <h3 className="font-semibold mb-3">Matches</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Played:</span>
                        <span className="font-medium">{currentTournament.matches.played}/{currentTournament.matches.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Won:</span>
                        <span className="font-medium text-green-600">{currentTournament.matches.won}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Drawn:</span>
                        <span className="font-medium text-amber-600">{currentTournament.matches.drawn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lost:</span>
                        <span className="font-medium text-red-600">{currentTournament.matches.lost}</span>
                      </div>
                    </div>
                  </div>

                  {/* Points & Rank */}
                  <div>
                    <h3 className="font-semibold mb-3">Points & Rank</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Points:</span>
                        <span className="font-medium">{currentTournament.points}/{currentTournament.maxPoints}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Rank:</span>
                        <span className="font-medium flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          {currentTournament.rankDescription}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Position:</span>
                        <span className="font-medium">{currentTournament.rank}nd</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Qualification:</span>
                        <span className="font-medium text-blue-600">{currentTournament.qualification}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Next Match</h3>
                  <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <img 
                          src="https://media.api-sports.io/football/teams/40.png" 
                          alt="Liverpool" 
                          className="w-8 h-8"
                        />
                      </div>
                      <div>
                        <div className="font-medium">Liverpool FC</div>
                        <div className="text-sm text-gray-500">Away</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Tomorrow, 19:30</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                      <span>Prepare</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Chart */}
          <div>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle>Results Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartComponent 
                  data={matchesBreakdown}
                  height={250}
                  innerRadius={60}
                  outerRadius={100}
                />
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Win Rate:</span>
                    <span className="font-medium">{Math.round((currentTournament.matches.won / currentTournament.matches.played) * 100)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Points per Match:</span>
                    <span className="font-medium">{(currentTournament.points / currentTournament.matches.played).toFixed(1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Tournament Rewards</h2>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>Rank Rewards</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {rankRewards.map((rank) => (
                  <div 
                    key={rank.rank} 
                    className={`p-4 rounded-lg border-2 ${
                      rank.current ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{rank.rank}</h3>
                      {rank.current && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-3">{rank.requirements}</div>
                    <div className="space-y-2">
                      {rank.rewards.map((reward, i) => (
                        <div key={i} className="text-sm">
                          <div className="font-medium">
                            {reward.type === 'coins' ? `${reward.amount} Coins` : reward.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
