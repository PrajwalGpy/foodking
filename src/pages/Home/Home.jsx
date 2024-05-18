import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate hook to navigate to new pages
  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <div style={styles.content}>
        <div style={styles.text}>
          <h1>Welcome to Our Website</h1>
          <p>Some random text here...</p>
        </div>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={() => navigate("/login")}>
            Login
          </button>
          <button style={styles.button} onClick={() => navigate("/signin")}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://www.bing.com/images/search?view=detailV2&ccid=9QcHmZNo&id=491B88BC8A1F233062D77F76A52E6311275B75F4&thid=OIP.9QcHmZNop36mp8RxX1LZdQHaFG&mediaurl=https%3a%2f%2fwww.sailingeurope.com%2fblog%2fwp-content%2fuploads%2f2019%2f01%2fGyro.jpg&exph=689&expw=1000&q=food&simid=608007734511610574&FORM=IRPRST&ck=023D319B50215817F6442A086A54D002&selectedIndex=11&itb=0')",
    backgroundSize: "cover",
    filter: "blur(5px)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    maxWidth: 1200,
    padding: 20,
  },
  text: {
    flex: 1,
  },
  buttons: {
    display: "flex",
    gap: 10,
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};

export default Home;
