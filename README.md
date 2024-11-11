# Weather Now 🌦️

Weather Now is a simple, user-friendly weather application that allows users to view real-time weather details by entering the name of any city. It fetches data from a weather API, providing an easy way to check current conditions, temperature, and more.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [API Reference](#api-reference)

---

## ✨ Features

- **Real-time Weather Updates**: Get current weather details by city name.
- **Responsive Design**: Works seamlessly across devices.
- **Detailed Information**: Provides temperature, humidity, wind speed, and weather description.

## 🚀 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AdityaNair07/weather-now.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-now
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Add your API key:
   - Sign up for a weather API provider (<https://www.weatherapi.com/docs/>).
   - Create a `.env` file in the root directory and add your API key:

      ```plaintext
      VITE_API_KEY=your_api_key_here
      ```

## 📖 Usage

1. Start the development server:

   ```bash
   npm run dev

## 🛠️ Technologies Used

- Frontend: React.js, HTML, CSS
- Weather API: OpenWeatherMap API
- State Management: React Hooks (useState, useEffect)

## 🌐 API Reference

- Base URL: <https://api.weatherapi.com/v1/current.json>

- Parameters:
  - q: City name
  - key: Your API key

Example Request:

    https://api.weatherapi.com/v1/current.json?q=London&key=your_api_key 
