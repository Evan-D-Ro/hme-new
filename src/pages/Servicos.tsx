import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Users,
  Building,
  CheckCircle,
  Target,
  Heart,
  Settings,
  Award,
  TrendingUp,
  Shield
} from "lucide-react";
import heroCursos from "@/assets/hero-cursos.webp";
import aprisco from "@/assets/aprisco.webp";
import heroHemodialise from "@/assets/hero-hemodialise.webp";
const Servicos = () => {
  const handleContactForm = () => {
    // Scroll to contact form or open contact page
    window.location.href = "/fale-conosco";
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Soluções Especializadas para Sua Instituição
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Oferecemos três grandes frentes de atuação com foco na excelência,
              legalidade e resultados sustentáveis
            </p>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="section-padding bg-white">
          <div className="container">
            <Tabs defaultValue="captacao" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto">
                <TabsTrigger value="captacao" className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Captação de Recursos</div>
                      <div className="text-sm text-muted-foreground">Recursos Federais</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="medicos" className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Serviços Médicos</div>
                      <div className="text-sm text-muted-foreground">Equipes Especializadas</div>
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="hemodialise" className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Hemodiálise</div>
                      <div className="text-sm text-muted-foreground">Clínicas Completas</div>
                    </div>
                  </div>
                </TabsTrigger>
              </TabsList>

              {/* Captação de Recursos */}
              <TabsContent value="captacao" id="captacao">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Texto principal */}
                  <div className="self-center">
                    <h2 className="mb-6">Captação de Recursos Federais</h2>
                    <p className="text-lg mb-6">
                      A HME é referência nacional na assessoria técnica para captação de recursos da União,
                      com foco em prefeituras, organizações religiosas e entidades do terceiro setor.
                    </p>
                    <p className="text-lg mb-6">
                      Nosso trabalho começa com um diagnóstico completo da instituição, seguido de orientação
                      para reorganização administrativa, jurídica e assistencial, com o objetivo de torná-la
                      apta a operar com recursos públicos via a plataforma <strong>Transfere Gov</strong>.
                    </p>
                    <p className="text-lg mb-6">
                      Cuidamos de todo o processo:
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Estruturação institucional e documentação</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Elaboração de projetos conforme as diretrizes legais</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Submissão de propostas em sistemas oficiais</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Acompanhamento técnico e correção de pendências</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Prestação de contas qualificada e monitoramento da execução</span>
                      </div>
                    </div>

                    <p className="text-lg mb-6">
                      Esse serviço é fundamental para instituições que desejam ampliar sua capacidade de ação
                      e garantir recursos de forma contínua, legal e transparente.
                    </p>

                    <Button size="lg" onClick={handleContactForm}>
                      Solicitar Proposta
                    </Button>
                  </div>

                  {/* Imagens ilustrativas */}
                  <div className="space-y-6">
                    <img
                      src={heroCursos}
                      alt="Diagnóstico institucional"
                      className="rounded-xl shadow-md"
                    />
                    <img
                      src={aprisco}
                      alt="Elaboração de projetos"
                      className="rounded-xl shadow-md"
                    />

                  </div>
                </div>
              </TabsContent>

              {/* Serviços Médicos */}
              <TabsContent value="medicos" id="medicos">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Texto principal */}
                  <div className="self-center">
                    <h2 className="mb-6">Serviços Médicos</h2>
                    <p className="text-lg mb-6">
                      Oferecemos a alocação e gestão completa de equipes multiprofissionais
                      para unidades de saúde, com médicos, enfermeiros, técnicos e especialistas
                      contratados de forma legal e estratégica.
                    </p>
                    <p className="text-lg mb-6">
                      Garantimos que cada território tenha acesso a profissionais qualificados,
                      com foco na melhoria da assistência e na eficiência do serviço público
                      de saúde.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Users className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Gestão Completa</h4>
                          <p className="text-muted-foreground">
                            Alocação de profissionais, contratos legais, escalas e gestão
                            integrada das equipes de saúde.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Settings className="h-6 w-6 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Eficiência Operacional</h4>
                          <p className="text-muted-foreground">
                            Foco na melhoria contínua da assistência e na sustentabilidade
                            das instituições atendidas.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button size="lg" onClick={handleContactForm}>
                      Solicitar Proposta
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-primary mb-4">Clínicas de Hemodiálise</h3>
                        <p className="mb-4">
                          Implantamos clínicas desde a aprovação do projeto até a execução
                          dos serviços: projeto técnico, estrutura física, equipamentos,
                          equipe multidisciplinar, contratos, escalas, manutenção, regulação
                          e gestão operacional.
                        </p>
                        <p className="mb-4">
                          Também oferecemos apoio técnico para clínicas já existentes —
                          públicas, privadas ou filantrópicas — com soluções específicas
                          para todas as áreas administrativas e assistenciais.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h3 className="mb-4">O impacto de uma gestão que transforma</h3>
                        <p className="mb-4">
                          A HME Soluções e Saúde existe para propor soluções simples e
                          inovadoras para problemas complexos, com seriedade, competência
                          técnica e sensibilidade social.
                        </p>
                        <p className="mb-4">
                          Sempre guiada pelo compromisso com o bem comum e com a
                          sustentabilidade das instituições que atende.
                        </p>
                        <div className="text-sm text-muted-foreground">
                          Afinal, quando a gestão funciona, o cuidado chega onde mais
                          importa: na vida das pessoas.
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Hemodiálise */}
              <TabsContent value="hemodialise" id="hemodialise">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Texto principal */}
                  <div className="self-center">
                    <h2 className="mb-6">Implantação e Gestão de Clínicas de Hemodiálise</h2>
                    <p className="text-lg mb-6">
                      A HME oferece soluções completas para a implantação de clínicas de hemodiálise,
                      atuando desde a concepção até a operação plena do serviço.
                    </p>

                    <p className="text-lg mb-6">Assumimos todas as etapas do processo:</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Elaboração de projeto técnico e arquitetônico</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Adequação física do espaço segundo normas da Anvisa e do Ministério da Saúde</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Aquisição de equipamentos e insumos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Contratação e formação da equipe multidisciplinar</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Gestão clínica, operacional e administrativa contínua</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                        <span>Regulação de pacientes, escalas, contratos e indicadores de qualidade</span>
                      </div>
                    </div>

                    <p className="text-lg mb-6">
                      Além disso, também prestamos consultoria para clínicas já existentes: públicas, privadas ou filantrópicas,
                      oferecendo apoio técnico especializado em todas as frentes operacionais e administrativas, promovendo
                      mais eficiência, regularidade e segurança assistencial.
                    </p>

                    <Button size="lg" onClick={handleContactForm}>
                      Solicitar Proposta
                    </Button>
                  </div>


                  <div className="space-y-6">
                    <Card className="card-hover">
                      <div className="space-y-6">
                        <img
                          src={heroHemodialise}
                          alt="Diagnóstico institucional"
                          className="rounded-xl shadow-md"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="mb-4">Serviços Completos</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Gestão clínica e operacional
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Regulação e autorização de procedimentos
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Controle de indicadores de qualidade
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Gestão de protocolos assistenciais
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Treinamento contínuo de equipes
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div >
        </section >

        {/* CTA Section */}
        <section className="section-padding gradient-primary text-white" >
          <div className="container text-center">
            <h2 className="mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver a solução ideal
              para as necessidades específicas da sua instituição.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open("https://wa.me/5518997852512?text=Olá! Gostaria de solicitar uma proposta para os serviços da HME.", "_blank")}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </section >
      </main >

      <Footer />
    </div >
  );
};

export default Servicos;