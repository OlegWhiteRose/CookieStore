import classes from './HorizontalSection.module.scss';

interface HorizontalSectionProps {
  children?: React.ReactNode;
  className?: string;
}

function HorizontalSection(props: HorizontalSectionProps) {
  const { children, className = '' } = props;

  return (
    <div className={`${classes.section} ${className}`}>
      {children}
    </div>
  );
}

export default HorizontalSection;
