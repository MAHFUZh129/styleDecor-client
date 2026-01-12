import BookEventCTA from "../../components/home/BookEventCTA"
import TopDecorators from "../../components/home/decorators/TopDecorators"
import Hero from "../../components/home/hero/Hero"
import HowItWorks from "../../components/home/HowItWorks"
import ServiceCoverageMap from "../../components/home/ServiceCoverageMap"
import Services from "../../components/home/services/Services"
import SignatureDecorStyles from "../../components/home/SignatureDecorStyles"
import Statistics from "../../components/home/Statistics"
import Testimonials from "../../components/home/Testimonials"
import WhyChooseStyleDecor from "../../components/home/WhyChooseStyleDecor"

const Home = () => {
  return (
    <div className="">
      <Hero/>
     <Services/>
     <TopDecorators/>
     <SignatureDecorStyles/>
     <WhyChooseStyleDecor/>
     <HowItWorks/>
     <ServiceCoverageMap/>
     <BookEventCTA/>
     <Statistics/>
     <Testimonials/>
     
    </div>
  )
}

export default Home
