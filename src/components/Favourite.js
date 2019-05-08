import React from 'react'
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class Favourite extends React.Component {

    render(){
        const favList  = this.props.fav;
        return(
            <div className="upperContainer">
                {
                    favList.map(movie =>{
                        return <Card className="movieContainer">
                        <CardImg src='img' alt='movie image' />
                        <CardBody>
                        <CardTitle>{movie.title}</CardTitle>
                        <CardText>{movie.release_date}</CardText>
                        <CardText>{movie.overview}</CardText>
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
      fav: state.fav
    }
  }
export default connect(mapStateToProps,null)(Favourite);