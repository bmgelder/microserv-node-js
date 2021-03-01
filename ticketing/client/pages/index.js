import { useEffect, useState } from 'react';
import axios from 'axios';
// import https from 'https';

export default function LandingPage(props) {
  const { currentUser } = props;

  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1> You are NOT signed in</h1>
  );
}

// LandingPage.getInitialProps = async ({ req }) => {
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
//   if (typeof window === 'undefined') {
//     // we are on the server!
//     // requests shoud be made to
//     // https://ingress-nginx-controller-admission.kube-system.svc.cluster.local/api/users/currentuser
//     const agent = new https.Agent({
//       rejectUnauthorized: false,
//     });
//     const { data } = await axios.get(
//       'https://ingress-nginx-controller-admission.kube-system.svc.cluster.local/api/users/currentuser',
//       {
//         httpsAgent: agent,
//         headers: req.headers,
//       }
//     );
//     return data;
//   } else {
//     // we are on the browser
//     // requests can be made with a base url of ''
//     const { data } = await axios.get('/api/users/currentuser');
//     return data;
//   }
// };
