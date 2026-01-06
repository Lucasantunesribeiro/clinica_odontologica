#!/usr/bin/env node

/**
 * Script para baixar imagens royalty-free do Unsplash para o projeto
 * Execução: node scripts/fetch-assets.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/clinic');

// URLs diretas do Unsplash com parâmetros de qualidade e tamanho
const IMAGES = {
  // Hero image - consultório moderno e clean
  'hero.jpg': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop&q=85',

  // Equipe - dentistas profissionais (usar fotos com pessoas brancas/diversas)
  'team-1.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&q=80',
  'team-2.jpg': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop&q=80',
  'team-3.jpg': 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop&q=80',
  'team-4.jpg': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop&q=80',

  // Consultório - ambiente, equipamentos
  'clinic-1.jpg': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=85',
  'clinic-2.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=85',
  'clinic-3.jpg': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=85',
  'clinic-4.jpg': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=800&fit=crop&q=85',
  'clinic-5.jpg': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=80',
  'clinic-6.jpg': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=800&fit=crop&q=85',
  'clinic-7.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=80',
  'clinic-8.jpg': 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=800&fit=crop&q=85',

  // Tratamentos específicos
  'treatment-implante.jpg': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=85',
  'treatment-clareamento.jpg': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=800&fit=crop&q=85',
  'treatment-ortodontia.jpg': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=800&fit=crop&q=85',
  'treatment-lentes.jpg': 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=800&fit=crop&q=85',
  'treatment-protese.jpg': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=85',
  'treatment-limpeza.jpg': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=80',
  'treatment-canal.jpg': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&h=800&fit=crop&q=80',
  'treatment-alinhadores.jpg': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&h=800&fit=crop&q=85',
};

async function downloadImage(url, filename) {
  try {
    const outputPath = path.join(OUTPUT_DIR, filename);

    // Pula se já existe
    if (fs.existsSync(outputPath)) {
      console.log(`✓ ${filename} já existe`);
      return true;
    }

    console.log(`⬇ Baixando ${filename}...`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(outputPath, Buffer.from(buffer));

    console.log(`✓ ${filename} baixado (${(buffer.byteLength / 1024).toFixed(0)}KB)`);
    return true;
  } catch (error) {
    console.error(`✗ Erro ao baixar ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🖼️  Baixando imagens para /public/clinic/\n');

  // Garante que o diretório existe
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const entries = Object.entries(IMAGES);
  let success = 0;
  let failed = 0;

  for (const [filename, url] of entries) {
    const result = await downloadImage(url, filename);
    if (result) success++;
    else failed++;

    // Delay para não sobrecarregar o servidor
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\n✅ Concluído: ${success} sucesso, ${failed} falhas`);

  if (failed > 0) {
    console.log('\n⚠️  Algumas imagens falharam. Você pode:');
    console.log('  1. Executar o script novamente');
    console.log('  2. Baixar manualmente do Unsplash e colocar em /public/clinic/');
  }
}

main().catch(console.error);
