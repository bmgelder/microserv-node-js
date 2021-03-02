import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import Header from '../components/header';

export default function AppComponent({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(async () => {
    const { data } = await axios.get('/api/users/currentuser');
    setCurrentUser(data.currentUser);
  }, [Component]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} currentUser={currentUser} />
    </div>
  );
}
