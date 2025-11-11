import './ImageSkeleton.css';

interface ImageSkeletonProps {
    className?: string;
}

export const ImageSkeleton = ({ className = '' }: ImageSkeletonProps) => {
    return (
        <div className={`image-skeleton ${className}`}>
            <div className="image-skeleton__shimmer"></div>
        </div>
    );
};
