export const Contact = ()=>{

    const handleFormSubmit = (formData) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
      };
    return (
       <section className="section-contact">
      <h2 className="container-title">Feel Free to contact us </h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d28484.96700370991!2d77.90478912806951!3d26.82019788007902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1742819190376!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      
      </iframe>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
    )  
 };

