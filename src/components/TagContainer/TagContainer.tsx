import React from "react";
import "./TagContainer.scss";

interface TagContainerProp {
  tags: string[];
}

const TagContainer: React.FC<TagContainerProp> = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags?.map(tag => <span key={tag} className="tag-container__tag">{tag}</span>)}
    </div>
  )
}

export default TagContainer;