import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/actions/index';

import './MoviesContainer.scss';
import '../MovieLayout/MovieButtons/MovieButtons.scss';
import MovieLayout from '../MovieLayout/MovieLayout';
import EditMovieForm from '../Forms/EditMovieForm';
import Modal from '../UI/Modal/Modal';
import NewMovieLayout from '../MovieLayout/NewMovieLayout';


class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            formMode: false,
            selectedMovie: {},
            modalMode: false,
            modalType: '',
            formType: '',
            movieToDelete: {}
        }
    }

    componentDidMount() {
        this.props.setMovieList()
    }

    formEditOpen = (movie, selectedFormType) => {
        this.setState({
            formMode: !this.state.formMode,
            selectedMovie: movie,
            modalMode: !this.state.modalMode,
            modalType: 'form',
            formType: selectedFormType,
        })
    }
    
    togglePopUp = () => {
        this.setState({
            formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,
            modalType: ''
        })
    }

    formCancel = () => {
        this.togglePopUp()
        this.props.clearFormErrors()
    }

     deleteApprovel = (movie) => {
        this.setState({
            modalMode: !this.state.modalMode,
            movieToDelete: movie,
            modalType: 'delete'
        }) 
    }

    deleteApproved = () => {
        this.togglePopUp()
        this.props.deleteMovie(this.state.movieToDelete.imdbID)
    }


    modalMode = () => {
        if(this.state.modalMode){
            if(this.state.modalType === 'form'){
                return( 
                <EditMovieForm
                    selectedMovieData = {this.state.selectedMovie} 
                    onFormCancel = {this.formCancel}/>)
            }
            else if (this.state.modalType === 'delete'){
                return(
                <div class="deleteApprovalMessage">
                    <p>Are you sure you want to remove the title</p>
                    <h3 style={{margin: '0px 0px 25px 0px'}}> {this.state.movieToDelete.Title} ?</h3>
                    <div className="popUpFooter">
                        <button className="blueMovieButton" onClick= {this.deleteApproved}>yep, please delete it for me</button>
                        <button className="redMovieButton" onClick={this.togglePopUp}>ooooops</button>
                    </div>
                </div>)}
    }}

    render(){
        let moviesList = 
            this.props.moviesList.map(movie => <MovieLayout 
                key={movie.imdbID ? movie.imdbID : movie.Title} 
                title={movie.Title} 
                poster={movie.Poster} 
                year={movie.Year} 
                runtime={movie.Runtime} 
                genre={movie.Genre} 
                director={movie.Director}
                formOpen={() => this.formEditOpen(movie, 'editForm')}
                deleteMovie= {() => this.deleteApprovel(movie)}
            />)
        
        return(
            <div className="movieList">
                <NewMovieLayout formOpen={()=> this.formEditOpen({},'newForm')}/>
                {moviesList}
                <Modal
                    modalOpen = {this.state.modalMode} 
                    modalClose= {this.togglePopUp}>
                    {this.modalMode()}
                </Modal>
            </div>
        );
    }
}

    const mapStateToProps = state => {
        return {
            moviesList: state.moviesList.moviesDataList,
            
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
            setMovieList: () => dispatch(actionCreators.initMovies()),
            deleteMovie: (movieId) => dispatch(actionCreators.deleteMovie(movieId)),
            clearFormErrors: () => dispatch(actionCreators.clearFormValidationErrors())
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Container);
