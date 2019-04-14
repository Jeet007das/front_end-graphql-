import React, { Component } from 'react';
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";


const getBooksQuery = gql`
{
    books{
        name
        genre
        id
    }
}`

class BookComponent extends Component{
    render(){
        console.log(this.props);
        
        return(
            <div>
                <h1>This is book component ...</h1>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookComponent);