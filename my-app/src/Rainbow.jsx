import React from 'react';



class Rainbows extends React.Component {
constructor (props) {
super(props);
this.state = {
    name: 'there'
}

}

componentDidMount(){

    fetch('htpp:/localhost:9000/users/1')
    .then(res => res.text())
    .then(res => {
        const user = JSON.parse(res);
        if (user) this.setState({name:user.firstName})
    })

    .catch(err => err)



}


rebder () {

return <h2> Hello {this.state.name}</h2>
}
}




export default Rainbows;