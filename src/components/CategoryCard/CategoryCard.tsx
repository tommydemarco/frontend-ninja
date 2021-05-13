import "./CategoryCard.scss";

interface CategoryCardProps {
  children: React.ReactChildren;
  label: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ children, label }) => {
  
  const classes = ["category-card"] 

  return (
    <div className={classes.join(" ")}>
      <div className="category-card__icon-container">
        {children}
      </div>
      <span className="category-card__label">
        {label}
      </span>
    </div>
  )
}

export default CategoryCard;