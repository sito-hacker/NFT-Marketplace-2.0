import React, { useContext } from 'react'
import { ThemeContext, useTheme } from '../contexts/ThemeProvider';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='bg-background p-4 text-center text-white container text-main'>
      <h1>NFT Marketplace</h1>
      <p>Explore, collect, and trade NFTs</p>
      <nav> 
        <ul>
          <li>Home</li>
          <li>Marketplace</li>
          <li>My NFTs</li>
          <li>
            <button onClick={toggleTheme}>
              Switch to {theme === 'dark' ? 'light' : 'dark'} mode
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
