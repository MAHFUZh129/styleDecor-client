import TopDecorators from "../../components/home/decorators/TopDecorators"
import Hero from "../../components/home/hero/Hero"
import ServiceCoverageMap from "../../components/home/ServiceCoverageMap"
import Services from "../../components/home/services/Services"

const Home = () => {
  return (
    <div className="">
      <Hero/>
     <Services/>
     <TopDecorators/>
     <ServiceCoverageMap/>
    </div>
  )
}

export default Home
