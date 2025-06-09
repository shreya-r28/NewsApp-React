
# 📰 React News App

A modern news application built with React that fetches real-time articles from the NewsAPI based on search queries.

---

## 🚀 Features

- 🔍 Search news articles by keyword  
- 📰 Beautifully styled news cards with title, source, time, and description  
- 📡 Fetches live data from [NewsAPI.org](https://newsapi.org/)  
- 📱 Responsive design with Flexbox  
- 🔒 Environment-based API key protection  

---

## 🛠️ Tech Stack

- React (Functional Components + Hooks)  
- CSS (Custom styling using Flexbox)  
- NewsAPI for fetching news content  

---

## 🖥️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-news-app.git
cd react-news-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get Your API Key

- Go to [https://newsapi.org/](https://newsapi.org/) and sign up for a free account.
- Create an API key.

### 4. Setup Environment Variable

- Create a `.env` file in the root folder of the project and add your key like this:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

> ⚠️ **Important:** Make sure to restart your development server after adding or modifying the `.env` file.

### 5. Run the App

```bash
npm start
```

The app will run on `http://localhost:3000` by default.

---

## 📝 Usage

- Enter a keyword or topic in the search bar to fetch the latest news articles.  
- Click on a news card to read the full article on the original source website.  

---

## 📁 Project Structure

```
react-news-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   └── NewsCard.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── .env
├── package.json
└── README.md
```

---


Enjoy staying updated with the latest news! 📰🚀
