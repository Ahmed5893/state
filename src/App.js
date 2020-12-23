import React,{Component} from 'react'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      FullName:'Ahmed',
      bio:26,
      job:'Developper',
      picture:'https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/aothero.jpg?offset-x=0&offset-y=48',
    };
  }
    showProfile=()=>{
      this.setState({show:!this.state.show});
    }
    
    componentDidMount(){
      setInterval(
        ()=>{
          this.setState({
            count:this.state.count+1
          })
        },1000
      )
    }
  render() {
    return (

      <div>
        <p>
          {this.state.count}
        </p>
        <button
        type='button'
        onClick={this.showProfile}> {this.state.show ?"hide profile":'show profile'} </button>
        {this.state.show ?(<div className='container'>
          <h1>{this.state.FullName}</h1>
          <h5>{this.state.bio}</h5>
          <h3>{this.state.job}</h3>
          <div><img src={this.state.picture} alt='pic'/> </div>
        </div>):(<h4>click the button to display the profile</h4>)}
      </div>
    );
  }
}
