import React, { Component } from 'react';
import Toggle from './Toggle';
import Buy from './Buy';

class App extends Component {

 getUserInfo = () => {
   const input = document.getElementById("buy").value
  console.log(input);
   console.log("click")
 }

 render() {

   return (

     <div id="wholeApp" className="App">
     <div id="headers">
     <div id="logo">
     </div>
       <h2 id="header">- Record Store -</h2>

       </div>
              {/* <iframe src="https://giphy.com/embed/8FM8uY0KjydEohrjrh" width="100" height="100" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}

      <Toggle />
      <Buy />

<div id="words1">
             <h2>A Simple Web App for Vinyl Enthusiasts</h2>
             <p>Designed for Purchasing and Selling Used Records, CD's, and Cassettes</p>
</div>



</div>



   );
 }

}

export default App;






