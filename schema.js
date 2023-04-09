const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type Employee {
        id: ID!
        first_name: String!
        last_name: String!
        email: String!
        gender: String!
        salary: Float!
    }
    
    type Users {
        id: ID!
        username: String!
        email: String!
        password: String!
    }
    
    
    type Query {
        getAllEmployees: [Employee]
        searchEmployeeByEid(id: ID!): Employee
        login(username: String! email: String! password: String!): Users

    }

    type Mutation {
        addNewEmployee(
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
            salary: Float!): Employee
        
        
        signUp(
            username: String!
            email: String!
            password: String!): Users
        

        updateEmployeeByEid(
            id: ID!
            first_name: String!
            last_name: String!
            email: String!
            gender: String!
            salary: Float!): Employee
        

        deleteEmployeeByEid(id: String!): Employee

    }`
