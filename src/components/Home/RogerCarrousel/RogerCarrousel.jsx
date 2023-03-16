import Carousel from 'react-bootstrap/Carousel';

function RogerCarrousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="../img/carrousel01.jpg"
          alt="Loreal Men Expert"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carrousel02.jpg"
          alt="Nivea Men"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carrousel03.jpg"
          alt="Veet Men"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carrousel04.jpg"
          alt="Philips One Blade"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/carrousel05.jpg"
          alt="Braum CruzerBody"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default RogerCarrousel;