import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card } from "react-bootstrap";

const data = [
  { name: "Atendimento", value: 40 },
  { name: "Infraestrutura", value: 25 },
  { name: "Sistema", value: 35 },
];

const COLORS = ["#ef4444", "#f97316", "#eab308"];

const Reclamacoes = () => (
  <Card className="p-4">
    <h4 className="mb-4">Tipos de Reclamações</h4>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
          {data.map((_, i) => (
            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </Card>
);

export default Reclamacoes;