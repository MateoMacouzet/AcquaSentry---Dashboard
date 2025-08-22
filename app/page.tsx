"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, Satellite, Users, Crown } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("perfil")

  const renderActiveTab = () => {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Próximamente</h3>
          <p className="text-muted-foreground">Esta funcionalidad estará disponible pronto</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Configuración</h1>
              <p className="text-muted-foreground">
                Gestiona tu perfil, notificaciones, dispositivos Sentry y equipo de trabajo.
              </p>
            </div>

            <Card className="bg-card/50 border-border">
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-5 mb-6">
                    <TabsTrigger value="perfil" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Perfil
                    </TabsTrigger>
                    <TabsTrigger value="notificaciones" className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      Notificaciones
                    </TabsTrigger>
                    <TabsTrigger value="sentrys" className="flex items-center gap-2">
                      <Satellite className="h-4 w-4" />
                      Gestión de Sentrys
                    </TabsTrigger>
                    <TabsTrigger value="equipo" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Equipo
                    </TabsTrigger>
                    <TabsTrigger value="suscripcion" className="flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Suscripción
                    </TabsTrigger>
                  </TabsList>

                  <div className="min-h-[400px]">{renderActiveTab()}</div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
