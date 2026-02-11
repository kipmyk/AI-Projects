'use client';

import React, { useState } from 'react';

interface SearchFormProps {
    onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
        }}>
            <input
                type="text"
                placeholder="Enter flight number (e.g., AA123)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ flex: 1 }}
            />
            <button type="submit">Search Flight</button>
        </form>
    );
};

export default SearchForm;
