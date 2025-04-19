'use client';
import React, { useState } from "react";

const UserProfile = () => {
  const [selectedItem, setSelectedItem] = useState("profile");
  
  // Menu items data
  const menuItems = [
    {
      id: "profile",
      label: "Profile Information",
      icon: "👤",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-md" defaultValue="ShopWise Customer" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="mt-1 p-2 w-full border rounded-md" defaultValue="customer@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" className="mt-1 p-2 w-full border rounded-md" defaultValue="+1 (555) 123-4567" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      )
    },
    {
      id: "addresses",
      label: "Manage Addresses",
      icon: "🏠",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">Manage Addresses</h2>
          <div className="mb-4 p-4 border rounded-md">
            <div className="flex justify-between">
              <span className="font-medium">Home</span>
              <div>
                <button className="text-blue-600 mr-2">Edit</button>
                <button className="text-red-600">Delete</button>
              </div>
            </div>
            <p className="text-gray-600 mt-2">
              123 Main Street, Apt 4B<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>
          <button className="flex items-center text-blue-600">
            <span className="mr-1">+</span> Add New Address
          </button>
        </div>
      )
    },
    {
      id: "cards",
      label: "Saved Cards",
      icon: "💳",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">Saved Cards</h2>
          <div className="mb-4 p-4 border rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="flex justify-between mb-8">
              <span className="font-medium">VISA</span>
              <span>**** **** **** 4321</span>
            </div>
            <div className="flex justify-between">
              <span>Card Holder</span>
              <span>Expires: 05/26</span>
            </div>
          </div>
          <button className="flex items-center text-blue-600">
            <span className="mr-1">+</span> Add New Card
          </button>
        </div>
      )
    },
    {
      id: "orders",
      label: "My Orders",
      icon: "📦",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">My Orders</h2>
          <div className="text-center py-8 text-gray-500">
            <p className="text-6xl mb-4">📦</p>
            <p className="text-lg">You haven't placed any orders yet</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Start Shopping
            </button>
          </div>
        </div>
      )
    },
    {
      id: "reviews",
      label: "My Reviews & Ratings",
      icon: "⭐",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">My Reviews & Ratings</h2>
          <div className="border rounded-md divide-y">
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Wireless Headphones</h3>
                <div className="flex text-yellow-500">
                  {"★★★★☆"}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">Purchased on March 15, 2025</p>
              <p>Great sound quality and comfortable for long listening sessions. Battery life could be better though.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Smart Watch</h3>
                <div className="flex text-yellow-500">
                  {"★★★★★"}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">Purchased on February 22, 2025</p>
              <p>Excellent product! The fitness tracking features are accurate and the battery lasts for days.</p>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500">
            <button className="text-blue-600 hover:underline">
              View All Reviews
            </button>
          </div>
        </div>
      )
    },
    {
      id: "wishlist",
      label: "My Wishlist",
      icon: "❤️",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">My Wishlist</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex border rounded-md p-2">
              <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
              <div className="flex-1">
                <h3 className="font-medium">Product Name</h3>
                <p className="text-blue-600">$99.99</p>
                <div className="flex mt-2">
                  <button className="text-sm bg-blue-600 text-white px-2 py-1 rounded mr-2">Add to Cart</button>
                  <button className="text-sm text-red-600">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="flex items-center gap-3 p-4 mx-2 border-b">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-xl font-bold">
            😊
          </div>
          <div>
            <p className="text-gray-600 text-xs">Hello,</p>
            <p className="text-base font-semibold">ShopWise Customer</p>
          </div>
        </div>

        <nav className="mt-6 px-2">
          <p className="text-xs font-medium text-gray-500 mb-2 px-2">ACCOUNT SETTINGS</p>
          {menuItems.slice(0, 2).map(item => (
            <MenuItem 
              key={item.id}
              label={item.label}
              icon={item.icon}
              isActive={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
            />
          ))}
          
          <p className="text-xs font-medium text-gray-500 mt-4 mb-2 px-2">PAYMENTS</p>
          {menuItems.slice(2, 3).map(item => (
            <MenuItem 
              key={item.id}
              label={item.label}
              icon={item.icon}
              isActive={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
            />
          ))}
          
          <p className="text-xs font-medium text-gray-500 mt-4 mb-2 px-2">MY STUFF</p>
          {menuItems.slice(3, 6).map(item => (
            <MenuItem 
              key={item.id}
              label={item.label}
              icon={item.icon}
              isActive={selectedItem === item.id}
              onClick={() => setSelectedItem(item.id)}
            />
          ))}
          
          <hr className="my-4 mx-2 border-gray-200" />
          
          <button className="flex items-center w-full p-2 mb-1 rounded-md text-red-500 hover:bg-red-50">
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Detail View */}
      <div className="flex-1 p-6 bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm min-h-full p-4">
          {menuItems.find(item => item.id === selectedItem)?.content}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full p-2 mb-1 rounded-md ${
        isActive 
          ? "bg-blue-50 text-blue-600 font-medium" 
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default UserProfile;