import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-knzz0gmb4xolofea.us.auth0.com"
    clientId="e03p4A1lGzLtuQnudO1LORy5OcYv2RKU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);