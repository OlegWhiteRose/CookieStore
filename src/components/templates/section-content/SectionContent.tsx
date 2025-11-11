import classes from './SectionContent.module.scss';

interface SectionContentProps {
  children?: React.ReactNode;
  className?: string;
}

function SectionContent(props: SectionContentProps) {
  const { children, className = '' } = props;

  return (
    <div className={`${classes.content} ${className}`}>
      {children}
    </div>
  );
}

export default SectionContent;
