
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Filter, Clock, ArrowUp } from 'lucide-react';
import { toast } from 'sonner';

// Mock auction data
const mockAuctions = [
  {
    id: '1',
    player: {
      id: '1',
      name: 'Kevin De Bruyne',
      position: 'CAM',
      rating: 91,
      image: null,
      team: {
        id: '1',
        name: 'Manchester City',
        logo: 'https://media.api-sports.io/football/teams/50.png',
      }
    },
    startPrice: 1000000,
    currentBid: 1250000,
    buyNowPrice: 2000000,
    timeRemaining: '2h 15m',
    bids: 5
  },
  {
    id: '2',
    player: {
      id: '2',
      name: 'Mohamed Salah',
      position: 'RW',
      rating: 89,
      image: null,
      team: {
        id: '2',
        name: 'Liverpool',
        logo: 'https://media.api-sports.io/football/teams/40.png',
      }
    },
    startPrice: 800000,
    currentBid: 950000,
    buyNowPrice: 1500000,
    timeRemaining: '1h 30m',
    bids: 8
  },
  {
    id: '3',
    player: {
      id: '3',
      name: 'Harry Kane',
      position: 'ST',
      rating: 90,
      image: null,
      team: {
        id: '3',
        name: 'Bayern Munich',
        logo: 'https://media.api-sports.io/football/teams/157.png',
      }
    },
    startPrice: 1200000,
    currentBid: 1200000,
    buyNowPrice: 1800000,
    timeRemaining: '4h 45m',
    bids: 0
  },
  {
    id: '4',
    player: {
      id: '4',
      name: 'Jude Bellingham',
      position: 'CM',
      rating: 86,
      image: null,
      team: {
        id: '4',
        name: 'Real Madrid',
        logo: 'https://media.api-sports.io/football/teams/541.png',
      }
    },
    startPrice: 700000,
    currentBid: 850000,
    buyNowPrice: 1300000,
    timeRemaining: '3h 20m',
    bids: 6
  }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(amount);
};

const PlayerAuctions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter auctions based on search term
  const filteredAuctions = mockAuctions.filter(auction => 
    auction.player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auction.player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auction.player.team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle bid action
  const handlePlaceBid = (auction) => {
    const bidAmount = auction.currentBid + 50000;
    toast.success('Bid placed successfully', {
      description: `You have placed a bid of ${formatCurrency(bidAmount)} for ${auction.player.name}`
    });
  };
  
  // Handle buy now action
  const handleBuyNow = (auction) => {
    toast.success('Player purchased', {
      description: `You have purchased ${auction.player.name} for ${formatCurrency(auction.buyNowPrice)}`
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Player Auctions</h1>
        
        {/* Search and filters */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search auctions..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 rounded-md border">
            <Filter className="h-4 w-4" />
          </button>
        </div>
        
        {/* Auctions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAuctions.map(auction => (
            <Card key={auction.id} className="overflow-hidden">
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-800 text-white w-8 h-8 rounded-md flex items-center justify-center font-bold">
                      {auction.player.rating}
                    </div>
                    <div>
                      <div className="text-xs font-semibold">{auction.player.position}</div>
                      <div className="flex items-center">
                        {auction.player.team.logo && (
                          <img src={auction.player.team.logo} alt="Team logo" className="w-4 h-4 mr-1" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{auction.timeRemaining}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 pt-2">
                <h3 className="font-bold mb-3">{auction.player.name}</h3>
                
                <div className="bg-gray-100 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Start price:</span>
                    <span>{formatCurrency(auction.startPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm font-medium">
                    <div className="flex items-center">
                      <span className="text-gray-600">Current bid:</span>
                      {auction.bids > 0 && (
                        <span className="ml-1 text-xs bg-blue-100 text-blue-800 px-1.5 rounded">
                          {auction.bids} bids
                        </span>
                      )}
                    </div>
                    <span>{formatCurrency(auction.currentBid)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Buy now:</span>
                    <span className="font-bold">{formatCurrency(auction.buyNowPrice)}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 p-4 pt-0">
                <button 
                  onClick={() => handlePlaceBid(auction)} 
                  className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium text-sm flex items-center justify-center"
                >
                  <ArrowUp className="w-4 h-4 mr-1" />
                  Bid
                </button>
                <button 
                  onClick={() => handleBuyNow(auction)} 
                  className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded font-medium text-sm"
                >
                  Buy Now
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerAuctions;
