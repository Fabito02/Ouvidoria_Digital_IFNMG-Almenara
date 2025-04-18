import React from "react";
import "./CardInfo.css";

type CardInfoProps = {
  conteudo_cards: Array<{
    total: number;
    titulo: string;
    cor?: string;
  }>;
};

export default function CardInfo({ conteudo_cards }: CardInfoProps) {
  return (
    <section className="info-cards py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conteudo_cards.map((card, index) => (
            <div
              key={index}
              className={`card-info shadow-sm ${card.cor ?? "primary"}`}
            >
              <h1 className="total">{card.total}</h1>
              <h2 className="titulo-card-info  text-gray-200 mt-13">{card.titulo}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}