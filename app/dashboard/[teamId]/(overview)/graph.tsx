"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 450,
  },
  {
    name: "Feb",
    total: 380,
  },
  {
    name: "Mar",
    total: 420,
  },
  {
    name: "Apr",
    total: 390,
  },
  {
    name: "May",
    total: 410,
  },
  {
    name: "Jun",
    total: 430,
  },
  {
    name: "Jul",
    total: 460,
  },
  {
    name: "Aug",
    total: 400,
  },
  {
    name: "Sep",
    total: 370,
  },
  {
    name: "Oct",
    total: 440,
  },
  {
    name: "Nov",
    total: 480,
  },
  {
    name: "Dec",
    total: 470,
  },
 
]

export function Graph() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
