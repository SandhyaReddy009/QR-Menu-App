import React from 'react';
import { ArrowLeft, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link to="/" className="p-2 rounded-full hover:bg-amber-700 transition-colors">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-2xl font-bold">Delicious Bites</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center space-x-1">
                <Phone size={16} />
                <span className="text-sm">Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
<div
  className="h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/photo-1517248135467-4c7edcad34c4.avif')" }}
></div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Delicious Bites Restaurant</h2>
                <p className="text-gray-600 mt-1">Authentic cuisine with a modern twist</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock size={16} className="mr-2" />
                  <span>Open: 11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>123 Tasty Street, Foodville</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Appetizers */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-amber-600 text-white p-4">
              <h3 className="text-xl font-bold">Appetizers</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Garlic Bread</h4>
                    <span className="font-medium text-amber-600">$5.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Freshly baked bread with garlic butter and herbs</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Mozzarella Sticks</h4>
                    <span className="font-medium text-amber-600">$7.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Crispy fried mozzarella served with marinara sauce</p>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Spinach Artichoke Dip</h4>
                    <span className="font-medium text-amber-600">$8.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Creamy spinach and artichoke dip with tortilla chips</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Courses */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-amber-600 text-white p-4">
              <h3 className="text-xl font-bold">Main Courses</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Grilled Salmon</h4>
                    <span className="font-medium text-amber-600">$18.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Fresh salmon fillet with lemon butter sauce and seasonal vegetables</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Chicken Alfredo</h4>
                    <span className="font-medium text-amber-600">$16.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Fettuccine pasta with grilled chicken in creamy alfredo sauce</p>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Beef Tenderloin</h4>
                    <span className="font-medium text-amber-600">$24.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">8oz beef tenderloin with mashed potatoes and roasted vegetables</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desserts */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-amber-600 text-white p-4">
              <h3 className="text-xl font-bold">Desserts</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Chocolate Lava Cake</h4>
                    <span className="font-medium text-amber-600">$7.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Warm chocolate cake with a molten center, served with vanilla ice cream</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">New York Cheesecake</h4>
                    <span className="font-medium text-amber-600">$6.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Classic cheesecake with graham cracker crust and berry compote</p>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Tiramisu</h4>
                    <span className="font-medium text-amber-600">$8.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Italian coffee-flavored dessert with layers of mascarpone and ladyfingers</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Beverages */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-amber-600 text-white p-4">
              <h3 className="text-xl font-bold">Beverages</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Soft Drinks</h4>
                    <span className="font-medium text-amber-600">$2.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Coke, Diet Coke, Sprite, Fanta</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Fresh Juices</h4>
                    <span className="font-medium text-amber-600">$4.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Orange, Apple, Pineapple, Watermelon</p>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-lg font-semibold">Coffee & Tea</h4>
                    <span className="font-medium text-amber-600">$3.99</span>
                  </div>
                  <p className="text-gray-600 mt-1">Espresso, Cappuccino, Latte, Green Tea, Black Tea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-amber-600 text-white p-4">
            <h3 className="text-xl font-bold">Special Offers</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">Family Feast</h4>
                  <span className="font-medium text-amber-600">$49.99</span>
                </div>
                <p className="text-gray-600 mt-1">2 appetizers, 4 main courses, and 2 desserts of your choice</p>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold">Happy Hour (4-6 PM)</h4>
                  <span className="font-medium text-amber-600">20% OFF</span>
                </div>
                <p className="text-gray-600 mt-1">All appetizers and beverages at discounted prices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Delicious Bites</h3>
              <p className="text-gray-400 mt-1">Serving quality food since 2010</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Twitter</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Delicious Bites Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;