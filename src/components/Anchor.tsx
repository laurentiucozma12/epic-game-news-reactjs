import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

interface AnchorProps {
  to: string;
  name: string;
  className?: string;
}

function Anchor(props: React.PropsWithChildren<AnchorProps>) {
  return (
    <Link
      to={props.to}
      className={twMerge(
        `block rounded-lg bg-gray-700 px-4 py-3 text-center duration-700`,
        props.className,
      )}
    >
      {props.name}
    </Link>
  );
}

Anchor.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

Anchor.defaultProps = {
  to: '/',
  name: 'UndefinedAnchorName',
  className: '',
};

export default Anchor;
