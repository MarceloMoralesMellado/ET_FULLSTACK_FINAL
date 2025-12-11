"use client"

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import "./swagger-custom.css"
import { spec } from "@/lib/swagger-spec"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PaginaDocumentacionAPI() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="prose prose-green max-w-none mb-8">
          <Button asChild variant="outline" className="mb-6 gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" /> Volver a la Tienda
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-primary mb-2">Documentación del API</h1>
          <p className="text-muted-foreground">
            Explora y prueba los endpoints de Huerto Hogar directamente desde esta interfaz interactiva.
          </p>
        </div>
        <div className="bg-card rounded-xl shadow-sm border p-1 overflow-hidden">
          <SwaggerUI spec={spec} />
        </div>
      </div>
    </div>
  )
}
