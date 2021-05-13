import { useState, useEffect } from "react";

import { IonItem, IonList, IonIcon, IonLabel } from "@ionic/react";
import { trophy, medal } from "ionicons/icons"

import LoadingSpinner from "../LoadingSpinner"
import "./Chart.scss"

import { chartData } from "../../data/chart-data"

interface ChartProps {
  mode: string;
}

const Chart: React.FC<ChartProps> = ({ mode }) => {

  const [ data, setData ] = useState<any[]>([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    setTimeout(() => {
      setData(chartData)
      setLoading(false)
      setError(false)
    }, 1500)
  }, [mode])

  if (loading) {
    return (
      <LoadingSpinner color="primary" centered={true} />
    )
  }

  const assignChartItemIcon = (index: number) => {
    return index < 3 ? trophy : medal
  }

  const assignIconColor = (index: number) => {
    return index === 0 ? "#e1b12c" : index === 1 ? "#c8d6e5" : index === 2 ? "#e15f41" : "#778ca3"
  }

  return (
    <IonList className="ion-no-padding">
        {
          data.map((data, index) => {
            return (
              <IonItem>
                <IonIcon slot="start" icon={assignChartItemIcon(index)} style={{color: assignIconColor(index), fontSize: "30px"}} />
                <IonLabel>{data.username}</IonLabel>
                <IonLabel slot="end">{data.points}</IonLabel>
              </IonItem>
            )
          })
        }
    </IonList>
  )
}

export default Chart;