import React, {useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import '../index.css';


const NavBar = () => {
    // const activeNavlink = ({isActive})=>{
    //     return{
    //         fontweight:isActive ? 'bold':'normal',
    //         // textDecoration:isActive ? 'none':'undeline',
    //     }
    // const [acKey, setKey] = useState(window.localStorage.getItem('TUTORIAL'));
// console.log(acKey)
    // useEffect(()=>{
    //     const data = window.localStorage.getItem('TUTORIAL');
    //     console.log((data));
    //     setKey(data);
    // },[])
    // useEffect(()=>{
    //     // console.log(acKey)
    //     window.localStorage.setItem('TUTORIAL',JSON.parse(acKey))
    // },[acKey])
  // }



const [logout,setLogout] = useState();
const navigate = useNavigate();

useEffect(()=>{
  const data = window.localStorage.getItem('login');
  console.log(data)
  if( data != null) {
    setLogout(JSON.stringify(data))
     navigate('/login')
  }
},[])
useEffect(()=>{
  console.log(logout);
window.localStorage.setItem('login',JSON.stringify(logout))
},[logout])

useEffect(()=>{
  if(logout === false){
  let login = localStorage.getItem('login',false);
  if(!login){
      navigate('/login');
  }
}
})
const location = useLocation();

// useEffect(()=>{
//     // console.log(location)
// },[location])

  return (
    <>
        <Navbar bg="light" style={{height:"42px"}} className='sticky-top' >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav variant="tabs"  as="ul" className="me-auto">
            <Nav.Item as="li">
            <Nav.Link className={location.pathname==="/"? "active":""} as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link className={location.pathname==="/login"? "active":""} as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link className={location.pathname==="/submitparams"? "active":""} as={Link} to="/submitparams">Params</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link className={location.pathname==="/nestedroute"? "active":""} as={Link} to="/nestedroute">Nested Route </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link className={location.pathname==="/StateObjectWithHooks"? "active":""} as={Link} to="/StateObjectWithHooks">State object with hook </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link onClick={()=>setLogout(false)}>LogOut</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
        {/* <Navbar className='sticky-top' >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav activeKey={acKey} onSelect={(k) => setKey(k)} variant="tabs" as="ul" className="me-auto">
            <Nav.Item as="li">
            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="2" as={Link} to="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="3" as={Link} to="/submitparams">Params</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  )
}

export default NavBar
