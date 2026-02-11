import React from 'react';
import { Flight } from '../lib/flightData';

interface FlightCardProps {
    flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'On Time': return '#10b981';
            case 'Delayed': return '#f59e0b';
            case 'Cancelled': return '#ef4444';
            default: return '#9ca3af';
        }
    };

    return (
        <div className="glass animate-fade-in" style={{
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>{flight.flightNumber}</h3>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{flight.airline}</p>
                </div>
                <div style={{
                    background: getStatusColor(flight.status) + '20',
                    color: getStatusColor(flight.status),
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    border: `1px solid ${getStatusColor(flight.status)}40`
                }}>
                    {flight.status}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '800' }}>{formatDate(flight.departureTime)}</div>
                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{flight.origin.airport}</div>
                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>{flight.origin.city} ({flight.origin.timezone})</div>
                </div>

                <div style={{ flex: 1, position: 'relative', height: '2px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        fontSize: '1.5rem',
                        position: 'absolute',
                        transform: 'rotate(90deg)',
                        opacity: 0.5
                    }}>✈️</div>
                </div>

                <div style={{ flex: 1, textAlign: 'right' }}>
                    <div style={{ fontSize: '2rem', fontWeight: '800' }}>{formatDate(flight.arrivalTime)}</div>
                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{flight.destination.airport}</div>
                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>{flight.destination.city} ({flight.destination.timezone})</div>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
