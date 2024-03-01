import useColorChange from '../hooks/useColorChange.tsx';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Define colors and interval duration
  const colors = ['#35E2ED', '#a335ee'];
  const intervalDuration = 1000;

  // Use the custom hook
  useColorChange('changeFooterTextColor', colors, intervalDuration);

  return (
    <footer className="flex justify-center bg-[#101110] align-middle">
      <div className="w-full max-w-7xl py-4">
        <p className="block text-center xl:flex xl:justify-center xl:align-middle">
          <span className="block">
            © Copyright 2023 - {currentYear}
            <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
          </span>
          <span className="block">
            All rights reserved
            <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
          </span>
          <span className="block">This website was made</span>
          <span className="block">
            <span className="hidden xl:inline">&nbsp;</span>
            by Official
            <a
              id="changeFooterTextColor"
              href="https://epicgamenews.com/"
              target="_blank"
              className="font-bold duration-700"
            >
              &nbsp;Epic Game News
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
