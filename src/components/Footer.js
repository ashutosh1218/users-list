import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
var time = new Date();
var year = time.getFullYear();

function Footer() {
    return (
        <footer>
            <p className="madeBy">Made By <span className="name">Ashutosh Singh</span></p>
            <p className="copyright">© {year}</p>
            <div class="social">
                <a href="https://www.linkedin.com/in/ashutosh1218/" className="social-handles"><LinkedInIcon /></a>
                <a href="https://github.com/ashutosh1218" className="social-handles"><GitHubIcon /></a>
                <a href="https://instagram.com/ashu.1718/" className="social-handles"><InstagramIcon /></a>
                <a href="https://facebook.com/ashu.1718/" className="social-handles"><FacebookIcon /></a>
                <a href="mailto:ashutosh244244@gmail.com" className="social-handles"><MailIcon /></a>

            </div>
        </footer>

    );
}
export default Footer;