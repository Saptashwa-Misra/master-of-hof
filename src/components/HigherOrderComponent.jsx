import React from 'react';
class HigherOrderFunctions extends React.Component
{

  constructor(props) //Use props only inbuilt name
  {
    super(props)
    this.state={
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

        ]
    }
  }

  render()
  {
    return <>
        <h1>Display all items</h1>
        <>{this.display_all()}</> 
        <h1>Display based on user type - Only designers</h1>
        <>{this.display_designers()}</>
        <h1>Filter all data starting with J</h1>
        <>{this.startJ()}</>
        <h1>Filter all data based on age greater than 28 and age less than or equal to 50 </h1>
        <>{this.ageVerification()}</>
        <h1>Find the total experience of the designers</h1>
        <>{this.countExperience()}</>
    </>

  }

  display_all = () => {
    let all_data = this.state.userData.map( (element) =>(
        <>
            <div>
                <span>Id: {element.id}</span>
                <span>Name: {element.name}</span>
                <span>User Type: {element.user_type} </span>
            </div>
        </>
    ))
    return all_data
  }

  display_designers = () => {
    let only_designers=this.state.userData.filter(element => element.user_type === 'Designer')
    let designers = only_designers.map((element)=>(
        <>
            <div>
                <span>Id: {element.id}</span>
                <span>Name: {element.name}</span>
                <span>User Type: {element.user_type} </span>
            </div>
        </>
    ))
    return designers
  }

  startJ = () => {
    let only_startJ = this.state.userData.filter (element => element.name[0]==='J')
    let J = only_startJ.map((element)=>(
        <>
        <div>
            <span>Id: {element.id}</span>
            <span>Name: {element.name}</span>
            <span>User Type: {element.user_type} </span>
        </div>
    </>
    ))
    return J
  }

  ageVerification = () => {
    let age_verify = this.state.userData.filter(element=>element.age>28 && element.age<=50)
    let age_check = age_verify.map((element)=>(
        <>
        <div>
            <span>Id: {element.id}</span>
            <span>Name: {element.name}</span>
            <span>User Type: {element.user_type} </span>
        </div>
    </>
    ))
    return age_check
  }

  countExperience = () => {
    let experience_designers = this.state.userData.filter(element=>element.user_type==='Designer')
    let sum_experience = experience_designers.reduce((current_sum, experience)=>{
        return current_sum + experience.years
    },0)
    return <span>{sum_experience}</span>
  }
}
export {HigherOrderFunctions}