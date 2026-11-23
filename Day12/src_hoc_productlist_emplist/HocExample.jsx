import { Component } from "react";



export default  function  HocExample(WrappedComponent  , dataList){


      return  class  extends Component {


                constructor(props){
                        super(props)


                        this.state = {

                            mylist: dataList
                        }


                }


              render(){


                    return <>
                    
                        <h1>Welcome to HOC</h1>
                    <WrappedComponent data={this.state.mylist} {...this.props} />
                    
                    </>


              }     



            }





}