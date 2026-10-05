"use client";

import { useState } from "react";
import { CertificateGroup } from "@/lib/certificates";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, ChevronDown, ChevronUp, FileText } from "lucide-react";

interface CertificateSectionProps {
  group: CertificateGroup;
}

export function CertificateSection({ group }: CertificateSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-border">
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label={group.institution}>
              {group.icon}
            </span>
            <div>
              <CardTitle className="text-xl">{group.institution}</CardTitle>
              <CardDescription className="mt-1">
                {group.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className={`${group.color} border font-medium`}
            >
              {group.certificates.length}{" "}
              {group.certificates.length === 1
                ? "certificado"
                : "certificados"}
            </Badge>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <div className="grid gap-2">
            {group.certificates.map((cert) => (
              <a
                key={cert.name}
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-transparent px-4 py-3 transition-all hover:bg-accent hover:border-border/50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium truncate group-hover:text-foreground transition-colors">
                    {cert.name}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground/50 shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
