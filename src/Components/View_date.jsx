import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { searchStudents } from './Global/apiservice';
import dayjs from 'dayjs';

function View_date() {
  const [allStudentData, setAllStudentData] = useState([]); // Full student data
  const [filteredStudentData, setFilteredStudentData] = useState([]); // Filtered student data
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');  // Search term

  useEffect(() => {
    // Fetch all data on component mount
    fetchAllData();
  }, []);

  // Function to fetch data
  const fetchAllData = async () => {
    try {
      const students = await searchStudents({}); // Fetch all students
      setAllStudentData(students); // Store all students
      setFilteredStudentData(students); // Initially display all students

      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to filter data
  const filterData = (searchText,date) => {
    const lowercasedText = searchText.toLowerCase();

    // Filter students
    const filteredStudents = allStudentData.filter(
      (student) =>{
        const matchesSearch =
      student.firstName.toLowerCase().includes(lowercasedText) ||
      student.lastName.toLowerCase().includes(lowercasedText) ||
      (student.Book && student.Book.book_name.toLowerCase().includes(lowercasedText));

      const matchesDate =
        !date || dayjs(student.book_issue_date).isSame(date, 'day') || dayjs(student.book_submission_date).isSame(date, 'day');

      return matchesSearch && matchesDate;

  });
    setFilteredStudentData(filteredStudents);
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);
    filterData(searchText, selectedDate);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    
    filterData(searchTerm, date); // Filter by search term and selected date
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by Name or Book"
          className="w-50 search_box fs-5"
          value={searchTerm}
          onChange={handleSearchChange}
        />
         <input
          type="date"
          className="cal"
          onChange={handleDateChange}
        />
      </div>


      {/* Student Data Table */}
      <div className="mt-3 mb-5">
        <h3>Student Data</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Book Name</th>
              <th>Book Issue Date</th>
              <th>Book Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudentData.length > 0 ? (
              filteredStudentData.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.Book?.book_name || 'N/A'}</td>
                  <td>{dayjs(student.book_issue_date).format('YYYY-MM-DD')}</td>
                  <td>{ dayjs(student.book_submission_date).format('YYYY-MM-DD')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No students found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

     
    </>
  );
}

export default View_date;
