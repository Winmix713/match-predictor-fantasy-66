
import React, { useState } from 'react';
import { PlayerProfileCard } from '@/components/football/PlayerProfileCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, Search, Star, Users } from "lucide-react";
import { toast } from "sonner";

// Mock data for initial development
const mockPlayers = [
  {
    id: "1",
    name: "Phil Foden",
    position: "Attacking Midfielder",
    image: "/lovable-uploads/800840d2-8461-45d0-811c-1a3cbf2df949.png",
    age: 22,
    team: {
      id: "1",
      name: "Manchester City",
      logo: "https://media.api-sports.io/football/teams/50.png",
    }
  },
  {
    id: "2",
    name: "Erling Haaland",
    position: "Striker",
    image: null,
    age: 23,
    team: {
      id: "1",
      name: "Manchester City",
      logo: "https://media.api-sports.io/football/teams/50.png",
    }
  },
  {
    id: "3",
    name: "Bruno Fernandes",
    position: "Attacking Midfielder",
    image: null,
    age: 28,
    team: {
      id: "2",
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
    }
  }
];

const PlayerTransfers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(mockPlayers[0]);
  
  // Filter players based on search term
  const filteredPlayers = mockPlayers.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle player selection
  const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);
    toast.info(`${player.name} selected`, {
      description: `Viewing details for ${player.name} from ${player.team.name}`
    });
  };
  
  // Handle shortlist action
  const handleShortlist = (player) => {
    toast.success(`Added to shortlist`, {
      description: `${player.name} has been added to your shortlist`
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Player Transfers</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Players List */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Available Players</span>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
                    {filteredPlayers.length} players
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search players..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button className="p-2 rounded-md border">
                    <Filter className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {filteredPlayers.map(player => (
                    <div
                      key={player.id}
                      onClick={() => handleSelectPlayer(player)}
                      className={`p-3 rounded-lg cursor-pointer flex items-center justify-between ${
                        selectedPlayer?.id === player.id 
                          ? 'bg-blue-50 border border-blue-200' 
                          : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                          {player.image ? (
                            <img src={player.image} alt={player.name} className="h-full w-full object-cover" />
                          ) : (
                            <span className="text-white font-bold">{player.name[0]}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{player.name}</h3>
                          <div className="text-xs text-gray-500 flex items-center gap-2">
                            <span>{player.position}</span>
                            <span>•</span>
                            <span>{player.age} yrs</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShortlist(player);
                          }} 
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Star className="h-4 w-4 text-gray-400 hover:text-yellow-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Player Details */}
          <div className="lg:col-span-2">
            {selectedPlayer && (
              <div>
                <PlayerProfileCard
                  player={selectedPlayer}
                  number={7}
                  stats={{
                    rating: 8.5,
                    mainStat: 12,
                    secondaryStat: 8,
                    tertiaryStats: [
                      { value: 85, label: 'Pass accuracy' },
                      { value: 78, label: 'Shot accuracy' },
                      { value: 92, label: 'Dribbling success' }
                    ]
                  }}
                  className="mb-6"
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle>Transfer Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Market Value</div>
                        <div className="text-xl font-semibold">€75,000,000</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Weekly Wage</div>
                        <div className="text-xl font-semibold">€230,000</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Contract Until</div>
                        <div className="text-xl font-semibold">June 2026</div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-md">
                        <div className="text-sm text-gray-500">Release Clause</div>
                        <div className="text-xl font-semibold">€120,000,000</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-4">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Make Transfer Offer
                      </button>
                      <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded">
                        Add to Shortlist
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerTransfers;
