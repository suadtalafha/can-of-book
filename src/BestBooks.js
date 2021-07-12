import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookCard from './Component/BookCard'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      bookData: [],
      showBook: false,
    }
  }
  componentDidMount = async () => {
    const { user } = this.props.auth0
    await this.setState({
      email: `${user.email}`

    })
    let url = `http://localhost:3001/books?userEmail=${this.state.email}`
    let responsData = await axios.get(url);
    await this.setState({
      showBook: true,
      bookData: responsData.data,

    })
    // console.log(this.state.bookData)
  }


  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.bookData.map(book => {
         return( <BookCard showBook={this.state.showBook} renderBook={book} />)
        })}

      </Jumbotron>

    )
  }
}

export default withAuth0(MyFavoriteBooks);

