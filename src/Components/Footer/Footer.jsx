import { FaInstagram, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className=" bg-dark  Footer">
                <div className="social text-center p-3 ">
                    <a className='mx-3' href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={32} />
                    </a>
                  
                    <a className='mx-3' href="https://wa.me/5493815835140?text=Hola%20vengo%20de%20ver%20tu%20pagina%20%3A" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={32} />
                    </a>
                    <a className='mx-3' href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={32} />
                    </a>
                    <a className='mx-3' href="tel:+5493815835140">
                        <FaPhone size={32} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer