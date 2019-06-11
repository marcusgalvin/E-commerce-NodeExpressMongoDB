import React, { Component } from 'react'

 class Toggle extends Component {
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
      <div id ="buyDiv" >
                                 
          <div id="group">
          <div id="gif">
</div>
              <button id="sell" onClick ={this.toggle}>SELL MUSIC</button>


  </div>


<br />
              

        {this.state.on && 
<input id ="top-user" 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="User Name" 
    type="text" 
    />
        }

<br />

{this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Album Name" 
    type="text" 
    />


        }

<br />


        {this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Artist Name" 
    type="text" 
    />


        }

 <br />
       

        {this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="(Record, CD, Cassette)" 
    type="text" 
    />


        }

 <br />
       

        {this.state.on && 

<input id ="top-user"
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Price" 
    type="text" 
    />


        }
      </div>
    );
  }
}

export default Toggle