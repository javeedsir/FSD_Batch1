import { Component } from "react";


export default  class ListItem extends Component {



        render(){



            return<>
            
                <li className="list-group-item">{this.props.obj.id} : {this.props.obj.pname} : {this.props.obj.price}</li>
            
            </>


        }





}