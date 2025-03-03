import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Utensils, QrCode, Copy, ExternalLink } from 'lucide-react';



const QRGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [deploymentUrl, setDeploymentUrl] = useState('');
  
 useEffect(() => {
  // Get the current URL and replace the path with /menu
  const localIP = "30.30.17.112"; // Replace with your actual local IP
  setUrl(`http://${localIP}:3000/menu`);

  // For demonstration, we'll provide instructions for deployment
  setDeploymentUrl('https://your-restaurant-domain.com/menu');
}, []);


    
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-amber-600 p-6 text-white">
            <div className="flex items-center justify-center space-x-3">
              <Utensils size={28} />
              <h1 className="text-3xl font-bold">Restaurant QR Menu</h1>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scan this QR Code</h2>
                <p className="text-gray-600 mb-6">
                  Use your smartphone camera to scan this QR code and view our delicious menu offerings.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500 font-mono break-all">{url}</p>
                  <button 
                    onClick={copyToClipboard}
                    className="ml-2 p-2 text-gray-500 hover:text-amber-600 transition-colors"
                    title="Copy URL"
                  >
                    {copied ? <span className="text-green-500 text-xs">Copied!</span> : <Copy size={16} />}
                  </button>
                </div>
                <div className="flex items-center text-amber-600 font-medium">
                  <QrCode size={20} className="mr-2" />
                  <span>Point your camera at the QR code to view our menu</span>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="p-4 bg-white border-4 border-amber-600 rounded-lg shadow-md">
                  {url && (
                    <QRCodeSVG
                      value={url}
                      size={240}
                      bgColor={"#FFFFFF"}
                      fgColor={"#000000"}
                      level={"H"}
                      includeMargin={true}
                    />
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-amber-800 mb-2 flex items-center">
                  <ExternalLink size={18} className="mr-2" />
                  Important Note for Mobile Access:
                </h3>
                <p className="text-amber-700">
                  The QR code currently points to a local development URL which only works on this device. 
                  To make it accessible from mobile devices, you need to:
                </p>
                <ol className="list-decimal pl-5 text-amber-700 mt-2 space-y-1">
                  <li>Deploy this website to a public hosting service (Netlify, Vercel, etc.)</li>
                  <li>Update the QR code to point to your public URL</li>
                  <li>Run <code className="bg-amber-100 px-1 rounded">npm run generate-qr</code> with your public URL</li>
                </ol>
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mb-2">Instructions:</h3>
              <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                <li>Open your smartphone camera app</li>
                <li>Point it at the QR code above</li>
                <li>Tap on the notification that appears</li>
                <li>Browse our menu and place your order!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;