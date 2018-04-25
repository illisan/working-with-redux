import React, { Component }  from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Movies extends Component {

    printMovies () {
        return this.props.movies.map((movie) => {
            return (
                <li key={movie.id}>{movie.title}</li>
            )
        })

    }

    render () {
        return (
            <div>
                <ul>
                    {this.printMovies()}
                    {/* <li>one</li>
                    <li>two</li>
                    <li>three</li> */}
                </ul>
            </div>
        )
    }
}


//takes store, state and passes into component as a property
function mapStateToProps (state) {
    return {
        movies : state.movies
    }

}

export default connect(mapStateToProps)(Movies)