import { useState, useEffect} from "react";
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
  const [startTime, setStartTime] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // animação de scroll suave
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 800;
    const animateScroll = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, start - start * ease);
      if (elapsed < duration) requestAnimationFrame(animateScroll);
    };
    requestAnimationFrame(animateScroll);
  }, []);

  // iniciar tempo de preenchimento (para evitar spam)
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const validateForm = () => {
    const { name, email, phone, message, consent } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = phone.replace(/\D/g, "");

    if (name.trim().length < 3) {
      toast({ title: "Nome inválido", description: "Digite seu nome completo.", variant: "destructive" });
      return false;
    }
    if (!emailRegex.test(email)) {
      toast({ title: "E-mail inválido", description: "Verifique o formato do e-mail.", variant: "destructive" });
      return false;
    }
    if (phoneDigits.length < 10) {
      toast({ title: "Telefone inválido", description: "Informe um número válido com DDD.", variant: "destructive" });
      return false;
    }
    if (message.trim().length < 10) {
      toast({ title: "Mensagem curta", description: "Descreva melhor sua necessidade (mínimo 10 caracteres).", variant: "destructive" }, );
      return false;
    }
    if (!consent) {
      toast({
        title: "Consentimento necessário",
        description: "Você precisa aceitar os termos de privacidade para enviar o formulário.",
        variant: "destructive"
      });
      return false;
    }
    if (startTime && Date.now() - startTime < 5000) {
      toast({
        title: "Envio muito rápido",
        description: "Aguarde alguns segundos antes de enviar o formulário.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Nossa equipe responderá em breve."
      });

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
      setStartTime(Date.now());
    } catch {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // formatação simples de telefone
  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const match = digits.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (!match) return value;
    const [, ddd, part1, part2] = match;
    return [ddd && `(${ddd})`, part1, part2 && `-${part2}`].filter(Boolean).join(" ");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5518997852512?text=Olá! Gostaria de falar com a equipe da HME.", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="hero-overlay text-white section-padding text-center">
          <div className="container">
            <h1 className="mb-6 animate-fade-in">Fale Conosco</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Entre em contato conosco e transforme a realidade da sua instituição!
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container grid lg:grid-cols-2 gap-12">
            {/* FORMULÁRIO */}
            <Card className="flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Envie sua mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                    <form
                      className="space-y-4"
                      action="https://script.google.com/macros/s/AKfycbziZS0zDF2s581wlAksZAT23CkbGRdZuwtATnnrTp8kx9PNx0TUMyJbhA6sIHSjd679/exec"
                      method="POST"
                      target="invisible_iframe"
                      onSubmit={handleSubmit}>                  
                    <div className="grid md:grid-cols-2 gap-4">
                      
                    <div>
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={80}
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={100}
                        placeholder="exemplo@dominio.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
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
                        maxLength={15}
                        value={formData.phone}
                        onChange={(e) => {
                          const input = e.target.value;

                          // Permite apagar sem travar e remove caracteres não numéricos
                          const numbersOnly = input.replace(/\D/g, "");

                          // Aplica a máscara progressiva
                          let formatted = numbersOnly;
                          if (numbersOnly.length > 2 && numbersOnly.length <= 6) {
                            formatted = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
                          } else if (numbersOnly.length > 6 && numbersOnly.length <= 10) {
                            formatted = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 6)}-${numbersOnly.slice(6)}`;
                          } else if (numbersOnly.length > 10) {
                            formatted = `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 7)}-${numbersOnly.slice(7, 11)}`;
                          }

                          setFormData((prev) => ({ ...prev, phone: formatted }));
                        }}
                      />

                    </div>
                    <div>
                      <Label htmlFor="institution">Instituição</Label>
                      <Input
                        id="institution"
                        name="institution"
                        type="text"
                        maxLength={100}
                        value={formData.institution}
                        onChange={(e) => handleInputChange("institution", e.target.value)}
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
                        maxLength={60}
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        maxLength={2}
                        placeholder=""
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value.toUpperCase())}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto *</Label>
                    <Select
                      name="subject"
                      onValueChange={(value) => handleInputChange("subject", value)}
                      required
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
                      maxLength={500}
                      placeholder="Descreva sua necessidade ou dúvida..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground text-right mt-2">
                      {formData.message.length}/500 caracteres
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", !!checked)}
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed">
                      Autorizo o uso dos meus dados pessoais conforme a{" "}
                      <a href="/politica-privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>. *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
