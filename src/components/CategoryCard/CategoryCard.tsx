import { useHistory } from "react-router-dom"

import "./CategoryCard.scss";

interface CategoryCardProps {
  children: React.ReactNode;
  label: string;
  path: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ children, label, path }) => {

  const history = useHistory()

  const goToQuiz = () => {
    //add the popup logic
    history.push(path)
  }

  const classes = ["category-card"]

  return (
    <div className={classes.join(" ")} onClick={goToQuiz}>
      {children}
      <span className="category-card__label">
        {label}
      </span>
    </div>
  )
}

export default CategoryCard;