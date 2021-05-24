import { IonSelect, IonSelectOption, IonItem, IonLabel } from "@ionic/react"

import "./OptionSelector.scss"

interface OptionSorterProps {
  label: string;
  multiple: boolean;
  activeValue: string;
  values: { value: string, label: string }[]
  setterFunction: (value: string) => void
}

const OptionSorter: React.FC<OptionSorterProps> = ({ label, multiple, activeValue, values, setterFunction }) => {
  return (
    <div className="option-sorter">
      <IonItem>
        <IonLabel>{label}</IonLabel>
        <IonSelect multiple={multiple} value={activeValue} onIonChange={e => setterFunction(e.detail.value)}>
          {values.map(value => {
            return (
              <IonSelectOption value={value.value}>{value.label}</IonSelectOption>
            )
          })}
        </IonSelect>
      </IonItem>
    </div>
  )
}

export default OptionSorter;