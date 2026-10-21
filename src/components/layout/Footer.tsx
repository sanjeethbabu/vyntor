import Link from 'next/link';
import { Container } from '@/components/ui/Layout';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <Container size="xl">
        <div className="site-footer__layout">
          <div className="site-footer__columns">
            <section className="site-footer__information-section">
              <h2 className="site-footer__heading">Information</h2>
              <nav className="site-footer__information" aria-label="Information">
                <Link href="/terms" className="site-footer__link">Terms &amp; Conditions</Link>
                <Link href="/privacy" className="site-footer__link">Privacy Policy</Link>
              </nav>
            </section>
            <section className="site-footer__contact">
              <h2 className="site-footer__heading">Contact Info</h2>
              <address className="site-footer__details">
                <span className="site-footer__address">123 Innovation Drive, San Francisco, CA 94105, USA</span>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                <a href="mailto:hello@vyntor.com">hello@vyntor.com</a>
              </address>
            </section>
          </div>
        </div>
        <p className="site-footer__copyright">
          &copy; {currentYear} VYNTOR Technologies. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
