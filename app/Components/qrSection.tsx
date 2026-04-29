"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function QRSection() {
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      <QRCodeCanvas
        value="https://your-domain.com"
        size={100}
      />
      <p className="text-xs text-gray-400">Scan me</p>
    </div>
  );
} 