import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import sportsProducts from '../Components/productsList.json'; // Import your product data
import { useSelector,useDispatch } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { toast } from 'react-toastify';
import { addToCart } from '../redux/cartSlice';
import { ToastContainer } from 'react-toastify'
import { useState,useEffect } from 'react';
import Loader from './Loader';
const SearchPage = () => {
  const dispatch = useDispatch();
  const searchTerm = localStorage.getItem('search');

  const filteredProducts = sportsProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
 const Email=useSelector(selectUser)
  const addTocart = (pid) => {
    const product = sportsProducts.find((p) => p.pid === pid);
    if (Email.email) {
      dispatch(addToCart(product)); // Dispatch addToCart with the product object
      toast.success('Added to cart');
    } else {
      toast.error('Login to add item to cart!!');
    }
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);
  return (
    
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <Loader /> // Display the loader while loading is true
      ) : (
        <>

      <Row style={{ justifyContent: 'center', alignItems: 'center' }} >
        {filteredProducts.map((product) => (
           <Col md={4} key={product.pid}>
           <Card className="products-card">
             <Card.Img
               variant="top"
               src={process.env.PUBLIC_URL + product.productImage}
               alt={product.productName}
             />
             <Card.Body>
               <Card.Title>{product.productName}</Card.Title>
               <Card.Text>{product.description}</Card.Text>
               <button className="shopnow-btn" onClick={() => addTocart(product.pid)}>Shop now</button>
             </Card.Body>
           </Card>
         </Col>
        ))}
      </Row>
        </>
      )
    }
    <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default SearchPage;
