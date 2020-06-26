import React from 'react';
import './App.css';
import Main from "./routes/main";
import {UserProvider} from "./UserContext";

function App() {
    const token = 'hello'

  return (
      <UserProvider value={token}>
          <body>
            <div className="page-content" />
            <Main />
          </body>
      </UserProvider>
  );
}

export default App;
