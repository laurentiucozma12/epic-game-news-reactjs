import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

interface AnchorProps {
  to: string;
  name: string;
  target?: string;
  className?: string;
}
function Anchor(props: React.PropsWithChildren<AnchorProps>) {
  if (props.to && (props.to.includes('#') || props.to.startsWith('http'))) {
    return (
      <a
        href={props.to}
        target={props.target}
        className={twMerge(
          `block rounded-lg bg-gray-700 px-4 py-3 text-center duration-700`,
          props.className,
        )}
      >
        {props.name}
      </a>
    );
  } else {
    return (
      <Link
        to={props.to}
        target={props.target}
        className={twMerge(
          `block rounded-lg bg-gray-700 px-4 py-3 text-center duration-700`,
          props.className,
        )}
      >
        {props.name}
      </Link>
    );
  }
}

Anchor.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
};

Anchor.defaultProps = {
  to: '/',
  name: 'UndefinedAnchorName',
  target: '',
  className: '',
};

export default Anchor;
