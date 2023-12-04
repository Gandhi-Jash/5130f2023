<template>
    <div>
      <nav>
        <div class="logo">Student Aid</div>
        <div class="nav-items">          
          <router-link to="/AboutUs">About</router-link>
          <router-link to="/ContactUs">Contact</router-link>
        </div>
      </nav>
  
      <router-view></router-view>
  
      <section class="hero">
        <div class="hero-container">
          <div class="column-left">
            <h1>Unified Learning Hub</h1>
            <p>"one website for all your student<br>needs"</p>
            <div class="button-container">
              <router-link to="/StudentDeals" class="button">Student deals</router-link>
              <router-link to="/MyCalendar" class="button">Calendar</router-link>
              <router-link to="/ExpenseManagement" class="button">Expenses</router-link>
            </div>
          </div>
          <div class="column-right">
            <img src="@/assets/homepage.svg" alt="illustration" class="hero-image" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  nav {
    height: 80px;
    background: #fdcc04;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem calc((100vw - 1300px) / 2);
  }
  
  .logo {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;    
    padding: 0 2rem;
  }
  
  nav a {
    text-decoration: none;
    color: #000;
    padding: 0 1.5rem;
  }
  
  nav a:hover {
    color: #fff;
  }
  
  .hero {
    background: #fdcc04;
  }
  
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 95vh;
    padding: 3rem calc((100vw - 1300px) / 2);
  }
  
  .column-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #000;
    padding: 0rem 2rem;
  }
  
  .column-left h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  
  .column-left p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  
  .button-container a {
    display: inline-block;
    padding: 1rem 3rem;
    font-size: 1rem;
    text-decoration: none;
    color: #fdcc04;
    background: #000;
    cursor: pointer;
    border-radius: 50px;
    display: inline-block;
  }
  
  .button-container a:hover {
    background: #fff;
    color: #000;
  }
  
  .column-right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
  }
  
  .hero-image {
    width: 100%;
    height: 100%;
  }
  </style>
  