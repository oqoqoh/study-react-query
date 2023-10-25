import React from 'react';
import './App.css';
import MainProducts from './components/MainProducts';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <MainProducts />
        </QueryClientProvider>
    );
}
