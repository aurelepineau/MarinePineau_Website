"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

interface ObfuscatedEmailProps {
  email: string;
  label?: string;
}

export default function ObfuscatedEmail({ email, label = "Me contacter par email" }: ObfuscatedEmailProps) {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-start">
        {!isVisible ? (
            <button 
                onClick={() => setIsVisible(true)}
                className="flex items-center text-xl font-light hover:text-marine-yellow transition-colors underline decoration-dotted underline-offset-4 text-left"
            >
                <Mail className="mr-4 w-6 h-6 flex-shrink-0" /> 
                {label}
            </button>
        ) : (
            <div className="flex flex-wrap items-center gap-4 animate-in fade-in duration-300">
                <a 
                    href={`mailto:${email}`}
                    className="flex items-center text-xl font-light hover:text-marine-yellow transition-colors break-all"
                >
                    <Mail className="mr-4 w-6 h-6 flex-shrink-0" /> 
                    {email}
                </a>
                <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
                    title="Copier l'email"
                >
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </button>
            </div>
        )}
    </div>
  );
}


