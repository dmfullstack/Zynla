//#swathi dimmer for book form loading
import React from 'react';
import {
   Grid,
   Divider,
   Header,
   Container,
   Icon,
   Form,
   Label,
   Dimmer,
   Loader,
   Button,
   Modal,
   Input,
   Dropdown,
   Card
} from 'semantic-ui-react';
let {hashHistory} = require('react-router');
import Cookie from 'react-cookie';
import TocCard from './tocCard'

class ListOfToc extends React.Component {
   constructor() {
       super();
       this.state = {
              listofCards:[]
           };
           this.getTocs=this.getTocs.bind(this)
       }
       getTocs(){
         $.ajax({
           url:"/book/getTocs",
           type:'GET',
           success:function (result) {
              console.log(result)
              this.setState({listofCards:result})
              console.log(this.state.listofCards,"listofCards..")
           }.bind(this),
           error: function(error){
             console.log("error");
             console.log(error)
           }
         })
       }
componentWillMount(){
  this.getTocs();
}
    render()
    {
      let tocArray=this.state.listofCards;
      console.log(tocArray)
      let tocCard=tocArray.map(function (data) {
            return <TocCard toc={data} />
      })
      return(
        <div>
          hello
        {tocCard}
      </div>
      )

    }
}
module.exports = ListOfToc;
