import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import Restaurent from '../images/restaurent.jpg'
import '../styles/HomeStyle.css';
const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Restaurent})`}}>
          <div className="headerContainer">
            <h1>Restaurent Website</h1>
            <p>Best Food In Delhi</p>
            <Link to="/menu">
            <button>
              ORDER NOW
            </button>
            </Link>
          </div>

        </div>
    </Layout>
  )
}

export default Home