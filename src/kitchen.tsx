import React, { useState, useEffect } from 'react';
import db from './db.json';

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
    <div>
      <h1>Kitchen</h1>
      <h2>Menu</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default Kitchen;
