const SkeletonLoader = ({ 
  variant = 'text',
  className = '',
  count = 1,
  width = '100%',
  height = '1rem'
}) => {
  const baseStyles = 'animate-pulse bg-gray-200 dark:bg-gray-700';

  const variants = {
    text: 'rounded h-4',
    title: 'rounded h-8',
    avatar: 'rounded-full w-12 h-12',
    thumbnail: 'rounded-lg w-full h-48',
    card: 'rounded-xl w-full h-64',
    button: 'rounded-lg h-10 w-32',
  };

  const Skeleton = () => (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ width, height: variant === 'text' || variant === 'title' ? height : undefined }}
    />
  );

  if (count === 1) {
    return <Skeleton />;
  }

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

// Preset skeleton layouts
export const CourseCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
    <SkeletonLoader variant="thumbnail" />
    <div className="p-4 space-y-3">
      <SkeletonLoader variant="title" width="80%" />
      <SkeletonLoader variant="text" count={2} />
      <div className="flex gap-2">
        <SkeletonLoader variant="button" width="60px" />
        <SkeletonLoader variant="button" width="80px" />
      </div>
    </div>
  </div>
);

export const ProductCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden">
    <SkeletonLoader variant="thumbnail" />
    <div className="p-4 space-y-3">
      <SkeletonLoader variant="text" width="70%" />
      <SkeletonLoader variant="text" count={2} />
      <SkeletonLoader variant="button" width="100px" />
    </div>
  </div>
);

export default SkeletonLoader;
