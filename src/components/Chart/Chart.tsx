import React, { useState, useEffect, useRef } from "react";

import { IonIcon } from "@ionic/react";
import { trophy, medal } from "ionicons/icons"

import CategoryChanger from "../CategoryChanger"
import ChartElement from "../ChartElement"
import ContentConteiner from "../ContentContainer"
import LoadingSpinner from "../LoadingSpinner"


import "./Chart.scss"

import { chartData } from "../../data/chart-data"

interface ChartProps {
  mode: string;
}

const Chart: React.FC<ChartProps> = ({ mode }) => {

  const chartRef = useRef<HTMLDivElement>(null)

  const [ activeCategory, setActiveCategory ] = useState("all")
  const [ data, setData ] = useState<any>([])
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

  useEffect(() => {
    if (chartRef.current !== null) {
      chartRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [activeCategory])

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
    <div className="chart" ref={chartRef}>
        {
          Object.keys(data).map(function(key, index) {
            return (
              <div className="cart__item" key={index} style={{ display: activeCategory === key ? "block" : "none"}}>
                  <ContentConteiner>
              {data[key].map((data: any, index: any) => {
              return (
                    <ChartElement username={data.username} points={data.points}>
                      <IonIcon slot="start" icon={assignChartItemIcon(index)} style={{color: assignIconColor(index), fontSize: "30px"}} />
                    </ChartElement>
              )
              })}
              </ContentConteiner>
              </div>
            )
          })          
        }
        <CategoryChanger activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </div>
  )
}

export default Chart;