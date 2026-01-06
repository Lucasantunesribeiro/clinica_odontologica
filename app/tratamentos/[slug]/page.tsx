import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeader } from "@/components/Section";
import { TREATMENTS, TREATMENT_CATEGORIES } from "@/lib/content";
import { getQuickScheduleUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/lib/constants";
import { CheckCircle2, Clock, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    return {
      title: "Tratamento não encontrado",
    };
  }

  const categoryName = TREATMENT_CATEGORIES.find((c) => c.id === treatment.category)?.name;

  return {
    title: `${treatment.name} - ${BUSINESS.name}`,
    description: treatment.shortDescription,
    keywords: `${treatment.name}, ${categoryName}, odontologia, dentista, ${BUSINESS.address.city}`,
    openGraph: {
      title: `${treatment.name} - ${BUSINESS.name}`,
      description: treatment.shortDescription,
      type: "website",
    },
  };
}

export default async function TratamentoPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const category = TREATMENT_CATEGORIES.find((c) => c.id === treatment.category);

  // Tratamentos relacionados (mesma categoria, exceto o atual)
  const relatedTreatments = TREATMENTS.filter(
    (t) => t.category === treatment.category && t.id !== treatment.id
  ).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb e Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
        <div className="container-premium py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/tratamentos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Tratamentos
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div>
                {category && (
                  <Badge variant="secondary" className="mb-3">
                    {category.name}
                  </Badge>
                )}
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                  {treatment.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {treatment.shortDescription}
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Duração:</span>
                <span className="text-muted-foreground">{treatment.duration}</span>
              </div>

              <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <a
                  href={getQuickScheduleUrl(treatment.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Imagem */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-lg">
              <Image
                src={treatment.image}
                alt={treatment.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Descrição Completa */}
      <Section>
        <div className="container-premium">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold">O que é?</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {treatment.fullDescription}
              </p>
            </div>

            {/* Para quem é indicado */}
            {treatment.forWhom && treatment.forWhom.length > 0 && (
              <div>
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  Para quem é indicado
                </h2>
                <ul className="space-y-3">
                  {treatment.forWhom.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Como funciona */}
            {treatment.howItWorks && treatment.howItWorks.length > 0 && (
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold">Como funciona</h2>
                <div className="space-y-4">
                  {treatment.howItWorks.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        {index + 1}
                      </div>
                      <p className="pt-1 text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* FAQs */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <Section background="muted">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl">
              <SectionHeader
                title="Perguntas Frequentes"
                subtitle={`Tire suas dúvidas sobre ${treatment.name.toLowerCase()}`}
                centered={false}
              />
              <Accordion type="single" collapsible className="space-y-4">
                {treatment.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="rounded-xl border-border bg-card px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Section>
      )}

      {/* Tratamentos Relacionados */}
      {relatedTreatments.length > 0 && (
        <Section>
          <div className="container-premium">
            <SectionHeader
              title="Outros Tratamentos"
              subtitle={category ? `Veja mais opções em ${category.name}` : "Conheça outras soluções"}
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedTreatments.map((related) => (
                <Card key={related.id} className="card-hover flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{related.name}</CardTitle>
                    <CardDescription>{related.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/tratamentos/${related.slug}`}>
                        Saiba Mais
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA Final */}
      <Section background="gradient" className="gradient-primary text-white">
        <div className="container-premium text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Pronto para Transformar Seu Sorriso?
          </h2>
          <p className="mb-8 text-lg opacity-95">
            Agende uma consulta de avaliação e conheça a melhor solução para o seu caso
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a
                href={getQuickScheduleUrl(treatment.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
                <Phone className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
                  `Olá! Gostaria de mais informações sobre ${treatment.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
