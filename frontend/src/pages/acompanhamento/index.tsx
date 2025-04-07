import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import "./Acompanhamento.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
} from "recharts";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Fev", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Abr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Mai", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const Acompanhamento = () => {
  const [expandido, setExpandido] = useState(false);

  const toggleSidebar = () => {
    setExpandido(!expandido);
  };

  const opcoes = [
    { icon: "material-symbols:dashboard-rounded", label: "Visão Geral" },
    { icon: "material-symbols:feedback-rounded", label: "Reclamações" },
    { icon: "material-symbols:thumb-up-rounded", label: "Elogios" },
    { icon: "material-symbols:warning-rounded", label: "Denúncias" },
    { icon: "material-symbols:lightbulb-rounded", label: "Sugestões" },
  ];

  return (
    <BlankLayout showFooter={false} showHeader={true} showNavbar={true} removeBodyPadding={false}>   
      <Container fluid className="corpoDoSite">
        <div className={`barraLateral ${expandido ? "expandido" : ""}`}>
          <Button
            onClick={toggleSidebar}
            className="toggle-button"
          >
            <Icon
              icon={
                expandido
                  ? "material-symbols:chevron-left"
                  : "material-symbols:chevron-right"
              }
            />
          </Button>
          {opcoes.map((opcao, index) => (
            <div key={index} className={`opcao ${expandido ? "expandido" : ""}`}>
              <Icon icon={opcao.icon} className="icone" />
              {expandido && <span className="label">{opcao.label}</span>}
            </div>
          ))}
        </div>

        <Container className="conteudo">
          <div className="graphic-box">
            <LineChart width={330} height={270} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>

          <div className="graphic-box">
            <BarChart width={330} height={270} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>

          <div className="graphic-box">
            <PieChart width={330} height={270}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="pv"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </div>

          <div className="graphic-box">
            <AreaChart width={330} height={270} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </div>

          <div className="graphic-box">
            <ScatterChart width={330} height={270}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" name="stature" unit="cm" />
              <YAxis dataKey="y" name="weight" unit="kg" />
              <Tooltip />
              <Scatter name="A school" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          </div>
        </Container>
      </Container>
    </BlankLayout>
  );
};

export default Acompanhamento;
