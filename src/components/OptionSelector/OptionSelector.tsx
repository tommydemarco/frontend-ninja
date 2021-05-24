import { IonSelect, IonSelectOption, IonItem, IonLabel } from "@ionic/react"

import "./OptionSelector.scss"

interface OptionSelectorProps {
  label: string;
  multiple: boolean;
  activeValue: string;
  values: { value: string, label: string }[]
  setterFunction: (value: string) => void
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ label, multiple, activeValue, values, setterFunction }) => {
  return (
    <div className="option-selector">
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

export default OptionSelector;