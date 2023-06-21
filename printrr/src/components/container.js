import styled from 'styled-components';


const Navbar = styled.div`
    text-align:center;
    background-color: #0E2954;
    height: 50px;
    color: #84A7A1;
    font-weight: 500;
    font-size: 30px;
    
`
const FirstDivision = styled.div`
    text-align: center;
    background-color: #FFF6F4;
    height: 20vh;
    font-weight: 500;
    font-size: 30px;
    color: #D3D04F;
`
const SecondDivision = styled.div`
    text-align: center;
    background-color: #0E2954;
    height: 50vh;
    border-top-right-radius: 80%;
`
const ThirdDivision = styled.div`
    text-align: center;
    background-color: #0E2954;
    height: 20vh;
`
const Footer = styled.div`
background-color: #0E2954;
`
const Container = () => {
  return (
    <div>
        <Navbar>
            .printrr
        </Navbar>
        <FirstDivision>
            Welcome to your own print on demand business
        </FirstDivision>
        <SecondDivision>
        </SecondDivision>
        <ThirdDivision>
        </ThirdDivision>
        <Footer></Footer>
    </div>
  )
}

export default Container;