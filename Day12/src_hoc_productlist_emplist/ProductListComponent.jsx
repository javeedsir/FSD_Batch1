import { Component } from "react";
import ListItem from "./ListItem";

export default  class  ProductListComponent extends Component{

        constructor(props){

            super(props);

        }

            listItem(){


                if(this.props.data instanceof Array){

                    return this.props.data.map((object,i)=>{
                                 console.log(object)
           
                               return <ListItem  obj={object}  key={i} />;
           
                                 });
           
           
                       }



            }



        render(){

                return (
                <ol className="container col-md-4 list-group" >{this.listItem()}</ol>
            )



        }






}