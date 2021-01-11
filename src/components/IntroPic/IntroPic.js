import './IntroPic.css';
import { ReactComponent as PortfolioPic } from '../../assets/Portfolio-pic.svg';

function IntroPic() {
  return (
    <div className="overlay">
      <PortfolioPic id="circle-pic" />
    </div>
  );
}

export default IntroPic;
