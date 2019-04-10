import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// function CoolComponent() {
//     return React.createElement('p', {}, 'Test trop cool')
//     //premier arg = nom du composant(la une string qui correspond à la balise p)
//     //second arg = série d'attributs (ex: id, className...)
//     //3em arg = le contenu
// }

// ReactDOM.render(
//     React.createElement(CoolComponent),
//     document.getElementById('root')
//   )
class Test extends Component {
    render() {
    
    return <p>Youpi So Cool !</p>
  }
    
}

export default Test;

  
//   ReactDOM.render(
//     <CoolComponent />,
//     document.getElementById('root')
//   )