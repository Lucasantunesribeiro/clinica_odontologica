import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section, SectionHeader } from "@/components/Section";
import { Gallery } from "@/components/Gallery";
import { ReviewCard } from "@/components/ReviewCard";
import { Stats } from "@/components/Stats";
import {
  ShieldCheck,
  Clock,
  CreditCard,
  CheckCircle,
  Calendar,
  ArrowRight,
  Star,
  Phone,
  MapPin
} from "lucide-react";
import { BUSINESS, DIFFERENTIALS, INSURANCE_PLANS, IMPORTANT_NOTICES, ABOUT, CLINIC_GALLERY } from "@/lib/constants";
import { TREATMENTS, TESTIMONIALS, TEAM, FAQS, TREATMENT_CATEGORIES } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  // Tratamentos em destaque
  const featuredTreatments = TREATMENTS.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* ========================================
          HERO
          ======================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-background">
        <div className="container-premium">
          <div className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-32">
            {/* Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="animate-fade-in-up font-serif">
                  {BUSINESS.tagline}
                </h1>
                <p className="animate-fade-in text-lg leading-relaxed text-muted-foreground lg:text-xl">
                  {BUSINESS.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group gap-2 shadow-premium transition-premium"
                >
                  <a
                    href={getWhatsAppUrl({ treatment: "Consulta de avaliação" })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Avaliação
                    <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 transition-premium hover:border-primary hover:text-primary"
                >
                  <Link href="/tratamentos">
                    Ver Tratamentos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Diferenciais inline */}
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {DIFFERENTIALS.map((diff) => (
                  <div
                    key={diff.title}
                    className="flex items-start gap-3 rounded-lg bg-card/50 p-4"
                  >
                    {diff.icon === "shield-check" && (
                      <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                    )}
                    {diff.icon === "clock" && (
                      <Clock className="h-5 w-5 shrink-0 text-primary" />
                    )}
                    {diff.icon === "credit-card" && (
                      <CreditCard className="h-5 w-5 shrink-0 text-primary" />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {diff.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {diff.description.split(".")[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-premium-lg">
                <Image
                  src="/clinic/hero.jpg"
                  alt="Consultório Sorrir+ Odontologia"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          AVISOS IMPORTANTES (DEMO - editável)
          ======================================== */}
      <Section background="muted" padding="sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          {IMPORTANT_NOTICES.map((notice) => (
            <div
              key={notice.id}
              className="flex items-center gap-3 rounded-lg bg-card px-6 py-3 shadow-sm"
            >
              {notice.icon === "check-circle" && (
                <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              )}
              {notice.icon === "clock" && (
                <Clock className="h-5 w-5 shrink-0 text-accent" />
              )}
              {notice.icon === "calendar" && (
                <Calendar className="h-5 w-5 shrink-0 text-accent" />
              )}
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {notice.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {notice.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ========================================
          TRATAMENTOS EM DESTAQUE
          ======================================== */}
      <Section>
        <SectionHeader
          badge="Especialidades"
          title="Tratamentos Odontológicos Completos"
          subtitle="Da prevenção à reabilitação total, oferecemos soluções para todas as suas necessidades"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTreatments.map((treatment) => {
            const category = TREATMENT_CATEGORIES.find(
              (c) => c.id === treatment.category
            );

            return (
              <Card
                key={treatment.id}
                className="group overflow-hidden card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {category?.name}
                  </Badge>
                  <CardTitle className="font-serif">{treatment.name}</CardTitle>
                  <CardDescription>{treatment.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={`/tratamentos/${treatment.slug}`}>
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/tratamentos">
              Ver Todos os Tratamentos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* ========================================
          SOBRE A CLÍNICA
          ======================================== */}
      <Section background="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-semibold uppercase tracking-wide text-primary">
                {ABOUT.subtitle}
              </p>
              <h2 className="font-serif">{ABOUT.title}</h2>
            </div>

            <div className="space-y-4">
              {ABOUT.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild size="lg">
                <a
                  href={getWhatsAppUrl({ message: "Gostaria de agendar uma consulta de avaliação." })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/equipe">Conheça a Equipe</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center">
            <Stats stats={ABOUT.stats} columns={2} />
          </div>
        </div>
      </Section>

      {/* ========================================
          EQUIPE
          ======================================== */}
      <Section>
        <SectionHeader
          badge="Profissionais"
          title="Nossa Equipe Especializada"
          subtitle="Dentistas qualificados e dedicados ao seu bem-estar"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <Card key={member.id} className="overflow-hidden text-center card-hover">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-lg">{member.name}</CardTitle>
                <CardDescription>
                  {member.role}
                  <br />
                  <span className="text-xs">{member.cro}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex flex-wrap justify-center gap-1">
                  {member.specialties.map((spec) => (
                    <Badge key={spec} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {member.bio.split(".")[0]}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/equipe">Ver Perfis Completos</Link>
          </Button>
        </div>
      </Section>

      {/* ========================================
          CONSULTÓRIO (GALERIA)
          ======================================== */}
      <Section background="muted">
        <SectionHeader
          badge="Espaço"
          title="Conheça Nossa Clínica"
          subtitle="Ambiente moderno, acolhedor e preparado para seu conforto"
        />

        <Gallery images={CLINIC_GALLERY} columns={4} />

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>
            {BUSINESS.address.neighborhood}, Rio de Janeiro • Fácil acesso de metrô e ônibus
          </span>
        </div>
      </Section>

      {/* ========================================
          DEPOIMENTOS
          ======================================== */}
      <Section>
        <SectionHeader
          badge="Avaliações"
          title="O Que Nossos Pacientes Dizem"
        />

        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">
            4.9 de 5 • {TESTIMONIALS.length}+ avaliações verificadas{" "}
            <span className="text-xs text-muted-foreground">(DEMO)</span>
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* ========================================
          FAQ
          ======================================== */}
      <Section background="muted">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badge="Dúvidas"
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas antes de agendar sua consulta"
          />

          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-sans">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ========================================
          CTA FINAL + CONVÊNIOS
          ======================================== */}
      <Section className="gradient-primary text-white" padding="default">
        <div className="text-center">
          <h2 className="mb-4 font-serif text-white">
            Pronto Para Cuidar do Seu Sorriso?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Agende sua consulta de avaliação e descubra como podemos ajudar você
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-green-600 text-white shadow-2xl hover:bg-green-700 hover:scale-105"
            >
              <a
                href={getWhatsAppUrl({ treatment: "Consulta de avaliação" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
            >
              <Link href="/contato">Ver Horários e Localização</Link>
            </Button>
          </div>

          {/* Convênios */}
          <div className="border-t border-white/20 pt-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-white/75">
              Aceitamos os Principais Convênios
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {INSURANCE_PLANS.slice(0, 6).map((plan) => (
                <span
                  key={plan}
                  className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  {plan}
                </span>
              ))}
              <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                e outros
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
