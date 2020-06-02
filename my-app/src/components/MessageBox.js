import React from 'react';
import { connect } from 'react-redux';
import { addingMessage } from '../actions';
import { removeMessages } from '../actions';

class MessageBox extends React.Component {




     addMessage() {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        let text =  document.getElementById("fname").value

        this.props.addingMessage({
            "key": this.props.messages.length,
            "date": today,
            "speaker":"you",
            "description": text
        })

    }

    detailsMessage(i) {
        
        {console.log(i)}

        var workshops_content = document.getElementById("itemclickedbox");
        workshops_content.value = i
        console.log(workshops_content)
        
    }



	render() {
		return (				
        

        <div id="chatboxhome" className="content" text-align="center" >
                        

			<p>	
				<input type="text" id="fname" name="fname" size="100"/>
			</p>



			<p>	
				<button onClick={() => { this.addMessage()}}>send message</button>
			</p>

            <ul>
                    {(this.props.messages).map(item => ( 
                    <div>

                    <button onClick={() => { this.detailsMessage(item.date +"   " +item.description+  "  item number:  "+ item.key)}}>Show date</button>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        { item.description  }


                    </div>
                    ))}
            </ul>

            <input  id="itemclickedbox" value="No item clicked yet" size="100"/>
			<p>	
				<button onClick={() =>  this.props.removeMessages([]) }>clear messages</button>
			</p>



        </div>);
	}
}

//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { messages: state.messages}; //now it will appear as props
}
    

export default connect(mapStateToProps, { addingMessage,removeMessages })(MessageBox);
