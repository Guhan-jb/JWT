import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import '../Assets/CSS/HomePage.css';
import '../Assets/CSS/PartnerLogoSlider.css';
import PartnerLogosSlider from './PartnerLogosSlider'; // Import the PartnerLogosSlider component
import Loader from './Loader'; // Import the Loader component
import productsData from '../Components/productsList.json'; // Import your product data
import { useSelector,useDispatch} from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { addToCart } from '../redux/cartSlice';
import {ToastContainer,toast} from 'react-toastify';
import sportsProducts from '../Components/productsList.json';
const HomePage = () => {
  const Email = useSelector(selectUser);
  const dispatch=useDispatch()
  const addTocart = (pid) => {
    const product = sportsProducts.find((p) => p.pid === pid);
    if (Email.email) {
      dispatch(addToCart(product)); // Dispatch addToCart with the product object
      toast.success('Added to cart');
    } else {
      toast.error('Login to add item to cart');
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

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  return (
    <div className='container'>
      {loading ? (
        <Loader /> // Display the loader while loading is true
      ) : (
        <>
          <h1 className="mt-5 mb-4">Welcome to Sports Emporium</h1>

          {/* Create three carousels with multiple cards per slide */}
          {[0, 1, 2].map((carouselIndex) => (
            <Carousel key={carouselIndex} className="mb-5">
              {chunkArray(productsData.slice(carouselIndex * 6, (carouselIndex + 1) * 6), 3).map((chunk, rowIndex) => (
                <Carousel.Item key={rowIndex}>
                  <Row>
                    {chunk.map((product) => (
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
                </Carousel.Item>
              ))}
            </Carousel>
          ))}

          {/* Logo Slider */}
          <PartnerLogosSlider />
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
        </>
      )}
    </div>
  );
};

export default HomePage;
