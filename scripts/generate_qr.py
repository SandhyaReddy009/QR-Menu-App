import os
import qrcode
from urllib.parse import urlparse

def generate_qr_code(url, output_path="qr_code.png"):
    """
    Generate a QR code for the given URL and save it to the specified path.
    
    Args:
        url (str): The URL to encode in the QR code
        output_path (str): The path where the QR code image will be saved
    """
    # Validate URL
    parsed_url = urlparse(url)
    if not parsed_url.scheme or not parsed_url.netloc:
        print("Error: Invalid URL. Please provide a complete URL including http:// or https://")
        return False
    
    # Create QR code instance
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    
    # Add data to the QR code
    qr.add_data(url)
    qr.make(fit=True)
    
    # Create an image from the QR code
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Save the image
    img.save(output_path)
    print(f"QR code generated successfully and saved to {output_path}")
    return True

if __name__ == "__main__":
    # Get the URL from user input
    print("Restaurant QR Menu Generator")
    print("===========================")
    
    # Default to localhost:5173/menu if running locally
    default_url = "http://localhost:5173/menu"
    
    url_input = input(f"Enter the URL for your menu page (default: {default_url}): ")
    url = url_input if url_input.strip() else default_url
    
    # Get the output path
    output_path = input("Enter the output path for the QR code image (default: restaurant_menu_qr.png): ")
    output_path = output_path if output_path.strip() else "restaurant_menu_qr.png"
    
    # Generate the QR code
    if generate_qr_code(url, output_path):
        print("\nNext steps:")
        print("1. Print the QR code or display it digitally")
        print("2. Customers can scan the QR code to view your menu")
        print("3. Make sure your web server is running when customers scan the code")