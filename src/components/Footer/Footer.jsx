import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";

const StyledFooter = styled.footer`
  width: 100%;
  height: 130px;
  display: flex;  
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid #2A6AE4;
  background-color: #fff ;   

  @media (max-width: 768px) {
    display:  ${(props) => props.pageLocation === "/" ? "none" : "flex"}    
  } 
`;

const ContainerLogo = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 252px;
  height: 60px;

  @media (max-width: 768px) {
    width: 120px;
    height: 28px;   
  } 
`;

const ContainerSocialMedia = styled.div`
  flex: 1;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display:  none;    
  }
`;

const IconSocialMedia = styled.img`
  display: flex;
  max-width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = () => {
  const pageLocation = useLocation();

  return (
    <StyledFooter pageLocation={pageLocation.pathname}>
      <ContainerLogo >
        <Logo src={logo} alt="Logo AluraFLIX" />
      </ContainerLogo>
      
      <ContainerSocialMedia>
        <a href="https://github.com/LLBarbosa" target="_blank">
          <IconSocialMedia
            src="https://skillicons.dev/icons?i=github"
            alt="Logo Github"
          />
        </a>

        <a href="https://www.linkedin.com/in/laercioluizbarbosa/" target="_blank">
          <IconSocialMedia
            src="https://skillicons.dev/icons?i=linkedin"
            alt="Logo Linkedin"
          />
        </a>
      </ContainerSocialMedia>
    </StyledFooter>
  );
};

export default Footer;
