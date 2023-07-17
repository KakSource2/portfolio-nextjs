import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>Blogr</h1>
      <div>
        <h3>Product</h3>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h3>Connect</h3>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
