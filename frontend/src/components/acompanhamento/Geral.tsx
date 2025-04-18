import { Bar, BarChart, CartesianGrid, XAxis, LabelList, Line, LineChart, Pie, PieChart, Cell, Label } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CardInfo from "../card-info/CardInfo"

const data_cards = [
  { cor: "danger", total: 32, titulo: "Manifestações" },
  { cor: "warning", total: 15, titulo: "Pendentes" },
  { cor: "info", total: 3, titulo: "Em andamento" },
  { cor: "success", total: 12, titulo: "Concluído" },
]

const visãoGeral = [
  { nome: "Reclamações", Total: 196, fill: "var(--color-secondary)" },
  { nome: "Elogios", Total: 30, fill: "var(--color-info)" },
  { nome: "Denúncias", Total: 160, fill: "var(--color-danger)" },
  { nome: "Sugestões", Total: 73, fill: "var(--color-success)" },
]

const totalManifestacoes = [
  { dia: "Segunda", Total: 266 },
  { dia: "Terça", Total: 505 },
  { dia: "Quarta", Total: 357 },
  { dia: "Quinta", Total: 263 },
  { dia: "Sexta", Total: 339 },
  { dia: "Sábado", Total: 354 },
  { dia: "Domingo", Total: 400 }
]

const chartConfig = {
  Reclamações: {
    label: "",
    color: "var(--color-secondary)",
  },
  Elogios: {
    label: "",
    color: "var(--color-info)",
  },
  Denúncias: {
    label: "",
    color: "var(--color-danger)",
  },
  Sugestões: {
    label: "",
    color: "var(--color-success)",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <div className="p-4">
      <CardInfo conteudo_cards={data_cards} className="mt-4 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Manifestações</CardTitle>
            <CardDescription>Número total nos últimos 7 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="w-full h-[auto] max-h-[300px]" >
              <LineChart
                accessibilityLayer
                data={totalManifestacoes}
                margin={{
                  top: 20,
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey=" "
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="Total"
                  type="natural"
                  stroke="var(--color-secondary)"
                  strokeWidth={2}
                  dot={{
                    fill: "var(--color-secondary)",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle>Visão Geral das Manifestações</CardTitle>
            <CardDescription>Com base em dados dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={visãoGeral}
            dataKey="Total"
            nameKey="nome"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                const total = visãoGeral.reduce((acc, curr) => acc + curr.Total, 0)
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
            return (
              <text
                x={viewBox.cx}
                y={viewBox.cy}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan
                  x={viewBox.cx}
                  y={viewBox.cy}
                  className="fill-foreground text-3xl font-bold"
                >
                  {total.toLocaleString()}
                </tspan>
                <tspan
                  x={viewBox.cx}
                  y={(viewBox.cy || 0) + 24}
                  className="fill-muted-foreground"
                >
                  Total
                </tspan>
              </text>
            )
                }
              }}
            />
            {visãoGeral.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
        <CardTitle>Visão Geral das Manifestações</CardTitle>
        <CardDescription>Com base em dados dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[300px]">
          <BarChart data={visãoGeral}>
            <CartesianGrid vertical={false} />
            <XAxis
          dataKey="nome"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
          dataKey="Total"
          fill="fill"
          radius={10}
            />
          </BarChart>
        </ChartContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}