import 'bootstrap/dist/js/bootstrap.js'

export default function Mainlinks() {
  return (
    <div>
      <button
        className='btn btn-primary'
        type={'button'}
        data-bs-toggle='offcanvas'
        data-bs-target='#staticBackdrop'
        aria-controls='staticBackdrop'
      >
        Recently Uploaded
      </button>

      <div
        className='offcanvas offcanvas-start'
        data-bs-backdrop={'static'}
        tabindex='-1'
        id='staticBackdrop'
        aria-labelledby='staticBackdropLabel'
      >
        <div className='offcanvas-header'>
          <h4 className='offcanvas-title' id='staticBackdropLabel'>
          <b style={{fontFamily:"-moz-initial"}}>
              Recently Uploaded
            </b>

          </h4>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'> 
        <a href='/' className='card-link' style={{textDecoration:'none'}}>           
                <div className='card' style={{backgroundColor:'#282727',color:'white'}}>
                  <div className='card-body'>
                    <h5 className='card-title'>Unlocking the Secrets of the Universe: A Journey through Astrophysics</h5>
                    <h6 className='card-subtitle mb-2 text-body-secondary'>
                     Know more
                    </h6>
                    <p className='card-text'>
                    <i>Explore the cosmos and unravel the mysteries of our universe in this astrophysics adventure......</i>
                    </p>
                    
                     </div>
                   
                   
                  </div>
                    </a>

                {/* card 2 */}
                <a href='/' className='card-link' style={{textDecoration:'none'}}>
                <div className='card'   style={{backgroundColor:'#282727',color:'white',marginTop:'20px'}}>
                  <div className='card-body'>
                    <h5 className='card-title'>Shades of Serenity: The Healing Power of Green</h5>
                    <h6 className='card-subtitle mb-2 text-body-secondary'>
                      Card subtitle
                    </h6>
                    <p className='card-text'>
                      <i>

                    Discover how the calming hue of green can soothe your mind and revitalize your spirit, bringing balance and tranquility to your life.....
                      </i>
                    </p>
                    
                     
                  
                   
                  </div>
                </div>
        </a>
        {/* card 3 */}
        <a href='/' className='card-link' style={{textDecoration:'none'}}>
                <div className='card'   style={{backgroundColor:'#282727',color:'white',marginTop:'20px'}}>
                  <div className='card-body'>
                    <h5 className='card-title'>Shades of Serenity: The Healing Power of Green</h5>
                    <h6 className='card-subtitle mb-2 text-body-secondary'>
                      Card subtitle
                    </h6>
                    <p className='card-text'>
                      <i>

                    Discover how the calming hue of green can soothe your mind and revitalize your spirit, bringing balance and tranquility to your life.....
                      </i>
                    </p>
                    
                     
                  
                   
                  </div>
                </div>
        </a>
        {/* Card 3 */}
        <a href='/' className='card-link' style={{textDecoration:'none'}}>
                <div className='card'   style={{backgroundColor:'#282727',color:'white',marginTop:'20px'}}>
                  <div className='card-body'>
                    <h5 className='card-title'>The Art of Productivity</h5>
                    <h6 className='card-subtitle mb-2 text-body-secondary'>
                      Read more
                    </h6>
                    <p className='card-text'>
                      <i>

                    Learn how to boost your productivity and achieve more in less time with these practical tips and techniques
                      </i>
                    </p>
                    
                     
                  
                   
                  </div>
                </div>
        </a>

        <button class="btn btn-primary mt-3" type="button">Know More → </button>

                </div>
       
          
       
        </div>
      </div>
   
  );
}
