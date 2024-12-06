import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useSearchParams } from 'react-router-dom';
import { addstud } from './Global/apiservice';
import {  showbook } from './Global/apiservice';


function Add_Stud() {

    const[formdata,setformdata]=useState({
        firstName:'',
        lastName:'',
        book_id:'',
        book_issue_date:'',
        book_submission_date:''
    })

    const [bookData, setBookData] = useState([]);

    useEffect(()=>{
        showbook()
        .then((response) => {
          setBookData(response.data); // Set the fetched data in state
        })
        .catch((error) => {
          console.error("Error fetching book data:", error);
        })
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({
          ...formdata,
          [name]: value,
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        addstud(formdata); // Call API function and pass form data
        
      };
      

   
  return (
    <>
        <div className="container">
            <div className="row signup">
            <div className="col-lg-6 signup-sec p-4 ps-5 pe-5">
                        <div>
                            <h3 className="text-center mb-3">Student information</h3>
                            <Form onSubmit={handleSubmit}>
                               
                                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3 form_sec">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form_sec"
                                        value={formdata.firstName}  
                                        onChange={handleChange}                            />
                                    
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3 form_sec">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form_sec"
                                        value={formdata.lastName}  
                                        onChange={handleChange} />
                                        
                                        </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Book Id" className="mb-3 form_sec">
                                    <Form.Control
                                        type="text"
                                        placeholder="Book Id"
                                        name="book_id"
                                        className="form_sec"
                                        value={formdata.book_id}  
                                        onChange={handleChange} />
                                    
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Book issue date" className="mb-3 form_sec">
                                    <Form.Control
                                        type="date"
                                        placeholder="Book issue date"
                                        name="book_issue_date"
                                        className="form_sec"
                                        value={formdata.book_issue_date}
                                        onChange={handleChange}
                                    />
                                    
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput" label="Book submission date" className="mb-3 form_sec">
                                    <Form.Control
                                        type="date"
                                        placeholder="Book submission date"
                                        name="book_submission_date"
                                        className="form_sec"
                                        value={formdata.book_submission_date}    
                                        onChange={handleChange} />
                                    
                                </FloatingLabel>

                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="border-0 fs-5 mt-2 p-1 ps-3 pe-3 text-white btns rounded">
                                        Save
                                    </button>
                                </div>
                                
                                <p className="text-center fs-5">
                                    
                                </p>
                            </Form>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-5">
                    <h3>Book Data</h3>
      <Table striped bordered hover className="w-50">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book Name</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((item)=>{
            return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.book_name}</td>
          </tr>
            )
          })}
        </tbody>
      </Table>
                    </div>
            </div>

            
        </div>
    </>
  )
}

export default Add_Stud
