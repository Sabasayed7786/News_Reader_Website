import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NewsGrid from "../NewsGrid/NewsGrid";
import { NEWS_API_URL } from "../../config/apiConfig";
import { auth } from "../../firebase";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";

function Home(props) {
  const [newsData, setNewsData] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(NEWS_API_URL);
      setNewsData(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    // Fetch news from the API here
    fetchNews();
  }, []);

  const handleFavoriteToggle = (article) => {
  
    // just toggle the 'favorite' property of the article
    setNewsData((prevNewsData) =>
      prevNewsData.map((item) =>
        item === article ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // The user has been successfully signed out
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className={styles.maincontainer}>
      <div>
        {props.name ? (
          <>
          <div style={{position: "sticky", top: "0", zIndex: "100"}}>
          <nav className={styles.navbar} >
            <span style={{ marginRight: "1100px", fontSize:"large"}}>Welcome - {props.name}</span>
            <button onClick={handleLogout} className={styles.logout}>Logout</button>
            <br />
            <br />
            </nav>
            
            </div>
            <section >
            <h1 >Welcome to News Reader </h1>
            <h1>Top headlines from TechCrunch</h1>
            
            
            </section>
            <br />
            <br />
            
            <NewsGrid
              newsData={newsData}
              onFavoriteToggle={handleFavoriteToggle}
            />
            
          </>
          
        ) : (
          <>
            <div className={styles.homecontainer}>
              <div className={styles.homeinnerBox}>
                <h2 className={styles.login}>
                  <Link
                    to="/login"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </h2>
                <br />
                <h2 className={styles.signup}>
                  <Link
                    to="/signup"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Signup
                  </Link>
                </h2>
              </div>
            </div>
          </>
        )}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
