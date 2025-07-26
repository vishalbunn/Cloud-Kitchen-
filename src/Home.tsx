import React from 'react';
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to Orderly Meals</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        The best place to manage your cloud kitchen and for customers to order food.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link to="/kitchen">Go to Kitchen</Link>
        </Button>
        <Button asChild>
          <Link to="/customer">Go to Customer</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
