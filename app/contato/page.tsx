"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/Section";
import { BUSINESS } from "@/lib/constants";
import { TREATMENTS, TIME_PREFERENCES } from "@/lib/content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Code } from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    treatment: "",
    timePreference: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Abre WhatsApp com mensagem pré-preenchida
    const url = getWhatsAppUrl({
      name: formData.name,
      treatment: formData.treatment,
      timePreference: formData.timePreference,
      message: formData.message,
    });

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-background">
        <div className="container-premium py-16 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
            Entre em Contato
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Preencha o formulário ou entre em contato diretamente pelo WhatsApp
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <Section>
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Formulário */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Solicitar Agendamento</CardTitle>
                <CardDescription>
                  Preencha os dados abaixo e entraremos em contato para confirmar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <Label htmlFor="treatment">Tratamento de Interesse</Label>
                    <Select
                      value={formData.treatment}
                      onValueChange={(value) => setFormData({ ...formData, treatment: value })}
                    >
                      <SelectTrigger id="treatment">
                        <SelectValue placeholder="Selecione um tratamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Consulta de avaliação">Consulta de avaliação</SelectItem>
                        {TREATMENTS.map((treatment) => (
                          <SelectItem key={treatment.id} value={treatment.name}>
                            {treatment.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timePreference">Preferência de Horário</Label>
                    <Select
                      value={formData.timePreference}
                      onValueChange={(value) => setFormData({ ...formData, timePreference: value })}
                    >
                      <SelectTrigger id="timePreference">
                        <SelectValue placeholder="Selecione um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_PREFERENCES.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Observações</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Alguma informação adicional que gostaria de compartilhar?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2 bg-primary hover:bg-primary/90">
                    <MessageCircle className="h-4 w-4" />
                    Enviar pelo WhatsApp
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Ao clicar, você será redirecionado para o WhatsApp com a mensagem pré-preenchida
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              {/* Endereço e Contato */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Endereço</h3>
                      <p className="text-sm text-muted-foreground">
                        {BUSINESS.address.street}
                        {BUSINESS.address.complement && `, ${BUSINESS.address.complement}`}
                        <br />
                        {BUSINESS.address.neighborhood} - {BUSINESS.address.city}/{BUSINESS.address.state}
                        <br />
                        CEP: {BUSINESS.address.zip}
                      </p>
                      <a
                        href={BUSINESS.address.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        Ver no Google Maps
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Telefone</h3>
                      <a
                        href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">WhatsApp da Clínica</h3>
                      <a
                        href={getWhatsAppUrl({ treatment: "Consulta de avaliação" })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:underline"
                      >
                        Clique para conversar
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">E-mail</h3>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horários */}
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <CardTitle className="font-serif text-xl">Horário de Funcionamento</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-medium">Segunda a Sexta:</span>
                    <span className="text-muted-foreground">{BUSINESS.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-medium">Sábado:</span>
                    <span className="text-muted-foreground">{BUSINESS.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingo:</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                  {BUSINESS.hours.extended && (
                    <p className="mt-4 text-xs text-muted-foreground">
                      {BUSINESS.hours.extended}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Mapa */}
      <Section background="muted">
        <div className="container-premium">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <h2 className="mb-2 font-serif text-3xl font-bold">Nossa Localização</h2>
              <p className="text-muted-foreground">
                {BUSINESS.address.neighborhood}, {BUSINESS.address.city}
              </p>
            </div>
            <Card className="overflow-hidden shadow-premium-lg">
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={BUSINESS.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da clínica"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Transporte:</strong> Fácil acesso por transporte público e veículo próprio. Estacionamento conveniado nas proximidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer com Crédito do Desenvolvedor */}
      <Section className="border-t">
        <div className="container-premium">
          <Card className="card-hover border-dashed">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Desenvolvido por Lucas Antunes</h3>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvimento web profissional
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Badge variant="secondary" className="justify-center">
                    Portfolio Developer
                  </Badge>
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a
                      href="https://wa.me/5521996805944?text=Olá!%20Vi%20seu%20trabalho%20no%20site%20da%20clínica%20odontológica%20e%20gostaria%20de%20conversar%20sobre%20desenvolvimento%20web."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar com Desenvolvedor
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
