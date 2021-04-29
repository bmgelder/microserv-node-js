import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
// import https from 'https';

export default function LandingPage(props) {
  const { currentUser } = props;

  const [tickets, setTickets] = useState([]);

  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  useEffect(async () => {
    const { data } = await axios.get('/api/tickets');
    setTickets(data);
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
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
//       'https://ingress-nginx-controller-admission.kube-system.svc.cluster.local/api/tickets',
//       {
//         httpsAgent: agent,
//         headers: req.headers,
//       }
//     );
//     return data;
//   } else {
//     // we are on the browser
//     // requests can be made with a base url of ''
//     const { data } = await axios.get('/api/tickets');
//     return data;
//   }
// };
