import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/giftHamperCo_Logo.jpg';
import Home_food from '../assets/images/Home_left.webp';
import sec2i1 from '../assets/images/sec2i1.webp';
import sec2i2 from '../assets/images/sec2i2.webp';
import sec2i3 from '../assets/images/sec2i3.webp';
import sec3i1 from '../assets/images/sec3i1.webp';
import sec3i2 from '../assets/images/sec3i2.webp';
import sec3i3 from '../assets/images/sec3i3.webp';
import sec3i4 from '../assets/images/sec3i4.webp';
import footerlogo from '../assets/images/footerlogo.webp';
import footerfb from '../assets/images/footerfb.webp';
import footerinsta from '../assets/images/footerinsta.webp';
import footerpintrest from '../assets/images/footerpintrest.webp';
import footertwitter from '../assets/images/footertwitter.webp';
import homeimg1  from '../assets/images/gHMAnniversery1.jpg';
import homeimg2 from '../assets/images/BirthdayHamper.webp';
import homeimg3  from '../assets/images/Perfectgift.webp';
import homeimg4  from '../assets/images/SurpriselovedOnes.png';
import homeimg5  from '../assets/images/anyOccasion.webp';
import sendicon from '../assets/images/send to icon.png';
import nominorder from '../assets/images/noMinOrder1.png';
const Home = () => {
  const que = ['Marriage Anniversary?','Birthday Event?','Looking for a Perfect Gift?','Surprise loved ones?','Any special occasion?'];
  const images = [homeimg1,homeimg2,homeimg3,homeimg4,homeimg5];
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * que.length)),
      2000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
    <div className='Home1'>
      <div className='Home_left'>
        <div className='Home_Header'>
          <div className='navbar'>
            <img className='Home_logo' src={logo} alt="No png found"/>
            <div className='Head_account'>
            <Link to="/Login" className='Head_login'>Login</Link>
            <Link to="/Register" className='Head_sign'>Register</Link>
            </div>
          </div>
          <h1 className='ques'>
            {que[number]}
          </h1>
          <h3 className='head2food'>
          Customize and order perfect hamper for any occasion
          </h3>
          <div className='searchbox'>
            <form>
              <input type="text" placeholder='Enter Occasion Name' className='searchbtn'>
              </input>
            </form>
            <button className='Homebtn'>Choose occasion</button>
            <button className='Homebtn2'>FIND GIFT</button>
          </div>
          <p className='head2food'>POPULAR CITIES IN INDIA</p>
          <div className='listbox'>
            <a className='city' href="#">Ahmedabad</a>
            <a className='city' href='#'>Bangalore</a>
            <a className='city' href='#'>Chennai</a>
            <a className='city' href='#'>Delhi</a>
            <a className='city' href='#'>Hyderabad</a>
            <a className='city' href='#'>Kolkata</a>
            <a className='city' href='#'>& more.</a>
          </div>
        </div>
      </div>
      <div className='Home_right'>
         <img src={images[number]} alt="No png found" className='Home_food'/>
      </div>
    </div>
    <div className="home2">
    <div className="home2li">
      <div className="home2items">
        <img src={nominorder} alt="" />
      </div>
      <div className="home2items">
        dfagf
      </div>
      <div className="home2items">
        dfagf
      </div>
      <div className="home2items">
        dfagf
      </div>
    </div>
    </div>
    {/* Edit */}
    <div className='portfolio'>
	<div style={{padding : '50px 10%'}}>
		<h1 className="portfolio_head">Curated Collections</h1>
		<div className="work-list">
			<div className="work">
				<img src={homeimg1} alt="No png found"/>
				<div className="layer">
					<h2>BIRTHDAY SOIREE</h2>
					<p>Making floral wishes come true</p>
						<a href="#">
              {/* <i className="fas fa-external-link-alt"></i> */}
              <img src={sendicon} alt="send to" />
              </a>
				</div>
			</div>
      {/* edit2 */}
      <div className="work">
				<img src={homeimg1} alt="No png found"/>
				<div className="layer">
					<h2>BEST WISHES</h2>
					<p>Use the language of gift hampers to send your love</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
      <div className="work">
				<img src={homeimg1} alt="No png found"/>
				<div className="layer">
					<h2>ANNIVERSARY AMORE</h2>
					<p>As special as the bond that blooms</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
      <div className="work">
				<img src={homeimg1} alt="No png found"/>
				<div className="layer">
					<h2>BIRTHDAY SOIREE</h2>
					<p>Making floral wishes come true</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
      <div className="work">
				<img src={homeimg1} alt="No png found"/>
				<div className="layer">
					<h2>BEST WISHES</h2>
					<p>Use the language of gift hampers to send your love</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
      <div className="work">
				<img src={homeimg1} alt="No png found"/>
				<div className="layer">
					<h2>PROPOSAL</h2>
					<p>Glorious arrangement o express your gesture</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
      {/* edit2ends */}
			<div className="work">
				<img src={homeimg2} alt="No png found"/>
				<div className="layer">
					<h2>ANNIVERSARY AMORE</h2>
					<p>As special as the bond that blooms</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
			<div className="work">
				<img src={homeimg3} alt="No png found"/>
				<div className="layer">
					<h2>BEST WISHES</h2>
					<p>Use the language of gift hampers to send your love</p>
						<a href="#"><img src={sendicon} alt="send to" /></a>
				</div>
			</div>
		</div>
		<a href="#" className="btn">See more</a>
	</div>
</div>
    {/* edit ends */}
    <div className='home4'>
      <div className="h4detials">
        <div className="h4detialsc">
          <div className="h4detialsh">
            COMPANY
          </div>
          <div className="h4detialsl">
            <ul className='h4ul' type="none">
              <li className='h4l'>About us</li>
              <li className='h4l'>Team</li>
              <li className='h4l'>Gift Hamper Co Blog</li>
              <li className='h4l'>Bug Bounty</li>
              <li className='h4l'>Gift Hamper Co Corporate</li>
              <li className='h4l'>Gift Hamper Co Instamart</li>
            </ul>
          </div>
        </div>
        <div className="h4detialsc">
          <div className="h4detialsh">
          CONTACT
          </div>
          <div className="h4detialsl">
              <ul type="none">
                <li className='h4l'>Help & Support</li>
                <li className='h4l'>Partner with us</li>
                <li className='h4l'>Ride with us</li>
              </ul>
          </div>
        </div>
        <div className="h4detialsc">
          <div className="h4detialsh">
               LEGAL
          </div>
          <div className="h4detialsl">
              <ul type="none">
                <li className='h4l'>Terms & Cancellations</li>
                <li className='h4l'>Refund & Cancellation
                </li>
                <li className='h4l'>Privacy Policy
                </li>
                <li className='h4l'>Cookie Policy</li>
                <li className='h4l'>Offer Terms</li>
                <li className='h4l'>Phishing & Fraud</li>
                <li className='h4l'>Corporate – Gift Hamper Co Money Codes Terms and Conditions</li>
                <li className='h4l'>Corporate - Gift Hamper Co Discount Voucher Terms and Conditions</li>
              </ul>
          </div>
        </div>
        <div className="h4detialsc">
          <img src={sec3i1} alt="No png found" className='h4i'/>
          <img src={sec3i2} alt="No png found" className='h4i h4i2'/>
        </div>
      </div>
      <hr className='h4br'/>
      <div className="h4cities">
        <div className="h4detialsh">
              WE DELIVER TO
        </div>
        <div className="h4citiesp">
            All over the Planet
        </div>
      </div>
      <hr className='h4br'/>
      <div className="footer">
        {/* add footerimage */}
        <img  alt="No png found" className='footerlogo'/>
        <p className='footerp'>© 2023 Gift Hamper Co</p>
        <div className="footercommunication">
          <a href ="https://m.facebook.com/profile.php?id=100092273835512&mibextid=LQQ" ><img src={footerfb} alt="No png found" className='footerimg' /></a>
          <img src={footerpintrest} alt="No png found" className='footerimg' />
          <a href = ""><img src={footerinsta} alt="No png found" className='footerimg'/></a>
          <img src={footertwitter} alt="No png found" className='footerimg'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home