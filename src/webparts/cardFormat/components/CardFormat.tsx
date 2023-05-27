import * as React from 'react';
// import styles from './CardFormat.module.scss';
import { ICardFormatProps } from './ICardFormatProps';


import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import styles from './CardFormat.module.scss';


//This is for single item
interface IEmployeeListItem{
  Title:string;
  Address:string;
  DOB:any;
  MarritalStatus:string;
  ContactNo:number;
  Salary:number;
  Department:any;

  //News
  Image:string;
  News:string;
  Link:any;
 
  
  
 
}
  


//Multiple Items
interface IAllItems{
  AllEmployees:IEmployeeListItem[],
}


export default class CardFormat extends React.Component<ICardFormatProps, IAllItems> {
 
 
  constructor(props:ICardFormatProps,
    state:IAllItems){
      super(props);
      this.state={
        AllEmployees:[],
      };
    }
 



 componentDidMount() {
  //  alert("Component Did mount called..");
   console.log("First call..");
   this.getAllEmployeeDetails();

 }
 public getAllEmployeeDetails= ()=>{
  console.log('This is employee detail function');

  
 
 let listURL = `${this.props.siteURL}/_api/web/lists/getbytitle('${this.props.listName}')/items`
 console.log(listURL);

 this.props.context.spHttpClient
 .get(listURL,SPHttpClient.configurations.v1)  
     .then((response: SPHttpClientResponse) => {  
       response.json().then((responseJSON: any) => {  
         // console.log(responseJSON);  
         this.setState({
           AllEmployees:responseJSON.value
         });
         console.log(this.state.AllEmployees)
       });  
     });  

 
    }
  public render(): React.ReactElement<ICardFormatProps> {
  
    
       return( 
      
//       <div className= {styles.card}>
//          <div className= {styles.container}>

//        <h1 className={styles.heading}>Card</h1> 
//         {this.state.AllEmployees.map(emp=>{
//          return(
//       <>
      
//       <h2 className={styles.name}>{emp.Title}</h2>
//       <h4>Salary : {emp.Salary}</h4>
//       <h4>Address : {emp.Address}</h4>
//       <h4>DOB : {emp.DOB}</h4>
//       <h4>Contact No : {emp.ContactNo}</h4>
//       <h4>Department : {emp.Department}</h4>
//       <h4>Marital Status : {emp.MarritalStatus}</h4>
//      </>

      
//      )
//   })}
//  </div>
//   </div>

<section>
<>
{/* <div><h2 className={styles.listname}>Staff Info</h2></div>
<div className={styles.container}>
  {this.state.AllEmployees.map(emp=>{
    return(
      <>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <h3>{emp.Title}</h3>
            <h4>Address : {emp.Address}</h4>
            <h4>Contact No : {emp.ContactNo}</h4>
            <h4>DOB : {emp.DOB}</h4>
            <h4>Salary : {emp.Salary}</h4>
            <h4>Department : {emp.Department}</h4>
            <h4>Marital Status : {emp.MarritalStatus}</h4>
          </div>
        </div>
      </div>
      </>
    )
  })}
</div>
</></>*/}

{/* News */}

 <div><h2 className={styles.listname}>News</h2></div>
<div className={styles.container}>
  {this.state.AllEmployees.map(emp=>{
    return(
      <>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <h3>{emp.Title}</h3>
            <h4>Heading: {emp.Title}</h4>
              <h4><img
                  src={
                    emp.Image == null
                      ? "https://imgd.aeplcdn.com/0x0/n/cw/ec/144681/virtus-exterior-right-front-three-quarter.jpeg?isig=0"
                      : window.location.origin +
                        JSON.parse(emp.Image).serverRelativeUrl
                  }
                  alt=""
                  width={100}
                  height={100}
                /></h4>
            
             <h4>News : {emp.News}</h4>
             <button onClick={emp.Link}>Show More</button>
            
          </div>
        </div>
      </div>
      </>
    )
  })}
</div>
</>



</section>

    )

  

}}
