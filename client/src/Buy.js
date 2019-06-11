import React, { Component } from 'react'

 class Buy extends Component {
state = {
    on: false,
}

toggle = () => {
    this.setState ({
        on: !this.state.on
    })
}

  render() {
    return (
      <div id ="sellDiv" >
                    {/* <iframe src="https://giphy.com/embed/30pkjC6CHlVeK9Wu95" width="100" height="100" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}

              <button id="sell" onClick ={this.toggle}>BUY MUSIC</button>

<br />
              

        {this.state.on && 
<input id ="top-user" 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Search by User Name..." 
    type="text" 
    />
        }

<br />

{this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Search by Album Name..." 
    type="text" 
    />


        }

<br />


        {this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Search by Artist Name..." 
    type="text" 
    />


        }

 <br />
       

        {this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Search by (Record, CD, Cassette...)" 
    type="text" 
    />


        }

 <br />
       

        {this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Search by Price..." 
    type="text" 
    />


        }
      </div>
    );
  }
}

export default Buy