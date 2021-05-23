import { IonIcon, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import { planet } from "ionicons/icons"

import "./CategoryChanger.scss"

interface CategoryChangerProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryChanger: React.FC<CategoryChangerProps> = ({ activeCategory, setActiveCategory }) => {

  const onActiveCategorySelection = (category: string) => {
    setActiveCategory(category);
  }
  
  return (
    <div className="category-changer">
      <IonSegment mode="md" scrollable={true} onIonChange={e => onActiveCategorySelection(e.detail.value!)} value={activeCategory}>
        <IonSegmentButton value="all">
          <IonIcon icon={planet} slot="start" />
          <IonLabel>All</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="css">
          <IonLabel>Time Challenge</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="js">
          <IonLabel>Bugfix mode</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  )
}
export default CategoryChanger