import React from 'react'
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { addToList,addToFav,addToCurrent} from '../actions';

class SingleMovie extends React.Component {
    handleFav = (movie) =>{
        this.props.addToFav(movie);
        this.props.history.push('/movie')
    }
    render(){
        const movie = this.props.currMovie
        console.log(movie)
        return(
            <div>
               <Card className="movieContainer singleMovie">
                 <CardImg src='img' alt='movie image' />
                 <CardBody>
                 <CardTitle>{movie.title}</CardTitle>
                 <CardText>{movie.release_date}</CardText>
                 <CardText>{movie.overview}</CardText>
                 <button onClick={e=>this.handleFav(movie)}>Add to favourite</button>
                 </CardBody>
                 </Card>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('5.mapStateToProps stats',state);
    return {
      currMovie: state.currentMovie
    }
  }
export default connect(mapStateToProps,{addToFav})(SingleMovie);