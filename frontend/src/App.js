import React, { useState, useEffect } from 'react';
import Layout from './components/layouts/Layout';


function App() {
    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Online Book Store</h1>
                <p className="text-gray-700">Explore our collection of books and find your next read!</p>
            </div>
        </Layout>
    );
}

export default App;
