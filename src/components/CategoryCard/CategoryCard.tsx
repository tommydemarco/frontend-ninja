import { useHistory } from "react-router-dom"

import "./CategoryCard.scss";

interface CategoryCardProps {
  children: React.ReactNode;
  label: string;
  path: string;
  setPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ setPrompt, children, label, path }) => {

  const history = useHistory()

  const handleClick = () => {
    //add the prompt showing logic
    setPrompt(true);
    //history.push(path)
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