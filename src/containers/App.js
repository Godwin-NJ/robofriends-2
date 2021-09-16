import React, {Component} from 'react';
import {connect} from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll'; 
import './App.css';
import {setSearchField,requestRobots} from '../action';
// import {searchRobots} from '../reducer'


const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
   return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots : () => dispatch(requestRobots())
   }
}


class App extends Component{

        componentDidMount(){
            this.props.onRequestRobots()   
        }

        // onSearchChange = (event) => {
        //     this.setState({searchfield: event.target.value})           
        // }

     render() {
         const {searchField,onSearchChange,robots, isPending} = this.props
         console.log(robots)
         const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        console.log(filteredRobots)
        if(isPending){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange = {onSearchChange}/>
                    <Scroll>
                <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
