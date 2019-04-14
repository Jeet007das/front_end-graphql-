import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookComponent from './Component/BookComponent';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {baseUrl} from "./Common/config";

const client = new ApolloClient({
  uri: baseUrl
})



class App extends Component {
  render() {
    console.log(baseUrl);
    
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <BookComponent />
        </div>
      </ApolloProvider>

    );
  }
}

export default App;
