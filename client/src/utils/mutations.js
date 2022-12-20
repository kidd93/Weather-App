import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!) {
        addUser(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const SAVE_LOCATIONS = gql`
    mutation saveLocations($id: String!, $image: String) {
        saveLocations(id: $id, image: $image)
        {
            savedLocations{
                id
                image
            }
                _id
                email
                locationCount
        }
    }
`;

export const REMOVE_LOCATIONS = gql`
    mutation removeLocations($id: String!) {
        removeLocations(id: $id) {
            _id
            email
            locationCount
            savedLocations{
                id
                image
            }
        }
    }
`;