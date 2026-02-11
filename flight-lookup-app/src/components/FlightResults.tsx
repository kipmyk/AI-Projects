'use client';

import React, { useState } from 'react';
import SearchForm from './SearchForm';
import FlightCard from './FlightCard';
import { Flight, searchFlights } from '../lib/flightData';

const FlightResults: React.FC = () => {
    const [results, setResults] = useState<Flight[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (query: string) => {
        const flights = searchFlights(query);
        setResults(flights);
        setHasSearched(true);
    };

    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <SearchForm onSearch={handleSearch} />

            <div style={{ minHeight: '200px' }}>
                {results.length > 0 ? (
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', opacity: 0.8 }}>
                            Found {results.length} flight{results.length > 1 ? 's' : ''}
                        </h2>
                        {results.map((flight) => (
                            <FlightCard key={flight.id} flight={flight} />
                        ))}
                    </div>
                ) : hasSearched ? (
                    <div className="glass animate-fade-in" style={{
                        padding: '3rem',
                        borderRadius: '20px',
                        textAlign: 'center',
                        opacity: 0.8
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                        <p style={{ fontSize: '1.2rem' }}>No flights found matching your search.</p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6, marginTop: '0.5rem' }}>
                            Try searching for AA123, BA456, or DL789.
                        </p>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', opacity: 0.4, marginTop: '4rem' }}>
                        <p>Enter a flight number above to get started</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlightResults;
