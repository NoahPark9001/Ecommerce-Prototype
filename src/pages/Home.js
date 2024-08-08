// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { supabase } from '../supabase';
import Footer from '../components/Footer';
import CategoryInfo from '../components/categoryInfo';

function Home({ user, onLogout }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      let { data: items, error } = await supabase
        .from('items')
        .select('*');
      if (error) console.error('Error fetching items:', error);
      else setItems(items);
    };

    fetchItems();
  }, []);

  const addItem = async () => {
    if (newItem.trim()) {
      let { data, error } = await supabase
        .from('items')
        .insert([{ name: newItem }]);
      if (error) console.error('Error adding item:', error);
      else {
        setNewItem('');
        setItems([...items, ...data]);
      }
    }
  };

  const deleteItem = async (id) => {
    let { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);
    if (error) console.error('Error deleting item:', error);
    else setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <Header user={user} onLogout={onLogout} />
      <Banner />
      <div className="container mx-auto mt-8">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          className="border p-2 rounded mr-2"
        />
        <button onClick={addItem} className="bg-blue-600 text-white px-4 py-2 rounded">Add Item</button>
        <ul className="mt-4">
          {items.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              {item.name}
              <button onClick={() => deleteItem(item.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
        
        <section className='space-x-11 bg-white px-20 py-5'>
                <h1 className='text-black font-bold text-2xl mb-4'>Category</h1>
                <CategoryInfo/>
        </section>
       
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
