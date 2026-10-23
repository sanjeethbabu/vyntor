import { Container } from '@/components/ui/Layout';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
<footer className="site-footer" role="contentinfo">
      <Container size="xl">
        <div className="site-footer__layout">
          <div className="site-footer__columns">
            <section className="site-footer__contact">
              <h2 className="site-footer__heading">Contact Info</h2>
              <address className="site-footer__details">
                <span className="site-footer__address">123 Innovation Drive, San Francisco, CA 94105, USA</span>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                <a href="mailto:hello@vastverse.com">hello@vastverse.com</a>
              </address>
            </section>
          </div>
        </div>
        <p className="site-footer__copyright">
          &copy; {currentYear} vastverse. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}



