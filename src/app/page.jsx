import Image from "next/image";
import Logo from "./img/logo.png"
import StartupLogo1 from "./img/Dd.png"
import StartupLogo2 from "./img/Wave.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          <div className="main-flex">
            <div className="author">
              <Image src={Logo} alt="logo.png" className="logo-img" />
              <div className="text">
                <b>Startup Club</b>
                <div>
                  <p><FaLocationDot />Asia</p><p><FaMoneyBillWave /> $0/month</p>
                </div>
                <p className="description">Startup Club - is a startup incubator building startups untill we succed (and after)</p>
              </div>
              <a className="social-yt" href="https://www.youtube.com/@startupclub1">YouTube</a>
            </div>

            <div className="projects">
              
              <a href="https://downloadlify.vercel.app/" target="_blank" className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Downloadlify</span>
                </div>

                <p className="product-description">Download Anything From YouTube Without Ads</p>
              </a>
              <a href="#!" className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </a>
              <a href="#!" className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </a>
              <a href="#!" className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </a>

              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>
              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>
              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>
              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>

              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>
              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>
              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>
              <div className="project">

                <div className="product-info">
                  <Image className="product-logo" src={StartupLogo1} alt=""></Image>
                  <span>Startup Name</span>
                </div>

                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ex.</p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}
