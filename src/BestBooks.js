import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BookCard from './Component/BookCard'
import ModalForm from './Component/ModalForm';
import { Button } from 'bootstrap';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      bookData: [],
      showBook: false,
      showModal: false
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

  renderForm = async () => {
    await this.setState({
      showModal: true
    })
  }
  handleClose = async () => {
    await this.setState({
      showModal: false
    })
  }
  handelForm = async (e) => {
    e.preventDefault();
   await this.setState({
     showModal:false
   })
    
  const newBookobj={
    email:this.state.userEmail,
    name:e.target.name.value,
    description:e.target.description.value,
    status:e.target.status.value,
    img:e.target.img.value,
  }
  // http://localhost:3001/addbook
  let url=`${process.env.REACT_APP_BOOK}/addbook`
  let responseBook= await axios.post(url,newBookobj);

  await this.setState({
    renderBook:responseBook.data
  })

  }
  // http://localhost:3001/deleteBook
  deleteBook = async(index) =>{
    
    let paramsObj = {
      email:this.state.userEmail,
    }
    let url =`${process.env.REACT_APP_BOOK}/deletebook/${index}`;

    let deletBookrespons = await axios.delete(url,{params:paramsObj});
    
    this.setState({
      renderBook:deletBookrespons.data
    })


  }




  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.bookData.map(book => {
          return (<BookCard showBook={this.state.showBook} renderBook={book} />)
        })}
        <Button  onClick={this.renderForm} >ADD BOOK</Button>
       <ModalForm handleClose={this.handleClose} showModal={this.state.showModal} handelForm={this.handelForm}  />
      </Jumbotron>

    )
  }
}

export default withAuth0(MyFavoriteBooks);

