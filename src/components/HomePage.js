import React from 'react'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addToList,addToFav,addToCurrent} from '../actions';
import '../index.css'
class HomePage extends React.Component {

    handleFav = (movie) =>{
        this.props.addToFav(movie);
    }
    handleCurrentMovie = (movie) =>{
        this.props.addToCurrent(movie);
        // this.props.history.push('/movie')
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c4eb340c53b2ff8a8f5994e4aa8ae23d')
            .then(res =>{
                this.props.addToList(res.data.results);
            })
    }
    render(){
        const movieList = this.props.movie;
        return(
            <div className="upperContainer">
                 {
                movieList.map(movie=>{
             return <Card className="movieContainer" onClick={e=>this.handleCurrentMovie(movie)}>
                 <CardImg src={`${movie.poster_path}`} alt='card image' />
                 <CardBody>
                <div onClick={e=>this.props.history.push('/movie')} style={{cursor:"pointer"}}>        
                         <CardTitle>{movie.title}</CardTitle>
                 <CardText>{movie.release_date}</CardText>
                 <CardText>{movie.overview}</CardText>
                 </div>
                 <button onClick={e=>this.handleFav(movie)}>Add to favourite</button>
                 </CardBody>
                 </Card>
                })
                
            }
          
            </div>
           
        )
    }
}
function mapStateToProps(state) {
    console.log('5.mapStateToProps stats',state);
    return {
      movie: state.movieList
    }
  }
export default connect(mapStateToProps,{addToList,addToFav,addToCurrent})(HomePage);