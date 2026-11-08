#!/usr/bin/env bash
# Inter 4 (public/fonts/Inter-Variable.woff2) has an optical-size axis that Chrome sets to the font size on its own
# (font-optical-sizing: auto). Pen can't, so this writes one static-opsz instance per size the pages use (weight
# axis kept), named "Inter <opsz>" in the .pen. Generated locally into design/fonts/ (gitignored). Needs uv (uvx).
set -euo pipefail
here=$(cd "$(dirname "$0")" && pwd)
src="$here/../../public/fonts/Inter-Variable.woff2"
for opsz in "${@:-14 15 16 17 18 20 22 24 26 28 30 32}"; do
  for o in $opsz; do
    out="$here/Inter-opsz$o.ttf"
    [ -f "$out" ] && continue
    uvx --quiet --from 'fonttools[woff]' fonttools varLib.instancer "$src" "opsz=$o" -o "$out" >/dev/null 2>&1
    echo "made $out"
  done
done
