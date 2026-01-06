import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/Section";
import { TEAM } from "@/lib/content";
import { BUSINESS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Award, Users, Sparkles, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `Nossa Equipe - ${BUSINESS.name}`,
  description: "Conheça os profissionais especializados da nossa clínica odontológica.",
};

export default function EquipePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
        <div className="container-premium py-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Nossa Equipe
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Profissionais qualificados, experientes e dedicados ao seu bem-estar e satisfação
          </p>
        </div>
      </section>

      {/* Equipe */}
      <Section>
        <div className="container-premium">
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((member, index) => (
              <Card key={member.id} className="card-hover overflow-hidden">
                <div className="flex flex-col">
                  {/* Foto */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6">
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="font-serif text-2xl">{member.name}</CardTitle>
                      <CardDescription className="text-base">
                        {member.role}
                        <br />
                        <span className="font-mono text-sm text-muted-foreground">{member.cro}</span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 p-0">
                      {/* Especialidades */}
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((spec) => (
                          <Badge key={spec} variant="secondary">
                            {spec}
                          </Badge>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground">{member.bio}</p>

                      {/* CTA */}
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <a
                          href={getWhatsAppUrl({
                            treatment: "Consulta de avaliação",
                            message: `Gostaria de agendar com ${member.name}`
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Agendar com {member.name.split(" ")[0]}
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Diferenciais da Equipe */}
      <Section background="muted">
        <div className="container-premium">
          <SectionHeader
            title="Por Que Escolher Nossa Equipe?"
            subtitle="Diferenciais que fazem a diferença no seu tratamento"
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">
                Certificações e Especializações
              </h3>
              <p className="text-muted-foreground">
                Todos os profissionais possuem especializações reconhecidas e atualização constante
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">
                Atendimento Humanizado
              </h3>
              <p className="text-muted-foreground">
                Equipe treinada para oferecer acolhimento, escuta ativa e respeito às necessidades de cada paciente
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">
                Tecnologia de Ponta
              </h3>
              <p className="text-muted-foreground">
                Equipamentos modernos e técnicas atualizadas para tratamentos mais eficientes e confortáveis
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="gradient-primary text-white">
        <div className="container-premium text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Agende Sua Consulta
          </h2>
          <p className="mb-8 text-lg opacity-95">
            Nossa equipe está pronta para cuidar do seu sorriso
          </p>
          <Button asChild size="lg" className="bg-green-600 text-white shadow-2xl hover:bg-green-700 hover:scale-105">
            <a
              href={getWhatsAppUrl({ treatment: "Consulta de avaliação" })}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </Section>
    </div>
  );
}
