import React from 'react';
import "../Styles/About.css";

function About() {
    // const [myStyle, setmyStyle] = useState(
    // {
    //     color: 'white',
    //     backgroundColor: 'black'
    //     })
    
    // const [btntext, setbtntext] = useState(
    //     "Enable Dark Mode"
    // )
    
   
      
    
  return (
    <div>
      {/* <h1>About us</h1> */}
      <div class="about-container">
        <h1>About Dress-up</h1>
        <p class="intro">
          Welcome to Dress-up, where fashion meets craftsmanship. We are a
          dedicated team of experienced fashion designers and skilled tailors
          committed to bringing your unique style to life.
        </p>
        <div className="image-div">
             {/* image */}
        </div>
        <div class="mission-vision">
          <div class="mission">
            <h2 class="mission-heading">Our Mission</h2>
            <p>
              Our mission is to empower individuals through custom-tailored
              fashion, providing garments that are not only well-fitted but also
              a true reflection of their personality and style. At Dress-up, we
              believe that every stitch matters, and we strive to deliver
              unparalleled quality and attention to detail in every piece we
              create.
            </p>
          </div>
          <div class="vision">
            <h2 class="vision-heading">Our Vision</h2>
            <p>
              We envision a world where everyone can express their unique
              identity through bespoke fashion. Our vision is to lead the
              industry in innovation, sustainability, and customer satisfaction,
              setting new standards for what custom tailoring and fashion design
              can achieve.
            </p>
          </div>
        </div>

        {/* <section>
          <hr />
         
          <div className="info-container">
            <h1 className="info-head">Blouse</h1>
            <p className="info-first">
              Discover timeless elegance in our blouse collection, offering
              classic, contemporary, and statement pieces for every occasion.
            </p>
            <ul className="info-second-container">
              <li className="info-second">
                <strong>Traditional Blouses : </strong>Adorned with intricate
                embroidery and embellishments, perfect for weddings and
                festivals.
              </li>
              <li className="info-second">
                <strong>Contemporary Blouses : </strong>Featuring sleek
                silhouettes and modern detailing, ideal for casual outings or
                evening events.
              </li>
              <li className="info-second">
                <strong>Statement Blouses :</strong> Make a bold fashion
                statement with unique patterns and eye-catching details.
              </li>
            </ul>
            <hr />
        
            <h1 className="info-head">Kurti</h1>
            <p className="info-first">
              Experience opulence and grace with our Lehenga collection,
              celebrating tradition with a modern twist. From intricate
              embroidery to contemporary designs, each piece promises elegance
              for weddings, festivals, or any special occasion.
            </p>
            <ul className="info-second-container">
              <li className="info-second">
                <strong>Everyday Casual Kurtis :</strong> Stay comfortable and
                stylish with our range of everyday casual kurtis, perfect for
                running errands or relaxing at home.
              </li>
              <li className="info-second">
                <strong>Elegant Office Wear Kurtis : </strong>Look professional
                and chic with our selection of office wear kurtis, ideal for
                formal settings or meetings.
              </li>
              <li className="info-second">
                <strong>Festive Embroidered Kurtis :</strong> Celebrate special
                occasions with our festive embroidered kurtis, featuring
                intricate embellishments and traditional motifs.
              </li>
            </ul>
            <hr />
            
          </div>
          <hr />
        </section> */}

        <section class="services">
          <div class="container">
            <div class="service-card">
              <h3>Custom Tailoring</h3>
              <p>
                Get garments tailored to your exact measurements and
                preferences. Our expert tailors ensure a perfect fit every time.
              </p>
            </div>
            <div class="service-card">
              <h3>Design Consultation</h3>
              <p>
                Work with our fashion designers to bring your vision to life.
                Whether it's for a special event or everyday wear, we create
                designs that suit you.
              </p>
            </div>
            <div class="service-card">
              <h3>Alterations</h3>
              <p>
                Need adjustments? Our alteration services are fast and precise,
                making sure your clothes fit just right.
              </p>
            </div>
            <div class="service-card">
              <h3>Wardrobe Styling</h3>
              <p>
                Our stylists help you put together outfits that reflect your
                personality and lifestyle. Perfect for personal shopping or a
                wardrobe refresh.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
