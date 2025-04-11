import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "react-bootstrap";

const data = [
  { dia: "Seg", denuncias: 3 },
  { dia: "Ter", denuncias: 1 },
  { dia: "Qua", denuncias: 4 },
  { dia: "Qui", denuncias: 2 },
  { dia: "Sex", denuncias: 5 },
];

const Denuncias = () => (
  <Card className="p-4">
    <h4 className="mb-4">Denúncias por Dia da Semana</h4>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="dia" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="denuncias" stroke="#facc15" strokeWidth={3} dot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default Denuncias;