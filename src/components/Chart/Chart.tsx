import { useState } from "react";

import { IonList } from "@ionic/react";

import "./Chart.scss"

interface ChartProps {
  mode: string;
}

const Chart: React.FC<ChartProps> = ({ mode }) => {

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setErroe ] = useState(false)

  if (loading) {
    return (
     
    )
  }

  return (
    <IonList>
        {}
    </IonList>
  )
}

export default Chart;