import React, { useState, useEffect } from 'react';
import db from './db.json';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

const Kitchen = () => {
  const [menu, setMenu] = useState(db.menu);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      const newId = menu.length > 0 ? Math.max(...menu.map(item => item.id)) + 1 : 1;
      const updatedMenu = [...menu, { ...newItem, id: newId, price: Number(newItem.price) }];
      setMenu(updatedMenu);
      setNewItem({ name: '', price: '' });
      // Here you would typically also update the db.json file
      // but for this example, we'll just update the state.
    }
  };

  const handleDeleteItem = (id) => {
    const updatedMenu = menu.filter(item => item.id !== id);
    setMenu(updatedMenu);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kitchen</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {menu.map(item => (
                  <li key={item.id} className="flex justify-between items-center mb-2">
                    <span>{item.name} - ${item.price}</span>
                    <Button variant="destructive" onClick={() => handleDeleteItem(item.id)}>Delete</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  />
                </div>
                <Button onClick={handleAddItem}>Add</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
