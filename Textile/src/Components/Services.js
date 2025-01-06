import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import "../Styles/Services.css";

export default function Services() {
  return (
    <>
      <div className="outer-container">
        {/* <section className="image-section">
          <h1 className="image-content">
            <p>Discover The </p>
            <p> Best Tailored Pieces</p>
          </h1>
        </section> */}

        <section className="heading">
          <h3 className="heading-head">Choose your fashion</h3>
          <p className="heading-para">
            Your choice, we'll design & stitch, just for you
          </p>
        </section>
        <section className="services-grid">
          <div className="service-item">
            <h3 className="1">Trousers</h3>
          </div>

          <div className="service-item">
            <h3>Shirts</h3>
          </div>

          <div className="service-item">
            <h3>Kurti</h3>
          </div>

          <div className="service-item">
            <h3>Salwar Kameez</h3>
          </div>
          <div className="service-item">
            <h3 className="1">Lehnga</h3>
          </div>

          <div className="service-item">
            <h3>Dress</h3>
          </div>

          <div className="service-item">
            <h3>Top</h3>
          </div>
         
          
          <div className="service-item">
            <h3>Skirts</h3>
          </div> 

         
            <div className="service-item">
              <h3>Blouses</h3>
            </div>
         

          <div className="service-item">
            <h3>Stiched Sarees</h3>
          </div>
          <div className="service-item">
            <h3>Jackets</h3>
          </div>
          <div className="service-item">
            <h3>Formal suit</h3>
          </div>
        </section>

        {/* The next section  */}
        <section>
          <hr />
          <div className="info-container">
            {/* starts  kurti*/}
            <div>
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
                  <strong>Elegant Office Wear Kurtis : </strong>Look
                  professional and chic with our selection of office wear
                  kurtis, ideal for formal settings or meetings.
                </li>
                <li className="info-second">
                  <strong>Festive Embroidered Kurtis :</strong> Celebrate
                  special occasions with our festive embroidered kurtis,
                  featuring intricate embellishments and traditional motifs.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start lehnga */}
            <div>
              <h1 className="info-head">Lehenga</h1>
              <p className="info-first">
                Experience opulence and grace with our Lehenga collection,
                celebrating tradition with a modern twist. From intricate
                embroidery to contemporary designs, each piece promises elegance
                for weddings, festivals, or any special occasion.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Traditional Embroidered Lehengas : </strong> Exude
                  regal charm with intricately embroidered lehengas, perfect for
                  weddings and special celebrations.
                </li>
                <li className="info-second">
                  <strong>Contemporary Fusion Lehengas : </strong>Embrace modern
                  trends with fusion lehengas featuring unique cuts and
                  innovative designs.
                </li>
                <li className="info-second">
                  <strong>Festive Ready-to-wear Lehengas :</strong> Get
                  festival-ready with our selection of vibrant and colorful
                  lehengas, ideal for traditional gatherings.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start salwar kamiz */}
            <div>
              <h1 className="info-head">Salwar Kamiz</h1>
              <p className="info-first">
                Embrace the timeless elegance of the Salwar Kameez, a cultural
                masterpiece cherished for centuries. Our curated collection
                celebrates tradition with contemporary style, offering allure
                and sophistication for every occasion.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Classic Salwar Kameez Sets : </strong>Experience
                  traditional elegance with our collection of classic salwar
                  kameez sets, perfect for cultural events and gatherings
                </li>
                <li className="info-second">
                  <strong>Modern Indo-Western Sets : </strong>Embrace
                  contemporary style with our range of Indo-western salwar
                  kameez sets, offering a fusion of traditional and modern
                  elements.
                </li>
                <li className="info-second">
                  <strong>Festive Designer Salwar Kameez : </strong> Make a
                  statement with our designer salwar kameez sets featuring
                  intricate embellishments and exquisite craftsmanship.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start Top wear */}
            <div>
              <h1 className="info-head">Top Wear</h1>
              <p className="info-first">
                From classic tees to sophisticated blouses, our topwear
                collection offers versatility for every occasion. Embrace
                comfort and elegance in each piece, expressing your unique
                fashion sense with ease.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Casual Tees : </strong> Effortlessly chic for everyday
                  wear, available in a variety of colors and prints.
                </li>
                <li className="info-second">
                  <strong>Elegant Blouses : </strong>Elevate your look with
                  sophisticated tops suitable for both work and leisure.
                </li>
                <li className="info-second">
                  <strong>Statement Tops : </strong> Turn heads with
                  fashion-forward tops featuring trendy designs and bold
                  details.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start Jacket */}
            <div>
              <h1 className="info-head">Jackets</h1>
              <p className="info-first">
                Embrace style and functionality with our curated jacket
                collection. From classic to contemporary designs, each piece
                offers warmth and sophistication for any weather. Elevate your
                wardrobe with enduring craftsmanship and undeniable flair.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Classic Blazers :</strong>Tailored for a polished
                  look, perfect for formal occasions or professional settings.
                </li>
                <li className="info-second">
                  <strong>Trendy Bombers :</strong>Stay stylish and cozy with
                  fashion-forward bomber jackets, ideal for casual outings..
                </li>
                <li className="info-second">
                  <strong>Functional Outerwear :</strong> Brave any weather with
                  our selection of practical yet stylish coats and parkas.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start Skirt */}
            <div>
              <h1 className="info-head">Skirts</h1>
              <p className="info-first">
                Elevate your style with our enchanting skirt collection,
                designed to make a statement on any occasion. From graceful
                maxis to playful minis, explore timeless elegance and modern
                sophistication in every piece.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Flowing Maxi Skirts :</strong> Embrace bohemian charm
                  with elegant maxi skirts, perfect for a relaxed yet stylish
                  look
                </li>
                <li className="info-second">
                  <strong>Flirty Minis :</strong> Show off your legs with
                  playful mini skirts, ideal for daytime adventures or nights
                  out.
                </li>
                <li className="info-second">
                  <strong>Classic Pencil Skirts :</strong>Effortlessly chic for
                  the office or evenings out, offering a sleek and sophisticated
                  silhouette.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start Trouser */}
            <div>
              <h1 className="info-head">Trouser</h1>
              <p className="info-first">
                Discover the perfect blend of comfort and style in our
                meticulously curated trouser collection. From timeless classics
                to contemporary trends, each pair promises versatility and
                durability for every lifestyle.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Tailored Pants :</strong>Look sharp and polished with
                  our selection of classic tailored trousers, perfect for formal
                  occasions.
                </li>
                <li className="info-second">
                  <strong>Casual Chinos :</strong>Stay comfortable and stylish
                  with versatile chino pants, ideal for everyday wear.
                </li>
                <li className="info-second">
                  <strong>Statement Bottoms :</strong> Make a fashion statement
                  with trendy pants featuring bold patterns or unique cuts.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start Dress */}
            <div>
              <h1 className="info-head">Dresses</h1>
              <p className="info-first">
                Dive into our stunning dress collection, meticulously designed
                to make a statement Explore a spectrum of styles, colors, and
                fabrics tailored to elevate your wardrobe for any occasion.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Chic Cocktail Dresses :</strong>Turn heads at parties
                  and events with our selection of sophisticated cocktail
                  dresses.
                </li>
                <li className="info-second">
                  <strong>Elegant Evening Gowns :</strong>Make a grand entrance
                  with stunning evening gowns, perfect for formal occasions.
                </li>
                <li className="info-second">
                  <strong>Casual Day Dresses :</strong>Stay effortlessly stylish
                  with our collection of relaxed yet chic day dresses, ideal for
                  everyday wear.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* start shirt */}
            <div>
              <h1 className="info-head">Shirts</h1>
              <p className="info-first">
                Explore timeless elegance with our women's shirt collection,
                offering sophistication and versatility for any occasion.
                Elevate your wardrobe effortlessly with impeccable craftsmanship
                and unmatched style.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Classic Shirts :</strong>Timeless designs perfect for
                  formal occasions or office wear.
                </li>
                <li className="info-second">
                  <strong>Casual Shirts :</strong>Relaxed styles ideal for
                  everyday comfort and leisure.
                </li>
                <li className="info-second">
                  <strong>Statement Shirts :</strong> Bold patterns or prints to
                  express individuality and personality.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
            {/* starts  blouse*/}
            <div>
              <h1 className="info-head" id="blouses">
                Blouses
              </h1>
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
            </div>
            <hr />
            {/* ends */}
            {/* start stiched sarees */}
            <div>
              <h1 className="info-head">Stiched Sarees</h1>
              <p className="info-first">
                Experience the elegance of traditional sarees with a modern
                twist in our ready-to-wear saree collection. Perfect for those
                who love the timeless charm of sarees but prefer hassle-free
                dressing, our collection offers effortless style for any event.
              </p>
              <ul className="info-second-container">
                <li className="info-second">
                  <strong>Classic Draped Sarees : </strong>Pre-draped sarees for
                  a flawless look without the fuss,ideal for weddings and
                  special occasions.
                </li>
                <li className="info-second">
                  <strong>Contemporary Ready-to-wear Sarees :</strong>Modern
                  interpretations of traditional Modern interpretations of
                  traditional.
                </li>
                <li className="info-second">
                  <strong>Festive Sarees :</strong>Vibrant and colorful sarees
                  with intricate embellishments, perfect for celebrating
                  festivals and cultural events.
                </li>
              </ul>
            </div>
            <hr />
            {/* ends */}
          </div>
          <hr />
        </section>
        <section className="image-section" >
          {/* image */}
        </section>
      </div>  
    </>
  );
}
