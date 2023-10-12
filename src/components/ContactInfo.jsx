function ContactInfo() {
  return (
    <>
      <div id="contact-head">

        {/* Contact Information */}

        <h5 className="contact-info mx-2">Aleksander White</h5>
        <h6 className="contact-info mx-2"><i class="fa-solid fa-phone"></i> (779)255-0508</h6>
        <h6 className="contact-info mx-2"><i class="fa-solid fa-envelope"></i> aleksanderw1116@gmail.com</h6>
        <h6 className="contact-info mx-2"><i class="fa-solid fa-location-dot"></i> Kirkland, IL</h6>

        {/* Dropdown Menu */}

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Projects
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="https://alicedowntherabbithole7.github.io/Whack-a-mole/" target='_blank'>
              Whack-A-Mole!
            </a>
            <a className="dropdown-item" href="https://alicedowntherabbithole7.github.io/markdown_previewer/" target='_blank'>
              Markdown Previewer
            </a>
            <a className="dropdown-item" href="https://alicedowntherabbithole7.github.io/JS_Calculator/" target='_blank'>
              Calculator
            </a>
            <a className='dropdown-item' href='https://alicedowntherabbithole7.github.io/tribute_page/' target='_blank'>
                Stan Lee Tribute
            </a>
            <a className='dropdown-item' href='https://alicedowntherabbithole7.github.io/quote_machine/' target='_blank'>
                Quote Generator
            </a>
            <a className='dropdown-item' href=''>
                
            </a>
            <br></br>
            <a className='dropdown-item' href='https://www.linkedin.com/in/aleksander-white-0a04bb294/' target='_blank'>
                LinkedIn
            </a>
            <a className='dropdown-item' href='https://github.com/aliceDownTheRabbitHole7/' target='_blank'>
                Git Hub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
