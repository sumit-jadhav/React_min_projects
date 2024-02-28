import Carousel from "react-bootstrap/Carousel"
import "./Car.css"
function NoTransitionExample() {
  const imageLink = [
    "https://media.cnn.com/api/v1/images/stellar/prod/230915082701-04-india-ram-mandir-rebuild.jpg?c=16x9&q=h_833,w_1480,c_fill",
    "https://www.jagranimages.com/images/newimg/25012024/25_01_2024-ram_mandir__1_23637843.webp",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
  ]
  return (
    <div className="cara">
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 image "
            src={imageLink[0]} // Replace with your image URL
          />
          <Carousel.Caption>
            <h3>Ram Mandir</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={imageLink[1]} // Replace with your image URL
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image"
            src={imageLink[2]} // Replace with your image URL
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default NoTransitionExample
