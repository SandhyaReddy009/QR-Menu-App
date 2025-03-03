# Restaurant QR Menu Generator

This project allows you to generate a QR code that links to a digital restaurant menu. When customers scan the QR code with their smartphone, they'll be directed to your beautifully designed menu page.

## Features

- QR code generator page with stylish design
- Responsive restaurant menu page
- Python script for generating downloadable QR codes

## Getting Started

### Prerequisites

- Node.js
- Python 3.x

### Installation

1. Clone the repository
2. Install JavaScript dependencies:
   ```
   npm install
   ```
3. Install Python dependencies:
   ```
   pip install qrcode pillow
   ```

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`
3. The QR code will be displayed on the page, linking to your menu

### Generating a QR Code File

To generate a QR code image file that you can print or share:

```
npm run generate-qr
```

This will run the Python script that creates a QR code image file.

## Usage

1. Start the application
2. Access the QR code generator page
3. The QR code will automatically link to your menu page
4. Customers can scan the QR code with their smartphone camera
5. They'll be directed to your digital menu

## Customization

- Edit the `Menu.tsx` file to update your restaurant's menu items, prices, and descriptions
- Modify the styling in the components to match your restaurant's branding

## Deployment

When deploying to production:

1. Build the application:
   ```
   npm run build
   ```
2. Deploy the built files to your web server
3. Update the QR code to point to your production URL
4. Generate a new QR code using the Python script with your production URL

## License

This project is licensed under the MIT License.