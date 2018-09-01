import React from 'react';
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import { GET_ALL_USERS } from './graphql/queries'

const Landing = ({ data: { loading, error, allUsers }}) => {
  if(loading){
    return (<div>loading all users</div>)
  }
  if(error){
    return (<div>error fetching users</div>)
  }
  return(
    <div>
      <h1>All Users</h1>
      {allUsers.map(user => (
        <li>{user.username}</li>
      ))}
    </div>
  )
}


const LandingPage = graphql(GET_ALL_USERS)(Landing)

export default LandingPage
