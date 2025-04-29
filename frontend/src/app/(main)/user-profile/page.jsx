'use client';
import React, { useEffect, useState } from "react";
import useWishlist from "@/context/WishlistContext";
import useCartContext from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [selectedItem, setSelectedItem] = useState("profile");
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addItemToCart } = useCartContext();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      const response = await fetch('http://localhost:5000/user/getdetails', {
        headers: {
          'x-auth-token': token
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
      } else {
        throw new Error(data.message || 'Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Failed to load user data');
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/user/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          address: userData.address
        })
      });
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
        toast.success('Profile updated successfully');
      } else {
        throw new Error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  // Fetch orders when the orders tab is selected
  useEffect(() => {
    if (selectedItem === 'orders') {
      fetchOrders();
    }
  }, [selectedItem]);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/order/getall', {
        headers: {
          'x-auth-token': token
        }
      });
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Menu items data
  const menuItems = [
    {
      id: "profile",
      label: "Profile Information",
      icon: "👤",
      content: (
        <div className="mx-4">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                className="mt-1 p-2 w-full border rounded-md" 
                value={userData?.name || ''} 
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                className="mt-1 p-2 w-full border rounded-md" 
                value={userData?.email || ''} 
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                className="mt-1 p-2 w-full border rounded-md" 
                value={userData?.phone || ''} 
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input 
                type="text" 
                className="mt-1 p-2 w-full border rounded-md" 
                value={userData?.address || ''} 
                onChange={(e) => setUserData({ ...userData, address: e.target.value })}
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
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
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Order ID: {order._id}</p>
                      <p className="text-sm text-gray-500">
                        Placed on {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm capitalize
                      ${order.status === 'success' ? 'bg-green-100 text-green-800' : 
                        order.status === 'failed' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {order.orderItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-t">
                        <div className="flex-1">
                          <p className="font-medium">Product ID: {item.productId}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">₹{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Payment Method</p>
                      <p className="font-medium capitalize">{order.paymentMethod}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-xl font-bold">₹{order.totalAmount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-6xl mb-4">📦</p>
              <p className="text-lg">You haven't placed any orders yet</p>
              <button 
                onClick={() => router.push('/browse-product')}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          )}
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
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wishlistItems.map((item, index) => (
                <div key={index} className="flex flex-col border rounded-md p-4 hover:shadow-md transition-shadow">
                  <div className="relative group cursor-pointer" onClick={() => router.push(`/view-product/${item._id}`)}>
                    <img
                      src={item.image}
                      alt={item.brandName}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </div>
                  <div className="flex-1 mt-4">
                    <h3 className="font-medium text-lg text-gray-900">{item.brandName}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.details}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-semibold text-lg text-gray-900">₹{item.pprice}</span>
                      <del className="text-sm text-gray-500">₹{item.price}</del>
                      <span className="text-sm text-green-600 font-medium">
                        {Math.round(((item.price - item.pprice) / item.price) * 100)}% OFF
                      </span>
                    </div>
                    <div className="flex mt-3 gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addItemToCart(item);
                          removeFromWishlist(item._id);
                        }}
                        className="flex-1 bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromWishlist(item._id);
                        }}
                        className="px-3 py-1.5 text-sm text-red-600 font-medium hover:text-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-6xl mb-4">❤️</p>
              <p className="text-lg text-gray-600">Your wishlist is empty</p>
              <button 
                onClick={() => router.push('/browse-product')}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Link href='/browse-product'>Browse Products</Link>
              </button>
            </div>
          )}
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
            <p className="text-base font-semibold">{userData?.name || 'ShopWise Customer'}</p>
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