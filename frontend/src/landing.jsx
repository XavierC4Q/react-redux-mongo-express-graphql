import React from 'react';
import { Link } from 'react-router-dom'
import { graphql, Query } from 'react-apollo'
import { GET_ALL_USERS } from './graphql/queries'

const LandingPage = () => {
  return(
    <Query query={GET_ALL_USERS}>
      {
        ({ loading, error, data }) => {
          const { allUsers } = data

          if(loading || !data){
            return(<div>loading loading</div>)
          }

          if(error){
            return(<div>error with query</div>)
          }

          return(
            <div>
              <h1>Users my wonderful Users</h1>
              {allUsers.map(user => (
                <p>{user.username}</p>
              ))}
            </div>
          )
        }
      }
    </Query>
  )
}

export default LandingPage
