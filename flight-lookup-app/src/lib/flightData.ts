export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: {
    city: string;
    airport: string;
    timezone: string;
  };
  destination: {
    city: string;
    airport: string;
    timezone: string;
  };
  departureTime: string;
  arrivalTime: string;
  status: 'On Time' | 'Delayed' | 'Cancelled';
}

export const mockFlights: Flight[] = [
  {
    id: '1',
    flightNumber: 'AA123',
    airline: 'American Airlines',
    origin: { city: 'New York', airport: 'JFK', timezone: 'EST' },
    destination: { city: 'London', airport: 'LHR', timezone: 'GMT' },
    departureTime: '2026-02-12T08:00:00',
    arrivalTime: '2026-02-12T20:00:00',
    status: 'On Time',
  },
  {
    id: '2',
    flightNumber: 'BA456',
    airline: 'British Airways',
    origin: { city: 'London', airport: 'LHR', timezone: 'GMT' },
    destination: { city: 'Paris', airport: 'CDG', timezone: 'CET' },
    departureTime: '2026-02-12T10:00:00',
    arrivalTime: '2026-02-12T12:15:00',
    status: 'On Time',
  },
  {
    id: '3',
    flightNumber: 'DL789',
    airline: 'Delta Airlines',
    origin: { city: 'Atlanta', airport: 'ATL', timezone: 'EST' },
    destination: { city: 'Tokyo', airport: 'HND', timezone: 'JST' },
    departureTime: '2026-02-12T14:30:00',
    arrivalTime: '2026-02-13T18:00:00',
    status: 'Delayed',
  },
  {
    id: '4',
    flightNumber: 'AF101',
    airline: 'Air France',
    origin: { city: 'Paris', airport: 'CDG', timezone: 'CET' },
    destination: { city: 'New York', airport: 'JFK', timezone: 'EST' },
    departureTime: '2026-02-12T16:00:00',
    arrivalTime: '2026-02-12T19:30:00',
    status: 'On Time',
  },
  {
    id: '5',
    flightNumber: 'EK202',
    airline: 'Emirates',
    origin: { city: 'Dubai', airport: 'DXB', timezone: 'GST' },
    destination: { city: 'Sydney', airport: 'SYD', timezone: 'AEDT' },
    departureTime: '2026-02-12T22:00:00',
    arrivalTime: '2026-02-13T19:00:00',
    status: 'On Time',
  },
];

export const searchFlights = (query: string): Flight[] => {
  const normalizedQuery = query.trim().toUpperCase();
  if (!normalizedQuery) return [];
  return mockFlights.filter((flight) =>
    flight.flightNumber.toUpperCase().includes(normalizedQuery)
  );
};
