import axios from "axios"
import { useState } from "react"



export const addbook=(bookName)=>{
    axios({
        method:'post',
        url:'http://localhost:3000/add',
        data:{
            book_name:bookName,
        }
    })
    .then(response=>{
        console.log("data",response.data)

    })
}

export const addstud=(studentData)=>{
    axios({
        method:'post',
        url:'http://localhost:3000/addstud',
        data:studentData
    })
    .then((response) => {
        console.log("Student added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
}

export const showbook = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/showdata',
        })
        return response.data
    } catch (error) {
        console.error("Error fetching book data:", error)
        throw error // Rethrow the error for the caller to handle
    }
  };


  export const showstudent=async()=>{
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3000/showstudentdata',
        })
        return response.data
    } catch (error) {
        console.error("Error fetching book data:", error)
        throw error // Rethrow the error for the caller to handle
    }
  }

//   export const searchBooks = async (bookIssueDate) => {
//     try {
//           const response = await axios({
//               method: 'get',
//               url: `http://localhost:3000/searchbooks?bookIssueDate=${bookIssueDate}`,
//           })
//           return response.data
//       } catch (error) {
//           console.error("Error searching books:", error)
//           throw error
//       }
//   };
  
  export const searchStudents=async(searchParams)=>{
    try {
        // Construct the query string based on the search parameters
        const { firstName, lastName, bookName, bookIssueDate, bookSubmissionDate } = searchParams;

        const response = await axios.get('http://localhost:3000/searchbooks', {
            params: {
                firstName, 
                lastName, 
                bookName, 
                bookIssueDate, 
                bookSubmissionDate
            }
        });

        // Handle the response data
        console.log('Search results:', response.data.students);
        return response.data.students;
    } catch (error) {
        console.error('Error during API call:', error);
        throw error; // You can handle this error in your UI
    }
  }