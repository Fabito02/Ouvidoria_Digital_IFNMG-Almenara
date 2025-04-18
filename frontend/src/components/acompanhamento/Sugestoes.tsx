import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { mes: "Jan", sugestoes: 8, impacto: 3 },
  { mes: "Fev", sugestoes: 15, impacto: 6 },
  { mes: "Mar", sugestoes: 12, impacto: 5 },
  { mes: "Abr", sugestoes: 20, impacto: 8 },
];

export default function Sugestoes() {
  return (
    <Card className="p-6">
      <CardContent>
        <h4 className="text-xl font-semibold mb-4">Sugestões e Impacto Estimado</h4>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <XAxis dataKey="mes" className="text-sm text-muted-foreground" />
              <YAxis className="text-sm text-muted-foreground" />
              <Tooltip />
              <Bar
                dataKey="sugestoes"
                barSize={20}
                fill="#3b82f6"
                radius={[5, 5, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="impacto"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}