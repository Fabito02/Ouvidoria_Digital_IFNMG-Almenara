import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Atendimento", value: 40 },
  { name: "Infraestrutura", value: 25 },
  { name: "Sistema", value: 35 },
];

const COLORS = ["#ef4444", "#f97316", "#eab308"];

export default function Reclamacoes() {
  return (
    <Card className="p-6">
      <CardContent>
        <h4 className="text-xl font-semibold mb-4">Tipos de Reclamações</h4>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {data.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}