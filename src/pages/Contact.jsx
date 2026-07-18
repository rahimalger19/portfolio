import "./styles/Contact.css"

export default function Contact(){
    return( <main className="contact">
      <h1>Let's Work Together</h1>

      <form action="https://formspree.io/f/xpqvdjno" method="POST">

        <input type="text" name="name" placeholder="Name" required/>

        <input type="email" name="email" placeholder="Email" required/>

        <textarea name="message" placeholder="Message" required></textarea>

        <button type="submit">Send Message</button>

      </form>
    </main>
    )
}


