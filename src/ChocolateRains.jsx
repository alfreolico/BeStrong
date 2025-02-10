import './ChocolateRains.scss';

const ChocolateRains = () => {
  return (
    <div className='esteselbody'>
    <div className='midiv' id="chocolate_rains">
      {Array.from({ length: 50 }).map((_, i) => (
        <div className= "heart" key={i}>
          <div className= "ring"></div>
          <div className= "inner">
            <div className= "regular">
              <div className= "movable">
                <div className= "left"></div>
                <div className= "right"></div>
              </div>
            </div>
            <div className= "reverse">
              <div className= "movable">
                <div className= "left"></div>
                <div className= "right"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default ChocolateRains;