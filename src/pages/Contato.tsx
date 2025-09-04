import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send
} from "lucide-react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    city: "",
    state: "",
    subject: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "É necessário aceitar os termos de privacidade para enviar o formulário.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Nossa equipe responderá em breve.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        city: "",
        state: "",
        subject: "",
        message: "",
        consent: false
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518997852512?text=Olá! Gostaria de falar com a equipe da HME.", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-overlay text-white section-padding">
          <div className="container text-center">
            <h1 className="mb-6 animate-fade-in">
              Fale Conosco
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Entre em contato conosco e transforme a realidade da sua instituição!
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 card-hover">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <a
                  href="mailto:solucoes@hmesaude.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  solucoes@hmesaude.com.br
                </a>
              </Card>

              <Card className="text-center p-6 card-hover">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telefone</h3>
                <a
                  href="tel:+5518997852512"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (18) 99785-2512
                </a>
              </Card>

              <Card className="text-center p-6 card-hover">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Horário</h3>
                <p className="text-muted-foreground text-sm">
                  Segunda a sexta<br />
                  das 8h às 18h
                </p>
              </Card>

              <Card className="text-center p-6 card-hover">
                <div className="flex justify-center gap-3 mb-4">
                  <a href="https://www.instagram.com/hmesolucoesesaude/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-8 w-8 text-primary" />
                  </a>
                  <a href="https://www.facebook.com/hmesolucoesesaude" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-8 w-8 text-primary" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCd-bmLoDXJdI6kjbaPvuTNg" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-8 w-8 text-primary" />
                  </a>
                </div>
                <h3 className="font-semibold mb-2">Redes Sociais</h3>
                <p className="text-muted-foreground text-sm">Siga-nos</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Envie sua mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-6"
                    action="https://script.google.com/macros/s/AKfycbziZS0zDF2s581wlAksZAT23CkbGRdZuwtATnnrTp8kx9PNx0TUMyJbhA6sIHSjd679/exec"
                    method="POST"
                    target="invisible_iframe"
                    onSubmit={(e) => {
                      if (!formData.consent) {
                        e.preventDefault();
                        toast({
                          title: "Consentimento necessário",
                          description: "Por favor, autorize o uso dos seus dados para prosseguir.",
                          variant: "destructive",
                        });
                        return;
                      }
                      setIsSubmitting(true);
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="institution">Instituição</Label>
                        <Input
                          id="institution"
                          name="institution"
                          type="text"
                          value={formData.institution}
                          onChange={(e) => setFormData((prev) => ({ ...prev, institution: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                          id="city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">Estado</Label>
                        <Input
                          id="state"
                          name="state"
                          type="text"
                          value={formData.state}
                          onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Assunto *</Label>
                      <Select
                        name="subject"
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="captacao">Captação de Recursos</SelectItem>
                          <SelectItem value="medicos">Serviços Médicos</SelectItem>
                          <SelectItem value="hemodialise">Hemodiálise</SelectItem>
                          <SelectItem value="cursos">Cursos</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Descreva sua necessidade ou dúvida..."
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: !!checked }))}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        Autorizo o uso dos meus dados pessoais conforme a{" "}
                        <a href="/politica-privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                        . Estou ciente de que poderei revogar este consentimento a qualquer momento. *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>

                </CardContent>
                <iframe
                  name="invisible_iframe"
                  style={{ display: "none" }}
                  onLoad={() => {
                    // verifica se algum campo foi preenchido
                    const hasData = Object.values(formData).some(
                      (value) => value !== "" && value !== false
                    );

                    if (hasData) {
                      toast({
                        title: "Contato enviado!",
                        description: "Nossa equipe entrará em contato em breve.",
                      });

                      // reseta todos os campos do formulário
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        institution: "",
                        city: "",
                        state: "",
                        subject: "",
                        message: "",
                        consent: false,
                      });

                      setIsSubmitting(false); // volta ao estado normal
                    }
                  }}
                />

              </Card>

              {/* Addresses */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Nossos Endereços</h2>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Matriz - Presidente Prudente/SP</h3>
                        <p className="text-muted-foreground mb-3">
                          Rua Padre João Goetz, 501<br />
                          Presidente Prudente/SP<br />
                          CEP: 19061-460
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href="https://maps.google.com/?q=Rua+Padre+João+Goetz,+501,+Presidente+Prudente"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver no Mapa
                            </a>
                          </Button>
                          <Button size="sm" onClick={handleWhatsApp} className="whatsapp-button">
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Filial - Boa Vista/RR</h3>
                        <p className="text-muted-foreground mb-3">
                          Av. Ville Roy, 5618, Sala 15<br />
                          Boa Vista/RR<br />
                          CEP: 69301-000
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href="https://maps.google.com/?q=Av+Ville+Roy,+5618,+Boa+Vista"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver no Mapa
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Filial - Rosana/SP</h3>
                        <p className="text-muted-foreground mb-3">
                          Rua do Estádio, 619, Quadra 108<br />
                          Bairro Primavera, Rosana/SP<br />
                          CEP: 19274-000
                        </p>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href="https://maps.google.com/?q=Rua+do+Estádio,+619,+Rosana"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver no Mapa
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;