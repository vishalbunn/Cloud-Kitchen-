import React, { useState, useEffect } from 'react';
import db from './db.json';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

const Customer = () => {
  const [menu, setMenu] = useState(db.menu);

  const handlePayment = (amount) => {
    const options = {
      key: 'YOUR_KEY_ID', // Enter the Key ID generated from the Dashboard
      amount: amount * 100,
      currency: 'INR',
      name: 'Orderly Meals',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo.jpg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Customer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menu.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">${item.price}</p>
              <Button onClick={() => handlePayment(item.price)}>Pay with Razorpay</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Customer;
