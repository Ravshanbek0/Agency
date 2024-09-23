import { useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)
  function changeMode() {
    setDark(!dark)
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src="./logo.png" alt="" className="logo-img" />
            <ul className='nav-ul'>
              <li><a href="" className='nav-home'>Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Sevices</a></li>
              <li><a href="">Prokects</a></li>
            </ul>
            <button className='navv-btn'>Contact us</button>
            <i id='nav-btn' class="fa-solid fa-bars fa-shake"></i>
          </nav>
          <div className="header-blog">
            <img className='hBlue21' src="./blue2.png" alt="" />
            <img className='hBlue2' src="./blue2.png" alt="" />
            <img className='hRed2' src="./red.png" alt="" />
            <div className="hBlog_box">
              <h1>Make your dream <br />
                business goal come true</h1>
              <p className="nunito20px hBlog_p">
                when you need us for improve your business, <br />
                then come with us to help your business have reach it, you just sit and feel that goal
              </p>
              <button className='headBtn'>Start Project</button>
            </div>
            <div className="header_backImg">
              <img className='hBlue' src="./blue.png" alt="" />
              <img className='header_back' src="./headaerBack.png" alt="" />
              <img className='hRed' src="./red.png" alt="" />
            </div>
          </div>

        </div>
      </header>
      <main>
        <div className="container">
          <div className="about">
            <p className='quicksand24px'>About Us</p>
            <h1 className="nunito55px">Our Teammate</h1>
            <div className="about_blog">
              <div className="about_boxLeft">
                <img src="./aboutImg.png" alt="" />
              </div>
              <div className="about_boxRight">
                <p>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                <p>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                <div>
                  <button className='about_btn'>About Us</button>
                  <button className='nav-btn our-story'> Our story</button>
                </div>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service_boxLeft">
              <p className="servicetext quicksand24px">Our Services</p>
              <h1 className="servicetext nunito55px">Perfect and Fast
                Movement</h1>
              <p className='serviceText'>We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
              <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="service_boxRight">
              <div className="service4_box ">
                <div className="service4round seblue"><i class="fa-solid fa-display"></i></div>
                <p>Social Media Management</p>
              </div>
              <div className=" service4_box ">
                <div className="service4round sered"><i class="fa-solid fa-gear"></i></div>
                <p>Search Engine
                  Opimization</p>
              </div>
              <div className="service4_box ">
                <div className="service4round segreen"><i class="fa-solid fa-pen-nib"></i></div>
                <p>Design</p>
              </div>
              <div className="service4_box">
                <div className="service4round seorange"><i class="fa-solid fa-tv"></i></div>
                <p>Ads</p>
              </div>
            </div>
          </div>
          <div className="portfolio">
            <p className="quicksand24px">Our Portfolio</p>
            <h1 className="nunito55px portfolioTitle">What do we do</h1>
            <p className='nunito20px portfolioP'>all projects that we have already done , proven can help to use more <br /> comfortable, then can used by client from our business</p>
            <div className="portfolio_blog">
              <div className="ikkiBurchakDiv">
                <p>Design Byte App</p>
              </div>
              <div className="betweenService">
                <p>Cloud App</p>
              </div>
              <div className="ikkiBurchakDiv ikkinchiService">
                <p>Design Furniture App</p>
              </div>
            </div>
            <button className='nav-btn service-btn'>See All Portfolio</button>
          </div>
          <div className="testim">
            <p className="quicksand24px">Testimonial</p>
            <h1 className="nunito55px portfolioTitle">What do we do</h1>
            <div className="testimBlogs">
              <div className='testimBoxes'>
                <div>
                  <img src="./rose.png" alt="" />
                  <h1>Angel Rose <br /> <span>Creative manager</span></h1>
                </div>
                <p className="testimTexts">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
              </div>
              <div className='testimBoxes'>
                <div>
                  <img src="./rose.png" alt="" />
                  <h1>Angel Rose <br /> <span>Creative manager</span></h1>
                </div>
                <p className="testimTexts">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
              </div>
              <div className='testimBoxes'>
                <div>
                  <img src="./rose.png" alt="" />
                  <h1>Angel Rose  <span>Creative manager</span></h1>
                </div>
                <p className="testimTexts">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
              </div>
            </div>

          </div>
          <div className="last-section">
            <div className="last_leftBox">
              <h1 className="nunito55px lasth1">
                Interesting <br /> Collaboration With Us?
              </h1>
              <p className="nunito20px lastp">
                Help you to reach your business goal
              </p>
              <button className="headBtn lastBtn">
                Get Started
              </button>
            </div>
            <div className="last_rightBox">
              <img className='last_right1' src="../last1.png" alt="" />
              <img className='last_right2' src="../last2.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footerContainer">
          <div className="footer_img">
            <img src="../logo.png" alt="" />
          </div>
          <div className="footer_text1">
            <p className="footerP">Terms & policies</p>
            <h4>Terms & policies</h4>
            <h4>Privacy Policy</h4>
          </div>
          <div className="footer_text1">
            <p className="footerP">Company</p>
            <h4>Home</h4>
            <h4>Abou us</h4>
            <h4>Contact us</h4>
          </div>
          <div className="footer_text1">
            <p className="footerP">Contact</p>
            <h4>(+62)489846-7887894</h4>
            <h4>agecnycr@gmail.com</h4>
          </div>
          <div className="footer_text2">
            <p className="footerP">Location</p>
            <h4>PT Osiris Real Estate Internasional</h4>
            <h4>Jl. KH. Wahid Hasyim Kel No.10D</h4>
            <h4>Jakarta, Indonesia</h4>
            <h4>team@OsirisRealEstate.com</h4>
          </div>
        </div>
        <div className="footerIcons">
          <img src="./icons.png" alt="" />
        </div>
      </footer>
    </>
  )
}

export default App
