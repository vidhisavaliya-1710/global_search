import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { addbook } from './Global/apiservice';


function Add_data() {
    const [bookName, setBookName] = useState(''); 

    const handleSave = (e) => {
        e.preventDefault(); // Prevent page reload
        if (bookName.trim()) {
          addbook(bookName);
          setBookName('') // Pass bookName to addbook
        } else {
          alert('Please enter a valid book name!');
        }
      };

  return (
    <>

         <div className="container">
                <div className="row signup">
                    <div className="col-lg-6 signup-sec p-4 ps-5 pe-5 h-75">
                        <div>
                            <h3 className="text-center mb-3">Book information</h3>
                            <Form>
                            <FloatingLabel controlId="floatingInput" label="Book Name" className="mb-3 form_sec">
                                    <Form.Control
                                        type="text"
                                        placeholder="Book Name"
                                        name="bookName"
                                        className="form_sec"
                                        value={bookName} // Bind input to state
                                        onChange={(e) => setBookName(e.target.value)}
                                    />
                                    
                                </FloatingLabel>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="border-0 fs-5 mt-2 p-1 ps-3 pe-3 text-white btns rounded" onClick={handleSave}>
                                        Save
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                   
                </div>
            </div>
    </>
  )
}

export default Add_data
