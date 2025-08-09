import classes from './VerticalSection.module.scss';

interface VertocalSectionProps {
  children?: React.ReactNode;
  className?: string;
}

function VerticalSection(props: VertocalSectionProps) {
  const { children, className = '' } = props;

  return (
    <div className={`${classes.section} ${className}`}>
      {children}
    </div>
  );
}

export default VerticalSection;

