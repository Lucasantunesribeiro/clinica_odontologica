/**
 * Utilitários para WhatsApp
 */

import { BUSINESS, DEVELOPER } from "./constants";

export interface WhatsAppMessageData {
  treatment?: string;
  timePreference?: string;
  message?: string;
  name?: string;
}

/**
 * Gera URL do WhatsApp com mensagem pré-formatada para agendamento
 */
export function getWhatsAppUrl(data: WhatsAppMessageData, type: "business" | "developer" = "business"): string {
  const phone = type === "business" ? BUSINESS.whatsapp : DEVELOPER.whatsapp;

  let message = "";

  if (type === "developer") {
    // Mensagem para o desenvolvedor (portfólio)
    message = `Olá! Vi o site da *${BUSINESS.name}* e gostaria de um site parecido para meu negócio.`;
  } else {
    // Mensagem para agendamento na clínica
    message = `Olá! Gostaria de agendar uma consulta na *${BUSINESS.name}*.`;

    if (data.name) {
      message += `\n\n*Nome:* ${data.name}`;
    }

    if (data.treatment) {
      message += `\n*Tratamento de interesse:* ${data.treatment}`;
    }

    if (data.timePreference) {
      message += `\n*Preferência de horário:* ${data.timePreference}`;
    }

    if (data.message) {
      message += `\n\n*Observação:*\n${data.message}`;
    }
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Abre WhatsApp em nova janela
 */
export function openWhatsApp(data: WhatsAppMessageData, type: "business" | "developer" = "business"): void {
  const url = getWhatsAppUrl(data, type);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Gera URL de agendamento rápido (apenas tratamento)
 */
export function getQuickScheduleUrl(treatmentName: string): string {
  return getWhatsAppUrl({ treatment: treatmentName });
}
