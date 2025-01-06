import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

export default function Home() {
  const [bodyType, setBodyType] = useState(
    "Submit your measurements to find out your body type."
  );
  const [suggestions, setSuggestions] = useState(
    "Clothing suggestions will appear here."
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const bust = parseFloat(e.target.bust.value);
    const waist = parseFloat(e.target.waist.value);
    const hips = parseFloat(e.target.hips.value);

    let calculatedBodyType = "";
    let clothingSuggestions = "";

    if (bust > hips && bust > waist) {
      calculatedBodyType = "Inverted Triangle";
      clothingSuggestions =
        "Try wearing A-line skirts, wide-leg pants, and V-neck tops to balance your silhouette.";
    } else if (hips > bust && hips > waist) {
      calculatedBodyType = "Triangle";
      clothingSuggestions =
        "Opt for tops with wide necklines, structured jackets, and high-waisted skirts to accentuate your waist.";
    } else if (waist < bust && waist < hips) {
      calculatedBodyType = "Hourglass";
      clothingSuggestions =
        "Fitted dresses, belted outfits, and wrap tops will enhance your natural curves.";
    } else {
      calculatedBodyType = "Rectangle";
      clothingSuggestions =
        "Create curves with peplum tops, ruffled dresses, and layered outfits.";
    }

    setBodyType(`Your body type is: ${calculatedBodyType}`);
    setSuggestions(clothingSuggestions);
  };

  return (
    <div className="outer-container">
      <section className="first-setion-image">
        <div className="background-container">
          <div className="content">
            <h1>Wear Your Confidence</h1>
            <p>Exclusive designs tailored to elevate your style</p>
            <Link to="/services">
              <li className="explore-link ">Explore now &#8594;</li>
            </Link>
          </div>
        </div>
        {/* <div></div> */}
      </section>

      <section className="second-section">
        <div class="steps-container">
          <h1>Design Your Dream Outfit in 4 Easy Steps</h1>
          <div class="steps-grid">
            <div class="step-item">
              <h2>Categories</h2>
              <p>
                Step 1: Select the garment you want or upload your own design.
              </p>
            </div>
            <div class="step-item">
              <h2>Designer</h2>
              <p>
                Step 2: An assigned designer will work on your requirements.
              </p>
            </div>
            <div class="step-item">
              <h2>Best Designs</h2>
              <p>Step 3: Review the estimate and make the payment.</p>
            </div>
            <div class="step-item">
              <h2>Fashion Designer</h2>
              <p>Step 4: Your custom garment will be delivered to your home.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="third-section">
        <section className="form-outer-section">
          <div className="form-section">
            <form id="bodyMeasurementForm" onSubmit={handleSubmit}>
              <h2 className="measurement-form-head">
                Fill This To Get your Body type
              </h2>

              <label className="measurement-form-label" htmlFor="bust">
                Bust:
              </label>
              <input
                className="measurement-form-input"
                type="number"
                id="bust"
                name="bust"
                required
              />
              <br />
              <label className="measurement-form-label-waist" htmlFor="waist">
                Waist:
              </label>
              <input
                className="measurement-form-input"
                type="number"
                id="waist"
                name="waist"
                required
              />
              <br />
              <label className="measurement-form-label" htmlFor="hips">
                Hips:
              </label>
              <input
                className="measurement-form-input"
                type="number"
                id="hips"
                name="hips"
                required
              />
              <br />
              <button className="measurement-form-button" type="submit">
                Submit
              </button>

              <section className="result-section">
                <div id="bodyTypeResult">
                  <h3>{bodyType}</h3>
                  <p>{suggestions}</p>
                </div>
              </section>
            </form>
          </div>
          {/* <div className="image-form-outer-section">
            Find Your Body Type
            <section className="image-form-outer-section-image"></section>
          </div> */}
        </section>
      </section>

      <section className="forth-section">
        <div className="forth-section-bg"></div>
        {/* b background */}
      </section>

      <section className="five-section">
        <h1 className="five-section-h1">
          Top 5 Colours to Always Have in Your Wardrobe
        </h1>
        <p className="five-section-p">
          The colours that suit your body structure should be one of your top
          priorities when keeping up with fashion. A dress might look better in
          particular hues, and some can even be more inviting. As the years go
          by, some colours dominate the trend more than others.
        </p>
        <p className="five-section-p">
          While classic shades like black, white, and blue will hold a special
          place in fashion, certain vibrant hues significantly influence the
          fashion world. Moreover, colour can reveal a lot about you and even
          stimulate specific emotions in others. Therefore, it is essential to
          select a colour palette for your wardrobe.
        </p>

        <h3 className="five-section-h3">Create Your Wardrobe Colour Theme</h3>
        <p className="five-section-p">
          Building your wardrobe around cool shades like white, blue, grey, and
          black or warm hues like coral, ivory and crimson is beneficial.
          Alternately, you may combine all primary colours to produce a simple
          colour scheme.
        </p>
        <p className="five-section-p">
          Choose your colours and get the clothing pieces and whip up something
          gorgeous. You can get your outfits custom-tailored locally or use
          custom tailoring online services like CloudTailor. If you enjoy
          colour, you can also aim to categorise various colours, such as bright
          hues, to complement one another.
        </p>
        <h3 className="five-section-h3">
          Colours You Should Have in Your Wardrobe
        </h3>
        <br/>
        <h5 className="five-section-h5">Black</h5>
        <p className="five-section-p">
          Black indeed goes with everything, so you don't need to be worried
          about whether your outfit works. For the most part, you can never go
          wrong with a black statement piece.
        </p>
        <p className="five-section-p">
          When you need to look good but do not have the time, wearing black
          attire can be helpful. A solid black top with a round neck or a v-neck
          will make you look chic with minimal effort put into the outfit and
          pairing it with the right jewellery.
        </p>
        <p className="five-section-p">
          You can use black organza or chiffon to get a fantastic black shrug
          custom-tailored from a custom tailoring online service which you can
          slip on over camisoles or spaghetti tops.
        </p>
        <p className="five-section-p">
          A solid black boat neck or high-neck Kurti will turn heads wherever
          you go. If you are getting help from a custom tailor or a custom
          tailor app, ask them to experiment with the necklines by using mirror
          work or embroidery.
        </p>

        <h5 className="five-section-h5">Beige</h5>
        <p className="five-section-p">
          A pale cream colour, an off-tan tint, or an incredibly light
          yellowish-brown colour are all ways to characterise beige. A lovely,
          well-tailored beige jacket can make a plain dress more elegant.{" "}
        </p>
        <p className="five-section-p">
          Coupled with a light-coloured T-shirt or top in the summertime, they
          make you seem stylish. Likewise, they can offer warmth and elegance in
          winter when paired with dark-toned sweaters or knits.
        </p>
        <p className="five-section-p">
          You should own a well-fitted pair of beige trousers or formal Cuban
          pants. Get them custom-tailored from custom tailoring online services
          for the perfect fit and design. Try not to add belt hoops to dressy
          pants. Instead, ask your tailor to put buttons inside.
        </p>

        <h5 className="five-section-h5">Coral</h5>
        <p className="five-section-p">
          This colour was named Pantone's colour of the year in 2019, and it is
          still going strong. The colour itself is exciting and brilliant while
          also being soothing and enticing. It can impart a sense of comfort and
          joy. It is between pink and orange in colour and has a gold undertone.
        </p>
        <p className="five-section-p">
          This gold undertone makes it the best colour choice for beautiful
          lehengas, long skirts and crop tops. Imagine how good a coral
          off-shoulder crop top would look on you on a pleasant summer day. Get
          it custom tailored however you want with a custom tailor app.
        </p>
        <p className="five-section-p">
          Floral boho-style maxi dresses in coral are just going to look
          exquisite. Pair it with the right jewellery and sandals, and you have
          a masterpiece! Get a flared long skirt custom-tailored out of
          coral-coloured Chanderi or zari cloth material and change the fashion
          game in traditional events. This colour will enhance your skin tone
          and make you stand out amongst the crowd.
        </p>

        <h5 className="five-section-h5">Blue</h5>
        <p className="five-section-p">
          Blue is a colour that will never go out of style. And the number of
          shades you can work with when it comes to blue is mindblowing. Combine
          tweed with linen, silk and cashmere, and denim with silk. You can't
          stop experimenting with new and fascinating ways to wear blue.
        </p>
        <p className="five-section-p">
          The choices are immense, from jumpsuits to tailored suits and dresses
          to jean shorts. Baby blue formal pants, blazers or tops can give the
          most visually pleasing business casual look. You will turn heads and
          get compliments with this aesthetic look.{" "}
        </p>
        <p className="five-section-p">
          Go for peacock blue or teal colour for traditional wear. You can get
          them custom-tailored from a custom tailor app from Banarasi or
          georgette cloth material. You can pair it with oxidised jewellery and
          pretty heels to complete your look.{" "}
        </p>

        <h5 className="five-section-h5">White</h5>
        <p className="five-section-p">
          An all-white outfit is an ideal way to appreciate spring and early
          summer's enthusiasm, heat, and brightness and the comforting, fire-lit
          nights of fall and winter. You can wear your bright whites or switch
          to something more balanced with off-whites and creams.
        </p>
        <p className="five-section-p">
          A white ballerina dress or midi dress is the ultimate pick for any
          occasion, from a summer formal dinner to a stroll in the park, thanks
          to its simplicity and elegance. When everyone else is wearing pants, a
          simple skirt is a fantastic option for those who prefer skirts and
          dresses. Thanks to the skater skirt and cotton fabric, you can
          maintain your casual look while still dressing the way you like it.
        </p>
        <p className="five-section-p">
          Analyse the shades that you naturally choose over others as a first
          step. Next, check your clothes to see if there are any colours you
          seem to wear frequently and note them down. Sometimes, the colour or
          pattern you like doesn't quite go with the general colour theme.{" "}
        </p>
        <p className="five-section-p">
          Also, consider the prints and textures you would like in your
          clothing. Of course, solids are the most versatile, but combining
          designs and textures can add intrigue to your outfit. Styling your
          clothes would be much simpler if you could find prints that go well
          together.
        </p>
      </section>

      {/* <div className="background-container">
          <div className="content">
            <h1>Wear Your Confidence</h1>
            <p>Exclusive designs tailored to elevate your style</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
