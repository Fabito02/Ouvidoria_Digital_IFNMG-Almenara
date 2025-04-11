import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "react-bootstrap";

const data = [
  { mes: "Jan", elogios: 10 },
  { mes: "Fev", elogios: 25 },
  { mes: "Mar", elogios: 35 },
  { mes: "Abr", elogios: 45 },
];

const Elogios = () => (
  <Card className="p-4">
    <h4 className="mb-4">Evolução dos Elogios</h4>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="elogiosColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="mes" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="elogios" stroke="#10b981" fillOpacity={1} fill="url(#elogiosColor)" />
      </AreaChart>
    </ResponsiveContainer>
  </Card>
);

export default Elogios;