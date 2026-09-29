#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

OUT="assets/js/certs-data.js"

echo "/* Auto-generated. Do not hand-edit. Regenerate with build_certs_data.sh */" > "$OUT"
echo "window.CERT_FILES = window.CERT_FILES || {};" >> "$OUT"

add_file() {
  local key="$1"
  local mime="$2"
  local path="$3"
  printf 'window.CERT_FILES["%s"] = "data:%s;base64,' "$key" "$mime" >> "$OUT"
  base64 -w0 "$path" >> "$OUT"
  printf '";\n' >> "$OUT"
}

add_file "Claude Certificates/Claude Architechcertificate-Foundation.pdf" "application/pdf" "Claude Certificates/Claude Architechcertificate-Foundation.pdf"
add_file "Claude Certificates/Claude certificate-Early Adopter.pdf" "application/pdf" "Claude Certificates/Claude certificate-Early Adopter.pdf"
add_file "Microsoft Certified- Azure AI Fundamentals.png" "image/png" "Microsoft Certified- Azure AI Fundamentals.png"
add_file "QuadientCertificates/Inspire Designer Advanced_2EBCED424E4CA94282B755A6FAFEB125.pdf" "application/pdf" "QuadientCertificates/Inspire Designer Advanced_2EBCED424E4CA94282B755A6FAFEB125.pdf"
add_file "QuadientCertificates/Inspire Designer Basic_47D7E91107A09047A49AECA8871D941A.pdf" "application/pdf" "QuadientCertificates/Inspire Designer Basic_47D7E91107A09047A49AECA8871D941A.pdf"
add_file "QuadientCertificates/Inspire Designer Scripting_9F422F41C59AF540B8CCFED5CEFC9999.pdf" "application/pdf" "QuadientCertificates/Inspire Designer Scripting_9F422F41C59AF540B8CCFED5CEFC9999.pdf"
add_file "QuadientCertificates/Inspire Interactive Advanced_69458FA73500D047B90413EA0762BC87.pdf" "application/pdf" "QuadientCertificates/Inspire Interactive Advanced_69458FA73500D047B90413EA0762BC87.pdf"
add_file "QuadientCertificates/Inspire Interactive Basic_6BC4E5D7E1E31B4AA432C58DA434F1F1.pdf" "application/pdf" "QuadientCertificates/Inspire Interactive Basic_6BC4E5D7E1E31B4AA432C58DA434F1F1.pdf"
add_file "QuadientCertificates/Inspire Scaler Advanced_A9E5C8B914F0BF4F98D83F019673821E.pdf" "application/pdf" "QuadientCertificates/Inspire Scaler Advanced_A9E5C8B914F0BF4F98D83F019673821E.pdf"
add_file "QuadientCertificates/Inspire Scaler Basic_DD1896D59C4D1242A60A67BBF3E64B29.pdf" "application/pdf" "QuadientCertificates/Inspire Scaler Basic_DD1896D59C4D1242A60A67BBF3E64B29.pdf"
add_file "QuadientCertificates/Dynamic Communications Basic_3B7A335D30D71E46BD7F44A86185CB1F.pdf" "application/pdf" "QuadientCertificates/Dynamic Communications Basic_3B7A335D30D71E46BD7F44A86185CB1F.pdf"
add_file "QuadientCertificates/Inspire Content Manager Basic_9BD7865FC9423D4997A552965E5981D8.pdf" "application/pdf" "QuadientCertificates/Inspire Content Manager Basic_9BD7865FC9423D4997A552965E5981D8.pdf"

# Quadient badge images (visual badges shown under Education & Certifications)
add_file "QuadientCertificates/DesignerAdvanced.png" "image/png" "QuadientCertificates/DesignerAdvanced.png"
add_file "QuadientCertificates/DesignerBasic.png" "image/png" "QuadientCertificates/DesignerBasic.png"
add_file "QuadientCertificates/DesignerScripting.png" "image/png" "QuadientCertificates/DesignerScripting.png"
add_file "QuadientCertificates/DynamicCommunication.png" "image/png" "QuadientCertificates/DynamicCommunication.png"
add_file "QuadientCertificates/ICM.png" "image/png" "QuadientCertificates/ICM.png"
add_file "QuadientCertificates/InteractiveAdvanced.png" "image/png" "QuadientCertificates/InteractiveAdvanced.png"
add_file "QuadientCertificates/InteractiveBasic.png" "image/png" "QuadientCertificates/InteractiveBasic.png"
add_file "QuadientCertificates/SCalerAdvanced.png" "image/png" "QuadientCertificates/SCalerAdvanced.png"
add_file "QuadientCertificates/ScalerBasic.png" "image/png" "QuadientCertificates/ScalerBasic.png"
add_file "QuadientCertificates/QuadientR17FirstMover.png" "image/png" "QuadientCertificates/QuadientR17FirstMover.png"

wc -c "$OUT"
echo "DONE"
