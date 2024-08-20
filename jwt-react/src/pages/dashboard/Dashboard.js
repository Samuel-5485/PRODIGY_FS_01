import React, { useState, useEffect} from 'react'
import { Row, Col, Table, Container } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';


const Dashboard = () => {

  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        const response = await fetch("http://localhost:3000/api/users", {
              headers: {
                Authorization: `Bearer ${token}`,
               
              }
          });
          const result = await response.json();
          console.log(result);
          setUsers(Array.isArray(result) ? result : []);
      }catch(error){
        console.log(error);
      }
    };

    if (token){ 
      fetchUsers();
     } else
       navigate("/login");
  }, [token, navigate]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
         <h1 className='text-center'>Dashboard</h1>
         <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
    {(Array.isArray(users) ? users : []).map((user)=>(
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
          </tbody>
         </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
