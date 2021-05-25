import "./CategoryCard.scss";

interface CategoryCardProps {
  children: React.ReactNode;
  label: string;
  path: string;
  setPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryPath: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ setPrompt, children, label, path, setCategoryPath }) => {

  const handleClick = () => {
    setPrompt(true);
    setCategoryPath(path)
  }

  const classes = ["category-card"]

  return (
    <div className={classes.join(" ")} onClick={handleClick}>
      {children}
      <span className="category-card__label">
        {label}
      </span>
    </div>
  )
}

export default CategoryCard;