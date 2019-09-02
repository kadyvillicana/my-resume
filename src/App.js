import React from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MobileNavBar from './components/mobile-nav-bar/mobile-nav-bar';
import Routes from './config/routes';
import NavBar from './components/nav-bar/nav-bar';

function App() {
  return (
    <Grid fluid style={{ margin: 0, padding: 0, overflow: "hidden", height: '100%' }}>
      <div className='hide-on-mobile'>
        <NavBar />
      </div>
      <Row middle='xs' style={{ margin: 0, height: '95%' }}>
        <Col xs={12} className='padding-top-on-big-screen' >
          <Routes />
        </Col>
      </Row>
      <div className='none-display-big-screen' >
        <MobileNavBar/>
      </div>
    </Grid>
  );
}

export default App;