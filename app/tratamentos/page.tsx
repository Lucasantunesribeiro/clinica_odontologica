"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TREATMENTS, TREATMENT_CATEGORIES, type TreatmentCategory } from "@/lib/content";
import { getQuickScheduleUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/lib/constants";
import { Clock, ArrowRight } from "lucide-react";

export default function TratamentosPage() {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory | "all">("all");

  // Filtra tratamentos por categoria
  const filteredTreatments =
    selectedCategory === "all"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
        <div className="container-premium py-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Nossos Tratamentos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Soluções completas e personalizadas para todas as suas necessidades odontológicas
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="border-b bg-background py-6 shadow-sm">
        <div className="container-premium">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full"
            >
              Todos
            </Button>
            {TREATMENT_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Tratamentos */}
      <section className="py-16">
        <div className="container-premium">
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              {selectedCategory === "all"
                ? `${TREATMENTS.length} tratamentos disponíveis`
                : `${filteredTreatments.length} ${filteredTreatments.length === 1 ? "tratamento" : "tratamentos"} em ${
                    TREATMENT_CATEGORIES.find((c) => c.id === selectedCategory)?.name
                  }`}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTreatments.map((treatment) => {
              const category = TREATMENT_CATEGORIES.find((c) => c.id === treatment.category);

              return (
                <Card key={treatment.id} className="card-hover group flex flex-col overflow-hidden">
                  {/* Imagem */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {category && (
                      <Badge className="absolute left-4 top-4 bg-white/90 text-foreground backdrop-blur-sm">
                        {category.name}
                      </Badge>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{treatment.name}</CardTitle>
                    <CardDescription>{treatment.shortDescription}</CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{treatment.duration}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/tratamentos/${treatment.slug}`}>
                          Saiba Mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                        <a
                          href={getQuickScheduleUrl(treatment.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Agendar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 text-white">
        <div className="container-premium text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Não Encontrou o Que Procura?
          </h2>
          <p className="mb-8 text-lg opacity-95">
            Entre em contato conosco. Teremos prazer em esclarecer suas dúvidas
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
                "Olá! Gostaria de mais informações sobre tratamentos."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
