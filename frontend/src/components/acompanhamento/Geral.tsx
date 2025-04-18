import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: 'Jan', total: 120 },
  { name: 'Fev', total: 98 },
  { name: 'Mar', total: 140 },
  { name: 'Abr', total: 115 },
];

export default function Geral() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 7 }).map((_, idx) => (
        <Card key={idx} className="p-6">
          <CardContent>
            <h4 className="text-xl font-semibold mb-4">Visão Geral das Manifestações</h4>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" className="text-sm text-muted-foreground" />
                  <YAxis className="text-sm text-muted-foreground" />
                  <Tooltip />
                  <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}