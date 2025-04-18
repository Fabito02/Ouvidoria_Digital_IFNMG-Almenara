import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { dia: "Seg", denuncias: 3 },
  { dia: "Ter", denuncias: 1 },
  { dia: "Qua", denuncias: 4 },
  { dia: "Qui", denuncias: 2 },
  { dia: "Sex", denuncias: 5 },
];

export default function Denuncias() {
  return (
    <Card className="p-6">
      <CardContent>
        <h4 className="text-xl font-semibold mb-4">Denúncias por Dia da Semana</h4>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="dia" className="text-sm text-muted-foreground" />
              <YAxis className="text-sm text-muted-foreground" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="denuncias"
                stroke="#facc15"
                strokeWidth={3}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}