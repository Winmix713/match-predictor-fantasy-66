
import React from 'react';
import { Clock, User, Flag, Play, ArrowDownUp, AlertCircle } from 'lucide-react';
import type { Match } from '@/types/football';

/**
 * Match event types
 */
export type EventType = 'goal' | 'yellow-card' | 'red-card' | 'substitution' | 'start' | 'half-time' | 'end';

/**
 * Match event interface
 */
export interface MatchEvent {
  id: string;                // Unique identifier
  time: number;              // Event time in minutes
  type: EventType;           // Event type
  team: 'home' | 'away';     // Which team the event belongs to
  player?: string;           // Involved player
  assistedBy?: string;       // Player who provided the assist
  playerOut?: string;        // Player substituted out
  playerIn?: string;         // Player substituted in
  description?: string;      // Event description
}

/**
 * MatchTimeline component properties
 */
export interface MatchTimelineProps {
  match: Match;              // Match data
  events: MatchEvent[];      // Match events
  className?: string;        // CSS classes
}

/**
 * Match Timeline component
 * 
 * Displays a football match events in chronological order
 */
export const MatchTimeline: React.FC<MatchTimelineProps> = ({ 
  match, 
  events, 
  className = ''
}) => {
  // Sort events by time
  const sortedEvents = React.useMemo(() => 
    [...events].sort((a, b) => a.time - b.time), 
    [events]
  );

  return (
    <section 
      className={`bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 p-6 shadow-lg ${className}`}
      aria-labelledby="match-timeline-heading"
    >
      <h3 id="match-timeline-heading" className="text-xl font-semibold text-white mb-4">Match Timeline</h3>
      
      {/* Match result header */}
      <MatchHeader match={match} />
      
      {/* Timeline events */}
      <div className="relative mt-8">
        <div 
          className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700 z-0" 
          role="presentation"
          aria-hidden="true"
        ></div>
        <ul className="space-y-6 list-none" role="list" aria-label="Match events">
          {sortedEvents.map((event) => (
            <TimelineEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </section>
  );
};

/**
 * Match header component
 */
const MatchHeader: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="flex items-center gap-4 mb-6 justify-center">
      <TeamDisplay 
        logo={match.homeTeam.logo} 
        name={match.homeTeam.name} 
        teamType="home"
      />
      
      <ScoreDisplay 
        homeScore={match.homeScore} 
        awayScore={match.awayScore} 
        homeTeam={match.homeTeam.name}
        awayTeam={match.awayTeam.name}
      />
      
      <TeamDisplay 
        logo={match.awayTeam.logo} 
        name={match.awayTeam.name}
        teamType="away" 
      />
    </div>
  );
};

/**
 * Team display component
 */
const TeamDisplay: React.FC<{ 
  logo?: string; 
  name: string;
  teamType: 'home' | 'away';
}> = ({ logo, name, teamType }) => {
  return (
    <div className="flex items-center" aria-label={`${teamType === 'home' ? 'Home' : 'Away'} team: ${name}`}>
      {logo && (
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-10 h-10 object-contain mr-2"
          loading="lazy"
        />
      )}
      <span className="text-white font-medium">{name}</span>
    </div>
  );
};

/**
 * Score display component
 */
const ScoreDisplay: React.FC<{ 
  homeScore?: number; 
  awayScore?: number;
  homeTeam: string;
  awayTeam: string;
}> = ({ 
  homeScore, 
  awayScore,
  homeTeam,
  awayTeam
}) => {
  const scoreText = `${homeScore !== undefined ? homeScore : '?'} - ${awayScore !== undefined ? awayScore : '?'}`;
  
  return (
    <div 
      className="px-4 py-2 bg-black/30 rounded-lg text-center mx-2 min-w-[80px]"
      aria-label={`Score: ${homeTeam} ${scoreText} ${awayTeam}`}
    >
      <span className="text-white font-bold text-lg">
        {scoreText}
      </span>
    </div>
  );
};

/**
 * Timeline event component
 */
const TimelineEvent: React.FC<{ event: MatchEvent }> = ({ event }) => {
  const teamSide = event.team === 'home' ? 'Home team' : 'Away team';
  const eventLabel = getEventTypeLabel(event.type);
  
  return (
    <li className="relative flex items-start pl-12 animate-fade-in" role="listitem">
      <div className="absolute left-0 top-0 z-10">
        <EventIcon event={event} />
      </div>
      <div className="min-w-[40px] mr-4 font-mono">
        <time dateTime={`PT${event.time}M`} className="text-gray-400">
          {event.time}'
        </time>
      </div>
      <div className="flex-1 bg-black/30 rounded-lg p-3 transform transition-all hover:translate-x-1 hover:bg-black/40">
        <EventContent event={event} teamSide={teamSide} eventLabel={eventLabel} />
      </div>
    </li>
  );
};

// Helper function to get readable event type labels
const getEventTypeLabel = (type: EventType): string => {
  switch (type) {
    case 'goal': return 'Goal';
    case 'yellow-card': return 'Yellow Card';
    case 'red-card': return 'Red Card';
    case 'substitution': return 'Substitution';
    case 'start': return 'Match Start';
    case 'half-time': return 'Half Time';
    case 'end': return 'Match End';
    default: return 'Event';
  }
};

/**
 * Event icon component
 */
const EventIcon: React.FC<{ event: MatchEvent }> = ({ event }) => {
  const eventLabel = getEventTypeLabel(event.type);
  
  switch (event.type) {
    case 'goal':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <span className="text-white text-sm">⚽</span>
        </div>
      );
    case 'yellow-card':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <div className="w-4 h-6 bg-yellow-400"></div>
        </div>
      );
    case 'red-card':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <div className="w-4 h-6 bg-red-600"></div>
        </div>
      );
    case 'substitution':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <ArrowDownUp className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      );
    case 'start':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <Play className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      );
    case 'half-time':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <Clock className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      );
    case 'end':
      return (
        <div 
          className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center"
          aria-label={eventLabel}
        >
          <Flag className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      );
    default:
      return (
        <div 
          className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center"
          aria-label="Other event"
        >
          <AlertCircle className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      );
  }
};

/**
 * Event content component
 */
const EventContent: React.FC<{ 
  event: MatchEvent;
  teamSide: string;
  eventLabel: string;
}> = ({ 
  event, 
  teamSide,
  eventLabel 
}) => {
  switch (event.type) {
    case 'goal':
      return (
        <div className="flex flex-col">
          <div className="flex items-center gap-2" aria-label={`${teamSide} Goal by ${event.player}`}>
            <span className="text-green-400 font-medium">⚽ GOAL!</span>
            <span className="text-white">{event.player}</span>
          </div>
          {event.assistedBy && (
            <span className="text-gray-400 text-sm" aria-label={`Assisted by ${event.assistedBy}`}>
              Assisted by {event.assistedBy}
            </span>
          )}
          {event.description && (
            <p className="text-gray-400 text-sm mt-1">{event.description}</p>
          )}
        </div>
      );
    case 'yellow-card':
      return (
        <div>
          <div className="flex items-center gap-2" aria-label={`${teamSide} Yellow Card for ${event.player}`}>
            <span className="text-yellow-400 font-medium">Yellow Card</span>
            <span className="text-white">{event.player}</span>
          </div>
          {event.description && (
            <p className="text-gray-400 text-sm mt-1">{event.description}</p>
          )}
        </div>
      );
    case 'red-card':
      return (
        <div>
          <div className="flex items-center gap-2" aria-label={`${teamSide} Red Card for ${event.player}`}>
            <span className="text-red-500 font-medium">Red Card</span>
            <span className="text-white">{event.player}</span>
          </div>
          {event.description && (
            <p className="text-gray-400 text-sm mt-1">{event.description}</p>
          )}
        </div>
      );
    case 'substitution':
      return (
        <div aria-label={`${teamSide} Substitution: ${event.playerOut} out, ${event.playerIn} in`}>
          <span className="text-blue-400 font-medium">Substitution</span>
          <div className="flex items-center gap-1 text-sm mt-1">
            <span className="text-red-400">↑ {event.playerOut}</span>
            <span className="text-white mx-1">→</span>
            <span className="text-green-400">↓ {event.playerIn}</span>
          </div>
        </div>
      );
    case 'start':
    case 'half-time':
    case 'end':
      return (
        <div aria-label={`${eventLabel}: ${event.description || ''}`}>
          <span className="text-gray-300 font-medium">
            {event.type === 'start' ? 'Match Started' : 
             event.type === 'half-time' ? 'Half Time' : 'Match Ended'}
          </span>
          {event.description && (
            <p className="text-gray-400 text-sm mt-1">{event.description}</p>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default MatchTimeline;
