import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "react-bootstrap";

const data = [
  { mes: "Jan", sugestoes: 8, impacto: 3 },
  { mes: "Fev", sugestoes: 15, impacto: 6 },
  { mes: "Mar", sugestoes: 12, impacto: 5 },
  { mes: "Abr", sugestoes: 20, impacto: 8 },
];

const Sugestoes = () => (
  <Card className="p-4">
    <h4 className="mb-4">Sugestões e Impacto Estimado</h4>
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sugestoes" barSize={20} fill="#3b82f6" radius={[5, 5, 0, 0]} />
        <Line type="monotone" dataKey="impacto" stroke="#2563eb" strokeWidth={2} />
      </ComposedChart>
    </ResponsiveContainer>
  </Card>
);

export default Sugestoes;