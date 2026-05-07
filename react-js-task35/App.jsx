import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// App.jsx

import Button from './button'
import Layout from './layout'
import Footer from './Footer'
import UserCard from './Usecardr'

function App() {

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (

    <Layout>

      <h2>Welcome to React Components</h2>

      <UserCard name="Sadham" age="21" />

      <UserCard name="John" age="25" />

      <Button
        label="Click Me"
        onClick={handleClick}
      />

    </Layout>

  );
}

export default App;
