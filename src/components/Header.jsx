import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleViewProfile = () => {
    // TODO: Navigate to profile page
    console.log('View profile clicked');
  };

  const handleCreateDictionary = () => {
    // TODO: Navigate to create dictionary page
    console.log('Create dictionary clicked');
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>Word Imposter</h1>
        </div>

        <div style={styles.userSection}>
          {user && <span style={styles.username}>Welcome, {user.username}!</span>}
          
          <button 
            onClick={handleViewProfile}
            style={{...styles.button, ...styles.buttonSecondary}}
            title="View your profile"
          >
            Profile
          </button>

          <button 
            onClick={handleCreateDictionary}
            style={{...styles.button, ...styles.buttonSecondary}}
            title="Create a custom dictionary"
          >
            Dictionary
          </button>

          <button 
            onClick={handleLogout}
            style={{...styles.button, ...styles.buttonDanger}}
            title="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#667eea',
    padding: '16px 20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '30px',
    width: '100%',
    boxSizing: 'border-box'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px'
  },
  titleSection: {
    flex: 1
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  username: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500'
  },
  button: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap'
  },
  buttonSecondary: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white'
  },
  buttonSecondaryHover: {
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  buttonDanger: {
    backgroundColor: '#dc3545',
    color: 'white'
  },
  buttonDangerHover: {
    backgroundColor: '#c82333'
  }
};
