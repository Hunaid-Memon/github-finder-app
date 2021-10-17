import React, {Component} from 'react'
import BasicItem from './BasicItem';

class Basic extends Component {
    // Function in class outside the render 
//   fName = () => 'Hanif'
  render() {
        // Declare variable
    // const name = 'Hunaid'

        // Declare function
    // const lastName = () => 'Memon'

        // Declare bolean
    // var loading = true
    // var loading = false
    // const  showName = true
    // const  showName = false

    // Declare if condition if statement true return this methed
    // if(loading) {
    //     return <h3>loading...</h3> // only one return at a time
    // }

    return (
      <div className="App">
            {/* Using name variable */}
          {/* <h1>Hello {name} </h1> */}
            {/* Using function in render method */}
          {/* <h2>Hello {lastName()} </h2> */}

            {/* Using function from outside render this notation */}
          {/* <h3>Hello {this.fName()} </h3> */}

            {/* Using ternery operation instead of ifElse */}
        {/* {loading ? <h3>Loading...</h3> : this.fName } */}
        {/* {loading ? <h3>Loading...</h3> : <h1>Hello {name} </h1> } */}

            {/* Using && instead of ternery if only true statement is run */}
        {/* { loading ? <h3>Loading...</h3> : <h1>Hello { showName && name } </h1> } */}
        
            {/* Properties --- props && Components */}
            
              {/* Assign props to child components */}
            <BasicItem title={'hunaid'}/>

      </div>
    ) 
  }
}


export default Basic;
