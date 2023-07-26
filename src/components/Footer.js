import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="https://i.tracxn.com/logo/company/Selection_999_628__91e87047-b098-4c64-8fb0-5dccafd9beae.png?height=120&width=120" alt='' width={70} />
                <span className="secondaryText">Our vision is to make all people <br /> the best place to live for them.</span>
            </div>
            <div className="flexColStart f-right">
                <span className="primaryText pt">Information</span>
                <span className="secondaryText">145 New York, FL 4571, USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer