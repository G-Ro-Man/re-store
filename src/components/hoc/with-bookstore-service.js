import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context'

const withBookstoreService = () => (Wrapperd) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Wrapperd {...props} bookstoreService={bookstoreService} />
        }}
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService
