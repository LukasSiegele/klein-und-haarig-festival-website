import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient'; // Pfad ggf. anpassen
import styled from 'styled-components';
import { graphql } from "gatsby"; // Sicherstellen, dass graphql importiert ist

const AdminOrdersPage = () => {
  const [user, setUser] = useState(null);
  // --- NEU: Getrennte Loading States ---
  const [initialAuthLoading, setInitialAuthLoading] = useState(true); // Für den ersten Auth-Check
  const [ordersLoading, setOrdersLoading] = useState(false);      // Für das Laden der Bestellungen
  // ------------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [orders, setOrders] = useState([]);
  const [fetchError, setFetchError] = useState('');


  // Checks user status when loading and on changes
  useEffect(() => {
    setInitialAuthLoading(true); // Beim ersten Mal sicherstellen, dass wir laden
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setInitialAuthLoading(false); // Initiales Auth-Laden beendet
    };
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setInitialAuthLoading(false); // Auth-Status bekannt, initiales Laden beendet
      if (_event === 'SIGNED_IN') {
        setEmail('');
        setPassword('');
        setLoginError('');
      }
      if (_event === 'SIGNED_OUT') {
        setOrders([]);
        setFetchError('');
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) { 
      const fetchOrders = async () => {
        setOrdersLoading(true); // Spezifisches Laden für Bestellungen starten
        setFetchError('');
        // console.log("AdminPage: Fetching orders for user:", user.email); // Kannst du später wieder einkommentieren
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('AdminPage: Error fetching orders:', error);
          setFetchError('Bestellungen konnten nicht geladen werden: ' + error.message);
          setOrders([]);
        } else {
          // console.log("AdminPage: Orders fetched successfully:", data); // Kannst du später wieder einkommentieren
          setOrders(data || []); 
        }
        setOrdersLoading(false); // Spezifisches Laden für Bestellungen beendet
      };
      fetchOrders();
    } else {
      setOrders([]); 
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setInitialAuthLoading(true); // Zeige "Lade..." während Login-Versuch
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Login error:', error);
      setLoginError(error.message || 'Login fehlgeschlagen.');
      setInitialAuthLoading(false); // Login fehlgeschlagen, Ladeanzeige beenden
    }
    // onAuthStateChange setzt initialAuthLoading auf false bei Erfolg
  };

  const handleLogout = async () => {
    setLoginError('');
    // setInitialAuthLoading(true); // Optional: Ladeanzeige während Logout
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error);
      setLoginError('Logout fehlgeschlagen: ' + error.message);
      // setInitialAuthLoading(false);
    } else {
        setUser(null);
        // setInitialAuthLoading(false); // onAuthStateChange sollte das handhaben
    }
  };

  // Zeige "Lade Admin-Bereich..." nur beim allerersten Laden der Seite
  if (initialAuthLoading) {
    return <AdminPageWrapper><p>Lade Admin-Bereich...</p></AdminPageWrapper>;
  }

  if (!user) {
    // If no user is already logged in, show login form
    return (
      <AdminPageWrapper>
        <h2>Admin Login</h2>
        <LoginForm onSubmit={handleLogin}>
          <label>
            E-Mail:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label>
            Passwort:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
          {/* Button-Text/Disabled-Status could be tied to a loginLoading state */}
          <Button type="submit">Login</Button>
          {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
        </LoginForm>
      </AdminPageWrapper>
    );
  }

  // If Supabase authenticated user is logged in
  return (
    <AdminPageWrapper>
      <OrderTableTitle>Admin Bereich - Bestellübersicht</OrderTableTitle>
      <LoggedInAsText>Logged in as: {user.email}</LoggedInAsText>
      <LogoutButton onClick={handleLogout} style={{marginBottom: '20px'}}>Logout</LogoutButton>
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>} 
      
      {/* Specific loading view for orders */}
      {ordersLoading && <p>Lade Bestellungen...</p>}
      {fetchError && <ErrorMessage>{fetchError}</ErrorMessage>}
      
      {!ordersLoading && !fetchError && orders.length === 0 && (
        <p>Noch keine Bestellungen vorhanden.</p>
      )}

      {!ordersLoading && !fetchError && orders.length > 0 && (
       <TableWrapper>
        <OrdersTable>
          <thead>
            <tr>
              <th>Order-ID</th>
              <th>Date</th>
              <th>Product</th>
              <th>Size</th>
              <th>Payment</th>
              <th>Discount Code</th>
              <th>Name / PayPal Order ID</th>
              <th>Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id.substring(0, 8)}...</td>
                <td>{new Date(order.created_at).toLocaleString('de-DE')}</td>
                <td>{order.product_name}</td>
                <td>{order.size_label || 'N/A'}</td>
                <td>{order.price_paid?.toFixed(2)} €</td>
                <td>{order.discount_code_used || '-'}</td>
                <td>{order.user_identifier || order.paypal_order_id || 'N/A'}</td>
                <td>
                    {order.shipping_address_line_1 ? (
                    <>
                      {order.shipping_address_line_1}{order.shipping_address_line_2 ? `, ${order.shipping_address_line_2}` : ''}<br />
                      {order.shipping_postal_code} {order.shipping_city}<br />
                      {order.shipping_country_code}
                    </>
                    ) : (
                      'N/A'
                    )}
                 </td>
              </tr>
            ))}
          </tbody>
        </OrdersTable>
       </TableWrapper>
      )}
    </AdminPageWrapper>
  );
};

export default AdminOrdersPage;

// NEU: GraphQL Query für gatsby-plugin-react-i18next hinzufügen
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const AdminPageWrapper = styled.div`
  padding: 20px;
  max-width: 80%;
  margin: 40px auto;
  gap: 16px;
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 8px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
  }

  input {
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #555;
    background-color: #333;
    color: #fff;
  }
`;

const OrderTableTitle = styled.p `
  color: white;
  font-size: 0.7 em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
`;

const LoggedInAsText = styled.p `
  color: white;
  opacity: 0.7;
  font-size: 0.7 em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const LogoutButton = styled.p`
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-size: 0.9em;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;      
  -webkit-overflow-scrolling: touch;
  margin-top: 20px;
`;

const OrdersTable = styled.table`
  width: 100%; 
  min-width: 750px;
  border-collapse: collapse;
  font-size: 0.7em;

  th, td {
    border: 1px solid #444;
    padding: 8px 12px;
    text-align: left;
    white-space: nowrap;
  }

  th {
    background-color: #333;
    opacity: 0.7;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tbody tr:nth-child(odd) {
    background-color: #2a2a2a;
  }
`;