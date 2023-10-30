function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__copyright'>©&nbsp;{year}&nbsp;</p>
      <p className='footer__text'>Евгений Калинин, Наталья Понамаренко</p>
    </footer>
  );
}
export default Footer;
