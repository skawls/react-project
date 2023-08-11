// import styles from '../styles/TraffcLight.module.css';
import TraffcLight from './TrafficLight';


function TraffcLight() {
  return (
    <div role="group" className="container">
      <Button 
        direction={'stop'}
        label={'멈춰!'}
      />
    </div>
  );
}

export default TraffcLight;