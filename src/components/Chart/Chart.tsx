import React, { useState, useEffect } from "react";

import { IonIcon, IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";
import { trophy, medal, planet } from "ionicons/icons"

import ChartElement from "../ChartElement"
import LoadingSpinner from "../LoadingSpinner"
import "./Chart.scss"

import { chartData } from "../../data/chart-data"

interface ChartProps {
  mode: string;
}

const Chart: React.FC<ChartProps> = ({ mode }) => {

  const [ activeCategory, setActiveCategory ] = useState("all")
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
    return index === 0 ? "#e1b12c" : index === 1 ? "#bdc3c7" : index === 2 ? "#e15f41" : "#778ca3"
  }

  return (
    <div className="chart">
      <IonSegment scrollable={true} onIonChange={e => setActiveCategory(e.detail.value!)} value={activeCategory}>
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
        {
          data.map((data, index) => {
            return (
              <ChartElement username={data.username} points={data.points}>
                <IonIcon slot="start" icon={assignChartItemIcon(index)} style={{color: assignIconColor(index), fontSize: "30px"}} />
              </ChartElement>
            )
          })
        }
    </div>
  )
}

export default Chart;