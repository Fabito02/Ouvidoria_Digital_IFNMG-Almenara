import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, Container } from "react-bootstrap";

const data = [
  { name: 'Jan', total: 120 },
  { name: 'Fev', total: 98 },
  { name: 'Mar', total: 140 },
  { name: 'Abr', total: 115 },
];

const Geral = () => (
    <Container>
    <Card className="p-4">
    <h4 className="mb-4">Visão Geral das Manifestações</h4>
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
        </BarChart>
    </ResponsiveContainer>
    </Card>
        <Card className="p-4">
        <h4 className="mb-4">Visão Geral das Manifestações</h4>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </Card>
        <Card className="p-4">
        <h4 className="mb-4">Visão Geral das Manifestações</h4>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </Card>
        <Card className="p-4">
        <h4 className="mb-4">Visão Geral das Manifestações</h4>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </Card>
        <Card className="p-4">
        <h4 className="mb-4">Visão Geral das Manifestações</h4>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </Card>
        <Card className="p-4">
        <h4 className="mb-4">Visão Geral das Manifestações</h4>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </Card>
        <Card className="p-4">
        <h4 className="mb-4">Visão Geral das Manifestações</h4>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </Card>
    </Container>
);

export default Geral;