#!/bin/bash

# Script para calcular el tamaño del repositorio que se sincronizará en GitHub
# (excluyendo archivos ignorados por .gitignore)

format_bytes() {
  local bytes=$1
  if [ "$bytes" -lt 1024 ]; then
    echo "${bytes}B"
  elif [ "$bytes" -lt $((1024 * 1024)) ]; then
    echo "$((bytes / 1024))K"
  elif [ "$bytes" -lt $((1024 * 1024 * 1024)) ]; then
    echo "$((bytes / (1024 * 1024)))M"
  else
    echo "$((bytes / (1024 * 1024 * 1024)))G"
  fi
}

echo "📦 Calculando tamaño del repositorio..."
echo ""

# Tamaño total de archivos tracked (git ls-files devuelve solo archivos no ignorados)
TOTAL_KB=$(git ls-files -z | xargs -0 du -c | tail -1 | awk '{print $1}')
TOTAL_BYTES=$((TOTAL_KB * 1024))

echo "📊 Tamaño total a sincronizar en GitHub:"
echo "   $(format_bytes $TOTAL_BYTES)"
echo ""

echo "📁 Desglose por directorio:"
git ls-files | cut -d'/' -f1 | sort -u | while read dir; do
  SIZE_KB=$(git ls-files "$dir*" -z 2>/dev/null | xargs -0 du -c 2>/dev/null | tail -1 | awk '{print $1}')
  if [ -n "$SIZE_KB" ] && [ "$SIZE_KB" -gt 0 ]; then
    echo "   $dir: $(format_bytes $((SIZE_KB * 1024)))"
  fi
done

echo ""
echo "📌 Archivos más grandes:"
git ls-files -z | xargs -0 ls -lS | awk '{print $5 " " $9}' | head -5 | while read size file; do
  echo "   $file ($(format_bytes $size))"
done
