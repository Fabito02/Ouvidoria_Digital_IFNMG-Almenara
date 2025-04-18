import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { mes: "Jan", elogios: 10 },
  { mes: "Fev", elogios: 25 },
  { mes: "Mar", elogios: 35 },
  { mes: "Abr", elogios: 45 },
];

export default function Elogios() {
  return (
    <Card className="p-6">
      <CardContent>
        <h4 className="text-xl font-semibold mb-4">Evolução dos Elogios</h4>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="elogiosColor"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="mes" className="text-sm text-muted-foreground" />
              <YAxis className="text-sm text-muted-foreground" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="elogios"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#elogiosColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}